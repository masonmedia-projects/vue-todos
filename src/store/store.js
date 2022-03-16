import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
    // state holds the current data state on app load
 state: {
    todos: [
        {
            id: "1",
            task: "Learn Vue",
            completed: false
        },
        {
            id: "2",
            task: "Make GoodFood box",
            completed: false
        },
        {
            id: "3",
            task: "Sleep",
            completed: false
        },
    ],
 },

//  return the todos array (same as calling $store.state.todos)
 getters: {
     getTodos: state => state.todos
 },

// functions that directly change the state
 mutations: {
    ADD_TODO: (state, payload) => {
         const newTask = {
             id: payload.todos.length + 1,
             task: payload.task,
             completed: false,
         };

         console.log(newTask.id)
         state.todos.unshift(newTask)
     },
    TOGGLE_TODO: (state, payload) => {
        //  find the current item's id to target changing the completed value
         const item = state.todos.find(todo => todo.id == payload)
         item.completed = !item.completed
     },
    DELETE_TODO: (state, payload) => {
        const index = state.todos.findIndex(todo => todo.id == payload)
        state.todos.splice(index, 1)
    },
 },

//  functions that call the mutations
 actions: {
     addTodo: (context, payload) => {
        context.commit("ADD_TODO", payload)
     },
     toggleTodo: (context, payload) => {
         context.commit("TOGGLE_TODO", payload)
     },
     deleteTodo: (context, payload) => {
         context.commit("DELETE_TODO", payload)
     },
     deleteCompleted: (context, payload) => {
        context.commit("DELETE_COMPLETE", payload)
     }
 }
})