import { Iroles } from './iroles';

export interface IUser {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    // role: string;
}
