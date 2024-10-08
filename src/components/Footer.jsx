import { useMediaQuery } from "@chakra-ui/react"
import { Fragment } from "react"
import logo1 from '/lower-nav-1.svg'
import logo2 from '/lower-nav-2.svg'
import logo3 from '/lower-nav-3.svg'
import facebookLogo from '/facebook.svg'
import pinterestLogo from '/pinterest.svg'
import instagramLogo from '/instagram.svg'
import tiktokLogo from '/tiktok.svg'
import youtubeLogo from '/youtube.svg'
export default function Footer() {
      const [isMinWidth960] = useMediaQuery('(min-width: 960px)')
      const banner = {
            smallScreen : "https://assets.wfcdn.com/im/39685217/resize-h300-w825%5Ecompr-r85/2762/276204443/attention%2C_waybors%21_don%27t_miss_exclusive_deals_and_perks_on_the_app._download_the_app.__276204443.jpg",
            bigScreen : "https://assets.wfcdn.com/im/20043935/resize-h312-w2000%5Ecompr-r85/2762/276204445/attention%2C_waybors%21_don%27t_miss_exclusive_deals_and_perks_on_the_app._download_the_app.__276204445.jpg"
      }
      const middleNavData = {
            "About Us":["About Wayfair"," Wayfair Professional"," Gift Cards"," Wayfair Credit Card"," Wayfair Financing"," Careers"," Sell on Wayfair"," Investor Relations"," Advertise With Us"," Locations"],
            "Customer Service" :["My Orders","My Account","Track My Order","Wayfair Accessibility Statement","Return Policy","Help Center","Ideas & Advice","Product Recalls"],
            "Contact Us" : {
            "Customer Service" : ["Open. Closes at 11:59 PM.","Mon - Fri: 8:00 AM - 11:59 PM","Sat: 8:00 AM - 8:00 PM","Sun: 9:00 AM - 6:00 PM","All times Eastern"],
            "Shopping Assistance" : ["Open. Closes at 11:59 PM.","Mon - Fri: 8:00 AM - 11:59 PM","Sat: 8:00 AM - 8:00 PM","Sun: 9:00 AM - 6:00 PM","All times Eastern"]
      }    

      }
  return (
<div className="">
  <section id="upper-footer" className="m-auto text-center">
     <img className="m-auto rounded-lg"  src={isMinWidth960 ? banner.bigScreen : banner.smallScreen} alt="" />
      <div className="block min-[640px]:flex p-6  justify-center gap-16">
         <div>
            <h4 className="font-bold text-lg mb-4">Be the first to know about our best deals!</h4>
            <p className="text-primary underline"><a href="">Privacy Policy</a></p>
         </div>
         <div className=" flex w-fit my-2 m-auto min-[640px]:m-0">
            <input type="text" placeholder="Email Address" className=" border border-black  pl-4 rounded-l-xl w-52   min-[500px]:w-96 h-12 placeholder:text-black placeholder:font-medium"/>
            <button className="bg-primary text-white text-md  px-4  rounded-r-xl h-12 ">Submit</button>
         </div>
      </div>
      </section>
<hr />
<section id="middle-footer" className="p-4 px-6  min-[640px]:p-10 min-[640px]:px-20 block min-[640px]:flex justify-start gap-72">
            {Object.entries(middleNavData).filter((_,i)=>i!==2).map(ele=>(
                  <div key={ele[0]}>
                  <h3 className="font-bold text-2xl">{ele[0]}</h3>
                  {ele[1].map(element=>(
                        <p key={element} className="hover:underline my-3 text-black"><a href="">{element}</a></p>
                  ))}
                  </div>
            ))}
      {Object.entries(middleNavData).filter((_,i)=>i===2).map(e=>(
            <div key={e[0]}>
                   <h3 className="font-bold text-2xl">{e[0]}</h3>
                   <button className="flex items-center gap-2  my-2 bg-primary text-white p-3 px-5 rounded-full text-lg">
                         <svg  viewBox="2 2 24 24" className="h-6 fill-white"><path d="M18 14h-4v-4a.5.5 0 00-1 0v4.5a.5.5 0 00.5.5H18a.5.5 0 000-1z"></path><path d="M14 4.5a9.5 9.5 0 109.5 9.5A9.51 9.51 0 0014 4.5zm0 18a8.5 8.5 0 118.5-8.5 8.51 8.51 0 01-8.5 8.5z"></path></svg>
                  Quick Help</button>
            <button className="flex items-center gap-2  my-2 text-primary border border-primary p-3 px-9  rounded-full text-lg">
            <svg  viewBox="2 2 24 24" className="h-6 fill-primary"><path d="M18.88 23h-.07C12.18 22 6 15.84 5 9.21a.47.47 0 01.13-.42l3.59-3.66A.52.52 0 019.11 5a.47.47 0 01.36.2l3.2 4.24a.5.5 0 01-.05.66l-1.73 1.68a7.21 7.21 0 005.36 5.37l1.64-1.76a.49.49 0 01.67-.06l4.24 3.17a.5.5 0 01.05.76l-3.62 3.62a.5.5 0 01-.35.12zM6 9.31A16.43 16.43 0 0018.71 22l3-3-3.43-2.58L16.8 18a.51.51 0 01-.44.16 8.22 8.22 0 01-6.5-6.51.49.49 0 01.14-.43l1.61-1.56L9 6.24z"></path></svg>
                  Call Us</button>
                   {Object.entries(e[1]).map(ele=>(
                        <Fragment key={ele[0]}>
                        <h4 className="font-bold my-2">{ele[0]}</h4>
                        {ele[1].map((element,index)=>(
                              <p key={element} className={`${(index===0 || index===4) && "my-3" } text-black`}>{element}</p>
                        ))}
                        </Fragment>
                   ))}
            </div>
      ))}
</section>
<hr />
<section id="lower-footer" className="p-4 px-6  min-[640px]:p-10 min-[640px]:px-20 ">
<div className="block min-[640px]:flex gap-4 my-2">
<img src={logo1} alt="JOSS & MAIN"  className="my-2"/>
<img src={logo2} alt="ALL MODERN"  className="my-2"/>
<img src={logo3} alt="BRICH LN" className="my-2"/>
</div>
<div className="flex gap-5 mt-4">
<a href="https://www.facebook.com/wayfair/"><img src={facebookLogo} alt="Facebook" className="h-6"/></a>
<a href="https://www.pinterest.com/wayfair/"><img src={pinterestLogo} alt="Pinterest" className="h-6"/></a>
<a href="https://www.instagram.com/wayfair/"><img src={instagramLogo} alt="Instagram" className="h-6"/></a>
<a href="https://www.tiktok.com/@wayfair?lang=en"><img src={tiktokLogo} alt="Tiktok" className="h-6"/></a>
<a href="https://www.youtube.com/channel/UCygNJ1TutAAtYlmu0gUMLBA"><img src={youtubeLogo} alt="Youtube" className="h-6"/></a>
</div>
<div className="block min-[640px]:flex gap-4 font-medium my-2">
      <p className="hover:underline my-3 "><a href="">Terms of Use</a></p>
      <p className="hover:underline my-3"><a href="">Privacy Policy</a></p>
      <p className="hover:underline my-3"><a href="">Your Privacy Rights & Choices</a></p>
</div>
<p className="text-xs font-medium my-2">© 2002 - 2024 by Wayfair LLC, 4 Copley Place, 7th Floor, Boston, MA 02116</p>
</section>
    </div>

  )
}

export  function SmallFooter() {
  return (
      <section className="mt-20">

      <div className="block min-[640px]:flex gap-4 font-medium my-2">
      <p className="hover:underline my-3 "><a href="">Terms of Use</a></p>
      <p className="hover:underline my-3"><a href="">Privacy Policy</a></p>
      <p className="hover:underline my-3"><a href="">Your Privacy Rights & Choices</a></p>
</div>
<p className="text-xs font-medium my-2">© 2002 - 2024 by Wayfair LLC, 4 Copley Place, 7th Floor, Boston, MA 02116</p>
      </section>
  )
}
