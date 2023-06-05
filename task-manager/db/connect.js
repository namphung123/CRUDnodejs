import mongoose from 'mongoose';
const connectionString = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log('CONNECTED DB SUCCESSFULLY');
    return connection;
  } catch (err) {
    console.log(err);
  }
};

export default connectionString;
