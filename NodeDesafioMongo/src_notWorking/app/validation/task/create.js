const Joi = require('joi');

module.exports = async (req, res, next) => {  
    try {
        const schema = Joi.object({
        tittle: Joi.string(),
        description: Joi.string(),
        task: Joi.array().items(Joi.object().Joi.string().Joi.number().Joi.boolean())
        });

        const { error } = await schema.validate(req.body, { abortEarl: true });
        if (error) throw error
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}