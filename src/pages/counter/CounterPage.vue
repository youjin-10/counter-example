<template>
  <div class="max-w-md mx-auto text-center">
    <router-link to="/contents">api 호출하러 가기</router-link>
    <CounterTitle :counterNum="counterStore.counterNumber" />
    <div class="mt-5">
      <PrimaryButton text="UP" @click-event="increaseNumber" />
      <DefaultButton text="DOWN" @click-event="decreaseNumber" />
    </div>
  </div>
</template>

<script lang="ts">
import { useCounterStore } from './store/counter';
import { defineComponent } from 'vue';
import CounterTitle from './components/CounterTitle.vue';
import PrimaryButton from '../../components/Buttons/PrimaryButton.vue';
import DefaultButton from '../../components/Buttons/DefaultButton.vue';

export default defineComponent({
  setup() {
    const counterStore = useCounterStore();
    return { counterStore };
  },
  components: {
    PrimaryButton,
    DefaultButton,
    CounterTitle,
  },
  methods: {
    increaseNumber() {
      this.counterStore.increment();
    },
    decreaseNumber() {
      this.counterStore.decrement();
    },
  },
});
</script>

<style scoped></style>
