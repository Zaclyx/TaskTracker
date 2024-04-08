import { DocumentReference } from "@angular/fire/firestore";

export interface ReminderInterfaceDTO {
    additionalAttribute?: string;
    customer?: string;
    user?: string;
    type?: string;
    year?: string;
    month?: string;
    week?: string;
}

export class ReminderClassDTO implements ReminderInterfaceDTO{
    additionalAttribute?: string;
    customer?: string;
    user?: string;
    type?: string;
    year?: string;
    month?: string;
    week?: string;

    constructor(
        additionalAttribute?: string,
        customer?: string,
        user?: string,
        type?: string,
        year?: string,
        month?: string,
        week?: string
    ){
        this.additionalAttribute = additionalAttribute;
        this.customer = customer;
        this.user = user;
        this.type = type;
        this.year = year;
        this.month = month;
        this.week = week;
    }
}