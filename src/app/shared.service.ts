import { Injectable } from "@angular/core";
import { Firestore, collection, collectionChanges, collectionData, doc } from '@angular/fire/firestore';
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    constructor(
        private fs: Firestore
    ) {}

    getTasks() {
        let tasksCollection = collection(this.fs, 'tasks');
        return collectionData(tasksCollection, {idField:'id'});
    }
}