const dbConnection = require('./mongoDatabseConnection');
const updateData = async () => {
    let data = await dbConnection();
    let result = data.updateOne(
        { _id:"63c7d31dd40933843ce8c557"},{$set:{name:"chh"}}
        
        );

}
updateData();