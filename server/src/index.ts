import express,{Express} from "express";

const app:Express = express();

app.listen(4000,()=>{
    console.log("Server Started")
})