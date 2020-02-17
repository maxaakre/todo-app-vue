<template>
  <div class="todo-item">
        <input type="checkbox" v-model="completed" @change="doneEdit">
    <div class="todo-item-left">
        <div v-if="!this.editing" @dblclick="editTodo" class="todo-item-label" :class="{ completed : completed }">{{ todo.title }}</div>
        <input v-else class="todo-item-edit" type="text" v-model="title" @blur="doneEdit" @keyup.enter="doneEdit" @keyup.esc="cancelEdit" v-focus>
      </div>
      <div class="remove-item" @click="removeTodo(todo.id)">
        &times;
      </div>
  </div>
    
</template>


<script>
export default {
name: 'todo-item',
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      'id': this.todo.id,
      'title': this.todo.title,
      'completed': this.todo.completed,
      'editing': this.todo.editing,
      'beforeEditCache': '',
    }
  },
  
directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
methods:{
     editTodo(){
         this.beforeEditCache = this.title
         this.editing = true
     },
     doneEdit(){
         if(this.title.trim().length == 0){
             this.title  = this.beforeEditCache
         }
         this.editing = false
         this.$emit('finishedEdit', {
        'id': this.id,
        'title': this.title,
        'completed': this.completed,
        'editing': this.editing,
      })
     },
      cancelEdit(){
         this.title = this.beforeEditCache
         this.editing = false
        
     },
     removeTodo(id){
         this.$emit('removedTodo', id)
     },
  
 },
  mounted() {
    console.log('App mounted!');
    if (localStorage.getItem('todos')) this.todos = JSON.parse(localStorage.getItem('todos'));
  },
  watch: {
    todos: {
      handler() {
        console.log('Todos changed!');
        localStorage.setItem('todos', JSON.stringify(this.todos));
      },
      deep: true,
    },

  },
}
</script>

<style scoped>

</style>