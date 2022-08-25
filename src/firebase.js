//firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  apiKey: "AIzaSyAXpAWkbX3jVYDuz-zUDbFjG3xH8kt2eL4",
  authDomain: "sparta-react-3ec51.firebaseapp.com",
  projectId: "sparta-react-3ec51",
  storageBucket: "sparta-react-3ec51.appspot.com",
  messagingSenderId: "235806351383",
  appId: "1:235806351383:web:495020e48afe9b4bbd7c52",
  measurementId: "G-VYCFFR38RR",
};

// firebaseConfig 정보로 firebase 시작
const app = initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const db = getFirestore(app);

// 필요한 곳에서 사용할 수 있도록 내보내기
export { db };
