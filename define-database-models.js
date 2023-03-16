// FILE OVERVIEW:
// this file connects to the database and defines the different models (Services, Applications...)
// this file is required by any file that needs to access any part of the database

const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

//const DATABASE_LINK = process.env.DATABASE_LINK;
// OFFICIAL DATABASE (do not mess with this)
// mongoose.connect(DATABASE_LINK, {useNewUrlParser: true});
mongoose.connect("mongodb+srv://Community_Catalyst:catalyst_2022@cluster0.parasjl.mongodb.net/test", {useNewUrlParser: true});

// TESTING DATABASE (For if you want to test something that might mess up the database)
// mongoose.connect("mongodb+srv://Ben:test123@cluster0.hcq9y6f.mongodb.net/application-DB", {useNewUrlParser: true});
// switch between the two by commenting out one and uncommenting the other

const serviceSchema = {
  title: String,
  author: String,
  author_role: String,
  photo: String,         // TODO: make photo an image file not string
  details: Array,
  description: String,
  contacts: Array
}

const applicationSchema = {
    service: String,
    name: String,
    email: String,
    w_number: String,
    date: String,
    time: String
}

// const imageSchema = {
//   image: BinData
// }

const Application = mongoose.model("applications", applicationSchema);

const Services = mongoose.model("services", serviceSchema);

const imageSchema = {
  name: {
    type: String,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  data: {
    type: Buffer,
    required: true,
  }
};

const Image = mongoose.model("Image", imageSchema);


module.exports = {
    Services: Services,
    Application: Application,
    Image: Image
    // TODO add something for login
};