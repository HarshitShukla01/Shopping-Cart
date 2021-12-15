import React,{useEffect,useState} from 'react'
import Card_Cart from './card/Card_Cart'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import {CalTotalGrant} from './Helper'
import '../style/Shopcart.css'

//[{"id":"a1","quant":14},{"id":"a2","quant":19},{"id":"b1","quant":21},{"id":"b2","quant":10}]

const getLocalItems = () => {
  let cartArr = localStorage.getItem('cart');
  
  console.log(cartArr);
   if(cartArr) return JSON.parse(localStorage.getItem('cart'))
   else return []
}

const Shopcart = () => {
   //const cart_data = [{id:"a1",quant:1},{id:"a2",quant:1}]
   const [cartItem,setCartItem] = useState(getLocalItems())
   const [totalGrant,setTotalGrant] = useState(5)
   // useEffect(() => {
   //  localStorage.setItem('cart',  JSON.stringify(cart_data));
   // }, [cart_data])
   const onAddClick = (wholeObj,id) =>{
     const newObj = wholeObj.map((value,index) => {
      if(value.id==id){
        value.quant=value.quant+1;
      }
      return value;
     })
 
     setCartItem(newObj);
   }

   const onSubClick = (wholeObj,id) =>{
    let pos=-1;
    var newObj = wholeObj.map((value,index) => {
      if(value.id==id){
        value.quant=value.quant-1;
        if(value.quant==0) pos=index;
        
      }
      return value;
     })
    var spliced = newObj;
    if(pos!==-1)  
       spliced.splice(pos,1);

    setCartItem(spliced)
   }
   
   const onRemoveClick = (wholeObj,id) =>{
    let pos=-1;
    var newObj = wholeObj.map((value,index) => {
      if(value.id==id){
        value.quant=0;
        pos=index;
        
      }
      return value;
     })
    var spliced = newObj;
    if(pos!==-1)  
       spliced.splice(pos,1);

    setCartItem(spliced)
   }

   useEffect(() => {
    
     localStorage.setItem('cart',  JSON.stringify(cartItem));
     setTotalGrant(CalTotalGrant());
   }, [cartItem])

	return (
		<div className="main_div-Shopcart">
			<h1 style={{fontFamily: "'Coiny', cursive"}}>SHOPCART</h1>
      <hr style={{width:"95%",marginLeft:"0",border:"2px solid black"}}/>
      <div className="scroll_div-Shopcart">
      <Row xs={2} md={1} className="g-3 mt-3" >
			{
				cartItem.map((value,index,elemArr) => {
					console.log(value.id);
          return <Card_Cart 
          key={index} 
          id={value.id} 
          quantity={value.quant} 
          wholeObj={elemArr}
          onSubClick={onSubClick}
          onAddClick={onAddClick}
          onRemoveClick={onRemoveClick}
          />
				})
			}
      </Row>
      </div>
      <hr style={{width:"95%",marginLeft:"0",border:"2px solid black"}}/>
      <div className="container mt-4 pe-md-5">
        <h5 className="float-md-end h5-Shopcart">Grant Total = &nbsp;$ {totalGrant}</h5>
      </div>
		</div>
	)
}

export default Shopcart