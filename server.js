import express from 'express';
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, getDoc, doc } from "firebase/firestore";
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const firebaseConfig = {
  apiKey: "AIzaSyAmcwnXs0OphfaXa6xGJVJh1Hw6wiribz8",
  authDomain: "rchapp-d1f0a.firebaseapp.com",
  projectId: "rchapp",
  storageBucket: "rchapp.appspot.com",
  messagingSenderId: "704147260511",
  appId: "1:704147260511:web:274a572a3b8f5f273547ea",
  measurementId: "G-KLLME3REE2"
};

const firebase_app = initializeApp(firebaseConfig);
const db = getFirestore(firebase_app);

app.get('/', (req, res) => {
  res.send('Successful response 1.');
});

app.get('/test', (req, res) => {
  res.send('Test response.');
});

app.get('/add', async (req, res) => {
  await setDoc(doc(db, "test_collection_name", "test_key_name"), { value: "test value data" });
  res.send(`Document added.`);
});

app.get('/get', async (req, res) => {
  const docRef = doc(db, "test_collection_name", "test_key_name");
  const docSnap = await getDoc(docRef);
  res.send(`Document found: ${JSON.stringify(docSnap.data())}`);
});

app.get('/key', async (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
   console.log(`App is running at: http://localhost:${port}`);
});