        // efeito de scroll
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // toggle menu mobile
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // fecha menu mobile ao clicar em um link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // animações de scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // observa todos os elementos de animação
        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
            observer.observe(el);
        });

        // funções do modal
        function openModal(modalId) {
            const modal = document.getElementById(modalId);
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        function closeModal(modalId) {
            const modal = document.getElementById(modalId);
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }

        // fecha modal ao clicar fora
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal(modal.id);
                }
            });
        });

        // efeito de scroll para links de navegação
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // adiciona efeito de scroll no header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(30, 64, 175, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.backgroundColor = '';
                header.style.backdropFilter = '';
            }
        });

        // inicializa animações na página
        window.addEventListener('load', () => {
            // trigger inicial de animação
            setTimeout(() => {
                document.querySelectorAll('.fade-in').forEach((el, index) => {
                    setTimeout(() => {
                        if (el.getBoundingClientRect().top < window.innerHeight) {
                            el.classList.add('visible');
                        }
                    }, index * 100);
                });
            }, 500);
        });

        // adiciona efeito de hover no card
        document.querySelectorAll('.card-hover').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // adiciona efeito de click no botão
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });