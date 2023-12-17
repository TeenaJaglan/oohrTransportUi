import { Link } from "react-router-dom";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoYoutube,
} from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex  mt-[2rem] bg-gray-300 justify-center    bottom-0   w-full flex-wrap">
      <div className="flex flex-col my-4 mx-5">
        <p className="font-semibold text-2xl text-orange-600 sm:text-left text-center">
          About
        </p>
        <p className="w-[95%] text-justify sm:w-[600px] text-black text-lg">
          MyOohr is a user-friendly application that provides a complete digital
          solution for parents concerning their kid & apos ;s schooling. an
          app-based platform for parents, by which they can easily online
          interact with school management and school transport system. The
          parent has to download the app from the play store, connect it with
          the school web platform and also connect with it to the school commute
          driver app. Basically, it provides online platforms for those schools
          that are not able to own their app and websites. also, provide an
          online platform to those school transport who do not have an online
          tracking system.
        </p>
      </div>
      <div className="flex flex-col my-4 mx-5">
        <p className="font-semibold text-2xl text-orange-600 my-4 sm:text-left text-center">
          Quick Menu
        </p>
        <ul className="flex flex-col text-[#3d63b0] font-semibold text-xl cursor-pointer sm:text-left text-center">
          <li className="my-1 hover:text-[#eb9047]">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="my-1 hover:text-[#eb9047]">
            <Link href={"/parent"}>Parent</Link>
          </li>
          <li className="my-1 hover:text-[#eb9047]">
            <Link href={"/driver"}>Driver</Link>
          </li>
          <li className="my-1 hover:text-[#eb9047]">
            <Link href={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col my-4 mx-5">
        <p className="font-semibold text-2xl text-orange-600 my-4 sm:text-left text-center">
          Company Policy
        </p>
        <ul className="flex flex-col text-[#3d63b0] font-semibold text-xl cursor-pointer sm:text-left text-center">
          <li className="my-1 hover:text-[#eb9047]">
            <Link href={"/privacy-policy"}>Privacy Policy</Link>
          </li>
          <li className="my-1 hover:text-[#eb9047]">
            <Link href={"/terms-and-conditions"}>Terms and Conditions</Link>
          </li>
          <li className="my-1 hover:text-[#eb9047]">
            <Link href={"/refund-policy"}>Refund Policy</Link>
          </li>
        </ul>
        <p className="font-semibold text-2xl text-orange-600 my-4 sm:text-left text-center">
          Social
        </p>
        <ul className="flex text-[#3d63b0] font-semibold text-xl cursor-pointer">
          <li className="mx-1">
            <Link href={"https://www.facebook.com/oohrinnovations"}>
              <BiLogoFacebook size={25} />
            </Link>
          </li>
          <li className="mx-1">
            <Link href={"https://twitter.com/oohrinnovations"}>
              <BiLogoTwitter size={25} />
            </Link>
          </li>
          <li className="mx-1">
            <Link href={"https://www.youtube.com/@oohrinnovations"}>
              <BiLogoYoutube size={25} />
            </Link>
          </li>
          <li className="mx-1">
            <Link href={"https://www.instagram.com/oohrinnovations"}>
              <BiLogoInstagram size={25} />
            </Link>
          </li>
          <li className="mx-1">
            <Link href={"https://www.aedin.com/company/oohrinnovations/"}>
              <BsLinkedin size={25} />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
