<script>
	import { mapActions, mapState } from 'redux-vuex';
	import todoFilters from './todo-filters.vue';

	export default {
		components: { todoFilters },
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
		data: mapState('todos'),
		methods: mapActions('clearCompleted')
	};
</script>

<template>
	<div>
		<p>
			<strong>{{ todoCount.num || 'No' }}</strong>
			{{ todoCount.word }} left
		</p>
		<todo-filters></todo-filters>
		<button
			v-if="(todos.length - todoCount.num) > 0"
			@click="clearCompleted()">
			Clear completed
		</button>
	</div>
</template>