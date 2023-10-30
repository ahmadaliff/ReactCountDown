import LogoFacebook from "../assets/footer/icon-facebook.svg";
import LogoInstagram from "../assets/footer/icon-instagram.svg";
import LogoPinterest from "../assets/footer/icon-pinterest.svg";
const Footer = ({ style }) => {
  return (
    <footer className={style.footer}>
      <img src={LogoFacebook} />
      <img src={LogoInstagram} />
      <img src={LogoPinterest} />
    </footer>
  );
};

export default Footer;
