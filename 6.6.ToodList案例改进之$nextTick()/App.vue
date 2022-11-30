<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <TaskHead @addTodo="addTodo" />
        <TaskList :todos="todos" />
        <TaskFoot :todos="todos" @checkAll="checkAll" @clearDone="clearDone" />
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
import TaskFoot from './components/TaskFoot.vue'
import TaskHead from './components/TaskHead.vue'
import TaskList from './components/TaskList.vue'
export default {
  name: 'App',
  components: { TaskHead, TaskList, TaskFoot },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods: {
    addTodo(todoObj) {
      this.todos.unshift(todoObj)
    },
    checkChange(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done
      })
    },
    deleteTodo(_, id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
    updateTodo(id, name) {
      // console.log(id, title)
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.name = name
      })
    },
    checkAll(done) {
      this.todos.forEach((todo) => (todo.done = done))
    },
    clearDone() {
      this.todos = this.todos.filter((todo) => !todo.done)
    }
  },
  mounted() {
    // this.$bus.$on('deleteTodo', this.deleteTodo),
    this.puId = pubsub.subscribe('deleteTodo', this.deleteTodo)
    this.$bus.$on('checkChange', this.checkChange)
    this.$bus.$on('updateTodo', this.updateTodo)
  },
  beforeDestroy() {
    pubsub.unsubscribe(puId)
    this.$bus.$off(['deleteTodo', 'updateTodo'])
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  margin-right: 5px;
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(78, 196, 243);
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn-edit:hover {
  color: #fff;
  background-color: rgb(13, 104, 139);
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
