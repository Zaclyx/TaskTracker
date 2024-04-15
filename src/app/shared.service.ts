import { Injectable } from '@angular/core';
import {
  Firestore,
  Timestamp,
  addDoc,
  and,
  collection,
  collectionData,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  where,
} from '@angular/fire/firestore';
import { BehaviorSubject, Observable, from, interval, switchMap } from 'rxjs';
import { AuthService } from './modules/auth';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private currentTask = new BehaviorSubject<any>(null);
  currentTask$ = this.currentTask.asObservable();

  constructor(private fs: Firestore, private auth: AuthService) {}

  // Users Firestore Methods
  addUser(user: any) {
    let usersCollection = collection(this.fs, 'users');
    return addDoc(usersCollection, user);
  }

  async getUserDetails(userId: string) {
    const q = query(collection(this.fs, 'users'), where('uid', '==', userId));
    const snapshot = await getDocs(q);
    const userResult = snapshot.docs[0].data();

    const q2 = query(
      collection(this.fs, 'projects'),
      where('projectId', '==', userResult.projectId)
    );
    const snapshot2 = await getDocs(q2);
    const projectResult = snapshot2.docs[0].data();

    return [userResult, projectResult];
  }

  async getProjectDetails(projectId: string) {
    const q = query(
      collection(this.fs, 'projects'),
      where('projectId', '==', projectId)
    );
    const snapshot = await getDocs(q);
    if (snapshot.docs.length == 0) return null;
    else return snapshot.docs[0].data();
  }

  getTasks(projectId: string, status: string) {
    let tasksCollection = collection(this.fs, 'tasks');
    let q;
    const currentTimeStamp = Timestamp.now();
    if (status == 'In Progress') {
      q = query(
        tasksCollection,
        where('projectId', '==', projectId),
        where('status', '==', status),
        where('duedt', '>', currentTimeStamp),
        orderBy('duedt')
      );
    } else {
      q = query(
        tasksCollection,
        where('projectId', '==', projectId),
        where('status', '==', status),
        orderBy('duedt')
      );
    }
    return collectionData(q, { idField: 'id' });
  }

  setCurrentTask(task: any) {
    this.currentTask.next(task);
  }

  checkAndUpdateDueDates(): Observable<any> {
    const tasksCollection = collection(this.fs, 'tasks');
    return from(
      getDocs(query(tasksCollection, where('status', '==', 'In Progress')))
    ).pipe(
      switchMap((snapshot) => {
        const updates: any[] = [];
        const currentDate = new Date();

        snapshot.forEach((doc) => {
          const data = doc.data();
          console.log(data);
          console.log(data.duedt);
          const dueDate = data.duedt.toDate(); // Assuming dueDate is a Firestore Timestamp

          console.log('dueDate:', dueDate);
          console.log('currDate:', currentDate);

          if (dueDate < currentDate) {
            updates.push(
              setDoc(doc.ref, { status: 'Overdue' }, { merge: true })
            );
          }
        });

        return Promise.all(updates);
      })
    );
  }

  async updateLastLogin(userId: string) {
    const q = query(collection(this.fs, 'users'), where('uid', '==', userId));
    const snapshot = await getDocs(q);
    const snapshotDocId = snapshot.docs[0].id;
    const docRef = doc(this.fs, 'users', snapshotDocId);
    setDoc(docRef, { lastLogin: Timestamp.now() }, { merge: true });
  }

  async profileUpdate(userId: string, projectExist: boolean, value: any) {
    const q = query(collection(this.fs, 'users'), where('uid', '==', userId));
    const snapshot = await getDocs(q);
    const snapshotDocId = snapshot.docs[0].id;
    const docRef = doc(this.fs, 'users', snapshotDocId);
    setDoc(
      docRef,
      { name: value.name, projectId: value.projectId },
      { merge: true }
    );

    const q2 = query(
      collection(this.fs, 'tasks'),
      where('userId', '==', userId)
    );
    const snapshot2 = await getDocs(q2);
    snapshot2.forEach((task) => {
      const docRef2 = doc(this.fs, 'tasks', task.id);
      setDoc(docRef2, { userName: value.name }, { merge: true });
    });

    if (!projectExist) {
      const q3 = collection(this.fs, 'projects');
      const payload = {
        projectId: value.projectId,
        projectName: value.projectName,
      };
      addDoc(q3, payload);
    }
  }
}
//   createReminder(ReminderInterfaceDTO: any) {
//     let remindersDataCollection = collection(this.fs, 'reminders');
//       try {
//         const currentTimeStamp = Timestamp.now();
//         const { additionalAttribute, customer, user, type, year, month, week } = ReminderInterfaceDTO;
//         const post = {
//           additionalattribute: additionalAttribute,
//           customer: customer,
//           user: user,
//           type: type,
//           year: year,
//           month: month,
//           week: week,
//           start: currentTimeStamp
//         }
//         addDoc(remindersDataCollection, post);
//       } catch (error) {
//         console.error("Error creating reminder:", error);
//         throw error; // Re-throw error to be caught by the caller
//       }
//   };

