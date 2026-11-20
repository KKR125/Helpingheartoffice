import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,type User} from 'firebase/auth';
import {collection,doc,getDocs,setDoc,serverTimestamp} from 'firebase/firestore';
import {ref,uploadString,getBytes} from 'firebase/storage';
import {auth,db,storage,firebaseReady} from './firebase';
export type OfficeFile={id:string,name:string,type:string,updated:number,content:string,favourite:boolean};
export async function register(email:string,password:string){if(!auth)throw new Error('Firebase Authentication is not configured. Check the Firebase API key, Auth domain, project ID and app ID in Vercel.');return createUserWithEmailAndPassword(auth,email,password)}
export async function login(email:string,password:string){if(!auth)throw new Error('Firebase Authentication is not configured. Check the Firebase API key, Auth domain, project ID and app ID in Vercel.');return signInWithEmailAndPassword(auth,email,password)}
export async function logout(){if(auth)await signOut(auth)}
function requireCloudStorage(){if(!db||!storage)throw new Error('Sign-in is available, but cloud file sync needs the VITE_FIREBASE_STORAGE_BUCKET environment variable in Vercel. Add your Firebase Storage bucket and redeploy.')}
export async function restoreCloudFiles(user:User):Promise<OfficeFile[]>{
 requireCloudStorage();
 const snap=await getDocs(collection(db!,'users',user.uid,'files'));
 const files:OfficeFile[]=[];
 for(const item of snap.docs){const meta=item.data();if(typeof meta.storagePath!=='string')continue;
  try{const bytes=await getBytes(ref(storage!,meta.storagePath));const parsed=JSON.parse(new TextDecoder().decode(bytes)) as OfficeFile;files.push(parsed)}catch(e){console.warn('Could not restore file',item.id,e)}
 }
 return files;
}
export async function syncCloudFile(user:User,file:OfficeFile){
 requireCloudStorage();
 const path='users/'+user.uid+'/files/'+file.id+'.json';
 await uploadString(ref(storage!,path),JSON.stringify(file),'raw',{contentType:'application/json'});
 await setDoc(doc(db!,'users',user.uid,'files',file.id),{name:file.name,type:file.type,updated:file.updated,favourite:file.favourite,storagePath:path,serverUpdatedAt:serverTimestamp()},{merge:true});
}
export {firebaseReady};
