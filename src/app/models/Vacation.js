import mongoose from 'mongoose'

 const Vacation = new mongoose.Schema({
  user_id: {
   type: String, 
   unique: true,
   required: true
 },
 vacation:[
  {
    start:{
   type: Date,
   required: true
 },
 end:{
   type: Date,
   required: true
 }
}
 ]
 
 })

export default mongoose.model('Vacation', Vacation)
