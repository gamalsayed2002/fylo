import one from "../images/profile-1.jpg";
import two from "../images/profile-2.jpg";
import three from "../images/profile-3.jpg";
import quoto from "../images/bg-quotes.png";

export default function Testimonials() {
  return (
    <section className="pb-[250px]">
      <div className="container relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
        <div className="absolute left-[20px] top-[-35px]">
          <img src={quoto} alt="" />
        </div>

        <div className="bg-[#21293c] rounded-[5px] p-[30px] z-10 relative text-white shadow-[8px_8px_1px_8px_#1c202c]">
          <p className="text-sm font-normal tracking-[0.8px] mb-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            animi eaque perspiciatis soluta atque enim praesentium earum autem
            ad porro fuga repellat vel sunt nihil?
          </p>
          <div className="flex gap-5">
            <img
              src={one}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-contain "
            />
            <div className="">
              <strong className="block mb-[5px]">Ahmed</strong>
              <p className="font-normal text-sm">Founder & CEO.Huddle</p>
            </div>
          </div>
        </div>

        <div className="bg-[#21293c] rounded-[5px] p-[30px] z-10 relative text-white shadow-[8px_8px_1px_8px_#1c202c]">
          <p className="text-sm font-normal tracking-[0.8px] mb-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            animi eaque perspiciatis soluta atque enim praesentium earum autem
            ad porro fuga repellat vel sunt nihil?
          </p>
          <div className="flex gap-5">
            <img
              src={two}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-contain "
            />
            <div className="">
              <strong className="block mb-[5px]">Yaser</strong>
              <p className="font-normal text-sm">Founder & CEO.Huddle</p>
            </div>
          </div>
        </div>

        <div className="bg-[#21293c] rounded-[5px] p-[30px] z-10 relative text-white shadow-[8px_8px_1px_8px_#1c202c]">
          <p className="text-sm font-normal tracking-[0.8px] mb-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            animi eaque perspiciatis soluta atque enim praesentium earum autem
            ad porro fuga repellat vel sunt nihil?
          </p>
          <div className="flex gap-5">
            <img
              src={three}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-contain "
            />
            <div className="">
              <strong className="block mb-[5px]">Sara</strong>
              <p className="font-normal text-sm">Founder & CEO.Huddle</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
