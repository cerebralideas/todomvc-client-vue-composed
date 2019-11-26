<script>
	import { mapActions, mapState } from 'redux-vuex';
	import clearCompleted from './bulk-actions/clear-completed.vue';
	import todoFilters from './filters/filters.vue';

	export default {
		components: {
			todoFilters,
			clearCompleted
		},
		computed: {
			todoCount: function () {
				let count = this.todos.reduce((prev, curr) => {
					if (!curr.completed) { prev++; }
					return prev;
				}, 0);

				return {
					num: count,
					word: count === 1 ? 'item' : 'items'
				}
			}
		},
		data: mapState('todos')
	};
</script>

<template>
	<footer class="footer">
		<span class="todo-count">
			<strong>{{ todoCount.num || 'No' }}</strong>
			{{ todoCount.word }} left
		</span>
		<todo-filters></todo-filters>
		<clear-completed
			v-bind:todos="todos"
			v-bind:todoCount="todoCount">
		</clear-completed>
	</footer>
</template>