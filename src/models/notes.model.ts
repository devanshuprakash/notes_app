import {model,Schema} from "mongoose"
import {NoteDocument,NoteModelInterface} from "../utils/notes.interface"
const noteSchema=new Schema({
  title:{
    type:String
  },
  content:{
    type:String
  }
})
const NoteModel=model<NoteDocument,NoteModelInterface>(
  "Note",
  noteSchema
)
export default NoteModel;
