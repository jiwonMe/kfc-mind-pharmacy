# KFC Mind Pharmacy - Design Documentation

## Figma Frames

### Frame 1: 로그인 페이지 (1. 로그인 페이지)
- **Name**: Login Page
- **Description**: KFC Mind Pharmacy 앱의 사용자 인증 화면
- **Design Specifications**:
  - **레이아웃**: 402x874px, 세로 중앙 정렬
  - **여백**: 상단 120px, 좌우 16px
  - **컬러**:
    - 로고/브랜드: #E2292D
    - 입력 필드 배경: #EDEDED
    - 플레이스홀더: #898989
    - 버튼 배경: #242424
- **Components**: 
  - **로고 섹션**:
    - KFC 로고 아이콘 (40x40px)
    - "KFC Mind Pharmacy" 텍스트 (20px, Bold)
    - 빨간색 (#E2292D) 브랜드 컬러
  - **입력 필드**:
    - 아이디 입력 (높이 48px)
    - 비밀번호 입력 (높이 48px)
    - Border Radius: 16px
    - 회색 배경 (#EDEDED)
  - **아이디 저장 옵션**:
    - 원형 체크박스 (24x24px)
    - "아이디 저장" 텍스트 (14px)
  - **로그인 버튼**:
    - 너비: 370px, 높이: 48px
    - 검정 배경 (#242424)
    - "로그인" 텍스트 (16px, SemiBold, 흰색)
    - Border Radius: 24px
- **Login CSS**:
  ```css
  .login-logo {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .login-input {
    height: 48px;
    background: #EDEDED;
    border-radius: 16px;
    padding: 18px 16px;
  }
  
  .login-input:focus {
    outline: 2px solid #E2292D;
  }
  
  .login-button {
    width: 370px;
    height: 48px;
    background: #242424;
    border-radius: 24px;
  }
  
  .login-button:active {
    transform: scale(0.98);
  }
  ```
- **User Flow**: 
  1. 앱 실행 시 로그인 페이지 표시
  2. 아이디와 비밀번호 입력
  3. 선택적으로 "아이디 저장" 체크
  4. 로그인 버튼 클릭
  5. 인증 성공 시 캐릭터 선택 화면으로 이동
  6. 실패 시 에러 메시지 표시
- **Form Validation**:
  - 아이디: 필수 입력
  - 비밀번호: 필수 입력, 최소 8자
  - 빈 필드 제출 방지
  - 에러 메시지 인라인 표시
- **Security Features**:
  - 비밀번호 마스킹
  - HTTPS 전송
  - 로그인 시도 제한 (5회)
  - 아이디 저장은 로컬 스토리지 사용
- **Assets**:
  - `/assets/kfc-logo-large.svg` - 메인 로고
  - `/assets/checkbox-empty.svg` - 체크박스
- **Notes**: 
  - 간단명료한 디자인으로 접근성 향상
  - 회원가입 링크는 Frame 2로 연결
  - 비밀번호 찾기 기능 추후 구현
  - 자동 로그인 기능 고려

---

### Frame 2: 회원가입 페이지 (2-1. 회원가입 페이지)
- **Name**: Sign Up Page
- **Description**: KFC Mind Pharmacy 신규 사용자 회원가입 화면
- **Design Specifications**:
  - **레이아웃**: 402x874px
  - **상단 헤더**: 24px 높이, 4.8px 간격
  - **컬러 시스템**:
    - Primary Red: #E2292D (히어로, 체크박스)
    - Black: #000000 (레이블)
    - Gray Light: #EDEDED (입력 필드)
    - Gray Medium: #898989 (플레이스홀더, 도움말)
    - Dark: #242424 (버튼)
- **Components Structure**:
  - **상단 헤더** (고정):
    - KFC 로고 아이콘 (24x24px)
    - "KFC Mind Pharmacy" (12px, Bold, #E2292D)
    - 간격: 4.8px
  - **히어로 배너**:
    - 높이: 100px
    - 배경: #E2292D
    - 타이틀: "회원가입" (20px, Bold, 흰색)
    - 플러스 패턴 아이콘 (121x121px, 우측)
    - Border Radius: 24px
  - **폼 섹션** (8px 좌우 패딩):
    - **아이디 필드**:
      - 레이블: "아이디" (16px, Medium)
      - 입력 필드: "사용하실 아이디를 입력해주세요"
    - **비밀번호 섹션**:
      - 레이블: "비밀번호" (16px)
      - 도움말: "알파벳과 숫자를 조합하여 8자 이상 입력해주세요" (14px, #898989)
      - 비밀번호 입력 + 눈 아이콘 (보기)
      - 비밀번호 확인 + 눈 감김 아이콘 (숨김)
    - **직급 필드**:
      - 레이블: "직급" (16px)
      - 도움말: "직급 정보는 통계 분석을 위한 데이터 수집을 위해서만 사용됩니다" (14px)
      - 드롭다운: "직급을 선택해주세요" + 화살표 아이콘
  - **약관 동의**:
    - 체크박스: 원형 (24px), 체크 시 빨간색
    - 텍스트: "이용약관에 동의합니다" (14px)
    - 이용약관 링크 (밑줄)
  - **가입 버튼**:
    - 크기: 370x48px
    - 배경: #242424
    - 텍스트: "가입하기" (16px, SemiBold, 흰색)
- **Form Validation Rules**:
  - 아이디: 필수, 중복 확인
  - 비밀번호: 필수, 최소 8자, 영문+숫자
  - 비밀번호 확인: 필수, 일치 확인
  - 직급: 필수 선택
  - 약관 동의: 필수 체크
- **Interaction States**:
  - **입력 필드**:
    - Default: #EDEDED 배경
    - Focus: 빨간색 아웃라인
    - Error: 빨간색 테두리 + 에러 메시지
  - **비밀번호 토글**:
    - 눈 아이콘: 비밀번호 표시
    - 눈 감김: 비밀번호 숨김
  - **드롭다운**:
    - 클릭 시 옵션 리스트 표시
    - 선택 시 값 표시
  - **체크박스**:
    - 미체크: 회색 원형
    - 체크: 빨간색 배경 + 흰색 체크
- **CSS Classes**:
  ```css
  .signup-hero { 
    height: 100px; 
    background: #E2292D;
    border-radius: 24px;
  }
  .form-field { gap: 8px; }
  .form-label { font-size: 16px; }
  .form-helper { 
    font-size: 14px; 
    color: #898989;
  }
  .input-with-icon { 
    position: relative;
  }
  .password-toggle { 
    position: absolute; 
    right: 16px;
  }
  ```
- **Assets**:
  - `/assets/eye-icon.svg` - 비밀번호 보기
  - `/assets/eye-close-icon.svg` - 비밀번호 숨김
  - `/assets/dropdown-arrow.svg` - 드롭다운 화살표
  - `/assets/check-icon.svg` - 체크 아이콘
  - `/assets/checkbox-checked.svg` - 체크된 상태
- **Technical Notes**:
  - 모든 필드 실시간 유효성 검사
  - 아이디 중복 확인 API 연동
  - 비밀번호 강도 표시기 추가 권장
  - 직급 옵션: 점장, 부점장, 매니저, 크루 등
  - 가입 완료 시 자동 로그인 또는 로그인 페이지 이동

---

### Frame 3: 프로필 설정 페이지 (2-2. 프로필 설정 페이지)
- **Name**: Profile Setup Page
- **Description**: 사용자 프로필 생성 화면. 회원가입 후 초기 프로필 설정 단계
- **Design Specifications**:
  - **컬러 팔레트**: 회원가입 페이지와 동일
    - Primary Red: #E2292D
    - Black: #000000
    - White: #FFFFFF
    - Gray Light: #EDEDED
    - Gray Medium: #898989
    - Dark: #242424
  - **타이포그래피**: 회원가입 페이지와 동일
  - **레이아웃**: 402x874px, 동일한 구조
- **Components**:
  - **헤더**: KFC 로고 + 브랜드명 (동일 구조)
  - **히어로 섹션**: 
    - "프로필 설정" 타이틀
    - 빨간색 배경 (100px)
  - **프로필 이름 입력**:
    - 레이블: "프로필 이름"
    - 입력 필드 (48px 높이)
    - 플레이스홀더: "사용하실 아이디를 입력해주세요"
  - **프로필 아이콘 선택**:
    - 레이블: "프로필 아이콘"
    - 설명: "프로필에 사용할 이미지를 선택해주세요"
    - 아이콘 옵션: 4개 캐릭터 이미지 (64x64px)
    - 선택 상태: 빨간색 테두리 + 체크 표시
  - **CTA 버튼**:
    - "프로필 생성하기" (370x48px, 검정 배경)
- **User Flow**:
  1. 회원가입 완료 후 프로필 설정 화면 진입
  2. 프로필 이름 입력
  3. 프로필 아이콘 선택 (4개 옵션 중 1개)
  4. 프로필 생성하기 버튼 클릭
  5. 온보딩 또는 메인 화면으로 이동
- **Interaction Details**:
  - 아이콘 선택 시 빨간색 테두리 활성화
  - 선택된 아이콘에 체크마크 표시
  - 다른 아이콘 선택 시 이전 선택 해제
- **Notes**:
  - 프로필 아이콘은 추후 변경 가능하도록 설계
  - 프로필 이름 중복 확인 필요
  - 아이콘은 미리 준비된 이미지 세트 사용
  - 선택된 아이콘 상태 명확히 표시 (접근성)

---

### Frame 4: 대화 상대 선택 (3. 캐릭터 선택창)
- **Name**: Character Selection Page
- **Description**: 상담/대화를 진행할 캐릭터 선택 화면
- **Design Specifications**:
  - **컬러 팔레트**: 기존과 동일
  - **레이아웃**: 402x874px
  - **캐릭터 카드**: 370x100px, 24px border-radius
- **Components**:
  - **헤더**: KFC 로고 + 브랜드명
  - **히어로 섹션**:
    - "대화 상대 선택" 타이틀
    - "상담을 진행할 상대를 선택해주세요" 서브텍스트
  - **캐릭터 리스트**:
    1. **닥터 샌더스** (Dr. Sanders)
       - 역할: 든든한 상담 전문가
       - 기본 상태: 회색 배경 (#EDEDED)
    2. **널스 그레이비** (Nurse Gravy)
       - 역할: 마음 건강 간호사
       - 선택 상태: 빨간색 배경 (#E2292D)
    3. **윙키** (Winky)
       - 역할: 활기 넘치는 응원 요정
       - 기본 상태: 회색 배경
    4. **버디** (Buddy)
       - 역할: 든든한 업무 파트너
       - 기본 상태: 회색 배경
  - **CTA 버튼**: "시작하기"
- **Character Card Styles**:
  ```css
  .character-card {
    width: 370px;
    height: 100px;
    border-radius: 24px;
    padding: 16px 24px;
    position: relative;
  }
  .character-card-default {
    background: #EDEDED;
    color: #000000;
  }
  .character-card-selected {
    background: #E2292D;
    color: #FFFFFF;
  }
  .character-image {
    width: 106px;
    height: 106px;
    position: absolute;
    right: 14px;
    top: -1px;
  }
  ```
- **User Flow**:
  1. 프로필 설정 완료 후 캐릭터 선택 화면 진입
  2. 4개 캐릭터 중 1개 선택
  3. 선택된 캐릭터는 빨간색 배경으로 하이라이트
  4. 시작하기 버튼 클릭
  5. 선택한 캐릭터와 대화 화면으로 이동
- **Assets Saved**:
  - `/assets/characters/doctor-sanders.png`
  - `/assets/characters/nurse-gravy.png`
  - `/assets/characters/winky.png`
  - `/assets/characters/buddy.png`
  - `/assets/kfc-logo.svg`
  - `/assets/plus-pattern.svg`
- **Notes**:
  - 캐릭터별 특성에 맞는 대화 스타일 적용 필요
  - 선택된 캐릭터 정보는 세션에 저장
  - 캐릭터 이미지는 고해상도 PNG 형식
  - CSS 파일 생성됨: `styles.css` (전체 디자인 시스템)

---

### Frame 5: AI 챗봇 대화 화면 (4. 닥터 샌더스)
- **Name**: AI Chatbot Conversation UI
- **Description**: 닥터 샌더스와의 AI 챗봇 대화 인터페이스
- **Design Specifications**:
  - **레이아웃**: 402x874px
  - **메시지 버블 스타일**:
    - AI 메시지: 빨간색 배경 (#E2292D), 왼쪽 정렬
    - 사용자 메시지: 회색 배경 (#EDEDED), 오른쪽 정렬
  - **Border Radius**:
    - AI: 0 16px 16px 16px (왼쪽 상단 직각)
    - User: 16px 0 16px 16px (오른쪽 상단 직각)
- **Components**:
  - **헤더**: KFC 로고 + 브랜드명
  - **캐릭터 프로필 카드**:
    - 닥터 샌더스 정보 표시
    - 100px 높이, 회색 배경
    - 캐릭터 이미지 포함
  - **대화 영역**:
    - AI 인사 메시지: "안녕하세요, 닥터 샌더스입니다. 오늘 하루 기분은 어떠신가요?"
    - 사용자 응답: "반갑습니다"
    - 타이핑 인디케이터 (3개 점 애니메이션)
  - **입력 영역**:
    - 텍스트 입력 필드 (flex: 1)
    - 전송 버튼 (검정 배경)
- **Chat UI CSS**:
  ```css
  /* 메시지 버블 */
  .message-bubble-ai {
    background: #E2292D;
    color: white;
    border-radius: 0 16px 16px 16px;
    padding: 16px;
    max-width: 280px;
  }
  
  .message-bubble-user {
    background: #EDEDED;
    color: black;
    border-radius: 16px 0 16px 16px;
    padding: 16px;
    max-width: 280px;
    align-self: flex-end;
  }
  
  /* 타이핑 인디케이터 */
  @keyframes typing {
    0%, 60%, 100% {
      opacity: 0.3;
      transform: translateY(0);
    }
    30% {
      opacity: 1;
      transform: translateY(-10px);
    }
  }
  
  .typing-dot {
    animation: typing 1.4s infinite;
  }
  ```
- **User Flow**:
  1. 캐릭터 선택 후 대화 화면 진입
  2. AI가 먼저 인사 메시지 전송
  3. 사용자가 메시지 입력 및 전송
  4. AI가 타이핑 인디케이터 표시 후 응답
  5. 대화 지속
- **Interaction Details**:
  - 메시지 전송 시 입력 필드 자동 초기화
  - 새 메시지 추가 시 자동 스크롤
  - 타이핑 인디케이터는 AI 응답 생성 중 표시
  - Enter 키로 메시지 전송 가능
- **Assets**:
  - `/assets/typing-dots.svg` - 타이핑 인디케이터
  - 닥터 샌더스 이미지 재사용
- **Notes**:
  - WebSocket 또는 SSE로 실시간 대화 구현
  - 메시지 히스토리 로컬 저장
  - 대화 컨텍스트 유지 필요
  - 응답 시간 최적화 중요
  - CSS 애니메이션으로 부드러운 UX 제공

---

### Frame 6: 외부 심리 자가진단 링크 모음 (5. 널스 그레이비)
- **Name**: External Self-Diagnosis Links Page
- **Description**: 널스 그레이비 선택 시 표시되는 외부 심리 자가진단 서비스 링크 모음
- **Design Specifications**:
  - **레이아웃**: 402x874px
  - **링크 아이템**: 370x56px, 24px border-radius
  - **색상**:
    - 기본 링크: 회색 배경 (#EDEDED)
    - 선택/활성 링크: 빨간색 배경 (#E2292D)
    - 정보 박스 테두리: #ABABAB
- **Components**:
  - **헤더**: KFC 로고 + 브랜드명
  - **캐릭터 프로필 카드**:
    - 널스 그레이비 정보
    - "마음 건강 간호사" 역할 표시
  - **안내 박스**:
    - 정보 아이콘 (24x24px)
    - "하단에서 자가진단을 진행해보세요" 텍스트
    - 1px 테두리, 24px border-radius
  - **자가진단 링크 목록**:
    1. 우울증 자가 진단
    2. 스트레스 자가 진단
    3. **불안증 자가 진단** (빨간색 하이라이트)
    4. 번아웃 자가 진단
    5. 강박증 자가 진단
    6. ADHD 자가 진단
    7. 조울증 자가 진단
  - **하단 안내문**:
    - "외부 자가진단 링크로 이동합니다"
    - 12px, 회색 (#898989)
- **Link List CSS**:
  ```css
  .link-item {
    width: 370px;
    height: 56px;
    border-radius: 24px;
    padding: 16px 24px;
    transition: all 0.2s ease;
  }
  
  .link-item:hover {
    transform: translateY(-2px);
  }
  
  .link-item-active {
    background: #E2292D;
    color: white;
  }
  
  .info-box {
    border: 1px solid #ABABAB;
    border-radius: 24px;
    padding: 16px 24px;
  }
  ```
- **User Flow**:
  1. 캐릭터 선택에서 널스 그레이비 선택
  2. 외부 링크 목록 화면 표시
  3. 원하는 자가진단 항목 선택
  4. 외부 사이트로 리다이렉트
  5. 진단 완료 후 앱으로 복귀
- **Interaction Details**:
  - 링크 호버 시 살짝 위로 이동 효과
  - 선택한 링크 빨간색으로 표시
  - 탭/클릭 시 외부 브라우저 열기
  - 뒤로가기로 앱 복귀 가능
- **External Links** (예시):
  - 우울증: PHQ-9 척도
  - 스트레스: PSS 척도
  - 불안증: GAD-7 척도
  - 번아웃: MBI 척도
  - 강박증: Y-BOCS 척도
  - ADHD: ASRS 척도
  - 조울증: MDQ 척도
- **Assets**:
  - `/assets/info-icon.svg` - 정보 아이콘
  - 널스 그레이비 이미지 재사용
- **Notes**:
  - 외부 링크는 새 탭/브라우저에서 열기
  - 각 진단 도구는 공인된 척도 사용
  - 진단 결과는 참고용임을 명시
  - 전문가 상담 권유 문구 포함 필요
  - 링크 URL은 환경 변수로 관리

---

### Frame 7: 윙키 응원 메시지 UI (6. 윙키)
- **Name**: Winky Encouragement Message UI
- **Description**: 윙키가 보내는 응원 메시지를 편지 형태로 표시하는 화면
- **Design Specifications**:
  - **레이아웃**: 402x874px
  - **편지지 디자인**:
    - 배경색: #FFF8EB (크림색)
    - 테두리: 1px solid #FFD891 (금색)
    - 크기: 352x328px
    - 텍스트 색상: #5D4820 (갈색)
  - **봉투 디자인**:
    - 빨간색 그라데이션 봉투
    - 상단/하단 분리형 디자인
    - 370x215px
- **Components**:
  - **헤더**: KFC 로고 + 브랜드명
  - **캐릭터 프로필 카드**:
    - 윙키 정보 ("활기 넘치는 응원 요정")
    - 회색 배경 카드
  - **안내 박스**:
    - "윙키가 응원의 메시지를 보냈어요!" 텍스트
    - 정보 아이콘 포함
  - **메시지 카운터**:
    - "윙키의 23번째 메시지"
    - 회색 텍스트 (#626262)
  - **편지 내용**:
    - 손글씨 폰트: Hakgyoansim Nadeuri OTF
    - 중앙 정렬 텍스트
    - 인사말 + 응원 메시지
  - **서명 영역**:
    - "당신의 응원 요정 윙키 올림"
    - 구분선 포함
  - **봉투 그래픽**:
    - 편지지 하단에 겹쳐진 봉투 이미지
    - 레이어드 효과
  - **메시지 히스토리 링크**:
    - "지난 메시지 보기 (22개)"
    - 밑줄 텍스트, 12px
- **Letter UI CSS**:
  ```css
  .letter-paper {
    background: #FFF8EB;
    border: 1px solid #FFD891;
    padding: 16px;
    height: 328px;
  }
  
  .letter-content {
    font-family: 'Hakgyoansim Nadeuri OTF';
    color: #5D4820;
    text-align: center;
    line-height: 1.5;
  }
  
  /* 편지 애니메이션 */
  @keyframes letterSlideIn {
    from {
      transform: translateY(100px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes envelopeOpen {
    0% { transform: translateY(0); }
    100% { transform: translateY(50px); }
  }
  ```
- **User Flow**:
  1. 캐릭터 선택에서 윙키 선택
  2. 응원 메시지 화면 진입
  3. 편지 슬라이드 애니메이션으로 표시
  4. 메시지 읽기
  5. 지난 메시지 목록 확인 가능
  6. 새 메시지 도착 시 알림
- **Interaction Details**:
  - 편지 등장 애니메이션 (슬라이드업)
  - 봉투 열림 효과 (선택적)
  - 지난 메시지 링크 클릭 시 목록 표시
  - 스와이프로 이전/다음 메시지 넘기기
- **Message Features**:
  - 일일 랜덤 메시지 제공
  - 메시지 누적 카운터
  - 개인화된 인사말 (OOO님)
  - 계절/시간별 맞춤 메시지
- **Assets Saved**:
  - `/assets/envelope-top.svg` - 봉투 상단
  - `/assets/envelope-bottom.svg` - 봉투 하단  
  - `/assets/letter-line.svg` - 서명 구분선
- **Notes**:
  - 손글씨 폰트로 따뜻한 느낌 전달
  - 메시지는 데이터베이스에서 관리
  - 읽은 메시지 표시 기능 필요
  - 즐겨찾기 기능 고려
  - 공유 기능 추가 가능

---

### Frame 8: 버디 업무 지원 메뉴 (7. 버디)
- **Name**: Buddy Work Support Menu UI
- **Description**: 버디 선택 시 표시되는 업무 관련 리소스 및 도구 링크 화면
- **Design Specifications**:
  - **레이아웃**: 402x874px
  - **메뉴 아이템**: 370x56px, 24px border-radius
  - **색상 구성**: 널스 그레이비와 동일
    - 기본: 회색 배경 (#EDEDED)
    - 선택/활성: 빨간색 배경 (#E2292D)
- **Components**:
  - **헤더**: KFC 로고 + 브랜드명
  - **캐릭터 프로필 카드**:
    - 버디 정보
    - "든든한 업무 파트너" 역할 표시
    - 회색 배경, 100px 높이
  - **안내 박스**:
    - 정보 아이콘 (24x24px)
    - "하단 메뉴에서 필요한 메뉴를 선택하세요"
    - 1px 테두리 (#ABABAB)
  - **업무 메뉴 목록**:
    1. **KFC 업무 메뉴얼** - 회색 배경
    2. **공지사항** - 회색 배경
    3. **ROCC** - 빨간색 하이라이트 (선택됨)
    4. **내 캘린더 확인** - 회색 배경
- **Work Menu Categories**:
  - **업무 메뉴얼**:
    - 점포 운영 가이드
    - 조리 매뉴얼
    - 서비스 표준
    - 안전 수칙
  - **공지사항**:
    - 본사 공지
    - 이벤트 안내
    - 정책 변경사항
  - **ROCC** (Restaurant Operations & Compliance Check):
    - 체크리스트
    - 감사 준비
    - 개선사항 추적
  - **캘린더**:
    - 근무 일정
    - 교육 일정
    - 이벤트 캘린더
- **Menu Item CSS**:
  ```css
  .work-menu-item {
    width: 370px;
    height: 56px;
    border-radius: 24px;
    padding: 16px 24px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .work-menu-item:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
  
  .work-menu-item-active {
    background: #E2292D;
    color: white;
  }
  ```
- **User Flow**:
  1. 캐릭터 선택에서 버디 선택
  2. 업무 지원 메뉴 화면 표시
  3. 원하는 업무 도구 선택
  4. 해당 기능/페이지로 이동
  5. 업무 수행 지원
- **Interaction Details**:
  - 메뉴 아이템 호버 효과
  - 선택 시 빨간색 하이라이트
  - 탭/클릭으로 하위 메뉴 접근
  - 뒤로가기 네비게이션 지원
- **Integration Points**:
  - KFC 내부 시스템 연동
  - 업무 메뉴얼 PDF 뷰어
  - 캘린더 동기화 (Google/Outlook)
  - 실시간 공지사항 푸시 알림
- **Business Features**:
  - 역할별 메뉴 접근 권한
  - 오프라인 모드 지원 (메뉴얼)
  - 검색 기능
  - 즐겨찾기/북마크
  - 최근 본 항목
- **Notes**:
  - 업무 효율성 증대 목적
  - 신입 직원 온보딩 도구로 활용
  - 정기적인 콘텐츠 업데이트 필요
  - 다국어 지원 고려
  - 접근 로그 기록 (컴플라이언스)

---
