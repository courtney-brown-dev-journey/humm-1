import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'

function Dinner() {
  return(
<>
  <Container className= "py-3">
  <Row className="d-flex align-items-center">
    <Col md={6} lg={4}>
      <Card className="py-3" className="shadow p-3 mb-3 bg-white rounded">
        <Card.Img src="./images/tonights-menu.jpg" className="my-3" fluid="true" variant="top"/>
        <Card.Body>
          <Card.Title>
            <h3> Tonight on the menu </h3>
          </Card.Title>
          <p>Please arrive by 5 pm to join us for our weekly dinner.</p>
        </Card.Body>
      </Card>
    </Col>
    <Col className="p-5" md={6}>
    <header className="header"> 
    <h1 className="landing-hero">
     Humm's weekly dinners </h1> 
     <br></br>
    <h3>Tonight's meal is vegan. Our delightful team have cooked us up quite the feast! For dinner we have rosemary and grape foceacia, charred zucchini capsicum with mint, and a fresh garden salad.</h3>
    <br></br>
    <h3> To go alongside dinner we have a wonderful snickers slice and refreshing tea.</h3>
    </header>
        </Col>
      </Row>
    </Container>
  </>
  )
}

  export default Dinner