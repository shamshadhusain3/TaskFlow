import React, { useEffect, useState } from 'react';

function Eye({img,bg}) {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      let deltaX = e.clientX - window.innerWidth / 2;
      let deltaY = e.clientY - window.innerHeight / 2;
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle-180);
    });
  }, []);

  return (


 

    <div  className={`w-full bg-[${bg}] h-screen overflow-hidden md:block hidden`}>
      <div data-scroll data-scroll-section data-scroll-speed='-.7' className={`relative ${img} h-full bg-center bg-cover w-full`}>
        <div className="flex justify-center gap-10 items-center absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className={`w-[15vw] h-[15vw] rounded-full bg-white flex justify-center items-center`}>
            <div className="w-2/3 h-2/3 bg-black rounded-full  relative flex justify-normal items-center ">
              <div style={{ transform: `rotate(${rotate}deg)` }} className="line w-full">
                <div className="bg-white w-10 h-10 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] rounded-full bg-white flex justify-center items-center">
            <div className="w-2/3 h-2/3 bg-black rounded-full  relative flex justify-normal items-center ">
              <div style={{ transform: `rotate(${rotate}deg)` }} className="line w-full">
                <div className="bg-white w-10 h-10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eye;