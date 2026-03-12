# 데이터베이스 스키마 (DB Schema)

> Our-Taste-Map의 Firestore 데이터베이스 구조

**작성일:** 2026.02.XX

---

## 📋 개요

### NoSQL (Firestore) 특징
- 컬렉션(Collection) - 문서(Document) 구조
- 스키마리스 (유연한 구조)
- 실시간 업데이트 지원
- 자동 인덱싱

### 설계 원칙
1. **비정규화**: 조인 대신 데이터 중복 허용
2. **쿼리 최적화**: 자주 사용하는 쿼리 기준 설계
3. **확장성**: v2.0 다중 사용자 고려
4. **보안**: 규칙으로 접근 제어

---

## 🗂️ 컬렉션 구조

```
Firestore Database
│
├── places/              # 장소 컬렉션
│   └── {placeId}        # 장소 문서
│
└── groups/              # 그룹 컬렉션
    └── {groupId}        # 그룹 문서
```

---

## 📍 places 컬렉션

### 문서 구조

```typescript
interface Place {
  // 기본 정보
  id: string;                    // 문서 ID (자동 생성)
  name: string;                  // 장소명 (필수)
  address: string;               // 주소 (필수)
  category: 'restaurant' | 'cafe' | 'spot'; // 카테고리 (필수)
  
  // 위치 정보
  latitude: number;              // 위도 (필수)
  longitude: number;             // 경도 (필수)
  
  // 리뷰 정보
  rating: number;                // 별점 0.5~5.0 (필수)
  shortReview: string;           // 한줄평 (선택, 최대 100자)
  detailReview: string;          // 상세 리뷰 (선택)
  recommendMenu: string;         // 추천 메뉴 (선택)
  
  // 미디어
  photos: string[];              // 사진 URL 배열 (Storage)
  
  // 분류
  groups: string[];              // 그룹 ID 배열 (예: ['group1', 'group2'])
  
  // 날짜 정보
  visitDate: string;             // 방문일 'YYYY-MM-DD' (선택)
  createdAt: Timestamp;          // 작성일 (자동)
  updatedAt: Timestamp;          // 수정일 (자동)
  
  // v2.0 필드 (추후 추가)
  // userId?: string;            // 작성자 ID
  // isPublic?: boolean;         // 공개 여부
  // viewCount?: number;         // 조회수
}
```

### 예시 문서

```json
{
  "id": "place_abc123",
  "name": "파스타 이야기",
  "address": "경기도 화성시 동탄순환대로 631",
  "category": "restaurant",
  
  "latitude": 37.2015,
  "longitude": 127.0778,
  
  "rating": 4.5,
  "shortReview": "크림 파스타 존맛! 웨이팅 30분 각오",
  "detailReview": "웨이팅이 있었지만 그만한 가치가 있었다. 크림 소스가 진하고 면도 쫄깃했다. 재방문 의사 100%",
  "recommendMenu": "크림 파스타, 알리오올리오",
  
  "photos": [
    "https://firebasestorage.googleapis.com/v0/b/.../photo1.jpg",
    "https://firebasestorage.googleapis.com/v0/b/.../photo2.jpg",
    "https://firebasestorage.googleapis.com/v0/b/.../photo3.jpg"
  ],
  
  "groups": ["group_dongtan", "group_favorites"],
  
  "visitDate": "2024-08-15",
  "createdAt": "2024-12-01T10:30:00Z",
  "updatedAt": "2024-12-01T10:30:00Z"
}
```

### 필드 상세 설명

#### name (장소명)
- **타입**: string
- **필수**: ✅
- **제약**: 1~100자
- **예시**: "파스타 이야기", "브라운스톤 카페"

#### address (주소)
- **타입**: string
- **필수**: ✅
- **제약**: 1~200자
- **예시**: "경기도 화성시 동탄순환대로 631"

