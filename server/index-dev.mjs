import express from 'express';
import path from 'path';
import fs from 'fs';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import socket from 'socket.io';
import bodyParser from 'body-parser';
import logger from 'morgan';

import webpackConfig from '../webpack.config.babel.dev';
import expose from './expose.js'; // __dirname workaround
import db from '../db/db.js';

const { __dirname } = expose;
const port = process.env.PORT || 8080;

const app = express();
const compiler = webpack(webpackConfig);
const router = express.Router();
const server = app.listen(port, () => console.log('Running on localhost:' + port));
const io = socket(server);

io.on('connection', function(socket) {
	console.log('connect to socket');
});

app.use(
	webpackMiddleware(compiler, {
		hot: true,
		publicPath: webpackConfig.output.publicPath
	})
);
app.use(webpackHotMiddleware(compiler));
app.use('/', router);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './index.html'));
});

export default app;
