import { AppState } from "../AppState.js"



export class House{

    constructor(data){
        this._id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
        this.creator = data.creator
    }

    get houseTemplate(){
        return`
        <div class="col-2 card m-1 p-1">
        <img class="img-fluid" src="${this.imgUrl}" alt="Image Broken">
        <span class="d-flex">
        <h6>Price: $</h6>
        <h6>${this.price}</h6>
        </span>
        <span class="d-flex">
        <h6>Posted By:</h6>
        <h6>${this.creator.name}</h6>
        </span>
        <span class="d-flex">
        <h6>Year:</h6>
        <h6>${this.year}</h6>
        </span>
        <span class="d-flex">
        <h6>Levels:</h6>
        <h6>${this.levels}</h6>
        </span>
        <span class="d-flex">
        <h6>Bedrooms:</h6>
        <h6>${this.bedrooms}</h6>
        </span>
        <span class="">
        <h6>Description:</h6>
        <h6>${this.description}</h6>
        </span>
        <span>
        ${this.deleteTemplate}
        </span>
        </div>
        `
    }

    get deleteTemplate(){
        if(this.creatorId == AppState.account?.id){
            return`
            <button onclick="app.HouseController.removeHouse('${this._id}')">Delete</button>
            `
        }
        return``
    }
    
}