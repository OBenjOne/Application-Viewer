
//Require the neccesary libraries and modules 
// set up express
const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const display_all_applications = require("./display-files/display-all-applications");



// send user to index page when they search our website url
app.get("/", function (req, res) {
  display_all_applications(req, res);  
});


// Server configuration
const port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log(`Server is running on port ${port}`);
});