import CTAButton from "./ctaButton_comp";
import Logo from "./logo_comp";
import NavbarLinks from "./navBarLinks_comp";

export default function Navbar() {
  return (
    <div className="max-w-6xl hidden lg:flex justify-between items-center mx-auto">
      <div className="w-1/3">
        <Logo />
      </div>
      <div className="w-1/3">
        <NavbarLinks />
      </div>
      <div className="w-1/3 flex justify-end">
        <CTAButton text={"Book Now"} action={() => {}} />
      </div>
    </div>
  );
}
