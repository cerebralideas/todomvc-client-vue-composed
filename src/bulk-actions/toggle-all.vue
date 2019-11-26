<script>
	import { mapActions } from 'redux-vuex';

	export default {
		methods: mapActions('toggleAll')
	};
</script>

<template>
	<div>
		<input
			type="checkbox"
			id="toggle-all"
			class="toggle-all"
			@change="toggleAll()" />
		<label for="toggle-all">
			<span class="a11y-text">Toggle all</span>
		</label>
	</div>
</template>