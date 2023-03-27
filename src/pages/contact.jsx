import React from "react";

export const Contact = () => {
  return(
    <>
      <div id="contact">
  <div class="container">
    <div class="row">
      <div class="contact-left">
        <h1 class="sub-title">Contact Me</h1>
        <p><i class="fa-regular fa-envelope"></i>elvispilani@gmail.com</p>
        <p><i class="fa-solid fa-phone"></i>9001287700</p>
        <div class="social-icons">
          <a href="https://www.instagram.com/_.arhaan_.official/"><i class="fa-brands fa-square-instagram"></i></a>
          <a href="https://www.linkedin.com/in/arhaan-khan-b3a247233/"><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://www.youtube.com/channel/UC9wIoig4sQ4GVsuHqzLxHCA"><i class="fa-brands fa-youtube"></i></a>
        </div>
        <a href="images/ARHAAN's RESUME.pdf" download class="btn btn2">Download CV</a>
      </div>
      <div class="contact-right">
        <form name="submit-to-google-sheet">
          <input type="text" name="Name" placeholder="Your Name" required/>
          <input type="email" name="Email" placeholder="Your Email" required/>
          <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
          <button type="submit" class="btn btn2">Submit</button>
        </form>
        <span id="msg"> </span>
      </div>
    </div>
  </div>
<div class="copyright">
<p>Copyright <i class="fa-regular fa-copyright"></i> Arhaan Khan</p>
</div>
</div>
  </>
  )
};
