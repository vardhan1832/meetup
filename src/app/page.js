import MeetupList from "../../components/meetups/MeetupList"

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

const HomePage = () =>{
  return <MeetupList meetups={DummyMeetups}/>
}
export default HomePage