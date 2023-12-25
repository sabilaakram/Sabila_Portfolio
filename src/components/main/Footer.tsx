import { RxInstagramLogo, RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import FaYoutube from "react-icons/fa";
export default function Footer() {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>

            <a
              href="https://github.com/sabilaakram" 
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sabila-akram-a74341203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/sabila_akram?igsh=MW9xZzhjdm95cjY4cA==" 
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">0315 8960113</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                sabilaakram1234@gmail.com
              </span>
            </p>
          </div>
        </div>
        <div className="mb-[20px] text-[15px] text-center">
          ©2023 Sabila Akram. All rights reserved.
        </div>
      </div>
    </div>
  );
}
