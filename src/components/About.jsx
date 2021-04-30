import React from "react";
import profile from "../assets/main-2.jpg";

const About = () => {
  return (
    <section className="px-5 pb-20 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:max-w-7xl lg:mx-auto ">
      <div className="flex items-center justify-center md:items-start">
        <div className="mr-2">
          <h4 className="font-bold my-2">KIM DONG IL</h4>
          <p className="text-gray-500 text-sm">Frontend Developer</p>
        </div>
        <img
          src={profile}
          alt="profile"
          className="ml-3 w-16 h-16 object-cover rounded-full"
        />
      </div>

      <div>
        <q className="flex align-center justify-center text-4xl text-center mt-5 md:mt-0">
          Ambition is enthusiasm <br />
          with a purpose.
        </q>
      </div>

      <div className="grid grid-cols-1 gap-5 mt-5 md:mt-0">
        <p>
          <b>
            끝은 아무도 모른다. 다만 지나온 시간을 후회하지 않으려면 우선 최선을
            다해보자
          </b>
        </p>
        <p>
          시간이 지나고 난 뒤에 자신이 살아온 인생에 대해서 후회하는 것이
          싫었습니다.
        </p>
        <p>
          후회하지 않기 위해{" "}
          <b>
            뮤지컬 배우, 영업, 간호조무, 호텔 프론트데스크, 온라인 쇼핑몰, 병원
            온라인 마케터
          </b>{" "}
          등 다양한 일을 경험했습니다.
        </p>
        <p>
          매 순간 열정적으로 살았던 만큼 professional 한 개발자가 될 수 있도록
          조금 느릴지언정 성실하게 공부하고 성장하는 개발자가 되고 싶습니다.
        </p>
      </div>
    </section>
  );
};

export default About;
