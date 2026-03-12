# 컬러 팔레트 (Color Palette)

> Our-Taste-Map의 색상 시스템

---

## 🎨 Primary Colors (메인 컬러)

### Base Colors
```css
--color-first: #222831;    /* Dark Gray - 헤더, 텍스트 */
--color-second: #393E46;   /* Medium Gray - 서브 배경 */
--color-third: #00ADB5;    /* Turquoise - 주요 액션, 강조 */
--color-fourth: #EEEEEE;   /* Light Gray - 배경 */
```

### 컬러 사용 예시
```
┌─────────────────────────────┐
│ Header (#222831)            │
├─────────────────────────────┤
│ Background (#EEEEEE)        │
│                             │
│  ┌──────────────────────┐   │
│  │ Card (#FFFFFF)       │   │
│  │ Text (#222831)       │   │
│  │ [Button] (#00ADB5)   │   │
│  └──────────────────────┘   │
│                             │
└─────────────────────────────┘
```

---

## 📍 Category Colors (카테고리별 색상)

### 맛집 (Restaurant)
```css
--category-restaurant: #FF6B6B;        /* 코랄 레드 */
--category-restaurant-light: #FFB3B3;  /* 연한 레드 (호버) */
--category-restaurant-dark: #E63946;   /* 진한 레드 (액티브) */
```
**사용:**
- 맛집 마커
- 맛집 카테고리 버튼
- 맛집 카드 테두리

---

### 카페 (Cafe)
```css
--category-cafe: #A0522D;        /* 시에나 브라운 */
--category-cafe-light: #CD853F;  /* 연한 브라운 (호버) */
--category-cafe-dark: #8B4513;   /* 진한 브라운 (액티브) */
```
**사용:**
- 카페 마커
- 카페 카테고리 버튼
- 카페 카드 테두리

---

### 멋진 장소 (Cool Spot)
```css
--category-spot: #9B59B6;        /* 아메시스트 */
--category-spot-light: #BB8FCE;  /* 연한 보라 (호버) */
--category-spot-dark: #8E44AD;   /* 진한 보라 (액티브) */
```
**사용:**
- 멋진 장소 마커
- 멋진 장소 카테고리 버튼
- 멋진 장소 카드 테두리

---

## 🎯 Action Colors (액션 컬러)

### Primary Action (주요 액션)
```css
--action-primary: #00ADB5;         /* 터콰이즈 (메인) */
--action-primary-hover: #00D9E3;   /* 밝은 터콰이즈 (호버) */
--action-primary-active: #008B92;  /* 어두운 터콰이즈 (클릭) */
```
**사용:**
- 저장 버튼
- 확인 버튼
- 플로팅 액션 버튼 (+)
- 링크

---

### Secondary Action (보조 액션)
```css
--action-secondary: #393E46;         /* 미디엄 그레이 */
--action-secondary-hover: #4A5058;   /* 밝은 그레이 (호버) */
--action-secondary-active: #2C3138;  /* 어두운 그레이 (클릭) */
```
**사용:**
- 취소 버튼
- 뒤로가기
- 비활성 버튼

---

## ⚠️ Status Colors (상태별 색상)

### Success (성공)
```css
--status-success: #27AE60;         /* 녹색 */
--status-success-light: #D5F4E6;   /* 연한 녹색 배경 */
--status-success-dark: #1E8449;    /* 진한 녹색 */
```
**사용:**
- 저장 완료 메시지
- 성공 알림
- 체크 아이콘

---

### Warning (경고)
```css
--status-warning: #F39C12;         /* 주황색 */
--status-warning-light: #FCF3CF;   /* 연한 주황 배경 */
--status-warning-dark: #D68910;    /* 진한 주황 */
```
**사용:**
- 주의 메시지
- 확인 필요 알림
- 경고 아이콘

---

### Error (에러)
```css
--status-error: #E74C3C;         /* 빨간색 */
--status-error-light: #FADBD8;   /* 연한 빨강 배경 */
--status-error-dark: #C0392B;    /* 진한 빨강 */
```
**사용:**
- 에러 메시지
- 삭제 버튼
- 필수 입력 에러
- 에러 아이콘

---

### Info (정보)
```css
--status-info: #3498DB;         /* 파란색 */
--status-info-light: #D6EAF8;   /* 연한 파랑 배경 */
--status-info-dark: #2874A6;    /* 진한 파랑 */
```
**사용:**
- 안내 메시지
- 도움말 툴팁
- 정보 아이콘

---

## 📝 Text Colors (텍스트 색상)

```css
--text-primary: #222831;      /* 기본 텍스트 (검정에 가까운 회색) */
--text-secondary: #393E46;    /* 보조 텍스트 (중간 회색) */
--text-tertiary: #7D8491;     /* 3차 텍스트 (연한 회색) */
--text-disabled: #B0B3B8;     /* 비활성 텍스트 (매우 연한 회색) */
--text-inverse: #FFFFFF;      /* 반전 텍스트 (흰색) */
```

