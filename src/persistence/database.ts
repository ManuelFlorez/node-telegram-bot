import mongoose from 'mongoose'
import { logger } from '../util/logger'

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true, useUnifiedTopology: true
    });
    logger.info('>>> Database connected');
  } catch {
    logger.error('Error Database connect');
  }
}