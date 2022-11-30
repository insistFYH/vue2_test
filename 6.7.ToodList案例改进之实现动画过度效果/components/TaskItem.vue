<template>
  <li>
    <label>
      <!-- 此处v-model不建议 -->
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <span v-show="!todo.isEdit">{{ todo.name }}</span>
      <input
        type="text"
        ref="inputName"
        :value="todo.title"
        v-show="todo.isEdit"
        @blur="handleBlur(todo, $event)"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: 'TaskItem',
  props: ['todo'],
  methods: {
    handleCheck(id) {
      this.$bus.$emit('checkChange', id)
    },
    handleDelete(id) {
      if (confirm('确定要删除该项吗？')) pubsub.publish('deleteTodo', id) //this.$bus.$emit('deleteTodo', id)
    },
    handleEdit(todo) {
      if (todo.hasOwnProperty('isEdit')) {
        todo.isEdit = true
      } else {
        this.$set(todo, 'isEdit', true)
      }
      this.$nextTick(function () {
        this.$refs.inputName.focus()
      })
    },
    handleBlur(todo, e) {
      todo.isEdit = false
      if (!e.target.value.trim()) alert('输入不能为空！')
      this.$bus.$emit('updateTodo', todo.id, e.target.value)
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>
