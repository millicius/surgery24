import { Schema, model, models } from "mongoose";

const surgerySchema = new Schema({
    title: String,
    description: String
}, {collection: 'Surgery'})

const Surgery = models.Surgery || model('Surgery', surgerySchema)

export default Surgery