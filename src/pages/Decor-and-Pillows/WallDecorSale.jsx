import { FormLabel, Select } from "@chakra-ui/react";
import { wallDecorSaleData } from "./data";
import { useState } from "react";
import ProductCard from "../../components/ProductCard";
export default function WallDecorSale() {
  const [sort, setSort] = useState("Recommended");
  return (
    <div className="p-4 w-full min-[960px]:w-10/12">
      <section id="top" className="flex justify-between p-4">
        <div>
          <p>Décor & Pillows / Wall Décor / Wall Décor Sale</p>
          <h3 className="text-2xl font-bold">Wall Décor Sale</h3>
          <p>{wallDecorSaleData.length} Results</p>
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
      <section id="products" className="grid grid-cols-2 min-[960px]:grid-cols-3 gap-6 justify-evenly">
        {wallDecorSaleData.map((product,index)=>(
          <ProductCard key={index+1} product={product}/>
        ))}
      </section>
    </div>
  );
}
