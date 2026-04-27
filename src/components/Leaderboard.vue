<script setup>
import { useChoreStore } from '@/stores/choreStore'
const store = useChoreStore()
</script>

<template>
  <div class="mb-4 rounded bg-gray-200 p-4 shadow">
    <h2 class="mb-2 text-xl font-semibold">Leaderboard</h2>

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
