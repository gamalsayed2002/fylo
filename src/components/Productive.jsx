import img from "../images/illustration-stay-productive.png";
import icon from "../images/icon-arrow.svg";

export default function Productive() {
  return (
    <section className="pb-[150px]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
        <div>
          <img src={img} alt="err" />
        </div>
        <div className="text-white">
          <div>
            <h3 className="font-medium text-[35px] leading-[50px]">
              Stay productive,
              <br />
              wherever you are
            </h3>
          </div>
          <div className="my-[15px] font-normal text-sm tracking-[0.8px]">
            <p className="mb-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              corporis ullam laboriosam rem quo odio tempore reiciendis at esse
              aut!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              corporis ullam laboriosam rem quo odio tempore reiciendis at esse
              aut!
            </p>
          </div>
          <a
            href="/"
            className="text-mainColor hover:text-[#42b0d1] transition-all duration-[.5s] border-b-2 border-mainColor border-solid pb-[5px] flex items-center w-fit gap-2 "
          >
            See how fylo works
            <img
              src={icon}
              alt="arrow"
              className="w-[20px] h-[20px] object-contain animate-[move_1s_ease-in-out_infinite]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
