<!-- <img src="/mm_vue_todos_screen.png"
alt="Todo list app homepage browser photo"
style="width: 100%; float: left; margin: 0 auto;" /> -->

![ScreenShot](https://github.com/masonmedia/vue-todos/blob/master/public/mm_vue_todos_screen.png)

# Vue Todo List App

A collection of functional Todo Lists with different UI treatments using BootstrapVue as well as Bootstrap 5.

## Project setup

Project uses Vue 2.6, Vue CLI, and Vue Router 3.2. Development based on this [article](https://romig.dev/blog/building-a-to-do-app-with-vue-and-vuex/).

## Deployment on gh-pages

Deployment tutorial and config from [here.](https://learnvue.co/tutorials/deploy-vue-to-github-pages)

- Add vue.config.js to root with code below using your repo name:

```module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/REPO_NAME/" : "/",
};```
- run build
- run `git add dist && git commit -m 'adding dist subtree`
- run `git subtree push --prefix dist origin gh-pages`