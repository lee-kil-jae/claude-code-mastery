# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요
개발자 웹 이력서 - HTML, CSS, JavaScript, TailwindCSS를 사용한 반응형 웹 이력서

## 언어 및 커뮤니케이션 규칙
- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

## 기술 스택
- HTML5 (시맨틱 마크업)
- CSS3
- JavaScript (바닐라 JS)
- TailwindCSS (CDN 또는 빌드 방식)

## 프로젝트 구조
```
/
├── index.html              # 메인 HTML 파일
├── css/
│   └── style.css          # 커스텀 CSS (TailwindCSS 외 추가 스타일)
├── js/
│   └── main.js            # JavaScript 기능 구현
├── assets/
│   └── images/            # 이미지 파일 (프로필 사진 등)
├── ROADMAP.md             # 개발 로드맵
├── CLAUDE.md              # 이 파일
└── README.md              # 프로젝트 설명
```

## HTML 구조 (섹션 순서)
1. **Header**: 프로필, 이름, 직책, 연락처
2. **About Me**: 자기소개, 핵심 역량
3. **Skills**: 기술 스택 (Frontend/Backend/Database/Tools)
4. **Experience**: 경력 사항
5. **Projects**: 주요 프로젝트
6. **Education**: 학력 및 자격증
7. **Footer**: 저작권, 소셜 미디어

## 반응형 브레이크포인트
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 디자인 가이드라인

### 컬러 팔레트
- Primary: `#2563eb` (Blue)
- Secondary: `#64748b` (Slate)
- Accent: `#06b6d4` (Cyan)
- Background: `#ffffff` / `#0f172a` (다크모드)
- Text: `#1e293b` / `#f1f5f9` (다크모드)

### 폰트
- 제목: 'Poppins', 'Montserrat', 'Pretendard'
- 본문: 'Inter', 'Roboto', 'Noto Sans KR'

## 필수 JavaScript 기능
1. 부드러운 스크롤 네비게이션
2. 모바일 햄버거 메뉴
3. 스크롤 시 헤더 고정
4. 섹션별 페이드인 애니메이션
5. 스킬 프로그레스 바 애니메이션

## 선택적 기능
- 다크모드/라이트모드 토글
- PDF 다운로드 버튼
- 언어 전환 (한/영)
- 타이핑 애니메이션

## 개발 시 주의사항
- 모든 HTML 요소는 시맨틱 태그 사용 (`<header>`, `<section>`, `<article>`, `<nav>` 등)
- TailwindCSS 유틸리티 클래스 우선 사용, 커스텀 CSS는 최소화
- 접근성(a11y) 고려: alt 텍스트, ARIA 레이블, 키보드 네비게이션
- 크로스 브라우저 호환성 확인 (Chrome, Firefox, Safari)
- 이미지 최적화 (WebP 형식 권장)

## 배포
- GitHub Pages, Netlify, 또는 Vercel 사용 가능
- 정적 사이트로 빌드 과정 없이 직접 배포 가능 (TailwindCSS CDN 사용 시)

## 샘플 데이터
- 이름: 홍길동
- 직책: Full Stack Developer
- 기술: HTML, CSS, JavaScript, React, Vue.js, Node.js, Python, MySQL, MongoDB
- 경력/프로젝트는 일반적인 개발자 포트폴리오 형식으로 작성
