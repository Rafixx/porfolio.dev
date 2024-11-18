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
      'nav.goBackHome':'Volver al inicio',
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
          modal_desc_text: `
            <h2 class="text-2xl font-bold mb-4">Aplicación web para la gestión de analíticas de laboratorio</h2>
            <p class="mb-4">
              Este proyecto es una aplicación web integral y escalable diseñada para gestionar las analíticas de laboratorio de manera eficiente. Incluye un frontend moderno y un backend robusto, garantizando una experiencia de usuario fluida y un manejo confiable de los datos.
            </p>
            
            <h3 class="text-xl font-semibold mb-2">Tecnologías utilizadas:</h3>
            <ul class="list-disc list-inside mb-4">
              <li><strong>Frontend</strong>: Desarrollado con React, proporcionando una interfaz de usuario interactiva, rápida y dinámica. Para una UI/UX más robusta, se ha utilizado la librería Ant Design.</li>
              <li><strong>Backend</strong>: Implementado con Node.js para manejar solicitudes concurrentes y ofrecer un procesamiento de datos eficiente.</li>
              <li><strong>Base de datos</strong>: PostgreSQL como motor de base de datos principal, elegido por su fiabilidad y capacidad de escalar para almacenar y gestionar grandes volúmenes de datos de laboratorio.</li>
              <li><strong>Seguridad</strong>: Incluye mecanismos de control de acceso robustos con permisos basados en roles y autenticación mediante tokens JWT para garantizar un acceso seguro y la protección de los datos.</li>
            </ul>

            <h3 class="text-xl font-semibold mb-2">Características clave:</h3>
            <ul class="list-disc list-inside mb-4">
              <li><strong>Integración y procesamiento de datos</strong>: El sistema permite la importación de datos desde diversas fuentes, garantizando la compatibilidad con los sistemas de laboratorio existentes.</li>
              <li><strong>Analíticas en tiempo real</strong>: La plataforma ofrece procesamiento de datos en tiempo real para proporcionar resultados rápidos y precisos, facilitando la toma de decisiones a tiempo.</li>
              <li><strong>Herramientas avanzadas de generación de informes</strong>: Incluye capacidades de generación de informes personalizables para ayudar a los profesionales de la salud a extraer insights y tendencias de los resultados de laboratorio.</li>
              <li><strong>Gestión de usuarios y roles</strong>: La aplicación permite una gestión integral de usuarios con diferentes niveles de acceso, manteniendo la confidencialidad de los datos y el control operacional.</li>
              <li><strong>Auditoría y trazabilidad</strong>: Cada acción y cambio en el sistema se registra para mantener un historial de auditoría completo, asegurando la integridad de los datos y la trazabilidad en cumplimiento con las normativas.</li>
            </ul>

            <p class="mb-4">
              Esta solución fue desarrollada para mejorar la gestión y el análisis de los datos de laboratorio, promoviendo una mayor eficiencia en los flujos de trabajo, precisión en los datos y satisfacción del usuario en entornos clínicos. En estos momentos, la aplicación se encuentra en producción y está siendo utilizada.
            </p>
          `,
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
          modal_desc_text: `
            <h2 class="text-2xl font-bold mb-4">Aplicación web para la detección y análisis de escoliosis</h2>
            <p class="mb-4">
              El proyecto <em>scoliview</em> es una aplicación web integral diseñada para asistir a los profesionales de la salud en la detección y gestión de la escoliosis a través de imágenes radiológicas. La plataforma proporciona una interfaz de usuario intuitiva y receptiva junto con un backend robusto para un manejo fluido de los datos.
            </p>
            
            <h3 class="text-xl font-semibold mb-2">Tecnologías utilizadas:</h3>
            <ul class="list-disc list-inside mb-4">
              <li><strong>Frontend</strong>: Desarrollado con React y Vite, garantizando una experiencia de usuario interactiva y rápida con principios de diseño moderno.</li>
              <li><strong>Backend</strong>: Construido con Node.js y Express para manejar eficientemente el procesamiento de datos y la comunicación con el frontend.</li>
              <li><strong>Base de datos</strong>: Utiliza PostgreSQL para un almacenamiento y gestión fiable de datos médicos.</li>
              <li><strong>UI/UX</strong>: Implementado con Ant Design para ofrecer una interfaz robusta y amigable que soporta flujos de trabajo complejos de los profesionales médicos.</li>
            </ul>

            <h3 class="text-xl font-semibold mb-2">Características clave:</h3>
            <ul class="list-disc list-inside mb-4">
              <li><strong>Gestión y procesamiento de imágenes</strong>: Los usuarios pueden cargar y procesar imágenes radiológicas con soporte para formatos como DICOM y PNG. El manejo personalizado de imágenes asegura que se visualicen correctamente para el análisis.</li>
              <li><strong>Integración con módulo de IA</strong>: Aunque el módulo de IA que detecta las vértebras y calcula los ángulos de Cobb fue desarrollado en Python y basado en modelos entrenados, la integración y el flujo de datos fueron diseñados para garantizar una interacción óptima del usuario y la presentación de resultados.</li>
              <li><strong>Seguridad de datos y acceso basado en roles</strong>: Implementación de autenticación segura con tokens JWT y control de acceso basado en roles para asegurar que los datos médicos sensibles estén protegidos y solo sean accesibles por personal autorizado.</li>
              <li><strong>Gestión de resultados e informes</strong>: Ofrece herramientas para la generación de informes detallados y el seguimiento del historial de análisis, permitiendo a los profesionales de la salud revisar y gestionar los casos de los pacientes a lo largo del tiempo.</li>
            </ul>

            <p class="mb-4">
              Este proyecto aprovecha el poder de un módulo de IA desarrollado en Python para detectar y analizar las estructuras vertebrales, mientras que los componentes del frontend y backend fueron desarrollados para soportar estas funcionalidades avanzadas y ofrecer una experiencia de usuario fluida. El despliegue de la aplicación está realizado en Azure, y el módulo de IA de Python se encuentra contenerizado en Docker. La aplicación está diseñada con un enfoque en el rendimiento, la fiabilidad y el cumplimiento de las normas de manejo de datos médicos.
            </p>
          `,
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
          modal_desc_text: `
            <h2 class="text-2xl font-bold mb-4">Landing page para la Clínica Flores de Apodaca</h2>
            <p class="mb-4">
              Este proyecto es una landing page desarrollada para la **Clínica Flores de Apodaca**, especializada en servicios de estética. La página web fue creada con un enfoque en el rendimiento y la optimización, garantizando una experiencia de usuario rápida y fluida.
            </p>

            <h3 class="text-xl font-semibold mb-2">Tecnologías utilizadas:</h3>
            <ul class="list-disc list-inside mb-4">
              <li><strong>Astro</strong>: Utilizado para construir una página estática con tiempos de carga optimizados, asegurando un rendimiento superior.</li>
              <li><strong>Tailwind CSS</strong>: Implementado para un diseño ágil, personalizable y completamente responsivo, adaptado a las necesidades estéticas de la clínica.</li>
            </ul>

            <h3 class="text-xl font-semibold mb-2">Características clave:</h3>
            <ul class="list-disc list-inside mb-4">
              <li><strong>Optimización de rendimiento</strong>: La página fue diseñada para ofrecer tiempos de carga rápidos y una navegación fluida, mejorando la experiencia del usuario.</li>
              <li><strong>Diseño responsivo</strong>: Adaptación total a dispositivos móviles y de escritorio, garantizando accesibilidad y usabilidad en cualquier plataforma.</li>
              <li><strong>Identidad visual consistente</strong>: Uso de la paleta de colores y elementos visuales de la marca para reflejar la imagen profesional y los servicios de la clínica.</li>
              <li><strong>Estructura clara de contenido</strong>: La landing page organiza la información de manera que los visitantes puedan encontrar rápidamente los detalles de los servicios ofrecidos.</li>
            </ul>

            <p class="mb-4">
              Este proyecto refleja la importancia de combinar un desarrollo técnico sólido con un diseño atractivo y funcional, alineado con los objetivos de la clínica para atraer y retener clientes.
            </p>

            <p class="mb-4">
              La página está actualmente en funcionamiento y se puede visitar en el siguiente enlace: 
              <a href="https://clinicafloresdeapodaca.netlify.app/" class="text-teal-300 underline" target="_blank">Clínica Flores de Apodaca</a>.
            </p>
          `,
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
      'nav.goBackHome':'Go back home',
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
          modal_id: "regEnfModal_en",
        },
        {
          title: "Laboratory analytics management system",
          description: "Web application for the management of laboratory analytics. Developed with a modern and scalable approach using React in the Frontend, to offer a fast and smooth user experience, while Node.js manages the Backend to ensure robust and reliable processing and PostgreSQL as the database engine.",
          modal_desc_text: `
            <h2 class="text-2xl font-bold mb-4">Web application for laboratory analytics management</h2>
            <p class="mb-4">
              This project is a comprehensive and scalable web application designed to efficiently manage laboratory analytics. It includes a modern frontend and a robust backend, ensuring a seamless user experience and reliable data handling.
            </p>
            
            <h3 class="text-xl font-semibold mb-2">Technologies used:</h3>
            <ul class="list-disc list-inside mb-4">
              <li><strong>Frontend</strong>: Built with React, providing an interactive, fast, and dynamic user interface. The Ant Design library was used for a more robust UI/UX.</li>
              <li><strong>Backend</strong>: Implemented with Node.js to handle concurrent requests and offer efficient data processing.</li>
              <li><strong>Database</strong>: PostgreSQL as the main database engine, chosen for its reliability and scalability to store and manage large volumes of laboratory data.</li>
              <li><strong>Security</strong>: Includes robust access control mechanisms with role-based permissions and JWT token-based authentication to ensure secure access and data protection.</li>
            </ul>

            <h3 class="text-xl font-semibold mb-2">Key features:</h3>
            <ul class="list-disc list-inside mb-4">
              <li><strong>Data integration and processing</strong>: The system allows data import from various sources, ensuring compatibility with existing laboratory systems.</li>
              <li><strong>Real-time analytics</strong>: The platform offers real-time data processing to provide prompt and accurate results, facilitating timely decision-making.</li>
              <li><strong>Advanced reporting tools</strong>: Includes customizable report generation capabilities to help healthcare professionals extract insights and trends from laboratory results.</li>
              <li><strong>User and role management</strong>: The application allows comprehensive user management with different access levels, maintaining data confidentiality and operational control.</li>
              <li><strong>Audit and traceability</strong>: Every action and change in the system is logged to maintain a complete audit trail, ensuring data integrity and traceability in compliance with regulations.</li>
            </ul>

            <p class="mb-4">
              This solution was developed to enhance the management and analysis of laboratory data, promoting greater workflow efficiency, data accuracy, and user satisfaction in clinical settings. The application is currently in production and actively in use.
            </p>
          `,
          link: "",
          imageAlt: "Cover image of the laboratory analytics management project",
          image1: "/projects/HMSS_portada.webp",
          image2: "/projects/HMSS_screenshot_01.webp",
          image3: "/projects/HMSS_screenshot_02.webp",
          image4: "/projects/HMSS_screenshot_03.webp",
          tags: ["react", "nodejs", "postgresql"],
          modal_id: "HMSSModal_en",
        },
        {
          title: "Scoliosis detection system",
          description: "Medical device web to assist in the diagnosis and detection of scoliosis through a radiological image. Developed using React for an interactive and user-friendly frontend, Node.js in the backend for agile processing, and PostgreSQL as a database to ensure the security and efficient management of medical information. With an AI module that helps detect vertebrae and calculate Cobb angles. This integrated approach allows doctors to obtain accurate and consistent results, improving diagnostic efficiency and patient care.",
          modal_desc_text: `
            <h2 class="text-2xl font-bold mb-4">Web application for scoliosis detection and analysis</h2>
            <p class="mb-4">
              The <em>scoliview</em> project is a comprehensive web application designed to assist healthcare professionals in the detection and management of scoliosis through radiological imaging. The platform provides an intuitive and responsive user interface along with a robust backend for seamless data handling.
            </p>
            
            <h3 class="text-xl font-semibold mb-2">Technologies used:</h3>
            <ul class="list-disc list-inside mb-4">
              <li><strong>Frontend</strong>: Built with React and Vite, ensuring an interactive and fast user experience with modern design principles.</li>
              <li><strong>Backend</strong>: Developed with Node.js and Express to efficiently handle data processing and communication with the frontend.</li>
              <li><strong>Database</strong>: Utilizes PostgreSQL for reliable storage and management of medical data.</li>
              <li><strong>UI/UX</strong>: Implemented using Ant Design to provide a robust and user-friendly interface that supports complex workflows for medical professionals.</li>
            </ul>

            <h3 class="text-xl font-semibold mb-2">Key features:</h3>
            <ul class="list-disc list-inside mb-4">
              <li><strong>Image management and processing</strong>: Users can upload and process radiological images with support for formats such as DICOM and PNG. Custom image handling ensures images are correctly visualized for analysis.</li>
              <li><strong>Integration with AI module</strong>: Although the AI module that detects vertebrae and calculates Cobb angles was developed in Python and based on trained models, the integration and data flow were designed to ensure optimal user interaction and result presentation.</li>
              <li><strong>Data security and role-based access</strong>: Secure authentication with JWT tokens and role-based access control to ensure that sensitive medical data is protected and only accessible by authorized personnel.</li>
              <li><strong>Report generation and result management</strong>: Provides tools for generating detailed reports and tracking analysis history, allowing healthcare professionals to review and manage patient cases over time.</li>
            </ul>

            <p class="mb-4">
              This project leverages the power of an AI module developed in Python to detect and analyze vertebral structures, while the frontend and backend components were developed to support these advanced functionalities and provide a seamless user experience. The deployment is hosted on Azure, and the Python AI module is containerized in Docker. The application is designed with a focus on performance, reliability, and compliance with medical data handling standards.
            </p>
          `,
          link: "",
          imageAlt: "Cover image of the scoliosis detection project",
          image1: "/projects/scoli_portada.webp",
          image2: "/projects/scoli_screenshot_01.webp",
          image3: "/projects/scoli_screenshot_02.webp",
          tags: ["react", "nodejs", "postgresql"],
          modal_id: "scoliModal_en",
        },
        {
          title: "Landing page for an aesthetic clinic",
          description: "Website for an aesthetic clinic. Developed with Astro and Tailwindcss.",
          modal_desc_text: `
            <h2 class="text-2xl font-bold mb-4">Landing page for Clínica Flores de Apodaca</h2>
            <p class="mb-4">
              This project is a landing page developed for **Clínica Flores de Apodaca**, specializing in aesthetic services. The website was created with a focus on performance and optimization, ensuring a fast and seamless user experience.
            </p>

            <h3 class="text-xl font-semibold mb-2">Technologies used:</h3>
            <ul class="list-disc list-inside mb-4">
              <li><strong>Astro</strong>: Used to build a static page with optimized load times, ensuring superior performance.</li>
              <li><strong>Tailwind CSS</strong>: Implemented for an agile, customizable, and fully responsive design, tailored to the aesthetic needs of the clinic.</li>
            </ul>

            <h3 class="text-xl font-semibold mb-2">Key features:</h3>
            <ul class="list-disc list-inside mb-4">
              <li><strong>Performance optimization</strong>: The page was designed to provide fast load times and smooth navigation, enhancing the user experience.</li>
              <li><strong>Responsive design</strong>: Full adaptation to mobile and desktop devices, ensuring accessibility and usability across platforms.</li>
              <li><strong>Consistent visual identity</strong>: Use of the clinic's color palette and visual elements to reflect its professional image and services.</li>
              <li><strong>Clear content structure</strong>: The landing page organizes information so that visitors can quickly find details about the services offered.</li>
            </ul>

            <p class="mb-4">
              This project highlights the importance of combining solid technical development with an attractive and functional design, aligned with the clinic's goals to attract and retain clients.
            </p>

            <p class="mb-4">
              The page is currently live and can be visited at the following link: 
              <a href="https://clinicafloresdeapodaca.netlify.app/" class="text-teal-600 underline" target="_blank">Clínica Flores de Apodaca</a>.
            </p>
          `,
          link: "https://clinicafloresdeapodaca.netlify.app/",
          github: "https://github.com/Rafixx/clinicaFloresDeApodaca",
          imageAlt: "Cover image of the aesthetic clinic project",
          image1: "/projects/clinica_portada.webp",
          image2: "/projects/clinica_screenshot_01.webp",
          image3: "/projects/clinica_screenshot_02.webp",
          tags: ["astro", "tailwindcss"],
          modal_id: "clinicaModal_en",
        },
      ]
    },
  } as const;
