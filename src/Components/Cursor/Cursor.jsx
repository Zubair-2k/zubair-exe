import { useGSAP } from "@gsap/react";
import "./Cursor.css"
import gsap from "gsap";
import { useRef } from "react";

const cursor = () => {

    const cursorRef = useRef(null);

    useGSAP(()=>{
        const ctx = gsap.context(()=>{
            const cursor = cursorRef.current;

            const handleCursor = (e) =>{
                
                gsap.set(cursor,{
                    x: e.clientX,
                    y: e.clientY
                })

                gsap.set(cursor,{
                    opacity:1
                })
                
                gsap.to(cursor,{
                    x: e.clientX,
                    y: e.clientY,
                    duration: 1,
                    ease: "power2.out"
                });

            };

            window.addEventListener("mousemove",handleCursor);

        })

        return ()=>{
            ctx.revert();
        }

    },[])
    
  return (
    <>
        <div className="cursor">
            <div className="cursorEle" ref={cursorRef}></div>
        </div>
    </>
  )
}

export default cursor