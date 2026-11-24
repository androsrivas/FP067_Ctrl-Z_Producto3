import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración web del proyecto Firebase (la misma base de datos del Producto 2)
const firebaseConfig = {
    apiKey: 'AIzaSyDpPKxEDbYd_3jv8DUVs92rKPGTUDOEuVw',
    authDomain: 'fp067-ctrl-z-producto2.firebaseapp.com',
    projectId: 'fp067-ctrl-z-producto2',
    storageBucket: 'fp067-ctrl-z-producto2,firebasestorage.app',
    messagingSenderId: '1043953342169',
    appId: '1:1043953342169:web:cca30db27b1476676a90c8',
};

// getApps() evita el error "duplicate-app" cuando Fast Refresh recarha este módulo.
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);


export const db = getFirestore(app);