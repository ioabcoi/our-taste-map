# 타이포그래피 (Typography)

> Our-Taste-Map의 폰트 시스템

---

## 📝 Font Family

### 한글 폰트
```css
--font-primary: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
```

**Pretendard**
- **제작**: Kil Hyung-jin
- **라이선스**: SIL Open Font License 1.1 (무료)
- **특징**: 
  - 한글, 영문, 숫자 모두 지원
  - 9가지 Weight 지원 (Thin ~ Black)
  - 가독성 우수
  - Apple SD Gothic Neo 대체 폰트
- **CDN**:
```html
<link rel="stylesheet" as="style" crossorigin 
href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
```

---

### 영문 폰트
```css
--font-secondary: 'Inter', 'Pretendard', sans-serif;
```

**Inter**
- **제작**: Rasmus Andersson
- **라이선스**: SIL Open Font License 1.1 (무료)
- **특징**:
  - 스크린 가독성 최적화
  - Variable Font 지원
  - 숫자 가독성 우수
  - GitHub, Notion 등에서 사용
- **CDN**:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

---

### 고정폭 폰트 (코드용)
```css
--font-mono: 'JetBrains Mono', 'Consolas', 'Monaco', monospace;
```

**사용:**
- 코드 스니펫 (있을 경우)
- 숫자 정렬이 중요한 경우 (선택)

---

## 📏 Font Size Scale

### 모바일 기준 (Mobile First)
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
```

### 데스크톱 (Desktop - 1024px~)
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.25rem;    /* 20px */
--text-xl: 1.5rem;     /* 24px */
--text-2xl: 1.875rem;  /* 30px */
--text-3xl: 2.25rem;   /* 36px */
--text-4xl: 3rem;      /* 48px */
```

---

## 📊 Font Weight

```css
--font-light: 300;     /* 얇음 */
--font-regular: 400;   /* 기본 */
--font-medium: 500;    /* 중간 */
--font-semibold: 600;  /* 세미볼드 */
--font-bold: 700;      /* 굵음 */
```

---

## 📐 Line Height (줄 간격)

```css
--leading-none: 1;        /* 100% - 타이트 */
--leading-tight: 1.25;    /* 125% - 제목 */
--leading-snug: 1.375;    /* 137.5% - 짧은 텍스트 */
--leading-normal: 1.5;    /* 150% - 본문 기본 */
--leading-relaxed: 1.625; /* 162.5% - 긴 본문 */
--leading-loose: 2;       /* 200% - 여유 */
```

---

## 🔤 Letter Spacing (자간)

```css
--tracking-tighter: -0.05em;  /* -5% */
--tracking-tight: -0.025em;   /* -2.5% */
--tracking-normal: 0;         /* 0% - 기본 */
--tracking-wide: 0.025em;     /* 2.5% */
--tracking-wider: 0.05em;     /* 5% */
--tracking-widest: 0.1em;     /* 10% */
```

---

## 🎯 Typography Scale (실제 적용)

### Heading (제목)

#### H1 - Page Title
```css
font-family: var(--font-primary);
font-size: var(--text-3xl);      /* 30px / 36px */
font-weight: var(--font-bold);   /* 700 */
line-height: var(--leading-tight); /* 1.25 */
letter-spacing: var(--tracking-tight); /* -0.025em */
color: var(--text-primary);
```
**사용:** 페이지 타이틀 (거의 사용 안 함 - SPA)

---

#### H2 - Section Title
```css
font-family: var(--font-primary);
font-size: var(--text-2xl);      /* 24px / 30px */
font-weight: var(--font-semibold); /* 600 */
line-height: var(--leading-tight); /* 1.25 */
letter-spacing: var(--tracking-tight); /* -0.025em */
color: var(--text-primary);
```
**사용:** 모달 제목, 섹션 제목

---

