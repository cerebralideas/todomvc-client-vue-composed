# Heavily-Composed Vue TodoMVC Example

## Intention

Like many Web applications, it's quite common to choose a library or framework (Vue.js in this instance) and base all architectural decisions around that library or framework. The danger of this is that your application becomes dangerously coupled to that choice.

In most Vue applications, you see Vuex for state management, Vue Router for routing, Vue Axios for AJAX ... by the end of the project, every functional concern of your app is based on Vue. This makes the initial part of the application development process fast, but it can severely limit your ability to evolve the application to change over time.

What do you do if the next "best" library comes out, and it's incompatible with Vue? That's why I'm experimenting with architectural composition. Each functional concern is solved with an agnostic, composable library. I call this a heavily-composed application architecture.

## Progress

- [ ] Feature: complete the remainder of TodoMVC functionality
- [ ] Feature: Add official TodoMVC look and feel through official packages
- [ ] Feature: Add data persistence using LocalStorage
- [ ] Feature: Add "complete all" and "clear completed" functionality
- [ ] Feature: Add client-side routing
- [x] Tech: Switch to Redux (Toolkit) and Redux Vuex for state management ([HEAD](https://github.com/cerebralideas/todomvc-client-vue))
- [x] Feature: Add a basic "store" with complete and delete functionality to todos [[1](#vues-reactive-system)] ([#cc42f14](https://github.com/cerebralideas/todomvc-client-vue/commit/cc42f14e8a30287b439a8b30fc6c76126fce1cd0))
- [x] Initial: Get a super-basic todo list using `.vue` components working with plain Vue ([#fd23440](https://github.com/cerebralideas/todomvc-client-vue/commit/fd23440cdc833741d64dc2e134aaee15c5ec32ae))

## Up and Running

1. Install the dependencies found in the `package.json`
2. Build the project

  ```
  npm install
  npm run build
  ```

3. Open `public/index.html` in your browser.

## A client SPA composed with Vue

Here's the full tech-stack that we've chosen to execute this idea:

- **JavaScript**: transpiled using Babel
- **Vue**: the view layer for handling rendering and binding UI events
- **Redux**: State Management [[2](#why-not-vuex)]
- **Immer**: build into Redux Toolkit, but deserves a shout-out
- **Redux-Vuex**: Redux Vue bindings to provide seamless Redux integration into the Vue library.

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

## Larning Redux (Toolkit)

Basic Redux has some great documentation at their main site here: http://redux.js.org/. It's good to know the [core principles of Redux](https://redux.js.org/introduction/motivation). The important thing to know in this project is it's designed as a library/environment agnostic state management system. It's mostly seen with React, but it can be used with Vue as well (with a Vue binding library, that is).

Here are some links you may find helpful:

- [Egghead.io video tutorials](https://egghead.io/series/getting-started-with-redux)
- [Original TodoMVC from which this was made](https://github.com/reactjs/redux/tree/master/examples/todomvc)

### Redux Toolkit

Using the Redux library without any help can be cumbersome and verbose. It's also hard for those new to FP to "wrap the head around" core concepts (read purity, immutability, reducers). This is where the Redux Toolkit comes in handy. You can find the official documentation here: https://redux-toolkit.js.org.

> Includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more.
>
> The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:
>
> - "Configuring a Redux store is too complicated"
> - "I have to add a lot of packages to get Redux to do anything useful"
> - "Redux requires too much boilerplate code"

Here are some links you may find helpful:

- [Official "Basic Tutorial"](https://redux-toolkit.js.org/tutorials/basic-tutorial)
- [Official "Intermediate Tutorial"](https://redux-toolkit.js.org/tutorials/intermediate-tutorial)

## How it works

Coming soon ...

## Footnotes

### Vue's reactive system

Vue's "reactivity" for state management doesn't allow common immutable data patterns. One example is any operation on arrays and objects that result in a new assignment, rather than property mutation. For example, `todos[i] = updatedTodo;`.

### Why not Vuex?

For a few reasons:

- Vuex requires Vue; it is not library agnostic
- Vuex and Vue relies on data mutation, which I believe is bad practice

Change is the only constant. Yet, why do we choose our libraries as if the choices we make today will never go stale? I strongly believe that X framework, whatever it is, will not always be the "best" framework for the project, so we should architect our applications to allow for as much flexibility to accommodate the inevitable change.

Decoupling the core functional responsibilities of your app from each other is one way to mitigate the disruption change can have on your application. So, Redux provides the decoupling between functional concerns: view versus state management.
