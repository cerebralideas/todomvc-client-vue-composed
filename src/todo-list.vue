<script>
	import { mapState } from 'redux-vuex';
	import todoItem from './todo-item.vue';

	export default {
		components: { todoItem },
		computed: {
			filteredTodos: function () {
				switch (this.filter) {
					case 'show_all':
						return this.todos;
					case 'show_active':
						return this.todos
							.filter((todo) => !todo.completed);
					case 'show_completed':
						return this.todos
							.filter((todo) => todo.completed)
					default:
						return this.todos;
				}
			}
		},
		data: mapState('todos', 'filter')
	}
</script>

<template>
	<ul>
		<todo-item
			v-for="todo in filteredTodos"
			v-bind:todo="todo"
			:key="todo.id">
		</todo-item>
	</ul>
</template>