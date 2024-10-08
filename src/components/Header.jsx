import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Icon, Link, Text } from "@chakra-ui/react";

export default function Header() {
  return (
  <div className=" flex text-white bg-primary justify-center lg:justify-between px-4 lg:px-10 py-1">
      <Link className="flex items-center gap-2  text-sm lg:text-lg text-center">
            <Text>Open box deals | Save big on returned, like-new products</Text>
            <Icon as={ArrowForwardIcon} boxSize={6}/>
      </Link>
      <div className="hidden lg:flex gap-5">
            <Text><Link href="">Our App</Link></Text>
           <Text className=" border-l-2 pl-2"><Link href="">Financial</Link></Text>
           <Text className=" border-l-2 pl-2"><Link href="">Professional</Link></Text>
          <Text className=" border-l-2 pl-2"><Link href="">Free Shipping Over $35*</Link></Text>
      </div>
  </div>
  )
}
