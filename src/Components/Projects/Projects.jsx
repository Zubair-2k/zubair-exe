import { useRef, useLayoutEffect } from "react"
import "./Projects.css"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const projectsContainerRef = useRef(null);
    const previewRef =useRef(null);
    const isMobile = window.innerWidth < 768;

    useLayoutEffect(() => {

        const handleMove = (e) => {
            if(isMobile) return;

            const container = projectsContainerRef.current;
            const rect = container.getBoundingClientRect();

            if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom ) {
                gsap.to(previewRef.current, {
                    opacity: 0,
                    duration: 0.2
                });
                return;
            }

            gsap.set(previewRef.current,{
                x: e.clientX - rect.left - 450,
                y: e.clientY - rect.top - 130
            });

        };

        window.addEventListener("mousemove", handleMove);

        return () => window.removeEventListener("mousemove", handleMove);

    },[]);

    useGSAP(()=>{

        if(isMobile) return;

        const ctx = gsap.context(()=>{
            
            const tl1 = gsap.timeline({
                scrollTrigger:{
                    trigger: ".projects",
                    start: "top 50%",
                    toggleActions: "play none none none",
                }
            })
            
            tl1.fromTo(".projectsContent",{
                yPercent:-20,
                opacity:0,
            },{
                yPercent:0,
                opacity:1,
                stagger:0.3,
                duration:0.35,
            })

            .fromTo(previewRef.current,{
                opacity: 0
            },{
                opacity:1
            })
            
            .from(".projectsTagArrow",{
                yPercent:20,
                opacity: 0
            })

            .from(".projectsTagText",{
                yPercent:10,
                opacity: 0
            })
        })

        return ()=>{
            ctx.revert();
        }

    },[])

    const handleMouseEnter = (img) => {

        if(isMobile) return;

        previewRef.current.querySelector("img").src = img;

        gsap.to(previewRef.current,{
            opacity:1,
            scale:1,
            duration:0.35,
            ease:"power3.out"
        })
    }

    const handleMouseLeave = () => {
        if(isMobile) return;
        
        gsap.to(previewRef.current,{
            opacity:0,
            scale:0.85,
            duration:0.25
        })
    }


    return (
    <>

        <div className="projects" id="projects">

            <div className="projectsTag">
                <div className="projectsTagText">
                    My Projects
                </div>
                <div className="projectsTagArrow">
                    <img src={`${import.meta.env.BASE_URL}White_Icon_Arrow.png`} alt="Project_Arrow_Icon" className="projectsTagArrowImg"/>
                </div>
            </div>

            <div className="projectsContainer" ref={projectsContainerRef}>

                <div className="projectPreviewContainer" ref={previewRef}>
                    <img className="projectPreview" alt="" />
                </div>

                <a className="projectsContent"
                href="https://zubair-2k.github.io/GSAP_Crimson/"
                target="blank"
                onMouseEnter={()=>handleMouseEnter(`${import.meta.env.BASE_URL}Bottle_Animation.webp`)}
                onMouseLeave={handleMouseLeave}
                >

                    <div className="projectName">
                        Crimson Parallex (Bottle Animation)
                    </div>

                    <div className="projectDescription">

                        <div className="projectDesc">Scroll FX</div>
                        <div className="projectDesc">GSAP</div>
                        <div className="projectDesc">3D Transform </div>
                    </div>

                    <div className="projectStatus">
                       [ Open ]
                    </div>
                </a>

                <a className="projectsContent"
                href="https://zubair-2k.github.io/Portfolio/"
                target="blank"
                onMouseEnter={()=>handleMouseEnter(`${import.meta.env.BASE_URL}Portfolio_V1_Website.webp`)}
                onMouseLeave={handleMouseLeave}
                >

                    <div className="projectName">
                        Portfolio Version - 1
                    </div>

                    <div className="projectDescription">
                                       
                        <div className="projectDesc">GSAP</div>
                        <div className="projectDesc">React</div>
                        <div className="projectDesc">UI Animation</div>

                    </div>

                    <div className="projectStatus">
                       [ Open ]
                    </div>

                </a>

                <a className="projectsContent"
                href="http://localhost:5176/"
                target="blank"
                onMouseEnter={()=>handleMouseEnter(`${import.meta.env.BASE_URL}Cooking_App.webp`)}
                onMouseLeave={handleMouseLeave}
                >

                    <div className="projectName">
                        Modern Pantery (Recipe App)
                    </div>

                    <div className="projectDescription">

                        <div className="projectDesc">API</div>
                        <div className="projectDesc">Responsive</div>
                        <div className="projectDesc">React</div>

                    </div>

                    <div className="projectStatus">
                        [ Open ]
                    </div>

                </a>

                <a className="projectsContent"
                href="https://zubair-2k.github.io/Spiderman_Game/"
                target="blank"
                onMouseEnter={()=>handleMouseEnter(`${import.meta.env.BASE_URL}Spiderman_Website.webp`)}
                onMouseLeave={handleMouseLeave}
                >

                    <div className="projectName">Spiderman Website</div>

                    <div className="projectDescription">
                 
                        <div className="projectDesc">Parallax</div>
                        <div className="projectDesc">React</div>
                        <div className="projectDesc">Motion UI</div>

                    </div>

                    <div className="projectStatus">
                        [ Open ]
                    </div>

                </a>

                <div className="projectsContent" 
                onMouseEnter={()=>handleMouseEnter(`${import.meta.env.BASE_URL}StreamFlix_Website.webp`)}
                onMouseLeave={handleMouseLeave}
                >

                    <div className="projectName">Stream Flix (Netflix Clone)</div>

                    <div className="projectDescription">
                                  
                        <div className="projectDesc">UI Clone</div>
                        <div className="projectDesc">TMDB API</div>
                        <div className="projectDesc">React</div>

                    </div>

                    <div className="projectStatus comingStatus">
                       [ Coming Soon ] 
                    </div>

                </div>

            </div>

        </div>
    </>
  )
}

export default Projects