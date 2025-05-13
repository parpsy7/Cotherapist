const functions = require("firebase-functions");

// یک function ساده برای تست
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});
