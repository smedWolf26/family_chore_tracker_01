<script setup>
import LeaderBoard from './components/LeaderBoard.vue'
import AddChore from './components/AddChore.vue'
import ChoreList from './components/ChoreList.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-100 px-4 py-8">
    <h1 class="mb-1 text-center text-3xl font-medium text-purple-700">🏠 Family Chore Tracker</h1>
    <p class="mb-8 text-center text-sm text-gray-400">Everyone pitches in!</p>
    <div class="mx-auto max-w-lg space-y-4">
      <LeaderBoard />
      <ChoreList />
      <AddChore />
    </div>
  </div>
</template>
