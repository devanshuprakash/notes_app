import {Request,Response} from "express"
import NoteModel from "../models/notes.model"
class NoteController{
  public getNotes=async function(req:Request,res:Response){
    try{
      const notes=await NoteModel.find()
      return res.status(200).json(notes)
    }catch(err){
      console.error(err)
      return res.status(500).json({message:"Failed to fetch notes"})
    }}
public postNotes=async function(req:Request,res:Response){
try{
    const {title,content}=req.body

      if(!title||typeof title!=="string"){
        return res
          .status(400)
          .json({message:"title is required and must be a string"})}
if(!content||typeof content!=="string"){
        return res
          .status(400)
          .json({message:"content is required and must be a string"})
      }

    const note=await NoteModel.create({
        title,content})
    return res.status(201).json(note)
    }catch(err){
      console.error(err)
    return res.status(500).json({message:"Failed to create note"})
}
}

public updateNote=async function(req:Request,res:Response){
   try{
     const {id}=req.params
     const {title,content}=req.body

     if(title!==undefined && typeof title!=="string"){
       return res.status(400).json({
         message:"title must be a string"
       })
     }

     if(content!==undefined && typeof content!=="string"){
       return res.status(400).json({
         message:"content must be a string"
       })
     }

     const note=await NoteModel.findByIdAndUpdate(
       id,
       {title,content},
       {new:true}
     )

     if(!note){
       return res.status(404).json({message:"Note not found"})
     }

     return res.status(200).json(note)
   }catch(err){
     console.error(err)
     return res.status(500).json({message:"Failed to update note"})
   }
 }

 public deleteNote=async function(req:Request,res:Response){
   try{
     const {id}=req.params

     const note=await NoteModel.findByIdAndDelete(id)

     if(!note){
       return res.status(404).json({message:"Note not found"})
     }

     return res.status(200).json({message:"Note deleted successfully"})
   }catch(err){
     console.error(err)
     return res.status(500).json({message:"Failed to delete note"})
   }
 }

}



 export default NoteController;
