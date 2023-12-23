import { dbExperience, dbProyects } from "./interfaces";

export const experienceDb: dbExperience[] = [
  {
    period: "Dec",
    periodo: "Dic",
    title: "Frontend Software Development",
    titulo: "Desarrollador Frontend",
    position: "Aximo-Tech",
    posicion: "Aximo-Tech",
    description: "Frontend development of company's CRM version 2.0 ",
    descripcion: "Desarrollo de la version 2.0 del CRM de la empresa",
    tech: ["Astro", "React.js", "typescript"],
  },
  {
    period: "Nov",
    periodo: "Dec",
    title: "Back End Developer",
    titulo: "Desarrollador Back End",
    position: "Doctor Qali",
    posicion: "Doctor Qali",
    description:
      "Development of a backend system for a Whatsapp Bot that allows scheduling medical appointments with specialists in various fields.",
    descripcion:
      "Desarrollo de un sistema de backend para un Bot de Whatsapp que permite agendar citas médicas con especialistas en diversas áreas.",
    tech: ["NestJs", "MongoDB", "typescript"],
  },
  {
    period: "Oct-Nov",
    periodo: "Oct-Nov",
    title: "Techno Apes VOD app MVP",
    titulo: "Techno Apes VOD app MVP",
    position: "Web development internship",
    posicion: "Desarrollador Web pasantia",
    description:
      "Development of an on-demand video application for customer training on the company's services. We work with cloud services (AWS) using the serverless framework, Node.js, React.js, and TypeScript.",
    descripcion:
      "Desarrollo de aplicacion de videos on demand para capacitacion de clientes a los servicios de la empresa. Trabajamos con servicios cloud (AWS) con el framework serverless, NodeJs, ReactJs y Typescript.",
    tech: ["NextJs", "AWS", "microservices", "typescript", "react-query"],
  },
];

export const proyectsDB: dbProyects[] = [
  {
    image: null,
    deploy: null,
    title: "Crypto-watcher app",
    description:
      "Small application to monitor the prices of specified cryptocurrencies, and notify with an Email when the cryptocurrency reaches the expected price ",
    descripcion:
      "Pequeña aplicacion para vigilar los precios de las criptomonedas especificadas y envia notificaciones via Email cuando la criptomoneda alcanza el precio especificado",
    repo: "https://github.com/RodrigoSpano/crypto-watcher-api.git",
    tech: ["ExpressJs", "Typescript", "Node-cron", "coinmarketcap-api"],
  },
  {
    image: "/assets/proyects/pigcommander.jpeg",
    deploy: null,
    title: "PigCommander Finance App",
    description:
      "Development of a personal finance application that allows users to record their monthly income and expenses, automate expenses, record investments, set savings goals, view news and much more. In particular, my responsibilities included implementing user authentication and authorization, as well as automating and managing transactions and global state. Thanks to my contribution, the application has innovative features and an improved user experience",
    descripcion:
      "Desarrollo de una aplicación de finanzas personales que permite a los usuarios registrar sus ingresos y gastos mensuales, automatizar gastos, registrar inversiones, establecer metas de ahorro, ver noticias y mucho más. En particular, mis responsabilidades incluyeron implementar la autenticación y autorización de usuarios, así como automatizar y gestionar transacciones y el estado global. Gracias a mi contribución, la aplicación cuenta con características innovadoras y una mejor experiencia de usuario.",
    repo: "https://github.com/RodrigoSpano/pig_commander_client.git",
    repo2: "https://github.com/RodrigoSpano/pig_commander_api.git",
    tech: ["NextJs", "Express", "PostgreSQL", "Redux", "TailwindCSS"],
  },
  {
    image: "/assets/proyects/spotify.jpeg",
    deploy: null,
    title: "Spotify Profile Panel",
    description:
      "Small app where you can see your most listened artists and songs of the year, also your playlists, filter and order them.",
    descripcion:
      "Applicacion web donde puedes visualizar tus artistas y canciones mas escuchadas durante el año, tambien ver tus playlist, ordenarlas y filtrarlas",
    repo: "https://github.com/RodrigoSpano/spotify_panel_client",
    repo2: "https://github.com/RodrigoSpano/spotify_panel_api",
    tech: ["NextJs", "Zustand", "Spotify-api", "ExpressJs"],
  },
  {
    image: null,
    deploy: null,
    title: "Youtube Videos Converter",
    descripcion:
      "Pequeña app que permite descargar videos o audios de youtube.",
    description:
      "Small app that allows you to download videos or audios from Youtube.",
    repo: "https://github.com/RodrigoSpano/video_converter_api.git",
    tech: ["Express", "ytdl-core", "Typescript"],
  },
  {
    image: null,
    deploy: null,
    title: "Ecommerce Backend",
    description: "Backend app for an ecommerce built with Express and MongoDB",
    descripcion:
      "Aplicacion backend para una tienda online desarrollada con Express y BongoDB",
    repo: "https://github.com/RodrigoSpano/ecommerce-backend.git",
    tech: ["ExpressJs", "javascript", "MongoDB", "Passport"],
  },
  {
    image: "/assets/proyects/nftlanding.jpeg",
    deploy: "https://nfts-collection-landing.vercel.app/",
    title: "NFTs marketplace Landing page",
    descripcion:
      "Landing page para visualizar los diferentes precios en ETH de una coleccion de NFTs, utilice animaciones 2D y modelos 3D.",
    description:
      "Landing page to display the different prices in ETH of a collection of NFTs, using 2D animations and 3D models.",
    repo: "https://github.com/RodrigoSpano/ROOTS-challenge.git",
    tech: ["NextJs", "ThreeJs", "TailwindCSS", "Framer-motion"],
  },
  {
    image: "/assets/proyects/weather_app.jpeg",
    deploy: "https://weather-app-spano.vercel.app/",
    title: "Weather App",
    titulo: "Clima Aplicacion Web",
    descripcion:
      "Applicacion web para visualizar el clima en diferentes ubicaciones. Consumi la api de open Weather para poder acceder a la informacion climatica de cada ciudad.",
    description:
      "Web application to visualize weather in different locations. I consumed the Open Weather API to access the weather information of each city.",
    repo: "https://github.com/RodrigoSpano/Weather-app.git",
    tech: ["NextJs", "open-Weather api", "ChakraUI", "Framer-motion"],
  },
  {
    image: null,
    deploy: null,
    title: "RickAndMorty App",
    descripcion: "",
    description: "",
    repo: "https://github.com/RodrigoSpano/rickandmorty_integration.git",
    tech: [],
  },
  {
    image: null,
    deploy: null,
    title: "Portfolio v2(old)",
    descripcion: "",
    description: "",
    repo: "https://github.com/RodrigoSpano/portfolio2.0.git",
    tech: [],
  },
  {
    image: null,
    deploy: "https://pricing-component-rodrigo-spano.vercel.app/",
    title: "Pricing Component",
    descripcion: "",
    description: "",
    repo: "https://github.com/RodrigoSpano/Pricing-component-FrontEndMentor.git",
    tech: [],
  },
  {
    image: null,
    deploy: "https://fylo-landing-rodrigo-spano.vercel.app/",
    title: "Fylo Landing Page",
    descripcion: "",
    description: "",
    repo: "https://github.com/RodrigoSpano/Fylo-landing-frontEndMentor.git",
    tech: [],
  },
];
