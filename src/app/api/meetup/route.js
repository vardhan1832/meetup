import { MongoClient } from "mongodb"
import { NextResponse } from "next/server"
export async function GET(req){
    const client = await MongoClient.connect(process.env.DB_LINK)
  const db = client.db()
  const meetupcollections = db.collection('meets')
  const meetups = await meetupcollections.find().toArray()
  client.close()
  return NextResponse.json({meetups:meetups})
}
export async function POST(req){
    const data = await req.json()
    console.log(data)
    const client = await MongoClient.connect(process.env.DB_LINK)
    const db = client.db()
    const meetupcollections = db.collection('meets')
    const res = await meetupcollections.insertOne(data)
    client.close()
    console.log(res)
    return NextResponse.json({message:'success'})
}
