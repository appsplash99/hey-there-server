import consola from 'consola';
import { connect } from 'mongoose';
import { mongoSocialMediaDbUri } from './constants';

export const connectToDb = async (): Promise<void> => {
  try {
    await connect(mongoSocialMediaDbUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    consola.success('MongoDB connected sucessfully');
  } catch (error) {
    consola.error(new Error('MongoDB connection has failed..'), error);
  }
};
