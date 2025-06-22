import React from 'react';
import { getImageUrl } from "../../../utils";
//

export const Hero = () => {
  return (
  <section>
    <div>
        <h1>Hi,I'm Jhalak</h1>
        <p>a 2nd-year B.Tech student at MNNIT Allahabad, specializing in Electronics Engineering. I'm passionate about combining creativity with technology—currently exploring graphic design and diving into web development 

        </p>
        <a href="mailto:jhalak.20244086@mnnit.ac.in">Contact Me</a>
    </div>
    <img src= {getImageUrl("hero/heroImage.png")}alt="hero image of me" />
    
  </section>
  );

};
