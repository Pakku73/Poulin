import Image from "next/image";
import Link from "next/link";
// import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="flex fixed w-full justify-center z-30 p-10">
        <div className="flex justify-around items-center font-CoreRinho65 text-2xl w-full p-2 bg-white rounded-xl shadow-md">
            
            <Link href="/">
              <Image className="shadow-none"
                src="/assets/images/logos/Logo-PépinièresPoullain.png"
                alt=""
                width={150}
                height={0}
              />
            </Link>

            <Link href="Nos-plantes">Nos plantes</Link>
            <div className="flex flex-col relative">
              <div className="flex gap-2">
                <p className="cursor-default">La pépinière</p>
                <div className="flex items-center">
                  <Image src="/assets/images/icons/drop-down-arrow.png" alt="" width={10} height={0}/>
                </div>
              </div>

              <div className="absolute justify-center items-center mt-20 bg-white p-5 gap-5 w-96 rounded-xl hidden"> {/* flex flex-col  */}
                <Link href="/">Qui sommes nous ?</Link>
                <Link href="Nos-plantes">Nos engagements</Link>
              </div>
            </div>
            <Link href="Nos-plantes">Contactez-nous</Link>
            {/* <Button>Commander</Button> */}
            <button className="uppercase bg-RoseRed text-white p-2 rounded-lg transition ease-in-out duration-300 hover:bg-NewGrey">Commander en ligne</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;