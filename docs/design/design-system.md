# 디자인 시스템 (Design System)

> Our-Taste-Map의 전체 디자인 가이드

---

## 📋 개요

Our-Taste-Map의 디자인 시스템은 일관성 있고 확장 가능한 UI를 만들기 위한 디자인 규칙과 컴포넌트의 모음입니다.

### 주요 목표
- ✅ **일관성**: 모든 화면에서 동일한 시각적 언어
- ✅ **확장성**: 새로운 기능 추가 시 쉽게 적용
- ✅ **접근성**: 모든 사용자가 쉽게 사용 가능
- ✅ **효율성**: 빠른 개발과 유지보수

---

## 🎨 Design Principles (디자인 원칙)

### 1. 단순함 (Simplicity)
- 불필요한 요소 제거
- 핵심 기능에 집중
- 직관적인 인터페이스

### 2. 일관성 (Consistency)
- 동일한 패턴 반복 사용
- 예측 가능한 동작
- 통일된 시각 언어

### 3. 명확함 (Clarity)
- 명확한 정보 전달
- 이해하기 쉬운 레이블
- 충분한 시각적 피드백

### 4. 접근성 (Accessibility)
- 충분한 색상 대비
- 키보드 네비게이션 지원
- 스크린 리더 호환

---

## 🎯 Design Tokens

### Spacing Scale (간격 체계)
```css
--space-0: 0;          /* 0px */
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-5: 1.25rem;    /* 20px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
```

**사용 예시:**
```css
padding: var(--space-4);        /* 16px */
margin-bottom: var(--space-6);  /* 24px */
gap: var(--space-3);            /* 12px */
```

---

### Border Radius (모서리 둥글기)
```css
--radius-none: 0;
--radius-sm: 0.25rem;   /* 4px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 0.75rem;   /* 12px */
--radius-xl: 1rem;      /* 16px */
--radius-2xl: 1.5rem;   /* 24px */
--radius-full: 9999px;  /* 완전한 원 */
```

**적용:**
- 버튼: `--radius-md` (8px)
- 카드: `--radius-lg` (12px)
- 모달: `--radius-xl` (16px)
- 플로팅 버튼: `--radius-full`

---

### Transitions (전환 효과)
```css
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;
--transition-slower: 500ms ease;
```

**사용:**
```css
.button {
  transition: all var(--transition-base);
}

.modal {
  transition: opacity var(--transition-slow);
}
```

---

### Z-Index Scale (레이어 순서)
```css
--z-base: 0;
--z-dropdown: 100;
--z-sticky: 200;
--z-fixed: 300;
--z-modal-backdrop: 400;
--z-modal: 500;
--z-popover: 600;
--z-tooltip: 700;
--z-notification: 800;
```

---

## 🧱 Layout System

### Grid System
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-4); /* 16px */
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--space-6); /* 24px */
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 var(--space-8); /* 32px */
  }
}
```

### Flexbox Utilities
```css
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.gap-4 { gap: var(--space-4); }
```

---

## 🎨 Component Patterns

### Button (버튼)

#### Primary Button
```css
.btn-primary {
  /* Layout */
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  
  /* Typography */
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  
  /* Colors */
  background: var(--action-primary);
  color: var(--text-inverse);
  border: none;
  
  /* Effects */
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
  cursor: pointer;
}

.btn-primary:hover {
  background: var(--action-primary-hover);
  box-shadow: var(--shadow-md);
}

.btn-primary:active {
  background: var(--action-primary-active);
  box-shadow: var(--shadow-sm);
}

.btn-primary:disabled {
  background: var(--text-disabled);
  cursor: not-allowed;
}
```

#### Secondary Button
```css
.btn-secondary {
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--border-medium);
  
  transition: all var(--transition-base);
}

.btn-secondary:hover {
  background: var(--bg-tertiary);
  border-color: var(--border-dark);
}
```

#### Sizes
```css
.btn-sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
}

.btn-md {
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-base);
}

