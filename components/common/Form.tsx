import Image from "next/image";
import {Button} from "./Button";

export default function Form() {
  return (
    <>
      <section className="flex flex-col justify-center items-center gap-14 p-10">
        <div className="flex flex-col bg-Baige w-full">
          <div className="flex flex-col">
            <Image
              src="/assets/images/vectors/Feuille-2.png"
              alt=""
              width={100}
              height={100}
            />
            <p className="uppercase font-CoreRinho35">CONTACTEZ-NOUS</p>
            <p className="uppercase font-CoreRinho65">
              NOUS SOMMES À VOTRE DISPOSITION !
            </p>

            <p>
              Remplissez ce formulaire pour être <b>recontacté</b> ou pour avoir <b>plus
              d’informations</b>.
            </p>

            <p>
              <b>Professionnels, vous pouvez aussi commander directement sur notre
              site internet.</b>
            </p>

            <Button>Commander en ligne</Button>
            {/* <button className="uppercase bg-RoseRed text-white p-2 rounded-lg transition ease-in-out duration-300 hover:bg-NewGrey">Commander en ligne</button> */}

            <h4 className="font-CoreRinho75">Vous êtes un particulier ?</h4>
            <p className="font-CoreRinho35">Contactez-nous à l’adresse suivante :</p>
            <a href="#" className="font-">contact@groupepoullain.com</a>

          </div>

          <div className="bg-RoseRed flex justify-center items-center">
            <p>jbbbh</p>
          </div>

        </div>
      </section>
    </>
  );
}
