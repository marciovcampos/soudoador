import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
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

  constructor(private firestore: AngularFirestore) {
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

  createUser(user: User): Promise<void> {
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private mapCollectionData<T>(actions: any[]): T[] {
    return actions.map((a) => {
      const data = a.payload.doc.data() as T;
      const id = a.payload.doc.id;
      return { id, ...data };
    });
  }
}
