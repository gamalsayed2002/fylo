import React from "react";
import one from "../images/icon-access-anywhere.svg";
import two from "../images/icon-collaboration.svg";
import three from "../images/icon-any-file.svg";
import four from "../images/icon-security.svg";
export default function Feature() {
  return (
    <section className="pb-[150px]">
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] mx-auto max-w-full">
          <div className="text-white element-center flex-col text-center">
            <img
              src={one}
              alt=""
              className="w-[80px] h-[80px] object-contain"
            />
            <h4 className="text-xl font-semibold my-[15px]">
              Access your files,anywhere
            </h4>
            <p className="font-normal text-sm">
              The ability to use a smartphone,tablet or computer to access your
              account means your files follow you everywhere
            </p>
          </div>
          <div className="text-white element-center flex-col text-center">
            <img
              src={four}
              alt=""
              className="w-[80px] h-[80px] object-contain"
            />
            <h4 className="text-xl font-semibold my-[15px]">
              Security you can trust
            </h4>
            <p className="font-normal text-sm">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
          <div className="text-white element-center flex-col text-center">
            <img
              src={two}
              alt=""
              className="w-[80px] h-[80px] object-contain"
            />
            <h4 className="text-xl font-semibold my-[15px]">
              Real-time collaboration
            </h4>
            <p className="font-normal text-sm">
              Securely shre files and folders with friends,family and colleagues
              for live collaboration. No email attachments required.
            </p>
          </div>
          <div className="text-white element-center flex-col text-center">
            <img
              src={three}
              alt=""
              className="w-[80px] h-[80px] object-contain"
            />
            <h4 className="text-xl font-semibold my-[15px]">
              Store any type of files
            </h4>
            <p className="font-normal text-sm">
              whether you're sharing holidays photos or work documents,fylo has
              you covered allowing for all fille types to be securely stored and
              shared'
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
