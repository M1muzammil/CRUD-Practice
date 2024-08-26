// import { MongoClient } from 'mongodb'

// const uri = process.env.uri

// export const client = new MongoClient(uri)

// async function run() {
//     try {
//         await client.connect()
//         console.log("successfully connected")
//     } catch (err) {
//         console.log(err.stack)
//         await client.close()
//         process.exit(1)
//     }
// }

// run().catch(console.dir)

// process.on('SIGNINT', async function () {
//     console.log("app is terminating")
//     await client.close()
//     process.exit(0)
// })


import mongoose from 'mongoose';

const uri = process.env.uri;

async function run() {
    try {
        // Connect to MongoDB using Mongoose
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Successfully connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    }
}

run().catch(console.dir);

process.on('SIGINT', async function () {

    console.log("App is terminating");
    await mongoose.disconnect();
    process.exit(0);
    
});

export default mongoose;