export class Event {
    public eventId: Number;
    public eventName: string;
    public URLImage: string;    
    public cantVolunteer: Number;
    public commentEvent: string ;
    public eventType: string;
    public dateEvent: Date;

    constructor(eventId: Number,eventName: string, URLImage: string, cantVolunteer: Number, commentEvent: string, eventType: string, dateEvent: Date) {
        this.eventId = eventId;
        this.eventName = eventName;
        this.URLImage = URLImage;
        this.cantVolunteer = cantVolunteer;
        this.commentEvent = commentEvent;
        this.eventType = eventType;
        this.dateEvent = dateEvent;
    }
}