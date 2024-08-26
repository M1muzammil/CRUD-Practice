import mongoose from "./mongoes.mjs";

const loginSchema = new mongoose.Schema
({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

export {loginSchema}








