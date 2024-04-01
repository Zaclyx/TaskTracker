import { Injectable } from "@angular/core";
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    constructor(
        private fs: Firestore
    ) {}

    getTasks() {
        let tasksCollection = collection(this.fs, 'tasks');
        return collectionData(tasksCollection, {idField:'id'})
    }
}