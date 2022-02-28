import React, { useState } from 'react'
import {
  Row,
  Col,
  Card,
  Container,
  Button,
  Modal,
  Form,
  Alert,
} from 'react-bootstrap'

import { claimNewFood } from '../../apis/api'

function Food(props) {
  const { food, setClaimed } = props

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [claimData, setClaimData] = useState({
    id: food.id,
    claimedBy: '',
    claimerRoom: '',
    status: 'Claimed',
  })

  const handleChange = (e) => {
    setClaimData({
      ...claimData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    claimNewFood(claimData).then((newClaim) => {
      window.scrollTo(0, 0)
      setClaimed(newClaim)
      setShow(false)
    })
  }

  return (
    <>
      <Card className="py-3">
        <Card.Body>
          <Row className="justify-content-md-center">
            <Col>
              <Row>
                <Col>
                  <Card.Title>
                    <em>{food.item} </em>
                  </Card.Title>
                </Col>
                <Col>
                  <Button variant="primary" onClick={handleShow}>
                    Claim
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Claim the food {food.item} </Modal.Title>
                    </Modal.Header>
                    <Form>
                      <Modal.Body>
                        <Form.Group
                          className="mb-3"
                          controlId="claimedBy"
                          onChange={handleChange}
                        >
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            name="claimedBy"
                            type="text"
                            placeholder="Enter your name"
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="claimerRoom"
                          onChange={handleChange}
                        >
                          <Form.Label>Room Number</Form.Label>
                          <Form.Control
                            name="claimerRoom"
                            type="text"
                            placeholder="Enter your room number"
                          />
                        </Form.Group>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                          Claim
                        </Button>
                      </Modal.Footer>
                    </Form>
                  </Modal>
                </Col>
              </Row>
              <Row>
                <Card.Text>{food.quantity} available </Card.Text>
              </Row>
              <br /> <strong>Donated by</strong>
              <br />
              <Row>
                <Card.Text>
                  {food.name} in room {food.donorRoom}{' '}
                </Card.Text>
              </Row>
              <Row>
                <Card.Text className="mt-2">
                  <strong>Date Donated</strong>
                  <br />
                  {food.donateDate}
                </Card.Text>
              </Row>
              <br />
              <Row>
                <Card.Text>
                  <strong>Expiry Date</strong>
                  <br />
                  {food.useByDate}
                </Card.Text>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}

export default Food