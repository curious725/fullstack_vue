import Vue from 'vue';
import { seedData } from './seed.js'

export const store = {
  state: {
    seedData
  },
  getActiveDay() {
    return this.state.seedData.find((day) => day.active);
  }
}
