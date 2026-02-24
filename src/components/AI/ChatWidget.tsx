'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: string, text: string}[]>([
    { 
      role: 'ai', 
      text: '안녕하세요! JM Biocare입니다. 단 한 병으로 완성되는 최고의 피부 리추얼, GS 앰플에 대해 궁금한 점이 있으신가요?' 
    }
  ]);
  const [isProactive, setIsProactive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 1. 호기심 유도 말풍선 (15초 후)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setIsProactive(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // 자동 스크롤
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const sendMessage = async (textToSend?: string) => {
    const messageText = textToSend || input;
    if (!messageText || isLoading) return;
    
    const userMsg = { role: 'user', text: messageText };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageText }),
      });

      const data = await res.json();
      const cleanText = data.text.replace(/\*\*/g, ''); 
      setMessages(prev => [...prev, { role: 'ai', text: cleanText }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', text: "상담사와 연결이 원활하지 않습니다. 잠시 후 다시 시도해 주세요." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const icebreakers = [
    { label: "GS 앰플만의 특별함은? ✨", value: "GS 앰플의 특징과 효과가 뭐야?" },
    { label: "지금 바로 사고 싶어! 🛒", value: "지금 바로 구매하고 싶어! 링크 알려줘" },
    { label: "80,000원의 가치는? 💎", value: "80,000원이라는 가격에 어떤 가치가 담겨있어?" }
  ];

  return (
    // 전체 컨테이너: 모바일과 데스크탑의 위치를 다르게 잡습니다.
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100]">
      <AnimatePresence>
        
        {/* 프로액티브 말풍선: 모바일에서는 너무 크게 보이지 않게 조절 */}
        {isProactive && !isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 10 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-24 right-0 w-56 md:w-64 p-4 md:p-5 bg-white shadow-2xl rounded-2xl border border-zinc-100 mb-2 cursor-pointer group"
            onClick={() => { setIsOpen(true); setIsProactive(false); }}
          >
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">GS Exclusive</span>
              <p className="text-xs md:text-sm font-bold text-[#1d1d1f] group-hover:text-zinc-600">
                단 한 방울의 기적, 비밀이 궁금하신가요? ✨
              </p>
            </div>
          </motion.div>
        )}

        {/* 채팅창 메인 UI: 반응형 크기 적용 */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`
              fixed md:absolute bottom-0 right-0 md:bottom-28 
              w-full md:w-[400px] h-[85vh] md:h-[600px] 
              bg-white shadow-2xl rounded-t-[32px] md:rounded-[32px] 
              border border-zinc-100 flex flex-col overflow-hidden
            `}
          >
            {/* 상단 헤더 */}
            <div className="bg-[#1d1d1f] p-5 text-white flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-bold tracking-tight uppercase text-[10px] md:text-xs">Premium GS Consultant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 opacity-60 hover:opacity-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>

            {/* 메시지 영역 */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#fbfbfd]">
              {messages.map((m, i) => (
                <div key={i} className={`${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                  <motion.span 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`inline-block p-4 rounded-[20px] leading-relaxed text-sm shadow-sm ${
                      m.role === 'user' 
                        ? 'bg-[#1d1d1f] text-white rounded-tr-none' 
                        : 'bg-white text-[#1d1d1f] rounded-tl-none border border-zinc-100'
                    }`}
                  >
                    {m.text}
                  </motion.span>
                </div>
              ))}
              
              {messages.length === 1 && !isLoading && (
                <div className="flex flex-col gap-2 pt-2">
                  {icebreakers.map((btn, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ x: 5 }}
                      onClick={() => sendMessage(btn.value)}
                      className="text-left text-xs font-semibold bg-white border border-zinc-200 p-3 rounded-xl shadow-sm text-zinc-600 hover:border-[#1d1d1f] transition-all"
                    >
                      {btn.label}
                    </motion.button>
                  ))}
                </div>
              )}

              {isLoading && (
                <div className="text-left">
                  <span className="inline-block p-4 rounded-[20px] rounded-tl-none bg-zinc-100 text-zinc-400 text-[10px] animate-pulse">
                    최고의 제품에 걸맞은 답변을 준비 중입니다...
                  </span>
                </div>
              )}
            </div>

            {/* 입력 영역: iOS 하단 세이프 에어리어 대응 */}
            <div className="p-4 bg-white border-t border-zinc-100 flex gap-2 items-center mb-[env(safe-area-inset-bottom)]">
              <input 
                className="flex-1 border-none focus:ring-0 text-base md:text-sm outline-none p-2 text-zinc-800" 
                placeholder="궁금한 점을 물어보세요..."
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button 
                onClick={() => sendMessage()} 
                disabled={isLoading} 
                className="w-10 h-10 bg-[#1d1d1f] text-white rounded-full flex items-center justify-center disabled:opacity-20 shrink-0"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 4. '물방울 모양' 플로팅 버튼 (수정 없음) */}
      <motion.button 
        whileHover={{ scale: 1.1, rotate: -45 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          boxShadow: isOpen ? "0 0 0px rgba(0,0,0,0)" : "0 10px 40px -10px rgba(0,0,0,0.5)",
          rotate: -45 
        }}
        onClick={() => { setIsOpen(!isOpen); setIsProactive(false); }}
        className="relative w-16 h-16 md:w-20 md:h-20 bg-[#1d1d1f] rounded-[50%_50%_5px_50%] flex items-center justify-center overflow-hidden border-2 border-white/80 shadow-2xl transition-all"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-[#1d1d1f] to-zinc-700 opacity-80" />
        <motion.div animate={isOpen ? { rotate: 45 + 90 } : { rotate: 45 }} className="relative z-10 text-white">
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};