const jwt = require('jsonwebtoken');

const generateJWT = (id,name)=>{

    return new Promise((resolve,reject)=>{

        const payload = { id , name };
        jwt.sign(payload,process.env.SECRET_JWT_SEDD,{
            expiresIn:  '2h'
        },(err,token)=>{
            if(err){
                console.log(err)
                reject('Token could not be generated')
            }

            resolve( token );

        })

    })
}

module.exports = {
    generateJWT
}