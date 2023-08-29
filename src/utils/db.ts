import { dbExperience } from "./interfaces";

export const experienceDb: dbExperience[] = [
  {
    period: 'Aug-Sept',
    periodo: 'Ago-Sept',
    title: 'PigCommander Finance App',
    titulo: 'PigCommander App de Finanzas',
    position: 'Web development',
    posicion: 'Desarrollador Web',
    description: "Development of a personal finance application that allows users to record their monthly income and expenses, automate expenses, record investments, set savings goals, view news and much more. In particular, my responsibilities included implementing user authentication and authorization, as well as automating and managing transactions and global state. Thanks to my contribution, the application has innovative features and an improved user experience",
    descripcion: 'Desarrollo de una aplicación de finanzas personales que permite a los usuarios registrar sus ingresos y gastos mensuales, automatizar gastos, registrar inversiones, establecer metas de ahorro, ver noticias y mucho más. En particular, mis responsabilidades incluyeron implementar la autenticación y autorización de usuarios, así como automatizar y gestionar transacciones y el estado global. Gracias a mi contribución, la aplicación cuenta con características innovadoras y una mejor experiencia de usuario.',
    tech: ['NextJs', 'Express', 'PostgreSQL', 'Redux', 'TailwindCSS'],
    deploy: 'https://pig-commander-client-beta.vercel.app/'
  }
]