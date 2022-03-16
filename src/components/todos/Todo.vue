<template>
    <div>
        <b-media key="1" right-align vertical-align="center"
        class="rounded-lg shadow p-3 mb-3"
        :class="todo.done ? 'bg-grape text-light text-strike' : 'bg-lavender'"
        v-show="!isEditing">
            <template #aside>
                <b-button class="p-2 mr-2" :variant="todo.done ? 'pink' : 'purple'" @click="toggleComplete(todo)">
                  <b-icon v-if="todo.done" icon="check2-all" font-scale="1.5"></b-icon>
                  <b-icon v-else icon="check2" font-scale="1.5"></b-icon>
                </b-button>
                <b-button class="p-2 mr-2" variant="purple" @click="showForm">
                  <b-icon icon="pencil" font-scale="1.5"></b-icon>
                </b-button>
                <b-button class="p-2" variant="purple" @click="deleteTodo(todo)">
                  <b-icon icon="trash" font-scale="1.5"></b-icon>
                </b-button>
            </template>
            <div>
                <p class="h5 py-3 m-0">{{ todo.title }}</p>
            </div>
        </b-media>
        <!-- edit mode -->
        <b-media key="2" right-align vertical-align="center" 
        class="bg-lavender shadow p-3 mb-3 py-4"
        v-show="isEditing">
            <template #aside>
                <b-button class="p-2" variant="pink" @click="hideForm">
                  <b-icon icon="x" font-scale="1.5"></b-icon>
                </b-button>
            </template>
            <div class="d-flex">
                <input type='text' class="mr-2 border-right-0 border-top-0 border-left-0 border-bottom border-secondary bg-lavender" 
                v-model="todo.title" />
                <!-- <input type='text' class="mr-2 border-right-0 border-top-0 border-left-0 border-bottom border-secondary bg-lavender" 
                v-model="todo.project" /> -->
            </div>
        </b-media>
    </div>

    <!-- <b-card :title="todo.title" class="p-3 mr-2 mb-2 shadow">
        <div class="content" v-show="!isEditing">
            <div class='header'>
                {{ todo.title }}
            </div>
            <div class='meta'>
                {{ todo.project }}
            </div>
            <div class='extra content'>
                <span class='right floated edit icon' v-on:click="showForm">
                    <b-icon icon="pencil-square" variant="dark" font-scale="1"></b-icon>
                </span>
                <b-icon icon="trash" variant="dark" font-scale="1"></b-icon>
            </div>
        </div> -->
        <!-- form is visible when we are in editing mode -->
        <!-- <div class="content" v-show="isEditing">
            <div class='ui form'>
                <div class='field'>
                <label>Title</label>
                <input type='text' v-model="todo.title" />
                </div>
                <div class='field'>
                <label>Project</label>
                <input type='text' v-model="todo.project" />
                </div>
                <div class='ui two button attached buttons'>
                <button class='ui basic blue button' v-on:click="hideForm">
                    Close X
                </button>
                </div>
            </div>
        </div> -->

        <!-- <b-button class='' variant="success" v-show="!isEditing && todo.done" disabled>
            Completed
        </b-button>
        <b-button class='' variant="danger" v-show="!isEditing && !todo.done">
            Completed
        </b-button>
    </b-card> -->
</template>

<script>
export default {
    name: 'Todo',
    props: [
        'todo',
        'completeClass'
    ],
    data() {
        return {
            isEditing: false,
        }
    },
    methods: {
        showForm() {
            this.isEditing = true;
        },
        hideForm() {
            this.isEditing = false;
        },
        deleteTodo(todo) {
            this.$emit('delete-todo', todo)
        },
        toggleComplete(todo) {
            this.$emit('toggle-complete', todo)
        }
    }
}
</script>