const dbConnection = require('./mongoDatabseConnection');

const insert = async ()=>{
    const db = await dbConnection();
    const result = await db.insertMany([{
        name:'note 6',brandname:'onePlus'
    },{
        name:'note 7',brandname:'onePlus'
    }]);

    if(result.acknowledged){
        console.log('datainserted');
    }else{
        console.log(result);
    }
    
}

insert();