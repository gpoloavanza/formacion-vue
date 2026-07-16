import type { CreateTrainer } from "./trainer";

export type TrainerErrors =  Record<keyof CreateTrainer, string>

export type TrainerTouched = Record<keyof CreateTrainer, boolean>