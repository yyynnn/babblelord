import express from 'express';
import path from 'path';
import fs from 'fs';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import bodyParser from 'body-parser';
import Handlebars from 'handlebars';

import webpackConfig from '../webpack.config.babel.dev';
import expose from './expose.js';

const { __dirname } = expose;
const app = express();
const port = process.env.PORT || 8080;
const compiler = webpack(webpackConfig);
const router = express.Router();
app.use(bodyParser.json());

app.use(
	webpackMiddleware(compiler, {
		hot: true,
		publicPath: webpackConfig.output.publicPath
	})
);
app.use(webpackHotMiddleware(compiler));

app.use('/', router);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './index-dev.html'));
});

app.listen(port, () => console.log('Running on localhost:' + port));

console.log(webpackConfig.output.publicPath);
