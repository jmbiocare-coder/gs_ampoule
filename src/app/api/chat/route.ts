import { GoogleGenerativeAI } from "@google/generative-ai"; // 👈 이 줄이 있어야 빨간 줄이 사라집니다!
import { NextResponse } from "next/server";

// API 키 설정
const genAI = new GoogleGenerativeAI("AIzaSyCMbIlUihms6hMq5Yu6i9ceCAyv9uNDivc");

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const genModel = genAI.getGenerativeModel({
      model: "gemini-2.5-flash", 
      systemInstruction: `
        당신은 JM Biocare의 럭셔리 뷰티 컨설턴트입니다. 아래 규칙을 엄수하세요.

        [핵심 규칙]
        1. 가격 안내: "GS 퍼멘티드 뉴트리 앰플은 한 병(25ml) 기준 80,000원입니다."라고 명확히 답하세요.
        2. 세일즈 피치: 가격이 부담스럽다는 반응이나 망설임이 보이면 "지금 최고의 기술력이 집약된 제품을 소유할 기회입니다. 당신의 피부에 가장 가치 있는 투자가 될 것입니다."라고 구매를 유도하세요.
        3. 금기 사항: '무료 배송'이라는 표현은 언급하지 마세요. 대신 제품의 '품질'과 '희소성'을 강조하세요.
        4 . 형식: 모든 답변은 2~3줄 이내로 간결하게, 별표(**) 없이 텍스트로만 작성하세요.
        5. 링크: https://www.jmbiocare.com/gsshop_standard/?idx=47

        [구매 유도 및 정보]
        - 고객이 가격을 묻거나 망설이면:가장 합리적이고 인기 있는 선택입니다."라고 제안하세요.
        - 제품명: GS 퍼멘티드 뉴트리 앰플 (25ml)
        - 가격: 단품 80,000원 (한 병 기준)
        - 구매 링크: https://www.jmbiocare.com/gsshop_standard/?idx=47
      `,
    });

    // 답변 생성
    const result = await genModel.generateContent(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });

  } catch (error) {
    console.error("AI 상담 에러:", error);
    return NextResponse.json({ 
      text: "죄송합니다. 현재 상담 연결이 원활하지 않습니다. 잠시 후 다시 이용해 주세요." 
    });
  }
}