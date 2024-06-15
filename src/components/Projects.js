import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
// import p1 from '..assets/images/j.jpg';
// import p2 from '..assets/images/mch.jpg';
// import p3 from '..assets/images/ds.jpg';
import p1 from "../assets/images/j.jpg";
import p2 from "../assets/images/mch.jpg";
import p3 from '../assets/images/ds.jpg';

export default function projects() {
  return (
    <>
      <div className="container hero-section-margin">
        <div className="row">
          <div className="col col-sm-12 col-md-4 col-lg-4">
            <Card style={{ width: "18rem" }}>
              <img src={p1} alt="Profile"></img>
              {/* <Card.Img variant="top" src="p1" /> */}
              <Card.Body>
                <Card.Title>Employee Management SYstem(Java)</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Github</Button>
              </Card.Body>
            </Card>
          </div>


          <div className="col col-sm-12 col-md-4 col-lg-4">
            <Card style={{ width: "18rem" }}>
              <img src={p2} alt="Profile"></img>
              {/* <Card.Img variant="top" src="p1" /> */}
              <Card.Body>
                <Card.Title>Housing Prices Prediction (Machine Learning)</Card.Title>
                <Card.Text>
                  I made a model using RandomForestRegresor having value of R^2 97%. That gets
                   some attributes as input from user and gives us prices
                </Card.Text>
                <Button variant="primary">Github</Button>
              </Card.Body>
            </Card>
          </div>



          <div className="col col-sm-12 col-md-4 col-lg-4">
            <Card style={{ width: "18rem" }}>
              <img src={p3} alt="Profile"></img>
              {/* <Card.Img variant="top" src="p1" /> */}
              <Card.Body>
                <Card.Title>T-Test On A Pair of Crops</Card.Title>
                <Card.Text>
                  Here, I applied T-test to check whether there is difference between the products of both or not.
                </Card.Text>
                <Button variant="primary">Github</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col col-sm-12 col-md-4 col-lg-4"></div>
        </div>




        <div className="row">
          <div className="col col-sm-12 col-md-4 col-lg-4">
            <Card style={{ width: "18rem" }}>
              <img src={p1} alt="Profile"></img>
              {/* <Card.Img variant="top" src="p1" /> */}
              <Card.Body>
                <Card.Title>Employee Management SYstem(Java)</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Github</Button>
              </Card.Body>
            </Card>
          </div>


          <div className="col col-sm-12 col-md-4 col-lg-4">
            <Card style={{ width: "18rem" }}>
              <img src={p2} alt="Profile"></img>
              {/* <Card.Img variant="top" src="p1" /> */}
              <Card.Body>
                <Card.Title>Housing Prices Prediction (Machine Learning)</Card.Title>
                <Card.Text>
                  I made a model using RandomForestRegresor having value of R^2 97%. That gets
                   some attributes as input from user and gives us prices
                </Card.Text>
                <Button variant="primary">Github</Button>
              </Card.Body>
            </Card>
          </div>



          <div className="col col-sm-12 col-md-4 col-lg-4">
            <Card style={{ width: "18rem" }}>
              <img src={p3} alt="Profile"></img>
              {/* <Card.Img variant="top" src="p1" /> */}
              <Card.Body>
                <Card.Title>T-Test On A Pair of Crops</Card.Title>
                <Card.Text>
                  Here, I applied T-test to check whether there is difference between the products of both or not.
                </Card.Text>
                <Button variant="primary">Github</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col col-sm-12 col-md-4 col-lg-4"></div>
        </div>





      </div>
    </>
  );
}
