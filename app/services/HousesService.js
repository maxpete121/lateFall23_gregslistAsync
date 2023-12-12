import { House } from "../models/House.js";
import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";


class HouseService{


    async getHouses(){
        const response = await fetch('https://sandbox.codeworksacademy.com/api/houses')
        console.log('response got',response)
        const body = await response.json()
        console.log(body)
        let newHouses = body.map(houseInfo => new House(houseInfo))
        AppState.Houses = newHouses
        console.log(AppState.Houses)
    }

    async newHouse(formData){
        const response = await api.post('api/houses', formData)
        const newHouse = new House(response.data)
        AppState.Houses.push(newHouse)
    }

    async removeHouse(houseId){
        const response = await api.delete(`api/houses/${houseId}`)
        const houseRemove = AppState.Houses.findIndex(house => house._id == houseId)
        AppState.Houses.splice(houseRemove, 1)
    }


}

export const houseService = new HouseService()