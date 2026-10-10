import {selectedWorkState} from './selected-work';

export const homepageSections = {
  about: true,
  experience: true,
  expertise: true,
  work: selectedWorkState === 'published',
  contact: true
} as const;

export type HomepageSection = keyof typeof homepageSections;
