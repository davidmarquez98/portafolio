export const experiences = [
  {
    id: 'bancoMacro',
    current: true,
    highlights: ['restApis', 'messaging', 'security', 'quality', 'delivery'],
    technologies: [
      'Java 21',
      'Spring Boot 3.x',
      'AWS SQS',
      'JWT',
      'OAuth2',
      'PostgreSQL',
      'JUnit',
      'Mockito',
      'Git / Bitbucket',
      'Jenkins',
      'OpenShift'
    ],
    metrics: []
  },
  {
    id: 'bancoHipotecario',
    current: false,
    highlights: ['migration', 'testing', 'apis', 'delivery'],
    technologies: [
      'Java',
      'Spring',
      'Quarkus',
      'JUnit',
      'Mockito',
      'Jenkins',
      'OpenShift',
      'Git'
    ],
    metrics: []
  },
  {
    id: 'flexTechArg',
    current: false,
    highlights: ['authentication', 'encryption', 'testing'],
    technologies: ['Java', 'JUnit', 'Mockito', 'Git'],
    metrics: []
  },
  {
    id: 'byma',
    current: false,
    highlights: ['migration', 'events', 'persistence', 'frontend'],
    technologies: [
      'Java',
      'Spring',
      'Quarkus',
      'Kafka',
      'Oracle',
      'Hibernate / Panache',
      'Vue.js'
    ],
    metrics: []
  }
] as const;

export type Experience = (typeof experiences)[number];
