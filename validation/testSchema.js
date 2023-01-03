const joi=require('joi')

const taskSchema = joi.object({
    name:joi.string().min(3).required(),
    completed:joi.boolean()
})
exports.validateTask=(task)=>taskSchema.validate(task)