import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Institution } from '../model/institution';
import { Campaign } from '../model/campaign';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private institutionsCollection: AngularFirestoreCollection<Institution>;
  private campaignCollection: AngularFirestoreCollection<Campaign>;

  constructor(private firestore: AngularFirestore) {
    this.institutionsCollection =
      this.firestore.collection<Institution>('instituions');
    this.campaignCollection = this.firestore.collection<Campaign>('campaigns');
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private mapCollectionData<T>(actions: any[]): T[] {
    return actions.map((a) => {
      const data = a.payload.doc.data() as T;
      const id = a.payload.doc.id;
      return { id, ...data };
    });
  }
}
