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
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
    <h2 class="mb-3 text-lg font-medium text-purple-700">Add a chore</h2>
    <div class="flex gap-2">
      <input
        v-model="text"
        placeholder="Chore description"
        class="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
      />

      <button @click="addChore">Add</button>
    </div>
  </div>
</template>
``
