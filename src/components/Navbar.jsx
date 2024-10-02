import { Box,  Icon,  Image, Input, InputGroup, InputLeftElement, Link, Text, useMediaQuery} from '@chakra-ui/react'
import logo from '/logo.svg'
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react';
export default function Navbar() {
      const [isHovered, setIsHovered] = useState(false);
      const [isMinWidth1120] = useMediaQuery('(min-width: 1120px)')
      const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`${isScrolled && 'fixed' }  bg-white h-fit  w-full  px-2  min-[1120px]:px-10 z-10`} >

    <Box  className={`flex ${(isScrolled && isMinWidth1120) && 'fixed bg-white  top-0 left-0  shadow-xl '}bg-white  w-full  items-center justify-between py-2 px-6`} display={` ${(isScrolled && !isMinWidth1120) && ' none'}`}>
      {!isMinWidth1120 && <Icon as={HamburgerIcon} boxSize={8}/>}
      <Link href=''>
      
      <Image src={logo} alt="wayfair-logo"  className='h-auto w-28  min-[1120px]:w-48' />
      </Link>
      <InputGroup width={'45%'} display={isMinWidth1120 ? 'block' : 'none'}>
    <InputLeftElement pointerEvents='none' >
      <SearchIcon color='gray.600' />
    </InputLeftElement>
    <Input type='text' placeholder='Find anything home...' />
  </InputGroup>

      {''}
      <Box className='flex items-center'>
      <Box
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={()=>setIsHovered(!isHovered)}
      display={{ base: 'block', md: 'inline-block' }} // Adjusts the display for small screens
    >
      <Box className='flex cursor-pointer w-fit  p-1 items-center gap-1'>
      <svg  viewBox="2 2 24 24" className={`${isHovered && 'fill-[#7c189f]'} w-6 min-[1120px]:w-8 `}><path d="M14 4.5a9.5 9.5 0 109.5 9.5A9.51 9.51 0 0014 4.5zM9.26 21.05v-2.17a3.37 3.37 0 013.36-3.36h2.74a3.37 3.37 0 013.36 3.36v2.19a8.47 8.47 0 01-9.48 0zM14 14.5a2.5 2.5 0 112.5-2.5 2.5 2.5 0 01-2.5 2.5zm5.73 5.76v-1.38a4.37 4.37 0 00-3.44-4.26A3.45 3.45 0 0017.5 12a3.5 3.5 0 00-7 0 3.45 3.45 0 001.21 2.62 4.37 4.37 0 00-3.44 4.26v1.38a8.5 8.5 0 1111.46 0z"></path></svg>

        <Text className=' hidden min-[1120px]:block'>Sign In</Text>
      </Box>
      {isHovered && (
        <Box
          // left={-100}
          p={4}
          boxShadow="lg"
          className='-left-52  min-[630px]:-left-32  h-auto  absolute mt-2 w-72 p-4 z-10 text-center border border-black rounded bg-white'
          
        >
        <button  className='bg-[#7c189f] text-white p-3 rounded-3xl text-lg  w-60 '>Sing In</button>
        <p  className='text-[#7c189f] underline hover:no-underline my-2'><a href="">Create an account</a></p>
        <hr />
        <a href=''  className="flex my-4 hover:underline hover:text-[#7c189f] hover:fill-[#7c189f]">
        <svg  viewBox="2 2 24 24" className='w-6'><path d="M14 4.5a9.5 9.5 0 109.5 9.5A9.51 9.51 0 0014 4.5zM9.26 21.05v-2.17a3.37 3.37 0 013.36-3.36h2.74a3.37 3.37 0 013.36 3.36v2.19a8.47 8.47 0 01-9.48 0zM14 14.5a2.5 2.5 0 112.5-2.5 2.5 2.5 0 01-2.5 2.5zm5.73 5.76v-1.38a4.37 4.37 0 00-3.44-4.26A3.45 3.45 0 0017.5 12a3.5 3.5 0 00-7 0 3.45 3.45 0 001.21 2.62 4.37 4.37 0 00-3.44 4.26v1.38a8.5 8.5 0 1111.46 0z"></path></svg>
        <p>My Account</p>
        </a>
        <a href=''  className="flex my-4 hover:underline hover:text-[#7c189f] hover:fill-[#7c189f]">
        <svg  viewBox="2 2 24 24" className='w-6'><path d="M23.36 7a.48.48 0 00-.52-.13l-7.07 2.31-1.43-.54-1.69-3.36A.5.5 0 0012 5L4.83 7.72a.52.52 0 00-.3.28.53.53 0 000 .41l1.77 3.47v7.94a.5.5 0 00.32.46L13.78 23a.47.47 0 00.22 0 .59.59 0 00.31-.09l7.08-2.63a.49.49 0 00.33-.46v-8l1.76-4.38a.48.48 0 00-.12-.44zm-9.65 6.8l-5.48-2L14 9.6l1.1.41zM12 6.12l1.3 2.69L7 11.14 5.7 8.46zm1.5 15.68l-6.2-2.33v-7l6.2 2.31zm1 0v-7l6.2-2.31v7zm6.32-10.39l-6 2.22 1.32-3.49 5.95-2z"></path></svg>
        <p>My Orders</p>
        </a>
        <a href=''  className="flex my-4 hover:underline hover:text-[#7c189f] hover:fill-[#7c189f]">
        <svg  viewBox="2 2 24 24" className='w-6' ><path d="M14 22.5a.51.51 0 01-.36-.15l-7.85-8.14a5.34 5.34 0 01-1.29-3.45A5.2 5.2 0 019.63 5.5 5.08 5.08 0 0114 8.05a5.08 5.08 0 014.37-2.55 5.2 5.2 0 015.13 5.26 5.33 5.33 0 01-1.26 3.42l-7.88 8.17a.51.51 0 01-.36.15zm-4.37-16a4.2 4.2 0 00-4.13 4.26 4.29 4.29 0 001 2.78l7.5 7.74 7.49-7.77a4.26 4.26 0 00-3.12-7 4.12 4.12 0 00-3.89 2.92.53.53 0 01-1 0A4.12 4.12 0 009.63 6.5z"></path></svg>
        <p>Lists</p>
        </a>
        <a href=''  className="flex my-4 hover:underline hover:text-[#7c189f] hover:fill-[#7c189f]">
        <svg  viewBox="0 0 24 24" className='w-6'><path  d="M3 11.5C3 6.804 6.804 3 11.5 3S20 6.804 20 11.5a8.417 8.417 0 01-.996 3.979l1.47 4.361a.5.5 0 01-.635.634L15.497 19A8.498 8.498 0 013 11.5zM11.5 4A7.498 7.498 0 004 11.5a7.498 7.498 0 0011.087 6.586.5.5 0 01.504-.11l3.612 1.226-1.217-3.612a.5.5 0 01.04-.407A7.42 7.42 0 0019 11.5C19 7.356 15.644 4 11.5 4z" ></path><path  d="M11.725 8.414a.237.237 0 00-.45 0l-.698 1.953a.12.12 0 01-.107.082l-1.99.091c-.222.01-.313.304-.139.45L9.9 12.287a.13.13 0 01.041.132l-.532 2.01c-.059.224.18.406.365.277l1.66-1.15a.116.116 0 01.133 0l1.66 1.15c.186.129.425-.053.366-.277l-.533-2.01a.13.13 0 01.042-.132l1.558-1.299c.174-.145.083-.439-.14-.449l-1.989-.091a.12.12 0 01-.107-.082l-.698-1.953z"></path></svg>
        <p>Review My Purchases</p>
        </a>
        <a href=''  className="flex my-4 hover:underline hover:text-[#7c189f] hover:fill-[#7c189f]">
        <svg  viewBox="2 2 24 24" className='w-6' ><path d="M23.7 19.29A6.35 6.35 0 0018 15.5a6.35 6.35 0 00-5.7 3.79.45.45 0 000 .42A6.35 6.35 0 0018 23.5a6.35 6.35 0 005.7-3.79.45.45 0 000-.42zM18 22.5a5.33 5.33 0 01-4.69-3 5.33 5.33 0 014.69-3 5.33 5.33 0 014.69 3 5.33 5.33 0 01-4.69 3z"></path><path d="M18 18.5a1 1 0 101 1 1 1 0 00-1-1zM9.42 20.87a8.5 8.5 0 1113.08-7.16.5.5 0 001 0 9.5 9.5 0 10-14.62 8 .47.47 0 00.27.08.51.51 0 00.43-.23.5.5 0 00-.16-.69z"></path><path d="M14.9 13.67V9.43a.5.5 0 00-.5-.5.51.51 0 00-.5.5v3.74h-2.56a.5.5 0 000 1h3.06a.5.5 0 00.5-.5z"></path></svg>
        <p>Recently Viewed</p>
        </a>
        <a href=''  className="flex my-4 hover:underline hover:text-[#7c189f] hover:fill-[#7c189f]">
        <svg  viewBox="2 2 24 24" className='w-6'><path d="M14 23.5a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5zm0-18a8.5 8.5 0 108.5 8.5A8.51 8.51 0 0014 5.5z"></path><path d="M14 18a.5.5 0 01-.5-.5v-4a.5.5 0 011 0v4a.5.5 0 01-.5.5zM14 11.21a.63.63 0 11.62-.62.62.62 0 01-.62.62z"></path></svg>
        <p>Help & Contact</p>
        </a>
        <a href=''  className="flex my-4 hover:underline hover:text-[#7c189f] hover:fill-[#7c189f]">
        <svg  viewBox="2 2 24 24" className='w-6'><path d="M23.5 9a.51.51 0 00-.34-.47l-9-3h-.32l-9 3A.51.51 0 004.5 9v10.18a.45.45 0 000 .2.46.46 0 00.14.17.6.6 0 00.11.06l9 2.82h.3l9-2.82a.6.6 0 00.11-.06.46.46 0 00.14-.17.45.45 0 000-.2zm-9-2.34l8 2.7v9.09l-8-2.71zm-9 2.7l8-2.7v9.08l-8 2.71zM14 21.48l-7.38-2.32L14 16.67l7.38 2.49z"></path></svg>
        <p>3D Room Planner</p>
        </a>
        <hr />
        <a href=''  className="flex my-4 hover:underline hover:text-[#7c189f] hover:fill-[#7c189f]">
        <svg  viewBox="2 3 24 24" className='w-6'><path d="M20 10h-3.2a3 3 0 00.2-1 3 3 0 00-5-2.2 3 3 0 00-4.8 3.4A2 2 0 006 12v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2zm-10 2v1H8v-1h2zm10 1h-8v-1h8v1zm-6-5a1 1 0 11-1 1 1 1 0 011-1zm-4 0a1 1 0 11-1 1 1 1 0 011-1zm-2 8h2v4H8v-4zm4 4v-4h8v4h-8z"></path></svg>
        <p>Gift Card</p>
        </a>
        <a href=''  className="flex my-4 hover:underline hover:text-[#7c189f] hover:fill-[#7c189f]">
        <svg  viewBox="2 2 24 24" className='w-6'><path d="M22 8.5H6A1.5 1.5 0 004.5 10v10A1.5 1.5 0 006 21.5h16a1.5 1.5 0 001.5-1.5V10A1.5 1.5 0 0022 8.5zm-16 1h16a.5.5 0 01.5.5v2.87h-17V10a.5.5 0 01.5-.5zm16 11H6a.5.5 0 01-.5-.5v-6.13h17V20a.5.5 0 01-.5.5z"></path></svg>
        <p>Wayfair Credit Card</p>
        </a>
        <a href=''  className="flex my-4 hover:underline hover:text-[#7c189f] hover:fill-[#7c189f]">
        <svg  viewBox="0 1 24 24" className='w-6'><path d="M16.36 2.46v1.16a2.22 2.22 0 012.08 2.26h-1.19a1.2 1.2 0 00-1.35-1.17 1.21 1.21 0 00-1.34 1.07c0 .3.12.78 1 1l1 .26c1.56.42 2.21 1.29 2.09 2.41a2.34 2.34 0 01-2.32 2.07v1.25h-.73v-1.25a2.46 2.46 0 01-2.3-2.34h1.2a1.44 1.44 0 001.5 1.27 1.31 1.31 0 001.5-1.06c.05-.71-.51-1.09-1.23-1.26l-1-.25c-1.67-.45-1.93-1.39-1.93-2.08a2.31 2.31 0 012.26-2.19V2.46z" fill="#29202c" stroke="#29202c" ></path><path d="M6.5 12.35h4.35a.51.51 0 01.35.15l2.87 2.87h0a2 2 0 01.57 1.38 2.08 2.08 0 01-.12.66h2.98" fill="none" stroke="#29202c" ></path><path d="M14.57 17.45a2.08 2.08 0 00.12-.66 2 2 0 00-.57-1.38h0L11.2 12.5a.51.51 0 00-.35-.15H2.93a.5.5 0 00-.5.5.5.5 0 00.5.5h7.71l2.77 2.77h0a.93.93 0 01.25.64 1 1 0 01-.28.68 1 1 0 01-1.35 0l-1.69-1.69a.5.5 0 00-.71 0 .5.5 0 000 .7l1.69 1.69a1.93 1.93 0 002.41.28h5.87a.95.95 0 010 1.9H8.09l-4.23-2.79a.48.48 0 00-.28-.08h-.65a.5.5 0 00-.5.5.5.5 0 00.5.5h.5l4.23 2.82a.48.48 0 00.28.08h11.69a2 2 0 000-3.9z" fill="#231f20" stroke="#29202c" ></path></svg>
        <p>Wayfair Financing</p>
        </a>
        
        </Box>
      )}
    </Box>

