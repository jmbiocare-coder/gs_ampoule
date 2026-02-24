'use client';

import { motion } from 'framer-motion';

// TypeScript 이름표(Interface) 정의: 에러 해결의 핵심입니다.
interface AppleButtonProps {
  text: string;           // 버튼에 들어갈 문구
  onClick?: () => void;   // 클릭 시 실행될 함수 (선택 사항)
  primary?: boolean;      // 강조 버튼 여부
  className?: string;     // 추가 스타일링용
}

export const AppleButton = ({ 
  text, 
  onClick, 
  primary = false,
  className = "" 
}: AppleButtonProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }} // 클릭 시 미세한 반동(Haptic feedback)
      onClick={onClick}
      className={`
        px-8 py-4 rounded-full font-medium transition-all duration-500
        tracking-tightest relative overflow-hidden group
        ${primary ? 
          'bg-appleGrey text-white hover:bg-opacity-90 shadow-lg' : 
          'bg-white text-appleGrey border border-zinc-200 hover:bg-appleSilver'}
        ${className}
      `}
    >
      <span className="relative z-10">{text}</span>
      
      {/* 은은한 실버 그라데이션 광택 애니메이션 */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </motion.button>
  );
};