import { dbExperience, dbProyects } from './interfaces';

export const experienceDb: dbExperience[] = [
  {
    period: 'Aug 2024 - Now',
    periodo: 'Ago 2024 - Ahora',
    title: 'DevOps',
    titulo: 'DevOps',
    position: 'Kopius Inc',
    posicion: 'Kopius Inc',
    descripcion:
      'Implementación de infraestructura como código (IaC) utilizando **Terraform** para la provisión y gestión de recursos en la nube. Configuración y mantenimiento de VPN Site-to-Site para interconectar la infraestructura en la nube con centros de datos on-premise, garantizando una comunicación segura y eficiente. Implementación de Transit Gateways para facilitar la conexión de VPCs en diferentes regiones de AWS, optimizando la conectividad entre redes dispersas. Creación y gestión de pipelines de CI/CD para automatizar el proceso de despliegue de imágenes de Docker modificadas a repositorios, asegurando actualizaciones rápidas y seguras. Automatización de la gestión de instancias y configuraciones de servidores mediante Ansible, mejorando la eficiencia operativa y reduciendo los errores manuales. Monitoreo de metricas del sistema, metricas de apache y logs de apache, utilizando grafana y sus respectivos agentes para colectar metricas.',
    description:
      'Implementation of Infrastructure as Code (IaC) using Terraform for provisioning and managing cloud resources. Configuration and maintenance of Site-to-Site VPNs to interconnect cloud infrastructure with on-premise data centers, ensuring secure and efficient communication. Implementation of Transit Gateways to facilitate the connection of VPCs across different AWS regions, optimizing connectivity between dispersed networks. Creation and management of CI/CD pipelines to automate the process of deploying modified Docker images to repositories, ensuring fast and secure updates. Automation of instance management and server configurations using Ansible, improving operational efficiency and reducing manual errors. Monitoring of system metrics, Apache metrics, and Apache logs using Grafana and its respective agents to collect metrics.',
    tech: ['AWS', 'Terraform', 'CI/CD', 'Docker', 'Kubernetes', 'Bash'],
  },
  {
    period: 'Dec 2023 - June 2024',
    periodo: 'Dic 2023 - Junio 2024',
    title: 'Frontend Software Development',
    titulo: 'Desarrollador Frontend',
    position: 'Aximo-Tech',
    posicion: 'Aximo-Tech',
    descripcion:
      'Como Desarrollador Frontend en Aximo-tech, me especializo en la creación y optimización de interfaces de usuario innovadoras, empleando un conjunto diverso de tecnologías como Astro, Next.js, React.js, TypeScript, TailwindCSS, Zustand y Storybook. Actualmente, lidero el desarrollo de la versión 2.0 del Software de la empresa, un proyecto que exige una colaboración estrecha con los equipos de backend y diseño para asegurar una implementación fluida y eficiente.',
    description:
      "As a Frontend Developer at Aximo-tech, I specialize in creating and optimizing innovative user interfaces, utilizing a diverse set of technologies such as Astro, Next.js React.js, TypeScript, TailwindCSS, Zustand, and Storybook. Currently, I lead the development of the company's Software version 2.0, a project that requires close collaboration with backend and design teams to ensure a seamless and efficient implementation.",
    tech: ['Astro', 'Next.js', 'typescript', 'Zustand', 'TailwindCss'],
  },
  {
    period: 'Nov - Dec',
    periodo: 'Nov - Dic',
    title: 'Back End Developer',
    titulo: 'Desarrollador Back End',
    position: 'Doctor Qali',
    posicion: 'Doctor Qali',
    description:
      'Development of a backend system for a Whatsapp Bot that allows scheduling medical appointments with specialists in various fields.',
    descripcion:
      'Desarrollo de un sistema de backend para un Bot de Whatsapp que permite agendar citas médicas con especialistas en diversas áreas.',
    tech: ['NestJs', 'MongoDB', 'typescript'],
  },
  {
    period: 'Oct-Nov',
    periodo: 'Oct-Nov',
    title: 'Techno Apes VOD app MVP',
    titulo: 'Techno Apes VOD app MVP',
    position: 'Software development internship',
    posicion: 'Desarrollador de software pasantia',
    description:
      "Development of an on-demand video application for customer training on the company's services. We work with cloud services (AWS) using the serverless framework, Node.js, React.js, and TypeScript.",
    descripcion:
      'Desarrollo de aplicacion de videos on demand para capacitacion de clientes a los servicios de la empresa. Trabajamos con servicios cloud (AWS) con el framework serverless, NodeJs, ReactJs y Typescript.',
    tech: ['NextJs', 'AWS', 'microservices', 'typescript', 'react-query'],
  },
];

