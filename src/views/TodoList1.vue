<template>
  <b-container fluid 
  class="bg-grape min-vh-100 p-3 p-md-4 d-flex justify-content-center align-items-start">
  <b-container style="max-width: 550px;">
    <b-jumbotron class="d-flex flex-column justify-content-center align-items-start bg-dark-grape text-light font-weight-bold shadow-lg mb-2 mt-5 p-4 p-md-5"
    style="min-height: 300px; border-radius: 33px 33px 5px 33px;">
      <h1 class="font-weight-light display-4 mb-3">todo<span class="text-muted">list</span></h1>
      <div class="col-lg-12 d-flex flex-wrap flex-md-nowrap w-100 pb-3 order-2 order-md-1">
        <!-- <b-button variant="purple" class="me-2">
          Tasks <b-badge class="bg-light text-dark">{{ this.tasks.length }}</b-badge>
        </b-button> -->
        <button type="button" class="btn btn-purple position-relative me-2">
          Tasks
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {{ this.tasks.length }}
            <span class="visually-hidden">Task list</span>
          </span>
        </button>

        <!-- <b-button variant="pink" class="me-2">
          Complete <b-badge class="bg-light text-dark">{{ tasks.filter(task => task.completed == true).length }}</b-badge>
        </b-button> -->
        <button type="button" class="btn btn-pink position-relative me-2">
          Done
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {{ tasks.filter(task => task.completed == true).length }}
            <span class="visually-hidden">Task list</span>
          </span>
        </button>

        <!-- <b-button variant="lavender">
          Remaining <b-badge class="bg-light text-dark">{{ tasks.filter(task => task.completed == false).length }}</b-badge>
          Remaining <b-badge variant="light">{{ incompleteTasks.length }}</b-badge>
        </b-button> -->
        <button type="button" class="btn btn-lavender position-relative me-2">
          To do
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {{ tasks.filter(task => task.completed == false).length }}
            <span class="visually-hidden">Task list</span>
          </span>
        </button>
      </div>

      <div class="input-group mb-3 mt-2 order-2 order-md-1">
        <button 
        :class="newTask.length == 0 ? 'btn-outline-light' : 'btn-light'" 
        class="btn w-25"
        type="button" 
        id="button-addon1"
        @click="addTask">Button</button>
        <input 
        v-model="newTask"
        class="form-control w-75 bg-dark-grape text-light border-light"
        @keyup.enter="addTask"
        type="text" 
        placeholder="Add new todo..." 
        aria-label="Add a new task to your todo list" 
        aria-describedby="button-addon1">
      </div>
    </b-jumbotron>

    <b-row class="my-1 mx-0 px-0 pb-4 pt-0">
      <b-col lg="12" class="px-0">
        <b-list-group>
          <b-list-group-item 
          v-for="(task, index) in tasks" :key="index"
          :class="task.completed ? 'bg-pink text-grape font-italic text-strike' : 'text-light bg-dark-grape'" 
          class="d-flex justify-content-start align-items-center mb-2 p-0 border-0 shadow swing-in"
          style="border-radius: 25px 0.3rem 0.3rem 25px; transition: all .3s ease">
            <!-- :class="{ completed : task.completed }" check tasks array ? completed == true -->
            <div class="p-3">
              <p class="m-0 p-0">{{ task.name }}</p>
            </div>
            <!-- completed/remove buttons -->
            <b-button-group class="d-flex ms-auto">
              <b-button class="p-3" variant="pink" @click="toggleComplete(task);">
                <b-icon icon="check" font-scale="1.5"></b-icon>
              </b-button>
              <b-button class="p-3" variant="lavender" @click="removeTask(index)">
                <b-icon icon="x" font-scale="1.5"></b-icon>
              </b-button>
            </b-button-group>
          </b-list-group-item>

          <!-- completed tasks -->

          <!-- <b-list-group-item 
          v-for="(item, index) in completeTasks" :key="index"
          :class="item.completed ? 'bg-pink text-grape font-italic text-strike' : 'text-light bg-dark-grape'" 
          class="d-flex justify-content-start align-items-center mb-2 p-0 border-0 shadow swing-in"
          style="border-radius: 25px 0.3rem 0.3rem 25px; transition: all .3s ease">
            <div class="p-3">
              <p class="m-0 p-0">{{ item.name }}</p>
            </div>
            <b-button-group class="d-flex ms-auto">
              <b-button class="p-3" variant="pink" @click="toggleComplete(item);">
                <b-icon icon="check" font-scale="1.5"></b-icon>
              </b-button>
              <b-button class="p-3" variant="lavender" @click="removeTask(item)">
                <b-icon icon="x" font-scale="1.5"></b-icon>
              </b-button>
            </b-button-group>
          </b-list-group-item> -->

          <!-- if no tasks... -->
          <h3 class="display-4 text-light fade-in mt-3" 
          style="letter-spacing: -2px;"
          v-if="this.tasks.length == 0">Add a task...</h3>
        </b-list-group>
        
      </b-col>
    </b-row>
  </b-container>
  </b-container>
</template>


<script>
// const moveItem = (array, to, from) => {
//       const item = array[from];
//       array.splice(from, 1);
//       array.splice(to, 0, item);
//       return array;
//   }

  let id = 0;

  export default {
    name: 'Home',
    data() {
      return {
        tasks: [{
            id: id++,
            name: 'Clean the fridge',
            completed: false,
          },
          {
            id: id++,
            name: 'Walk the dogs',
            completed: false,
          },
          {
            id: id++,
            name: 'Buy a new pedal',
            completed: false,
          },
        ],
        newTask: '',
        // pinned: false,
        pinArray: [],
        completedClass: null,
      }
    },
    computed: {
      completeTasks() {
        return this.tasks.filter(task => task.completed)
      },
      incompleteTasks() {
        return this.tasks.filter(task => !task.completed)
      }
    },
    methods: {
      addTask() {
        if(this.newTask.length) {
          // use unshift to add new task to front/top of list
          this.tasks.unshift({
            // id: this.tasks.length + 1, => adds 1 to the existing length of the array to get a unique number
            id: id++, // increments the id variable
            name: this.newTask,
            completed: false
          });
        }
        this.newTask = ''
      },
      toggleComplete(task) {
        task.completed = !task.completed
        // move completed element to end of array X need to toggle it back if marked incomplete
        // this.tasks.push(this.tasks.splice(this.tasks.indexOf(task), 1)[0]);
       
      //  const completed = [...this.tasks, task]
       console.log("complete firing")
      },
      removeTask(index) {
        // in the tasks array, at the index of the current item selected, remove 1 item = itself
        this.tasks.splice(index, 1);
      },
    },
    mounted() {}
  }
</script>

<style scoped>
.media-aside {
  margin-right: 0;
}

.text-strike {
  text-decoration: line-through;
}
</style>