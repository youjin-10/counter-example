<template>
  <div class="animate-pulse flex space-x-4">
    <div class="flex-1 space-y-3 py-1">
      <div class="h-2 bg-slate-200 rounded w-[350px]"></div>
      <div class="h-2 bg-slate-200 rounded w-[350px]"></div>
      <div class="h-2 bg-slate-200 rounded w-[350px]"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
