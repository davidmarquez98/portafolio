import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      experience: {
        byma: "I specialized in tools like <b>Quarkus</b>, <b>Spring</b>, <b>Apache Kafka</b>, <b>JWT</b>, <b>Hibernate</b>, and <b>Panache</b> for efficient backend implementation. We practice <b>reactive programming</b> to ensure APIs are as efficient as possible for the system. In the database field, we use <b>Oracle</b>, ensuring comprehensive data management. For frontend development, we use <b>VueJS</b> and <b>ReactJS</b> to create sophisticated and highly functional user interfaces.",
        
        flexTech: "I was part of a project focused on creating a <b>Java</b> library to manage authentication requests to an external provider, providing secure login functionality in a banking application. The project was developed for Banco Hipotecario and included unit testing with JUnit and Mockito to ensure reliability and maintainability.",

        bh: "I work as a <b>Java</b> developer in the Middleware sector, specializing in frameworks like <b>Spring</b> and <b>Quarkus</b>. My role focuses on developing and maintaining integration solutions and scalable applications. Currently, I am part of a key project to migrate multiple APIs from Spring to Quarkus, optimizing execution times and modernizing the existing infrastructure to ensure optimal performance in critical environments."
      }
    }
  },
  es: {
    translation: {
      experience: {
        byma: "Me especialicé en herramientas como <b>Quarkus</b>, <b>Spring</b>, <b>Apache Kafka</b>, <b>JWT</b>, <b>Hibernate</b> y <b>Panache</b> para una implementación backend eficiente. Practicamos la <b>programación reactiva</b> para garantizar que las API sean lo más eficientes posible para el sistema. En el ámbito de las bases de datos utilizamos <b>Oracle</b> asegurando una gestión integral de los datos. Para el desarrollo frontend, empleamos <b>VueJS</b> y <b>ReactJS</b> para crear interfaces de usuario sofisticadas y altamente funcionales.",

        flexTech: "Formé parte de un proyecto enfocado en la creación de una biblioteca en <b>Java</b> para gestionar solicitudes de autenticación a un proveedor externo, proporcionando una funcionalidad de inicio de sesión seguro en una aplicación bancaria. El proyecto fue desarrollado para el Banco Hipotecario e incluyó la implementación de pruebas unitarias con JUnit y Mockito para garantizar la confiabilidad y mantenibilidad del código.",

        bh: "Trabajo como desarrollador <b>Java</b> en el sector de Middleware, especializándome en frameworks como <b>Spring</b> y <b>Quarkus</b>. Mi rol se centra en el desarrollo y mantenimiento de soluciones de integración y aplicaciones escalables. Actualmente, formo parte de un proyecto clave de migración de múltiples APIs de Spring a Quarkus, optimizando los tiempos de ejecución y modernizando la infraestructura existente para garantizar un rendimiento óptimo en entornos críticos."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // Idioma por defecto
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // Permite etiquetas HTML en las traducciones
    },
  });

export default i18n;
