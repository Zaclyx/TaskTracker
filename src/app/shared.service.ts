import { Injectable } from "@angular/core";
import { Firestore, Timestamp, addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, where } from '@angular/fire/firestore';
import { Observable, from } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class SharedService {
    constructor(
        private fs: Firestore
    ) {}

     // Users Firestore Methods
    addUser(user: any) {
      let usersCollection = collection(this.fs, 'users');
      return addDoc(usersCollection, user);
    }

    createReminder(ReminderInterfaceDTO: any) {
      let remindersDataCollection = collection(this.fs, 'reminders');
        try {
          const currentTimeStamp = Timestamp.now();
          const { additionalAttribute, customer, user, type, year, month, week } = ReminderInterfaceDTO;
          const post = {
            additionalattribute: additionalAttribute,
            customer: customer,
            user: user,
            type: type,
            year: year,
            month: month,
            week: week,
            start: currentTimeStamp
          }
          addDoc(remindersDataCollection, post);
        } catch (error) {
          console.error("Error creating reminder:", error);
          throw error; // Re-throw error to be caught by the caller
        }
    };

    updateReminder(docId:string, ReminderInterfaceDTO: any) {
      const { additionalAttribute, customer, user, type, year, month, week } = ReminderInterfaceDTO;
      const currentTimeStamp = Timestamp.now();
      setDoc(doc(this.fs, "reminders", docId), {
          additionalattribute: additionalAttribute,
            customer: customer,
            user: user,
            type: type,
            year: year,
            month: month,
            week: week,
            start: currentTimeStamp
      })
    }

    deleteReminder(docId:string){
      deleteDoc(doc(this.fs, "reminders", docId));
    }

    createTask(TaskInterfaceDTO: any){
      
    }

    getListOfReminders(user: string, type: string, weekmonthyear: string): Observable<any[]> {
        let remindersCollection = collection(this.fs, 'reminders');
        let userCollection = collection(this.fs, 'users');
  
      return from((async (): Promise<any[]> => {
        try {
          const userQuerySnap = await getDocs(query(userCollection, where("username", "==", user)));
          const userDoc = userQuerySnap.docs[0];
          const username = userDoc.ref;
  
          let reminderQuery;
          let reminderQuerySnap;
          if (type === "WEEKLY") {
            reminderQuery = query(remindersCollection, where("user", "==", username), where('type', '==', type), where('week', '==', weekmonthyear));
            reminderQuerySnap = await getDocs(reminderQuery);
          } else if (type === "MONTHLY") {
            reminderQuery = query(remindersCollection, where("user", "==", username), where('type', '==', type), where('month', '==', weekmonthyear));
            reminderQuerySnap = await getDocs(reminderQuery);
          } else if (type === "YEARLY") {
            reminderQuery = query(remindersCollection, where("user", "==", username), where('type', '==', type), where('year', '==', weekmonthyear));
            reminderQuerySnap = await getDocs(reminderQuery);
          }
  
          const remindersData: any[] = [];
          if(reminderQuerySnap != undefined && !reminderQuerySnap.empty){
            reminderQuerySnap.forEach(async document => {
              const reminderData = document.data();
              const userRefPath = reminderData.user._key.path.segments.slice(5, 7);
              const userRef = doc(this.fs, userRefPath.join('/'));
              const userData = (await getDoc(userRef)).data();
              const customerRefPath = reminderData.customer._key.path.segments.slice(5, 7);
              const customerRef = doc(this.fs, customerRefPath.join('/'));
              const customerData = (await getDoc(customerRef)).data();
              const reminderDataStart = reminderData.start.toDate();
              remindersData.push({
                ...reminderData,
                start: reminderDataStart,
                user: userData?.username,
                customer: customerData,
              });
            });
          }
          return remindersData;
        } catch (error) {
          console.error("Error fetching reminders:", error);
          throw error; // Re-throw error to be caught by the caller
        }
      })());
    }

    getListOfRemindersMetaData(type: string): Observable<any[]> {
      let remindersMetaDataCollection = collection(this.fs, 'remindermetadata');

    return from((async (): Promise<any[]> => {
      try {
        const reminderQuery = query(remindersMetaDataCollection, where('type', '==', type));
        const reminderQuerySnap = await getDocs(reminderQuery);
        const remindersData: any[] = [];
        if(reminderQuerySnap != undefined && !reminderQuerySnap.empty){
          reminderQuerySnap.forEach(async document => {
            const reminderData = document.data();
            const reminderDataCreatedAt = reminderData.createdat.toDate();
            const reminderDataUpdatedAt = reminderData.updatedat.toDate();
            remindersData.push({
              ...reminderData,
              createdat: reminderDataCreatedAt,
              updatedat: reminderDataUpdatedAt,
            });
          });
        }
        return remindersData;
      } catch (error) {
        console.error("Error fetching reminders meta data:", error);
        throw error; // Re-throw error to be caught by the caller
      }
    })());
  }

  // createTasks(){
  //   let tasksCollection = collection(this.fs, 'tasks');
  //   try {
  //     const currentTimeStamp = Timestamp.now();
  //     const { description, taskid, reminderuuid, title } = 
      
  //   } catch (error) {
  //     console.error("Error creating tasks:", error);
  //     throw error; // Re-throw error to be caught by the caller
  //   }
  // }
}