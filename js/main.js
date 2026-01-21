// DOM이 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {

    // ==================== 다크모드 토글 ====================
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // localStorage에서 저장된 테마 불러오기
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        html.classList.add('dark');
    }

    // 테마 토글 버튼 클릭 이벤트
    themeToggle.addEventListener('click', function() {
        html.classList.toggle('dark');
        const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
    });


    // ==================== 모바일 햄버거 메뉴 ====================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');

        // 아이콘 변경 (bars <-> times)
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });

    // 모바일 메뉴 링크 클릭 시 메뉴 닫기
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });


    // ==================== 부드러운 스크롤 네비게이션 ====================
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // 해시 링크만 처리 (외부 링크는 제외)
            if (href && href.startsWith('#') && href !== '#') {
                e.preventDefault();

                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    const headerHeight = document.getElementById('header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    // ==================== 스크롤 시 헤더 고정 및 스타일 변경 ====================
    const header = document.getElementById('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // 스크롤 위치에 따라 헤더에 그림자 추가
        if (scrollTop > 50) {
            header.classList.add('shadow-lg', 'bg-white/95', 'dark:bg-slate-900/95');
        } else {
            header.classList.remove('shadow-lg', 'bg-white/95', 'dark:bg-slate-900/95');
        }

        lastScrollTop = scrollTop;
    });


    // ==================== 맨 위로 가기 버튼 ====================
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
            scrollToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
        } else {
            scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
            scrollToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // ==================== 섹션별 페이드인 애니메이션 ====================
    const fadeInSections = document.querySelectorAll('.fade-in-section');

    // Intersection Observer 설정
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // 한 번만 애니메이션 실행하려면 주석 해제
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInSections.forEach(section => {
        sectionObserver.observe(section);
    });


    // ==================== 스킬 프로그레스 바 애니메이션 ====================
    const skillsSection = document.getElementById('skills');
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    let skillsAnimated = false;

    const skillsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsAnimated) {
                // 스킬 섹션이 보이면 프로그레스 바 애니메이션 시작
                skillProgressBars.forEach((bar, index) => {
                    const targetWidth = bar.getAttribute('data-width');

                    // 약간의 지연을 두고 순차적으로 애니메이션
                    setTimeout(() => {
                        bar.style.width = targetWidth + '%';
                    }, index * 100);
                });

                skillsAnimated = true;
            }
        });
    }, observerOptions);

    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }


    // ==================== 초기 로드 시 애니메이션 설정 ====================
    // 페이지 로드 시 프로그레스 바는 0%로 시작
    skillProgressBars.forEach(bar => {
        bar.style.width = '0%';
        bar.style.transition = 'width 1.5s ease-out';
    });

});
