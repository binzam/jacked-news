export interface Article {
  id: string | number;
  title: string;
  category: 'competitions' | 'nutrition' | 'steroids' | 'workouts' | 'health' |string;
  image: string;
  date: string;
  excerpt?: string;
  content: string;
  isBreaking?: boolean;
  isTrending?: boolean;
  readTime: string;
  author: string;
}
