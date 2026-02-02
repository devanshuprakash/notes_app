import {Router} from "express"
import { Routes } from "../utils/routes.interface"
import NoteController from "../controllers/note.controller"
class NoteRoutes implements Routes{
  path?:string="/note"
  router:Router=Router()
  public noteController=new NoteController()
  constructor(){
    this.initializeRoutes()
  }
  private initializeRoutes(){
    this.router.get(`${this.path}/allNotes`,this.noteController.getNotes)
    this.router.post(`${this.path}/add`,this.noteController.postNotes)
  }}

export default NoteRoutes;
