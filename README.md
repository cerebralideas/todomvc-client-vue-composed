# Heavily-Composed Vue TodoMVC Example

## Intention

Like many Web applications, it's quite common to choose a library or framework (Vue.js in this instance) and base all architectural decisions around that library or framework. The danger of this is that your application becomes dangerously coupled to that choice.

In most Vue applications, you see Vuex for state management, Vue Router for routing, Vue Axios for AJAX ... by the end of the project, every functional concern of your app is based on Vue. This makes the initial part of the application development process fast, but it can severely limit your ability to evolve the application to change over time.

What do you do if the next "best" library comes out, and it's incompatible with Vue? That's why I'm experimenting with architectural composition. Each functional concern is solved with an agnostic, composable library. I call this a heavily-composed application architecture.

## Progress

- [ ] Add Redux Toolkit for state management
- [ ] Add complete and delete functionality to todos
- [x] Get a super-basic todo list using `.vue` components working with plain Vue ([HEAD](https://github.com/cerebralideas/todomvc-client-vue))

## Up and Running

1. Install the dependencies found in the `package.json`
2. Build the project

  ```
  npm install
  npm run build
  ```

3. Open `public/index.html` in your browser.

## A client SPA composed with Vue

Coming soon ...

Here's the full tech-stack that we've chosen to execute this idea:

- **JavaScript**: transpiled using Babel
- **Vue**: the V in MVC

#### A bit on the top 2:

> Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.
>
> _[Vue.js Introduction](https://vuejs.org/v2/guide/)_

## Learning Vue

The [Vue website](http://vuejs.org) is a great resource for getting started.

Here are some links you may find helpful:

- ["Official" Vue Video Tutorials](https://www.vuemastery.com/)
- [Vue Cookbook](https://vuejs.org/v2/cookbook/index.html)
- [Egghead Videos](https://egghead.io/courses/develop-basic-web-apps-with-vue-js)
- [Enterprise Boilerplate](https://github.com/chrisvfritz/vue-enterprise-boilerplate)

## How it works

Coming soon ...