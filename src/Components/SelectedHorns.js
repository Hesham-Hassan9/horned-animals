import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

class SelectedHorns extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.closeModal}>
          <Modal.Header closeButton >
            <Modal.Title>{this.props.dataToSelected.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modalBody">
            <Card id="modalCard" style={{ width: '100%' }}>
              <Card.Img variant="top" src={this.props.dataToSelected.image_url} style={{ width: '100%' }} />
              <Card.Body >
                <Card.Title><span>{this.props.dataToSelected.title}</span></Card.Title>
                <Card.Text>{this.props.dataToSelected.description}</Card.Text>
                <p> <span>Number of Hourns: </span> {this.props.dataToSelected.horns} 🦄</p>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer >
            <p>Don't forget to VOTE <span>&#128150;</span>for your Me!</p>
          </Modal.Footer>
          <Button onClick={this.props.closeModal} >Close</Button>
        </Modal>
      </>
    );
  }
}


export default SelectedHorns;