import app from "./app"
import NoteRoutes from "./routes/note.routes"
import "dotenv/config"

const app=new app([
  new NoteRoutes()
])

app.startServer()