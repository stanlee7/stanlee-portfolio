export type Category = "SaaS" | "도구" | "앱" | "실험";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: Category;
  stack: string[];
  year: string;
  highlight?: string;
  screenshot?: string;
  live?: string;
  github?: string;
  /** 케이스 스터디: 왜 만들었나 */
  problem: string;
  /** 케이스 스터디: 어떻게 만들었나 */
  build: string;
  /** 케이스 스터디: 결과 */
  result: string;
  accent: string;
}

export const profile = {
  name: "Stanlee",
  nameKo: "스탠리",
  headline: "아이디어를 일주일 안에 실서비스로.",
  sub: "AI 도구로 기획부터 배포까지 혼자 해내는 빌더 · AI 강사",
  bio: "Next.js와 AI 도구를 무기로 SaaS, 데스크톱 앱, 모바일 앱을 만들어 실제로 배포합니다. 만드는 과정 자체를 콘텐츠로 기록합니다.",
  email: "stanlee3927@gmail.com",
  github: "https://github.com/stanlee7",
  // TODO: 본인 프로필 URL로 채워주세요 (비워두면 사이트에 표시되지 않습니다)
  linkedin: "",
  threads: "",
  x: "",
  blog: "",
};

export const stats = [
  { value: "30+", label: "만든 프로젝트" },
  { value: "14+", label: "라이브 서비스" },
  { value: "1", label: "Play스토어 출시 앱" },
];

