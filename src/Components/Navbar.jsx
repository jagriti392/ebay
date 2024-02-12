
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
function BasicExample() {
    return (
<>
<header>
    <div className="topber">
        <div className='para1'>Hi Sign in or register</div>
        <div className='para2'>Daily Deals</div>
        <div className='para3'>Help & Contact</div>
        
        <div className='para5'>Sell</div>
        <div className='para6'>Watch List</div>
        <div className='para7'>My eBay</div>
        <span  className='icon'><ion-icon name="cart-outline"></ion-icon></span>

    </div>
    </header>
    
        
    




<headber className="headber">
    
<img className='headlogo' src="data:image/png;base64,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 "alt="" style={{width:"50"}}/>

<div className='head2'>
    <div className="catagory">
    <p className='sb'>Shop by</p>
    <p className='ct'>Catagory</p>
</div>
</div>
<i className='head2icon fa-solid fa-angle-down fa-xs'></i>

<div className='head3'>
    <i class="fa-solid fa magnifying-glass"></i>
    <input type="search" name="" id=""placeholder='Search for anything..'></input>
        <p className='allcat'>All Catogory</p>
        <i className='catsownicon fa-solid fa-angle-down fa-xs'></i>
    
</div>
<div className='head4'>
    <button>Search</button>
</div>
<div className='head5'>
    <p>Advanced</p>
</div>

</headber>

  


<Navbar expand="lg" className="bg-body-tertiary">
<Container>
      
    
     <NavDropdown title="Home" id="basic-nav-dropdown"></NavDropdown>
      <a href="https://www.ebay.com/feed"></a>Saved

     
      <NavDropdown title="Electronics"id="basic-nav-dropdown">
        <div className="left">
              <NavDropdown.Item href="#action/3.1">Most popular categories</NavDropdown.Item>
              <hr></hr>
              <NavDropdown.Item href="#action/3.2">Smartphones and accessories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Video games and consoles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Computers and tablets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cameras and photos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Camera drones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Refurbished</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Smart home</NavDropdown.Item>
              </div>
               <div className="right1">
              <NavDropdown.Item href="#action/3.1">More categories</NavDropdown.Item>
              <hr></hr>
              <NavDropdown.Item href="https://www.ebay.com/b/Apple/bn_21819543"> Apple</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Samsung</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Portable audio and headphones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Emerging brands</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Smart watches</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Deals</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sell on eBay</NavDropdown.Item>
               <img src="https://ir.ebaystatic.com/cr/v/c01/ROW-19392_Fallback_Electronics_770x270.png"alt="
          " style={{height:"160px", marginright:"280px",marginTop:"-290"}}/>
          </div>
<NavDropdown.Divider/>
</NavDropdown>

            <NavDropdown title="Motors" id="basic-nav-dropdown">
            <div className="left">
              <NavDropdown.Item href="#action/3.1">Car</NavDropdown.Item>
              <hr></hr>
              <NavDropdown.Item href="#action/3.2">Auto and truck parts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tools and supplies</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Turbo chargers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Clothing and merchandise</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Shock absorbers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Electronic and GPS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Air intake</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Vintage pieces</NavDropdown.Item>
              </div>
               <div className="right">
              <NavDropdown.Item href="#action/3.1">Motorcycle and more</NavDropdown.Item>
              <hr></hr>
              <NavDropdown.Item href="https://www.ebay.com/b/Apple/bn_21819543">Motorcycle parts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Body and frame</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Engines and parts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accessories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Exhausts and systems</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Rims</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Deal</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sell on eBay</NavDropdown.Item>
               <img src="https://ir.ebaystatic.com/cr/v/c01/ROW-19392_Fallback_Electronics_770x270.png"alt="
          " style={{height:"160px", marginright:"280px",marginTop:"-290"}}/>
          </div>
<NavDropdown.Divider/>
</NavDropdown>







<NavDropdown title="Fashion"id="basic-nav-dropdown">
       <div className="left">
              <NavDropdown.Item href="#action/3.1">Most popular categories</NavDropdown.Item>
              <hr></hr>
              <NavDropdown.Item href="#action/3.3">Footwear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Women's clothing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Footwear for women</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Men's clothing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Men's footwear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Watches</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jewelery</NavDropdown.Item>
              </div>
              <div className="rightf">
              <NavDropdown.Item href="#action/3.1">More categories</NavDropdown.Item>
              <hr></hr>
              <NavDropdown.Item href="https://www.ebay.com/b/Apple/bn_21819543">Accessories for men</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accessories for women</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bags and wallets for women</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mens sunglasses</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Womens sunglasess</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sneakers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Deals</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.3">Sell on eBay</NavDropdown.Item>
               <img src="https://ir.ebaystatic.com/cr/v/c01/ROW-19392_Fallback_Electronics_770x270.png"alt="
          " style={{height:"160px", marginright:"280px",marginTop:"-290"}}/>
          </div>
<NavDropdown.Divider/>
</NavDropdown>


            




<NavDropdown title="Collectibles and Art"id="basic-nav-dropdown">
            <div className="left">
              <NavDropdown.Item href="#action/3.1">Most popular categories</NavDropdown.Item>
              <hr></hr>
              <NavDropdown.Item href="#action/3.3">Collectibles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Art</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Action figures</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Cartoon characters</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Movie and TV characters</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Diecast</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Musical memorabilia</NavDropdown.Item>
              </div>
              <div className="rightf">
              <NavDropdown.Item href="#action/3.1">More categories</NavDropdown.Item>
              <hr></hr>
              <NavDropdown.Item href="https://www.ebay.com/b/Apple/bn_21819543">Sports memorabilia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Trading card games</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Antiques</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Comics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Funko pop</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Star Wars</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Deals</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Sell on eBay</NavDropdown.Item>
               <img src="https://ir.ebaystatic.com/cr/v/c01/ROW-19392_Fallback_Electronics_770x270.png"alt="
          " style={{height:"160px", marginright:"280px",marginTop:"-290"}}/>
          </div>
<NavDropdown.Divider/>
</NavDropdown>



<NavDropdown title="Sports"id="basic-nav-dropdown">
            <div className="left">
              <NavDropdown.Item href="#action/3.1">Cycling</NavDropdown.Item>
              <hr></hr>
              <NavDropdown.Item href="#action/3.3">Fitness, running and yoga</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fitness Tech</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fishing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Camping</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Scooters</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Team Sports</NavDropdown.Item>
            
              </div>
              <div className="rights">
              <NavDropdown.Item href="#action/3.1">More categories</NavDropdown.Item>
              <hr></hr>
              <NavDropdown.Item href="https://www.ebay.com/b/Apple/bn_21819543">Watersports</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Winter sports</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Box MMA</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Swimming</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">GPS & Running Watches</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Garmin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Deals</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Sell on eBay</NavDropdown.Item>
               <img src="https://ir.ebaystatic.com/cr/v/c01/ROW-19392_Fallback_Electronics_770x270.png"alt="
          " style={{height:"160px", marginright:"280px",marginTop:"-290"}}/>
          </div>
<NavDropdown.Divider/>
</NavDropdown>




























           














<NavDropdown title="Health & Beauty"id="basic-nav-dropdown">
            <div className="left">
              <NavDropdown.Item href="#action/3.1">Most popular categories</NavDropdown.Item>
              <hr></hr>
              <NavDropdown.Item href="#action/3.3">Beauty</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Makeup</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Health</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">K-Beauty</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Manicure and pedicure</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Hair products</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Skin products</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Orthopedic products</NavDropdown.Item>
              </div>
              <div className="righth">
              <NavDropdown.Item href="#action/3.1">More categories</NavDropdown.Item>
              <hr></hr>
              <NavDropdown.Item href="https://www.ebay.com/b/Apple/bn_21819543">Vitamins and food supplements</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Shaving and waxing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bath and personal hygiene</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Oral hygiene</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Massagers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Garmin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Deals</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Sell on eBay</NavDropdown.Item>
               <img src="https://ir.ebaystatic.com/cr/v/c01/ROW-19392_Fallback_Electronics_770x270.png"alt="
          " style={{height:"160px", marginright:"280px",marginTop:"-290"}}/>
          </div>
<NavDropdown.Divider/>
</NavDropdown>





<NavDropdown title="Industrial equipments"id="basic-nav-dropdown">
            <div className="left">
              <NavDropdown.Item href="#action/3.1">Most popular categories</NavDropdown.Item>
              <hr></hr>
              <NavDropdown.Item href="#action/3.3">Dental healthcare</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Electronic equipment and supplies</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Metallurgy and manufacturing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Motors and industrial automation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Heavy equipment parts</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.3">Light industrial tools</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Inspection, measurement and testing equipment</NavDropdown.Item>
              
              </div>p
              <div className="righti">
              <NavDropdown.Item href="#action/3.1">More categories</NavDropdown.Item>
              <hr></hr>
              <NavDropdown.Item href="https://www.ebay.com/b/Apple/bn_21819543">
Packing and shipping</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Office supplies and equipment</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Printing and graphic arts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Restaurants and food service</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Maintenance and safety</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Retail and services</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Deals</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Sell on eBay</NavDropdown.Item>
               <img src="https://ir.ebaystatic.com/cr/v/c01/ROW-19392_Fallback_Electronics_770x270.png"alt="
          " style={{height:"160px", marginright:"280px",marginTop:"-290"}}/>
          </div>
<NavDropdown.Divider/>
</NavDropdown>







<NavDropdown title="Home & Garden"id="basic-nav-dropdown">
        <div className="left">
              <NavDropdown.Item href="#action/3.1">Most popular categories</NavDropdown.Item>
              <hr></hr>
              <NavDropdown.Item href="#action/3.2">Workshop Tools and Equipment</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Patio, garden and outdoors</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Home improvement</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Kitchen, dining and bar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Lamps, lights and fans</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.3">Interior decoration</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Home organization</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Home applliances</NavDropdown.Item>
              </div>
               <div className="right1">
              <NavDropdown.Item href="#action/3.1">More categories</NavDropdown.Item>
              <hr></hr>
              <NavDropdown.Item href="#action/3.3"> Toys</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Crafts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Art Supplies</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Musical Instruments</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jewelry and beads</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Deals</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sell on eBay</NavDropdown.Item>
               <img src="https://ir.ebaystatic.com/cr/v/c01/ROW-19392_Fallback_Electronics_770x270.png"alt="
          " style={{height:"160px", marginright:"280px",marginTop:"-290"}}/>
          </div>
<NavDropdown.Divider/>
</NavDropdown>











</Container>
</Navbar>


           

















</>
           
  
  );
}

export default BasicExample;



