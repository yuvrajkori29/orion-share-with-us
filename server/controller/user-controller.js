import UserModel from "../models/user.js";

export const login = async (req, res) => {
    if (!req.body?.email || !req.body?.password){
        res.status(500).json({
            error: 'Please enter the mandatory details'
        })
    } else {
        try {
            const user = await UserModel.findOne({
                email: req.body?.email,
                password: req.body?.password,
            })
            if (!user){
                res.status(404).json({
                    error: 'Please enter the correct details'
                })   
            } else {
                res.status(200).json({
                    response: user
                });    
            }
        } catch (error) {
            console.error(error.message);
            response.status(500).json({ error: error.message });
        }
    }
}

export const signup = async (req, res) => {
    if (!req.body?.email || !req.body?.password){
        res.status(500).json({
            error: 'Please enter the mandatory details'
        })
    }
    try {
        const check = await UserModel.findOne({
            email: req.body?.email
        });        
        if (check) {
            res.status(500).json({
                error: 'This email is already registered'
            })
        } else {
            const userObj = {
                email : req.body?.email,
                password: req.body?.password
            }
            const user = await UserModel.create(userObj);
            res.status(200).json({
                response: user
            });
        }
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: error.message });
    }
}