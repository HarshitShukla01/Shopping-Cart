import React from 'react'
import Carousel_Home from './Carousel_Home'
import Cards_Category from './card/Cards_Category'
import Loginpage from './Loginpage'
const Home = () => {
    let chk =JSON.parse(localStorage.getItem('getentry'))
	if(chk===null)  {return (<Loginpage/>)}
	return (
		<div>
			<Carousel_Home />
			<Cards_Category />
		</div>
	)
}

export default Home