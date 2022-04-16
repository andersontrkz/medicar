export interface Appointment {
  id: number,
  dia: string,
  horario: string,
  data_agendamento: string,
  medico: {
    id: number,
    crm: number,
    nome: string,
    especialidade: Specialty
  }
}

export interface Specialty {
  id: number;
  nome: string;
}
