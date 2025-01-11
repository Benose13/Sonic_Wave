import { MongoClient } from "mongodb";

let database = null;

export const ConnectDB = async (callback) => {
  let databaseName = "SonicWave";
  try {
    let res = await MongoClient.connect(process.env.MONGO_URL);

    if (res) {
      database = res.db(databaseName);
      callback(null, res);
    }
  } catch (err) {
    callback(err, null);
  }
};

export { database };
