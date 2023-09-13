import { dbExperience, dbProyects} from "./interfaces";

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
    repo2: 'https://github.com/RodrigoSpano/pig_commander_api.git',
    tech: ['NextJs', 'Express', 'PostgreSQL', 'Redux', 'TailwindCSS']
  },
  {
    image: '/assets/proyects/spotify.jpeg',
    deploy: null,
    title: "Spotify Profile Panel",
    descripcion: 'Small app where you can see your most listened artists and songs of the year, also your playlists, filter and order them.',
    description: 'Applicacion web donde puedes visualizar tus artistas y canciones mas escuchadas durante el año, tambien ver tus playlist, ordenarlas y filtrarlas',
    repo: 'https://github.com/RodrigoSpano/spotify_panel_client',
    repo2: 'https://github.com/RodrigoSpano/spotify_panel_api',
    tech: ['NextJs', 'Zustand', 'Spotify-api', 'ExpressJs']
  },
  {
    image: null,
    deploy: null,
    title: "Youtube Videos Converter",
    descripcion: 'Pequeña app que permite descargar videos o audios de youtube.',
    description: 'Small app that allows you to download videos or audios from Youtube.',
    repo: 'https://github.com/RodrigoSpano/video_converter_api.git',
    tech: ['Express', 'ytdl-core', 'Typescript']
  },
  {
    image: null,
    deploy: null,
    title: "Ecommerce Backend",
    description: 'Backend app for an ecommerce built with Express and MongoDB',
    descripcion: 'Aplicacion backend para una tienda online desarrollada con Express y BongoDB',
    repo: 'https://github.com/RodrigoSpano/ecommerce-backend.git',
    tech: ['ExpressJs', 'javascript', 'MongoDB', 'Passport']
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
    image: null,
    deploy: null,
    title: "RickAndMorty App",
    descripcion: '',
    description: '',
    repo: 'https://github.com/RodrigoSpano/rickandmorty_integration.git',
    tech: []
  },
  {
    image: null,
    deploy: null,
    title: "Portfolio v2(old)",
    descripcion: '',
    description: '',
    repo: 'https://github.com/RodrigoSpano/portfolio2.0.git',
    tech: []
  },
  {
    image: null,
    deploy: 'https://pricing-component-rodrigo-spano.vercel.app/',
    title: "Pricing Component",
    descripcion: '',
    description: '',
    repo: 'https://github.com/RodrigoSpano/Pricing-component-FrontEndMentor.git',
    tech: []
  },
  {
    image: null,
    deploy: 'https://fylo-landing-rodrigo-spano.vercel.app/',
    title: "Fylo Landing Page",
    descripcion: '',
    description: '',
    repo: 'https://github.com/RodrigoSpano/Fylo-landing-frontEndMentor.git',
    tech: []
  },
]