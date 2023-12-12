import { AppState } from "../AppState.js";
import { houseService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";


function _drawHouses(){
    let houses = AppState.Houses
    let content = ''
    houses.forEach(house => content += house.houseTemplate)
    document.getElementById('house-view').innerHTML = content

}

export class HouseController{
    constructor(){
        console.log('House controller loaded')
        AppState.on('Houses', _drawHouses)
        this.getHouses()
    }

    async getHouses(){
        houseService.getHouses()
    }

    async newHouse(){
        event.preventDefault()
        const form = event.target
        const formData = getFormData(form)
        await houseService.newHouse(formData)
        form.reset()

    }

}