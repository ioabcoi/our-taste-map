# 🗺️ Our-Taste-Map

> A personalized map to record and share our favorite restaurants, cafes, and cool spots

우리의 취향을 담은 맛집, 카페, 멋진 장소 기록 지도

## 📌 프로젝트 소개

Our-Taste-Map(맛멋집)은 방문했던 맛집, 카페, 그리고 멋진 장소들을 지도에 기록하고 관리할 수 있는 웹 애플리케이션입니다.
단순한 북마크를 넘어서, 별점, 사진, 리뷰와 함께 우리만의 취향 데이터베이스를 만들어갑니다.

### 💡 왜 만들게 되었나요?
- 기존 맛집 앱들은 타인의 리뷰가 많아 내 취향을 찾기 어려움
- 방문했던 곳을 지역별, 카테고리별로 한눈에 보고 싶음
- 맛집뿐 아니라 카페, 멋진 공간까지 한 곳에서 관리하고 싶음
- 지인들과 취향 정보를 쉽게 공유하고 싶음

## ✨ 주요 기능

### v1.0 (진행중)
- [ ] 📍 지도/리스트 뷰 전환
- [ ] 🏷️ 카테고리별 분류 (맛집/카페/멋진 장소)
- [ ] ⭐ 별점 및 한줄평 기록
- [ ] 📸 사진 업로드 (장소당 N장)
- [ ] 🔍 검색 기능 (이름, 음식, 한줄평)
- [ ] 📌 즐겨찾기 그룹 (지역별)
- [ ] 📍 현재 위치 기반 장소 찾기
- [ ] 💬 상세 리뷰 모달

### v2.0 (예정)
- [ ] 🔗 공유 링크 생성
- [ ] 📊 엑셀 일괄 업로드
- [ ] 📅 방문 날짜 기록
- [ ] 💰 가격대 표시
- [ ] 🔄 재방문 의사 표시

## 🛠️ 기술 스택

### Frontend
- **Framework**: React (or Vue - 결정 예정)
- **Language**: TypeScript
- **Styling**: TailwindCSS (or Styled-components)
- **Map**: Kakao Map API (or Naver/Google Maps)

### Backend
- **Database**: Firebase (or Supabase - 결정 예정)
- **Storage**: Firebase Storage (이미지)

### DevOps
- **Hosting**: Vercel (or Netlify)
- **Version Control**: Git & GitHub

## 📂 프로젝트 구조
```
our-taste-map/
├── docs/              # 기획 문서, 와이어프레임
├── src/
│   ├── components/    # 재사용 컴포넌트
│   ├── pages/         # 페이지 컴포넌트
│   ├── hooks/         # 커스텀 훅
│   ├── utils/         # 유틸리티 함수
│   └── styles/        # 스타일 파일
├── public/            # 정적 파일
└── README.md
```

## 🎯 마일스톤

### Phase 1: 기획 및 설계 (2주)
- [x] 기능 정의
- [ ] IA 구조 설계
- [ ] 와이어프레임 작성
- [ ] 기술 스택 확정
- [ ] DB 스키마 설계

### Phase 2: 개발 환경 구축 (1주)
- [ ] 프로젝트 초기 설정
- [ ] 개발 환경 세팅
- [ ] 컴포넌트 구조 설계

### Phase 3: 핵심 기능 개발 (4주)
- [ ] 지도 연동 및 마커 표시
- [ ] 장소 추가/수정/삭제 CRUD
- [ ] 카테고리 필터링
- [ ] 검색 기능

### Phase 4: 부가 기능 개발 (3주)
- [ ] 상세 리뷰 모달
- [ ] 사진 업로드
- [ ] 즐겨찾기 그룹
- [ ] 반응형 디자인

### Phase 5: 테스트 및 배포 (1주)
- [ ] 기능 테스트
- [ ] 버그 수정
- [ ] 배포

## 🖼️ 스크린샷
> 개발 진행 후 업데이트 예정

## 👥 팀원
- **기획/디자인/개발**: [Your Name]
- **개발**: [남편 Name]

## 📝 개발 일지
개발 과정과 고민들은 [Issues](../../issues)와 [Wiki](../../wiki)에 기록합니다.

## 📄 라이선스
MIT License

---

⭐ 이 프로젝트가 마음에 드신다면 Star를 눌러주세요!
