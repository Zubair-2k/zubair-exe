import "./ProjectsHeader.css"
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsHeader = () => {

    const projectsHeaderRef = useRef(null)

    useLayoutEffect(()=>{
        const ctx = gsap.context(()=>{

        gsap.to(".projectsHeaderText",{
            xPercent: -53,
            scrollTrigger: {
                trigger: projectsHeaderRef.current,
                start: "top top",
                end: "+=150%",
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                pinType: "transform"
            }
        })

        },projectsHeaderRef)

        return ()=> ctx.revert()

    },[]);

  return (
    <>
        <div className="projectsHeader" ref={projectsHeaderRef} id="projectsheader">
            <div className="projectsHeaderText">Projects</div>
        </div>
    </>
  )
}

export default ProjectsHeader