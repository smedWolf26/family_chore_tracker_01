<script setup>
import { ref } from 'vue'
import { useChoreStore } from '@/stores/choreStore'

const store = useChoreStore()
const text = ref('')

function addChore() {
  store.addChore(text.value)
  text.value = ''
}
</script>

<template>
  <div>
    <h2>Add a Chore</h2>

    <input
      v-model="text"
      placeholder="Chore description"
    />

    <button @click="addChore">Add</button>
  </div>
</template>
``
