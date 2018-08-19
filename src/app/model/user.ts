export class User {
    _id: string;
    name: string;
    email: string    
    constructor(obj: any) {
        this._id = obj._id;
        this.name = obj.name;
        this.email = obj.email;
    }
}