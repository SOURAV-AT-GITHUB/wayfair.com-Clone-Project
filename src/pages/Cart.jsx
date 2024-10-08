import { ArrowBackIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const cartData = useSelector((store) => store.cart);
  return (
    <div>
      {cartData[0] ? (
        <div className="p-2 min-[800px]:p-8">
          <NavLink to={"/wall-decor-sale"}>
            <div className="flex items-center gap-2 w-fit underline decoration-primary  hover:no-underline cursor-pointer">
              <Icon as={ArrowBackIcon} boxSize={6} color={"purple"} />
              <p className="text-primary ">Back To Shopping</p>
            </div>
          </NavLink>

          <section className="min-[800px]:flex ">
            <div id="left-cart" className="min-[800px]:w-8/12">
              {cartData.map((product, index) => (
                <div key={index}>
                  <div className="min-[480px]:flex">
                    <div className="grid grid-cols-6 gap-2  my-4">
                      <div className="relative col-span-2">
                        <img src={product.image} alt={product.title} className="min-h-[150px] min-w-[100px]"/>
                        {product.deal_type && (
                          <p className=" absolute top-0  bg-dark_red text-white  p-1 px-4  rounded-tl-xl rounded-br-xl">
                            {product.deal_type}
                          </p>
                        )}
                      </div>
                      <div className="col-span-4  min-[480px]:flex gap-4 justify-between w-full">

                      <div className="font-medium">
                        <h4>{product.title}</h4>
                      <p>{product.brand}</p> 
                      </div>
                        <div>
                              <p className="text-2xl font-medium">${(product.deal_price * product.quantity).toFixed(2)}</p>
                              <p className="text-nowrap font-medium">${product.deal_price} per item</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {index <cartData.length-1 && <hr/>}
                </div>
              ))}
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
