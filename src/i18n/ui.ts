export const languages = {
    es: '🇪🇸',
    en: '🇺🇸',
  };
  
  export const defaultLang = 'es';
  
  export const ui = {
    es: {
      'layout.title': 'Porfolio de Rafa - Ingeniero de Software con más de 20 años de experiencia en tecnología, especializado en desarrollo Fullstack y programación web.',
      'layout.description': 'Haz equipo con Rafa para crear tu aplicación web. Desarrollador Web Fullstack con experiencia en construir aplicaciones únicas y optimizadas, desde el Frontend hasta el Backend.',
      'nav.home':'Experiencia',
      'nav.projects':'Proyectos',
      'nav.about':'Sobre mí',
      'nav.contact':'Contacto',
      'hero.badge': 'Disponible para trabajar',
      'hero.title': 'Hola, soy Rafa',
      'hero.bio': 'Hagamos equipo, soy <strong>Ingeniero de Software</strong> con más de 20 años de experiencia en <strong>desarrollo Fullstack</strong>, para crear aplicaciones web a la medida, desde Frontend hasta Backend.',
      'hero.mail': 'Contáctame',
      'hero.linkedin': 'LinkedIn',
      'exp.title': 'Experiencia laboral',
      'projects.title': 'Proyectos',
      'tech.title': 'Tecnologías',
      'about.title': 'Sobre mí',
      'about.bio': `<p>Soy Rafa Serra y mi pasión por la programación comenzó a los 10 años, cuando empecé a explorar el mundo del código en un MSX con BASIC. A lo largo de los años, <strong>he trabajado en una amplia variedad de proyectos</strong> y he adquirido experiencia en múltiples lenguajes de programación. Aunque las tecnologías evolucionan, siempre he creído que la esencia de la programación permanece: resolver problemas de manera eficaz y creativa.
                    </p><p>Actualmente, <strong>estoy dedicado al desarrollo de proyectos web como freelance</strong>, aplicando mis conocimientos y experiencia para colaborar con equipos y contribuir a alcanzar sus objetivos. Me considero un analista meticuloso que disfruta desentrañando problemas complejos y encontrando soluciones óptimas. Afronto cada reto con entusiasmo tratando de afrontarlos como oportunidades para aprender y crecer. Mi afán por el conocimiento y la superación es lo que me motiva a seguir avanzando en cada proyecto.</p>`,
      'footer.signature': 'Porfolo de Rafa',                  
      'footer.rights': 'Basado en el proyecto de ',
      exp: [
        {
          title: 'Desarrollador Web Fullstack',
          date: 'Actualmente...',
          company: 'Freelance',
          description: 'He desarrollado diversos proyectos web para empresas y particulares, aplicando mis conocimientos en tecnologías como React, Node.js, SQL, entre otras. Me encargo de la creación de aplicaciones web a medida, desde el diseño hasta la implementación y mantenimiento.',
          // link: 'https://twitch.tv/midudev',
          // linkLabel: 'Saber más',
        },
        {
          title: 'Amalista funcional',
          date: 'Enero 2021',
          company: 'Conselleria Sanidad',
          description: 'Responsable de la implementación de explotación de datos del sistema HIS del HLP de La Pedrera. Desarrollo de aplicaciones web para la gestión incidencias de enfermería.'
        }
      ],
      projects: [
        {
          title: "Sistema de registro de incidencias de enfermería",
          description: "Aplicación web para la gestión de incidencias de enfermería. Desarrollada con React, Node.js y MySQL. Consulta a otras bases de datos como Informix. Implementación de un sistema de notificaciones. Control de acceso mediante roles y tokens de autentificación.",
          link: "https://svgl.vercel.app/",
          github: "https://github.com/serraraf/regEnf",
          image: "/projects/svgl.webp",
          tags: ["react", "nodejs", "mysql"],
        },
        {
          title: "Sistema de gestión de analíticas de laboratorio",
          description: "Aplicación web para la gestión de analíticas de laboratorio. Desarrollada con un enfoque moderno y escalable utilizando React en el Frontend, para ofrecer una experiencia de usuario rápida y fluida, mientras que Node.js gestiona el Backend para asegurar un procesamiento robusto y confiable y PostgreSQL como motro de base de datos.", 
          link: "https://adventjs.dev",
          image: "/projects/adventjs.webp",
          tags: ["react", "nodejs", "postgresql"],
        },
        {
          title: "Sistema de detección de escoliosis",
          description: "Medical device web para asistir en el diagnóstico y detección de la escoliosis a través de una imágen radiológica. Desarrollada utilizando React para un frontend interactivo y amigable, Node.js en el backend para un procesamiento ágil, y PostgreSQL como base de datos para garantizar la seguridad y gestión eficaz de la información médica. Con un módulo de IA que ayuda a la detección de las vértebras y cálculo de los ángulos de Cobb. Este enfoque integrado permite a los médicos obtener resultados precisos y consistentes, mejorando la eficiencia del diagnóstico y la atención al paciente. ",
          link: "https://adventjs.dev",
          image: "/projects/adventjs.webp",
          tags: ["react", "nodejs", "postgresql"],
        }
      ]
    },
    en: {
      'layout.title': 'Rafa\'s Portfolio - Software Engineer with over 20 years of experience in technology, specialized in Fullstack development and web programming.',
      'layout.description': 'Team up with Rafa to create your web application. Fullstack Web Developer with experience in building unique and optimized applications, from Frontend to Backend.',
      'nav.home':'Experience',
      'nav.projects':'Projects',
      'nav.about':'About me',
      'nav.contact':'Contact',
      'hero.badge': 'Available for work',
      'hero.title': 'Hi, I\'m Rafa',
      'hero.bio': 'Let\'s team up, I\'m a <strong>Software Engineer</strong> with over 20 years of experience in <strong>Fullstack development</strong>, to create custom web applications, from Frontend to Backend.',
      'hero.mail': 'Contact me',
      'hero.linkedin': 'LinkedIn',
      'exp.title': 'Work experience',
      'projects.title': 'Projects',
      'tech.title': 'Tech stack',
      'about.title': 'About me',
      'about.bio': `<p>I'm Rafa Serra and my passion for programming began at the age of 10, when I started exploring the world of code on an MSX with BASIC. Over the years, <strong>I have worked on a wide variety of projects</strong> and gained experience in multiple programming languages. Although technologies evolve, I have always believed that the essence of programming remains: solving problems effectively and creatively.
                    </p><p>Currently, <strong>I am dedicated to developing web projects as a freelancer</strong>, applying my knowledge and experience to collaborate with teams and contribute to achieving their goals. I consider myself a meticulous analyst who enjoys unraveling complex problems and finding optimal solutions. I approach each challenge with enthusiasm, treating them as opportunities to learn and grow. My eagerness for knowledge and self-improvement is what motivates me to keep moving forward on each project.</p>`,
      'footer.signature': 'Rafa\'s Portfolio',                  
      'footer.rights': 'Based on the project by ',
      exp: [
        {
          title: 'Fullstack Web Developer',
          date: 'Currently...',
          company: 'Freelance',
          description: 'I have developed various web projects for companies and individuals, applying my knowledge in technologies such as React, Node.js, SQL, among others. I am responsible for creating custom web applications, from design to implementation and maintenance.',
          // link: 'https://twitch.tv/midudev',
          // linkLabel: 'Learn more',
        },
        {
          title: 'Functional analyst',
          date: 'January 2021',
          company: 'Conselleria Sanidad',
          description: 'Responsible for the implementation of data exploitation of the HIS system of the HLP of La Pedrera. Development of web applications for the management of nursing incidents.'
        },
      ],
      projects: [
        {
          title: "Nursing incidents registration system",
          description: "Web application for the management of nursing incidents. Developed with React, Node.js and MySQL. Consultation to other databases such as Informix. Implementation of a notification system. Access control through roles and authentication tokens.",
          link: "https://svgl.vercel.app/",
          github: "",
          image: "/projects/svgl.webp",
          tags: ["react", "nodejs", "mysql"],
        },
        {
          title: "Laboratory analytics management system",
          description: "Web application for the management of laboratory analytics. Developed with a modern and scalable approach using React in the Frontend, to offer a fast and smooth user experience, while Node.js manages the Backend to ensure robust and reliable processing and PostgreSQL as the database engine.",
          link: "https://adventjs.dev",
          image: "/projects/adventjs.webp",
          tags: ["react", "nodejs", "postgresql"],
        },
        {
          title: "Scoliosis detection system",
          description: "Medical device web to assist in the diagnosis and detection of scoliosis through a radiological image. Developed using React for an interactive and user-friendly frontend, Node.js in the backend for agile processing, and PostgreSQL as a database to ensure the security and efficient management of medical information. With an AI module that helps detect vertebrae and calculate Cobb angles. This integrated approach allows doctors to obtain accurate and consistent results, improving diagnostic efficiency and patient care.",
          link: "https://adventjs.dev",
          image: "/projects/adventjs.webp",
          tags: ["react", "nodejs", "postgresql"],
        }
      ]
    },
  } as const;
