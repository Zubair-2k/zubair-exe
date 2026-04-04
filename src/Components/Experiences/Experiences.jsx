import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Experiences.css"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Experiences = () => {
    const [lines, setLines] = useState([]);

    const [minimize, setMinimize] = useState(false);
    const [fullScreen, setFullScreen] = useState(false);

    const experienceRef = useRef(null);
    const skillsContainerRef = useRef(null);

    const marqueeRef = useRef(null);
    
    const handleClear = () =>{
        setLines([]);
    }

    const handleMinimize = () =>{
        setMinimize(true)
        setFullScreen(false)
    }

    const handleFullScreen = () =>{
        setFullScreen(true)
        setMinimize(false)
    }

    useGSAP(()=>{

        gsap.set(skillsContainerRef.current, { xPercent: 5 });

        marqueeRef.current = gsap.to(skillsContainerRef.current, {
            xPercent: -100,
            duration: 15,
            ease: "none",
            repeat: -1
        });

        const tl1 = gsap.timeline({
            scrollTrigger:{
                trigger: experienceRef.current,
                start: "top 30%",
                toggleActions: "play none none none",
            }
        })

        tl1.from(".terminalContainer",{
            yPercent: 10,
            opacity: 0,
            duration:0.7
        })

        tl1.from(".expTagArrow",{
            xPercent: 10,
            opacity: 0,
            duration:0.6
        })

        tl1.from(".expTagHead",{
            yPercent: -10,
            opacity: 0,
            duration:0.5
        })

        tl1.from(".expTagSubHead",{
            yPercent: -5,
            opacity: 0,
            duration:0.5
        })

        tl1.from(".skillsTagArrow",{
            yPercent: 10,
            opacity: 0,
            duration:0.6
        })

        tl1.from(".skillTagText",{
            yPercent: 5,
            opacity: 0,
            duration:0.5
        })

    },[])

    const handleCommand = (cmd) => {
        console.log(cmd)
        if (cmd === "expList") {
            setLines((prev) => [
                ...prev,
                { type: "command", content: "> experience --list" },

                { type: "list", items: [
                "1. Frontend Developer + Data Engineer @ Tringapps Inc.",
                "2024 — 2025 [COMPLETED]",
                "2. Freelance Frontend Developer (Self-Employed)",
                "2025 — Present [ACTIVE]"
                ]},

                { type: "spacer" },
            ]);
        }

        if (cmd === "exp1") {
            setLines((prev) => [
                ...prev,
                { type: "command", content: "> experience 1" },

                { type: "info", label: "Role", value: "Frontend Developer + Data Engineer" },
                { type: "info", label: "Company", value: "Tringapps Inc." },
                { type: "info", label: "Duration", value: "2024 — 2025" },
                { type: "info", label: "Status", value: "COMPLETED" },

                { type: "spacer" },

                { type: "section", title: "[Frontend]" },
                { type: "list", items: [
                "Built interactive UI using React and GSAP",
                "Developed responsive components"
                ]},


                { type: "section", title: "[Data Engineering]" },
                { type: "list", items: [
                "Worked on data handling and processing",
                "Optimized workflows"
                ]},

                { type: "spacer" },
            ]);
        }

        if (cmd === "exp2") {
            setLines((prev) => [
                ...prev,
                { type: "command", content: "> experience 2" },

                { type: "info", label: "Role", value: "Frontend Developer (Freelance)" },
                { type: "info", label: "Type", value: "Self-Employed" },
                { type: "info", label: "Duration", value: "2025 — Present" },
                { type: "info", label: "Status", value: "ACTIVE" },

                { type: "spacer" },

                { type: "list", items: [
                "Building modern web interfaces",
                "Creating animation-driven UI",
                "Working with client requirements"
                ]},

                { type: "spacer" },
            ]);
        }

        if (cmd === "availability") {
            setLines((prev) => [
            ...prev,
            { type: "command", content: "> availability" },

            { type: "info", label: "Full-time", value: "Open to job opportunities" },
            { type: "info", label: "Freelance", value: "Available for freelance and business collaborations" },

            { type: "spacer" },
        ]);
        }

        if (cmd === "clear") {
            setLines([]);
        }
    }

  return (
    <>
    <div className="experiences" ref={experienceRef} id="experiences">

        <div className="skills">

            <div className="skillsAnimationContainer" ref={skillsContainerRef}>
                 
                 <div className="skillsAnimationContent" title="HTML">

                    <div className="skillImgContainer">
                        <img src={`${import.meta.env.BASE_URL}HTML_Logo.webp`} alt="HTML_Logo" className="skillImg htmlImg" 
                        onMouseEnter={() => marqueeRef.current.pause()}
                        onMouseLeave={() => marqueeRef.current.resume()}/>
                    </div>

                 </div>

                 <div className="skillsAnimationContent" title="CSS">

                    <div className="skillImgContainer">
                        <img src={`${import.meta.env.BASE_URL}CSS_Logo.png`} alt="CSS_Logo" className="skillImg cssImg"
                        onMouseEnter={() => marqueeRef.current.pause()}
                        onMouseLeave={() => marqueeRef.current.resume()}/>
                    </div>

                 </div>

                 <div className="skillsAnimationContent" title="JavaScript">

                    <div className="skillImgContainer">
                        <img src={`${import.meta.env.BASE_URL}JS_logo.webp`} alt="JS_Logo" className="skillImg jsImg"
                        onMouseEnter={() => marqueeRef.current.pause()}
                        onMouseLeave={() => marqueeRef.current.resume()}/>
                    </div>

                 </div>

                 <div className="skillsAnimationContent" title="React">

                    <div className="skillImgContainer">
                        <img src={`${import.meta.env.BASE_URL}ReactJS_Logo.webp`} alt="ReactJS_Logo" className="skillImg reactImg"
                        onMouseEnter={() => marqueeRef.current.pause()}
                        onMouseLeave={() => marqueeRef.current.resume()}/>
                    </div>

                 </div>

                 <div className="skillsAnimationContent" title="Node JS">

                    <div className="skillImgContainer">
                        <img src={`${import.meta.env.BASE_URL}NodeJs_Logo.webp`} alt="NodeJS_Logo" className="skillImg nodeImg"
                        onMouseEnter={() => marqueeRef.current.pause()}
                        onMouseLeave={() => marqueeRef.current.resume()}/>
                    </div>

                 </div>

                 <div className="skillsAnimationContent" title="MongoDB">

                    <div className="skillImgContainer">
                        <img src={`${import.meta.env.BASE_URL}MongoDB_Logo.webp`} alt="MongoDB_Logo" className="skillImg mongodbImg"
                        onMouseEnter={() => marqueeRef.current.pause()}
                        onMouseLeave={() => marqueeRef.current.resume()}/>
                    </div>

                 </div>

                 <div className="skillsAnimationContent" title="GitHub">

                    <div className="skillImgContainer">
                        <img src={`${import.meta.env.BASE_URL}GitHub_Logo.png`} alt="Github_Logo" className="skillImg githubImg"
                        onMouseEnter={() => marqueeRef.current.pause()}
                        onMouseLeave={() => marqueeRef.current.resume()}/>
                    </div>

                 </div>
                 
                 <div className="skillsAnimationContent" title="Python">

                    <div className="skillImgContainer">
                        <img src={`${import.meta.env.BASE_URL}Python_Logo.webp`} alt="Python_Logo" className="skillImg pythonImg"
                        onMouseEnter={() => marqueeRef.current.pause()}
                        onMouseLeave={() => marqueeRef.current.resume()}/>
                    </div>

                 </div>

                 <div className="skillsAnimationContent" title="HTML">

                    <div className="skillImgContainer">
                        <img src={`${import.meta.env.BASE_URL}HTML_Logo.webp`} alt="HTML_Logo" className="skillImg htmlImg" 
                        onMouseEnter={() => marqueeRef.current.pause()}
  onMouseLeave={() => marqueeRef.current.resume()}/>
                    </div>

                 </div>

                 <div className="skillsAnimationContent" title="CSS">

                    <div className="skillImgContainer">
                        <img src={`${import.meta.env.BASE_URL}CSS_Logo.png`} alt="CSS_Logo" className="skillImg cssImg"
                        onMouseEnter={() => marqueeRef.current.pause()}
  onMouseLeave={() => marqueeRef.current.resume()}/>
                    </div>

                 </div>

                 <div className="skillsAnimationContent" title="JavaScript">

                    <div className="skillImgContainer">
                        <img src={`${import.meta.env.BASE_URL}JS_logo.webp`} alt="JS_Logo" className="skillImg jsImg"
                        onMouseEnter={() => marqueeRef.current.pause()}
  onMouseLeave={() => marqueeRef.current.resume()}/>
                    </div>

                 </div>

                 <div className="skillsAnimationContent" title="React">

                    <div className="skillImgContainer">
                        <img src={`${import.meta.env.BASE_URL}ReactJS_Logo.webp`} alt="ReactJS_Logo" className="skillImg reactImg"
                        onMouseEnter={() => marqueeRef.current.pause()}
  onMouseLeave={() => marqueeRef.current.resume()}/>
                    </div>

                 </div>

                 <div className="skillsAnimationContent" title="Node JS">

                    <div className="skillImgContainer">
                        <img src={`${import.meta.env.BASE_URL}NodeJs_Logo.webp`} alt="NodeJS_Logo" className="skillImg nodeImg"
                        onMouseEnter={() => marqueeRef.current.pause()}
  onMouseLeave={() => marqueeRef.current.resume()}/>
                    </div>

                 </div>

                 <div className="skillsAnimationContent" title="MongoDB">

                    <div className="skillImgContainer">
                        <img src={`${import.meta.env.BASE_URL}MongoDB_Logo.webp`} alt="MongoDB_Logo" className="skillImg mongodbImg"
                        onMouseEnter={() => marqueeRef.current.pause()}
  onMouseLeave={() => marqueeRef.current.resume()}/>
                    </div>

                 </div>

                 <div className="skillsAnimationContent" title="GitHub">

                    <div className="skillImgContainer">
                        <img src={`${import.meta.env.BASE_URL}GitHub_Logo.png`} alt="Github_Logo" className="skillImg githubImg"
                        onMouseEnter={() => marqueeRef.current.pause()}
  onMouseLeave={() => marqueeRef.current.resume()}/>
                    </div>

                 </div>
                 
                 <div className="skillsAnimationContent" title="Python">

                    <div className="skillImgContainer">
                        <img src={`${import.meta.env.BASE_URL}Python_Logo.webp`} alt="Python_Logo" className="skillImg pythonImg"
                        onMouseEnter={() => marqueeRef.current.pause()}
                        onMouseLeave={() => marqueeRef.current.resume()}/>
                    </div>

                 </div>

            </div>

            <div className="skillsTag">

                <div className="skillsTagArrow">
                    <img src={`${import.meta.env.BASE_URL}rightDownAboutIcon.png`} alt="topSkillIcon" className="skillsTagArrowIcon" />
                </div>

                <div className="skillTagText">
                    My Skills
                </div>
            </div>

        </div>

        <div className="terminal">

            <div className={`terminalContainer ${minimize ? "minimize" : ""} ${fullScreen ? "fullWidth" : ""}`}>
                
                <div className="terminalHeader">

                    <div className="terminalBtnContainer">
                        <div className="terminalBtn redBtn" onClick={handleClear}>
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                        <div className="terminalBtn orangeBtn" onClick={handleMinimize}>
                            <div className="minimizeIcon"></div>
                        </div>
                        <div className="terminalBtn greenBtn" onClick={handleFullScreen}>
                            <i class="ri-fullscreen-line"></i>
                        </div>
                    </div>

                    <div className="terminalHeading">
                        experiences._sh
                    </div>

                </div>

                <div className="terminalContent">
                    {lines.map((line, index) => {
                        if (!line) return null;

                        if (line.type === "command") {

                            return <div key={index} className="commandText">{line.content}</div>;

                        }

                        if (line.type === "info") {

                            return (

                                <div key={index} className="infoContainer">
                                    <span className="labelText">{line.label} :</span>
                                    <span className="valueText"> {line.value}</span>
                                </div>

                            );

                        }

                        if (line.type === "section") {

                            return <div key={index} className="sectionText">{line.title}</div>;

                        }

                        if (line.type === "list") {

                            return line.items.map((item, i) => (
                                <div key={`${index}-${i}`} className="listItem">- {item}</div>
                            ));

                        }

                        if (line.type === "spacer") {

                            return <br key={index} />;

                        }

                        return null;
                    })}

                    <div className="commandsList">
                        <div className="commandContent" onClick={() => handleCommand("expList")}>
                            &gt; experience --list
                        </div>
                        <div className="commandContent" onClick={() => handleCommand("exp1")}>
                            &gt; experience 1
                        </div>
                        <div className="commandContent" onClick={() => handleCommand("exp2")}>
                            &gt; experience 2
                        </div>
                        <div className="commandContent" onClick={() => handleCommand("availability")}>
                            &gt; availability
                        </div>
                        <div className="commandContent" onClick={() => handleCommand("clear")}>
                            &gt; cls
                        </div>
                    </div>

                    <div className="cursorCommand">&gt; _</div>
                    
                </div>

            </div>

            <div className="experiencesTag">

                <div className="expTagArrow">
                    <img src={`${import.meta.env.BASE_URL}rightDownExpIcon.png`} alt="rightExpIcon" className="expTagArrowIcon" />
                </div>

                <div className="expTagText">

                    <div className="expTagHead">
                        My Experiences
                    </div>

                    <div className="expTagSubHead">
                        Click the commands to know the details
                    </div>
                </div>
            </div>

        </div>

        {/* <div className="terminal">
            <div className="terminal-header">
                <span></span><span></span><span></span>
            </div>

            <div className="terminal-body">
                {lines.map((line, index) => (
                    <p key={index} className="line">{line}</p>
                ))}

                {showCommands && (
                    <div className="commands">
                        <p onClick={() => handleCommand("expList")}>
                        &gt; experience --list
                        </p>
                        <p onClick={() => handleCommand("exp1")}>
                        &gt; experience 1
                        </p>
                        <p onClick={() => handleCommand("exp2")}>
                        &gt; experience 2
                        </p>
                        <p onClick={() => handleCommand("availability")}>
                        &gt; availability
                        </p>
                        <p onClick={() => handleCommand("clear")}>
                        &gt; cls
                        </p>
                    </div>
                )}

                <p className="cursorCommand">&gt; _</p>

            </div>
        </div> */}
    </div>
    </>
  )
}

export default Experiences