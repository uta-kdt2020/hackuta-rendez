import PushNotification from "react-native-push-notification";

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log("TOKEN:", token);
  },

  // (required) Called when a remote or local notification is opened or received
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);
  },

  // Android only: GCM or FCM Sender ID
  senderID: "YOUR_SENDER_ID",

  popInitialNotification: true,
  requestPermissions: true,
});