<Box className='flex p-2 hover:cursor-pointer hover:text-[#7c189f] hover:fill-[#7c189f]'>
<svg className='w-6 min-[1120px]:w-8'  viewBox="2 2 24 24"  ><path d="M21 15.54a.51.51 0 00.49-.38l2-8a.51.51 0 00-.1-.43.49.49 0 00-.39-.19H8.28L8 4.9a.51.51 0 00-.49-.4H5a.5.5 0 000 1h2.05L9 15l-2.36 4.74a.53.53 0 000 .49.5.5 0 00.42.23H21a.5.5 0 00.5-.5.5.5 0 00-.5-.5H7.89l1.92-3.92zm1.34-8l-1.73 7H9.92l-1.43-7zM10 21a1 1 0 101 1 1 1 0 00-1-1zM18 21a1 1 0 101 1 1 1 0 00-1-1z"></path></svg>
<Text className=' hidden min-[1120px]:block'>Cart</Text>
</Box>
      </Box>
    </Box >  
    <Box className={`${isMinWidth1120 ? 'hidden' : 'block'} ${isScrolled && 'fixed inset-0 bg-white h-fit py-2 z-10 px-4'}   px-4`}>
    <InputGroup >
    <InputLeftElement pointerEvents='none' >
      <SearchIcon color='black' />
    </InputLeftElement>
    <Input type='text' placeholder='Find anything home...' className='placeholder:text-black ' border={'1px solid black'}/>
  </InputGroup>

    </Box>
      </div>
  )
}