#### category (카테고리)
- **타입**: enum
- **필수**: ✅
- **값**: 
  - `'restaurant'`: 맛집
  - `'cafe'`: 카페
  - `'spot'`: 멋진 장소

#### latitude / longitude (위도/경도)
- **타입**: number
- **필수**: ✅
- **범위**: 
  - latitude: -90 ~ 90
  - longitude: -180 ~ 180
- **예시**: 37.2015, 127.0778

#### rating (별점)
- **타입**: number
- **필수**: ✅
- **범위**: 0.5 ~ 5.0 (0.5 단위)
- **예시**: 4.5

#### shortReview (한줄평)
- **타입**: string
- **필수**: ❌
- **제약**: 최대 100자
- **예시**: "크림 파스타 존맛!"

#### detailReview (상세 리뷰)
- **타입**: string
- **필수**: ❌
- **제약**: 최대 1000자
- **예시**: "웨이팅이 있었지만..."

#### recommendMenu (추천 메뉴)
- **타입**: string
- **필수**: ❌
- **제약**: 최대 200자
- **예시**: "크림 파스타, 알리오올리오"

#### photos (사진)
- **타입**: string[]
- **필수**: ❌
- **제약**: 
  - 최대 10개
  - Firebase Storage URL
- **예시**: ["https://...", "https://..."]

#### groups (그룹)
- **타입**: string[]
- **필수**: ❌
- **값**: 그룹 ID 배열
- **예시**: ["group_dongtan", "group_incheon"]

#### visitDate (방문일)
- **타입**: string
- **필수**: ❌
- **형식**: 'YYYY-MM-DD'
- **제약**: 오늘 또는 과거 날짜만
- **예시**: "2024-08-15"

#### createdAt / updatedAt (생성/수정일)
- **타입**: Timestamp
- **필수**: ✅ (자동)
- **설명**: Firestore 서버 타임스탬프

---

## 📌 groups 컬렉션

### 문서 구조

```typescript
interface Group {
  id: string;              // 문서 ID (자동 생성)
  name: string;            // 그룹명 (필수)
  color: string;           // 색상 hex (선택)
  icon: string;            // 이모지 아이콘 (선택)
  order: number;           // 정렬 순서 (선택)
  createdAt: Timestamp;    // 생성일 (자동)
  
  // v2.0 필드 (추후 추가)
  // userId?: string;      // 소유자 ID
}
```

### 예시 문서

```json
{
  "id": "group_dongtan",
  "name": "동탄",
  "color": "#FF6B6B",
  "icon": "🏙️",
  "order": 1,
  "createdAt": "2024-12-01T10:00:00Z"
}
```

### 필드 상세 설명

#### name (그룹명)
- **타입**: string
- **필수**: ✅
- **제약**: 1~20자
- **예시**: "동탄", "인천", "즐겨찾기"

