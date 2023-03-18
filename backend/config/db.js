const mongoose = require('mongoose')

const connectDb = async ()=> {
    try {
      mongoose.set('strictQuery', false);
      const conn = await mongoose.connect(process.env.MONGO_URL);
      console.log(conn.connection.host)
      console.log('Connected')
    } catch (error) {
      console.log(error)
    }
   
}

module.exports =  connectDb
 