export const projects: Project[] = [
  {
    slug: "ythink",
    name: "YTHINK",
    tagline: "유튜브 링크와 함께 쓰는 감성 무드일기",
    category: "앱",
    stack: ["Expo (React Native)", "Supabase", "EAS Build"],
    year: "2026",
    highlight: "Google Play 정식 출시",
    screenshot: "/screenshots/ythink.png",
    live: "https://play.google.com/store/apps/details?id=com.stanleetam.mymooddiary",
    problem:
      "영상을 보다가 떠오른 감정과 생각은 흘러가 버립니다. 그날 본 유튜브 영상과 그날의 감정을 한 페이지에 묶어 기록하는 일기장이 없었습니다.",
    build:
      "Expo(React Native)와 Supabase로 혼자 기획·디자인·개발했고, EAS Build로 빌드해 Google Play 심사까지 통과했습니다. 무료 플랜 DB 자동 정지 같은 운영 이슈도 keepalive 워커로 직접 해결했습니다.",
    result:
      "Google Play 정식 출시. 아이디어에서 스토어 등록까지 혼자 완주한 첫 모바일 앱입니다.",
    accent: "#f59e0b",
  },
  {
    slug: "hwp-batch",
    name: "HWP 배치",
    tagline: "수료증 300장, 클릭 한 번에 — 한/글 문서 대량 생성·일괄 변환",
    category: "도구",
    stack: ["Python", "pyhwpx (COM 자동화)", "Windows"],
    year: "2026",
    highlight: "무료 배포 중",
    screenshot: "/screenshots/hwp-batch.png",
    live: "https://hwp-batch.vercel.app",
    github: "https://github.com/stanlee7/hwp-batch",
    problem:
      "교육 현장에서는 수료증·공문·계약서를 아직도 한/글로 한 장씩 만듭니다. 엑셀 명단 300명이면 300번의 복사-붙여넣기를 해야 합니다.",
    build:
      "pyhwpx로 한/글을 COM 자동화해 엑셀 명단 + {{자리표시}} 템플릿으로 HWP/PDF를 일괄 생성·변환하는 Windows 앱을 만들었습니다. API 키도 서버도 없이 100% 로컬에서 동작합니다.",
    result:
      "GitHub Release로 v1.0.0 무료 배포 중. 랜딩페이지와 다운로드 채널까지 갖춘 완성형 데스크톱 도구입니다.",
    accent: "#3b82f6",
  },
  {
    slug: "fitpick",
    name: "FitPick",
    tagline: "강사 제안, 이제 신뢰로 설득하세요 — 교육 에이전시용 강사 큐레이션 SaaS",
    category: "SaaS",
    stack: ["Next.js", "TypeScript", "Supabase", "Vercel"],
    year: "2026",
    highlight: "라이브 베타",
    screenshot: "/screenshots/fitpick.png",
    live: "https://fitpick-nine.vercel.app",
    github: "https://github.com/stanlee7/fitpick",
    problem:
      "교육 에이전시는 기업에 강사를 제안할 때마다 프로필을 수작업으로 짜깁기합니다. 강의 경력·고객사·후기 같은 신뢰 신호가 흩어져 있어 설득력이 떨어집니다.",
    build:
      "강사풀을 관리하고, 신뢰 신호가 담긴 제안서를 몇 분 만에 만들어 링크로 공유하는 SaaS를 만들었습니다. 기업 교육 담당자 인터뷰로 니즈를 검증하며 셀프서브 마켓플레이스에서 큐레이터 도구로 피벗했습니다.",
    result:
      "라이브 베타 운영 중. 시장 검증 인터뷰를 거쳐 방향을 잡아가는 진행형 프로젝트입니다.",
    accent: "#2563eb",
  },
  {
    slug: "fireguard",
    name: "FireGuard",
    tagline: "소방 자체점검 보고서, 4시간 → 15분",
    category: "SaaS",
    stack: ["Next.js", "Supabase", "AI 보고서 생성", "PDF"],
    year: "2026",
    highlight: "베타 사전신청 모집",
    screenshot: "/screenshots/fireguard.png",
    live: "https://fireguard-saas.vercel.app",
    problem:
      "소방시설 점검업체는 점검 1건마다 법정 서식 보고서를 4시간씩 수작업으로 작성합니다. 현장 기록과 보고서 작성이 완전히 분리되어 있기 때문입니다.",
    build:
      "현장에서 핸드폰으로 체크하면 「소방시설 자체점검사항 등에 관한 고시」 별지 제3호서식 전체 1,142개 항목을 지원하는 법정 서식 보고서가 자동 생성되고 PDF로 출력됩니다.",
    result:
      "베타 사전신청 모집 중. 도메인 규제 문서를 통째로 제품에 녹인 버티컬 SaaS 실험입니다.",
    accent: "#f97316",
  },
  {
    slug: "counselnote",
    name: "CounselNote",
    tagline: "상담 기록은 민감하다 — 로컬 AES-256 암호화 + AI SOAP 노트",
    category: "SaaS",
    stack: ["Next.js", "AES-256", "AI 요약"],
    year: "2026",
    github: "https://github.com/stanlee7/counselnote",
    problem:
      "사설 심리상담사의 상담 기록은 가장 민감한 개인정보지만, 클라우드 메모장에 평문으로 쌓이는 경우가 많습니다.",
    build:
      "기록을 AES-256으로 로컬 암호화해 저장하고, AI가 상담 내용을 표준 SOAP 노트 형식으로 정리해주는 기록 시스템을 만들었습니다.",
    result:
      "오픈소스로 공개. 보안이 제품의 핵심 기능인 도메인 특화 도구입니다.",
    accent: "#10b981",
  },
  {
    slug: "wp-auto-blogger",
    name: "WP Auto Blogger",
    tagline: "AI가 쓰고 워드프레스가 발행한다 — SEO 자동 블로깅 대시보드",
    category: "도구",
    stack: ["Gemini", "WordPress API", "Unsplash", "Rank Math SEO"],
    year: "2026",
    github: "https://github.com/stanlee7/wp-auto-blogger",
    problem:
      "블로그 마케팅은 효과를 알면서도 글쓰기·이미지 선정·SEO 세팅·발행까지 손이 너무 많이 갑니다.",
    build:
      "Gemini가 글을 쓰고, Unsplash에서 이미지를 고르고, Rank Math SEO 필드까지 채워 WordPress에 바로 발행하는 자동화 대시보드를 만들었습니다.",
    result:
      "주제 입력부터 발행까지 원클릭 파이프라인 완성. 콘텐츠 마케팅 자동화의 풀스택 실험입니다.",
    accent: "#8b5cf6",
  },
  {
    slug: "my-shorts",
    name: "My Shorts",
    tagline: "긴 영상을 바이럴 쇼츠로 — AI 하이라이트 자동 편집",
    category: "실험",
    stack: ["Gemini", "React", "영상 처리"],
    year: "2026",
    screenshot: "/screenshots/my-shorts.png",
    live: "https://my-shorts.vercel.app",
    github: "https://github.com/stanlee7/My-shorts",
    problem:
      "긴 영상에서 쇼츠를 뽑으려면 영상을 다 돌려보며 매력적인 순간을 직접 찾아 잘라야 합니다.",
    build:
      "영상을 업로드하면 AI가 문맥과 오디오를 분석해 가장 매력적인 15~60초 클립을 찾고, 화자를 감지해 9:16 세로 포맷으로 자동 크롭합니다.",
    result:
      "틱톡·릴스·쇼츠용 클립을 자동 추출하는 데모 완성. AI 영상 분석 파이프라인 실험입니다.",
    accent: "#a855f7",
  },
  {
    slug: "text-behind-image",
    name: "누끼 텍스트",
    tagline: "포토샵 없이 인물 뒤로 텍스트를 — 썸네일 1초 완성",
    category: "도구",
    stack: ["Next.js", "AI 세그멘테이션", "Canvas"],
    year: "2026",
    screenshot: "/screenshots/text-behind-image.png",
    live: "https://text-behind-image-nine.vercel.app",
    github: "https://github.com/stanlee7/text-behind-image",
    problem:
      "유튜브 썸네일의 '인물 뒤 텍스트' 효과는 포토샵에서 누끼를 따야 해서 비전공자에게 진입장벽이 높습니다.",
    build:
      "이미지를 올리면 AI가 자동으로 인물을 인식해 분리하고, 텍스트를 인물 뒤 레이어에 배치해주는 웹 에디터를 만들었습니다.",
    result:
      "업로드 한 번으로 깊이감 있는 썸네일 완성. 라이브 배포 중인 무료 도구입니다.",
    accent: "#d946ef",
  },
  {
    slug: "mind-weather",
    name: "Mind Weather",
    tagline: "오늘, 당신의 마음 날씨는 어떤가요 — 감정을 날씨로 기록",
    category: "실험",
    stack: ["Next.js", "Supabase", "Gemini"],
    year: "2026",
    screenshot: "/screenshots/mind-weather.png",
    live: "https://mind-weather-lovat.vercel.app",
    github: "https://github.com/stanlee7/mind-weather",
    problem:
      "복잡한 감정을 글로 길게 쓰는 건 부담스럽습니다. 날씨 아이콘 하나면 충분할 때가 있습니다.",
    build:
      "감정을 날씨 아이콘으로 기록하고, AI가 일기 텍스트의 감정을 분석해 '마음 날씨 카드'를 만들어 공유할 수 있게 했습니다.",
    result:
      "감정 기록 → 패턴 확인 → 카드 공유까지 이어지는 플로우 완성. YTHINK 앱의 웹 프로토타입 역할도 했습니다.",
    accent: "#6366f1",
  },
  {
    slug: "smart-card-scanner",
    name: "명함 스캐너",
    tagline: "명함 사진 한 장 → 연락처 자동 추출",
    category: "도구",
    stack: ["Gemini Vision", "Groq", "React"],
    year: "2026",
    screenshot: "/screenshots/smart-card-scanner.png",
    live: "https://smart-card-scanner.vercel.app",
    github: "https://github.com/stanlee7/Smart-Card-Scanner",
    problem:
      "행사에서 받은 명함은 결국 서랍에 쌓입니다. 연락처로 옮기는 그 1분이 귀찮아서입니다.",
    build:
      "명함을 촬영하거나 갤러리에서 고르면 Gemini Vision이 정보를 추출합니다. 빠른 처리가 필요하면 Groq로 전환하는 듀얼 모델 구조입니다.",
    result:
      "촬영 → 추출 → 저장까지 모바일 웹에서 완결. 멀티모달 AI의 실용 데모입니다.",
    accent: "#0ea5e9",
  },
  {
    slug: "sound-ai",
    name: "Sound AI",
    tagline: "테마·장르만 고르면 Suno용 가사가 나온다",
    category: "실험",
    stack: ["Groq (Llama 3.3)", "Next.js", "Suno"],
    year: "2026",
    screenshot: "/screenshots/sound-ai.png",
    live: "https://sound-ai-mvp.vercel.app",
    github: "https://github.com/stanlee7/sound-ai-mvp",
    problem:
      "Suno로 AI 음악을 만들 때 정작 막히는 건 가사와 스타일 태그 작성입니다.",
    build:
      "테마와 장르만 입력하면 Groq(Llama 3.3)가 가사·제목·스타일 태그를 JSON으로 생성해 Suno에 바로 붙여 넣을 수 있는 MVP를 만들었습니다.",
    result:
      "아이디어 → 작동하는 MVP까지 최단 경로로 검증한 마이크로 프로젝트입니다.",
    accent: "#eab308",
  },
  {
    slug: "designer-assistant",
    name: "AI Designer Assistant",
    tagline: "브라우저에서 도는 로컬 Gemma 3 디자이너 챗봇",
    category: "실험",
    stack: ["Gemma 3 (4B/2B)", "WebLLM", "Next.js"],
    year: "2026",
    screenshot: "/screenshots/designer-assistant.png",
    live: "https://gemma4-designer-assistant.vercel.app",
    github: "https://github.com/stanlee7/gemma4-designer-assistant",
    problem:
      "API 키 없이, 서버 비용 없이 쓸 수 있는 AI 어시스턴트가 가능할까? 오픈모델을 브라우저에서 직접 돌려보고 싶었습니다.",
    build:
      "Gemma 3 모델을 브라우저에 직접 로드해 실행합니다. 고성능 4B와 경량 2B 중 사용자가 기기 사양에 맞게 선택하는 구조입니다.",
    result:
      "서버리스를 넘어 서버 제로. 온디바이스 AI의 가능성과 한계를 직접 확인한 실험입니다.",
    accent: "#14b8a6",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const categories: Category[] = ["SaaS", "도구", "앱", "실험"];
