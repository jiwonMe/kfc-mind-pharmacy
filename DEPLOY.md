# Firebase 배포 가이드

## 🚀 빠른 시작

### 1. Firebase 프로젝트 생성
1. [Firebase Console](https://console.firebase.google.com/)에 접속
2. "프로젝트 추가" 클릭
3. 프로젝트 이름 입력 (예: kfc-mind-pharmacy)
4. Google Analytics 설정 (선택사항)
5. 프로젝트 생성 완료

### 2. Firebase CLI 설정
```bash
# Firebase CLI 로그인
pnpm run firebase:login

# 또는 직접 실행
npx firebase login
```

### 3. 프로젝트 ID 업데이트
`.firebaserc` 파일을 열고 `your-project-id`를 실제 Firebase 프로젝트 ID로 변경:
```json
{
  "projects": {
    "default": "kfc-mind-pharmacy-xxxxx"
  }
}
```

### 4. 빌드 및 배포
```bash
# 프로젝트 빌드 및 배포
pnpm run deploy

# 또는 개별 실행
pnpm run build
npx firebase deploy --only hosting
```

## 📋 체크리스트

- [ ] Firebase 프로젝트 생성 완료
- [ ] Firebase CLI 로그인 완료
- [ ] `.firebaserc`에 프로젝트 ID 설정
- [ ] 빌드 테스트 (`pnpm run build`)
- [ ] 로컬 프리뷰 (`pnpm run preview`)
- [ ] Firebase 배포 (`pnpm run deploy`)

## 🔗 배포 후 확인

배포가 완료되면 다음 URL에서 확인 가능:
- `https://[프로젝트-ID].web.app`
- `https://[프로젝트-ID].firebaseapp.com`

## ⚙️ 추가 설정 (선택사항)

### 커스텀 도메인 연결
1. Firebase Console → Hosting
2. "도메인 추가" 클릭
3. 도메인 소유권 확인
4. DNS 설정 업데이트

### 환경별 배포
```bash
# 스테이징 환경
npx firebase hosting:channel:deploy staging

# 프로덕션 환경
npx firebase deploy --only hosting
```

## 🐛 문제 해결

### 권한 오류
```bash
# Firebase 재로그인
npx firebase logout
npx firebase login
```

### 빌드 오류
```bash
# 의존성 재설치
rm -rf node_modules
pnpm install
```

### 배포 실패
- Firebase Console에서 프로젝트 상태 확인
- 빌링 계정 설정 확인 (Blaze 플랜 필요할 수 있음)
- `.firebaserc`의 프로젝트 ID 확인

## 📞 지원

문제가 지속되면 다음을 확인:
- [Firebase 문서](https://firebase.google.com/docs/hosting)
- [Firebase Status](https://status.firebase.google.com/)
- 프로젝트 관리자에게 문의