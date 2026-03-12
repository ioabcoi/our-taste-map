# 기술 스택 결정 (Tech Decision)

> Our-Taste-Map의 기술 스택 선정 및 이유

**결정일:** 2026.02.XX

---

## 📋 최종 확정 스택

```
Frontend:  React + TypeScript
Styling:   TailwindCSS
Map API:   Kakao Map API
Backend:   Firebase (Firestore + Storage + Auth)
Hosting:   Vercel
```

---

## 🎯 Frontend Framework

### ✅ 선택: **React 18+ with TypeScript**

#### React를 선택한 이유
1. **생태계와 커뮤니티**
   - 가장 큰 생태계 (라이브러리, 컴포넌트 풍부)
   - 한국어 포함 학습 자료 방대
   - 문제 해결 시 레퍼런스 찾기 쉬움

2. **카카오맵 API 호환성**
   - React 예제 및 라이브러리 많음
   - `react-kakao-maps-sdk` 존재

3. **확장성**
   - v2.0에서 기능 추가 시 유리
   - Next.js로 전환 가능 (SSR 필요 시)

4. **취업 시장**
   - 가장 높은 수요
   - 포트폴리오 가치 높음

5. **팀 역량**
   - 학습 곡선 감수 가능
   - 장기적으로 더 유리

#### TypeScript를 선택한 이유
1. **타입 안정성**
   - 컴파일 타임에 에러 발견
   - 런타임 버그 감소

2. **개발 생산성**
   - 자동완성 우수
   - 리팩토링 안전

3. **코드 품질**
   - 명시적 타입으로 가독성 향상
   - 팀 협업 시 의사소통 명확

4. **Firebase 지원**
   - 공식 TypeScript 타입 제공
   - 타입 안전한 DB 쿼리

#### 대안 검토
- **Vue 3**: 배우기 쉽지만 생태계가 React보다 작음
- **Svelte**: 성능 좋지만 생태계 미성숙

---

## 🎨 Styling

### ✅ 선택: **TailwindCSS v3+**

#### 선택 이유
1. **디자인 시스템과의 궁합**
   - 이미 정의한 디자인 토큰과 잘 맞음
   - CSS 변수와 함께 사용 가능
   ```css
   /* tailwind.config.js */
   colors: {
     'primary': 'var(--color-first)',
     'secondary': 'var(--color-second)',
   }
   ```

2. **빠른 개발 속도**
   - 클래스명 고민 불필요
   - 일관된 스타일링
   - 프로토타이핑 빠름

3. **성능**
   - 사용하지 않는 스타일 자동 제거 (PurgeCSS)
   - 작은 번들 크기

4. **유틸리티 우선**
   - 반응형 디자인 쉬움
   - 다크모드 지원 용이 (v2.0)

5. **생태계**
   - 컴포넌트 라이브러리 많음
   - 플러그인 풍부

#### 대안 검토
- **Styled-components**: CSS-in-JS, 번들 크기 증가
- **Emotion**: Styled-components와 유사
- **CSS Modules**: 스타일 관리 번거로움

---

## 🗺️ Map API

### ✅ 선택: **Kakao Map API**

#### 선택 이유
1. **국내 데이터 정확도**
   - 한국 지역 최적화
   - 상세한 POI 정보
   - 정확한 주소 체계

2. **무료 사용량**
   - 일일 30만 건 무료
   - 개인 프로젝트 충분
   - 상업용도 전환 가능

3. **검색 API**
   - 장소 검색 API 우수
   - 주소-좌표 변환 쉬움
   - 카테고리 검색 지원

4. **문서화**
   - 한글 문서 완벽
   - 예제 코드 풍부
   - 커뮤니티 활발

5. **React 지원**
   - `react-kakao-maps-sdk` 라이브러리
   - TypeScript 타입 지원
   ```bash
   npm install react-kakao-maps-sdk
   ```

#### 사용 예정 기능
- **지도 표시**: 기본 지도 렌더링
- **마커**: 커스텀 마커 표시
- **InfoWindow**: 마커 클릭 시 정보 표시
- **장소 검색**: 키워드로 장소 검색
- **주소-좌표 변환**: Geocoder API

