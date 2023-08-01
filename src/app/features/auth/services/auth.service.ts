import { AngularFireAuth } from '@angular/fire/compat/auth';
import { collection, getDocs } from 'firebase/firestore';

import { Observable } from 'rxjs';
import IUser from '../models/user.models';
import { delay, map } from 'rxjs/operators';

import { inject, Injectable } from '@angular/core';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  idToken,
  signInWithPopup,
  signInWithRedirect,
  user,
  UserCredential,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _firestore = inject(Firestore);
  private _auth = inject(Auth);

  isAuthenticated$ = authState(this._auth);
  user$ = user(this._auth);
  idToken$ = idToken(this._auth);

  async signupUsingGoogle() {
    const auth_1 = await signInWithRedirect(
      this._auth,
      new GoogleAuthProvider()
    );
    return await this._setUserData(auth_1);
  }

  public async createUser(userData: IUser) {
    return createUserWithEmailAndPassword(
      this._auth,
      userData.email!.trim(),
      userData.password!.trim()
    ).then((auth) => this._setUserData(auth));
  }

  private async _setUserData(auth: UserCredential): Promise<IUser> {
    const user: IUser = {
      name: (auth.user.displayName || auth.user.email)!,
      email: auth.user.email!,
    };
    const userDocRef = doc(this._firestore, `users/${auth.user.uid}`);
    return setDoc(userDocRef, user).then(() => user);
  }
}
