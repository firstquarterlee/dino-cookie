# 가계부 프로젝트 (Household Account Book)

## 프로젝트 구조

```
household-account-book
├── src
│   ├── app
│   │   └── api
│   │       ├── auth
│   │       ├── expenses
│   │       └── categories
│   ├── components
│   ├── lib
│   └── types
├── public
├── prisma
└── package.json
```

## 기술 스택

### Frontend

- **Next.js 14**: App Router 기반의 React 프레임워크
- **React Hook Form**: 폼 상태 관리 및 유효성 검사
- **Zustand**: 상태 관리 라이브러리

### Backend

- **Next.js API Routes**: 서버리스 API 엔드포인트
- **Prisma**: TypeScript 기반 ORM
- **PostgreSQL**: Vercel Postgres를 통한 데이터베이스
- **NextAuth.js**: 인증 시스템

## 기능

- 지출 내역 기록 및 관리
- 카테고리별 지출 분류
- 지출 통계 확인

## 카테고리

기본 제공되는 카테고리:

- 식비 (🟨)
- 교통비 (🟦)
- 주거비 (🟩)
- 의료비 (🟥)
- 문화생활 (🟪)
- 교육비 (🟫)
- 생활용품 (🟦)
- 기타 (⬜)

## 설치 방법

먼저 필요한 패키지들을 설치하겠습니다:
npm install @prisma/client @auth/prisma-adapter next-auth react-hook-form zustand @vercel/postgres
npm install -D prisma tailwindcss postcss autoprefixer

서버가 실행되면 `http://localhost:3000`에서 접속할 수 있습니다.

## 환경 설정

### 1. 데이터베이스 설정

1. Vercel Postgres 데이터베이스 생성
2. 제공된 데이터베이스 URL을 `.env.local`에 설정

### 2. 인증 설정

1. NextAuth.js 설정
2. 소셜 로그인 제공자 설정 (선택사항)

## 기여 방법

1. 이 저장소를 포크합니다
2. 새로운 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 문제 해결

문제가 발생하면 GitHub Issues에 등록해주세요.

## 라이선스

이 프로젝트는 MIT 라이선스로 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 연락처

프로젝트 관리자: [이상현](mailto:firstquarterlee@gmail.com)

GitHub: [firstquarterlee](https://github.com/firstquarterlee)
