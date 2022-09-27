import express from "express";
import useRoutes from "./routes/student_registration.js";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/users', useRoutes);

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

app.get('/', (req, res) => res.send("Hello from Home Page"));

app.listen(PORT, () => console.log(`Server running on port: http://192.168.0.128:${PORT}`));
