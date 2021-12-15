import React from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router';
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'
import Cards_Item from './card/Cards_Item'
import back_button from '../images/back_button.png'
import '../style/Category.css'

const arr = require('../data/products.json');

const Category = () => {
	const { ctID } = useParams();
	const str = ctID.substring(0, ctID.length - 2).toUpperCase();
   
	return (
       <>
        <div className="upper_div-Category">
         <Link to="/" className="link-Category" >
          <img className="img-Category" src={back_button} alt="<- back"/>
         </Link>
         <div className="container-fluid inner_div-Category">
         	<h1 className="h1-Category">{str}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h1>
         </div>
        </div>

		<div className="container-fluid ">
		  <Row xs={1} md={4} className="g-4 mt-3 card_div-Category" >
			{
				arr.map((value,index) => {
					if(ctID===value.categoryId)
                    return <Cards_Item key={index} data={value}/>
				})
			}
          </Row>
		</div>
	  </>
	)
}

export default Category