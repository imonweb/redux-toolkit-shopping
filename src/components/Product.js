import React from 'react'
import {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {add} from '../store/cartSlice'
import { getProducts } from '../store/productSlice'
import StatusCode from '../utils/StatusCode'

const Product = () => {
  const dispatch = useDispatch()

  const {data: products, status} = useSelector(state => state.products)

  // const [products, getProducts] = useState([])
  useEffect(() => {
    //api 
    // fetch('https://fakestoreapi.com/products')
    // .then(data => data.json())
    // .then(result => getProducts(result))

    // dispatch an action for fetchProducts
    dispatch(getProducts())
  },[])

  if(status === StatusCode.LOADING){
    return  <p>Loading...</p>
  }

  if(status === StatusCode.ERROR ){
    return <Alert key="danger" variant="danger">Something went wrong! Try again later</Alert>
  }

  const addToCart = (product) => {
    // dispatch an add action 
    dispatch(add(product))
  }

    const cards = products.map(product => (
    <div className="col-md-3" style={{marginBottom: '10px'}}>
      <Card key={product.id} className='h-100'>
        <div className="text-center">
          <Card.Img variant="top" src={product.image} style={{width: '100px', height: '130px', marginTop: '20px'}}/>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
           £ {product.price}
          </Card.Text>
        </Card.Body>
        </div>

        <Card.Footer style={{background: 'white', textAlign: 'center'}}>
          <Button variant="primary" onClick={() => addToCart(product)}>Add to cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ))

  return (
    <>
      <div>Product Dashboard</div>
      {/* {JSON.stringify(products)} */}
      <div className="row">
        {cards}
      </div>
    </>
  )
}

export default Product