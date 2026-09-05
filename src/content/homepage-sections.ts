export const homepageSections = {
  about: true,
  experience: true,
  expertise: true,
  work: false,
  contact: true
} as const;

export type HomepageSection = keyof typeof homepageSections;
