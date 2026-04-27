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
  <div class="mb-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
    <h2>Add a Chore</h2>

    <input
      v-model="text"
      placeholder="Chore description"
    />

    <button @click="addChore">Add</button>
  </div>
</template>
``
