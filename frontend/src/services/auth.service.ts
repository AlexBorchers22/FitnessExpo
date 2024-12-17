import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
  } from 'firebase/auth';
  import { doc, setDoc } from 'firebase/firestore';
  import { auth, db } from '../config/firebase';
  import { User } from './types';
  
  export const authService = {
    register: async (email: string, password: string, displayName: string) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        // Update profile
        await updateProfile(userCredential.user, { displayName });
        
        // Create user document in Firestore
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          email,
          displayName,
          createdAt: new Date()
        });
  
        return userCredential.user;
      } catch (error) {
        throw error;
      }
    },
  
    login: async (email: string, password: string) => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
      } catch (error) {
        throw error;
      }
    },
  
    logout: async () => {
      try {
        await signOut(auth);
      } catch (error) {
        throw error;
      }
    }
  };