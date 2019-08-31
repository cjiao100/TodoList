<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <todo :todo="todo" @delItem="$emit('handleDelete', todo._id)" />
    </div>
  </div>
</template>

<script>
import Todo from "./Todoitem";

export default {
  components: {
    Todo
  },
  props: {
    todos: Array
  }
};
</script>

<style>
</style>