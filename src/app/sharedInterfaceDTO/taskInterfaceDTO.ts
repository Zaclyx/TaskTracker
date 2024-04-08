import { DocumentReference } from "@angular/fire/firestore";

export interface TaskInterfaceDTO {
    description?: string;
    reminder?: string;
    status?: boolean;
    title?: string;
}

export class TaskClassDTO implements TaskInterfaceDTO{
    description?: string;
    reminder?: string;
    status?: boolean;
    title?: string;

    constructor(
        description?: string,
        reminder?: string,
        status?: boolean,
        title?: string,
    ){
        this.description = description;
        this.reminder = reminder;
        this.status = status;
        this.title = title;
    }
}