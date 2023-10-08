import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Institution } from '../model/institution';
import { Campaign } from '../model/campaign';
import { Faq } from '../model/faq';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private institutionsCollection: AngularFirestoreCollection<Institution>;
  private campaignCollection: AngularFirestoreCollection<Campaign>;
  private faqCollection: AngularFirestoreCollection<Faq>;
  private usersCollection: AngularFirestoreCollection<User>;

  constructor(
    private firestore: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {
    this.institutionsCollection =
      this.firestore.collection<Institution>('instituions');
    this.campaignCollection = this.firestore.collection<Campaign>('campaigns');
    this.faqCollection = this.firestore.collection<Faq>('faq');
    this.usersCollection = this.firestore.collection<User>('users');
  }

  getAllInstitutions(): Observable<Institution[]> {
    return this.institutionsCollection
      .snapshotChanges()
      .pipe(map((actions) => this.mapCollectionData<Institution>(actions)));
  }

  getAllCampaigns(): Observable<Campaign[]> {
    return this.campaignCollection
      .snapshotChanges()
      .pipe(map((actions) => this.mapCollectionData<Campaign>(actions)));
  }

  getAllFaq(): Observable<Faq[]> {
    return this.faqCollection
      .snapshotChanges()
      .pipe(map((actions) => this.mapCollectionData<Faq>(actions)));
  }

  signUp(user: User): Promise<void> {
    this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
    return new Promise<void>((resolve, reject) => {
      this.usersCollection
        .add(user)
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(`Erro ao criar usuário: ${error}`);
        });
    });
  }

  signIn(email: string, password: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.afAuth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(`Erro ao fazer login: ${error.message}`);
        });
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private mapCollectionData<T>(actions: any[]): T[] {
    return actions.map((a) => {
      const data = a.payload.doc.data() as T;
      const id = a.payload.doc.id;
      return { id, ...data };
    });
  }
}
