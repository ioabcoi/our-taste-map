# Branch Strategy

> Our-Taste-Map 브랜치 전략

## 🌿 브랜치 구조

### v1.0 단계 (우리 둘만)
```
main (배포)
  ↑
develop (개발)
  ↑
feature/* (기능 개발)
```

---

## 📌 브랜치 종류

### 1. `main` (메인 브랜치)
- **목적**: 배포 가능한 안정 버전
- **보호**: 직접 푸시 금지, develop에서만 병합
- **배포**: Vercel/Netlify 자동 배포 연결

**규칙:**
- ✅ 항상 배포 가능한 상태 유지
- ✅ develop에서 테스트 완료 후 병합
- ❌ 직접 커밋 금지

---

### 2. `develop` (개발 브랜치)
- **목적**: 개발 중인 최신 코드
- **특징**: 기능 개발 완료 후 여기에 병합

**규칙:**
- ✅ feature 브랜치 병합 후 테스트
- ✅ 버그 없으면 main에 병합
- ✅ 항상 최신 상태 유지

---

### 3. `feature/*` (기능 브랜치)
- **목적**: 새로운 기능 개발
- **네이밍**: `feature/<기능명>`
- **생명주기**: 기능 완성 → develop 병합 → 삭제

**브랜치명 예시:**
```
feature/map-view          # 지도 뷰 구현
feature/place-crud        # 장소 CRUD
feature/search            # 검색 기능
feature/photo-upload      # 사진 업로드
feature/category-filter   # 카테고리 필터
feature/detail-modal      # 상세 모달
```

**규칙:**
- ✅ develop에서 분기
- ✅ 하나의 기능만 개발
- ✅ 완료 후 develop에 병합
- ✅ 병합 후 브랜치 삭제

---

### 4. `hotfix/*` (긴급 수정)
- **목적**: 배포 후 긴급 버그 수정
- **네이밍**: `hotfix/<버그명>`
- **특징**: main에서 분기, main + develop 동시 병합

**예시:**
```
hotfix/marker-display-bug
hotfix/search-error
```

---

## 🔄 작업 흐름 (Workflow)

### 새 기능 개발 시
```bash
# 1. develop 브랜치로 이동
git checkout develop
git pull origin develop

# 2. 기능 브랜치 생성
git checkout -b feature/map-view

# 3. 작업 진행 & 커밋
git add .
git commit -m "feat: 지도 기본 표시 기능 구현"

# 4. 작업 완료 후 develop에 병합
git checkout develop
git merge feature/map-view

# 5. 원격 저장소에 푸시
git push origin develop

# 6. 기능 브랜치 삭제 (선택)
git branch -d feature/map-view
```

---

### main에 배포 시
```bash
# 1. develop 테스트 완료 확인
# 2. main 브랜치로 이동
git checkout main
git pull origin main

# 3. develop 병합
git merge develop

# 4. 원격 저장소에 푸시 (자동 배포)
git push origin main

# 5. 태그 생성 (선택)
git tag -a v1.0.0 -m "v1.0 배포"
git push origin v1.0.0
```

---

### 긴급 버그 수정 시
```bash
# 1. main에서 hotfix 브랜치 생성
git checkout main
git checkout -b hotfix/marker-bug

# 2. 버그 수정 & 커밋
git commit -m "fix: 마커 중복 표시 버그 긴급 수정"

# 3. main에 병합
git checkout main
git merge hotfix/marker-bug
git push origin main

# 4. develop에도 병합
git checkout develop
git merge hotfix/marker-bug
git push origin develop

# 5. hotfix 브랜치 삭제
git branch -d hotfix/marker-bug
```

---

## 🎯 v1.0 간소화 전략

**우리 둘만 작업하니까:**

### 선택 1: 단순 모드 (추천)
```
main
  ↑
feature/*
```
- develop 생략
- feature 완성 → 바로 main 병합
- 빠르게 개발 & 배포

### 선택 2: 표준 모드
```
main
  ↑
develop
  ↑
feature/*
```
- develop에서 테스트
- 안정적이지만 조금 복잡

**추천: 선택 1로 시작 → 필요하면 선택 2로 전환**

---

## 📋 브랜치 네이밍 규칙

### 기능 개발
```
feature/기능명
```

**예시:**
- `feature/map-view`
- `feature/place-crud`
- `feature/search`
- `feature/photo-upload`

### 버그 수정
```
fix/버그명
```

**예시:**
- `fix/marker-display`
- `fix/search-error`

### 문서 작업
```
docs/문서명
```

**예시:**
- `docs/user-flow`
- `docs/api-spec`

### 디자인
```
design/작업명
```

**예시:**
- `design/main-layout`
- `design/modal-ui`

---

## ✅ v1.0 체크리스트

### 기능 개발 전
- [ ] develop(또는 main)에서 최신 코드 pull
- [ ] feature 브랜치 생성
- [ ] 브랜치명 규칙 확인

### 기능 개발 중
- [ ] 작은 단위로 자주 커밋
- [ ] 커밋 메시지 규칙 준수
- [ ] 정기적으로 원격 저장소에 푸시

### 기능 개발 후
- [ ] develop(또는 main) 최신화
- [ ] 병합 전 충돌 확인
- [ ] 병합 후 브랜치 삭제

---

## 💡 팁

### 충돌 방지
```bash
# 작업 전 항상 최신화
git checkout develop
git pull origin develop
```

### 작업 중간 저장
```bash
# 커밋 전 임시 저장
git stash

# 다른 작업 후 복구
git stash pop
```

### 브랜치 확인
```bash
# 현재 브랜치 확인
git branch

# 원격 브랜치 포함
git branch -a
```

---

## 🚀 v2.0 전환 시

### 추가될 브랜치
- `release/*`: 릴리스 준비
- 협업자 증가 → PR(Pull Request) 도입
- 코드 리뷰 프로세스

---

## 📝 변경 이력

| 날짜 | 내용 | 작성자 |
|------|------|--------|
| 2026.02.11 | 브랜치 전략 초안 작성 | - |