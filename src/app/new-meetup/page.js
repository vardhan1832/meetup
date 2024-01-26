'use client'
import NewMeetupForm from "../../../components/meetups/NewMeetupForm";

const NewMeetUpPage = () =>{
    const addMeetUpHandler = (enteredMeetupData)=>{
        console.log(enteredMeetupData)
    }
    return <NewMeetupForm onAddMeetup={addMeetUpHandler}/>
}
export default NewMeetUpPage