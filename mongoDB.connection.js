var mongoDBconfig = require('./mongoDB.config')
var db = mongoDBconfig.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('open', function() {
    console.log("Connection Successful!")
});
var userSchema = mongoDBconfig.Schema({
    name: String,
    surname: String,
    age: Number
})
var userModel = mongoDBconfig.model("user",userSchema,"users");
module.exports = {
    db: db,
    userModel: userModel
}
