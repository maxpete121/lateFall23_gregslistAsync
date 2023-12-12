

// REVIEW when working with an API that you want to send data too, always check their documentation for a guide or 'model' that they use. In this case they make the rules and will only store what they specify
export class Car{
  constructor(data){
    this.id = data.id
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.description = data.description
    this.engineType = data.engineType
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
    console.log('✨🚗', this); // 🧪
    // TODO creator info
  }

  get CarCard(){
    // return `${this.make} ${this.model}`// 🧪 test small template first
    return `
    <div class="col-4">
      <div class="card">
      <img src="${this.imgUrl}" class="img-fluid"/>
      <h4 class="text-center mt-1"> ${this.make} - ${this.model} - ${this.year}</h4>
      <p class="text-end text-success me-2 fw-bold">$${this.price}</p>
      </div>
    </div>
    ` //🧪 tested as we added more to the template that the draw still worked
  }
}