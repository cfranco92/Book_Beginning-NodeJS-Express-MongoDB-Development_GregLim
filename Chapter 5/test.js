const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://localhost/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// BlogPost.create({
//     title: "The Mythbuster's Guide to Saving Money on Energy Bills",
//     body: 'If you have been here a long time, you might remember when I vent to ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everything at this time of year. They go like this:'
// }, (error, blogspost) => {
//     console.log(error, blogspost)
// })

// BlogPost.find({}, (error,blogspot)=>{
//     console.log(error,blogspot);
// })

// BlogPost.find({
//     title: "The Mythbuster's Guide to Saving Money on Energy Bills 1"
// },(error,blogspot)=>{
//     console.log(error,blogspot);
// })

// BlogPost.find({
//     title: /The/
// },(error,blogspot)=>{
//     console.log(error,blogspot);
// })

// BlogPost.findById('5fcd86cb99598a518617deed',(error,blogspot)=>{
//     console.log(error,blogspot);
// })

// BlogPost.findByIdAndUpdate('5fcd86cb99598a518617deed', {
//     title: 'Upload title'
// }, (error,blogspot)=>{
//     console.log(error,blogspot);
// })

BlogPost.findByIdAndDelete('5fcd4033b47a4147c270f734', (error, blogspot)=>{
    console.log(error,blogspot)
})
