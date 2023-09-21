const user = require("../model/user");

module.exports.login = async (req,res)=>{
    const { email,password } = req.body;

    const theuser = await user.findOne({email,Password});

    if (theuser !== null) {
        return res.status(200).json(theuser);
    } else {
        return res.status(400).json({message:"user not found"});
}
};

module.exports.register =(req,res) => {
    const {username,email,password} =req.body;

    const newuser = new user ({
        username,
        email,
        password,
    });

    newuser.save().then(
        (res)=>{
            return res.status(200).json({message:"wlecome  new user"});   
        }).catch(
            (err) =>{
                return res.status(400).json({message:err.message});
            });
};