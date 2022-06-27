import ex from "../models/postMessage.js";

console.log('in Controllers and posts');
export const getPosts = (req, res) => {
    const submitedData = new ex({
        name: req.body.name,
        message: req.body.message,
        email: req.body.email,
        phone: req.body.phone,
    });
    console.log("submited data "+req.body.name);
    submitedData.save()
    .then(() => {
        res.status(200).send('<h1> Submitted succesfully </h1>');
    })
    .catch(error => {
        res.json(error);
    })
}

export const homepage = (req,res) =>{
    console.log("submited file ");
    res.sendFile('/client/index.html');
}

export const submitPage = (req,res) =>{
    res.sendFile('client/submit.html');
}
