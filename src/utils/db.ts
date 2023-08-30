import { dbExperience, dbProyects } from "./interfaces";

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

export const proyectsDB: dbProyects[] = [
  {
    image: '/assets/proyects/pigcommander.jpeg',
    deploy: 'https://pig-commander-client-beta.vercel.app/',
    title: "PigCommander Finance App",
    description: "Development of a personal finance application that allows users to record their monthly income and expenses, automate expenses, record investments, set savings goals, view news and much more. In particular, my responsibilities included implementing user authentication and authorization, as well as automating and managing transactions and global state. Thanks to my contribution, the application has innovative features and an improved user experience",
    descripcion: 'Desarrollo de una aplicación de finanzas personales que permite a los usuarios registrar sus ingresos y gastos mensuales, automatizar gastos, registrar inversiones, establecer metas de ahorro, ver noticias y mucho más. En particular, mis responsabilidades incluyeron implementar la autenticación y autorización de usuarios, así como automatizar y gestionar transacciones y el estado global. Gracias a mi contribución, la aplicación cuenta con características innovadoras y una mejor experiencia de usuario.',
    repo: 'https://github.com/RodrigoSpano/pig_commander_client.git',
    tech: ['NextJs', 'Express', 'PostgreSQL', 'Redux', 'TailwindCSS']
  },
  {
    image: '/assets/proyects/weather_app.jpeg',
    deploy: 'https://weather-app-spano.vercel.app/',
    title: 'Weather App',
    titulo: 'Clima Aplicacion Web',
    descripcion: 'Applicacion web para visualizar el clima en diferentes ubicaciones. Consumi la api de open Weather para poder acceder a la informacion climatica de cada ciudad.',
    description: 'Web application to visualize weather in different locations. I consumed the Open Weather API to access the weather information of each city.',
    repo: 'https://github.com/RodrigoSpano/Weather-app.git',
    tech: ['NextJs', 'open-Weather api', 'ChakraUI', 'Framer-motion']
  },
  {
    image: '/assets/proyects/portfolio2.0.jpeg',
    deploy: 'https://rodrigospano-portfolio-old.vercel.app/',
    title: "Rodrigo Spano Portfolio 2.0",
    description: 'An old portfolio built with vite.js and typescript',
    descripcion: 'Un portfolio viejo creado con ViteJs y Typescript',
    repo: 'https://github.com/RodrigoSpano/portfolio2.0.git',
    tech: ['ViteJs', 'Typescript', 'TailwindCSS', 'Framer-motion']
  },
  {
    image: '/assets/proyects/nftlanding.jpeg',
    deploy: 'https://nfts-collection-landing.vercel.app/',
    title: "NFTs marketplace Landing page",
    descripcion: 'Landing page para visualizar los diferentes precios en ETH de una coleccion de NFTs, utilice animaciones 2D y modelos 3D.',
    description: 'Landing page to display the different prices in ETH of a collection of NFTs, using 2D animations and 3D models.',
    repo: 'https://github.com/RodrigoSpano/ROOTS-challenge.git',
    tech: ['NextJs', 'ThreeJs', 'TailwindCSS', 'Framer-motion']
  },
]