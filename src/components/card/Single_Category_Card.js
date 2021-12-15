import React from 'react'
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

const Single_Category_Card = ({data}) => {

  const jumpTo = `/category/${data.id}`  
	return (
		<Col>
		 <Card className="card-Single_Category_Card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.thumbnail} className="card_img-Single_Category_Card"/>
      <Card.Body className="card_body-Single_Category_Card">
        <Card.Title>{data.name}</Card.Title>
        <hr style={{width:"100%",textAlign:"left",marginLeft:"0",marginTop:"0",border:"2px solid black"}}/>
        <Card.Text>{data.description}</Card.Text>
        <Button variant="primary" className="button-Single_Category_Card">
         <Link className="link-Single_Category_Card" to={jumpTo} exact>
          Buy Now <span class="material-icons icon_arrow-Single_Category_Card">open_in_new</span>
          </Link>
        </Button>
      </Card.Body>
     </Card>
    </Col>
	)
}

export default Single_Category_Card