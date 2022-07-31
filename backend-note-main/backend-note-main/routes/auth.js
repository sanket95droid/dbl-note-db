const express = require('express');
const User = require('../models/User') // while adding data to the database, it will follow 'User' schema
const router = express.Router();
const { body, validationResult } = require('express-validator');  // using package 'express-validator' for validation
const bcrypt = require('bcryptjs'); // importing 'bcryptjs' for hashing 
const jwt = require('jsonwebtoken'); // importing 'jsonwebtoken' for sending authentication token to user when he logsin
const JWT_SECRET = 'Harryisagoodboy'; // it will be used for authentication token related stuff
const fetchuser = require('../middleware/fetchuser'); // importing 'jsonwebtoken' for sending authentication token to user when he logsin

//Route 1 : Create a User using : POST "/api/auth/createuser".
router.post('/createuser',[
    body('name', 'Enter a valid name').isLength({ min: 5 }), // name should be atleast 5 characters
    body('email', 'enter a valid email').isEmail(),  // default email validation
    body('password').isLength({ min: 5 }),
], async (req, res)=>{
    let success = false;
    // if there are error, return bad request and the errors (array of errors)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });  // if request gets rejected(contradict validations) then an array 'errors' will be get
    }
    // check whether the user with same email exists already
    try {
        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({success, error: "Sorry a user with this email already exists"})
        }

        const salt = await bcrypt.genSalt(10); // hashing rtsf, generating salt
        const secPass = await bcrypt.hash(req.body.password, salt); // hashing rtsf, hashing password
        // Create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass // hashing rtsf
          });

        const data = {
            user:{
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);  // authentication token rtsf
        success = true;
        res.json({success, authToken});  // authentication token rtsf, giving authentication token to user when he logs in
        // res.json({user})

    } catch (error){
        console.error(error.message);
        res.status(500).send("some error occured");
    }
})

// Route 2 : Authenticate(login) a User using : POST "/api/auth/login". No login required
router.post('/login',[
    body('email', 'enter a valid email').isEmail(),  // default email validation
    body('password', 'password cannot be blank').exists()
], async (req, res)=>{
    let success = false;
   // if there are error, return bad request and the errors (array of errors)
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });  // if request gets rejected(contradict validations) then an array 'errors' will be get
   }

   const {email, password} = req.body;
   try {
    let user = await User.findOne({email});
    if(!user){
        return res.status(400).json({error: "enter valid details"})
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
        success = false;
        return res.status(400).json({success , error: "enter valid details"})  
    }

        const data = {
            user:{
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({success, authToken});

   } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error: some error occured");
   }
});


// Route 3 : get User details of loggedIn Users using : POST "/api/auth/getuser". login required
router.post('/getuser', fetchuser, async (req, res)=>{  //fetchuser.js is used
try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user);
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error: some error occured");
}
})
module.exports = router