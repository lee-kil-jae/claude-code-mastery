# 개발자 웹 이력서

HTML, CSS, JavaScript, TailwindCSS를 사용한 반응형 개발자 웹 이력서 프로젝트입니다.

## 프로젝트 소개

이 프로젝트는 풀스택 개발자의 포트폴리오를 보여주는 반응형 웹 이력서입니다.
모던한 디자인과 다크모드 지원, 부드러운 애니메이션 효과로 전문적인 이력서를 제공합니다.

## 주요 기능

### 필수 기능
- ✅ **부드러운 스크롤 네비게이션**: 섹션 간 부드러운 이동
- ✅ **모바일 햄버거 메뉴**: 반응형 네비게이션
- ✅ **스크롤 시 헤더 고정**: 스크롤에 따라 헤더 스타일 변경
- ✅ **다크모드/라이트모드**: 테마 전환 및 localStorage 저장
- ✅ **섹션별 페이드인 애니메이션**: Intersection Observer API 활용
- ✅ **스킬 프로그레스 바 애니메이션**: 스크롤 시 프로그레스 바 애니메이션

### 추가 기능
- 맨 위로 가기 버튼
- 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 접근성 고려 (키보드 네비게이션, ARIA 레이블)
- 프린트 스타일 지원

## 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 커스텀 애니메이션 및 스타일링
- **JavaScript (ES6+)**: 바닐라 JavaScript로 모든 기능 구현
- **TailwindCSS (CDN)**: 유틸리티 기반 스타일링
- **Font Awesome**: 아이콘
- **Google Fonts**: Noto Sans KR, Poppins

## 프로젝트 구조

```
/
├── index.html              # 메인 HTML 파일
├── css/
│   └── style.css          # 커스텀 CSS
├── js/
│   └── main.js            # JavaScript 기능 구현
├── assets/
│   └── images/
│       └── profile-placeholder.jpg  # 프로필 이미지
├── ROADMAP.md             # 개발 로드맵
├── CLAUDE.md              # Claude Code 가이드
└── README.md              # 프로젝트 설명
```

## 시작하기

### 설치 및 실행

별도의 설치 과정 없이 바로 실행할 수 있습니다.

1. **저장소 클론**
   ```bash
   git clone <repository-url>
   cd claude-code-mastery
   ```

2. **브라우저에서 열기**
   - `index.html` 파일을 더블 클릭하거나
   - Live Server 확장 프로그램 사용 (VS Code 등)

### Live Server 사용 (권장)

VS Code에서 Live Server 확장 프로그램을 설치하고 사용하면 실시간 리로드 기능을 사용할 수 있습니다.

```bash
# VS Code에서
1. Live Server 확장 프로그램 설치
2. index.html 우클릭 → "Open with Live Server"
```

## 섹션 구성

1. **Header**: 고정 네비게이션, 다크모드 토글
2. **Hero/Profile**: 프로필 사진, 이름, 직책, 연락처
3. **About Me**: 자기소개 및 핵심 역량
4. **Skills**: 기술 스택 (Frontend, Backend, Database, Tools)
5. **Experience**: 경력 사항 (3개 회사)
6. **Projects**: 주요 프로젝트 (4개)
7. **Education**: 학력 및 자격증
8. **Footer**: 저작권, 소셜 미디어 링크

## 반응형 브레이크포인트

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 커스터마이징

### 개인 정보 수정

`index.html` 파일에서 다음 정보를 수정하세요:

- 이름, 직책
- 연락처 (이메일, GitHub, LinkedIn)
- 자기소개
- 경력 사항
- 프로젝트 내용
- 학력 및 자격증

### 프로필 사진 변경

`assets/images/profile-placeholder.jpg` 파일을 본인의 프로필 사진으로 교체하세요.

### 색상 테마 변경

`index.html`의 Tailwind config 섹션에서 색상을 수정하세요:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#2563eb',   // 원하는 색상으로 변경
                secondary: '#64748b',
                accent: '#06b6d4'
            }
        }
    }
}
```

## 배포

### GitHub Pages

1. GitHub 저장소 생성
2. 코드 푸시
3. Settings → Pages → Source를 `main` 브랜치로 설정

### Netlify

1. [Netlify](https://netlify.com)에 로그인
2. "New site from Git" 선택
3. 저장소 연결 및 배포

### Vercel

1. [Vercel](https://vercel.com)에 로그인
2. "New Project" 선택
3. 저장소 임포트 및 배포

## 브라우저 호환성

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)

## 라이선스

MIT License

## 기여

이슈와 풀 리퀘스트를 환영합니다!

## 제작자

**홍길동** - Full Stack Developer
- GitHub: [@honggildong](https://github.com/honggildong)
- Email: hong@example.com

---

© 2026 홍길동. All rights reserved.
