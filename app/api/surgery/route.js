import mongoDBConnect from "@/lib/mongodb"
import Surgery from "@/models/Surgery"
import { NextResponse } from "next/server"

export async function POST(request) {
    try {
        const { title, description} = await request.json()
        const newSurgery = {
            title,
            description
        }
        await mongoDBConnect()
        //await Surgery.create(newSurgery)
        const dataItem = await Surgery.create(newSurgery)
        return NextResponse.json(dataItem, {message: 'Well Done bro...'})
    } catch (error) {
        return NextResponse.json({ message: 'Failed to create...'}, error)
    }
}

export async function GET() {
    //connect to DB
    await mongoDBConnect()
    //get data from DB model
    const surgery = await Surgery.find()
    return NextResponse.json(surgery)
}