<script setup>
import { useChoreStore } from '@/stores/choreStore'
const store = useChoreStore()
</script>

<template>
  <div class="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
    <h2 class="mb-3 text-lg font-medium text-emerald-700">Current chores</h2>

    <ul>
      <li
        v-for="chore in store.chores"
        :key="chore.id"
      >
        {{ chore.text }}
        <button
          e
          class="hover:bg-eme rounded-md bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800 transition-colors"
          @click="store.completeChore(chore.id, 'Family Member 1')"
        >
          Complete
        </button>

        <button @click="store.deleteChore(chore.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>
