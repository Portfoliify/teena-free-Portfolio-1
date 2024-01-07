import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = ({ projectsRef , project1 , setProject1 , project2 , setProject2 , project3 , setProject3 , project4 , setProject4 , project5 , setProject5 , project6 , setProject6 }) => {
  gsap.registerPlugin(ScrollTrigger);
 
  const [p1 , sp1] = useState(false)
  const [p2 , sp2] = useState(false)
  const [p3 , sp3] = useState(false)
  const [p4 , sp4] = useState(false)
  const [p5 , sp5] = useState(false)
  const [p6 , sp6] = useState(false)

  useEffect(() => {
    gsap.from(".word-1", {
      xPercent: 100,
      scrollTrigger: {
        trigger: ".vertical-container",
        start: `bottom 92%`,
        end: `+=${window.innerWidth}`,
        scrub: 1,
        // markers: true,
      },
    });
    gsap.from(".word-2", {
      xPercent: -100,
      scrollTrigger: {
        trigger: ".vertical-container",
        start: `bottom 92%`,
        end: `+=${window.innerWidth}`,
        scrub: 1,
        // markers: true,
      },
    });
    gsap.to(".word-2", {
      x: (window.innerWidth * 2 * 102.5) / 100,
      ease: "linear",
      scrollTrigger: {
        trigger: ".project-2",
        start: `bottom -100%`,
        end: `+=${window.innerWidth * 3} bottom`,
        scrub: 1,
        // markers: true,
      },
    });
    gsap.to(".word-1", {
      x: (window.innerWidth * 2 * 97.5) / 100,
      ease: "linear",
      scrollTrigger: {
        trigger: ".project-2",
        start: `bottom -100%`,
        end: `+=${window.innerWidth * 3} bottom`,
        scrub: 1,
        // markers: true,
      },
    });
    gsap.to(".works-1 , .works-2", {
      x: window.innerWidth * 2,
      ease: "linear",
      scrollTrigger: {
        trigger: ".project-2",
        start: `+=${window.innerWidth * 1.54} bottom`,
        end: `+=${window.innerWidth * 2}`,
        scrub: 1,
        // markers: true,
      },
    });
    // gsap.to(".works-1 ", {
    //   y: -window.innerHeight * 4,
    //   ease: "linear",
    //   scrollTrigger: {
    //     trigger: ".project-2",
    //     start: `+=${window.innerWidth * 1.54} bottom`,
    //     end: `+=${window.innerWidth * 2}`,
    //     scrub: 1,
    //     // markers: true,
    //   },
    // });
    gsap.to(".work-pic-1 ", {
      y: -window.innerHeight * 4 - 200,
      ease: "linear",
      scrollTrigger: {
        trigger: ".project-2",
        start: `+=${window.innerWidth * 1.54} bottom`,
        end: `+=${window.innerWidth * 2}`,
        scrub: 1,
        // markers: true,
      },
    });
    gsap.to(".work-pic-2 ", {
      y: -window.innerHeight * 4 ,
      ease: "linear",
      scrollTrigger: {
        trigger: ".project-2",
        start: `+=${window.innerWidth * 1.54} bottom`,
        end: `+=${window.innerWidth * 2}`,
        scrub: 1,
        // markers: true,
      },
    });
    gsap.to(".work-pic-3 ", {
      y: -window.innerHeight * 4 - 300,
      ease: "linear",
      scrollTrigger: {
        trigger: ".project-2",
        start: `+=${window.innerWidth * 1.54} bottom`,
        end: `+=${window.innerWidth * 2}`,
        scrub: 1,
        // markers: true,
      },
    });
    // gsap.to(".works-2 ", {
    //   y: -window.innerHeight * 2,
    //   ease: "linear",
    //   scrollTrigger: {
    //     trigger: ".project-3",
    //     start: `+=${window.innerWidth * 2.04} bottom`,
    //     end: `+=${window.innerWidth}`,
    //     scrub: 1,
    //     // markers: true,
    //   },
    // });
    gsap.to(".work-pic-4 ", {
      y: -window.innerHeight * 2 - 400,
      ease: "linear",
      scrollTrigger: {
        trigger: ".project-3",
        start: `+=${window.innerWidth * 2.04} bottom`,
        end: `+=${window.innerWidth}`,
        scrub: 1,
        // markers: true,
      },
    });
    gsap.to(".work-pic-5 ", {
      y: -window.innerHeight * 2 - 200,
      ease: "linear",
      scrollTrigger: {
        trigger: ".project-3",
        start: `+=${window.innerWidth * 2.04} bottom`,
        end: `+=${window.innerWidth}`,
        scrub: 1,
        // markers: true,
      },
    });
    gsap.to(".work-pic-6 ", {
      y: -window.innerHeight * 2 ,
      ease: "linear",
      scrollTrigger: {
        trigger: ".project-3",
        start: `+=${window.innerWidth * 2.04} bottom`,
        end: `+=${window.innerWidth}`,
        scrub: 1,
        // markers: true,
      },
    });
  }, []);
  function addInput(setImageSource) {
    var fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/";
    fileInput.id = "dynamicFileInput";
    fileInput.style.display = "none";

    document.body.appendChild(fileInput);

    fileInput.addEventListener("change", function (e) {
      handleImageChange(e, setImageSource);
      document.body.removeChild(fileInput);
    });

    fileInput.click();
  }
  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      setImage(([title , psource , tempfile , templink]) => [title , psource ,file , URL.createObjectURL(file)]);
      // console.log(project2)
    }
  };
  const handleTitleChange = (e , setTitle) => {
    setTitle(([title , psource , tempfile , templink]) => [e.target.value , psource , tempfile , templink]);
  }
  const handleSourceChange = (e , setSource) => {
    setSource(([title , psource , tempfile , templink]) => [title , e.target.value , tempfile , templink]);
  }
  return (
    <div
      ref={projectsRef}
      className="h-[100vh] w-[300vw] flex justify-start items-center vertical-container  "
    >
      <div className=" bg-transparent flex justify-center items-center panel w-[100vw]  project-1  flex-col  text-container">
        <p className="text-[6vw] uppercase leading-none word-1 font-semibold text-white">
          Selected
        </p>
        <p className="text-[6vw] uppercase leading-none word-2 text-white font-thin font-serif">
          works
        </p>
      </div>
      <div className="w-[100vw] h-[100vh] panel project-2 relative text-white">
        <div className=" works-1 flex absolute top-[105vh] left-[-30vw] rounded-lg work-pic-1 flex-col gap-3 font-serif italic text-sm">
        {p1? <div className="flex flex-col"> <input type="text" value={project1[0]} onChange={(e) => handleTitleChange(e,setProject1) }/> <input type="text" value={project1[1]} onChange={(e) => handleSourceChange(e,setProject1)}/> </div> : <p className=" -translate-x-2" onClick={() => sp1(true)} >{project1[0]}</p>}
          <img
            src={project1[3]}
            onClick={() => addInput(setProject1)}
            alt="projects"
            className="project-img object-cover h-[30vh] w-[12vw] rounded-lg object-center"
          />
        </div>
        <div className=" works-1 absolute top-[110vh] left-[-80vw]  rounded-lg flex work-pic-2 flex-col gap-3 font-serif italic text-sm">
        {p2? <div className="flex flex-col"> <input type="text" value={project2[0]} onChange={(e) => handleTitleChange(e,setProject2) }/> <input type="text" value={project2[1]} onChange={(e) => handleSourceChange(e,setProject2)}/> </div> : <p className=" -translate-x-2" onClick={() => sp2(true)} >{project2[0]}</p>}
          <img
            src={project2[3]}
            onClick={() => addInput(setProject2)}
            alt="projects"
            className="project-img object-cover h-[30vh] w-[12vw] rounded-lg object-center"
          />
        </div>

        <div className=" works-1 absolute top-[165vh] left-[-55vw]  rounded-lg flex work-pic-3 flex-col gap-3 font-serif italic text-sm">
        {p3? <div className="flex flex-col"> <input type="text" value={project3[0]} onChange={(e) => handleTitleChange(e,setProject3) }/> <input type="text" value={project3[1]} onChange={(e) => handleSourceChange(e,setProject3)}/> </div> : <p className=" -translate-x-2" onClick={() => sp3(true)} >{project3[0]}</p>}
          <img
            src={project3[3]}
            onClick={() => addInput(setProject3)}
            alt="projects"
            className="project-img object-cover h-[35vh] w-[14vw] rounded-lg object-center"
          />
        </div>
      </div>
      <div className="w-[100vw] h-[100vh] panel project-3 relative text-white">
        
        <div className=" works-2 absolute top-[115vh] left-[-130vw]  rounded-lg work-pic-4 flex-col flex gap-3 font-serif italic text-sm" >
        {p4? <div className="flex flex-col"> <input type="text" value={project4[0]} onChange={(e) => handleTitleChange(e,setProject4) }/> <input type="text" value={project4[1]} onChange={(e) => handleSourceChange(e,setProject4)}/> </div> : <p className=" -translate-x-2" onClick={() => sp4(true)} >{project4[0]}</p>}
          {" "}
          <img
            src={project4[3]}
            onClick={() => addInput(setProject4)}
            alt="projects"
            className="project-img object-cover h-[30vh] w-[12vw] rounded-lg object-center"
          />
        </div>
        <div className=" works-2 absolute top-[120vh] left-[-180vw] rounded-lg work-pic-5 flex-col flex gap-3 font-serif italic text-sm" >
        {p5? <div className="flex flex-col"> <input type="text" value={project5[0]} onChange={(e) => handleTitleChange(e,setProject5) }/> <input type="text" value={project5[1]} onChange={(e) => handleSourceChange(e,setProject5)}/> </div> : <p className=" -translate-x-2" onClick={() => sp5(true)} >{project5[0]}</p>}
          <img
            src={project5[3]}
            onClick={() => addInput(setProject5)}
            alt="projects"
            className="project-img object-cover h-[30vh] w-[12vw] rounded-lg object-center"
          />
        </div>
        <div className=" works-2 absolute top-[165vh] left-[-155vw] rounded-lg work-pic-6 flex-col flex gap-3 font-serif italic text-sm" >
        {p6? <div className="flex flex-col"> <input type="text" value={project6[0]} onChange={(e) => handleTitleChange(e,setProject6) }/> <input type="text" value={project6[1]} onChange={(e) => handleSourceChange(e,setProject6)}/> </div> : <p className=" -translate-x-2" onClick={() => sp6(true)} >{project6[0]}</p>}
          <img
            src={project6[3]}
            onClick={() => addInput(setProject6)}
            alt="projects"
            className="project-img object-cover h-[35vh] w-[14vw] rounded-lg object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
