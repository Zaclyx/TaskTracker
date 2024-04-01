import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, DocumentData, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable, from, map, mergeMap } from "rxjs";

export interface Item { id: string; name: string; }

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    
    private itemsCollection: AngularFirestoreCollection<Item>;
    items: Observable<Item[]>;

    constructor(
        private fs: AngularFirestore
    ) {}

    getTasks(): Observable<Item[]> {
        this.itemsCollection = this.fs.collection<Item>('tasks');
        return this.itemsCollection.valueChanges({ idField: 'id' });
    }

    getListOfReminders(): Observable<any[]> {
        const remindersCollection = this.fs.collection('reminders');
        return remindersCollection.valueChanges({ idField: 'id' }).pipe(
            map((reminders: any[]) => {
                return reminders.map(async reminder => {
                    const data = reminder; // Assuming reminder already contains data payload
                    const id = reminder.id;
                    const userRef = data.user;
                    const customerRef = data.customer;
                    const [userData, customerData] = await Promise.all([
                        userRef.get().then((doc: { data: () => any; }) => doc.data()),
                        customerRef.get().then((doc: { data: () => any; }) => doc.data())
                    ]);

                    return {
                        id,
                        ...data,
                        user: userData,
                        customer: customerData
                    };
                });
            }),
            mergeMap(promises => from(Promise.all(promises)))
        );
    }
}