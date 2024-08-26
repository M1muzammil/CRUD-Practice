// import express from 'express';
// import mongoes from "../../../mongoes.mjs"

// const db = client.db("CRUD");
// const col = db.collection("auth");

// let router = express.Router();

// router.post('/login', async (req, res, next) => {


//     if (
//         !req.body?.email
//         || !req.body?.password
//     ) {
//         res.status(403);
//         res.send(`
//             required parameters missing, 
//             example request body:
//         {

//             email: "some@email.com",
//             password: "some$password",

//         }`
//         ); 
//         return;
//     }


// })


// export default router


import express from 'express';
import mongoose from '../.././../mongoes.mjs';




let router = express.Router();

router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(403).send(`
            Required parameters missing,
            example request body:
            {
                email: "some@email.com",
                password: "some$password"
            }
        `);
        return;
    }

    try {
        // Check if user exists (implement your login logic here)
        const user = await Auth.findOne({ email, password });

        if (user) {
            res.status(200).send('Login successful!');
        } else {
            res.status(401).send('Invalid email or password');
        }
    } catch (err) {
        next(err);
    }
});

export default router;

