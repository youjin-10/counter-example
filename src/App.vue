<template>
  <div class="max-w-md mx-auto text-center">
    <CounterTitle :counterNum="counterStore.counterNumber" />
    <div class="mt-5">
      <PrimaryButton text="UP" @click-event="increaseNumber" />
      <DefaultButton text="DOWN" @click-event="decreaseNumber" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCounterStore } from './store/counter';
import PrimaryButton from './components/Buttons/PrimaryButton.vue';
import DefaultButton from './components/Buttons/DefaultButton.vue';
import CounterTitle from './components/CounterTitle.vue';

export default defineComponent({
  setup() {
    const counterStore = useCounterStore();

    return {
      counterStore,
    };
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
