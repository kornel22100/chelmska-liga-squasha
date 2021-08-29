// DONE
import React from "react";

import classes from "./Footer.module.css";
import { MdPhoneAndroid, MdMail } from "react-icons/md";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.contact}>
          <MdPhoneAndroid size={30} />
          <a className={classes.phone} href="tel:601 990 448">
            601 990 448
          </a>
          <MdMail size={30} />
          <a className={classes.email} href="mailto:chelmskaligasquasha@gmail.com">
            chelmskaligasquasha@gmail.com
          </a>
        </div>
        <div className={classes.socials}>
          <div className={classes.facebook}>
            <a href="https://www.facebook.com/groups/882935985241480" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </div>
          <div className={classes.youtube}>
            <a href="https://www.youtube.com/channel/UCO6zujSZHWj60rw5X8sZKeA/videos" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className={classes.line}></div>
        <div className={classes.info}>&copy; 2020 Kornel Kołodziejczyk</div>
        <div className={classes.regulations}>Regulamin</div>
      </div>
    </div>
  );
};

export default Footer;
