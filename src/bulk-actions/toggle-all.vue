<script>
import { sendBulkComplete } from './bulk.events';

export default {
    methods: {
        toggleAll: () => sendBulkComplete()
    }
};
</script>

<template>
    <div>
        <input id="toggle-all" type="checkbox" class="toggle-all" @change="toggleAll()" />
        <label for="toggle-all">
            <span class="a11y-text">Toggle all</span>
        </label>
    </div>
</template>