#### color (색상)
- **타입**: string
- **필수**: ❌
- **형식**: hex color (#RRGGBB)
- **기본값**: "#9E9E9E"
- **예시**: "#FF6B6B"

#### icon (아이콘)
- **타입**: string
- **필수**: ❌
- **형식**: 이모지 1개
- **기본값**: "📍"
- **예시**: "🏙️", "🌊", "⭐"

#### order (순서)
- **타입**: number
- **필수**: ❌
- **기본값**: 999
- **설명**: 작을수록 앞에 표시

---

## 🔍 인덱스 (Indexes)

### 자동 인덱스 (Firestore 기본)
- 단일 필드 인덱스 자동 생성
- 예: `places.category`, `places.rating`

### 복합 인덱스 (수동 생성 필요)

#### 1. 카테고리 + 방문일순 정렬
```
Collection: places
Fields:
  - category (Ascending)
  - visitDate (Descending)
```

#### 2. 그룹 + 별점순 정렬
```
Collection: places
Fields:
  - groups (Array contains)
  - rating (Descending)
```

#### 3. 카테고리 + 별점순 정렬
```
Collection: places
Fields:
  - category (Ascending)
  - rating (Descending)
```

**인덱스 생성:**
- 첫 쿼리 실행 시 Firestore가 에러 메시지와 함께 링크 제공
- 링크 클릭하여 자동 생성 가능

---

## 🔐 보안 규칙 (Security Rules)

### v1.0 규칙 (단일 사용자)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // v1.0: 모든 읽기/쓰기 허용 (개발 단계)
    match /places/{placeId} {
      allow read, write: if true;
    }
    
    match /groups/{groupId} {
      allow read, write: if true;
    }
  }
}
```

### v2.0 규칙 (다중 사용자)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // 인증된 사용자만 접근
    match /places/{placeId} {
      // 누구나 읽기 가능 (공개 설정된 경우)
      allow read: if resource.data.isPublic == true 
                  || resource.data.userId == request.auth.uid;
      
      // 작성자만 생성/수정/삭제
      allow create: if request.auth != null
                    && request.resource.data.userId == request.auth.uid;
      
      allow update, delete: if request.auth != null
                            && resource.data.userId == request.auth.uid;
    }
    
    match /groups/{groupId} {
      allow read: if resource.data.userId == request.auth.uid;
      allow write: if request.auth != null
                   && request.resource.data.userId == request.auth.uid;
    }
  }
}
```

---

## 📊 쿼리 예시

### 전체 장소 조회
```typescript
const placesRef = collection(db, 'places');
const snapshot = await getDocs(placesRef);
```

### 카테고리별 조회
```typescript
const q = query(
  collection(db, 'places'),
  where('category', '==', 'restaurant')
);
const snapshot = await getDocs(q);
```

### 별점순 정렬
```typescript
const q = query(
  collection(db, 'places'),
  orderBy('rating', 'desc'),
  limit(10)
);
```

### 방문일순 정렬
```typescript
const q = query(
  collection(db, 'places'),
  orderBy('visitDate', 'desc')
);
```

### 특정 그룹 필터링
```typescript
const q = query(
  collection(db, 'places'),
  where('groups', 'array-contains', 'group_dongtan')
);
```

### 검색 (장소명)
```typescript
// Firestore는 전문 검색 미지원
// 클라이언트에서 필터링 또는 Algolia 사용 고려

// 클라이언트 필터링 예시
const allPlaces = await getDocs(collection(db, 'places'));
const filtered = allPlaces.docs
  .map(doc => doc.data())
  .filter(place => 
    place.name.includes(searchTerm) ||
    place.shortReview.includes(searchTerm)
  );
```

### 복합 쿼리 (카테고리 + 정렬)
```typescript
const q = query(
  collection(db, 'places'),
  where('category', '==', 'cafe'),
  orderBy('rating', 'desc')
);
```

---

## 💾 Storage 구조 (이미지)

### 폴더 구조
```
/places/
  /{placeId}/
    /photo_1.jpg
    /photo_2.jpg
    /photo_3.jpg
```

### 파일명 규칙
- 형식: `photo_{순서}.{확장자}`
- 예시: `photo_1.jpg`, `photo_2.jpg`

### 메타데이터
```json
{
  "contentType": "image/jpeg",
  "customMetadata": {
    "placeId": "place_abc123",
    "uploadedBy": "user_xyz",
    "uploadedAt": "2024-12-01T10:30:00Z"
  }
}
```

### 보안 규칙
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    
    // v1.0: 모든 읽기/쓰기 허용
    match /places/{placeId}/{fileName} {
      allow read: if true;
      allow write: if true;
    }
    
    // v2.0: 인증 필요
    // allow read: if true;
    // allow write: if request.auth != null
    //              && request.resource.size < 5 * 1024 * 1024; // 5MB
  }
}
```

---

## 🔄 데이터 마이그레이션 계획 (v1.0 → v2.0)

### 추가할 필드
```typescript
// places 컬렉션
{
  userId: string;           // 작성자 ID
  isPublic: boolean;        // 공개 여부 (기본: false)
  viewCount: number;        // 조회수 (기본: 0)
}

