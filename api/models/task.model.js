import mongoose from 'mongoose';
const { Schema } = mongoose;

const TaskSchema = new Schema({
 userId:{
   type: String,
   required: true, 
 },
 category:{
   type: String,
   required: true, 
 },
 taskTitle:{
   type: String,
   required: true, 
 },
 NbrTaskDone:{
   type: Number,
   default: 0, 
 },
 NbrTotalTasks:{
   type: Number,
   default: 0, 
 },
 taskerType:{
   type: String,
   required: true, 
 },
 price:{
   type: number,
   required: true, 
 },
 bio:{
   type: String,
   required: true, 
 },
 skills:{
   type: String,
   required: true, 
 },
 profilePic:{
   type: String,
   required: true, 
 },
 pictures:{
   type: [String],
   required: false, 
 },
 starNumber:{
   type: Number,
   default: 0, 
 },
 DateAvailability:{
   type: String,
   required: true, 
 },
 TimeOfDay:{
   type: String,
   required: true,   
 },
 revenue:{
   type: number,
   default: 0,   
 },
},{
    timestamps: true
});

export default mongoose.model("Task", TaskSchema)