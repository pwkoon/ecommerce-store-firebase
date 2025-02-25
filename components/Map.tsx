import React from "react";

function Map() {
  return (
    <div className="mb-3 w-full h-[400px] flex justify-center items-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d970.9308770420332!2d101.1517588!3d3.5313748!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc909ca3eb2721%3A0x44c4d78157b57be1!2s45400%20Sekinchan%2C%20Selangor%2C%20Malaysia!5e1!3m2!1sen!2ssg!4v1739728376307!5m2!1sen!2ssg"
        className="border-none w-full h-full"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
