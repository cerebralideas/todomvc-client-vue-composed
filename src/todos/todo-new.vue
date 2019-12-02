<script>
import { mapActions } from 'redux-vuex';

export default {
    data: function() {
        return {
            newTodo: ''
        };
    },
    methods: mapActions({
        submitTodo: function({ dispatch, actions }, newTodo) {
            dispatch(actions.addTodo(newTodo));
            this.newTodo = '';
        }
    })
};
</script>

<template>
    <form name="todoForm" @submit.prevent="submitTodo(newTodo)">
        >
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
