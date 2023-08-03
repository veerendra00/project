const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://BeFoody:befoody%40123@cluster0.cnm10wk.mongodb.net/befoodymern?retryWrites=true&w=majority'
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }, (err, result) => {
        if (err) console.log("not connected")
        else {
            console.log("connected");
            const fetched_data = mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(function (err, data) {
                if (err) console.log(err);
                else console.log(data);
            })
        }
    });
}

module.exports = mongoDB;