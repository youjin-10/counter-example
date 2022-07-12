import { setActivePinia, createPinia } from 'pinia';
import { useCounterStore } from '../src/pages/counter/store/counter';

// Unit testing a store
describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should increase', () => {
    const counter = useCounterStore();
    expect(counter.counterNumber).toBe(0);
    counter.increment();
    expect(counter.counterNumber).toBe(1);
  });

  it('should decrease', () => {
    const counter = useCounterStore();
    counter.increment();
    expect(counter.counterNumber).toBe(1);
    counter.decrement();
    expect(counter.counterNumber).toBe(0);
  });

  it('should not decrease', () => {
    const counter = useCounterStore();
    expect(counter.counterNumber).toBe(0);
    counter.decrement();
    expect(counter.counterNumber).toBe(0);
  });
});
