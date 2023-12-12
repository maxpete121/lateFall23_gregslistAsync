import { AppState } from "../AppState.js";



export class Jobs{
    constructor(data){
        this._id = data._id
        this.company = data.company
        this.jobTitle = data.jobTitle
        this.hours = data.hours
        this.rate = data.rate
        this.description = data.description
        this.creatorId = data.creatorId
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
        this.creator = data.creator
    }
}