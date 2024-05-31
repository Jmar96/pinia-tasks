import { defineStore } from "pinia";


export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            { id: 1, title: "Buy Some Milk", isFav: false },
            { id: 2, title: "Play Gulaman", isFav: false },
            { id: 3, title: "Play APEX", isFav: true },
            { id: 4, title: "Drink Buko", isFav: true },
            { id: 5, title: "Eat Buko", isFav: true }
        ],
        name: 'Yoshi'
    }),
    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav)
        },
        favCount() {
            return this.tasks.reduce((p, c) => {
                return c.isFav ? p + 1 : p
            }, 0)
        },
        totalCount: (state) => {
            return state.tasks.length
        }
    },
    actions: {
        addTask(task){
            this.tasks.push(task)
        },
        deleteTask(id){
            this.tasks = this.tasks.filter(t => {
                return t.id !== id
            })
        },
        toggleFav(id){
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav
        }
    }
})