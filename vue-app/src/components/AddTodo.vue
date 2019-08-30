<template>
  <div>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="title" placeholder="添加待办" />
      <button type="submit" class="btn">添加</button>
    </form>
  </div>
</template>

<script>
import uuid from 'uuid'

export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo(e) {
      // 取消默认事件
      // e.preventDefault();
      const newTodo = {
        // 生成一个ID值
        // id: uuid.v4(),
        title: this.title,
        completed: false
      };

      // 注册事件
      this.$emit("handleAdd", newTodo);

      this.title = ''
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 5px;
}

button {
  flex: 2;
}
</style>