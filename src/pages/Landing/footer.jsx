import { Link } from "react-router-dom";
import Logo from "../../assets/svg/logo";

export default function Footer(){
    const arrow=<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M5 12H19" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 5L19 12L12 19" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    return(
        <div className="footer">
        <div className="left">
            <div className="logo">
                <Logo />
              <p>
              Shop style, comfort, elegance.
              <p>
                  Address- Lagos,Nigeria
            </p> 
              </p>
              <div className="socials">
               
                  <a href="https://twitter.com/_inchperfect?s=21">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M23 2.9998C22.0424 3.67528 20.9821 4.19191 19.86 4.5298C19.2577 3.83731 18.4573 3.34649 17.567 3.12373C16.6767 2.90096 15.7395 2.957 14.8821 3.28426C14.0247 3.61151 13.2884 4.1942 12.773 4.95352C12.2575 5.71283 11.9877 6.61214 12 7.5298V8.5298C10.2426 8.57537 8.50127 8.18561 6.93101 7.39525C5.36074 6.60488 4.01032 5.43844 3 3.9998C3 3.9998 -1 12.9998 8 16.9998C5.94053 18.3978 3.48716 19.0987 1 18.9998C10 23.9998 21 18.9998 21 7.4998C20.9991 7.22126 20.9723 6.9434 20.92 6.6698C21.9406 5.6633 22.6608 4.39251 23 2.9998V2.9998Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </a>
                  <a href="https://www.instagram.com/inch__perfect/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.9997 11.3703C16.1231 12.2025 15.981 13.0525 15.5935 13.7993C15.206 14.5461 14.5929 15.1517 13.8413 15.53C13.0898 15.9082 12.2382 16.0399 11.4075 15.9062C10.5768 15.7726 9.80947 15.3804 9.21455 14.7855C8.61962 14.1905 8.22744 13.4232 8.09377 12.5925C7.96011 11.7619 8.09177 10.9102 8.47003 10.1587C8.84829 9.40716 9.45389 8.79404 10.2007 8.40654C10.9475 8.01904 11.7975 7.87689 12.6297 8.0003C13.4786 8.12619 14.2646 8.52176 14.8714 9.12861C15.4782 9.73545 15.8738 10.5214 15.9997 11.3703Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 6.5H17.51" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  </a>
                
              </div>
            </div>
        </div>
        <div className="links">
             
             <div class='Links'>
             <div className="left_links">
                     <Link to='/'>Home</Link>
                     <a href='#'>About us</a>
                     <Link to='/products'>The store</Link>
                 </div>
             <div className="right_links">
                     <Link to='contact-us'>Contact us<span>{arrow}</span></Link>
                     <Link to='/auth'>LOGIN <span>{arrow}</span></Link>
                     <Link to='/auth'>Create an account <span>{arrow}</span></Link>
                 </div>

             </div>
        </div>
    </div>
    )
}