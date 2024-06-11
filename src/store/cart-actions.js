import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData=()=>{
    return async dispatch=>{
        const fetchData=async()=>{
            const response=await fetch('https://apitesting-54b32-default-rtdb.firebaseio.com/cart.json');

            if(!response.ok)
            {
                throw new Error('Could not fetch cart data!');
            }

            const data =await response.json();
            return data;
        };

        try{
            const cartData=await fetchData();
            dispatch(cartActions.replaceCart({items: cartData.items || [],
            totalQuantity:cartData.totalQuantity,}));

        }catch(error)
        {
            dispatch(
                uiActions.showNotification({
                  status: "error",
                  title: "Error!",
                  message: "fetching card data failed!",
                })
              );
        }
    };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "sending",
          message: "sending card data",
        })
      );
      const sendRequest = async () => {
        const response = await fetch(
          "https://apitesting-54b32-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify({items:cart.items, totalQuantity: cart.totalQuantity}),
          }
        );
  
        if (!response.ok) {
          throw new Error("Sending error data failed");
        }
      };
      try {
        await sendRequest();
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "sending card data failed!",
          })
        );
      }
  
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success..",
          message: "sent card data sucessfully",
        })
      );
    };
  };
  