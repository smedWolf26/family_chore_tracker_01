<script setup>
import { useChoreStore } from '@/stores/choreStore'
const store = useChoreStore()
</script>

<template class="mb-4 rounded bg-gray-200 p-4 shadow">
  <div class="mb-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
    <h2>Current Chores</h2>
    <ul>
      <li
        v-for="chore in store.chores"
        :key="chore.id"
      >
        {{ chore.text }}
        <button @click="store.completeChore(chore.id, 'Player 1')">Complete</button>
        <button @click="store.deleteChore(chore.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>
