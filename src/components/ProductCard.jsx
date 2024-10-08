import {
  Box,
  // Button,
  Image,
  // Link,
  Modal,
  ModalOverlay,
  ModalContent,
  // ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
  Collapse,
  Icon,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import shippingBadge from "/shipping-badge.svg";
import emptyHeart from '/empty-heart.svg'
import StarRating from "./StarRatings";
import { AddIcon, ChevronDownIcon, ChevronUpIcon, MinusIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
const template = {
  title: "Sabine Metal Rounded Rectangle Wall Mirror",
  image:
    "https://assets.wfcdn.com/im/35228814/resize-h310-w310%5Ecompr-r85/2635/263573627/Sabine+Metal+Rounded+Rectangle+Wall+Mirror.jpg",
  image2:
    "https://assets.wfcdn.com/im/48236217/resize-h310-w310%5Ecompr-r85/2785/278562949/Sabine+Metal+Rounded+Rectangle+Wall+Mirror.jpg",
  size_color: "+4 Colors | 21 Sizes",
  brand: "by RE/FINE\u2122",
  size: "32'' H x 24'' W",
  free_shipping: true,
  fast_delivery: "",
  deal_price: "$95.99",
  price_by_quantity: null,
  original_price: "$113.99",
  ratings: "Rated 4.5 out of 5 stars.4542 total votes",
};
export default function ProductCard({ product = template }) {
  const [isCardHovering, setCardHovering] = useState(false);
  const [isImageHovering, setImageHovering] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isProductInfoCollapse, onToggle: onProductInfoCollapse } =useDisclosure();
  const { isOpen: isSummaryCollapse, onToggle: onSummaryCollapse } =useDisclosure();
  const { isOpen: isReviewCollapse, onToggle: onReviewCollapse } =useDisclosure();
  const [quantity, setQuantity] = useState(1);
  const handleButtonClick = (event) => {
    event.preventDefault();
    onOpen();
  };
  const calculateDiscountPercentage = (discountPrice, originalPrice) => {
    if (!originalPrice || !discountPrice) {
      return null;
    }
    const discountAmount = originalPrice - discountPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    return Math.ceil(discountPercentage);
  };
  const increaseQunatity = ()=>{
    if(quantity>=30) return
    setQuantity(prev=>prev+1)
  }
  const decreaseQunatity = ()=>{
    if(quantity<=1) return
    setQuantity(prev=>prev-1)
  }

  const [isInputActive, setIsInputActive] = useState(false);
  const handleFocus = () => setIsInputActive(true);
  const handleBlur = () => setIsInputActive(false);
  const dispatch = useDispatch()
const handleAdd = ()=>{
dispatch({type:"ADD",payload:{product,quantity}})
}

  useEffect(()=>{
    if(isInputActive) return
    else{
        if(quantity >=30) setQuantity(30)
        if(quantity <=1) setQuantity(1)
        if(quantity >=1 && quantity <=30 ) return
    }
    
  },[isInputActive])

  return (
    <Box
      onMouseEnter={() => setCardHovering(true)}
      onMouseLeave={() => setCardHovering(false)}
      className="card flex flex-col justify-between p-2  text-left border border-transparent hover:border-black max-w-[400px] rounded-lg  hover:bg-slate-50"
    >
      <a href="" target="blank">
        <Box id="image-Box" className="relative ">
          <Box
            className=" relative h-[400px] min-h-[200px]"
            onMouseEnter={() => setImageHovering(true)}
            onMouseLeave={() => setImageHovering(false)}
          >
            <Image
              src={product.image}
              alt={product.title}
              className="absolute top-0  rounded-lg m-auto bg-slate-300 w-full h-full"
              opacity={isImageHovering && product.image2 ? 0 : 1}
              transition="opacity 0.5s ease-in-out"
            />
            {product.image2 && (
              <Image
                src={product.image2}
                alt={product.title}
                className="absolute top-0  rounded-lg m-auto bg-slate-300 w-full h-full"
                opacity={isImageHovering ? 1 : 0}
                transition="opacity 0.5s ease-in-out"
              />
            )}
          </Box>
          <Box className="absolute bottom-0">
            {product.deal_type && (
              <Text
                className={`${
                  product.deal_type.includes("Way") && "w-32"
                } bg-dark_red text-white p-1 px-3  absolute bottom-0 rounded-bl-lg rounded-tr-lg`}
              >
                {product.deal_type}
              </Text>
            )}
            {isCardHovering && (
              <button
                onClick={handleButtonClick}
                className="absolute left-32 bottom-16 w-32  p-2 bg-white text-primary text-lg  border-2 border-primary rounded-full "
              >
                Quickview
              </button>
            )}
          </Box>
        </Box>
        {product.size_color && <p>{product.size_color}</p>}
        <h3 className="font-medium">{product.title}</h3>
        <h3>{product.brand}</h3>
        {product.size && <p>{product.size}</p>}
        <Box className="flex items-center gap-2 my-2">
          <h3
            className={`${
              product.original_price && "text-dark_red"
            }  font-semibold text-2xl `}
          >
            ${product.deal_price}
          </h3>
          {product.price_by_quantity && (
            <p
              className={`font-medium ${
                product.price_by_quantity.includes("/sq") &&
                "text-dark_red text-lg"
              }`}
            >
              {product.price_by_quantity}
            </p>
          )}
          {product.original_price && (
            <p className="line-through text-sm font-medium">
              ${product.original_price}
            </p>
          )}
        </Box>
        <Box className="flex items-center gap-2 mb-3">
          <StarRating rating={+product.ratings.split("s.")[0].split(" ")[1]} />
          <Text className="font-semibold">
            ({product.ratings.split("s.")[1].split(" ")[0]})
          </Text>
        </Box>

        {product.fast_delivery === "" && (
          <Box className="flex">
            <p className="flex bg-[#3e8342] text-white w-fit p-1  rounded-lg">
              1-Day Delivery{" "}
            </p>
            <Image src={shippingBadge} alt="shipping-badge" className="-ml-1" />
          </Box>
        )}
        <p>
          {product.fast_delivery === "" ? "FREE Shipping" : "Free Shipping"}
        </p>
        {product.fast_delivery === "" && <p>Get it Tomorrow</p>}
      </a>
      <Modal onClose={onClose} size={"xl"} isOpen={isOpen} w={"70vw"}>
        <ModalOverlay />
        <ModalContent maxW={"800px"}>

          <ModalCloseButton />
          <ModalBody className="min-[800px]:flex gap-5">
            <Box className="min-[800px]:w-3/6">
              <Text className="font-bold text-2xl">{product.title}</Text>
              <Text className="font-medium">
                See more By{" "}
                <a href="" className="underline text-primary">
                  {" "}
                  {product.brand.split(" ").slice(1).join(" ")}
                </a>
              </Text>
              <img src={product.image} alt={product.title} />
            </Box>
            <Box className="min-[800px]:w-3/6">
              <Box className="flex items-center gap-4">
                <h2 className="text-4xl text-dark_red font-medium">
                  ${product.deal_price}
                </h2>
                <p className="line-through">${product.original_price}</p>
                {product.original_price && (
                  <p className="text-dark_red">
                    {calculateDiscountPercentage(
                      product.deal_price,
                      product.original_price
                    )}
                    % off
                  </p>
                )}
              </Box>
              {product.deal_type && (
                <h2 className="text-4xl text-dark_red   mt-2 ">On Sale</h2>
              )}
              <Box className="my-2">
                <Box
                  onClick={onProductInfoCollapse}
                  className={`flex justify-between items-center  p-2 border-b  hover:border hover:cursor-pointer hover:border-black   hover:rounded-lg ${
                    isProductInfoCollapse && "border rounded-lg border-black"
                  }`}
                >
                  <Text className="font-bold py-2">Product Info</Text>
                  <Icon
                    as={isProductInfoCollapse ? ChevronUpIcon : ChevronDownIcon}
                    boxSize={6}
                  />{" "}
                </Box>
                <Collapse
                  in={isProductInfoCollapse}
                  animateOpacity
                  className=" p-2"
                >
                  <Box>
                    <li>Lorem ipsum, dolor sit adipisicing.</li>
                    <li className="mb-2">
                      Lorem ipsum, dolor sit adipisicing.
                    </li>
                    <hr />
                  </Box>
                </Collapse>
              </Box>
              <Box className="my-2">
                <Box
                  onClick={onSummaryCollapse}
                  className={`flex justify-between items-center  p-2 border-b  hover:border hover:cursor-pointer hover:border-black   hover:rounded-lg ${
                    isProductInfoCollapse && "border rounded-lg border-black"
                  }`}
                >
                  <Text className="font-bold py-2">Summary</Text>
                  <Icon
                    as={isProductInfoCollapse ? ChevronUpIcon : ChevronDownIcon}
                    boxSize={6}
                  />{" "}
                </Box>
                <Collapse
                  in={isSummaryCollapse}
                  animateOpacity
                  className=" p-2"
                >
                  <Box>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Non doloremque praesentium atque consequuntur voluptates.
                    Quod vero voluptatem voluptatibus unde!
                  </Box>
                </Collapse>
              </Box>
              <Box className="my-2">
                <Box
                  onClick={onReviewCollapse}
                  className={`flex justify-between items-center  p-2 border-b  hover:border hover:cursor-pointer hover:border-black   hover:rounded-lg ${
                    isProductInfoCollapse && "border rounded-lg border-black"
                  }`}
                >
                  <Text className="font-bold py-2">Review</Text>
                  <Icon
                    as={isProductInfoCollapse ? ChevronUpIcon : ChevronDownIcon}
                    boxSize={6}
                  />{" "}
                </Box>
                <Collapse in={isReviewCollapse} animateOpacity className=" p-2">
                  <Box>
                    <StarRating rating={5} />
                    <Text>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Non doloremque praesentium atque consequuntur voluptates.
                      Quod vero voluptatem voluptatibus unde!
                    </Text>
                  </Box>
                </Collapse>
              </Box>

            <Box className="flex gap-4 justify-center">
              <Box className="flex border-collapse border border-primary rounded-full overflow-hidden">
                <button onClick={decreaseQunatity}   className="p-3 hover:bg-purple-100 disabled:opacity-50 disabled:cursor-not-allowed" disabled={quantity<=1}><Icon as={MinusIcon}/></button>
                <input type="number" onFocus={handleFocus} onBlur={handleBlur}  className="p-3 border-x border-primary w-14 text-center" value={quantity} onChange={(e)=>setQuantity(+e.target.value)}/>
                <button onClick={increaseQunatity} className="p-3 hover:bg-purple-100 disabled:opacity-50 disabled:cursor-not-allowed" disabled={quantity>=30}><Icon as={AddIcon}/></button>
              
              </Box>
              <button onClick={handleAdd}  type="button" className="bg-primary text-white rounded-full w-44 hover:opacity-80">Add to Cart</button>
            </Box>
            <button className="mt-6  border-2 border-primary rounded-full  w-full h-12  flex justify-center items-center gap-4 hover:shadow-xl shadow-primary"><p className="text-2xl text-primary">Save</p> <img className="h-7"  src={emptyHeart} alt="empty-heart" /></button>
            <a href="" className="w-fit"><p className="mt-4 w-fit underline text-primary hover:no-underline">See Full Details</p></a>
            </Box>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
