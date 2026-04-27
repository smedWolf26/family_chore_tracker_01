import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useChoreStore = defineStore('choreStore', () => {
  const chores = ref([])

  const leaderboard = computed(() => {
    const scores = {}

    chores.value.forEach((chore) => {
      if (chore.completedBy) {
        scores[chore.completedBy] = (scores[chore.completedBy] || 0) + 1
      }
    })

    return Object.entries(scores)
      .map(([name, score]) => ({ name, score }))
      .sort((a, b) => b.score - a.score)
  })

  function addChore(text) {
    if (!text) return

    chores.value.push({
      id: Date.now(),
      text,
      completed: false,
      completedBy: null,
    })
  }

  function completeChore(id, person) {
    const chore = chores.value.find((c) => c.id === id)

    if (chore) {
      chore.completed = true
      chore.completedBy = person
    }
  }

  function deleteChore(id) {
    chores.value = chores.value.filter((c) => c.id !== id)
  }

  return { chores, leaderboard, addChore, completeChore, deleteChore }
})
