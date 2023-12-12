


export class House{

    constructor(data){
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
        <div class="col-2 card">
        <div>${this.imgUrl}</div>
        <span class = "d-flex">
        <h4>Posted By:</h4>
        <h4>${this.creator}</h4>
        </span>
        </div>
        `
    }
    
}