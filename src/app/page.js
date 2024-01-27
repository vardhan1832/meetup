import MeetupList from "../../components/meetups/MeetupList"
import { MongoClient } from "mongodb"
const DummyMeetups = [
  {
    id:'m1',
    title:'a first meetup',
    image:'https://images.pexels.com/photos/3888048/pexels-photo-3888048.jpeg?auto=compress&cs=tinysrgb&w=600',
    address: 'Somewhere in the city',
    description:'firt meetup'
  },
  {
    id:'m2',
    title:'a second meetup',
    image:'https://images.pexels.com/photos/3888048/pexels-photo-3888048.jpeg?auto=compress&cs=tinysrgb&w=600',
    address: 'Somewhere in the city',
    description:'second meetup'
  }
]

const HomePage =async () =>{
  const quotes = await getQuotes()
  return <MeetupList meetups={quotes.quotes}/>
}
export async function getQuotes(){
  const client = await MongoClient.connect(process.env.DB_LINK)
  const db = client.db()
  const meetupcollections = db.collection('meets')
  const meetups = await meetupcollections.find().toArray()
  client.close()
  return {
    quotes:meetups.map(meetup=>({
      title:meetup.title,
      address:meetup.address,
      image:meetup.image,
      description:meetup.description,
      id:meetup._id.toString()
    }))
  }
}
export default HomePage