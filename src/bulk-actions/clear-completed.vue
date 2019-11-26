<script>
	import { mapActions } from 'redux-vuex';

	export default {
		props: {
			todos: Array,
			todoCount: Object
		},
		methods: mapActions('clearCompleted')
	}
</script>

<template>
	<button
		class="clear-completed"
		v-if="(todos.length - todoCount.num) > 0"
		@click="clearCompleted()">
		Clear completed
	</button>
</template>