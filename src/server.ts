import App from "./app"
import NoteRoutes from "./routes/notes.route"
import "dotenv/config"
const app=new App([
  new NoteRoutes()
])

app.startServer()