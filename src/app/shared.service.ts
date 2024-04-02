import { Injectable } from "@angular/core";
import { Firestore, collection, collectionChanges, collectionData, doc, docData, getDocs } from '@angular/fire/firestore';
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

    async getListOfReminders(){
      let userData: any;
      let remindersCollection = collection(this.fs, 'reminders');
      const remindersData = collectionData(remindersCollection, {idField:'id'});
      return remindersData.subscribe(document => {
        document.map(async reminder => {
          const userRef = reminder.user;
          const customerRef = reminder.customer;
          await docData(userRef).subscribe(user => {
            userData = user;
          })
          const customerDocData = await docData(customerRef);
          console.log(reminder);
          console.log(userData);
          console.log(customerRef);
        })
      })
    }
}