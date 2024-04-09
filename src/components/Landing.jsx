import img from "../images/illustration-intro.png";
import curve from "../images/bg-curvy-desktop.svg";

export default function Landing() {
  return (
    <>
      <section className="bg-[#1c2230] ">
        <div className="container ">
          <div className="element-center pt-[220px] pb-20">
            <div className="w-[750px] max-w-full">
              <img src={img} alt="Landing img" className="w-full h-fit " />
            </div>
            <div className="text-white text-center">
              <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px] ">
                All Your Files In One Secure Location <br /> Accessible Anywhere
              </h1>
              <p className="font-normal text-lg px-[15px] md:w-[600px] max-w-full ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                consequatur sequi perspiciatis numquam autem eum iste explicabo
                dolorum, quibusdam maxime? Non, ea iusto earum quas architecto
                consequuntur obcaecati perferendis id.
              </p>
            </div>

            <a
              href="/rejester"
              className="btn w-[280px] h-[60px] rounded-[30px] element-center text-white font-medium mt-[30px]"
            >
              Get Started
            </a>
          </div>
        </div>

        <div className="w-full h-[200px]">
            <img src={curve} alt="err" className="w-full h-full" />
        </div>
      </section>
    </>
  );
}
