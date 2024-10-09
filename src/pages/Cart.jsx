import { ArrowBackIcon, DeleteIcon } from "@chakra-ui/icons";
import { Icon, Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import StarRating from "../components/StarRatings";
import { useEffect, useState } from "react";

export default function Cart() {
  const cartData = useSelector((store) => store.cart);
  const isAuth = useSelector((store)=>store.auth)
  const dispatch = useDispatch()
  const [cartInfo,setCartInfo] = useState({
    count: 0,
    subtotalAmount : 0,
    tax : 0,
    totalAmount : 0,
  })
  const handleChange = (title,quantity)=>{
dispatch({type:"UPDATE",payload:{title,quantity}})
  }

  useEffect(()=>{
    let count = 0
    cartData.forEach(element => count+=element.quantity);
    let subtotalAmount = 0
    cartData.forEach(product=>subtotalAmount += product.deal_price *product.quantity )
    subtotalAmount= +subtotalAmount.toFixed(2)
    let tax = +(subtotalAmount * 0.075).toFixed(2)
    let totalAmount = +(+subtotalAmount + +tax).toFixed(2)
    setCartInfo({count,subtotalAmount,tax,totalAmount})
  },[cartData])
  return (
    <div>
      {(cartData[0] && isAuth.isLoggedIn)   ? (
        <div className="p-2 min-[800px]:p-8">
          <NavLink to={"/wall-decor-sale"}>
            <div className="flex items-center gap-2 w-fit underline decoration-primary  hover:no-underline cursor-pointer">
              <Icon as={ArrowBackIcon} boxSize={6} color={"purple"} />
              <p className="text-primary ">Back To Shopping</p>
            </div>
          </NavLink>

          <section className="min-[800px]:flex  gap-10 ">
            <div id="left-cart" className="min-[800px]:w-8/12">
              {cartData.map((product, index) => (
                <div key={index}>
                  <div className="min-[480px]:flex">
                    <div className="grid grid-cols-6 gap-2  my-4">
                      <div className="relative col-span-2">
                        <img src={product.image} alt={product.title} className="min-h-[150px] min-w-[100px]"/>
                        {product.deal_type && (
                          <p className=" absolute top-0  bg-dark_red text-white  min-[800px]:p-1 min-[800px]:px-4  rounded-tl-xl rounded-br-xl">
                            {product.deal_type}
                          </p>
                        )}
                      </div>




                      <div className="col-span-4  min-[480px]:flex gap-4 justify-between w-full">
                      <div className="font-medium">
                        <h4>{product.title}</h4>
                      <p>{product.brand}</p> 
                      <div className="min-[800px]:flex items-center gap-1">
                      <StarRating rating={+product.ratings.split("s.")[0].split(" ")[1]} />
                      <p>({product.ratings.split("s.")[1].split(" ")[0]})</p>
                      </div>
                      </div>
                        <div>
                              <p className="text-2xl font-medium">${(product.deal_price * product.quantity).toFixed(2)}</p>
                             {product.quantity>1 &&  <p className="text-nowrap font-medium">${product.deal_price} per item</p>}

                        <div className="my-2">
                          <button onClick={()=>{dispatch({type:"REMOVE",payload:{...product}})}}  className="flex items-center gap-1 text-primary text-lg underline hover:no-underline my-2"><Icon as={DeleteIcon} boxSize={5}/> <p>Remove</p> </button>
                          <Select variant={'outline'} value={product.quantity} onChange={(e)=>handleChange(product.title,+e.target.value)}>
                          {Array.from({length:30},(_,index)=>(
                            
                            <option key={index}  value={index+1}>{index+1}</option>
                          ))}
                          </Select>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {index <cartData.length-1 && <hr/>}
                </div>
              ))}
            </div>



            <div id="right-cart" className="p-4 shadow-2xl min-[800px]:w-4/12 h-fit">
              <h4 className="font-semibold my-4">Order Summary ({cartInfo.count})</h4>
              <p >All orders qualify for free shipping!</p>
              <div className="flex justify-between my-2" >
                <p>Item Subtotal $({cartInfo.count})</p>
                <p>{cartInfo.subtotalAmount} </p>
              </div>
              <div className="flex justify-between my-2" >
                <p>Delivery </p>
                <p>FREE </p>
              </div>
              <div className="flex justify-between my-2" >
                <p>Estimated Tax</p>
                <p>{cartInfo.tax} </p>
              </div>
              <hr />
              <div className="flex justify-between my-2 font-semibold text-xl" >
                <p>Total</p>
                <p>${cartInfo.totalAmount} </p>
              </div>
              <button className="my-2  w-full py-2  rounded-full bg-primary text-white">Proceed to Checkout</button>
            </div>
          </section>
        </div>

      ) : (









        <div className="w-fit m-8">
          <h4 className="text-3xl font-medium py-2">
            Your Shopping Cart Is Empty
          </h4>
          <p className="py-2 font-medium">
            Save big on our{" "}
            <NavLink to={"/wall-decor-sale"}>
              <span className="underline hover:no-underline text-primary">
                Featured Sales
              </span>
            </NavLink>
          </p>
          <NavLink to={"/wall-decor-sale"}>
            {" "}
            <button className="w-full py-4  border border-primary rounded-full text-primary font-medium">
              Continue Shopping
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}
