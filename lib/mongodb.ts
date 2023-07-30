// import mongoose, { Connection } from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// let cachedConnection: Connection | null = null;

// export async function connectToMongoDB() {
//   if (cachedConnection) {
//     return cachedConnection;
//   }

//   const options: mongoose.ConnectOptions = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   };

//   const connection = await mongoose.connect(MONGODB_URI, options);
//   cachedConnection = connection.connection;
  
//   console.log('Connected to MongoDB');
  
//   return cachedConnection;
// }


import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToMongoDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "track_project",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }
}
