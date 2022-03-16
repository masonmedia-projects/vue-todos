<template>
    <div class="w-100">
        <todo v-for="(todo, index) in todos" :key="index" :todo="todo"
        :completeClass="completed ? 'bg-warning text-danger' : ''"
        @toggle-complete="toggleComplete(todo)"
        @delete-todo="deleteTodo(index)" 
        @modal-close="$bvModal.hide(todo.id)"></todo>
    </div>
</template>

<script>
import Todo from './Todo.vue'

export default {
    name: 'TodoList',
    components: {
        Todo
    },
    props: [
        'todos'
    ],
    data() {
        return {
            completed: false,
        }
    },
    methods: {
        deleteTodo(index) {
            this.todos.splice(index, 1);
        },
        toggleComplete(todo) {
            todo.done = !todo.done;
            console.log(todo.done)
        },
    }
}
</script>