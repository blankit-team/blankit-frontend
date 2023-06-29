This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### 다운로드

```
git clone {url}

or

git clone -b {branch} {url} // 작업내용 확인 시 develop 브랜치
```

### 환경 설정

- [node 설치](https://nodejs.org/en)
- [yarn 설치](https://classic.yarnpkg.com/en/docs/install)
- 프로젝트 최상위 폴더에서 dependency 설치

```
yarn install
```

- .env 파일 생성
- .env.example 파일 참고하여 .env.local 파일 작성

### 빌드 후 실행

```
yarn build
yarn start
```

### test

```

yarn test
```

## Commit Messeage Prefix

( ) => : :

- 🎉 (tada) 새로운 기능 추가
- 🐛 (bug) 버그 수정
- 🚧 (construction) 작업 진행 중
- 📝 (memo) 문서 작성
- 🧪 (test_tube) 테스트 코드 작성
- ✨ (sparkles) 리팩토링
- 🔥 (fire) 코드 삭제
- 🧹 (broom) 코드 정리 - lint
- 🚚 (truck) 파일 이동

## env

`.env.local` 파일 생성

```
NEXTAUTH_URL=<NEXTAUTH_URL>
NEXTAUTH_SECRET=<NEXTAUTH_SECRET>

NEXT_PUBLIC_API_ADDRESS=

KAKAO_ID=
KAKAO_SECRET=
KAKAO_AK=

GOOGLE_ID=
GOOGLE_SECRET=
```
