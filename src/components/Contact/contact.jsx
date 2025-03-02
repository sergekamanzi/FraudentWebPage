import "./contact.css"
import { IoMdHome } from "react-icons/io";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { MdContactPage } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import logo2 from "/logo2.png"
const contact = () => {
  return (
    <div className="main-contact">
     <div className="contact-content">

       <div className="contact-logo">
           <img src={logo2} alt="" />
           <p>Protecting your transactions with advanced AI-powered fraud detection.</p>
       </div>
       <div className="contact-links">
          <h6>Quick Links</h6>
           <ul>
               <li><IoMdHome />Home</li>
               <li><FaInfoCircle />Why Us</li>
               <li><GiArtificialIntelligence />Technologies</li>
               <li><RiCompassDiscoverFill /> Discovery</li>
               <li><MdContactPage /> Contact Us</li>
           </ul>
       </div>
       <div className="contact-address">
        <h6>Contact Us</h6>
         <p>Kigali, Rwanda</p>
         <p>Phone: +250790379037</p>
        <p>Email:info@fraudshield.com</p>
        <p>www.fraudshield.com</p>
       </div>
       </div>
       <div className="footer">
        <p>&copy; 2025 FraudShield. All rights reserved.</p>
       </div>
    </div>
  )
}

export default contact
