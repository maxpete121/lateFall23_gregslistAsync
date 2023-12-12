import { AppState } from "../AppState.js";
import { jobService } from "../services/JobService.js";

function _drawJobs(){
    let allJobs = AppState.Jobs
    let content = ''
    allJobs.forEach(job => content += job.jobTemplate)
    document.getElementById('jobs-view').innerHTML = content
}

export class JobsController{
    constructor(){
        console.log('Jobs Controller Loaded')
        AppState.on('Jobs', _drawJobs)
        this.grabJobs()
        _drawJobs()
    }

    async grabJobs(){
        await jobService.grabJobs()
        _drawJobs()
    }
}