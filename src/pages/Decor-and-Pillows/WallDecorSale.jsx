import { FormLabel, Select, Spinner } from "@chakra-ui/react";
import { wallDecorSaleData } from "./data";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
export default function WallDecorSale() {
  const [sort, setSort] = useState("Recommended");
  const [data,setData] = useState([...wallDecorSaleData])
  const [isSorting,setIsSorting] = useState(false)
  console.log(data[0]);
  
  useEffect(()=>{
    setIsSorting(true)
    setTimeout(()=>setIsSorting(false),250)
    if(sort === 'Recommended'){
      setData([...wallDecorSaleData])
    }else if(sort === 'Price: Low to High'){
      let sortedData = [...wallDecorSaleData].sort((a,b)=>a.deal_price - b.deal_price)
      setData(sortedData)
    }
    else if(sort === "Price: High to Low"){
      let sortedData = [...data].sort((a,b)=>b.deal_price - a.deal_price)
      setData(sortedData)
    }
    else if (sort === ''){
      let sortedData = [...data].sort((a, b) => {
        // console.log(a.ratings.split(' ')[1]);
        
        +a.ratings.split(' ')[1] - (+b.ratings.split(' ')[1])});
      setData(sortedData)
    }
  },[sort])

  return (
    <div className="p-4 w-full ">
      <section id="top" className="flex justify-between p-4">
        <div>
          <p>Décor & Pillows / Wall Décor / Wall Décor Sale</p>
          <h3 className="text-2xl font-bold">Wall Décor Sale</h3>
          <p>{data.length} Results</p>
        </div>
        <div className="relative">
          <Select
            placeholder="Select option"
            value={sort}
            border={"1px solid black"}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="Recommended">Recommended</option>
            <option value="Customer Rating">Customer Rating</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
          </Select>
          <FormLabel
            position="absolute"
            top="-10px"
            left="10px"
            backgroundColor="transparent"
            px={1}
            fontSize="12px"
            zIndex={10}
            bgColor={"white"}
          >
            Sory by
          </FormLabel>
        </div>
      </section>
{  isSorting ? <div className="flex items-center m-auto w-fit py-6 gap-8">
    <h3 className="text-4xl">Loading</h3><Spinner
  thickness='4px'
  speed='1s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
    </div>  :  <section id="products" className="grid grid-cols-2 min-[960px]:grid-cols-3 gap-6 justify-evenly">
        {data.map((product,index)=>(
          <ProductCard key={index+1} product={product}/>
        ))}
      </section>}
    </div>
  );
}
