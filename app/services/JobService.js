import { AppState } from "../AppState.js"
import { Jobs } from "../models/Jobs.js"
import { api } from "./AxiosService.js"

class JobService{



    async grabJobs(){
        const response = await fetch('https://sandbox.codeworksacademy.com/api/jobs')
        const body = await response.json()
        console.log(body)
        let newJobs = body.map(jobInfo => new Jobs(jobInfo))
        AppState.Jobs = newJobs
    }
}

export const jobService = new JobService()