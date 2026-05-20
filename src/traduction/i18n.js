import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        about_me: "About me",
        projects: "Projects"
      },

      about_me: {
        title: "A little about me...",
        description_first: "Software Developer with more than 3 years of experience building scalable and highly available applications. I am currently part of the Open Banking team at Banco Macro, designing and implementing critical financial solutions based on microservices architecture.",
        description_second: "My specialty is developing robust backends with Java (Spring Boot, Quarkus), complemented by the creation of dynamic and modern frontends. I am passionate about Clean Code, performance optimization, and solving complex problems through efficient solutions.",
        description_third: "I have a B2+ English level, which allows me to communicate fluently and collaborate effectively with global distributed and multicultural teams. I am motivated by continuous learning, facing new technical challenges, and bringing real value in every line of code."
      },

      home: {
        title: "Hello, I am David.",
        position: "Developer Full Stack",
        description: "I am passionate about programming and getting to know the world!"
      },

      experience: {
        title: "EXPERIENCE",
        developer_software: "Software Developer",

        byma: {
          description: "I specialized in tools like <b>Quarkus</b>, <b>Spring</b>, <b>Apache Kafka</b>, <b>JWT</b>, <b>Hibernate</b>, and <b>Panache</b> for efficient backend implementation. We practice <b>reactive programming</b> to ensure APIs are as efficient as possible for the system. In the database field, we use <b>Oracle</b>, ensuring comprehensive data management. For frontend development, we use <b>VueJS</b> and <b>ReactJS</b> to create sophisticated and highly functional user interfaces.",
          time: "October 2022 - October 2024"
        },

        flexTech: {
          description: "I was part of a project focused on creating a <b>Java</b> library to manage authentication requests to an external provider, providing secure login functionality in a banking application. The project was developed for Banco Hipotecario and included unit testing with JUnit and Mockito to ensure reliability and maintainability.",
          time: "October 2024 - January 2025"
        },

        bh: {
          description: "I work as a <b>Java</b> developer in the Middleware sector, specializing in frameworks like <b>Spring</b> and <b>Quarkus</b>. My role focuses on developing and maintaining integration solutions and scalable applications. Currently, I am part of a key project to migrate multiple APIs from Spring to Quarkus, optimizing execution times and modernizing the existing infrastructure to ensure optimal performance in critical environments.",
          time: "January 2025 - Present"
        }
      },

      technology: {
        title: "TECHNOLOGIES"
      },

      project: {
        title: "PROJECTS",
        todo: {
          title: "TODO",
          description: "<b>'Todo'</b> is an application designed to help users organize and manage their daily tasks efficiently. It provides an intuitive interface that allows users to create, edit, and delete tasks, as well as set priorities and deadlines. With <b>'Todo'</b>, users can boost their productivity and manage their time more effectively."
        }
      }
    }
  },
  es: {
    translation: {
      nav: {
        about_me: "Sobre mi",
        projects: "Proyectos"
      },

      about_me: {
        title: "Un poco sobre mi...",
        description_first: "Desarrollador de Software con más de 3 años de experiencia en la construcción de aplicaciones escalables y de alta disponibilidad. Actualmente, formo parte del equipo de Open Banking en Banco Macro, diseñando e implementando soluciones financieras críticas basadas en arquitectura de microservicios.",
        description_second: "Mi especialidad es el desarrollo de backends robustos con Java (Spring Boot, Quarkus), complementado con la creación de frontends dinámicos y modernos. Me apasiona el código limpio (Clean Code), la optimización de performance y la resolución de problemas complejos mediante soluciones eficientes.",
        description_third: "Cuento con un nivel de inglés B2+, lo que me permite comunicarme con fluidez y colaborar de manera efectiva en equipos distribuidos globales y multiculturales. Me motiva el aprendizaje continuo, enfrentar nuevos desafíos técnicos y aportar valor real en cada línea de código."
      },

      home: {
        title: "Hola, Soy David.",
        position: "Desarrollador Full Stack",
        description: "Me apasiona la programación y conocer el mundo!"
      },

      experience: {
        title: "EXPERIENCIA",
        developer_software: "Desarrollador de Software",
        byma: {
          description:"Me especialicé en herramientas como <b>Quarkus</b>, <b>Spring</b>, <b>Apache Kafka</b>, <b>JWT</b>, <b>Hibernate</b> y <b>Panache</b> para una implementación backend eficiente. Practicamos la <b>programación reactiva</b> para garantizar que las API sean lo más eficientes posible para el sistema. En el ámbito de las bases de datos utilizamos <b>Oracle</b> asegurando una gestión integral de los datos. Para el desarrollo frontend, empleamos <b>VueJS</b> y <b>ReactJS</b> para crear interfaces de usuario sofisticadas y altamente funcionales.",
          time: "Octubre 2022 - Octubre 2024"
        },
        flexTech: {
          description:"Formé parte de un proyecto enfocado en la creación de una biblioteca en <b>Java</b> para gestionar solicitudes de autenticación a un proveedor externo, proporcionando una funcionalidad de inicio de sesión seguro en una aplicación bancaria. El proyecto fue desarrollado para el Banco Hipotecario e incluyó la implementación de pruebas unitarias con JUnit y Mockito para garantizar la confiabilidad y mantenibilidad del código.",
          time: "Octubre 2024 - Enero 2025"
        },
        bh: {
          description:"Trabajo como desarrollador <b>Java</b> en el sector de Middleware, especializándome en frameworks como <b>Spring</b> y <b>Quarkus</b>. Mi rol se centra en el desarrollo y mantenimiento de soluciones de integración y aplicaciones escalables. Actualmente, formo parte de un proyecto clave de migración de múltiples APIs de Spring a Quarkus, optimizando los tiempos de ejecución y modernizando la infraestructura existente para garantizar un rendimiento óptimo en entornos críticos.",
          time: "Enero 2025 - Actualidad"
        }
      },

      technology: {
        title: "TECNOLOGIAS"
      },

      project: {
        title: "PROYECTOS",
        todo: {
          title: "TODO",
          description: "<b>'Todo'</b> es una aplicación diseñada para ayudar a los usuarios a organizar y gestionar sus tareas diarias de manera eficiente. Proporciona una interfaz intuitiva que permite a los usuarios crear, editar y eliminar tareas, así como establecer prioridades y plazos. Con <b>'Todo'</b>, los usuarios pueden mejorar su productividad y gestionar su tiempo de manera más efectiva."
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
