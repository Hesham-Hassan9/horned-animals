import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

class SelectedHorns extends React.Component {
  render() {
    return(
      <>
        <Modal show={this.props.show} onHide={this.props.closeModal}>
          <Modal.Header closeButton >
            <Modal.Title>{this.props.dataToSelected.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modalBody">
            <Card id="modalCard" style={{width: '100%'}}>
              <Card.Img variant="top" src={this.props.dataToSelected.image_url} style={{width: '100%'}} />
              <Card.Body >
                <Card.Title><span>{this.props.dataToSelected.title}</span></Card.Title>
                <Card.Text>{this.props.dataToSelected.description}</Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer >
            <p>Don't forget to VOTE for your favorite!</p>
          </Modal.Footer>
          <Button closeButton >Close</Button>
        </Modal>
      </>
    );
  }
}


export default SelectedHorns;