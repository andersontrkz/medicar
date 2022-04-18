import { Doctor } from "./doctor";

export interface Schedule {
    id: number,
    medico: Doctor,
    dia: string,
    horarios: string[]
}
