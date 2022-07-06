<template>
  <div class="max-w-md mx-auto text-center">
    <h1 class="text-gray-500 font-bold">{{ counterStore.counterNumber }}</h1>

    <div class="mt-5">
      <PrimaryButton text="UPppp" @click-event="increaseNumber" />
      <DefaultButton text="DOWN" @click-event="decreaseNumber" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCounterStore } from './store/counter';
import PrimaryButton from './components/Buttons/PrimaryButton.vue';
import DefaultButton from './components/Buttons/DefaultButton.vue';

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
