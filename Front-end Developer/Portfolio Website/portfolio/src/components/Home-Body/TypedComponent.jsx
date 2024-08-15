import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedComponent = () => {
  // Create a reference to the element where Typed.js will be applied
  const typedElement = useRef(null);

  //  useEffect(() => {
  //    // Initialize Typed.js on the reference element
  //    const typed = new Typed(typedElement.current, {
  //      //
  //      strings: [
  //        "Front-end Developer.",
  //        "Web Designer.",
  //        "Coder.",
  //        "Programmer.",
  //      ],
  //      typeSpeed: 100, // time typing is slower (in milliseconds)
  //      loop: true, // loop back to the beginning of the strings array when it reaches the end of the strings array (using the loops option)
  //    });
  //
  //    //Cleanup on unmount
  //    return () => {
  //      typed.destroy();
  //    };
  //  }, []);

  return <span className="typed-text" ref={typedElement}></span>; //className="typed-text" using App.css
};

export default TypedComponent;
