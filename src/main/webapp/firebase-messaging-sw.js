importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js');

const firebaseConfig = {
  apiKey: 'AIzaSyC5grkY0aeyAotQ4bfD54zDRgG8p3hnbMo',
  authDomain: 'moldovagaz.firebaseapp.com',
  projectId: 'moldovagaz',
  storageBucket: 'moldovagaz.appspot.com',
  messagingSenderId: '771686100052',
  appId: '1:771686100052:web:4455387aef076d7e8a91c1',
  measurementId: 'G-TK3LC9T3DH',
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
