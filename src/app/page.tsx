"use client";

import { ArrowRight, Leaf, Users, Globe } from "lucide-react";
import { openExternalLink } from "@/util/url";
import { Button } from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* 히어로 배너 */}
      <section className="flex min-h-[400px] items-center justify-center overflow-hidden px-4 md:h-[600px]">
        <div className="animate-slide-up">
          <div className="group hover:animate-wiggle flex flex-col gap-2 text-center md:gap-4 md:text-left">
            <h2 className="text-4xl md:text-7xl">2025 Environment</h2>
            <h1 className="text-primary-500 group-hover:text-primary-400 transform text-5xl font-[900] transition-all duration-100 md:text-8xl">
              사물과 인간
            </h1>
            <h2 className="text-3xl md:text-7xl">함께 논의하는 새로운 미래</h2>
          </div>
        </div>
      </section>

      {/* 서브 배너 */}
      <section className="h-[320px] md:h-[440px]">
        <div>
          <div className="bg-ocean-deep border-ocean-surf relative flex h-[280px] items-center justify-center border-y-[12px] px-4 text-white md:h-[360px] md:border-y-[20px]">
            <div className="animate-slide-up flex flex-col gap-4 text-center">
              <h3 className="text-lg font-semibold md:text-2xl">
                함께 고민하는 시간
              </h3>
              <h2 className="text-2xl font-bold md:text-5xl">
                비인간 존재들의 <span className="text-ocean-surf">권리</span>와{" "}
                <span className="text-ocean-surf">발언권</span>을 고민하다
              </h2>
              <p className="text-base font-bold opacity-50 md:text-xl">
                2025 사물의 의회 주제 : 미래의 공존을 위한 새로운 논의
              </p>
            </div>

            {/* 참가버튼 */}
            <Button
              type="button"
              onClick={() =>
                openExternalLink("https://www.instagram.com/samul.parliament")
              }
              className="animate-rotate-in absolute right-0 bottom-[-40px] left-0 mx-auto h-[80px] w-[80px] p-0 hover:scale-105 md:bottom-[-50px] md:h-[100px] md:w-[100px]"
            >
              <p className="text-sm text-nowrap md:text-base">지원하기</p>
            </Button>
          </div>
        </div>
      </section>

      {/* 비디오 섹션 */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* 배경 비디오 */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            aria-label="자연과 기술이 조화롭게 공존하는 미래를 보여주는 영상"
          >
            <source src="/videos/20250309_0200.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* 비디오 오버레이 - 더 진한 그라데이션 효과 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        {/* 비디오 위 콘텐츠 */}
        <div className="relative z-10 flex h-full items-center justify-center px-4 text-white">
          <div className="max-w-4xl space-y-8 text-center">
            <h2 className="text-5xl font-bold drop-shadow-lg">
              자연과 기술의 조화
            </h2>
            <p className="text-xl leading-relaxed font-medium tracking-wide drop-shadow-lg">
              우리는 자연과 기술이 조화롭게 공존하는 미래를 꿈꿉니다.
              <br className="hidden md:block" />더 나은 미래를 위한 우리의
              여정에 함께해주세요.
            </p>
            <button className="hover:text-primary-500 mt-4 rounded-full bg-white/20 px-8 py-3 font-semibold backdrop-blur-sm transition-all hover:bg-white">
              <Link href="/info">더 알아보기</Link>
            </button>
          </div>
        </div>
      </section>

      {/* 서브 배너 */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* 카드 1 */}
            <div className="group rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all hover:scale-105">
              <div className="bg-ocean-blue/10 mb-6 inline-block rounded-full p-3">
                <Leaf className="text-ocean-deep h-8 w-8" />
              </div>
              <h3 className="text-primary-500 mb-4 text-2xl font-bold">
                환경 보호
              </h3>
              <p className="mb-6 text-gray-600">
                지속 가능한 미래를 위한 환경 보호 활동과 기술 혁신을 논의합니다.
              </p>
              <Link
                href="/info"
                className="group/link text-ocean-blue inline-flex items-center"
              >
                자세히 보기
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>

            {/* 카드 2 */}
            <div className="group rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all hover:scale-105">
              <div className="bg-ocean-blue/10 mb-6 inline-block rounded-full p-3">
                <Users className="text-ocean-deep h-8 w-8" />
              </div>
              <h3 className="text-primary-500 mb-4 text-2xl font-bold">
                커뮤니티
              </h3>
              <p className="mb-6 text-gray-600">
                환경 보호에 관심 있는 사람들이 모여 아이디어를 공유하고
                토론합니다.
              </p>
              <Link
                href="https://www.instagram.com/samul.parliament"
                className="group/link text-ocean-blue inline-flex items-center"
              >
                자세히 보기
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>

            {/* 카드 3 */}
            <div className="group rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all hover:scale-105">
              <div className="bg-ocean-blue/10 mb-6 inline-block rounded-full p-3">
                <Globe className="text-ocean-deep h-8 w-8" />
              </div>
              <h3 className="text-primary-500 mb-4 text-2xl font-bold">
                글로벌 협력
              </h3>
              <p className="mb-6 text-gray-600">
                전 세계의 환경 전문가들과 함께 글로벌 환경 문제 해결방안을
                모색합니다.
              </p>
              <Link
                href="/organization"
                className="group/link text-ocean-blue inline-flex items-center"
              >
                자세히 보기
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
