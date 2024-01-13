import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyByFdR1IY6akQcuVYPXmMn6C8KsOdixy9g",
	authDomain: "storytellingapp-9a272.firebaseapp.com",
	databaseURL: "https://storytellingapp-9a272-default-rtdb.firebaseio.com",
	projectId: "storytellingapp-9a272",
	storageBucket: "storytellingapp-9a272.appspot.com",
	messagingSenderId: "1083891929019",
	appId: "1:1083891929019:web:57f5d682de35e89a2cbe9e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