// groups 컬렉션
{
  userId: string;           // 소유자 ID
}
```

### 마이그레이션 스크립트
```typescript
// v1.0 데이터에 userId 추가
const placesRef = collection(db, 'places');
const snapshot = await getDocs(placesRef);

const batch = writeBatch(db);
snapshot.docs.forEach(doc => {
  batch.update(doc.ref, {
    userId: 'default_user_id',  // v1.0 사용자 ID
    isPublic: false,
    viewCount: 0
  });
});

await batch.commit();
```

---

## 📈 확장 고려사항

### v2.0 추가 컬렉션

#### users 컬렉션
```typescript
interface User {
  id: string;              // 사용자 ID (Auth UID)
  displayName: string;     // 닉네임
  email: string;           // 이메일
  photoURL: string;        // 프로필 사진
  createdAt: Timestamp;    // 가입일
  placeCount: number;      // 등록한 장소 수
}
```

#### visits 컬렉션 (재방문 기록)
```typescript
interface Visit {
  id: string;              // 방문 ID
  placeId: string;         // 장소 ID (참조)
  userId: string;          // 사용자 ID
  visitDate: string;       // 방문일
  rating: number;          // 별점
  review: string;          // 리뷰
  photos: string[];        // 사진
  createdAt: Timestamp;    // 작성일
}
```

---

## 🎯 성능 최적화

### 1. 데이터 비정규화
- 자주 조회하는 데이터는 중복 저장
- 예: 그룹 이름을 places에도 저장 (선택)

### 2. 페이지네이션
```typescript
// 첫 페이지
const first = query(
  collection(db, 'places'),
  orderBy('createdAt', 'desc'),
  limit(20)
);

// 다음 페이지
const next = query(
  collection(db, 'places'),
  orderBy('createdAt', 'desc'),
  startAfter(lastVisible),
  limit(20)
);
```

### 3. 실시간 리스너 최소화
```typescript
// ❌ 나쁜 예: 모든 데이터 실시간
onSnapshot(collection(db, 'places'), ...);

// ✅ 좋은 예: 필요한 것만 실시간
const q = query(
  collection(db, 'places'),
  where('updatedAt', '>', yesterday)
);
onSnapshot(q, ...);
```

### 4. 캐싱
- 브라우저 IndexedDB 활용
- Firestore 오프라인 지속성 사용
```typescript
enableIndexedDbPersistence(db);
```

---

## 📝 데이터 검증

### 클라이언트 검증 (TypeScript)
```typescript
// Zod 스키마 예시
import { z } from 'zod';

const PlaceSchema = z.object({
  name: z.string().min(1).max(100),
  address: z.string().min(1).max(200),
  category: z.enum(['restaurant', 'cafe', 'spot']),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  rating: z.number().min(0.5).max(5).multipleOf(0.5),
  shortReview: z.string().max(100).optional(),
  photos: z.array(z.string().url()).max(10),
  visitDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
});
```

### 서버 검증 (Security Rules)
```javascript
// 별점 범위 검증
allow write: if request.resource.data.rating >= 0.5 
              && request.resource.data.rating <= 5.0;

// 사진 개수 검증
allow write: if request.resource.data.photos.size() <= 10;
```

---

## 📝 변경 이력

| 날짜 | 내용 | 작성자 |
|------|------|--------|
| 2026.02.XX | DB 스키마 초안 작성 | - |
| 2026.02.XX | v2.0 마이그레이션 계획 추가 | - |

---

## 🔗 참고 문서

- [Firestore 데이터 모델](https://firebase.google.com/docs/firestore/data-model)
- [보안 규칙](https://firebase.google.com/docs/firestore/security/get-started)
- [인덱스](https://firebase.google.com/docs/firestore/query-data/indexing)
- [Storage 보안](https://firebase.google.com/docs/storage/security)