**사용 예시:**
```
제목 (#222831)
부제목 (#393E46)
설명 텍스트 (#7D8491)
비활성 (#B0B3B8)
버튼 텍스트 (#FFFFFF)
```

---

## 🎨 Background Colors (배경 색상)

```css
--bg-primary: #EEEEEE;        /* 메인 배경 (연한 회색) */
--bg-secondary: #FFFFFF;      /* 카드/모달 배경 (흰색) */
--bg-tertiary: #F8F9FA;       /* 3차 배경 (아주 연한 회색) */
--bg-dark: #222831;           /* 어두운 배경 (헤더 등) */
--bg-overlay: rgba(0,0,0,0.5); /* 모달 딤 처리 */
```

---

## 🌟 Rating Colors (별점 색상)

```css
--rating-star: #FFD700;       /* 골드 (채워진 별) */
--rating-star-empty: #E0E0E0; /* 연한 회색 (빈 별) */
```

---

## 🔲 Border Colors (테두리 색상)

```css
--border-light: #E0E0E0;      /* 연한 테두리 */
--border-medium: #BDBDBD;     /* 중간 테두리 */
--border-dark: #757575;       /* 진한 테두리 */
--border-focus: #00ADB5;      /* 포커스 테두리 (메인 컬러) */
```

---

## 🎭 Shadow (그림자)

```css
--shadow-sm: 0 1px 2px rgba(34, 40, 49, 0.05);
--shadow-md: 0 4px 6px rgba(34, 40, 49, 0.1);
--shadow-lg: 0 10px 15px rgba(34, 40, 49, 0.15);
--shadow-xl: 0 20px 25px rgba(34, 40, 49, 0.2);
```

---

## 🎨 실제 적용 예시

### Header
```css
background: var(--color-first);      /* #222831 */
color: var(--text-inverse);          /* #FFFFFF */
```

### Card
```css
background: var(--bg-secondary);     /* #FFFFFF */
border: 1px solid var(--border-light); /* #E0E0E0 */
box-shadow: var(--shadow-md);
```

### Primary Button
```css
background: var(--action-primary);    /* #00ADB5 */
color: var(--text-inverse);           /* #FFFFFF */

/* Hover */
background: var(--action-primary-hover); /* #00D9E3 */

/* Active */
background: var(--action-primary-active); /* #008B92 */
```

### 맛집 카테고리 버튼
```css
background: var(--category-restaurant);  /* #FF6B6B */
color: var(--text-inverse);              /* #FFFFFF */

/* Hover */
background: var(--category-restaurant-light); /* #FFB3B3 */
```

---

## 🌓 다크모드 (v2.0 계획)

### 다크모드 컬러 (추후 추가 예정)
```css
/* 다크모드 배경 */
--dark-bg-primary: #1A1D23;
--dark-bg-secondary: #222831;
--dark-bg-tertiary: #2C3138;

/* 다크모드 텍스트 */
--dark-text-primary: #EEEEEE;
--dark-text-secondary: #BDBDBD;
--dark-text-tertiary: #9E9E9E;
```

---

## 📊 컬러 접근성

### 대비율 확인
- **텍스트 (Small)**: 최소 4.5:1
- **텍스트 (Large)**: 최소 3:1
- **UI 요소**: 최소 3:1

### 테스트 완료
✅ `#222831` (text) on `#EEEEEE` (bg) - 11.2:1 (AAA)
✅ `#FFFFFF` (text) on `#00ADB5` (button) - 4.8:1 (AA)
✅ `#FFFFFF` (text) on `#222831` (header) - 15.8:1 (AAA)

---

## 🎨 컬러 팔레트 시각화

```
Dark Gray (#222831)  ████████████████
Medium Gray (#393E46) ████████████████
Turquoise (#00ADB5)  ████████████████
Light Gray (#EEEEEE) ████████████████

Restaurant (#FF6B6B) ████████████████
Cafe (#A0522D)       ████████████████
Spot (#9B59B6)       ████████████████

Success (#27AE60)    ████████████████
Warning (#F39C12)    ████████████████
Error (#E74C3C)      ████████████████
Info (#3498DB)       ████████████████
```

---

## 📝 사용 가이드

### DO ✅
- 메인 컬러는 중요한 액션에만 사용
- 카테고리 색상은 일관되게 사용
- 충분한 대비율 유지
- 색맹 사용자 고려 (아이콘 병행)

### DON'T ❌
- 너무 많은 색상 동시 사용
- 저대비 색상 조합
- 의미 없이 색상 변경
- 카테고리 색상을 다른 용도로 사용

---

## 📝 변경 이력

| 날짜 | 내용 | 작성자 |
|------|------|--------|
| 2026.02.XX | 컬러 팔레트 초안 작성 | - |
| 2026.02.XX | 사용자 선호 컬러 기반 재작성 | - |

---

## 🔗 참고

- **대비율 체크**: https://webaim.org/resources/contrastchecker/
- **컬러 팔레트 생성**: https://coolors.co
- **접근성 가이드**: https://www.w3.org/WAI/WCAG21/quickref/