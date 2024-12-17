import { 
    collection,
    doc,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    query,
    where
  } from 'firebase/firestore';
  import { db } from '../config/firebase';
  import { Workout } from './types';
  
  const COLLECTION = 'workouts';
  
  export const workoutService = {
    getAll: async (userId: string): Promise<Workout[]> => {
      try {
        const q = query(
          collection(db, COLLECTION),
          where('userId', '==', userId)
        );
        
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Workout));
      } catch (error) {
        throw error;
      }
    },
  
    get: async (id: string): Promise<Workout> => {
      try {
        const docRef = doc(db, COLLECTION, id);
        const docSnap = await getDoc(docRef);
        
        if (!docSnap.exists()) {
          throw new Error('Workout not found');
        }
  
        return {
          id: docSnap.id,
          ...docSnap.data()
        } as Workout;
      } catch (error) {
        throw error;
      }
    },
  
    create: async (workout: Omit<Workout, 'id'>): Promise<string> => {
      try {
        const docRef = await addDoc(collection(db, COLLECTION), {
          ...workout,
          createdAt: new Date()
        });
        return docRef.id;
      } catch (error) {
        throw error;
      }
    },
  
    update: async (id: string, workout: Partial<Workout>): Promise<void> => {
      try {
        const docRef = doc(db, COLLECTION, id);
        await updateDoc(docRef, workout);
      } catch (error) {
        throw error;
      }
    },
  
    delete: async (id: string): Promise<void> => {
      try {
        const docRef = doc(db, COLLECTION, id);
        await deleteDoc(docRef);
      } catch (error) {
        throw error;
      }
    }
  };