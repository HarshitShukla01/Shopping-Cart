import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'
import Single_Category_Card from './Single_Category_Card'
import '../../style/For_Card.css'


const arr = require('../../data/categories.json');

const Cards_Category = () => {
	
	return (
		<div className="container-fluid">
		  <Row xs={1} md={4} className="g-4 mt-3">

			{
				arr.map((value,index) => {
					console.log(value.name);
                    return <Single_Category_Card key={index} data={value}/>
				})
			}
           
          </Row>
		</div>
	)
}

export default Cards_Category