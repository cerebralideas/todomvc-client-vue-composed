<script>
import { mapActions } from 'redux-vuex';

export default {
    props: {
        todos: Array,
        todoCount: Object
    },
    methods: mapActions('clearCompleted')
};
</script>

<template>
    <button
        v-if="todos.length - todoCount.num > 0"
        class="clear-completed"
        @click="clearCompleted()"
    >
        Clear completed
    </button>
</template>
