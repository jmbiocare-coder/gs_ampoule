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
    <div className="flex flex-col w-full min-h-screen bg-white text-[#1d1d1f]">
      
      {/* 1. Hero Section: 첫인상 */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h2 className="text-xs md:text-sm font-bold tracking-[0.4em] text-zinc-400 mb-6 uppercase">
            JM BIOCARE PREMIUM
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tightest mb-8 leading-[1.1]">
            The Miracle of <br /> a Single Drop
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 mb-12 font-light max-w-2xl mx-auto">
            Experience the 885.25% soothing revolution with <br className="hidden md:block" />
            GS Fermented Nutri Ampoule.
          </p>
          <div className="flex gap-4 justify-center">
            <AppleButton 
              text="지금 바로 구매하기" 
              primary={true} 
              className="bg-[#1d1d1f] text-white px-10" 
              onClick={() => window.open(purchaseLink, '_blank')} 
            />
            <AppleButton 
              text="리추얼 가이드 보기" 
              className="px-10 border-zinc-200"
              onClick={() => scrollTo('ritual-guide')} 
            />
          </div>
        </motion.div>
        
        <div className="absolute inset-0 -z-10 opacity-20">
          <Image src="/GS_Hero.jpg" alt="GS Ampoule" fill className="object-contain p-20" priority />
        </div>
      </section>

      {/* 2. Product Detail & Pricing: 80,000원 단일가 */}
      <section id="product-pricing" className="py-32 px-6 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tightest text-[#1d1d1f]">Fermented Nutri Ampoule.</h2>
          <p className="text-zinc-500 text-lg">단 한 병으로 완성되는 인클루시브 리추얼</p>
        </div>

        <div className="max-w-md mx-auto">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-[40px] text-center shadow-2xl border border-zinc-100"
          >
            <div className="relative w-full aspect-square mb-8">
              <Image src="/GS_Hero2.jpg" alt="GS Ampoule" fill className="object-cover rounded-2xl" />
            </div>
            
            <h4 className="text-2xl font-bold mb-2">GS 퍼멘티드 뉴트리 앰플</h4>
            <p className="text-zinc-400 mb-8 text-sm uppercase tracking-widest">25ml / 0.85 fl.oz.</p>
            
            <div className="mb-12">
              <span className="text-5xl font-black tracking-tight">80,000</span>
              <span className="text-2xl font-bold ml-1 text-zinc-600">원</span>
            </div>

            <AppleButton 
              text="지금 바로 사러 가기" 
              primary={true} 
              className="w-full py-5 bg-[#1d1d1f] text-white text-lg rounded-full" 
              onClick={() => window.open(purchaseLink, '_blank')} 
            />
            <p className="mt-6 text-xs text-zinc-400 font-medium">제이엠바이오 공식 몰에서 안전하게 구매하세요.</p>
          </motion.div>
        </div>
      </section>

      {/* 3. Ritual Guide Section: 지성/민감성 & 일반 피부 맞춤형 가이드 */}
      <section id="ritual-guide" className="py-40 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-xs md:text-sm font-bold tracking-[0.4em] text-zinc-400 mb-4 uppercase">
              The Art of Application
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tightest text-[#1d1d1f]">
              GS Ritual Guide.
            </h3>
            <p className="mt-6 text-zinc-500 font-light text-lg">당신의 피부 타입에 맞춘 최적의 기적을 경험하세요.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            
            {/* 섹터 1: 지성 & 민감성 피부 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#f5f5f7] p-12 rounded-[48px] flex flex-col justify-between"
            >
              <div>
                <div className="inline-block px-4 py-1.5 bg-white rounded-full text-[10px] font-bold tracking-widest mb-8 shadow-sm">
                  OILY & SENSITIVE
                </div>
                <h4 className="text-3xl font-bold mb-8 tracking-tight">산뜻한 진정 리추얼</h4>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <span className="text-zinc-300 font-mono text-xl italic">01</span>
                    <p className="text-sm leading-relaxed text-zinc-600 font-medium">세안 후 토너로 결을 정리한 뒤, GS 앰플 한 방울을 손바닥에 떨어뜨립니다.</p>
                  </div>
                  <div className="flex gap-6">
                    <span className="text-zinc-300 font-mono text-xl italic">02</span>
                    <p className="text-sm leading-relaxed text-zinc-600 font-medium">손바닥의 온기를 이용해 얼굴 전체를 가볍게 감싸듯 눌러 흡수시켜 주세요. 과도한 문지름은 피합니다.</p>
                  </div>
                  <div className="flex gap-6">
                    <span className="text-zinc-300 font-mono text-xl italic">03</span>
                    <p className="text-sm leading-relaxed text-zinc-600 font-medium">885.25%의 진정 성분이 피부 온도를 낮추고 번들거림 없이 깊숙이 스며듭니다.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 섹터 2: 일반 & 모든 피부 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1d1d1f] p-12 rounded-[48px] text-white flex flex-col justify-between"
            >
              <div>
                <div className="inline-block px-4 py-1.5 bg-zinc-800 rounded-full text-[10px] font-bold tracking-widest mb-8">
                  NORMAL SKIN
                </div>
                <h4 className="text-3xl font-bold mb-8 tracking-tight">깊은 영양 리추얼</h4>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <span className="text-zinc-500 font-mono text-xl italic">01</span>
                    <p className="text-sm leading-relaxed text-zinc-300 font-medium">세안 직후, 물기가 살짝 남은 상태에서 GS 앰플 두 방울을 이마와 양 볼에 떨어뜨립니다.</p>
                  </div>
                  <div className="flex gap-6">
                    <span className="text-zinc-500 font-mono text-xl italic">02</span>
                    <p className="text-sm leading-relaxed text-zinc-300 font-medium">안쪽에서 바깥쪽으로 원을 그리며 천천히 마사지하세요. 고농축 발효 성분이 광채막을 형성합니다.</p>
                  </div>
                  <div className="flex gap-6">
                    <span className="text-zinc-500 font-mono italic text-xl">03</span>
                    <p className="text-sm leading-relaxed text-zinc-300 font-medium">건조함이 심한 날엔 앰플을 한 겹 더 레이어링하여 밤사이 피부 에너지를 완벽히 충전하세요.</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 하단 푸터 구매 유도 */}
      <footer className="py-20 text-center bg-white border-t border-zinc-100">
        <AppleButton 
          text="지금 바로 시작하기" 
          primary={true} 
          className="bg-[#1d1d1f] text-white px-12 py-4" 
          onClick={() => window.open(purchaseLink, '_blank')} 
        />
        <p className="mt-8 text-zinc-400 text-xs tracking-widest uppercase">JM BIOCARE © 2026</p>
      </footer>

    </div>
  );
}