export const proyectsDB: dbProyects[] = [
  {
    image: null,
    deploy: null,
    title: 'Crypto-watcher app',
    description:
      'Small application to monitor the prices of specified cryptocurrencies, and notify with an Email when the cryptocurrency reaches the expected price ',
    descripcion:
      'Pequeña aplicacion para vigilar los precios de las criptomonedas especificadas y envia notificaciones via Email cuando la criptomoneda alcanza el precio especificado',
    repo: 'https://github.com/RodrigoSpano/crypto-watcher-api.git',
    tech: ['ExpressJs', 'Typescript', 'Node-cron', 'coinmarketcap-api'],
  },
  {
    image: '/assets/proyects/pigcommander.jpeg',
    deploy: null,
    title: 'PigCommander Finance App',
    description:
      'Development of a personal finance application that allows users to record their monthly income and expenses, automate expenses, record investments, set savings goals, view news and much more. In particular, my responsibilities included implementing user authentication and authorization, as well as automating and managing transactions and global state. Thanks to my contribution, the application has innovative features and an improved user experience',
    descripcion:
      'Desarrollo de una aplicación de finanzas personales que permite a los usuarios registrar sus ingresos y gastos mensuales, automatizar gastos, registrar inversiones, establecer metas de ahorro, ver noticias y mucho más. En particular, mis responsabilidades incluyeron implementar la autenticación y autorización de usuarios, así como automatizar y gestionar transacciones y el estado global. Gracias a mi contribución, la aplicación cuenta con características innovadoras y una mejor experiencia de usuario.',
    repo: 'https://github.com/RodrigoSpano/pig_commander_client.git',
    repo2: 'https://github.com/RodrigoSpano/pig_commander_api.git',
    tech: ['NextJs', 'Express', 'PostgreSQL', 'Redux', 'TailwindCSS'],
  },
  {
    image: '/assets/proyects/spotify.jpeg',
    deploy: null,
    title: 'Spotify Profile Panel',
    description:
      'Small app where you can see your most listened artists and songs of the year, also your playlists, filter and order them.',
    descripcion:
      'Applicacion web donde puedes visualizar tus artistas y canciones mas escuchadas durante el año, tambien ver tus playlist, ordenarlas y filtrarlas',
    repo: 'https://github.com/RodrigoSpano/spotify_panel_client',
    repo2: 'https://github.com/RodrigoSpano/spotify_panel_api',
    tech: ['NextJs', 'Zustand', 'Spotify-api', 'ExpressJs'],
  },
  {
    image: null,
    deploy: null,
    title: 'Youtube Videos Converter',
    descripcion:
      'Pequeña app que permite descargar videos o audios de youtube.',
    description:
      'Small app that allows you to download videos or audios from Youtube.',
    repo: 'https://github.com/RodrigoSpano/video_converter_api.git',
    tech: ['Express', 'ytdl-core', 'Typescript'],
  },
  {
    image: null,
    deploy: null,
    title: 'Ecommerce Backend',
    description: 'Backend app for an ecommerce built with Express and MongoDB',
    descripcion:
      'Aplicacion backend para una tienda online desarrollada con Express y BongoDB',
    repo: 'https://github.com/RodrigoSpano/ecommerce-backend.git',
    tech: ['ExpressJs', 'javascript', 'MongoDB', 'Passport'],
  },
  {
    image: '/assets/proyects/nftlanding.jpeg',
    deploy: 'https://nfts-collection-landing.vercel.app/',
    title: 'NFTs marketplace Landing page',
    descripcion:
      'Landing page para visualizar los diferentes precios en ETH de una coleccion de NFTs, utilice animaciones 2D y modelos 3D.',
    description:
      'Landing page to display the different prices in ETH of a collection of NFTs, using 2D animations and 3D models.',
    repo: 'https://github.com/RodrigoSpano/ROOTS-challenge.git',
    tech: ['NextJs', 'ThreeJs', 'TailwindCSS', 'Framer-motion'],
  },
  {
    image: '/assets/proyects/weather_app.jpeg',
    deploy: 'https://weather-app-spano.vercel.app/',
    title: 'Weather App',
    titulo: 'Clima Aplicacion Web',
    descripcion:
      'Applicacion web para visualizar el clima en diferentes ubicaciones. Consumi la api de open Weather para poder acceder a la informacion climatica de cada ciudad.',
    description:
      'Web application to visualize weather in different locations. I consumed the Open Weather API to access the weather information of each city.',
    repo: 'https://github.com/RodrigoSpano/Weather-app.git',
    tech: ['NextJs', 'open-Weather api', 'ChakraUI', 'Framer-motion'],
  },
  {
    image: null,
    deploy: null,
    title: 'RickAndMorty App',
    descripcion: '',
    description: '',
    repo: 'https://github.com/RodrigoSpano/rickandmorty_integration.git',
    tech: [],
  },
  {
    image: null,
    deploy: null,
    title: 'Portfolio v2(old)',
    descripcion: '',
    description: '',
    repo: 'https://github.com/RodrigoSpano/portfolio2.0.git',
    tech: [],
  },
  {
    image: null,
    deploy: 'https://pricing-component-rodrigo-spano.vercel.app/',
    title: 'Pricing Component',
    descripcion: '',
    description: '',
    repo: 'https://github.com/RodrigoSpano/Pricing-component-FrontEndMentor.git',
    tech: [],
  },
  {
    image: null,
    deploy: 'https://fylo-landing-rodrigo-spano.vercel.app/',
    title: 'Fylo Landing Page',
    descripcion: '',
    description: '',
    repo: 'https://github.com/RodrigoSpano/Fylo-landing-frontEndMentor.git',
    tech: [],
  },
];
