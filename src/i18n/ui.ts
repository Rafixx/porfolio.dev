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
          link: '#proyectos',
          linkLabel: 'Saber más',
        },
        {
          title: 'Analista funcional',
          date: 'Enero 2021',
          company: 'Conselleria Sanidad',
          description: 'Responsable de la implementación de explotación de datos del sistema HIS del HLP de La Pedrera. Desarrollo de aplicaciones web tanto para la gestión incidencias de enfermería como para explotación de datos.'
        }
      ],
      projects: [
        {
          title: "Sistema de registro de incidencias de enfermería",
          description: "Solución fullstack para la gestión de incidencias de enfermería. Desarrollada con React, Node.js y MySQL. Consulta a otras bases de datos como Informix. Implementación de un sistema de notificaciones. Control de acceso mediante roles y tokens de autentificación.",
          modal_desc_text: `
            <h2 class="text-2xl font-bold mb-4">Aplicación web para la gestión de incidencias de enfermería</h2>
            <p class="mb-4">
              Este proyecto consiste en una solución completa, compuesta por un frontend y un backend, desarrollada para gestionar incidencias en un entorno hospitalario, optimizando la trazabilidad y la explotación de datos.
            </p>
            
            <h3 class="text-xl font-semibold mb-2">Tecnologías utilizadas:</h3>
            <ul class="list-disc list-inside mb-4">
              <li><strong>Frontend</strong>: React, para una experiencia de usuario fluida y componentes dinámicos.</li>
              <li><strong>Backend</strong>: Node.js, con conexión a múltiples bases de datos y operaciones CRUD sobre MySQL.</li>
              <li><strong>Bases de datos</strong>: Integración con Informix en modo lectura y una base de datos relacional MySQL.</li>
              <li><strong>Seguridad</strong>: Implementación de un sistema de control de acceso basado en roles y autenticación mediante tokens JWT.</li>
            </ul>

            <h3 class="text-xl font-semibold mb-2">Características clave:</h3>
            <ul class="list-disc list-inside">
              <li><strong>Integración con sistemas hospitalarios (HIS)</strong>: Consulta de datos de pacientes ingresados desde sistemas de gestión hospitalaria a través de SQL.</li>
              <li><strong>Sistema de notificaciones</strong>: Notificaciones automáticas para mantener informados a los usuarios sobre actualizaciones y cambios en las incidencias.</li>
              <li><strong>Gestión avanzada de incidencias</strong>: Creación, seguimiento y manejo de incidencias con diferentes estados.</li>
              <li><strong>Generación de informes</strong>: Herramientas de explotación de datos para obtener reportes detallados que facilitan la toma de decisiones.</li>
            </ul>
          `,
          link: "",
          github: "https://github.com/Rafixx/regEnf",
          imageAlt: "Imagen de portada del proyecto de registro de incidencias de enfermería",
          image1: "/projects/regEnf_portada.webp",
          image2: "/projects/regEnf_screenshot_01.webp",
          image3: "/projects/regEnf_screenshot_02.webp",
          image4: "/projects/regEnf_screenshot_03.webp",
          tags: ["react", "nodejs", "mysql"],
          modal_id: "regEnfModal",
        },
        {
          title: "Sistema de gestión de analíticas de laboratorio",
          description: "Aplicación web para la gestión de analíticas de laboratorio. Desarrollada con un enfoque moderno y escalable utilizando React en el Frontend, para ofrecer una experiencia de usuario rápida y fluida, mientras que Node.js gestiona el Backend para asegurar un procesamiento robusto y confiable y PostgreSQL como motro de base de datos.", 
          link: "",
          imageAlt: "Imagen de portada del proyecto de gestión de analíticas de laboratorio",
          image1: "/projects/HMSS_portada.webp",
          image2: "/projects/HMSS_screenshot_01.webp",
          image3: "/projects/HMSS_screenshot_02.webp",
          image4: "/projects/HMSS_screenshot_03.webp",
          tags: ["react", "nodejs", "postgresql"],
          modal_id: "HMSSModal",
        },
        {
          title: "Sistema de detección de escoliosis",
          description: "Medical device web para asistir en el diagnóstico y detección de la escoliosis a través de una imágen radiológica. Desarrollada utilizando React para un frontend interactivo y amigable, Node.js en el backend para un procesamiento ágil, y PostgreSQL como base de datos para garantizar la seguridad y gestión eficaz de la información médica. Con un módulo de IA que ayuda a la detección de las vértebras y cálculo de los ángulos de Cobb. Este enfoque integrado permite a los médicos obtener resultados precisos y consistentes, mejorando la eficiencia del diagnóstico y la atención al paciente. ",
          link: "",
          imageAlt: "Imagen de portada del proyecto de detección de escoliosis",
          image1: "/projects/scoli_portada.webp",
          image2: "/projects/scoli_screenshot_01.webp",
          image3: "/projects/scoli_screenshot_02.webp",
          tags: ["react", "nodejs", "postgresql"],
          modal_id: "scoliModal",
        },
        {
          title: "Landing page para una clínica de estética",
          description: "Página web para una clínica de estética. Tecnologías empleadas: Astro para un rendimiento optimizado y carga rápida; TailwindCSS para una personalización de estilos ágil y responsiva. Con el objetivo de crear una experiencia web moderna y eficiente que refleje la calidad de los servicios en medicina estética, he tenido muy presente estructurar las secciones y elementos necesarios para transmitir la información de forma clara y atractiva.",
          link: "https://clinicafloresdeapodaca.netlify.app/",
          github: "https://github.com/Rafixx/clinicaFloresDeApodaca",
          imageAlt: "Imagen de portada del proyecto de la clínica de estética",
          image1: "/projects/clinica_portada.webp",
          image2: "/projects/clinica_screenshot_01.webp",
          image3: "/projects/clinica_screenshot_02.webp",
          tags: ["astro", "tailwindcss"],
          modal_id: "clinicaModal",
        },
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
          link: '#proyectos',
          linkLabel: 'More...',
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
          modal_desc_text: `
            <h2 class="text-2xl font-bold mb-4">Web application for nursing incident management</h2>
            <p class="mb-4">
              This project is a complete solution consisting of a frontend and a backend, developed to manage incidents in a hospital environment, optimizing traceability and data analysis.
            </p>
            
            <h3 class="text-xl font-semibold mb-2">Technologies used:</h3>
            <ul class="list-disc list-inside mb-4">
              <li><strong>Frontend</strong>: React, for a smooth user experience and dynamic components.</li>
              <li><strong>Backend</strong>: Node.js, with connections to multiple databases and CRUD operations on MySQL.</li>
              <li><strong>Databases</strong>: Integration with Informix in read mode and a relational MySQL database.</li>
              <li><strong>Security</strong>: Implementation of an access control system based on roles and authentication using JWT tokens.</li>
            </ul>

            <h3 class="text-xl font-semibold mb-2">Key features:</h3>
            <ul class="list-disc list-inside">
              <li><strong>Integration with hospital systems (HIS)</strong>: Querying patient data from hospital management systems via SQL.</li>
              <li><strong>Notification system</strong>: Automatic notifications to keep users informed of updates and changes in incidents.</li>
              <li><strong>Advanced incident management</strong>: Creation, tracking, and management of incidents with different states.</li>
              <li><strong>Report generation</strong>: Data analysis tools to produce detailed reports that facilitate decision-making.</li>
            </ul>
          `,
          link: "",
          github: "https://github.com/Rafixx/regEnf",
          imageAlt: "Cover image of the nursing incidents registration project",
          image1: "/projects/regEnf_portada.webp",
          image2: "/projects/regEnf_screenshot_01.webp",
          image3: "/projects/regEnf_screenshot_02.webp",
          image4: "/projects/regEnf_screenshot_03.webp",
          tags: ["react", "nodejs", "mysql"],
          modal_id: "regEnfModal",
        },
        {
          title: "Laboratory analytics management system",
          description: "Web application for the management of laboratory analytics. Developed with a modern and scalable approach using React in the Frontend, to offer a fast and smooth user experience, while Node.js manages the Backend to ensure robust and reliable processing and PostgreSQL as the database engine.",
          link: "https://adventjs.dev",
          imageAlt: "Cover image of the laboratory analytics management project",
          image: "/projects/adventjs.webp",
          tags: ["react", "nodejs", "postgresql"],
        },
        {
          title: "Scoliosis detection system",
          description: "Medical device web to assist in the diagnosis and detection of scoliosis through a radiological image. Developed using React for an interactive and user-friendly frontend, Node.js in the backend for agile processing, and PostgreSQL as a database to ensure the security and efficient management of medical information. With an AI module that helps detect vertebrae and calculate Cobb angles. This integrated approach allows doctors to obtain accurate and consistent results, improving diagnostic efficiency and patient care.",
          link: "https://adventjs.dev",
          imageAlt: "Cover image of the scoliosis detection project",
          image: "/projects/adventjs.webp",
          tags: ["react", "nodejs", "postgresql"],
        },
        {
          title: "Landing page for an aesthetic clinic",
          description: "Website for an aesthetic clinic. Developed with Astro and Tailwindcss.",
          link: "https://clinicafloresdeapodaca.netlify.app/",
          github: "https://github.com/Rafixx/clinicaFloresDeApodaca",
          imageAlt: "Cover image of the aesthetic clinic project",
          image: "/projects/clinica_portada.webp",
          tags: ["astro", "tailwindcss"],
        },
      ]
    },
  } as const;
