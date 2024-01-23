import React from "react";

const page = () => {
  return (
    <div className=" -[90vw] md:w-[80vw]  flex justify-center items-center flex-col my-5 mx-auto">
      <div>
        <p className="text-2xl font-bold">Contact Us</p>
        <p className="text-xl font-semibold">Email: <a href="mailto:sinstasaver@gmail.com">instasaver@gmail.com</a></p>
        </div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdeN5hZH6g7aIY6oxvt_if04vW841tNHRPxMeh9jSf01xkFaQ/viewform?embedded=true"
        width="640"
        height="956"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default page;
