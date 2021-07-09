import { Request, Response, NextFunction } from 'express';
import { IUser } from './user.interface';

export interface IRequest extends Request {
  userId?: IUser;
}

export interface IResponse extends Response {}

export interface INextFunction extends NextFunction {}
