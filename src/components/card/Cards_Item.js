import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import '../../style/Card_Items_style.css'
import {getDisableButton,addOneItemInCart} from '../Helper'

const Cards_Item = ({data}) => {
  
  const [btnDisableValue,setBtnDisableValue] = useState(getDisableButton(data.id));
  
  const [btnText, setBtnText] = useState(btnDisableValue?"Item added":"Add To Cart")
 
  const cartButtonClick = () => {
    setBtnText("Item added")
    alert("Item Added To Shopping Cart");
    localStorage.setItem('cart',  JSON.stringify(addOneItemInCart(data.id)));
  }
  
  useEffect(() => {
     setBtnDisableValue(getDisableButton(data.id));
   }, [btnText])

	return (
		<Col>
		 <Card className="Card-Cards_Items" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.thumbnail} className="card_img-Cards_Items"/>
      <Card.Body className="Card_body-Cards_Items">
        <Card.Title className="Card_title-Cards_Items"><h3>{data.name}</h3></Card.Title>
        <hr style={{width:"100%",textAlign:"left",marginLeft:"0",marginTop:"0",border:"2px solid black"}}/>
        <h5>Stock : {data.inStock?
        	<span class="material-icons icon_circle-Cards_Items">check_circle</span>:
        	<span class="material-icons icon_empty-Cards_Items">not_interested</span>}
        </h5>
        <h5>Price : ${data.price}</h5>
        <h5>Delivery : {data.delivery?'Available':'Not Available'}</h5>
        <Button 
          variant="primary" 
          className="button-Card_Item"
          disabled={btnDisableValue}
          onClick={cartButtonClick}>
          {btnText}
        </Button>
      </Card.Body>
     </Card>
    </Col>
	)

}

export default Cards_Item