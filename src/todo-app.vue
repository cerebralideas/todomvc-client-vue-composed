<script>
	import { mapState, mapActions } from 'redux-vuex';
	import todoForm from './todo-form.vue';
	import todoItem from './todo-item.vue';
	import toggleAll from './toggle-all.vue';
	import todoFooter from './todo-footer.vue';

	export default {
		components: {
			todoForm,
			todoItem,
			toggleAll,
			todoFooter
		},
		data: mapState('todos', 'filter'),
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
		methods: mapActions(
			'addTodo',
			'completeTodo',
			'deleteTodo'
		),
	};
</script>

<template>
	<div>
		<todo-form
			v-on:submit-todo="addTodo">
		</todo-form>
		<toggle-all></toggle-all>
		<ul>
			<todo-item
				v-for="todo in filteredTodos"
				v-bind:todo="todo"
				v-on:complete-todo="completeTodo"
				v-on:delete-todo="deleteTodo"
				:key="todo.id">
			</todo-item>
		</ul>
		<todo-footer></todo-footer>
	</div>
</template>
