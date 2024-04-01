import { Injectable } from "@angular/core";
import { Firestore, collection, collectionChanges, collectionData, doc } from '@angular/fire/firestore';
import { Observable, combineLatest, map, switchMap } from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore"

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    constructor(
        private afs: AngularFirestore
    ) {}

    // getTasks() {
    //     let tasksCollection = collection(this.fs, 'tasks');
    //     return collectionData(tasksCollection, {idField:'id'});
    // }

    getRemindersWithUserData(): Observable<any[]> {
        return this.afs.collection('Reminders').snapshotChanges().pipe(
          switchMap(reminders => {
            const reminderObservables: Observable<any>[] = reminders.map(reminder => {
              const data = reminder.payload.doc.data() as Record<string, any>;
              const userDocRef = data.user;
              const customerDocRef = data.customer;
    
              // Fetch user and customer data
              const user$ = this.afs.doc(userDocRef.path).snapshotChanges().pipe(
                map((userDoc: { payload: { id: any; data: () => any; }; }) => {
                  return { id: userDoc.payload.id, ...(userDoc.payload.data() as any) };
                })
              );
    
              const customer$ = this.afs.doc(customerDocRef.path).snapshotChanges().pipe(
                map((customerDoc: { payload: { id: any; data: () => any; }; }) => {
                  return { id: customerDoc.payload.id, ...(customerDoc.payload.data() as any) };
                })
              );
    
              return combineLatest([user$, customer$]).pipe(
                map(([user, customer]) => {
                  return { id: reminder.payload.doc.id, ...data, user, customer };
                })
              );
            });
            return combineLatest(reminderObservables);
          })
        );
      }
}