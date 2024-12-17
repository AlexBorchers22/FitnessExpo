export interface User {
    id: string;
    email: string;
    displayName: string;
    photoURL?: string;
  }
  
  export interface Workout {
    id: string;
    title: string;
    description: string;
    duration: string;
    userId: string;
    exercises: Exercise[];
    createdAt: Date;
  }
  
  export interface Exercise {
    name: string;
    sets: number;
    reps: number;
    weight: number;
  }