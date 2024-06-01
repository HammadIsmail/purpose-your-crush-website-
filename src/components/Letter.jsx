import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import sendEmail from "./SendEmail";
const Letter = () => {
  const navigate = useNavigate();
  const firstDivRef = useRef(null);
  const NoBtnRef = useRef(null);
  const changeHeaderTextRef = useRef(null);
  const thirdDivRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [clickCount, setClickCount] = useState(0);

  const NoTouchHandle = () => {
    if (changeHeaderTextRef.current) {
      switch (clickCount) {
        case 0:
          changeHeaderTextRef.current.textContent = "Maan Jao Na";
          NoBtnRef.current.classList.add("relative", "bottom-16");
          break;
        case 1:
          changeHeaderTextRef.current.textContent = "Aik Dafa Moqa to do";
          changeHeaderTextRef.current.classList.remove("text-5xl");
          changeHeaderTextRef.current.classList.add("text-3xl");
          NoBtnRef.current.classList.add("relative", "bottom-16");
          break;
        case 2:
          sendEmail("Your Proposal Rejected!");
          navigate("/no");
          break;
        default:
          break;
      }
      setClickCount(clickCount + 1);
    }
  };

  const handleDragStart = (event) => {
    setStartX(event.clientX || event.touches[0].clientX);
  };

  const handleDragEnd = (ref, event) => {
    const endX = event.clientX || event.changedTouches[0].clientX;
    const deltaX = endX - startX;

    if (deltaX > 0 && ref.current) {
      ref.current.style.transition = 'transform 0.5s ease';
      ref.current.style.transform = 'translateX(200%)';
    }
  };

 

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div
          ref={firstDivRef}
          draggable="true"
          onDragStart={handleDragStart}
          onDragEnd={(event) => handleDragEnd(firstDivRef, event)}
          onTouchStart={handleDragStart}
          onTouchEnd={(event) => handleDragEnd(firstDivRef, event)}
          className="absolute md:left-[27.6rem] left-5 top-[5rem] md:w-[30rem] w-[20rem] h-[30rem] bg-[#fff0f3] shadow-2xl shadow-black rounded-lg flex justify-center items-center z-10"
        >
          <button>
            <svg className="text-red-400 w-72 h-72 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
            </svg>
            <h1 className="absolute bottom-[15rem] left-16 md:left-36 text-white font-extrabold text-5xl">Name</h1>
            <span className="text-red-400 font-semibold text-2xl">Swipe &#8594;</span>
          </button>
        </div>

        {/* 3nd div */}
        <div className="mx-auto absolute md:left-[27.6rem] left-5 top-[5rem] w-[20rem] h-[30rem] md:w-[30rem] bg-[#fff0f3] shadow-2xl shadow-black rounded-lg">
          <h1 ref={changeHeaderTextRef} className="text-center pt-4 text-5xl text-red-400 font-extrabold">I Love You &#10084;</h1>
          <img className="md:h-80 mx-auto" src="proposal.png" alt="Proposal" />
          <div className="p-6 flex items-center justify-center gap-10">
            <button
              onClick={() => {
                navigate("/yes");
                sendEmail("Your Proposal Accepted! Love u too");
              }}
              className="bg-red-400 text-white font-semibold rounded-lg p-2 shadow-md shadow-red-300"
            >
              Yes
            </button>
            <button
              onClick={NoTouchHandle}
              ref={NoBtnRef}
              className="bg-red-400 text-white font-semibold rounded-lg py-2 px-3 shadow-md shadow-red-300"
            >
              No
            </button>
          </div>
        </div>

        {/* 2rd div */}
        <div
          ref={thirdDivRef}
          draggable="true"
          onDragStart={handleDragStart}
          onDragEnd={(event) => handleDragEnd(thirdDivRef, event)}
          onTouchStart={handleDragStart}
          onTouchEnd={(event) => handleDragEnd(thirdDivRef, event)}
          className="p-6 mx-auto absolute md:left-[27.6rem] left-5 top-[5rem] w-[20rem] h-[30rem] md:w-[30rem] bg-[#fff0f3] shadow-2xl shadow-black rounded-lg flex flex-col"
        >
          <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero exercitationem aliquam commodi repudiandae nam, fugiat fuga obcaecati perferendis praesentium quaerat modi. Laborum perspiciatis sapiente corporis minus repudiandae facere tempore ipsum, aut at cumque, sint, reiciendis temporibus optio culpa nisi in voluptatum tempora atque. Veritatis nulla similique nemo neque saepe voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus modi nulla sapiente distinctio at laborum numquam delectus ducimus? Adipisci quos provident similique esse cumque, voluptas rerum aspernatur hic non sapiente deserunt neque aliquid vero dolore assumenda facilis amet et? Minus expedita ab accusantium eveniet veritatis incidunt id atque! Modi, autem. Sed quos earum repellendus, laborum ducimus unde delectus </p>
          <div className="p-6 flex items-center justify-center">
            <span className="text-red-400 text-center font-semibold text-2xl">Swipe &#8594;</span>
          </div>
        </div>
      </div>
    </>
  );
};



export default Letter;
