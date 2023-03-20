const express = require('express');
const dbConnection = require('./mongoDatabseConnection');
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {

    res.send(await selectData());

});


app.post("/update", async (req, res) => {
    res.send(await updateData(req, res));
});

app.post("/", async (req, res) => {
    let data = await dbConnection();
    let result = await data.insertMany(req.body)
    res.send(result);
})

const selectData = async () => {
    let data = await dbConnection();

    data = await data.find().toArray();
    return data;
}

const updateData = async (req, res) => {
    let data = await dbConnection();
    let result = await data.updateOne(
        { _id: "63d392bbd1ae525ff46e2ac1" }, { $set: { name: "chh" } }

    );
    return result;
}
app.listen(5000);


