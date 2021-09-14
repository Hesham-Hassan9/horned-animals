import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns';
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

show = () => {
  this.props.show(this.props.beastkey);
}

handleClick = () => {
  this.setState({
    votes: this.state.votes + 1
  });
};


// return(
//   <div >
//     <Card style={{ width: '20rem' } } beastkey={this.props.beastkey}>
// <Card.Img variant="top" src={this.props.imgSrc} alt={this.props.imgAlt} title={this.props.imgTitale} />
// <Card.Body>
//  <Card.Title>{this.props.name}</Card.Title>
//  <Card.Text>{this.props.disc}</Card.Text>
//  <h2>{' number of vote: '+this.state.voteOfNm}</h2>
//  <Button onClick={this.increaseNumberOfvote} variant="primary">vote</Button>
// </Card.Body>
// </Card>
//   </div>
//  )
// }
  render(){
      return(
        <CardColumns >
          <Card  style={{ width: '20rem' }} beastkey={this.props.beastkey}>
            <Card.Header  style={{width: '20rem'}} onClick={this.show}>
              <Card.Img  variant="top" src={this.props.imgSrc} alt={this.props.imgAlt} title={this.props.imgTitale} style={{width: '18rem'}} />
            </Card.Header>
            <Card.Body>
              <Card.Title >{this.props.name}</Card.Title>
              <Card.Text >
                {this.props.disc}
              </Card.Text>
            </Card.Body>
            <Card.Footer ><span>&#128150;</span> &nbsp; {this.state.voteOfNm}</Card.Footer>
            <Button onClick={this.increaseNumberOfvote}>Vote For Me!</Button>
          </Card>
        </CardColumns>
      );
    }
}



export default HornedAnimel;