#### API 키 발급
1. Kakao Developers 가입
2. 애플리케이션 생성
3. Web 플랫폼 등록
4. JavaScript 키 발급

#### 대안 검토
- **네이버 지도**: 카카오와 유사, 약간 복잡
- **구글맵**: 유료, 국내 정확도 낮음

---

## 🔥 Backend

### ✅ 선택: **Firebase**

#### 구성
- **Firestore**: NoSQL 데이터베이스
- **Storage**: 이미지 저장
- **Authentication**: 사용자 인증 (v2.0)

#### Firestore를 선택한 이유
1. **실시간 데이터**
   - 실시간 업데이트 지원
   - 여러 기기 동기화 (v2.0)

2. **확장성**
   - 자동 스케일링
   - 트래픽 증가 대응

3. **무료 사용량**
   - 읽기: 5만/일
   - 쓰기: 2만/일
   - 저장: 1GB
   - → v1.0 충분

4. **개발 속도**
   - 백엔드 서버 불필요
   - SDK 설치만으로 사용
   - 복잡한 인프라 관리 불필요

5. **통합 서비스**
   - Storage, Auth 같은 프로젝트
   - 일관된 SDK
   - 통합 대시보드

#### Storage를 선택한 이유
1. **이미지 호스팅**
   - 사진 업로드 간편
   - CDN 자동 제공
   - 리사이징 가능

2. **무료 사용량**
   - 저장: 5GB
   - 다운로드: 1GB/일
   - → v1.0 충분

3. **보안 규칙**
   - 파일별 권한 설정
   - 용량 제한 설정

#### 데이터 구조 (Firestore)
```javascript
// Collections
places/
  {placeId}/
    name: string
    address: string
    category: "restaurant" | "cafe" | "spot"
    latitude: number
    longitude: number
    rating: number
    shortReview: string
    detailReview: string
    recommendMenu: string
    photos: string[] // Storage URLs
    groups: string[]
    visitDate: string
    createdAt: timestamp
    updatedAt: timestamp
    // v2.0: userId: string

groups/
  {groupId}/
    name: string
    color: string
    createdAt: timestamp
    // v2.0: userId: string
```

#### 비용 예상 (v1.0)
- 장소 100개 등록
- 사진 장소당 3장 (5MB씩)
- 일일 조회 100회

**예상 비용:**
- Firestore: 무료 범위 내
- Storage: 1.5GB / 5GB (무료)
- 총: **$0/월**

#### 대안 검토
- **Supabase**: PostgreSQL, 오픈소스지만 생태계 작음
- **AWS Amplify**: 복잡함
- **직접 서버**: 관리 부담

---

## 🚀 Hosting

### ✅ 선택: **Vercel**

#### 선택 이유
1. **React 최적화**
   - Next.js 제작사
   - React 빌드 최적화

2. **자동 배포**
   - GitHub 연동
   - Push 시 자동 배포
   - Preview 배포 (PR마다)

3. **성능**
   - 글로벌 CDN
   - Edge Network
   - 빠른 응답속도

4. **무료 플랜**
   - 개인 프로젝트 충분
   - 커스텀 도메인 지원
   - SSL 자동

5. **개발 경험**
   - CLI 도구 우수
   - 실시간 로그
   - 분석 도구

#### 배포 플로우
```bash
1. GitHub에 Push
   ↓
2. Vercel 자동 감지
   ↓
3. 빌드 시작
   ↓
4. 배포 완료
   ↓
5. URL 생성 (our-taste-map.vercel.app)
```

#### 대안 검토
- **Netlify**: Vercel과 유사, React는 Vercel이 약간 우위
- **GitHub Pages**: 정적 사이트만, SPA 라우팅 불편
- **Firebase Hosting**: Firebase 사용 시 고려 가능

---

## 📦 추가 라이브러리

