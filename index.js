const mongoose = require('mongoose');
const userSchema = require('./forTests/userSchema');

async function init(){
    let db = await mongoose.createConnection("mongodb://127.0.0.1:27017/test", {useNewUrlParser: true});
    let userModel = DeepPopulateAllRefsFromSchema(userSchema,'Users' ,db);
    userModel.find({"name":"Daniel"})
    .exec((err,docs)=>{
        console.log(err);
        console.log(docs[0].toObject());
    }) 
}

function DeepPopulateAllRefsFromSchema(schema, schemaName, conn){
    if(schema && schema.obj){
        Object.keys(schema.obj).forEach(key=>{
            if(schema.obj[key].ref){
                //usage of function() is on purpose
                schema.pre('find', function(){
                    this.populate({
                        path: key,
                        model:schema.obj[key].ref
                    })
                })
            }
        })
    }
    return conn.model(schemaName, schema);
}

init();