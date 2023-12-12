import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { setHTML } from "../utils/Writer.js";

function _drawCars(){
  const cars = AppState.cars
  let content = ''
  cars.forEach(car => content += car.CarCard)
  setHTML('cars-list', content) // 🧪 did the static cars in the appstate draw to the page?
}


export class CarsController{
  constructor(){
    console.log('🚗🎮'); //🧪
    // _drawCars() only needed for the initial draw of static data in the appstate for testing
    AppState.on('cars', _drawCars)// 🧪 replaces the need for invoking draw ourselves
    this.getCars()
  }



  getCars(){
    carsService.getCars()
  }
}