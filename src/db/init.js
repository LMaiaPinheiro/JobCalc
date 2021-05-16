const Database = require('./config')

const initDb = {

    async init() {

        const db = await Database()
        //Criando a tabela profile
        await db.exec(`CREATE TABLE profile(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            monthly_budget INT,
            days_per_week INT,
            hours_per_day INT,
            vacation_per_year INT,
            value_hour INT
            );`
        )

        //Criando a tabela jobs
        await db.exec(`CREATE TABLE jobs(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            daily_hours INT,
            total_hours INT,
            created_at DATATIME
            );`
        ) 

        //Inserindo valores em profile
        await db.run(`INSERT INTO profile (
            name,
            avatar,
            monthly_budget,
            days_per_week,
            hours_per_day,
            vacation_per_year,
            value_hour
            ) VALUES (
            "Lucas",
            "https://github.com/lmaiapinheiro.png",
            3000,
            5,
            5,
            4,
            70
            );`
        )

        await db.run(`INSERT INTO jobs (
            name,
            daily_hours,
            total_hours,
            created_at
            ) VALUES (
            "Pizzaria Guloso",
            2,
            1,
            161714376018
            );`
        )

        await db.run(`INSERT INTO jobs (
            name,
            daily_hours,
            total_hours,
            created_at
            ) VALUES (
            "OneTwo Projects",
            3,
            47,
            161714376018
            );`
        )

        await db.close()
    }
}

initDb.init()