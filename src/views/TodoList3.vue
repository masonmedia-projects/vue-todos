<template>
    <b-container fluid class="bg-black min-vh-100">
        <b-container class="p-4 p-md-5">
            <b-jumbotron 
            class="d-flex flex-column justify-content-center bg-charcoal text-secondary border border-secondary mt-5 mb-4 p-5"
            style="border-radius: 33px;"
            :style="this.todos.length == 0 ? 'min-height: 60vh;' : ''">
                <h1 class="display-3 font-weight-bold text-orange"
                style="letter-spacing: -3px">Todo<span class="font-weight-light text-light">List</span></h1>
                <p v-if="this.todos.length == 0" class="h4 font-weight-light pb-3 pr-5">This is a todo list app made with BootstrapVue and Vuex. It was inspired by <a class="text-orange font-weight-bold" href="https://romig.dev/blog/building-a-to-do-app-with-vue-and-vuex/" target="_blank">this</a> tutorial. It uses color pallettes from a great pallette combination site called <a class="text-orange font-weight-bold" href="https://www.happyhues.co/palettes/13" target="_blank">Happy Hues.</a> Please get started by adding some tasks to your list below.</p>
                <p v-else>A todo list application for daily tasks.</p>

                <b-row>
                    <b-col lg="12" class="mb-4">
                        <b-media class="mr-0">
                            <!-- <template #aside>
                            <b-button variant="outline-secondary" 
                            class="px-4 py-2"
                            style="border-radius: 10px 0 0 10px;" 
                            @click="addTodo">Add</b-button>
                            </template> -->
                            <input type="text" 
                            v-model="task" 
                            placeholder="Add a task"
                            style="border-bottom: 1px solid #6c757d !important; border-right: none; border-left: none; border-top: none;"
                            class="h4 p-2 w-100 bg-charcoal text-light"
                            @keyup.enter="addTodo" />
                        </b-media>
                    </b-col>
                </b-row>

                <div class="d-flex flex-wrap flex-md-nowrap">
                    <b-button variant="dark-orange d-block" class="me-2 mb-2" pill>
                        Tasks <b-badge class="bg-light text-dark">{{ this.todos.length }}</b-badge>
                    </b-button>
                    <b-button variant="orange" class="me-2 mb-2" pill>
                        Completed <b-badge class="bg-light text-dark">{{ this.todos.filter(todo => todo.completed).length }}</b-badge>
                    </b-button>
                    <b-button variant="hotpink" class="me-2 mb-2" pill>
                        Remaining <b-badge class="bg-light text-dark">{{ this.todos.filter(todo => todo.completed == false).length }}</b-badge>
                    </b-button>
                </div>
            </b-jumbotron>

            <!-- tasks grid -->
            
            <b-row>
                <b-col :lg="todos.length == 1 ? '12' : '4' && todos.length == 2 ? '6' : '4'" md="6"
                class="px-2" v-for="todo in todos" :key="todo.id">
                    <b-card header-tag="header" footer-tag="footer"
                    class="border border-secondary mb-3"
                    :class="todo.completed ? 'bg-grey text-strike shadow' : 'bg-charcoal text-light'"
                    style="border-radius: 33px;">
                    <b-card-text>
                        <h5 class="text-secondary">
                            <b-badge variant="secondary" class="rounded-pill font-weight-light border border-secondary text-secondary mb-3 px-3" style="background: transparent">#{{ todo.id }}</b-badge>
                        </h5>
                        <h5>{{ todo.task }}</h5>
                    </b-card-text>
                    <template #footer>
                        <div class="d-flex justify-content-end">
                            <b-button class="p-1 w-25 me-1" pill variant="orange" @click="toggleTodo(todo.id)">
                                <b-icon icon="check" font-scale="1.5"></b-icon>
                            </b-button>
                            <!-- add notes -->
                            <b-button class="p-1 w-25 me-1" pill variant="dark-orange" v-b-modal="todo.id.toString()">
                                <b-icon icon="pencil" font-scale="1"></b-icon>
                            </b-button>
                            <b-button class="p-1 w-25" pill variant="hotpink" @click="deleteTodo(todo.id)">
                                <b-icon icon="trash" font-scale="1.2"></b-icon>
                            </b-button>

                            <!-- modal -->

                            <b-modal :id="todo.id.toString()" centered :title="todo.task"
                            header-class="text-secondary border-secondary"
                            footer-class="border-secondary"
                            content-class="bg-charcoal text-light border border-secondary rounded-xl shadow">
                                <p class="mb-4">Notes on: {{ todo.task }}</p>
                                <b-form-textarea
                                class="bg-charcoal text-light border-secondary"
                                placeholder="Add task notes here..."
                                rows="6"
                                ></b-form-textarea>
                                <template #modal-footer>
                                    <b-button class="w-25 shadow" pill variant="dark-orange"
                                    @click="$bvModal.hide(todo.id.toString())">Close</b-button>
                                </template>
                            </b-modal>
                        </div>
                    </template>
                </b-card>
                </b-col>
            </b-row>

        </b-container>
    </b-container>
</template>

<script>
export default {
    name: 'TodoListThree',
    data() {
        return {
            // empty task to v-model
            task: '',
            newId: 0,
        }
    },
    computed:{
        todos() {
            return this.$store.getters.getTodos
        }
    },
    methods: {
        addTodo() {
            if(this.task.length) {
                this.$store.dispatch("addTodo", this)
                // this.todos.length + 1
                // this.newId++
                this.task = ''
            }
        },
        toggleTodo(id) {
            this.$store.dispatch("toggleTodo", id)
        },
        deleteTodo(id) {
            this.$store.dispatch("deleteTodo", id)
        },
        setLocalStorage() {
            const todoArray = JSON.stringify(this.todos);
            localStorage.setItem('tasks', todoArray) 
        },
        getLocalStorage() {
            const getStorage = JSON.parse(localStorage.getItem('tasks'))
            console.log(getStorage)
            return getStorage
        }
    },
    mounted() {
        this.setLocalStorage();
        this.getLocalStorage();
    }
}
</script>

<style scoped>
.card-footer {
    padding: 0.95rem 1.25rem;
    border-top: 1px solid #6c757d !important;
}
.form-control:focus {
    color: #495057;
    background-color: #0f0e17;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0;
}

/* .badge {
    display: inline-block;
    padding: 0.35em 0.65em;
    font-size: 0.75em;
    font-weight: 100;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
} */
</style>