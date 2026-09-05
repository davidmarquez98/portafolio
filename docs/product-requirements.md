# Product Requirements — David Marquez Portfolio

## 1. Product goal
Create a polished personal portfolio that positions David Marquez for international remote software engineering opportunities.

The site should communicate, within roughly the first screen:
- David is a Software Engineer.
- His strongest area is backend engineering.
- He has professional experience with Java, Spring, Quarkus, distributed systems, AWS, and microservices.
- He has professional frontend experience with Vue and practical familiarity with React.
- He is open to international remote opportunities.

## 2. Primary audience
1. Technical recruiters.
2. Engineering managers.
3. Backend / platform / software engineering interviewers.
4. International companies hiring remote engineers.

## 3. Positioning
Primary title:
**Software Engineer**

Secondary positioning:
**Backend & Distributed Systems**

Avoid positioning David as a generic "web developer" or as a frontend-first developer.

## 4. Information architecture
Single-page home with the following order:
1. Navigation
2. Hero
3. About
4. Experience
5. Selected Work
6. Expertise
7. Contact / Footer

Education is not a standalone homepage section in v1. Education data may exist and may later be shown as secondary information within another appropriate area.

## 5. Hero requirements
Must communicate:
- Name
- Software Engineer title
- Backend/distributed-systems specialization
- Key stack summary
- International remote availability
- CTA to work/experience
- CTA to résumé

Suggested primary English headline:
**Software Engineer building scalable distributed systems.**

Suggested support copy:
**Software Engineer focused on Java backend and distributed systems.**

Suggested stack line:
**Java · Spring · Quarkus · Kafka · AWS**

Availability:
**Available for international remote opportunities**

## 6. About requirements
Short, not autobiographical.
Emphasize:
- 3+ years of professional software-development experience.
- Financial-sector production systems.
- Java / Spring / Quarkus specialization.
- Distributed, microservice, and event-driven environments.
- English B2+.

## 7. Experience requirements
Display roles in reverse chronological order.

### Banco Macro — September 2025 to Present
Role: Software Developer / Semi Senior
Key technologies supported by CV:
- Java 21
- Spring Boot 3.x
- REST APIs
- JUnit
- Mockito
- AWS SQS
- JWT
- OAuth2 Client Credentials
- Swagger / OpenAPI
- PostgreSQL
- Jenkins
- OpenShift environments
- Git / Bitbucket
- Jira

Public-facing copy must remain abstract and must not disclose confidential business details.

### Banco Hipotecario — January 2025 to June 2025
Role: Software Engineer / Desarrollador de Software
Key technologies:
- Java
- Spring
- Quarkus
- JUnit
- Mockito
- Jenkins
- OpenShift
- Git

The migration itself is the primary achievement. Do not present unsupported numeric performance claims.

### FLEX TECH ARG — October 2024 to December 2024
Role: Software Engineer / Desarrollador de Software
Highlights:
- Co-developed an internal reusable Java authentication library for banking applications.
- Secure credential handling and encryption.
- JUnit / Mockito testing and Git collaboration.

### BYMA — Caja de Valores — October 2022 to October 2024
Role: Software Engineer / Desarrollador de Software
Technologies:
- Java
- Spring
- Quarkus
- Vue.js
- Kafka
- Oracle
- Hibernate
- Panache

Highlights:
- Contributed to modernization from a Spring monolith to Quarkus microservices under architecture defined by the technical team.
- Implemented backend services and new financial functionality.
- Delivered substantial Vue.js frontend functionality.
- Implemented Kafka producers and consumers for transactional message routing.

## 8. Experience interaction
Recommended desktop pattern:
- Timeline or stacked cards.
- Current role visually emphasized.
- Optional expandable details.
- Simple architecture diagram for the current role using generic labels only.

Possible generic current-role diagram:
API → Java/Spring microservice → SQS

Do not imply this diagram represents the employer's complete architecture.

## 9. Selected Work
Initially support a single flagship project slot.

Working concept:
**Distributed Payment Platform**

Important: this project does not yet exist. It must be presented as a portfolio project only after it is actually implemented and publicly available.

Until then, the section may:
- remain hidden,
- display a "Currently building" state,
- or use another real public project if one is created first.

Never present unfinished concepts as completed work.

Implementation must model the section with one of three explicit states:
- `hidden`
- `building`
- `published`

The initial state is `hidden`. Do not create or display a project that does not exist.

## 10. Expertise
Organize by capability, not logo wall.

### Backend Engineering
Java 21, Spring Boot 3.x, Quarkus, REST APIs, JPA, Hibernate, Panache

### Distributed Systems & Messaging
Microservices, Apache Kafka, AWS SQS, event-driven systems

### Data
PostgreSQL, Oracle, SQL

### Security & APIs
OAuth2, JWT, Swagger / OpenAPI

### Testing
JUnit, Mockito, Postman

### Frontend
Vue.js, JavaScript, HTML, CSS

### Delivery & Collaboration
Git, Bitbucket, Jenkins, Jira, Scrum, OpenShift environments

### Additional familiarity
React, Docker, Kubernetes, AWS S3, DynamoDB, MySQL, Nginx

## 11. Education & Learning
Keep visually smaller than Experience.

- Westminster School of Languages — English B2+
- Udemy / Global Mentoring — Java course
- Platzi — Java SE introduction
- Platzi — Vue.js introduction and fundamentals
- Platzi — React professional course / render patterns

## 12. Contact
Primary message:
**I'm currently open to international remote Software Engineering opportunities.**

Actions:
- Email
- LinkedIn
- GitHub
- Download résumé

No contact form in v1.

## 13. Languages
Default language: English.
Secondary: Spanish.

Navigation includes EN / ES switch.

English is served at `/` and Spanish at `/es`. Use `next-intl` with `localePrefix: "as-needed"` and `localeDetection: false`.

## 14. Résumé
Support one résumé per locale when files are available:
- English résumé
- Spanish résumé

If only one résumé exists, do not pretend a translated file exists.

## 15. Theme
Light mode is the primary visual direction.
Dark mode may be included as an optional secondary theme.

Both light and dark semantic design tokens must be established during initial project setup, even if theme controls are implemented later.

## 16. Non-goals for v1
- Blog
- CMS
- Testimonials
- GitHub contribution graph
- Skill percentages
- Complex 3D scenes
- Fake terminal
- Particle backgrounds
- Heavy scroll-jacking
- Authentication
- Database
- Contact backend
