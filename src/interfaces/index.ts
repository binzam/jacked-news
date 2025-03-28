export interface Article {
  id: string | number;
  title: string;
  category: 'competitions' | 'nutrition' | 'steroids' | 'workouts' | string;
  image: string;
  date: string;
  excerpt?: string;
  content: string;
  isBreaking?: boolean;
}
