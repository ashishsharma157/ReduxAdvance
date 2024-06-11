import {Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';

import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';
let isInital=true;

function App() {
  const dispatch=useDispatch();
  const showCart=useSelector(state=>state.ui.cartIsVisible);
  const cart= useSelector((state=>state.cart));
  const notification = useSelector(state=>state.ui.notification);
  useEffect(()=>{
    dispatch(fetchCartData());
  },[dispatch])
  useEffect(()=>{
  //   const sendCartData=async () =>{
  //   //   dispatch(
  //   //     uiActions.showNotification(
  //   //       {status:'pending', 
  //   //       title:'sending', 
  //   //       message:'sending card data'
  //   //     }));
  //   // const response= await fetch('https://apitesting-54b32-default-rtdb.firebaseio.com/cart.json',{
  //   //   method:'PUT',body:JSON.stringify(cart),
  //   // });

  //   // if(!response.ok){
  //   //   throw new Error('Sending error data failed');
  //   // }
  //   //const responseData=await response.json();
  //   // dispatch(uiActions.showNotification({status:'success', title:'Success..', message:'sent card data sucessfully'}))
  // }
   if(isInital){
     isInital=false;
     return;
   }
   if(cart.change)
   {
   dispatch(sendCartData(cart));
   }
  // sendCartData().catch((error)=>{
  //   // dispatch(uiActions.showNotification({status:'error', title:'Error!', message:'sending card data failed!'}))
  // })
  },[cart, dispatch])
  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
