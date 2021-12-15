import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import '../../style/Card_Cart_Style.css'


const product = require('../../data/products.json');

const Card_Cart = ({id,quantity,wholeObj,onSubClick,onAddClick,onRemoveClick}) => {

    const onSubItem = () =>{onSubClick(wholeObj,id);}
    
    const onAddItem = () => {onAddClick(wholeObj,id);}
    
    const onRemoveItem = () => {onRemoveClick(wholeObj,id);}
    
    const curr_item = product.find((value) => {
    	if(value.id===id) return true
    })
    
    const totalPrice = quantity *  curr_item.price;

	return (
	<Col className="main_col-Card_Cart">
	
	 <div className="div_main-Card_Cart  ">
      <div className="col_img-Card_Cart">
       <img  src={curr_item.thumbnail} className="img-Card_Cart ms-md-2"/>
      </div>
     
	  <div className= "name-Card_Cart ms-md-4">{curr_item.name}</div>
	  <div className= "price-Card_Cart  me-md-4">Price : &nbsp;$ {curr_item.price}</div>
      
	  <div className="col_quant-Card_Cart"><Button onClick={onAddItem}>+</Button>
	  <div className="ms-md-3 me-md-3">{quantity}</div>
	  <Button onClick={onSubItem}>-</Button></div>
      
	  <div className="total-Card_Cart">Total = &nbsp;$ {totalPrice}</div>
	  <div className="delete-Card_Cart me-md-2 mt-md-2">
	   <button className="delete_button-Card_Cart" onClick={onRemoveItem}>
	     <span class="material-icons">delete</span>
	   </button>
      </div>
	 </div>
	
	</Col>
	)
}

export default Card_Cart