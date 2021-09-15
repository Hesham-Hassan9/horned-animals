import React from "react";
import Form  from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"

class SelectedForm extends React.Component {

    // cconstructor(props) {
    //     super(props);
    // }

    selectHorns = (horns) => {
        this.props.hornforFilter(horns.target.value);
    }

    onClick = (event) => {
        event.preventDefault();
        this.props.filter();
    }


    render() {
        return (
            <>
                <Form>
                    <Form.Group>
                        <Form.Label>Search for Horns Number</Form.Label>
                        <Form.Control name="numHorns" as="select" onChange={this.selectHorns}>
                            <option >select</option>
                            <option value="1" >One</option>
                            <option value="2" >Tow</option>
                            <option value="3" >Three</option>
                            <option value="100">WOW</option>
                        </Form.Control>
                        <Button variant="success" onClick={this.onClick}>Search!</Button>
                    </Form.Group>
                </Form>
            </>
        )
    }
}

export default SelectedForm;