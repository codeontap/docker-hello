import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';

import LocationHome from './location_image/location-home.svg';
import LocationWork from './location_image/location-work.svg';
import LocationHoliday from './location_image/location-holiday.svg'
import LocationUnknown from './location_image/location-unknown.svg';
import LocationOther from './location_image/location-other.svg';

class NameCard extends React.Component {

  render() {

    var img = ''
    var text = ''

    switch(this.props.location.toLowerCase()) {
      case "home":
        text = "I'm at home";
        img = LocationHome;
        break;
      case "work":
        text = "I'm at work";
        img = LocationWork;
        break;
      case "holiday":
        text = "I'm on holiday";
        img = LocationHoliday;
        break;
      case "":
        text = "Not sure where I am"
        img = LocationUnknown;
        break;
      default:
        text = "I'm out and about at " + this.props.location;
        img = LocationOther;
    }

    return (
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{this.props.greeting}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

class App extends Component {

  state = {
    greeting: '',
    location: ''
  }

  async componentDidMount() {
      this.setState({
        greeting: "",
        location: ""
      })

      try {
        const res = await fetch(process.env.REACT_APP_API_URL);
        const data = await res.json();
        this.setState({
          greeting: data.Greeting,
          location: data.Location
        });
      } catch(e) {
        console.log(e);
      }

      try {
        setInterval(async () => {
          try {
            const res = await fetch(process.env.REACT_APP_API_URL);
            const data = await res.json();
            this.setState({
              greeting: data.Greeting,
              location: data.Location
            })
          } catch(e) {
            this.setState({
              greeting: "",
              location: ""
            })
            console.log(e);
          }
        }, 10000);
      } catch(e) {
        console.log(e);
      }
  }

  render () {
    return (
      <Container fluid={true} className="p-3" style={{ height: '100vh'}}>
        <Row className="h-25">
          <Col></Col>
          <Col><NameCard greeting={this.state.greeting} location={this.state.location} /></Col>
          <Col></Col>
        </Row>
        <Row className="h-25"></Row>
      </Container>
    );
  }
}

export default App;
