import { initializeApp, cert } from 'firebase-admin/app';
import * as admin from 'firebase-admin';
//import serviceAccount from '@/fintnesspal-firebase-adminsdk-zwke2-7f574d575a.json';
 
const firebaseAdminConfig = {
    credential: cert({  projectId: process.env.NEXT_PUBLIC_ADMIN_PROJECT_ID,
        clientEmail: process.env.NEXT_PUBLIC_CLIENTEMAIL,
        privateKey: process.env.NEXT_PUBLIC_PRIVATEKEY})
} 

if (!admin.apps.length ) {
    initializeApp(firebaseAdminConfig);
}

const auth = admin.auth();

export {auth}