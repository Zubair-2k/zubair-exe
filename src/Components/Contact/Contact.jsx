import "./Contact.css"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const contactRef = useRef(null);

    const [emailStatus, setEmailStatus] = useState("");
    const [message, setMessage] = useState({name:"",email:"",feedback:""});

    const formId = import.meta.env.VITE_REACT_APP_FORM_ID;

    console.log(formId);

    const handleFormChange = (e)=>{

        let {name,value} = e.target
        setMessage({...message,[name]:value})

        if (name === "email") {
            const email = value.trim();

            if (!email) {
                setEmailStatus("");
                return;
            }

            const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

            if (!isValid) {
                setEmailStatus("Please enter a valid email address");
            } else {
                setEmailStatus("");
            }
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (message.name === "" || message.email === "" || message.feedback === "") return;

        const email = message.email.trim();

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email");
            return;
        }

        const formData = new FormData(e.target);
        formData.set("email", email.toLowerCase());

        const response = await fetch(`https://formspree.io/f/${formId}`, {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            alert("Message sent successfully!");
            setMessage({ name: "", email: "", feedback: "" });
            e.target.reset();
        } else {
            alert("Oops! There was a problem.");
        }
    };

    useGSAP(()=>{

        const ctx = gsap.context(()=>{

            const tl1 = gsap.timeline({
                scrollTrigger:{
                    trigger: contactRef.current,
                    start: "top 30%",
                    toggleActions: "play none none none",
                }
            });

            tl1.from(".ContactPageBgImg",{
                opacity: 0,
                duration: 0.4
            })

            .from(".getInTouchHeading",{
                yPercent: -20,
                opacity: 0,
                duration: 0.4
            })

            .from(".getInTouchDesc",{
                yPercent: -10,
                opacity: 0,
                duration: 0.4
            })

            .from(".getInTouchContent",{
                xPercent: -5,
                opacity: 0,
                duration: 0.4,
                stagger:0.3
            })

            .from(".contactFormContainer",{
                xPercent: 10,
                opacity: 0,
                duration: 0.4,
            })

            .from(".contactFormContent",{
                yPercent: 5,
                opacity: 0,
                duration: 0.4,
                stagger: 0.3
            })

            .from(".submitBtn",{
                yPercent: -5,
                opacity: 0,
                duration: 0.4,
            })

        }, contactRef);


        return ()=>{
            ctx.revert();
        } 

    },[])
  return (
    <>
        <div className="contact" ref={contactRef} id="contact">

            <div className="contactPageBg">
                <img src="/ContactPageBgImg_4.png" alt="ContactPageBgImg" className="ContactPageBgImg"/>
            </div>

            <div className="contactPageOverlay"></div>

            <div className="contactContainer">

                <div className="getInTouch">

                    <div className="getInTouchHeader">

                        <div className="getInTouchHeading">
                            Get In Touch
                        </div>

                        <div className="getInTouchDesc">
                            Open to opportunities, collaborations, and exciting projects. Whether you're hiring or building something creative, I'd love to connect.
                        </div>

                    </div>

                    <div className="getIntouchContainer">

                        <div className="getInTouchContent">

                            <div className="getInTouchContentLeft">

                                <div className="getInTouchContentIcon">
                                    <i class="fa-regular fa-envelope"></i>
                                </div>

                                <div className="getInTouchContentContainer">

                                    <div className="getInTouchContentContainerHeading">
                                        Email
                                    </div>

                                    <div className="getInTouchContentContainerText">
                                        {/* zubair2kdeveloper@gmail.com */}
                                        cooketamil@gmail.com
                                    </div>

                                </div>

                            </div>

                            <div className="getInTouchContentRight">
                                

                                <div className="getInTouchContentApplyIcon"
                                // onClick={() => window.location.href = "mailto:cooketamil@gmail.com"}
                                onClick={() =>
                                    window.open(
                                    "https://mail.google.com/mail/?view=cm&fs=1&to=cooketamil@gmail.com",
                                    "_blank"
                                    )
                                }
                                >

                                    <i class="ri-arrow-right-up-line"></i>

                                </div>

                            </div>

                        </div>
                        <div className="getInTouchContent">

                            <div className="getInTouchContentLeft">

                                <div className="getInTouchContentIcon">
                                    <i class="fa-solid fa-phone-volume"></i>
                                </div>

                                <div className="getInTouchContentContainer">

                                    <div className="getInTouchContentContainerHeading">
                                        Call
                                    </div>

                                    <div className="getInTouchContentContainerText">
                                        8754779201
                                    </div>

                                </div>

                            </div>

                            <div className="getInTouchContentRight">


                                <div className="getInTouchContentApplyIcon"
                                onClick={()=>{
                                        navigator.clipboard.writeText("+918754779201");
                                        alert("Number is copied ...");
                                    }    
                                }>
                                    <i class="ri-arrow-right-up-line"></i>
                                </div>

                            </div>

                        </div>
                        <div className="getInTouchContent">

                            <div className="getInTouchContentLeft">

                                <div className="getInTouchContentIcon">
                                    <i class="fa-solid fa-location-dot"></i>
                                </div>

                                <div className="getInTouchContentContainer">

                                    <div className="getInTouchContentContainerHeading">
                                        Location
                                    </div>

                                    <div className="getInTouchContentContainerText">
                                        Erode, TamilNadu
                                    </div>

                                </div>

                            </div>

                            <div className="getInTouchContentRight">

                                <a href="https://maps.app.goo.gl/f8swFXQB49uXxqWb6" target="blank" className="getIntouchMap" >
                                
                                    <div className="getInTouchContentApplyIcon">
                                        <i class="ri-arrow-right-up-line"></i>
                                    </div>
                                    
                                </a>


                            </div>

                        </div>
                    </div>
                </div>

                <div className="contactForm">

                    <form className="contactFormContainer" onSubmit={handleSubmit}>

                        <div className="contactName contactFormContent">
                            <input type="text" 
                            className="contactNameInput" 
                            placeholder="Name"
                            name='name'
                            value={message.name}
                            onChange={handleFormChange}
                            // autoComplete='true'
                            required/>
                        </div>

                        <div className="contactEmail contactFormContent">
                            <input type="text" 
                            className="contactEmailInput" 
                            placeholder="Email"
                            name='email' 
                            value={message.email}
                            onChange={handleFormChange}
                            // autoComplete='true' 
                            required/>  

                            {emailStatus && <p className="emailStatus">{emailStatus}</p>} 
                        </div>

                        <div className="contactMessage contactFormContent">
                            <textarea type="text" 
                            className="contactMessageInput" 
                            placeholder="Message"
                            name='feedback'
                            value={message.feedback}
                            onChange={handleFormChange}
                            required/>    
                        </div>

                        <div className="submitBtnContainer">
                            <button className="submitBtn">Submit</button>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    </>
  )
}

export default Contact