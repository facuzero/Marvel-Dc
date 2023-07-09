// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import dotenv from 'dotenv';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: dotenv.process.env.APIKEY,
  authDomain: dotenv.process.env.AUTHDOMAIN,
  projectId: dotenv.process.env.PROJECTID,
  storageBucket: dotenv.process.env.STORAGEBUCKET,
  messagingSenderId: dotenv.process.env.MESSAGINGSENDERID,
  appId: dotenv.process.env.APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const collectionRefMarvel = collection(db, 'Marvel');
const collectionRefDC = collection(db, 'DC');

export async function registerNewHeroeMarvel(hero) {
  try {
    const docRef = doc(collectionRefMarvel, hero);
    await setDoc(docRef, hero);
  } catch (error) {
    console.error(error);
  }
}
export async function registerNewHeroeDC(hero) {
  try {
    const docRef = doc(collectionRefDC, hero);
    await setDoc(docRef, hero);
  } catch (error) {
    console.error(error);
  }
}

export async function uploadImageToMarvelCollection(file, imageName) {
  const storageRef = ref(storage, `Marvel/${imageName}`);
  try {
    await uploadBytes(storageRef, file);
    console.log('Imagen subida a la colección de Marvel con éxito');
  } catch (error) {
    console.error('Error al subir la imagen a la colección de Marvel', error);
  }
}

export async function uploadImageToDCCollection(file, imageName) {
  const storageRef = ref(storage, `DC/${imageName}`);
  try {
    await uploadBytes(storageRef, file);
    console.log('Imagen subida a la colección de DC con éxito');
  } catch (error) {
    console.error('Error al subir la imagen a la colección de DC', error);
  }
}
