export interface dbExperience {
  period: string,
  periodo:string,
  title: string,
  titulo: string,
  position: string,
  posicion: string,
  description: string,
  descripcion: string,
  tech: string[],
  deploy?:string
}

export interface dbProyects {
  image: string|null,
  deploy: string|null,
  title: string,
  titulo?:string,
  description: string,
  descripcion: string,
  tech: string[]
  repo:string
}