### 필수 라이브러리
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "react-kakao-maps-sdk": "^1.1.0",
    "firebase": "^10.7.0"
  }
}
```

### 유틸리티 라이브러리
```json
{
  "dependencies": {
    "dayjs": "^1.11.0",           // 날짜 처리
    "react-hook-form": "^7.49.0", // 폼 관리
    "zustand": "^4.4.0",          // 상태 관리 (가벼움)
    "react-hot-toast": "^2.4.0",  // 토스트 알림
    "lucide-react": "^0.300.0"    // 아이콘
  }
}
```

### 개발 도구
```json
{
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "vite": "^5.0.0",              // 빌드 도구
    "eslint": "^8.56.0",           // 린터
    "prettier": "^3.1.0",          // 포매터
    "autoprefixer": "^10.4.0",     // PostCSS
    "postcss": "^8.4.0"
  }
}
```

---

## 🛠️ 개발 환경

### 빌드 도구: **Vite**
- Create React App 대신 Vite 사용
- 빠른 개발 서버
- 빠른 빌드 속도
- TypeScript 기본 지원

### 패키지 매니저: **npm**
- 기본 패키지 매니저 사용
- (또는 pnpm, yarn 선택 가능)

### 코드 품질
- **ESLint**: 코드 린팅
- **Prettier**: 코드 포맷팅
- **Husky**: Git Hooks (커밋 전 린트)

---

## 📊 기술 스택 다이어그램

```
┌─────────────────────────────────────┐
│          User Browser               │
└──────────────┬──────────────────────┘
               │
               ↓
┌─────────────────────────────────────┐
│   Vercel (Hosting + CDN)            │
│   - React App                       │
│   - TailwindCSS                     │
└──────────────┬──────────────────────┘
               │
      ┌────────┴────────┐
      ↓                 ↓
┌──────────────┐  ┌──────────────┐
│ Kakao Map    │  │  Firebase    │
│   API        │  │  - Firestore │
│              │  │  - Storage   │
│              │  │  - Auth(v2)  │
└──────────────┘  └──────────────┘
```

---

## ⚠️ 기술적 제약사항

### Firestore 제약
1. **쿼리 제한**
   - 복잡한 조인 불가
   - 해결: 비정규화 설계

2. **트랜잭션 제한**
   - 500개 문서까지
   - 해결: 배치 쓰기 사용

### Kakao Map 제약
1. **일일 호출 제한**
   - 30만 건/일
   - 해결: 캐싱 전략

2. **상업용 전환**
   - 트래픽 많아지면 유료
   - 해결: v2.0에서 고려

---

## 🔄 향후 확장 계획

### v2.0 기술 추가
- **Firebase Authentication**: 사용자 인증
- **Next.js**: SSR 필요 시 마이그레이션
- **PWA**: 오프라인 지원
- **Image CDN**: 이미지 최적화

### 모니터링
- **Google Analytics**: 사용자 분석
- **Sentry**: 에러 트래킹

---

## 📝 결정 체크리스트

- [x] Frontend Framework 선택
- [x] 언어 선택 (TypeScript)
- [x] 스타일링 도구 선택
- [x] 지도 API 선택
- [x] 데이터베이스 선택
- [x] 이미지 저장소 선택
- [x] 호스팅 선택
- [x] 빌드 도구 선택
- [ ] 개발 환경 세팅 (다음 단계)

---

## 🔗 참고 링크

### 공식 문서
- **React**: https://react.dev/
- **TypeScript**: https://www.typescriptlang.org/
- **TailwindCSS**: https://tailwindcss.com/
- **Kakao Map**: https://apis.map.kakao.com/
- **Firebase**: https://firebase.google.com/docs
- **Vercel**: https://vercel.com/docs

### 유용한 자료
- **Vite**: https://vitejs.dev/
- **React Kakao Maps SDK**: https://github.com/JaeSeoKim/react-kakao-maps-sdk
- **Zustand**: https://github.com/pmndrs/zustand

---

## 📝 변경 이력

| 날짜 | 내용 | 작성자 |
|------|------|--------|
| 2026.02.XX | 기술 스택 최종 확정 | - |

---

## 💬 기술 선택 근거 요약

**빠른 개발 속도 + 확장성 + 안정성**

1. **React + TypeScript**: 생태계, 타입 안정성
2. **TailwindCSS**: 디자인 시스템과 궁합, 빠른 개발
3. **Kakao Map**: 국내 정확도, 무료 사용량
4. **Firebase**: 백엔드리스, 빠른 개발, 확장성
5. **Vercel**: React 최적화, 자동 배포

→ **토이프로젝트를 실제 서비스로 확장 가능한 구조**