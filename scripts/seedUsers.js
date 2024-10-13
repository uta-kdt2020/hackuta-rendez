const Realm = require('realm');
const BSON = require('bson');

const APP_ID = '670ad1f06680ed2653296511'; // Your Realm App ID

const loginAnonymous = async () => {
  const app = new Realm.App({ id: APP_ID });
  const user = await app.logIn(Realm.Credentials.anonymous());
  return user;
};

const seedUsers = async () => {
  const user = await loginAnonymous();
  const mongodb = user.mongoClient('mongodb-atlas');
  const collection = mongodb.db('Project 0').collection('users');

  const people = [
    {
      name: "Alice",
      location: {
        latitude: 35.6895,  // Tokyo
        longitude: 139.6917
      }
    },
    {
      name: "Bob",
      location: {
        latitude: 35.7425,  // Approximately 25 miles northwest (Saitama)
        longitude: 139.6295
      }
    },
    {
      name: "Charlie",
      location: {
        latitude: 35.6355,  // Approximately 25 miles southeast (Chiba)
        longitude: 140.1175
      }
    },
    {
      name: "Diana",
      location: {
        latitude: 35.6895,  // Approximately 25 miles southwest (Yokohama)
        longitude: 139.6100
      }
    }
  ];
  
  console.log(people);
  
  for (const testUser of testUsers) {
    await collection.insertOne({
      _id: new BSON.ObjectId(),
      ...testUser
    });
  }

  console.log('Test users added successfully');
};

seedUsers().then(() => process.exit(0)).catch(console.error);
