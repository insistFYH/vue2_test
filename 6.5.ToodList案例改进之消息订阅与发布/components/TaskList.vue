<template>
  <ul class="todo-main">
    <TaskItem v-for="todo of todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script>
import TaskItem from './TaskItem'
export default {
  name: 'TaskList',
  components: {
    TaskItem
  },
  props: ['todos']
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
