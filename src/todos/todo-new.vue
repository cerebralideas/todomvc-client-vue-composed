<script>
import { sendNewTodo } from './todo.events';

export default {
    data: function() {
        return {
            newTodo: ''
        };
    },
    methods: {
        submitTodo: async function(newTodo) {
            if (newTodo.trim()) {
                const message = await sendNewTodo(newTodo);
                if (message === 'success') {
                    this.newTodo = '';
                }
            }
        }
    }
};
</script>

<template>
    <form name="todoForm" @submit.prevent="submitTodo(newTodo)">
        <label class="a11y-text" for="newTodo">
            New Todo
        </label>
        <input
            id="newTodo"
            v-model="newTodo"
            class="new-todo"
            type="text"
            placeholder="What needs to be done?"
        />
    </form>
</template>
