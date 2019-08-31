const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatorTodoInput(data) {
  let error = {};

  data.title = !isEmpty(data.title) ? data.title : "";

  if (!Validator.isLength(data.title, { min: 2, max: 15 })) {
    error.title = "内容不得少于2，且不得大于15";
  }

  if (Validator.isEmpty(data.title)) {
    error.title = "内容不得为空";
  }

  return {
    error,
    isValid: isEmpty(error)
  };
};
