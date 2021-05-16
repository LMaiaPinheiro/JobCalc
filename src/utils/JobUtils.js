module.exports = {
    remainingDays(job){
        // Calculo de tempo restante
    
        const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()
    
        const createdDate =  new Date(job.createdAt)
        const dueDay = createdDate.getDate() + Number(remainingDays)
        const dueDateInMs = createdDate.setDate(dueDay)
        
        const timediffInMs = dueDateInMs - Date.now() 
        
        // tranformar millisegundos em dias
        const dayInMs = 1000 * 60 * 60 * 24
     
        const dayDiff = Math.ceil(timediffInMs / dayInMs)
        
        //dias faltantes
        return dayDiff
    },
    calculateBudget(job, valueHour){
        return valueHour * job['total-hours']
    }
}