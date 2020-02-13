# Heavily-Composed Vue TodoMVC Example

## Intention

Like many Web applications, it's quite common to choose a library or framework (Vue.js in this instance) and base all architectural decisions around that library or framework. The danger of this is that your application becomes dangerously coupled to that choice.

In most Vue applications, you see VueX for state management, Vue Router for routing, Vue Axios for AJAX ... by the end of the project, every functional concern of your app is based on Vue. This makes the initial part of the application development process fast, but it can severely limit your ability to evolve the application to change over time.

What do you do if the next "best" library comes out, and it's incompatible with Vue? That's why I'm experimenting with architectural composition. Each functional concern is solved with an agnostic, composable library. I'll refer to this as a heavily-composed, Vue architecture.

## Progress

- [ ] Feature: Complete full testing suite
- [ ] Feature: Add Vue testing
- [ ] Feature: Add `vue-test-utils`
- [ ] Feature: complete the remainder of TodoMVC functionality
- [x] Tech: Add Mirage.js for mocking endpoints ([HEAD](https://github.com/cerebralideas/todomvc-client-vue))
- [x] Feature: Add remote data persistence with RESTful service ([#9d66af6](https://github.com/cerebralideas/todomvc-client-vue-composed/commit/9d66af621dbb82f1ea945c6234e923c54ffd961c))
- [x] Tech: Add Jest and Playwright for testing along with example unit and E2E tests ([#124eb5a](https://github.com/cerebralideas/todomvc-client-vue-composed/commit/124eb5af25ef2db952fec759cf67b1985fc6ebaf))
- [x] Tech: add Eslint, Prettier and Husky ([#ad83ce6](https://github.com/cerebralideas/todomvc-client-vue-composed/commit/ad83ce6dbbf991aab7f1de22929d5fb47fbf77c4))
- [x] Tech: replace page.js with router5 ([#7a3a960](https://github.com/cerebralideas/todomvc-client-vue-composed/commit/7a3a9605305b6e8731819f9c14a736af6eead517))
- [x] Feature: Add official TodoMVC look and feel through official packages ([#65e5f93](https://github.com/cerebralideas/todomvc-client-vue-composed/commit/65e5f93d4489386afd5e714876e210f89c0836ba))
- [x] Feature: Add data persistence using LocalStorage; reorganize files ([#787b2e5](https://github.com/cerebralideas/todomvc-client-vue-composed/commit/787b2e5dd769b7186f95d9607315424601cce571))
- [x] Feature: Add todo count, "complete all" and "clear completed" functionality ([#1a179c2](https://github.com/cerebralideas/todomvc-client-vue-composed/commit/1a179c29bd5a9a26d5c19678ad8db198d423e6f8))
- [x] Feature: Add client-side routing ([#9f27cff](https://github.com/cerebralideas/todomvc-client-vue-composed/commit/9f27cff8d8cbb070ce9519d486c308fce1e84332))
- [x] Tech: Switch to Redux (Toolkit) and Redux Vuex for state management ([#62599f9](https://github.com/cerebralideas/todomvc-client-vue-composed/commit/62599f9a9bad711b33aca8e97bc99e79e2bc37bf))
- [x] Feature: Add a basic "store" with complete and delete functionality to todos [[1](#1-vues-reactive-system)] ([#cc42f14](https://github.com/cerebralideas/todomvc-client-vue/commit/cc42f14e8a30287b439a8b30fc6c76126fce1cd0))
- [x] Initial: Get a super-basic todo list using `.vue` components working with plain Vue ([#fd23440](https://github.com/cerebralideas/todomvc-client-vue/commit/fd23440cdc833741d64dc2e134aaee15c5ec32ae))

## Up and Running

1. Install the dependencies found in the `package.json`
2. Build the project
3. Start the python "simple server"

  ```sh
  npm install
  npm run build
  npm run start
  ```

4. Open `localhost:8000` in your browser

## Development

```sh
npm install
npm run dev

# In a different terminal window
npm run start
```

Open `localhost:8000` in your browser.

## A client SPA composed with Vue

Here's the full tech-stack that we've chosen to execute this idea:

- **ES6+ JavaScript**: transpiled using Babel
- **Vue**: the view layer for handling rendering and binding UI events
- **Redux**: framework/library agnostic State Management [[2](#2-why-not-vuex)]
- **Redux-Toolkit**: a conventions-based Redux package for configuration and setup
- **Immer**: built into Redux-Toolkit, but deserves a shout-out
- **Redux-Vuex**: Redux Vue bindings to provide seamless Redux integration into the Vue library.
- **Router5**: Router5 is a framework and view library agnostic router [3](#3-why-not-vue-router)

## Learning the stack

### Vue

> Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.

The [Vue website](http://vuejs.org) is a great resource for getting started. The initial learning from Vue is quite easy. If you like building everything yourself, don't get caught on [the different builds of Vue](https://vuejs.org/v2/guide/installation.html#Explanation-of-Different-Builds). Some have the compiler in them, and some don't.

If you are not "precompiling" your templates (like me while learning), you will need the "full" version. I had to add the following to the Webpack config (and make sure to have `development` as the mode):

```js
resolve: {
  alias: {
    'vue$': 'vue/dist/vue.esm.js'
  }
}
```

Here are some links you may find helpful:

- ["Official" Vue Video Tutorials](https://www.vuemastery.com/)
- [Vue Cookbook](https://vuejs.org/v2/cookbook/index.html)
- [Egghead Videos](https://egghead.io/courses/develop-basic-web-apps-with-vue-js)
- [Enterprise Boilerplate](https://github.com/chrisvfritz/vue-enterprise-boilerplate)

### Redux

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

### Immer

This is packaged within the Redux Toolkit library, and helps you work with immutable data in a much more convenient way. From [the official docs](https://immerjs.github.io/immer/docs/introduction):

> Immer (German for: always) is a tiny package that allows you to work with immutable state in a more convenient way. It is based on the copy-on-write mechanism.
>
> The basic idea is that you will apply all your changes to a temporary draftState, which is a proxy of the currentState. Once all your mutations are completed, Immer will produce the nextState based on the mutations to the draft state. This means that you can interact with your data by simply modifying it while keeping all the benefits of immutable data.

Immutable state is one of the most important and key factors with reducing errand bugs within apps that have complex data management. It's also a key principle in Functional Programming and Redux.

### Redux-Vuex

By itself, Vue does not work natively with a non-Vuex state management library. Redux-Vuex fixes that by implementing the necessary bindings to allow Vue to react to Redux's state changes. There are two main libraries that offer such bindings:

- [`redux-vuex`](https://github.com/alexander-heimbuch/redux-vuex)
- [`vuejs-redux`](https://github.com/titouancreach/vuejs-redux)
- [`redux-vue`](https://github.com/nadimtuhin/redux-vue)

Redux-Vuex was chosen because I liked how it was similar to how Vuex is bound with Vue along with the simple, yet flexible `mapActions` and `mapState` utilities.

### Router5

Router5 is not a typical router. It doesn't have a relationship with "views" or "pages" to render. It, instead, outputs a state representation of the route (both previous route and current). This helps decouple routing from the rendering layer, and creates a rich understanding of the where the user is going, and where from where she came. This is critical in creating transitional or animating the result of routing.

[Page.js]() has a much smaller footprint and is bulletproof. It can essentially do the same thing, but it requires quite a bit of additional code. Router5 has this very interesting concept built right in. At PayPal, we used Page.js, to essentially created a router that converted a previous and current route state representation (params and path partials) that was managed in Redux.

From Router5:

> "Traditional" routing has been heavily influenced by server-side routing, which is stateless, while client-side routing is stateful. For more in-depth description of router5, look at [Understanding Router5](https://router5.js.org/introduction/core-concepts).

- [Official docs](https://router5.js.org)

## Footnotes

### 1. Vue's reactive system

Vue's "reactivity" for state management doesn't allow common immutable data patterns. One example is any operation on arrays and objects that result in a new assignment, rather than property mutation. For example, `todos[i] = updatedTodo;`.

### 2. Why not Vuex?

For a few reasons:

- Vuex requires Vue; it is not library agnostic
- Vuex and Vue relies on data mutation, which I believe is bad practice

Change is the only constant. Yet, why do we choose our libraries as if the choices we make today will never go stale? I strongly believe that X framework, whatever it is, will not always be the "best" framework for the project, so we should architect our applications to allow for as much flexibility to accommodate the inevitable change.

Decoupling the core functional responsibilities of your app from each other is one way to mitigate the disruption change can have on your application. So, Redux provides the decoupling between functional concerns: view versus state management.

A similar perspective was explained by Snipcart in this post about their Vue and Redux composition: [How We Use Redux & Redux-Observable with Vue](https://snipcart.com/blog/redux-vue).

### 3. Why not Vue-Router

For many of the same [reasons I didn't choose Vuex](#2-why-not-vuex). Routing often times starts simple, but over time and change in requirements, your routing table and all the transitions between states in flows can become very complicated to manage. By choosing an agnostic routing library, you can ensure it has the appropriate capability to handle your app's growth.

Once your routing logic becomes mature, you often have a lot of code supporting your app's functionality. If your view library needs to be changed, and your router is dependent on it, throwing away all of your routing code can be a large waste. So, by decoupling your routing from your view, you are able to evolve to changes easier, future proofing your code.
