const mongoose = require('mongoose');

require('dotenv').config()




const mongodb = async () => {
    
    try {
        await mongoose.connect(process.env.DB_CNN,
            { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('db_online')
    } catch (error) {
        console.log(error)
        console.log('Error initializing DB')
    }
}


module.exports = {
    mongodb
}

