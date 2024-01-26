import Card from "../../../components/ui/Card"
import classes from '../../../components/meetups/MeetupItem.module.css'

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
  

const meetupdetails = ({params}) =>{
    const currentMeetup=DummyMeetups.find(x=> x.id === params.meetupid)
    if (!currentMeetup) {
        return <p>Meetup not found</p>;
      }
    
    return (
        <Card>
        <div className={classes.image}>
          <img src={currentMeetup.image} alt={currentMeetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{currentMeetup.title}</h3>
          <address>{currentMeetup.address}</address>
        </div>
      </Card>
    )
}

export default meetupdetails