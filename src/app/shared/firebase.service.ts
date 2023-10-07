import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Instituion } from './instituion';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  institionsRef: AngularFirestoreCollection<Instituion>;

  constructor(private db: AngularFirestore) {
    this.institionsRef = db.collection('/instituions');
  }

  getAllInstituions(): AngularFirestoreCollection<Instituion> {
    return this.institionsRef;
  }
}
