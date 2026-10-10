export type SelectedWorkState = 'hidden' | 'building' | 'published';

export const selectedWork = {
  id: 'alisadosMaca',
  state: 'published',
  url: 'https://alisados-maca.vercel.app/',
  stack: [
    'Next.js',
    'TypeScript',
    'PostgreSQL',
    'Supabase',
    'Mercado Pago',
    'Vercel'
  ],
  highlights: ['booking', 'payments', 'admin', 'production']
} as const satisfies {
  id: string;
  state: SelectedWorkState;
  url: string;
  stack: readonly string[];
  highlights: readonly string[];
};

export const selectedWorkState = selectedWork.state;
