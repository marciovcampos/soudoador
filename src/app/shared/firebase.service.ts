import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Instituion } from './instituion';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  instituionsCollection: AngularFirestoreCollection<Instituion>;

  constructor(private firestore: AngularFirestore) {
    this.instituionsCollection = this.firestore.collection('instituions');
  }

  getAllInstituions(): Observable<Instituion[]> {
    return this.instituionsCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Instituion;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }
}
