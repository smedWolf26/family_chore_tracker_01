import { defineStore } from 'pinia'

export const useChoreStore = defineStore('choreStore', {
  state: () => ({
    chores: [],
  }),

  getters: {
    leaderboard: (state) => {
      const scores = {}

      state.chores.forEach((chore) => {
        if (chore.completedBy) {
          scores[chore.completedBy] = (scores[chore.completedBy] || 0) + 1
        }
      })

      return Object.entries(scores)
        .map(([name, score]) => ({ name, score }))
        .sort((a, b) => b.score - a.score)
    },
  },

  actions: {
    addChore(text) {
      if (!text) return

      this.chores.push({
        id: Date.now(),
        text,
        completed: false,
        completedBy: null,
      })
    },

    completeChore(id, person) {
      const chore = this.chores.find((c) => c.id === id)
      if (chore) {
        chore.completed = true
        chore.completedBy = person
      }
    },

    deleteChore(id) {
      this.chores = this.chores.filter((c) => c.id !== id)
    },
  },
})
