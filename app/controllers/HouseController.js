import { AppState } from "../AppState.js";
import { houseService } from "../services/HousesService.js";


function _drawHouses(){
    let houses = AppState.Houses
    let content = ''
    houses.forEach(house => content += house.houseTemplate)
    document.getElementById('house-view').innerHTML = content

}

export class HouseController{
    constructor(){
        console.log('House controller loaded')
        this.getHouses()
        AppState.on('Houses', _drawHouses)
    }

    async getHouses(){
        houseService.getHouses()
    }
}