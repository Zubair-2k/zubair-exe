import { useGSAP } from "@gsap/react";
import "./About.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const aboutRef = useRef(null);

    useGSAP(()=>{

        const ctx = gsap.context(()=>{

            const tl2 = gsap.timeline({
                scrollTrigger:{
                    trigger: aboutRef.current,
                    start: "top 50%",
                    toggleActions: "play none none none",
                }
            });

            tl2.from(".welcomeText",{
                yPercent: -20,
                opacity: 0,
                duration: 0.4
            },"aboutImgAnimate")

            .from(".introText",{
                yPercent: -10,
                opacity: 0,
                duration: 0.4
            })

            .from(".aboutName",{
                opacity: 0,
                duration: 0.2
            })

            .from(".aboutContent2 .aboutDesc",{
                xPercent: -10,
                opacity: 0,
                duration: 1,
                stagger:0.3
            })

            .from(".downAboutIcon",{
                yPercent: 10,
                opacity: 0,
                duration: 0.3
            })

            .from(".aboutMeText",{
                yPercent: 5,
                opacity: 0,
                duration: 0.2
            })

            .from(".aboutMeImgContainer",{
                opacity: 0,
                duration: 1.5
            },"aboutImgAnimate")


        }, aboutRef);


        return ()=>{
            ctx.revert();
        } 

    },[])

  return (
    <>
        <div className="about" ref={aboutRef} id="about">

            <div className="aboutContainer">

                <div className="aboutContent">
                    <div className="aboutContent1">
                        <div className="welcomeText">Vanakkam,</div>
                        <div className="introText">I am <span className="aboutName">Zubair</span></div>
                    </div>

                    <div className="aboutContent2">

                        <div className="aboutMeHead">

                            <div className="aboutMeText">
                                About Me
                            </div>

                            <div className="downAboutIcon">
                                <img src="/rightDownAboutIcon.png" alt="rightDownAboutIcon" className="rightDownAboutIcon"/>
                            </div>
                            
                        </div>

                        <div className="aboutDesc">
                            Greetings, ladies and gentlemen. Allow me to introduce myself.
                        </div>

                        <div className="aboutDesc">
                            I am a passionate web developer and data enthusiast who enjoys building clean, interactive, and modern digital experiences. From designing smooth animations to developing structured web applications, I love turning ideas into functional and visually appealing products.
                            I also have experience working with AWS cloud data migration and data correction, where I handled complex datasets and helped maintain reliable data systems.
                        </div>

                        <div className="aboutDesc">
                            Currently, I'm focused on building creative web projects, improving my development skills, and growing my own web development venture.
                        </div>
                        
                    </div>

                </div>

                <div className="aboutMeImgContainer">
                    <img src="/SketchImg-bgremoved-copy-5.webp" alt="About-Img" className='aboutMeImg'/>
                </div>
            </div>

        </div>
    </>
  )
}

export default About