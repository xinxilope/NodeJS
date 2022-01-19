const Joi = require('joi');

module.exports = async (req, res, next) => {  
    try {
        const schema = Joi.object({
        tittle: Joi.string().required(),
        description: Joi.string().required(),
        task: Joi.array().items(Joi.object({
            tittle: Joi.string().required(),
            taskRelevance: Joi.number().required(),
            completed: Joi.boolean().required()
        }))
        });

        const { error } = await schema.validate(req.body, { abortEarl: true });
        if (error) throw error
        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
}