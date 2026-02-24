'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { AppleButton } from '@/components/UI/AppleButton';

export default function Home() {
  const purchaseLink = "https://www.jmbiocare.com/gsshop_standard/?idx=47";
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-[#1d1d1f] overflow-x-hidden">
      
      {/* 1. Hero Section: 모바일 텍스트 크기 및 여백 최적화 */}
      <section className="relative h-[85vh] md:h-[90vh] flex flex-col items-center justify-center text-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 w-full"
        >
          <h2 className="text-[10px] md:text-sm font-bold tracking-[0.3em] md:tracking-[0.4em] text-zinc-400 mb-4 md:mb-6 uppercase">
            JM BIOCARE PREMIUM
          </h2>
          {/* 모바일에서 텍스트가 너무 크지 않게 4xl로 시작, 데스크탑에서 7xl로 확장 */}
          <h1 className="text-4xl md:text-7xl font-bold tracking-tightest mb-6 md:mb-8 leading-[1.2] md:leading-[1.1]">
            The Miracle of <br /> a Single Drop
          </h1>
          <p className="text-base md:text-xl text-zinc-500 mb-8 md:mb-12 font-light max-w-2xl mx-auto px-4">
            Experience the 885.25% soothing revolution with <br className="hidden md:block" />
            GS Fermented Nutri Ampoule.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <AppleButton 
              text="지금 바로 구매하기" 
              primary={true} 
              className="w-full md:w-auto bg-[#1d1d1f] text-white px-10 py-4" 
              onClick={() => window.open(purchaseLink, '_blank')} 
            />
            <AppleButton 
              text="리추얼 가이드" 
              className="w-full md:w-auto px-10 py-4 border-zinc-200"
              onClick={() => scrollTo('ritual-guide')} 
            />
          </div>
        </motion.div>
        
        {/* 배경 이미지: 모바일에서 너무 작게 보이지 않도록 패딩 조절 */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <Image src="/GS_Hero.jpg" alt="GS Ampoule" fill className="object-contain p-10 md:p-20" priority />
        </div>
      </section>

      {/* 2. Product Pricing: 모바일 카드 레이아웃 */}
      <section id="product-pricing" className="py-20 md:py-32 px-6 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tightest">Fermented Nutri Ampoule.</h2>
          <p className="text-zinc-500 text-base md:text-lg">단 한 병으로 완성되는 인클루시브 리추얼</p>
        </div>

        <div className="max-w-md mx-auto">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 md:p-12 rounded-[32px] md:rounded-[40px] text-center shadow-xl border border-zinc-100"
          >
            <div className="relative w-full aspect-square mb-6 md:mb-8">
              <Image src="/GS_Hero2.jpg" alt="GS Ampoule" fill className="object-cover rounded-2xl" />
            </div>
            
            <h4 className="text-xl md:text-2xl font-bold mb-2">GS 퍼멘티드 뉴트리 앰플</h4>
            <p className="text-zinc-400 mb-6 md:mb-8 text-xs uppercase tracking-widest">25ml / 0.85 fl.oz.</p>
            
            <div className="mb-8 md:mb-12">
              <span className="text-4xl md:text-5xl font-black tracking-tight">80,000</span>
              <span className="text-xl md:text-2xl font-bold ml-1 text-zinc-600">원</span>
            </div>

            <AppleButton 
              text="지금 바로 사러 가기" 
              primary={true} 
              className="w-full py-4 md:py-5 bg-[#1d1d1f] text-white text-base md:text-lg rounded-full" 
              onClick={() => window.open(purchaseLink, '_blank')} 
            />
            <p className="mt-6 text-[10px] md:text-xs text-zinc-400">제이엠바이오 공식 몰에서 안전하게 구매하세요.</p>
          </motion.div>
        </div>
      </section>

      {/* 3. Ritual Guide: 2열 그리드에서 모바일 1열 전환 */}
      <section id="ritual-guide" className="py-20 md:py-40 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-[10px] md:text-sm font-bold tracking-[0.3em] text-zinc-400 mb-4 uppercase">
              The Art of Application
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tightest">
              GS Ritual Guide.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {/* 지성 & 민감성 */}
            <div className="bg-[#f5f5f7] p-8 md:p-12 rounded-[32px] md:rounded-[48px]">
              <div className="inline-block px-3 py-1 bg-white rounded-full text-[9px] font-bold mb-6">OILY & SENSITIVE</div>
              <h4 className="text-2xl md:text-3xl font-bold mb-6">산뜻한 진정 리추얼</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-zinc-300 font-mono text-lg">01</span>
                  <p className="text-sm text-zinc-600 leading-relaxed">세안 후 토너 정리 뒤, GS 앰플 **한 방울**을 사용하세요.</p>
                </div>
                {/* ... 추가 스텝 생략 가능 (코드 양 조절) ... */}
              </div>
            </div>

            {/* 일반 & 모든 피부 */}
            <div className="bg-[#1d1d1f] p-8 md:p-12 rounded-[32px] md:rounded-[48px] text-white">
              <div className="inline-block px-3 py-1 bg-zinc-800 rounded-full text-[9px] font-bold mb-6">NORMAL SKIN</div>
              <h4 className="text-2xl md:text-3xl font-bold mb-6">깊은 영양 리추얼</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-zinc-500 font-mono text-lg">01</span>
                  <p className="text-sm text-zinc-300 leading-relaxed">세안 직후 물기가 있을 때 **두 방울**을 사용하세요.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 md:py-20 text-center bg-white border-t border-zinc-100 px-6">
        <AppleButton 
          text="GS 리추얼 시작하기" 
          primary={true} 
          className="w-full md:w-auto bg-[#1d1d1f] text-white px-12 py-4" 
          onClick={() => window.open(purchaseLink, '_blank')} 
        />
        <p className="mt-8 text-zinc-400 text-[10px] tracking-widest uppercase">JM BIOCARE © 2026</p>
      </footer>
    </div>
  );
}