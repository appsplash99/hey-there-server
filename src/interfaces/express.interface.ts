import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { IUser } from './user.interface';

export interface IRequest extends Request {
  userId?: IUser;
  user?: string | JwtPayload;
}

export interface IResponse extends Response {}

export interface INextFunction extends NextFunction {}
