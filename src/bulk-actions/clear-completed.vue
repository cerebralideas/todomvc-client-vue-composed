<script>
import { sendBulkAction } from './bulk.events';

export default {
    props: {
        todos: Array,
        todoCount: Object
    },
    methods: {
        clearCompleted: () => sendBulkAction('clearCompleted')
    }
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
