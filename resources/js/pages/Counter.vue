<!-- Login.vue -->
<template>
    <div>
        <p>Count: {{ store.count }}</p>
        <button
            @click="store.increment()"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Increment
        </button>
    </div>
</template>

<script setup>
import { useStore } from "../store";
const store = useStore();
</script>
