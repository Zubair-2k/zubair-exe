import "./Resume.css";
import { useState, useEffect } from "react";

const Resume = () => {
    
  const text = "resume.exe";
  const [displayText, setDisplayText] = useState("");
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
        setDisplayText((prev) => {

            // 👉 typing forward
            if (isHover && prev.length < text.length) {
                return text.slice(0, prev.length + 1);
            }

            // 👉 deleting backward
            if (!isHover && prev.length > 0) {
                return prev.slice(0, -1);
            }

            return prev; // stop when done

        });

    }, isHover ? 80 : 50); // speed changes automatically

    return () => clearInterval(interval);

}, [isHover]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Zubair_A-Resume.pdf";
    link.download = "Zubair_A_Resume.pdf";
    link.click();
  };

  return (
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
          <span className="cursor">_</span>
        </div>
      </div>
    </div>
  );
};

export default Resume;





// import "./Resume.css"

// const Resume = () => {
//   return (
//     <>
//         <div className="resume">
//             <div className="resumeContainer">
//                 <div className="resumeBtn">
//                     &gt; <span className="resumeText">resume.exe</span>_
//                 </div>
//                 {/* <div className="resumeText">
//                     &gt; resume.exe _
//                 </div> */}
//             </div>
//         </div>
//     </>
//   )
// }

// export default Resume