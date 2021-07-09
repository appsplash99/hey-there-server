import { User } from '../models/user.model';
import { resJson } from '../utils/responseHelpers';
import { registerValidation } from '../utils/validation';
import { IRequest, IResponse } from '../interfaces/express.interface';
import { generateHashedPassword } from '../utils/generateHashedPassword';

export const registerNewUser = async (req: IRequest, res: IResponse): Promise<void | IResponse> => {
  /** validate user before saving to database */
  const { error } = registerValidation(req.body);
  if (error) return resJson(res, 400, false, error.details[0].message, error);

  /** check if email exists */
  const emailAlreadyExists = await User.findOne({ email: req.body.email });
  if (emailAlreadyExists) return resJson(res, 400, false, 'Email already Exists');

  /** check if username exists */
  const usernameAlreadyExists = await User.findOne({ username: req.body.username });
  if (usernameAlreadyExists) return resJson(res, 400, false, 'Username already Exists');

  try {
    // generate new hashed password
    const hashedPassword = await generateHashedPassword(req.body.password);

    // create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // save user and respond
    const user = await newUser.save();
    resJson(res, 201, true, 'User Registered Successfully', 'no error', user);
  } catch (err) {
    resJson(res, 500, false, 'User Registeration Failed', err);
  }
};
