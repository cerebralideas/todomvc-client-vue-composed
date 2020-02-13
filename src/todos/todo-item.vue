<script>
import { sendTodoEdit } from './todo.events';
export default {
    props: { todo: Object },
    methods: {
        modifyTodo: function(editType, id) {
            sendTodoEdit(editType, id);
        }
    }
};
</script>

<template>
    <li :class="todo.completed ? 'completed' : ''">
        <div class="view">
            <input
                :id="todo._id"
                class="toggle"
                type="checkbox"
                :checked="todo.completed"
                @change="modifyTodo('complete', todo._id)"
            />
            <label :for="todo._id">
                {{ todo.title }}
            </label>
            <button class="destroy" @click="modifyTodo('delete', todo._id)">
                <span class="a11y-text">Delete todo</span>
            </button>
        </div>
    </li>
</template>
