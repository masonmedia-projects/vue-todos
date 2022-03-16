<template>
  <div class="container-fluid bg-dark-orange">
    <div class="row d-flex align-items-start justify-content-center min-vh-100">
      <div
        id="input-banner"
        class="
          col-lg-6
          d-flex
          flex-column
          align-items-start
          justify-content-center
          bg-dark-grape
          top-0
          start-0
        "
      >
        <b-jumbotron
          class="
            d-flex
            flex-column
            justify-content-center
            align-items-start
            w-100
            text-light
            font-weight-bold
            p-4 p-md-5
          "
        >
          <h1 class="font-weight-light display-4 mb-3">
            todo<span class="text-muted">list</span>
          </h1>
          <!-- <div class="d-flex w-100 pb-3">
        <b-button variant="purple" class="me-2">
          Tasks <b-badge class="bg-light text-dark">{{ this.tasks.length }}</b-badge>
        </b-button>
        <b-button variant="pink" class="me-2">
          Complete <b-badge class="bg-light text-dark">{{ tasks.filter(task => task.completed == true).length }}</b-badge>
        </b-button>
        <b-button variant="lavender">
          Remaining <b-badge class="bg-light text-dark">{{ tasks.filter(task => task.completed == false).length }}</b-badge>
        </b-button>
      </div> -->

          <form class="row g-3 align-items-center w-100">
            <div class="col-12">
              <label class="visually-hidden" for="inlineFormInputGroupUsername"
                >Username</label
              >
              <div class="input-group flex-nowrap mb-3">
                <div class="input-group-text">Task</div>
                <input
                  v-model="newTask"
                  type="text"
                  class="
                    form-control
                    w-75
                    bg-dark-grape
                    text-light
                    border-light
                  "
                  placeholder="Task"
                  required
                />
              </div>
              <div class="input-group flex-nowrap">
                <div class="input-group-text">Description</div>
                <input
                  v-model="newTaskDescription"
                  type="text"
                  class="
                    form-control
                    w-75
                    bg-dark-grape
                    text-light
                    border-light
                  "
                  placeholder="Task description"
                  required
                />
              </div>
            </div>

            <div class="col-12">
              <button
                type="submit"
                :class="newTask.length == 0 ? 'btn-outline-light' : 'btn-light'"
                class="btn w-25 mt-2"
                @click.prevent="addTask"
              >
                Submit
              </button>
            </div>
          </form>
        </b-jumbotron>
      </div>

      <!-- task grid -->

      <div class="col-lg-6 offset-lg-6 mt-0 mt-lg-5 p-5">
        <div class="row">
          <div
            :class="tasks.length == 1 ? 'col-md-12' : 'col-md-6'"
            v-for="(task, index) in tasks"
            :key="index"
          >
            <b-card
              header-tag="header"
              footer-tag="footer"
              class="border border-secondary mb-3"
              :class="
                task.completed
                  ? 'bg-dark-orange border-dark text-strike shadow'
                  : 'bg-dark-grape text-light'
              "
              style="border-radius: 33px; min-height: 250px"
            >
              <b-card-text>
                <h5 class="text-secondary">
                  <b-badge
                    variant="secondary"
                    class="
                      rounded-pill
                      font-weight-light
                      border border-secondary
                      text-secondary
                      mb-3
                      px-3
                    "
                    style="background: transparent"
                    >#{{ task.id }}</b-badge
                  >
                </h5>
                <h5>{{ task.name }}</h5>
                <p class="small">{{ task.description }}</p>
              </b-card-text>
              <template #footer>
                <div class="d-flex justify-content-end">
                  <b-button
                    class="p-1 w-25 me-1"
                    pill
                    variant="orange"
                    @click="completeTask(task)"
                  >
                    <b-icon icon="check" font-scale="1.5"></b-icon>
                  </b-button>
                  <b-button
                    class="p-1 w-25"
                    pill
                    variant="hotpink"
                    @click="deleteTask(index)"
                  >
                    <b-icon icon="trash" font-scale="1.2"></b-icon>
                  </b-button>
                </div>
              </template>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList4",
  data() {
    return {
      tasks: [
        {
          id: "1",
          name: "Make some stuff",
          description: "Qui occaecat quis do veniam dolor adipisicing.",
          completed: false,
        },
        {
          id: "2",
          name: "Task in the box",
          description:
            "Tempor et ullamco nulla quis aliqua et deserunt et ut velit eu ex cupidatat.",
          completed: false,
        },
        {
          id: "3",
          name: "Todo list",
          description:
            "Ullamco aute duis ullamco excepteur ullamco officia amet incididunt qui labore mollit non pariatur id.",
          completed: false,
        },
        {
          id: "4",
          name: "Vue stuff",
          description: "Laboris proident nisi officia id nulla quis do fugiat.",
          completed: false,
        },
      ],
      newTask: "",
      newTaskDescription: "",
      // completedClass: null,
    };
  },
  methods: {
    addTask() {
      if (this.newTask.length && this.newTaskDescription.length) {
        this.tasks.unshift({
          id: this.tasks.length + 1,
          name: this.newTask,
          description: this.newTaskDescription,
          completed: false,
        });
      } else if (this.newTask.length == 0) {
        confirm("Please add a task");
      } else if (this.newTaskDescription.length == 0) {
        confirm("Please add a description");
      }
      this.newTask = "";
      this.newTaskDescription = "";
    },

    completeTask(task) {
      task.completed = !task.completed;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    filterTask() {
      this.tasks.forEach((task, index) => {
        if (task.completed == true) {
          this.tasks.splice(index, 1);
          this.tasks.unshift(task);
        }
      });
    },
  },
};
</script>

<style scoped>
#input-banner {
  position: fixed;
  min-height: 100vh;
}
@media (max-width: 991px) {
  #input-banner {
    position: relative;
    min-height: 400px;
  }
}
</style>