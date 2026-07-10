import type { AssignedPokemon } from "./pokemon"

export interface Trainer {
    id: number
    name: string
    surname: string
    dni: string
    email: string
    assignedPokemon?: AssignedPokemon
}

export type CreateTrainer = Omit<Trainer, 'id' | 'assignedPokemon'>