import { useRef,useState,useEffect } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./Header.css"

const Header = () => {

  const text = "resume.exe";
  const [displayText, setDisplayText] = useState("");
  const [isHover, setIsHover] = useState(false);

  const headerSideNavbarRef = useRef(null);
  const headerSideNavbarItemsRef = useRef(null);

  const textRef = useRef(null);

  const nameRef = useRef(null);
  
  const desc1Ref = useRef(null);
  const desc2Ref = useRef(null);
  
  const jobRef = useRef(null);

  const words = [
    "CREATIVE DEVELOPER",
    "DATA ENGINEER",
    "FRONTEND DEVELOPER"
  ];

  const tl1 = useRef(null)

  const handleOpen = () =>{
    tl1.current.play();
  }

  const handleClose = () =>{
    tl1.current.reverse();
  }

  const handleNavClick = (e,sid) =>{
    e.preventDefault();

    let sid_lc = sid.toLowerCase();
    
    const sectionId = document.querySelector(`#${sid_lc}`);

    sectionId.scrollIntoView({
        behavior: "smooth"
    });

    window.history.replaceState(null,null,`${sid}`);
  }

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}Zubair_A-Resume.pdf`;
    link.download = "Zubair_A_Resume.pdf";
    link.click();
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
        setDisplayText((prev) => {

            if (isHover && prev.length < text.length) {
                return text.slice(0, prev.length + 1);
            }

            if (!isHover && prev.length > 0) {
                return prev.slice(0, -1);
            }

            return prev;

        });

    }, isHover ? 80 : 50);

    return () => clearInterval(interval);

  }, [isHover]);


  useEffect(()=>{
        const sections = ["Home","About","ProjectsHeader","Projects","Experiences","Contact"]

        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    let text = entry.target.id
                    let capId = text.charAt(0).toUpperCase() + text.slice(1);

                    console.log(text);
                    console.log(capId);

                    if (capId === "Projectsheader" || capId === "Projects") {
                      window.history.replaceState(null, null, "Projects");
                    } else {
                      window.history.replaceState(null, null, `${capId}`);
                    }

                }
            });

        },{ threshold : 0.6 });

        sections.forEach((id)=>{
            const id_lc = id.toLowerCase();
            const section = document.querySelector(`#${id_lc}`);

            if(section){
                observer.observe(section);
            }
        });
        return () =>{
            observer.disconnect();
        }

    },[]);

  useGSAP(()=>{

    document.body.style.overflow = "hidden";

    const moveText = (e)=>{

      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;

      gsap.to(nameRef.current,{
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.8
      });

      gsap.to(desc1Ref.current,{
        x:x,
        y:y,
        duration:1
      });

      gsap.to(desc2Ref.current,{
        x:-x,
        y:-y,
        duration:1
      });

      gsap.to(jobRef.current,{
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.8
      });

    };

    window.addEventListener("mousemove",moveText);

    const ctx = gsap.context(()=>{

      tl1.current = gsap.timeline({paused: true});

      tl1.current.to(headerSideNavbarRef.current,{
        right:0,
        duration: 0.8,
      })

      tl1.current.fromTo(".headerSideNavbarItems a",{
        x:80,
        opacity:0,
      },{
        x:0,
        opacity:1,
        duration: 0.1,
        stagger:0.3
      })

      tl1.current.from(".headerSideNavbarClose",{
        x:50,
        opacity:0,
        duration:0.3,
        delay: 0.2
      });

      const tl3 = gsap.timeline({ 
        paused: true,
        repeat: -1 ,
      }); 

      const tl2 = gsap.timeline();

      tl2.from(".header",{
        y: 900,
        duration: 0.8,
        borderRadius: 1000,
        delay:0.5
      })

      .from(".headerContent1BigText",{
        y: -30,
        duration: 0.8,
        opacity: 0
      })

      .from(".headerContent2BigText",{
        y: 30,
        duration: 0.8,
        opacity: 0
      })
      
      .from(".headerContent1SmallText",{
        x: 30,
        duration: 0.5,
        opacity: 0
      })

      .from(".headerContent2SmallText",{
        x: -30,
        duration: 0.5,
        opacity: 0
      })

      .from(".logo",{
        x: -10,
        duration: 1,
        delay:0.1,
        opacity: 0
      },"navAnimate")

      .from(".collapseNav",{
        x: 10,
        duration: 1,
        delay:0.1,
        opacity: 0,
        onComplete:()=>{
          document.body.style.overflow = "auto";
          tl3.play();
        }
      },"navAnimate")

      .from(".resumeIcon",{
        x: 10,
        duration: 1,
        delay:0.1,
        opacity: 0,
      },"navAnimate")

      .from(".resume",{
        y: -10,
        duration: 1,
        opacity: 0,
      },"navAnimate")
     
      .from(".seeMyWork",{
        y: -10,
        opacity: 0,
        duration: 1,
        repeat:-1,
        yoyo: true
      },"seeMyWorkAnimate")
      
      .from(".downLine",{
        y: -10,
        opacity: 0,
        duration: 1,
        repeat:-1,
        yoyo: true,
      },"seeMyWorkAnimate")

      tl3.to({},{
        delay:1,
        // duration: words[words.length-1].length * 0.085,
        duration:2,
        onUpdate:function(){

          const word = words[words.length-1];
          const progress = Math.floor((1-this.progress())*word.length);

          textRef.current.textContent = word.substring(0,Math.max(progress,1));

        }
      });

      words.forEach((word,i)=>{

        // TYPE

        tl3.to({},{
          // duration: word.length * 0.085,
          duration:2,
          onUpdate:function(){

            const progress = Math.floor(this.progress()*word.length);
            textRef.current.textContent = word.substring(0,Math.max(progress,1));

          }
        })

        // PAUSE

        .to({},{
          duration:3
        });

        // ERASE (skip last word)

        if(i !== words.length-1){

          tl3.to({},{
            // duration: word.length * 0.085,
            duration:2,
            onUpdate:function(){

              const progress = Math.floor((1-this.progress())*word.length);
              textRef.current.textContent = word.substring(0,Math.max(progress,1));

            }
          });

        }

      });


    });


    return ()=>{
      document.body.style.overflow = "auto";
      window.removeEventListener("mousemove", moveText);
      ctx.revert();
    } 

  },[])
          
  return (
    <>
          

        <div className="header" id="home">


          <nav className="headerNav">

            <div className="logo">
              <img src={`${import.meta.env.BASE_URL}logoImg.jpg`} alt="logoImg" className="logoImg"/>
            </div>

            <div className="collapseNav" 
            onClick={handleOpen}
            >
              <i class="ri-menu-3-line"></i>
  
            </div>

            <a href="/Zubair_A-Resume.pdf" download="Zubair_A_Resume.pdf" className="resumeIcon">
              &gt; resume.exe <span className="cursorResume"> _</span>
            </a>

          </nav>

          <div className="headerContainer">

            <div className="headerContent">

              <div className="headerContent1">

                <div className="headerContent1BigText" 
                ref={nameRef}
                >
                  I'm Zubair
                </div>

                <div className="headerContent1SmallText" ref={desc1Ref}>
                  I build modern web experiences using HTML, CSS, JavaScript and React. Focused on smooth UI, animations and responsive design.
                </div>
                
              </div>

              <div className="headerContent2">

                <div className="headerContent2SmallText" ref={desc2Ref}>
                  Passionate about front-end development and data engineering. I create interactive interfaces and scalable solutions using modern technologies.
                </div>

                <div className="headerContent2BigText" ref={jobRef}>
                  <span ref={textRef}>FrontEnd Developer</span>
                </div>

              </div>

            </div>
          </div>

          <div className="headerFooter">

            <div className="headerFooterContainer">

              <div className="seeMyWork">
                See My Work
              </div>

              <div className="downLine">
                |
              </div>

            </div>

          </div>

          <div className="headerSideNavbar" 
          ref={headerSideNavbarRef}
          >

            <div className="headerSideNavbarItems" ref={headerSideNavbarItemsRef}>

              <a 
              onClick={(e)=> handleNavClick(e,"About")}>About</a>

              <a 
              onClick={(e)=> handleNavClick(e,"projectsHeader")}>Projects</a>

              <a 
              onClick={(e)=> handleNavClick(e,"Experiences")}>Experience</a>

              <a 
              onClick={(e)=> handleNavClick(e,"Contact")}>Contact</a>
            
            </div>

            <div className="headerSideNavbarClose" onClick={handleClose}>
              <i class="ri-close-line"></i>
            </div>

          </div>

        </div>

        <div className="resume">

          <div
            className="resumeContainer"
            onClick={handleDownload}
          >

            <div className="resumeBtn"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            >
              &gt; {displayText}
              <span className="cursorResumeBtn">_</span>
            </div>

          </div>

        </div>

    </>
  )
}

export default Header
