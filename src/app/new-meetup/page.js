'use client'
import { useRouter } from 'next/navigation'
import NewMeetupForm from "../../../components/meetups/NewMeetupForm";

function NewMeetUpPage(){
    const router = useRouter()
    const addMeetUpHandler = async (enteredMeetupData)=>{
        console.log(enteredMeetupData)
        const response = await fetch('/api/meetup',{
            method:'POST',
            body:JSON.stringify(enteredMeetupData),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
        if(!response.ok){throw new Error(data.message)}
        router.replace('/')
    }
    return <NewMeetupForm onAddMeetup={addMeetUpHandler}/>
}
export default NewMeetUpPage