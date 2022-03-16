<template>
  <b-container fluid class="min-vh-100 p-4 d-flex justify-content-center align-items-start bg-lavender">

    <b-container class="d-flex flex-column justify-content-center align-items-center"
    style="max-width: 700px">
      <b-jumbotron class="w-100 bg-lavender font-weight-bold shadow-lg mb-2 mt-5 px-4 px-md-5"
      style="border-radius: 33px 33px 5px 33px;">
        <h1 class="font-weight-light display-4 mb-3">todo<span class="text-muted">list</span></h1>
        <div class="d-flex pb-3">
          <b-button variant="purple" class="mr-2">
            Todos <b-badge variant="light">{{ this.todos.length }}</b-badge>
          </b-button>
          <b-button variant="pink" class="mr-2">
            Complete <b-badge variant="light">{{ todos.filter(todo => todo.done == true).length }}</b-badge>
          </b-button>
          <b-button variant="grape">
            Remaining <b-badge variant="light">{{ todos.filter(todo => todo.done == false).length }}</b-badge>
          </b-button>
        </div>
        <b-row class="mx-0">
          <b-col lg="12" class="px-0 rounded-0">
            <b-media class="mr-0">
              <template #aside>
                <b-button variant="purple"
                class="px-4 py-2" 
                style="border-radius: 10px 0 0 10px;" 
                :disabled="newTodo.length == 0"
                @click="addTodo">Add</b-button>
              </template>
              <input v-model="newTodo" placeholder="Add new todo" 
              class="p-2 w-100 rounded-right border border-light"
              @keyup.enter="addTodo" />
            </b-media>
          </b-col>
        </b-row>
      </b-jumbotron>

      <b-row align-v="center" class="w-100 pt-3">
        <todo-list :todos="todos"></todo-list>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import TodoList from'../components/todos/TodoList.vue'

export default {
  name: 'About',
  components: {
    TodoList
  },
  data() {
    return {
      newTodo: '',
      todos: [
                {
                  id: "1",
                  title: 'Todo A',
                  done: false,
                }, 
                {
                  id: "2",
                  title: 'Todo B',
                  done: false,
                }, 
                {
                  id: "3",
                  title: 'Todo C',
                  done: false,
                }, 
                {
                  id: "4",
                  title: 'Todo D',
                  done: false,
                }
            ],
      }
    },
    methods: {
      addTodo() {
        if(this.newTodo.length) {
          this.todos.unshift({
            id: this.todos.length + 1,
            title: this.newTodo,
            done: false
          })
          this.newTodo = ''
        }
      },
    }
  }
</script>
