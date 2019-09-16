<template>
  <div id="app">
    <!-- {{ msg }} -->
    <add-todo @handleAdd="handleAdd" />
    <todos :todos="todos" @handleDelete="handleDelete" />
  </div>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import axios from "axios";

export default {
  name: "app",
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      msg: "Hello",
      todos: []
    };
  },
  created() {
    axios
      .get("/api/todo/")
      .then(res => (this.todos = res.data))
      .catch(err => console.log(err));
  },
  methods: {
    handleDelete(id) {
      axios
        .delete(`/api/todo/del/${id}`)
        .then(
          res =>
            (this.todos = this.todos.filter(item => item._id !== res.data._id))
        )
        .catch(err => console.log(err));
    },
    handleAdd(item) {
      const { title, completed } = item;
      axios
        .post("/api/todo/add", {
          title,
          completed
        })
        .then(res => (this.todos = [res.data, ...this.todos]))
        .catch(err => console.log(err));
      // this.todos.unshift(item)
    }
  }
};
</script>