.btn-lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-lg);
}
```

---

### Card (카드)

```css
.card {
  /* Layout */
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  
  /* Colors */
  background: var(--bg-secondary);
  border: 1px solid var(--border-light);
  
  /* Effects */
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.card-header {
  margin-bottom: var(--space-4);
}

.card-body {
  margin-bottom: var(--space-4);
}

.card-footer {
  margin-top: var(--space-4);
  padding-top: var(--space-4);
  border-top: 1px solid var(--border-light);
}
```

---

### Input (입력 필드)

```css
.input {
  /* Layout */
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  
  /* Typography */
  font-family: var(--font-primary);
  font-size: var(--text-base);
  
  /* Colors */
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: 2px solid var(--border-light);
  
  /* Effects */
  transition: all var(--transition-base);
}

.input:focus {
  outline: none;
  border-color: var(--border-focus);
  box-shadow: 0 0 0 3px rgba(0, 173, 181, 0.1);
}

.input:disabled {
  background: var(--bg-tertiary);
  color: var(--text-disabled);
  cursor: not-allowed;
}

.input::placeholder {
  color: var(--text-tertiary);
}
```

---

### Modal (모달)

```css
.modal-backdrop {
  /* Layout */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  /* Colors */
  background: var(--bg-overlay);
  
  /* Layer */
  z-index: var(--z-modal-backdrop);
  
  /* Animation */
  opacity: 0;
  transition: opacity var(--transition-base);
}

.modal-backdrop.active {
  opacity: 1;
}

.modal {
  /* Layout */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  
  /* Colors */
  background: var(--bg-secondary);
  border-radius: var(--radius-xl);
  
  /* Effects */
  box-shadow: var(--shadow-xl);
  z-index: var(--z-modal);
  
  /* Animation */
  opacity: 0;
  transform: translate(-50%, -48%);
  transition: all var(--transition-slow);
}

.modal.active {
  opacity: 1;
  transform: translate(-50%, -50%);
}
```

---

### Badge (뱃지)

```css
.badge {
  /* Layout */
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  
  /* Typography */
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  
  /* Colors */
  background: var(--bg-tertiary);
  color: var(--text-secondary);
}

.badge-restaurant {
  background: var(--category-restaurant-light);
  color: var(--category-restaurant-dark);
}

.badge-cafe {
  background: var(--category-cafe-light);
  color: var(--category-cafe-dark);
}

.badge-spot {
  background: var(--category-spot-light);
  color: var(--category-spot-dark);
}
```

---

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

### Container Padding
```css
/* Mobile */
padding: 0 var(--space-4);  /* 16px */

/* Tablet */
@media (min-width: 768px) {
  padding: 0 var(--space-6);  /* 24px */
}

/* Desktop */
@media (min-width: 1024px) {
  padding: 0 var(--space-8);  /* 32px */
}
```

---

## 🎭 Animation Guidelines

### Micro-interactions
```css
/* Hover */
.interactive:hover {
  transform: scale(1.02);
  transition: transform var(--transition-fast);
}

/* Click */
.interactive:active {
  transform: scale(0.98);
}

/* Focus */
.interactive:focus {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
}
```

### Loading States
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.loading {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

---

## ♿ Accessibility

### Focus Indicators
```css
*:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}
```

### Skip Links
```html
<a href="#main-content" class="skip-link">
  메인 콘텐츠로 건너뛰기
</a>
```

### ARIA Labels
```html
<button aria-label="장소 추가">
  <span aria-hidden="true">+</span>
</button>
```

---

## 📐 Icon System

### Icon Sizes
```css
--icon-xs: 16px;
--icon-sm: 20px;
--icon-md: 24px;
--icon-lg: 32px;
--icon-xl: 48px;
```

### Icon Colors
- Primary: `var(--text-primary)`
- Secondary: `var(--text-secondary)`
- Tertiary: `var(--text-tertiary)`
- Inverse: `var(--text-inverse)`

### Icon Library
**추천:** Lucide Icons (https://lucide.dev/)
- MIT 라이선스
- React 컴포넌트 지원
- 일관된 디자인

---

## 🎨 Theming (테마)

### Light Theme (Default)
```css
:root {
  --color-first: #222831;
  --color-second: #393E46;
  --color-third: #00ADB5;
  --color-fourth: #EEEEEE;
  /* ... */
}
```

### Dark Theme (v2.0)
```css
[data-theme="dark"] {
  --color-first: #EEEEEE;
  --color-second: #BDBDBD;
  --color-third: #00D9E3;
  --color-fourth: #1A1D23;
  /* ... */
}
```

---

## 📝 Naming Conventions

### BEM Methodology
```css
/* Block */
.card { }

/* Element */
.card__header { }
.card__body { }
.card__footer { }

/* Modifier */
.card--featured { }
.card--large { }
```

### Utility Classes
```css
/* Spacing */
.mt-4 { margin-top: var(--space-4); }
.p-6 { padding: var(--space-6); }

/* Typography */
.text-lg { font-size: var(--text-lg); }
.font-bold { font-weight: var(--font-bold); }

/* Colors */
.text-primary { color: var(--text-primary); }
.bg-secondary { background: var(--bg-secondary); }
```

---

## 🎯 Design Checklist

### 새 컴포넌트 만들 때
- [ ] 색상: 디자인 토큰 사용
- [ ] 타이포그래피: 정의된 스케일 사용
- [ ] 간격: Spacing scale 사용
- [ ] 반응형: 모바일 우선 설계
- [ ] 접근성: 키보드/스크린리더 고려
- [ ] 상태: Hover/Active/Disabled 정의
- [ ] 애니메이션: 부드러운 전환

---

## 📚 참고 문서

- [컬러 팔레트](color-palette.md)
- [타이포그래피](typography.md)
- [컴포넌트](components.md)

---

## 📝 변경 이력

| 날짜 | 내용 | 작성자 |
|------|------|--------|
| 2026.02.XX | 디자인 시스템 초안 작성 | - |

---

## 🔗 유용한 도구

- **Figma**: https://figma.com
- **CSS Variables**: https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- **Lucide Icons**: https://lucide.dev/
- **TailwindCSS**: https://tailwindcss.com/ (참고용)