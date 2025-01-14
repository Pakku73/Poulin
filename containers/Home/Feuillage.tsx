import Image from "next/image";

export default function Engagement() {
  return (
    <>
      <section className="flex flex-col justify-center items-center w-full">
        <Image
          className="relative w-full"
          src="/assets/images/Feuille.png"
          alt=""
          width={100}
          height={100}
        />
        <div className="flex absolute justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-center gap-2 w-52">
            <Image
              className="relative"
              src="/assets/images/vectors/Group(3).png"
              alt=""
              width={100}
              height={100}
            />
            <p className="font-CoreRinho75 text-white text-center text-lg">
              Conseils de nos pépiniéristes
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 w-52">
            <Image
              className="relative"
              src="/assets/images/vectors/Group(4).png"
              alt=""
              width={160}
              height={160}
            />
            <p className="font-CoreRinho75 text-white text-center text-lg">
              Livraison dans la semaine
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 w-52">
            <Image
              className="relative"
              src="/assets/images/vectors/Group(5).png"
              alt=""
              width={100}
              height={100}
            />
            <p className="font-CoreRinho75 text-white text-center text-lg">
              Devis sous 48H
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
