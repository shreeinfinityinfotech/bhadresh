const dbConnection = require('./mongoDatabseConnection');

const main = async () => {
    let data = await dbConnection();
    data = await data.find().toArray();
    console.warn(data);
}
main();