import {Document,Model} from "mongoose"

export interface NoteInterface{
  title:string
  content:string
}

export interface NoteDocument extends Document,NoteInterface{}

export type NoteModelInterface=Model<NoteDocument>