//   updateReminder(docId:string, ReminderInterfaceDTO: any) {
//     const { additionalAttribute, customer, user, type, year, month, week } = ReminderInterfaceDTO;
//     const currentTimeStamp = Timestamp.now();
//     setDoc(doc(this.fs, "reminders", docId), {
//         additionalattribute: additionalAttribute,
//           customer: customer,
//           user: user,
//           type: type,
//           year: year,
//           month: month,
//           week: week,
//           start: currentTimeStamp
//     })
//   }

//   deleteReminder(docId:string){
//     deleteDoc(doc(this.fs, "reminders", docId));
//   }

//   createTask(TaskInterfaceDTO: any){

//   }

//   getListOfReminders(email: string, type: string, weekmonthyear: string): Observable<any[]> {
//       let remindersCollection = collection(this.fs, 'reminders');
//       let userCollection = collection(this.fs, 'users');

//     return from((async (): Promise<any[]> => {
//       try {
//         const userQuerySnap = await getDocs(query(userCollection, where("email", "==", email)));
//         const userDocId = userQuerySnap.docs[0].id;
//         console.log(userDocId);

//         let reminderQuery;
//         let reminderQuerySnap;
//         if (type === "WEEKLY") {
//           reminderQuery = query(remindersCollection, where("user", "==", userDocId), where('type', '==', type), where('week', '==', weekmonthyear));
//           reminderQuerySnap = await getDocs(reminderQuery);
//         } else if (type === "MONTHLY") {
//           reminderQuery = query(remindersCollection, where("user", "==", userDocId), where('type', '==', type), where('month', '==', weekmonthyear));
//           reminderQuerySnap = await getDocs(reminderQuery);
//         } else if (type === "YEARLY") {
//           reminderQuery = query(remindersCollection, where("user", "==", userDocId), where('type', '==', type), where('year', '==', weekmonthyear));
//           reminderQuerySnap = await getDocs(reminderQuery);
//         }

//         const remindersData: any[] = [];
//         if(reminderQuerySnap != undefined && !reminderQuerySnap.empty){
//           reminderQuerySnap.forEach(async document => {
//             const reminderData = document.data();
//             const userRef = doc(this.fs, "users", reminderData.user);
//             const userData = (await getDoc(userRef)).data();
//             const customerRef = doc(this.fs, "customers", reminderData.customer);
//             const customerData = (await getDoc(customerRef)).data();
//             const taskData = reminderData.task.map(async (taskId: string) => {
//               const taskRef = doc(this.fs, "tasks", taskId);
//               const taskSnapshot = await getDoc(taskRef);
//               return taskSnapshot.data();
//             })
//             const reminderDataStart = reminderData.start.toDate();
//             remindersData.push({
//               ...reminderData,
//               start: reminderDataStart,
//               user: userData,
//               task: taskData,
//               customer: customerData,
//             });
//           });
//         }
//         return remindersData;
//       } catch (error) {
//         console.error("Error fetching reminders:", error);
//         throw error; // Re-throw error to be caught by the caller
//       }
//     })());
//   }

//   getListOfRemindersMetaData(type: string): Observable<any[]> {
//     let remindersMetaDataCollection = collection(this.fs, 'remindermetadata');

//   return from((async (): Promise<any[]> => {
//     try {
//       const reminderQuery = query(remindersMetaDataCollection, where('type', '==', type));
//       const reminderQuerySnap = await getDocs(reminderQuery);
//       const remindersData: any[] = [];
//       if(reminderQuerySnap != undefined && !reminderQuerySnap.empty){
//         reminderQuerySnap.forEach(async document => {
//           const reminderData = document.data();
//           const reminderDataCreatedAt = reminderData.createdat.toDate();
//           const reminderDataUpdatedAt = reminderData.updatedat.toDate();
//           remindersData.push({
//             ...reminderData,
//             createdat: reminderDataCreatedAt,
//             updatedat: reminderDataUpdatedAt,
//           });
//         });
//       }
//       return remindersData;
//     } catch (error) {
//       console.error("Error fetching reminders meta data:", error);
//       throw error; // Re-throw error to be caught by the caller
//     }
//   })());
// }

// // createTasks(){
// //   let tasksCollection = collection(this.fs, 'tasks');
// //   try {
// //     const currentTimeStamp = Timestamp.now();
// //     const { description, taskid, reminderuuid, title } =

// //   } catch (error) {
// //     console.error("Error creating tasks:", error);
// //     throw error; // Re-throw error to be caught by the caller
// //   }
// // }
