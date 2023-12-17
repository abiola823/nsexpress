import usersModel  from "../model/userSchema.js"
import Joi from "joi";
const createUser = async (req, res) => {
    try {
        const {firstName, lastName, email, track, programmingLanguage, currentStage} = req.body; 
        const registerValidationSchema = Joi.object({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            track: Joi.string().required(),
            programmingLanguage: Joi.string().required(),
            currentStage: Joi.number().required()
        });
        const{error: registervalidationError} = registerValidationSchema.validate(req.body);
        if(registervalidationError) return res.send(registerValidationSchema.message)
        const create = await usersModel.create({
            firstName,
            lastName,
            email,
            track,
            programmingLanguage,
            currentStage
        })
        res.status(201).json({"user created successfully":  create});
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async (req, res) => {
    const {firstName, lastName, email, track, programmingLanguage, currentStage} = req.body; 
    try {
        const registerValidationSchema = Joi.object({
            firstName: Joi.string(),
            lastName: Joi.string(),
            email: Joi.string().email(),
            track: Joi.string(),
            programmingLanguage: Joi.string(),
            currentStage: Joi.number()
        });
        const{error: registervalidationError} = registerValidationSchema.validate(req.body);
        if(registervalidationError) return res.send(registerValidationSchema.message)
       
        const upd = await usersModel.findByIdAndUpdate(req.params.id,{firstName, lastName, email, track, programmingLanguage, currentStage}, {new: true} )
        if(upd) return res.json({updatedUserDetails: upd });
    } catch (error) {
        console.log(error);
    }
}
const findUser = async (req, res) => {
    const {id} = req.params;
    try {
        const find = await usersModel.findOne({_id: id})
        if(find) return res.json(find);
    } catch (error) {
        console.log(error);
    }
}
const findbyemail = async (req, res) => {
    try {
        const find = await usersModel.findOne({email: req.params.email})
        if(find) return res.json(find);
    } catch (error) {
        console.log(error);
    }
}
const findAll = async (req, res) => {
    try {
        const all = await usersModel.find();
        res.send(all);
    } catch (error) {
        console.log(error)
    }
}
export {
    createUser,
    updateUser,
    findUser,
    findAll,
    findbyemail
};
