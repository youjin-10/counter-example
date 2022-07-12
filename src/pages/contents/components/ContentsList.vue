<template>
  <div>
    <template v-if="contents?.length === 0">
      <p>데이터 없음</p>
    </template>
    <template v-else>
      <ul v-for="(content, i) in contents" :key="i">
        <li>ID: {{ content.id }}</li>
        <li>name: {{ content.customerName }}</li>
        <li>created: {{ content.createdAt }}</li>
      </ul>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Content } from '../../../interface';

export default defineComponent({
  setup() {
    return {};
  },
  props: {
    contents: Array<Content>,
  },
});
</script>

<style scoped></style>
