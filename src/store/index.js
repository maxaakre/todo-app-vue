
import Vuex from 'vuex';
import Vue from 'vue';


// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  state:{
    todos: []
    
  },
  mutations:{
    
    addTodo(state,title){
      state.todos.push({
        id: Date.now(),
        title: title,
        completed:false,
        
      })
    },
    removeTodo(state,id){
      const index = state.todos.findIndex((item) => item.id == id)
      this.state.todos.splice(index, 1)
    },
    finishedEdit(state,data) {
      const index = state.todos.findIndex((item) => item.id == data.id)
      this.state.todos.splice(index, 1, data)
    },
    
    localStorage(state) {
      console.log('App mounted!');
      if (localStorage.getItem('todos')) 
      state.todos = JSON.parse(localStorage.getItem('todos'));
    },
    // watch: {
    //   todos: {
    //     handler(state) {
    //       console.log('Todos changed!');
    //       localStorage.setItem('todos', JSON.stringify(state.todos));
    //     },
        
    //   },
    // },
    
  },
  actions:{
    persist(context){
      console.log('Todos changed!');
      localStorage.setItem('todos', JSON.stringify(context.state.todos));  
    }
  }
  
})