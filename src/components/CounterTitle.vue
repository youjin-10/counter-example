<template>
  <h1 class="text-gray-500 font-bold text-3xl">{{ counterNum }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
  props: {
    counterNum: Number,
  },
});
</script>
