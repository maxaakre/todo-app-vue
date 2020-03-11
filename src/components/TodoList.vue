<template>
<div>
    <input type="text" class="todo-input" placeholder="What needs to be done" 
    v-model="newTodo"
    @keyup.enter="addTodo">

    
      <todo-item v-for="todo in todos" 
      :key="todo.id" :todo="todo" 
      @removedTodo="removeTodo" 
      @finishedEdit="finishedEdit"
      ></todo-item>
    
       
    
</div>
</template>

<script>
import TodoItem from "./TodoItem"
export default {
    name: 'todo-list',
    components:{
      TodoItem,
    },
 data() {
     return {
        newTodo: "",
        beforeEditCache: "",
       
     }
 }, computed: {
   todos() {
     return this.$store.state.todos
   }
 },

 methods:{
     addTodo(){
         if(this.newTodo.trim().length == 0){
             return 
         }
                 this.$store.commit('addTodo', this.newTodo)
                 
                 this.newTodo =''
                 this.idFortodo++;
                 
     },
  
     removeTodo(id){
        this.$store.commit('removeTodo', id)
     },
     
     finishedEdit(data) {
     this.$store.commit('finishedEdit', data)
    },
  
 },
  mounted() {
   this.$store.commit('localStorage')
  },
  watch: {
    todos: {
      handler() {
       this.$store.dispatch('persist')
      },
      deep: true,
    },
  },
 }
</script>


<style lang="scss">

.todo-input {
    width: 100%;
    padding: 10px 18px;
    font-size: 18px;
    margin-bottom: 16px;
    &:focus {
      outline: 0;
    }
  }

  .todo-item {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  
  }

    .remove-item {
    cursor: pointer;
    margin-left: 14px;
    &:hover {
      color: black;
    }
    .todo-item-left { // later
    display: flex;
    align-items: center;
  }
  .todo-item-label {
    padding: 10px;
    border: 1px solid white;
    margin-left: 12px;
  }
  .todo-item-edit {
    font-size: 40px;
    color: #2c3e50;
    margin-left: 12px;
    width: 100%;
    padding: 20px;
    
    border: 1px solid #ccc; //override defaults
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    &:focus {
      outline: none;
    }
  }

   .completed {
    text-decoration: line-through;
    color: grey;
    width: 100%;
  }
  }
</style>
