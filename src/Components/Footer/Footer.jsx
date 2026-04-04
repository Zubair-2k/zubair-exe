import "./Footer.css"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);

    const handleFooterNavClick = (e,sid) =>{
        e.preventDefault();

        let sid_lc = sid.toLowerCase();
        
        const sectionId = document.querySelector(`#${sid_lc}`);

        sectionId.scrollIntoView({
            behavior: "smooth"
        });

        window.history.replaceState(null,null,`${sid}`);
    }

    useGSAP(()=>{

        const ctx = gsap.context(()=>{

            const tl1 = gsap.timeline({
                scrollTrigger:{
                    trigger: footerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            });

            tl1.from(".footerLogo",{
                opacity: 0,
                yPercent: -50
            })

            tl1.from(".footerNavItem",{
                opacity: 0,
                yPercent: -20,
                stagger: 0.3
            })

            tl1.from(".footerCredit",{
                opacity: 0,
                yPercent: 50
            })


        }, footerRef);


        return ()=>{
            ctx.revert();
        } 

    },[])

  return (
    <>
        <div className="footer" ref={footerRef}>

            <div className="footerContainer">

                <div className="footerLogo">
                    <img src={`${import.meta.env.BASE_URL}logoImg.jpg`} alt="logoImg" className="footerLogoImg"/>
                </div>

                <div className="footerNavItems">

                    <a 
                    onClick={(e)=> handleFooterNavClick(e,"Home")}
                    className="footerNavItem">
                        Home
                    </a>
                    
                    <a 
                    onClick={(e)=> handleFooterNavClick(e,"About")}
                    className="footerNavItem">
                        About
                    </a>

                    <a
                    onClick={(e)=> handleFooterNavClick(e,"Projects")}
                    className="footerNavItem">
                        Projects
                    </a>

                    <a 
                    onClick={(e)=> handleFooterNavClick(e,"Experiences")}
                    className="footerNavItem">
                        Experiences
                    </a>

                    <a
                    onClick={(e)=> handleFooterNavClick(e,"Contact")}
                    className="footerNavItem">
                        Contact
                    </a>

                </div>

            </div>

            <div className="footerCredit">

                <span>
                    <i class="fa-regular fa-copyright"></i>
                </span> 2026 Zubair A. Frontend Developer & Data Engineer — Designed and Developed.
            
            </div>

        </div>
    </>
  )
}

export default Footer