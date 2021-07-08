import { Request, Response, NextFunction } from 'express';
//  TODO: add model interfaces here
import { IUser } from '@src/interfaces/user.interface';
// import { IVideo } from './video.interface';
// import { IPlaylist } from './playlist.interface';

export interface IRequest extends Request {
  user?: IUser;
  // video?: IVideo;
  // playlist?: IPlaylist;
}

export interface IResponse extends Response {}

export interface INextFunction extends NextFunction {}
