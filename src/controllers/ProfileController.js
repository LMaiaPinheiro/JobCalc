const Profile = require('../model/Profile')


module.exports = {
    async index(req,res){
        return res.render('profile',{profile : await Profile.get()})
    },

   async update(req, res){
        //pegando os dados
        const data = req.body

        //Quantidade de semanas no ano
        const weeksPerYear = 52
        
        //Removendo as semanas de férias do ano, para pegar quantas semans tem em 1 mês
        const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 12
        
        //Total de horas trabalhadas na semana
        const weekTotalHours = data["hours-per-day"] * data ["days-per-week"];
        
        // Horas trabalhadas no mês
        const monthlyTotalHours = weekTotalHours * weeksPerMonth
        
        //Qual sera o valor da minha hora
        const valueHour = data["monthly-budget"] / monthlyTotalHours
        
        const profile = await Profile.get()

        await Profile.update({
            ...profile,
            ...req.body,
            "value-hour": valueHour
        })
        
        return res.redirect('/profile')
    },
}