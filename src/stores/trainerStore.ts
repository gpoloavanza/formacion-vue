import type { AssignedPokemon } from "@/interfaces/pokemon";
import type { Trainer, CreateTrainer } from "@/interfaces/trainer";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTrainerStore = defineStore('trainers', () => {
    const trainers = ref<Trainer[]>([])
    
    loadFromLocalStorage()

    function createTrainer(trainerData: CreateTrainer) {
        const newTrainer: Trainer = {
            ...trainerData,
            id: Date.now(),
            

        }
        trainers.value.push(newTrainer)

        saveToLocalStorage()
    }

    function saveToLocalStorage() {
        const trainersJson = JSON.stringify(trainers.value)
        localStorage.setItem('trainers', trainersJson)
    }

    function loadFromLocalStorage() {
        const data = localStorage.getItem('trainers')

        if (data){
        const parsedData = JSON.parse(data) as Trainer[]
        trainers.value = parsedData
        }
    }

    function assignPokemon(
        trainerId: number, 
        pokemon: AssignedPokemon
    ) {
        const trainer = trainers.value.find(
            trainer => trainer.id === trainerId
        )

        if (!trainer) {
            return
        }     
        
        trainer.assignedPokemon = pokemon
        saveToLocalStorage()

    } 
    
    function deleteTrainer(trainerId: number) {
        trainers.value = trainers.value.filter(
            trainer => trainer.id !== trainerId
        )

        saveToLocalStorage()
    }

    return {trainers, createTrainer, assignPokemon, deleteTrainer} 

})