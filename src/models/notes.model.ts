import {Schema,model,Document} from "mongoose"

export interface NoteDocument extends Document{
  title:string
  content:string
  updatedAt:Date
}

const NoteSchema=new Schema<NoteDocument>({
  title:{type:String,required:true},
  content:{type:String,required:true},
  updatedAt:{type:Date,default:Date.now}
})

export const Note=model<NoteDocument>("Note",NoteSchema)