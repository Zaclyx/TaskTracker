import { Injectable } from "@angular/core";
import { Firestore, collection, collectionChanges, collectionData, doc, docData } from '@angular/fire/firestore';
import { Observable, combineLatest, map, switchMap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    constructor(
        private fs: Firestore
    ) {}

    // getTasks() {
    //     let tasksCollection = collection(this.fs, 'tasks');
    //     return collectionData(tasksCollection, {idField:'id'});
    // }

    getListOfReminders(){
      let remindersCollection = collection(this.fs, 'reminders');
      const remindersData = collectionData(remindersCollection, {idField:'id'});
      return remindersData.pipe(
        map(reminder => {
          return reminder.map(document => {
            const data = document.data();
            const id = document.id;
            const user = data.user;
            const userRef = doc(this.fs,user);
            const userData = docData(userRef);
            const customer = data.customer;
            const customerRef = doc(this.fs, customer);
            const customerData = docData(customerRef);
            return {
              ...document,
              id,
              customer: customerData,
              user: userData,
            }
          }
          );
        })
      )
    }
}