#### H3 - Subsection Title
```css
font-family: var(--font-primary);
font-size: var(--text-xl);       /* 20px / 24px */
font-weight: var(--font-semibold); /* 600 */
line-height: var(--leading-snug); /* 1.375 */
letter-spacing: var(--tracking-normal); /* 0 */
color: var(--text-primary);
```
**사용:** 카드 제목, 서브섹션

---

#### H4 - Card Title
```css
font-family: var(--font-primary);
font-size: var(--text-lg);       /* 18px / 20px */
font-weight: var(--font-medium);  /* 500 */
line-height: var(--leading-snug); /* 1.375 */
letter-spacing: var(--tracking-normal); /* 0 */
color: var(--text-primary);
```
**사용:** 장소명, 카드 타이틀

---

### Body (본문)

#### Body Large
```css
font-family: var(--font-primary);
font-size: var(--text-lg);       /* 18px / 20px */
font-weight: var(--font-regular); /* 400 */
line-height: var(--leading-relaxed); /* 1.625 */
letter-spacing: var(--tracking-normal); /* 0 */
color: var(--text-primary);
```
**사용:** 중요한 설명, 강조 본문

---

#### Body Medium (기본)
```css
font-family: var(--font-primary);
font-size: var(--text-base);     /* 16px */
font-weight: var(--font-regular); /* 400 */
line-height: var(--leading-normal); /* 1.5 */
letter-spacing: var(--tracking-normal); /* 0 */
color: var(--text-primary);
```
**사용:** 일반 본문, 리뷰 내용

---

#### Body Small
```css
font-family: var(--font-primary);
font-size: var(--text-sm);       /* 14px */
font-weight: var(--font-regular); /* 400 */
line-height: var(--leading-normal); /* 1.5 */
letter-spacing: var(--tracking-normal); /* 0 */
color: var(--text-secondary);
```
**사용:** 부가 정보, 메타 데이터, 날짜

---

### Label & Caption

#### Label
```css
font-family: var(--font-primary);
font-size: var(--text-sm);       /* 14px */
font-weight: var(--font-medium);  /* 500 */
line-height: var(--leading-snug); /* 1.375 */
letter-spacing: var(--tracking-normal); /* 0 */
color: var(--text-primary);
```
**사용:** 폼 라벨, 버튼 텍스트

---

#### Caption
```css
font-family: var(--font-primary);
font-size: var(--text-xs);       /* 12px */
font-weight: var(--font-regular); /* 400 */
line-height: var(--leading-normal); /* 1.5 */
letter-spacing: var(--tracking-normal); /* 0 */
color: var(--text-tertiary);
```
**사용:** 도움말, 주석, 저작권

---

### Button (버튼)

#### Button Large
```css
font-family: var(--font-primary);
font-size: var(--text-lg);       /* 18px / 20px */
font-weight: var(--font-semibold); /* 600 */
line-height: var(--leading-none); /* 1 */
letter-spacing: var(--tracking-normal); /* 0 */
```

#### Button Medium (기본)
```css
font-family: var(--font-primary);
font-size: var(--text-base);     /* 16px */
font-weight: var(--font-medium);  /* 500 */
line-height: var(--leading-none); /* 1 */
letter-spacing: var(--tracking-normal); /* 0 */
```

#### Button Small
```css
font-family: var(--font-primary);
font-size: var(--text-sm);       /* 14px */
font-weight: var(--font-medium);  /* 500 */
line-height: var(--leading-none); /* 1 */
letter-spacing: var(--tracking-normal); /* 0 */
```

---

## 🎨 실제 UI 적용 예시

### Header
```css
.header-title {
  font-family: var(--font-primary);
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: var(--text-inverse);
}
```

