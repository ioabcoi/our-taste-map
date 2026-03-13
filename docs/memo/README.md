# 📚 학습 메모

프로젝트 진행하면서 배운 것들을 날짜별로 정리

---

## 2026년 2월

- [2026-02-11](2026-02-11.md) - 프로젝트 킥오프, Git 규칙, 기획 문서 시작
- [2026-02-12](2026-02-12.md) - 방문일 기능 추가, User Flow 작성, 문서 관리 전략
- [2026-02-13](2026-02-13.md) - IA 설계, 와이어프레임이란?

## 2026년 3월

- [2026-03-11](2026-03-11.md) - 와이어프레임 가이드, 디자인 시스템 완성
- [2026-03-12](2026-03-12.md) - 기술 스택 확정, DB 스키마 설계
- [2026-03-13](2026-03-13.md) - 개발 환경 세팅, 첫 화면 구현

---

## 주제별 인덱스

### Git & 협업
- [커밋 메시지 규칙](2026-02-11.md#커밋-메시지) | [.github/COMMIT_CONVENTION.md](../../../.github/COMMIT_CONVENTION.md)
- [브랜치 전략](2026-02-11.md#브랜치-전략) | [.github/BRANCH_STRATEGY.md](../../../.github/BRANCH_STRATEGY.md)

### 기획
- [v1.0 vs v2.0 전략](2026-02-11.md#버전-전략) | [2026-02-12.md](2026-02-12.md#단계적-개발-전략)
- [방문일 vs 작성일](2026-02-12.md#방문일-기능)
- [IA (Information Architecture)](2026-02-13.md#ia) | [docs/planning/04-IA.md](../planning/04-IA.md)
- [사용자 플로우](2026-02-12.md#사용자-플로우) | [docs/planning/03-user-flow.md](../planning/03-user-flow.md)
- [사용자 페르소나](../planning/02-user-persona.md)
- [기능 목록](../planning/01-feature-list.md)
- [문서 관리 전략 (docs vs Wiki vs Issues)](2026-02-12.md#-문서-관리-전략)

### 디자인
- [와이어프레임이란?](2026-02-13.md#와이어프레임) | [2026-03-11.md](2026-03-11.md#-와이어프레임이란)
- [와이어프레임 vs 목업 vs 프로토타입](2026-02-13.md#와이어프레임-비교)
- [와이어프레임 도구 선택 (Figma/손그림/Excalidraw)](2026-03-11.md#1단계-도구-선택)
- [컬러 팔레트 (#222831, #393E46, #00ADB5, #EEEEEE)](2026-03-11.md#-완성) | [docs/design/color-palette.md](../design/color-palette.md)
- [타이포그래피 (Pretendard + Inter)](2026-03-11.md#-완성) | [docs/design/typography.md](../design/typography.md)
- [디자인 시스템](2026-03-11.md#-완성) | [docs/design/design-system.md](../design/design-system.md)

### 기술 스택 결정
- [React 선택 이유](2026-03-12.md#react)
- [TypeScript 선택 이유](2026-03-12.md#typescript-강력-추천)
- [TailwindCSS 선택 이유](2026-03-12.md#tailwindcss-추천)
- [카카오맵 API 선택 이유](2026-03-12.md#카카오맵)
- [Firebase 선택 이유](2026-03-12.md#firebase)
- [Vercel 선택 이유](2026-03-12.md#vercel-추천)
- [최종 확정 스택](2026-03-12.md#-기술-스택-확정-완료) | [docs/development/tech-decision.md](../development/tech-decision.md)

### 데이터베이스
- [Firestore 컬렉션 구조](2026-03-12.md#1-컬렉션-구조)
- [places 필드 설계](2026-03-12.md#2-places-문서-필드)
- [groups 컬렉션](2026-03-12.md#1-컬렉션-구조)
- [인덱스 설계](../development/db-schema.md#인덱스-indexes)
- [보안 규칙 (v1.0/v2.0)](../development/db-schema.md#보안-규칙-security-rules)
- [v1.0 → v2.0 마이그레이션 전략](2026-02-12.md#-v10-우리-전용)
- [DB 스키마 확장 가능하게 설계하기](2026-02-12.md#-핵심-포인트)

### 개발 환경
- [Vite 프로젝트 생성](2026-03-13.md#-step-1-프로젝트-생성)
- [폴더 구조 설계](2026-03-13.md#-step-2-폴더-구조-잡기)
- [TailwindCSS 설치](2026-03-13.md#-step-3-tailwindcss-설치)
- [tailwind.config.js 설정](2026-03-13.md#32-tailwindconfigjs-수정)
- [postcss.config.js 설정](2026-03-13.md#option-3-수동으로-파일-생성)
- [index.css 커스텀 CSS](2026-03-13.md#33-srcindexcss-수정)

### 컴포넌트
- [Header 컴포넌트 구현](2026-03-13.md#option-4-시작-)
- [디자인 시스템 적용](2026-03-13.md#-새로운-화면에는)
- [버튼 스타일 (btn-primary, btn-secondary)](2026-03-13.md#-새로운-화면에는)
- [카드 스타일](2026-03-13.md#-새로운-화면에는)

### 트러블슈팅
- [npx 명령어 에러 (could not determine executable)](2026-03-13.md#npx-tailwindcss-init--p-에러)
- [package.json 주석 에러 (JSONParseError)](2026-03-13.md#npm-create-vite-하면-프로젝트-폴더-안에-있는-파일들이-덮어써질-수-있어요)
- [Tailwind v4 PostCSS 에러](2026-03-13.md#에러)
- [Tailwind v3.4.1로 다운그레이드 방법](2026-03-13.md#-해결-방법)
- [npm create vite로 파일 덮어쓰기 문제](2026-03-13.md#npm-create-vite-하면-프로젝트-폴더-안에-있는-파일들이-덮어써질-수-있어요)
- [.gitignore, package.json 파일 찾기 (숨김 파일)](2026-03-13.md#-파일-보는-방법)

### 데이터 구조 & 기획
- [엑셀/JSON 데이터 구조 설계](2026-02-11.md#2-데이터-구조-설계-exceljson-예시)
- [카카오맵 API 좌표 변환 (Geocoding)](2026-02-11.md#4-체크리스트-성공적인-개발을-위해)
- [엑셀 연동 구현 (xlsx 라이브러리)](2026-02-11.md#엑셀-연동-구현을-위한-기술-팁)

---

## 📝 작성 팁

### 형식 자유롭게!
```markdown
# YYYY-MM-DD

## 오늘 배운 것
- 개념 정리
- 새로 알게 된 것

## 궁금했던 것
- [ ] 추가로 공부할 것

## 오늘의 결정
- 중요한 의사결정 기록

## 트러블슈팅
- 문제 상황
- 해결 방법

## 참고 링크
- 유용한 자료
```

---

## 🎯 활용 방법

1. **복습**: 날짜별로 찾아서 복습
2. **포트폴리오**: 프로젝트 진행 과정 정리
3. **공유**: 남편과 진행 상황 공유
4. **트러블슈팅**: 같은 에러 발생 시 빠른 해결
5. **온보딩**: 새로 합류하는 사람에게 프로젝트 히스토리 공유

---

## 📊 진행 상황

### 완료한 단계 (2026-02 ~ 2026-03)

**기획 단계 (2주)**
- ✅ 프로젝트 킥오프 (2026-02-11)
- ✅ Git 협업 규칙 정립 (2026-02-11)
- ✅ 기능 목록 정리 (2026-02-11)
- ✅ v1.0/v2.0 전략 수립 (2026-02-12)
- ✅ 사용자 플로우 작성 (2026-02-12)
- ✅ IA 설계 (2026-02-13)
- ✅ 와이어프레임 가이드 (2026-02-13, 2026-03-11)

**디자인 단계 (1주)**
- ✅ 컬러 팔레트 정의 (2026-03-11)
- ✅ 타이포그래피 시스템 (2026-03-11)
- ✅ 디자인 시스템 완성 (2026-03-11)

**개발 준비 (1주)**
- ✅ 기술 스택 확정 (2026-03-12)
- ✅ DB 스키마 설계 (2026-03-12)
- ✅ 개발 환경 세팅 (2026-03-13)
- ✅ 첫 화면 구현 (2026-03-13)

### 다음 단계

**Phase 1: 기초 인프라 (1~2일)**
- [ ] Firebase 프로젝트 생성 & 연동
- [ ] 카카오맵 API 키 발급
- [ ] 환경변수 세팅

**Phase 2: 핵심 기능 개발 (1주)**
- [ ] 지도 뷰 구현
- [ ] 장소 CRUD
- [ ] 카테고리 필터링
- [ ] 검색 기능

**Phase 3: 부가 기능 (1주)**
- [ ] 사진 업로드
- [ ] 즐겨찾기 그룹 관리
- [ ] 반응형 디자인

---

## 💡 배운 것 요약

### 프로젝트 관리
- 문서는 살아있는 것 - 지속적으로 업데이트
- docs vs Wiki vs Issues 구분하여 사용
- 데일리 메모로 진행 과정 기록

### 기술 선택
- 생태계, 확장성, 취업 시장 고려
- v1.0 단순하게, v2.0 확장 가능하게 설계
- 무료 티어 충분히 활용 (Firebase, Vercel, Kakao Map)

### 개발 프로세스
- Mobile First 설계
- 컴포넌트 재사용성 고려
- 트러블슈팅 기록의 중요성

---

## 🔗 유용한 링크

### 공식 문서
- React: https://react.dev/
- TypeScript: https://www.typescriptlang.org/
- TailwindCSS: https://tailwindcss.com/
- Firebase: https://firebase.google.com/docs
- Kakao Map API: https://apis.map.kakao.com/

### 학습 자료
- Pretendard 폰트: https://github.com/orioncactus/pretendard
- Inter 폰트: https://rsms.me/inter/
- Vite: https://vitejs.dev/

### 도구
- Figma: https://figma.com
- Excalidraw: https://excalidraw.com
- Color Contrast Checker: https://webaim.org/resources/contrastchecker/