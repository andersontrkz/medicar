export interface Schedule {
    id: number,
    medico: Doctor,
    dia: string,
    horarios: string[]
}

export interface Doctor {
  id: number,
  crm: number,
  nome: string,
  especialidade: Specialty
}

export interface Specialty {
  id: number;
  nome: string;
}
