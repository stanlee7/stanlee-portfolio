# stanlee-portfolio

스탠리(stanlee7)의 개인 브랜딩 허브. 깃헙에 흩어진 프로젝트들을 케이스 스터디로 큐레이션해 보여주는 포트폴리오 사이트입니다.

## 구조

- `data/projects.ts` — 모든 콘텐츠의 단일 소스. **새 프로젝트 추가 = 여기에 객체 1개 추가.**
- `app/page.tsx` — 홈 (히어로 + 카테고리 필터 그리드 + 링크-인-바이오)
- `app/projects/[slug]/page.tsx` — 프로젝트 케이스 스터디 (왜/어떻게/결과)
- `public/screenshots/` — 라이브 서비스 스크린샷
- `public/og/` — SNS 공유 카드 (1200×630)

## 새 프로젝트 추가하는 법

1. `data/projects.ts`에 프로젝트 객체 추가
2. 라이브 URL이 있으면 `scripts/capture.mjs`의 targets에 추가 후 실행:
   ```
   node scripts/capture.mjs
   ```
3. OG 카드 재생성:
   ```
   node --experimental-strip-types scripts/og.mjs
   ```
4. 커밋 & 푸시 → Vercel 자동 배포

## 개발

```
npm run dev    # http://localhost:3000
npm run build  # 프로덕션 빌드 (전체 정적 생성)
```

SNS 운영 가이드는 [MARKETING.md](MARKETING.md) 참고.
