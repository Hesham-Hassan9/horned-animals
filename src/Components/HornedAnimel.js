import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class HornedAnimel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      voteOfNm: 0
    }
}

// for adding 1 to the clicked on cat
increaseNumberOfvote  = () => {
    this.setState({
      voteOfNm: this.state.voteOfNm + 1
    })
}


  render(){
    return(
     <div style={{display: 'flex', flexDirection: 'row'}}>
       <Card style={{ width: '20rem' }} >
  <Card.Img variant="top" src={this.props.imgSrc} alt={this.props.imgAlt} title={this.props.imgTitale} />
  <Card.Body>
    <Card.Title>{this.props.name}</Card.Title>
    <Card.Text>{this.props.disc}</Card.Text>
    <h2>{' number of vote: '+this.state.voteOfNm}</h2>
    <Button onClick={this.increaseNumberOfvote} variant="primary">vote</Button>
  </Card.Body>
</Card>
     </div>
    )
  }
}



export default HornedAnimel;