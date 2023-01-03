const express=require('express')
const router=express.Router()

const task=[
    {
        id:1,
        name:"task 1",
        completed:false
    },
    {
        id:2,
        name:"task 2",
        completed:false
    }, {
        id:1,
        name:"task 3",
        completed:false
    }, {
        id:1,
        name:"task 4",
        completed:false
    }
]
router.get('/api/task',(req,res)=>{
    res.status(200).send(task)
})

router.post('/create/task',(req,res)=>{
    const {error} = utils.validateTask(req.body)
    if(error) return res.status(400).send('The name should be at least 3 char long ')
    const task={
        id: task.length + 1,
        name:req.body.name,
        completed:req.body.completed
    };
    task.push(task)
    res.status(201).send(task)
})


module.exports=router