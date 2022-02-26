import React, {useEffect, useState} from 'react'
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import Form from 'react-bootstrap/Form'
import Container from "react-bootstrap/Container"
import Footer from './Footer'
import ActivitySuggestion from './ActivitySuggestion'
import Activity from './Activity'

import { fetchActivities } from '../apis/api'

function Activities () {

    const [activities, setActivities] = useState(null)
    const [showAlert, setShowAlert] = useState(false)

    const [showForm, setShowForm] = useState(false)

    // const appear = () => {
    //         setShowForm(signup)
    //         return null
    //       .catch(err => {
    //         console.log(err.message)
    //       })
    //   }

    useEffect(() => {
        fetchActivities()
        .then(activities => setActivities(activities))
        return null
    },[])

    // const handleTyping = (e) => {
    //     setMessage(e.target.value)
    //   }
    const handleChange = (e) => {

        // setSuggestion({
        //     ...suggestion,
        //     [e.target.name]: e.target.value 
        // })
      }
      
    //   const handleSubmit = (event) => {
    //     event.preventDefault();
    //     addSuggestion(suggestion) 
    //     .then((newSuggestion)=> {
    //       setAlertInfo({
    //         name: newSuggestion[0].name
    //       })
    //   setShowAlert(true)
    //   })
      
    //   }

      const handleSubmit = (e) => {
        e.preventDefault();
        window.scrollTo(0, 0)
        setShowAlert(true)
      }

    return (
        <> 
        <Container>

        <header className="mt-4 header">
        <h1>Community Events/Activities</h1>
        </header>

        <Alert variant="success" show={showAlert} onClose={() => setShowAlert(false)} dismissible>
        <Alert.Heading>Awesome! We'll see you there!</Alert.Heading>
        </Alert>

        { activities ? activities.map(act => { return <Activity key={act.id} activity={act} /> }
        ) 
        : null
    }

            <ActivitySuggestion />

            <Footer />

        </Container>
          
        </>
    )
}

export default Activities