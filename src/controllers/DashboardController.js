const Job = require('../model/Job')
const JobUtils = require('../utils/JobUtils')
const Profile = require('../model/Profile')

module.exports = {
   async index(req,res){

        const jobs = await Job.get()
        const profile = await Profile.get()

        let statusCount= {
            progress: 0,
            done: 0,
            total: jobs.length
        }
        // Horas de trabalho de cada projeto por dia
        let jobTotalHours = 0

        const updatedJobs = jobs.map((job)=>{
        // Ajuste no JOB
        const remaining = JobUtils.remainingDays(job)
        const status = remaining <= 0 ? 'done' : 'progress'
        
        // Soma a quantidade de status
        statusCount[status] += 1
        
        //total de horas por dias de cada Job em progresso
        jobTotalHours = status=='progress' ? jobTotalHours + Number(job['daily-hours']) : jobTotalHours
        

        return {
            ...job,
            remaining,
            status,
            budget: JobUtils.calculateBudget(job, profile['value-hour'])
        }
    }) 

    const freeHours = profile['hours-per-day'] - jobTotalHours

     return res.render('index',{jobs: updatedJobs, profile: profile, statusCount: statusCount,freeHours: freeHours})

    }
}