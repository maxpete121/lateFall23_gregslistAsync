import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";




class CarsService{

  async getCars(){
    const response = await fetch('https://bcw-sandbox.herokuapp.com/api/cars')
    console.log('🚗📡', response); //🧪🧪
    const body = await response.json()
    console.log('🚗👂', body); //🧪🧪 did you await the json()?
    const newCars = body.map(carData => new Car(carData))
    console.log('✨✨✨🚗🚗🚗', newCars);// 🧪
    AppState.cars = newCars // 🧪 after I save them do they draw to the page?
  }

}

export const carsService = new CarsService()