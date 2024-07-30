const User = require('../modules/userModel')
const bcrypt = require('bcrypt');
const registerLoad = async (req, res) => {

        try{

            const passwordHash = bcrypt.hash(req.body.password, 10);
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                image: '/image' + req.file.filename,
                password: passwordHash(req.body.password),
            })
            await user.save();
            res.render('register', {message: "Register Successfully"})

        }catch(error){
                console.log(error.message)
        }
}

const register = async (req, res) => {
    try{

        res.render();

    }catch(error){
            console.log(error)
    }
}
module.exports = {
    registerLoad, 
    register
}