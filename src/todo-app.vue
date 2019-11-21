<script>
	import todoForm from './todo-form.vue';

	export default {
		components: {
			todoForm
		},
		props: {
			todos: Array
		}
	};
</script>

<template>
	<div>
		<todo-form v-on="$listeners"></todo-form>
		<ul>
			<li v-for="todo in todos" :key="todo">{{ todo }}</li>
		</ul>
	</div>
</template>