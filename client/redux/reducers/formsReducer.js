let moment = require("moment");
let currentTime = moment()
  .locale("ru")
  .format("D MMMM YYYY");

const initialState = {
  checkbox: false,
  forms: [
    {
      heading: "",
      mainText: "",
      image: "",
      buttonName: "",
      caption: "",
      currentTime: currentTime
    }
  ]
};

export default function formsReducer(state = initialState, action) {
  switch (action.type) {
    case "CHECKBOX_SWITCH":
      return { ...state, checkbox: !action.payload };
    case "REMOVE_BLOCK":
      let resultRemove = state.forms.filter((_, i) => i !== action.payload);
      return { forms: resultRemove };
    case "ADD_BLOCK":
      return { ...state, forms: [...state.forms, action.payload] };
    case "ADD_TEXT":
      let result = state.forms;
      result[action.payload.id][action.payload.name] = action.payload.value;
      return { ...state, forms: result };
    case "ADD_HEADING":
      return {
        ...state,
        ["form" + action.payload.id]: {
          heading: action.payload.heading,
          mainText: action.payload.mainText
        }
      };
    default:
      return state;
  }
}
