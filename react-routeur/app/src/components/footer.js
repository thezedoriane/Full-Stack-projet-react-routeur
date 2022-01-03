import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

const Footer = () => {
    const [isOpen, setOpen] = useState(false);
    return (
      <nav
        role="informations"
        aria-label="industry informations"
      >
        <div>
          <div>
            <a
              role="button"
              aria-label="link"
              aria-expanded="false"
              onClick={() => setOpen(!isOpen)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
  

          <div class='App-footer'>
            <div class='colonne1'>
              <p> <h3>PolyBook</h3> </p>
              <p><img alt="logo" src="https://github.com/thezedoriane/Full-Stack-projet-react-routeur/blob/main/react-routeur/app/src/components/Polybook.png?raw=true" width="100" height="100" /></p>
            </div>

            <div class='colonne2'>
                <p> <h3>Nous joindre :</h3></p>
              <p>42 rue rue 74000 Annecy France </p>
              <p>email : polybook@gmail.com</p>
              <p>tel : 0459678546</p>
            </div>

            <div class='colonne3'>
                <p><h3>Rejoignez nous également sur :</h3> </p>
                <p>
                  <a href="https://fr.linkedin.com/" title="linkedin" >
	                <img alt="linkedin" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png" width="25" height="25" />
                 </a>
                 <a href="https://fr.linkedin.com/"> instagramIndustry  </a>
                </p>

                <p>
                <a href="https://www.instagram.com//" title="Ceci est un lien image HTML">
	                <img alt="instagram" src="https://mybabyfly.com/wp-content/uploads/2019/03/instagram.png" width="25" height="25" />
                 </a>
                 <a href="https://www.instagram.com//"> instagramIndustry  </a>
                 </p>

                 <p>
                 <a href="https://www.facebook.com/" title="facebook">
	                <img alt="facebook" src="https://www.freepngimg.com/thumb/facebook/65431-like-icons-button-computer-facebook-logo.png" width="25" height="25" />
                 </a>
                 <a href="https://www.facebook.com/"> instagramIndustry  </a>
                 </p>
                 </div>

            </div>
          </div>
      </nav>
    );
  };
  
  export default Footer;