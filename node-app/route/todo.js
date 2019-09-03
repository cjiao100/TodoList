const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");

const Todo = require("../modules/todo");
const validatorTodoInput = require("../validation/todo");

router.get("/test", (req, res) => {
  res.json({
    msg: "post works"
  });
});

// 添加Todo
router.post("/add", (req, res) => {
  const { error, isValid } = validatorTodoInput(req.body);
  if (!isValid) {
    return res.status(400).json(error);
  }
  const todo = new Todo({
    title: req.body.title
  });

  todo.save().then(todo => res.json(todo));
});

// 获取Todo
router.get("/", (req, res) => {
  Todo.find()
    .sort({ date: -1 })
    .then(todos => res.json(todos))
    .catch(err => res.status(400).json({ notodo: err }));
});

// 删除Todo
router.delete("/del/:id", (req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(400).json(err));
});

// 更改Todo的状态
router.put("/update/:id", (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => {
      Todo.findByIdAndUpdate(
        { _id: req.params.id },
        { completed: !todo.completed },
        { new: true }
      )
        .then(item => res.json(item))
        .catch(err => res.status(404).json(err));
    })
    .catch(err => res.status(404).json(err));
});

module.exports = router;