### Place Card
```css
.place-name {
  font-size: var(--text-lg);
  font-weight: var(--font-medium);
  line-height: var(--leading-snug);
  color: var(--text-primary);
}

.place-review {
  font-size: var(--text-base);
  font-weight: var(--font-regular);
  line-height: var(--leading-normal);
  color: var(--text-secondary);
}

.place-meta {
  font-size: var(--text-sm);
  font-weight: var(--font-regular);
  color: var(--text-tertiary);
}
```

### Modal
```css
.modal-title {
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
  color: var(--text-primary);
}

.modal-body {
  font-size: var(--text-base);
  font-weight: var(--font-regular);
  line-height: var(--leading-relaxed);
  color: var(--text-primary);
}
```

### Button
```css
.btn-primary {
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  letter-spacing: var(--tracking-normal);
  text-transform: none; /* 대문자 변환 안 함 */
}
```

---

## 📱 반응형 타이포그래피

### Mobile (< 768px)
```css
:root {
  font-size: 16px; /* 기본 */
}

h1 { font-size: var(--text-3xl); }  /* 30px */
h2 { font-size: var(--text-2xl); }  /* 24px */
h3 { font-size: var(--text-xl); }   /* 20px */
h4 { font-size: var(--text-lg); }   /* 18px */
```

### Tablet (768px ~ 1023px)
```css
:root {
  font-size: 16px;
}

h1 { font-size: var(--text-3xl); }  /* 30px */
h2 { font-size: var(--text-2xl); }  /* 24px */
h3 { font-size: var(--text-xl); }   /* 20px */
h4 { font-size: var(--text-lg); }   /* 20px */
```

### Desktop (≥ 1024px)
```css
:root {
  font-size: 16px;
}

h1 { font-size: var(--text-4xl); }  /* 48px */
h2 { font-size: var(--text-3xl); }  /* 36px */
h3 { font-size: var(--text-2xl); }  /* 30px */
h4 { font-size: var(--text-xl); }   /* 24px */
```

---

## ⚡ 성능 최적화

### Font Loading Strategy

#### font-display 사용
```css
@font-face {
  font-family: 'Pretendard';
  font-display: swap; /* FOIT 방지 */
  src: url('...') format('woff2');
}
```

#### Preload 중요 폰트
```html
<link rel="preload" 
      href="/fonts/pretendard.woff2" 
      as="font" 
      type="font/woff2" 
      crossorigin>
```

#### Subset 사용 (선택)
- 자주 쓰는 글자만 포함
- 파일 크기 감소
- 로딩 속도 향상

---

## 📝 타이포그래피 가이드라인

### DO ✅
- 본문은 최소 16px 사용 (모바일)
- 충분한 줄 간격 유지 (1.5 이상)
- 명확한 위계 구조
- 한글+영문 혼용 시 Pretendard 사용
- 중요한 텍스트는 충분한 대비율

### DON'T ❌
- 너무 많은 폰트 사이즈 사용 (6개 이하 권장)
- 본문에 너무 얇은 Weight (300 이하)
- 줄 간격 너무 좁게 (1.2 미만)
- 한 화면에 3개 이상 폰트 패밀리
- 장문에 대문자 변환 (text-transform: uppercase)

---

## 🎯 접근성

### 최소 폰트 크기
- 본문: 16px 이상
- 라벨: 14px 이상
- 캡션: 12px 이상

### 대비율
- 일반 텍스트: 4.5:1 (AA)
- 큰 텍스트 (18px+): 3:1 (AA)

### 가독성
- 줄 길이: 50~75자 (최대)
- 단락 간격: 1.5em 이상
- 텍스트 정렬: 왼쪽 (한글)

---

## 📝 변경 이력

| 날짜 | 내용 | 작성자 |
|------|------|--------|
| 2026.02.XX | 타이포그래피 시스템 초안 작성 | - |

---

## 🔗 참고 링크

- **Pretendard**: https://github.com/orioncactus/pretendard
- **Inter**: https://rsms.me/inter/
- **Type Scale**: https://typescale.com/
- **Modular Scale**: https://www.modularscale.com/