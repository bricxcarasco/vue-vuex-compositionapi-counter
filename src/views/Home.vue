<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter" :style="{color: store.state.colorCode}">
      {{ store.state.counter }}
    </div>
    <div class="counter-squared">
      {{ store.state.counter }}
      <sup>2</sup> = {{ store.getters.counterSquared() }}
    </div>
    <div class="buttons">
      <button @click="store.methods.decreaseNumber">-</button>
      <button @click="store.methods.increaseNumber">+</button>
    </div>
    <div class="input">
      <input type="text" v-model="colorCode"  placeholder="Enter color code" />
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'

export default {
  name: 'Home',
  setup() {
    const store = inject('store')

    const colorCode = computed({
      get() {
        return store.state.colorCode
      },
      set(color){
        store.methods.changeColorCode(color)
      }
    })

    return {
      store,
      colorCode
    }
  }
}
</script>

<style scoped>
.counter {
  font-size: 80px;
}

.buttons button {
  font-size: 80px;
  width: 100px;
  margin: 0 10px;
} 
</style>
