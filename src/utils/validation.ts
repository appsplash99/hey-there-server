import Joi, { ValidationResult } from 'joi';
import { IRequest } from '@src/interfaces/express.interface';

/** TODO: might need to change the type for data */
export const registerValidation = (data: IRequest['body']): ValidationResult => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    email: Joi.string().min(6).max(50).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

export const loginValidation = (data: IRequest['body']): ValidationResult => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};
