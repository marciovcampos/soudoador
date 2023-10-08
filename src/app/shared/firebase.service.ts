import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Instituion } from '../model/instituion';
import { Campaign } from '../model/campaign';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private instituionsCollection: AngularFirestoreCollection<Instituion>;
  private campaignCollection: AngularFirestoreCollection<Campaign>;

  constructor(private firestore: AngularFirestore) {
    this.instituionsCollection =
      this.firestore.collection<Instituion>('instituions');
    this.campaignCollection = this.firestore.collection<Campaign>('campaigns');
  }

  getAllInstitutions(): Observable<Instituion[]> {
    return this.instituionsCollection
      .snapshotChanges()
      .pipe(map((actions) => this.mapCollectionData<Instituion>(actions)));
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
