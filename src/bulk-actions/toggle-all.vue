<script>
import { sendBulkAction } from './bulk.events';

export default {
    methods: {
        toggleAll: () => sendBulkAction('completeAll')
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
