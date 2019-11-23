<script>
	import todoForm from './todo-form.vue';
	import todoItem from './todo-item.vue';
	import todoFilters from './todo-filters.vue';

	export default {
		components: {
			todoForm,
			todoItem,
			todoFilters
		},
		props: {
			todos: Array,
			filter: String
		},
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
		}
	};
</script>

<template>
	<div>
		<todo-form v-on="$listeners"></todo-form>
		<ul>
			<todo-item
				v-for="todo in filteredTodos"
				v-bind:todo="todo"
				v-on="$listeners"
				:key="todo.id">
			</todo-item>
		</ul>
		<todo-filters></todo-filters>
	</div>
</template>
