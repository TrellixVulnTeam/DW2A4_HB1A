import express from "express"

const app = express();

app.get("/users", (req, res) => {

})

app.listen(3333, () =>{
    console.log("HTTP SERVER RUNNING");
});