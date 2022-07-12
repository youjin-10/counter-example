<template>
  <div>
    <router-link to="/">메인으로 가기</router-link>

    <template v-if="contentsStore.isLoading">
      <ContentsList
        v-if="contentsStore.contents"
        :contents="contentsStore.contents"
      />
      <div v-else>없어요..ㅜㅜ</div>
    </template>

    <template v-else>
      <SimpleSkeleton />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useContentsStore } from './store/contents';
import ContentsList from './components/ContentsList.vue';
import SimpleSkeleton from '../../components/Skeletons/SimpleSkeleton.vue';

export default defineComponent({
  setup() {
    const contentsStore = useContentsStore();
    return { contentsStore };
  },
  mounted() {
    this.getContents();
  },
  components: {
    ContentsList,
    SimpleSkeleton,
  },
  methods: {
    getContents() {
      this.contentsStore.fetchContents('yujhin1026@fooddddding.io');
    },
  },
});
</script>

<style scoped></style>
