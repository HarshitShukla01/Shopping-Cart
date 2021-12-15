const product = require('../data/products.json');

const getLocalItems = () => {
  let cartArr = localStorage.getItem('cart');
  
  console.log(cartArr);
   if(cartArr) return JSON.parse(localStorage.getItem('cart'))
   else return []
}

const getprice = (id) =>{
     let toReturn = 0 ;
	const findIt = product.find((value) => {
    	if(value.id===id) 
    		{ toReturn = value.price;
              return true}
    })

    return toReturn
}

export const CalTotalGrant = () =>{
	const prod_Arr = getLocalItems();
    let sum_value = 0 ;
	prod_Arr.map((value,index) => {
		sum_value = sum_value + (value.quant * getprice(value.id))
	})
	return sum_value
}


export const CalTotalItems = () =>{
  const prod_Arr = getLocalItems();
    let sum_value = 0 ;
  prod_Arr.map((value,index) => {
    sum_value = sum_value + value.quant
  })
  return sum_value
}

export const getDisableButton = (id) => {
  const prod_Arr = getLocalItems();
  let ret = false
  prod_Arr.map((value,index) => {
    if(value.id===id) ret = true;
  })

  return ret
}


export const addOneItemInCart = (id) => {
  const wholeObj = getLocalItems();
  const newObj = [...wholeObj,{id:id,quant:1}]

  return newObj

}