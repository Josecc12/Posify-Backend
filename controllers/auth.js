const bcrypt = require('bcrypt');
const User = require('../models/employee'); // Make sure to import the User model from the appropriate location
const { generateJWT } = require('../helpers/jwt'); // Make sure to import your JWT token generation helper

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }
        // Compare the entered password with the stored password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Incorrect password' });
        }

        // If the email and password match, generate a JWT token using your helper
        const token = await generateJWT(user._id, user.name);

        res.status(200).json({ 
            message: 'Login successful', 
            name: user.name,
            id: user._id,
            token 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error in login' });
    }
};


const renewToken = async(req,res=response)=>{
    
    const id = req.id;
    const name = req.name;

    const token = await generateJWT(id, name );


    res.json({
        ok: true,
        uid,name,
        token
        
    })
};

module.exports = { login , renewToken };
