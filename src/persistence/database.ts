import mongoose from 'mongoose'

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_DB, {
        useNewUrlParser: true, useUnifiedTopology: true
    });
    console.log('>>> Database connected');
}
catch {
    console.log('Error Database connect');
}
}