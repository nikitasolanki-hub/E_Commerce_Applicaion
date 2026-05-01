
import { GlobalState } from '../../../../context/GlobalState'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

const BtnRender = ({ product, isAdmin}) => {

    const state = useContext(GlobalState)
    const addCart = state.userAPI.addCart;

  return (
    <div className='row_btn'>
    {
      isAdmin ? 
   <>
      <Link id='btn_buy' to={`#!`} >
      Delete
      </Link>
      <Link id='btn_view' to={`detail/${product._id}`}>
          Edit
      </Link>
      </>
      :
      <>
    <Link id='btn_buy' to={`#!`} onClick={()=> addCart(product)}>
      Buy
      </Link>
      <button
            id="btn_buy"
            onClick={() => addCart(product)} >
            Add to Cart
          </button>

      <Link id='btn_view' to={`detail/${product._id}`}>
          View
      </Link>
     
      </>
}
</div>
  )
}

export default BtnRender
