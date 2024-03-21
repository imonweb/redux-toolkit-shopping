import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'


const Cart = () => {
  const products = useSelector(state => state.cart)

  const dispatch = useDispatch()

  const removeToCart = (id) => {
    // dispatch a remove action
    dispatch(remove(id))
  }

   const cards = products.map(product => (
    <div className="col-md-12" style={{marginBottom: '10px'}}>
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
          <Button variant="danger" onClick={() => removeToCart(product.id)}>Remove Item</Button>
        </Card.Footer>
      </Card>
    </div>
  ))
  return (
    <>
    {/* <h2>Cart</h2> */}
    {/* {JSON.stringify(productCart)} */}

    <div className="row">
      {cards}
    </div>


    </>
  )
}

export default Cart