const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')
mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

var Schema = mongoose.Schema

// BlogPost.create({
//     title: 'The Mythbuster’s Guide to Saving Money on Energy Bills',
//     body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everything at this time of year. They go like this:'
// }, (error, blogpost) => { console.log(error, blogpost) })

// create a post
// BlogPost.create({
//     title: 'The Money on Energy Bills',
//     body: 'Remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everything at this time of year. They go like this:'
// }, (error, blogpost) => { console.log(error, blogpost) })


// All records
// BlogPost.find({}, (error, blogspot) => {
//     console.log(error, blogspot)
// })

// All records based on title
// BlogPost.find({
//     title: 'The Money on Energy Bills'
// }, (error, blogspot) => {
//     console.log(error, blogspot)
// })

// find all posts with 'Guide' in the title
// BlogPost.find({ title: /Guide/ },
//     (error, blogspot) => { console.log(error, blogspot) })

// find post by id
// var id = "5efe76c2f5b3054197a008cc"
// BlogPost.findById(id, (error, blogspot) => {
//     console.log(error, blogspot)
// })

// find and update record
// var id = "5efe76c2f5b3054197a008cc";
// BlogPost.findByIdAndUpdate(id, { title: 'Updated Blogssss' }, (error, blogspot) => {
//     console.log(error, blogspot)
// })

// find and delete single record
var id = "5efe76c2f5b3054197a008cc";
BlogPost.findByIdAndDelete(id, (error, blogspot) => {
    console.log(error, blogspot)
})