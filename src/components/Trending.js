import {Card, Container, Row, Col, Image} from "react-bootstrap"
import duneImage from "../assets/images/trending/dune.jpg"
import everythingImage from "../assets/images/trending/everything.jpg"
import infiniteImage from "../assets/images/trending/infinite.jpg"
import jokerImage from "../assets/images/trending/joker.jpg"
import lightyearImage from "../assets/images/trending/lightyear.jpg"
import morbiusImage from "../assets/images/trending/morbius.jpg"

const Trending = () => {
  return (
    <div>
      <Container>
        <h1 className="text-white text-center py-4">TRENDING MOVIES</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="bg-white text-white movieImage">
              <Image 
                src={duneImage} 
                className="images"
                alt="Dune Movies"
              />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">DUNE</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to
                    additional content
                    </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
                
              </div>
              
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-white text-white movieImage">
              <Image 
                src={everythingImage} 
                className="images"
                alt="Dune Movies"
              />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">Everything</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to
                    additional content
                    </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
                
              </div>
              
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-white text-white movieImage">
              <Image 
                src={infiniteImage} 
                className="images"
                alt="Dune Movies"
              />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">Infinite</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to
                    additional content
                    </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
                
              </div>
              
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-white text-white movieImage">
              <Image 
                src={jokerImage} 
                className="images"
                alt="Dune Movies"
              />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">Joker</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to
                    additional content
                    </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
                
              </div>
              
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-white text-white movieImage">
              <Image 
                src={lightyearImage} 
                className="images"
                alt="Dune Movies"
              />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">Lightyear</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to
                    additional content
                    </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
                
              </div>
              
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-white text-white movieImage">
              <Image 
                src={morbiusImage} 
                className="images"
                alt="Dune Movies"
              />
              <div className="bg-dark">
                <div className="p-2 m-1">
                  <Card.Title className="text-center">Morbius</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to
                    additional content
                    </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
                
              </div>
              
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Trending