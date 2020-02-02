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
                :id="todo.id"
                class="toggle"
                type="checkbox"
                :checked="todo.completed"
                @change="modifyTodo('complete', todo.id)"
            />
            <label :for="todo.id">
                {{ todo.title }}
            </label>
            <button class="destroy" @click="modifyTodo('delete', todo.id)">
                <span class="a11y-text">Delete todo</span>
            </button>
        </div>
    </li>
</template>
