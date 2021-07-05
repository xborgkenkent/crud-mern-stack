const express = require('express');
const router = express.Router();

const studentModel = require('../model/studentModel');

router.route('/').get((req, res) =>{
    studentModel.find((err, student) =>{
        if(err) return res.status(400).send(err)
        return res.send(student)
    })
})

router.route('/').post((req, res) =>{
    
   const newStudent = new studentModel(req.body)

   newStudent.save(err =>{
       if(err) return res.status(400).send(err)
       return res.status(200).send(newStudent)
   })

})

router.route('/:id').get(async(req, res) =>{
    try{
    await studentModel.findById(req.params.id)
    .then(data => res.json(data))
    }
    catch(e) {
        res.status(400).json('error' + err)
    }
})

router.route('/:id').post(async(req, res) =>{
    
   await studentModel.findOneAndUpdate({_id:req.params.id}, req.body, {new: true}, function (err, student) {
    res.send(student);
  });


})

router.route('/:id').delete(async(req, res) =>{
    await studentModel.findByIdAndRemove({_id: req.params.id}, (err, student) =>{
        if(err) return res.status(400).send(err)
        
        return res.status(200).send('sucessfully deleted: ' + req.params.id)
    })
})
module.exports = router;