const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json()); //Middleware
const courses = [
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'},

];

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);

});

app.post('/api/courses', (req, res) => {

    const result = validateCourse(req.body);
    if(result.error){
        //Bad request
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const course = {
        id: courses.length+1, 
        name:req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    //Lookup
    const course = courses.find(c => c.id==parseInt(req.params.id));
    if(!course) return res.status(404).send('ID not found');
    //Validate
    //If invalid return 400 bad request
    const result = validateCourse(req.body);
    if(result.error){
        //Bad request
        res.status(400).send(result.error.details[0].message);
        return;
    }
    //Update Course
    course.name = req.body.name;
    //Return updated course
    res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
    //res.send(req.params.id);
    //res.send(res.query);
    const course = courses.find(c => c.id==parseInt(req.params.id));
    if(!course) return res.status(404).send('ID not found');
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id==parseInt(req.params.id));
    if(!course) return res.status(404).send('ID not found');

    const index = courses.indexOf(course);
    courses.splice(index,1);
    res.send(course);
});

function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.ValidationError(course, schema);
}


// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Listening on port ${port}...`)});
