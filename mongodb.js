const mongoose = require('mongoose');
const dbPath = 'mongodb+srv://wsherridge1980:JVKoL4MrP10tUbZS@blog.vkfvb.mongodb.net/blog';
mongoose.connect(dbPath, {
    useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", () => {
    console.log("> error occurred from the database");
});
db.once("open", () => {
    console.log("> successfully opened the database");
});
module.exports = mongoose;