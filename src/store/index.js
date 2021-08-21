import { reactive, readonly } from "vue";

const state = reactive({
  counter: 0,
  colorCode: "blue",
});

const methods = {
  increaseNumber() {
    state.counter++;
  },
  decreaseNumber() {
    state.counter--;
  },
  changeColorCode(color) {
    state.colorCode = color;
  },
};

const getters = {
  counterSquared() {
    return state.counter * state.counter;
  },
};

export default {
  state: readonly(state),
  methods,
  getters,
};
