<script>
import todoNew from './todos/todo-new.vue';

export default {
    components: {
        todoNew
    }
};
</script>

<template>
    <header class="header">
        <h1>todos</h1>
        <todo-new></todo-new>
    </header>
</template>
