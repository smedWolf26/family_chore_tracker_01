<script setup>
import { useChoreStore } from '@/stores/choreStore'
const store = useChoreStore()
</script>

<template>
  <div class="mb-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
    <h2 class="mb-2 text-xl font-semibold">Family Chores Leaderboard</h2>

    <ul class="space-y-1">
      <li
        v-for="entry in store.leaderboard"
        :key="entry.name"
        class="rounded bg-gray-300 p-2"
      >
        {{ entry.name }} — {{ entry.score }} points
      </li>
    </ul>
  </div>
</template>
