<template>
  <div class="todo-item" :class="{'is-complete': todo.completed}">
    <p>
      <input type="checkbox" @change="markComplate(todo_id)" :checked="todo.completed" />
      {{ todo.title }}
      <button class="del" @click="$emit('delItem', todo._id)">x</button>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    todo: Object
  },
  methods: {
    markComplate(id) {
      axios
        .put(`http://localhost:3000/api/todo/update/${id}`)
        .then(res => (this.todo.completed = !this.todo.completed))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  border-bottom: 1px #ccc dotted;
  padding: 10px;
}
.is-complete {
  text-decoration: line-through;
}
.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>