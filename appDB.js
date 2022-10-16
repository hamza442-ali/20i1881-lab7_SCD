


 function dbsend( senditem){
    // Using Node.js `require()`
    const mongoose = require('mongoose');
    
     mongoose.connect("mongodb://localhost:27017/Names", {useNewUrlParser :true});
    
    
    
    const NameSchema = new  mongoose.Schema({
        name: String
        
      });
    
    const name =mongoose.model("Names_collection", NameSchema);  
    
    const it1 = new name({  
        name: senditem
        
    });
    
    it1.save();  
    }
    
    
    module.exports = { dbsend };