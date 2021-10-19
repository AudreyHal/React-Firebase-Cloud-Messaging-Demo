// This a service worker file for receiving push notifitications.
// See `Access registration token section` @ https://firebase.google.com/docs/cloud-messaging/js/client#retrieve-the-current-registration-token

// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');


// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: `REPLACE_WITH_YOUR_FIREBASE_MESSAGING_API_KEY`,
  authDomain: `REPLACE_WITH_YOUR_FIREBASE_MESSAGING_AUTH_DOMAIN`,
  projectId: `REPLACE_WITH_YOUR_FIREBASE_MESSAGING_PROJECT_ID`,
  storageBucket: `REPLACE_WITH_YOUR_FIREBASE_MESSAGING_STORAGE_BUCKET`,
  messagingSenderId: `REPLACE_WITH_YOUR_FIREBASE_MESSAGING_SENDER_ID`,
  appId: `REPLACE_WITH_YOUR_FIREBASE_MESSAGING_APP_ID`,
  measurementId: `REPLACE_WITH_YOUR_FIREBASE_MESSAGING_MEASUREMENT_ID`,
};


firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

// Handle incoming messages while the app is not in focus (i.e in the background, hidden behind other tabs, or completely closed).
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
