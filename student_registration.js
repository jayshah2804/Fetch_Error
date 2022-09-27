import express from 'express';
import {v4 as uuidv4} from 'uuid';

const router = express.Router();

let users = [];

router.get('/', (req, res) => {
    res.send(users);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundUser = users.find(user => user.id === id);

    res.send(foundUser); 
})

router.post('/', (req, res) => {
    const user = req.body;
    console.log(user);

    users.push({ ...user, id: uuidv4() });
   
    res.send(`User with the student name ${user.studentfirstname} is inserted successfully`);
})


export default router;
