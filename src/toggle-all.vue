<script>
	import { mapActions } from 'redux-vuex';

	export default {
		methods: mapActions('toggleAll')
	};
</script>

<template>
	<label for="toggle-all">
		<input type="checkbox"
			id="toggle-all"
			@change="toggleAll()" />
		Toggle all
	</label>
</template>