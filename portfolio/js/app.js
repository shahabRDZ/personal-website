(function () {

    // ---- Theme Toggle ----
    var themeBtn = document.getElementById('themeToggle');
    var savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        document.body.classList.add('light');
    }

    themeBtn.addEventListener('click', function () {
        document.body.classList.toggle('light');
        localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
    });


    // ---- Translations ----
    var translations = {

        // Navigation
        nav_about:        { en: 'about',        tr: 'hakkımda', ar: 'عني' },
        nav_portfolio:    { en: 'projects',      tr: 'projeler', ar: 'مشاريع' },
        nav_publications: { en: 'publications',  tr: 'yayınlar', ar: 'منشورات' },
        nav_contact:      { en: 'contact',       tr: 'iletişim', ar: 'تواصل' },

        // Footer nav
        footer_nav_about:    { en: 'about',        tr: 'hakkımda', ar: 'عني' },
        footer_nav_projects: { en: 'projects',      tr: 'projeler', ar: 'مشاريع' },
        footer_nav_pubs:     { en: 'publications',  tr: 'yayınlar', ar: 'منشورات' },
        footer_nav_contact:  { en: 'contact',       tr: 'iletişim', ar: 'تواصل' },
        footer_copy:         { en: '© 2026 Shahab Rashidian Dezfuly', tr: '© 2026 Shahab Rashidian Dezfuly', ar: '© 2026 شهاب رشيديان دزفولي' },

        // Hero — index.html
        hero_left_title: { en: 'engineer', tr: 'mühendis', ar: 'مهندس' },
        hero_left_sub: {
            en: '<strong>Senior Backend Developer</strong> &amp; <strong>DevOps Engineer</strong> who builds reliable, <strong>AWS cloud-native</strong> systems at scale.',
            tr: '<strong>Kıdemli Backend Geliştirici</strong> &amp; <strong>DevOps Mühendisi</strong> olarak güvenilir, <strong>AWS bulut tabanlı</strong> sistemler inşa ediyorum.',
            ar: '<strong>مطور خلفي أول</strong> و <strong>مهندس DevOps</strong> يبني أنظمة <strong>AWS سحابية</strong> موثوقة وقابلة للتوسع.'
        },
        hero_left_badge: {
            en: 'Available for remote work &amp; volunteer projects',
            tr: 'Uzaktan çalışma ve gönüllü projeler için müsait',
            ar: 'متاح للعمل عن بُعد والمشاريع التطوعية'
        },
        hero_right_sub: {
            en: '<strong>Senior Full Stack Developer</strong>, <strong>Flutter Developer</strong> &amp; <strong>Vibe Coder</strong> who ships elegant <strong>mobile apps</strong> from idea to production.',
            tr: '<strong>Kıdemli Full Stack Geliştirici</strong>, <strong>Flutter Developer</strong> &amp; <strong>Vibe Coder</strong> olarak zarif <strong>mobil uygulamalar</strong> geliştiriyorum.',
            ar: '<strong>مطور Full Stack أول</strong> و <strong>مطور Flutter</strong> و <strong>Vibe Coder</strong> يطور <strong>تطبيقات جوال</strong> أنيقة من الفكرة إلى الإنتاج.'
        },
        hero_right_badge: {
            en: 'Open to collaboration &amp; opportunities',
            tr: 'İş birliği ve fırsatlara açık',
            ar: 'منفتح على التعاون والفرص'
        },

        // Page heroes
        page_hero_about_title: { en: 'About Me', tr: 'Hakkımda', ar: 'عني' },
        page_hero_about_sub: {
            en: 'Software engineer with a passion for building <strong>scalable systems</strong>, <strong>cloud-native architectures</strong>, and <strong>cross-platform applications</strong>. Sharif University graduate, based in Istanbul.',
            tr: 'Ölçeklenebilir sistemler, bulut tabanlı mimariler ve çapraz platform uygulamalar geliştirmeye tutkulu bir yazılım mühendisi. Sharif Üniversitesi mezunu, İstanbul\'da yaşıyor.',
            ar: 'مهندس برمجيات شغوف ببناء <strong>الأنظمة القابلة للتوسع</strong> و<strong>البنى السحابية</strong> و<strong>التطبيقات متعددة المنصات</strong>. خريج جامعة شريف، مقيم في إسطنبول.'
        },
        page_hero_projects_title: { en: 'Projects', tr: 'Projeler', ar: 'مشاريع' },
        page_hero_projects_sub: {
            en: 'A collection of professional and personal projects spanning <strong>cloud infrastructure</strong>, <strong>backend microservices</strong>, <strong>mobile applications</strong>, and <strong>full-stack platforms</strong>.',
            tr: '<strong>Bulut altyapısı</strong>, <strong>backend mikro hizmetleri</strong>, <strong>mobil uygulamalar</strong> ve <strong>full-stack platformları</strong> kapsayan profesyonel ve kişisel projeler.',
            ar: 'مجموعة من المشاريع المهنية والشخصية تشمل <strong>البنية السحابية</strong> و<strong>الخدمات المصغرة</strong> و<strong>التطبيقات الجوالة</strong> و<strong>المنصات المتكاملة</strong>.'
        },
        page_hero_pubs_title: { en: 'Publications', tr: 'Yayınlar', ar: 'منشورات' },
        page_hero_pubs_sub: {
            en: 'Peer-reviewed research papers presented at international conferences and indexed in the <strong>CIVILICA</strong> citation database. My research focuses on <strong>network optimization</strong>, <strong>data science</strong>, and the <strong>societal impact of technology</strong>.',
            tr: 'Uluslararası konferanslarda sunulan ve <strong>CIVILICA</strong> veri tabanında indekslenen hakemli araştırma makaleleri. Araştırmam <strong>ağ optimizasyonu</strong>, <strong>veri bilimi</strong> ve <strong>teknolojinin toplumsal etkisi</strong> üzerine odaklanmaktadır.',
            ar: 'أوراق بحثية محكّمة قُدِّمت في مؤتمرات دولية ومفهرسة في قاعدة بيانات <strong>CIVILICA</strong>. تتمحور أبحاثي حول <strong>تحسين الشبكات</strong> و<strong>علم البيانات</strong> و<strong>الأثر المجتمعي للتكنولوجيا</strong>.'
        },
        page_hero_contact_title: { en: 'Get in Touch', tr: 'İletişime Geçin', ar: 'تواصل معي' },
        page_hero_contact_sub: {
            en: 'Have a project in mind, want to collaborate, or just say hello? I\'m always open to discussing new ideas, <strong>remote opportunities</strong>, and <strong>open-source contributions</strong>.',
            tr: 'Aklınızda bir proje mi var, iş birliği yapmak mı istiyorsunuz? Yeni fikirler, <strong>uzaktan çalışma fırsatları</strong> ve <strong>açık kaynak katkıları</strong> tartışmaya her zaman açığım.',
            ar: 'هل لديك مشروع في ذهنك أو تريد التعاون؟ أنا دائماً منفتح على مناقشة أفكار جديدة و<strong>فرص العمل عن بُعد</strong> و<strong>المساهمات مفتوحة المصدر</strong>.'
        },

        // About — intro
        about_intro_p1: {
            en: 'I\'m <strong>Shahab Rashidian Dezfuly</strong>, a software engineer and growth hacker who thrives at the intersection of backend engineering, cloud infrastructure, and data-driven growth. I hold a <strong>B.Sc. in Computer Engineering</strong> from <strong>Sharif University of Technology</strong> — one of Iran\'s top-ranked universities — where I graduated with a GPA of <strong>17.54/20</strong>.',
            tr: 'Ben <strong>Shahab Rashidian Dezfuly</strong>, backend mühendisliği, bulut altyapısı ve veri odaklı büyümenin kesişiminde uzmanlaşmış bir yazılım mühendisi ve growth hacker\'ım. <strong>Sharif Teknoloji Üniversitesi</strong>\'nden <strong>17.54/20</strong> not ortalamasıyla <strong>Bilgisayar Mühendisliği</strong> lisans derecesi aldım.',
            ar: 'أنا <strong>شهاب رشيديان دزفولي</strong>، مهندس برمجيات ومتخصص في اختراق النمو يعمل عند تقاطع هندسة الخلفية والبنية التحتية السحابية والنمو المبني على البيانات. حصلت على <strong>بكالوريوس هندسة الحاسوب</strong> من <strong>جامعة شريف للتكنولوجيا</strong> — إحدى أعلى الجامعات تصنيفاً في إيران — بمعدل <strong>17.54/20</strong>.'
        },
        about_intro_p2: {
            en: 'My professional journey spans designing <strong>production-grade microservices</strong>, orchestrating <strong>AWS cloud environments</strong> with Terraform, and shipping <strong>Flutter mobile applications</strong> from concept to the app store. I also apply engineering thinking to growth: building scrapers, analytics dashboards, and automation tools that turn data into traction.',
            tr: 'Profesyonel yolculuğum üretim kalitesinde <strong>mikro hizmetler</strong> tasarlamayı, Terraform ile <strong>AWS bulut ortamlarını</strong> yönetmeyi ve <strong>Flutter mobil uygulamalarını</strong> fikir aşamasından uygulama mağazasına taşımayı kapsamaktadır. Ayrıca mühendislik düşüncesini büyümeye uyguluyorum: veriyi ilerlemeye dönüştüren scraper\'lar ve analitik paneller geliştiriyorum.',
            ar: 'تمتد مسيرتي المهنية عبر تصميم <strong>الخدمات المصغرة</strong> بجودة الإنتاج، وإدارة <strong>بيئات AWS السحابية</strong> باستخدام Terraform، وإطلاق <strong>تطبيقات Flutter</strong> من الفكرة إلى المتجر. كما أطبق التفكير الهندسي على النمو: أبني أدوات كشط ولوحات تحليلات تحوّل البيانات إلى نمو فعلي.'
        },
        about_intro_p3: {
            en: 'Beyond code, I\'m a published researcher with papers on <strong>wireless sensor networks</strong>, <strong>big data analytics</strong>, and the societal impacts of technology. I\'m currently based in <strong>Istanbul, Turkey</strong>, open to remote opportunities worldwide, and always excited to contribute to open-source and volunteer projects.',
            tr: 'Kodun ötesinde, <strong>kablosuz sensör ağları</strong>, <strong>büyük veri analitiği</strong> ve teknolojinin toplumsal etkileri üzerine yayımlanmış makaleleri olan bir araştırmacıyım. Şu anda <strong>İstanbul, Türkiye</strong>\'de yaşıyor, dünya genelinde uzaktan çalışma fırsatlarına açık ve açık kaynak projelerine katkı yapmaktan her zaman heyecan duyuyorum.',
            ar: 'بعيداً عن البرمجة، أنا باحث نشر أوراقاً علمية حول <strong>شبكات الاستشعار اللاسلكية</strong> و<strong>تحليلات البيانات الضخمة</strong> والتأثيرات المجتمعية للتكنولوجيا. أقيم حالياً في <strong>إسطنبول، تركيا</strong>، ومنفتح على الفرص عن بُعد حول العالم، ومتحمس دائماً للمساهمة في مشاريع المصدر المفتوح.'
        },

        // About — Skills section title
        about_skills_title: { en: 'Technical Skills', tr: 'Teknik Beceriler', ar: 'المهارات التقنية' },

        // About — Skill card titles & descriptions
        skill_backend_title: { en: 'Backend Development', tr: 'Backend Geliştirme', ar: 'تطوير الخلفية' },
        skill_backend_desc: {
            en: 'Designing and implementing robust REST APIs, microservices, and server-side logic with a focus on performance, security, and clean architecture patterns.',
            tr: 'Performans, güvenlik ve temiz mimari kalıplarına odaklanarak güçlü REST API\'ler, mikro hizmetler ve sunucu tarafı mantığı tasarlayıp uyguluyorum.',
            ar: 'تصميم وتطوير واجهات REST API قوية وخدمات مصغرة ومنطق الخادم مع التركيز على الأداء والأمان وأنماط البنية النظيفة.'
        },
        skill_cloud_title: { en: 'Cloud & DevOps', tr: 'Bulut & DevOps', ar: 'السحابة وDevOps' },
        skill_cloud_desc: {
            en: 'Building and managing cloud infrastructure using Infrastructure as Code, CI/CD pipelines, containerization, and monitoring for high-availability deployments.',
            tr: 'Altyapıyı Kod olarak kullanarak, CI/CD pipeline\'ları, konteynerizasyon ve izleme ile yüksek erişilebilirlik sağlayan bulut altyapısı oluşturup yönetiyorum.',
            ar: 'بناء وإدارة البنية التحتية السحابية باستخدام البنية التحتية ككود وخطوط CI/CD والحاويات والمراقبة لتحقيق توافر عالٍ.'
        },
        skill_mobile_title: { en: 'Mobile Development', tr: 'Mobil Geliştirme', ar: 'تطوير الجوال' },
        skill_mobile_desc: {
            en: 'Creating cross-platform mobile applications with rich UI, state management, local storage, and seamless integration with backend services.',
            tr: 'Zengin kullanıcı arayüzü, durum yönetimi, yerel depolama ve backend hizmetleriyle kusursuz entegrasyon ile çapraz platform mobil uygulamalar geliştiriyorum.',
            ar: 'إنشاء تطبيقات جوال متعددة المنصات بواجهة مستخدم غنية وإدارة الحالة والتخزين المحلي والتكامل السلس مع خدمات الخلفية.'
        },
        skill_fullstack_title: { en: 'Full Stack & Frontend', tr: 'Full Stack & Arayüz', ar: 'Full Stack والواجهة' },
        skill_fullstack_desc: {
            en: 'End-to-end development from database design to responsive user interfaces, with experience in modern frontend tools and frameworks.',
            tr: 'Veritabanı tasarımından duyarlı kullanıcı arayüzlerine kadar uçtan uca geliştirme; modern frontend araçları ve çerçevelerinde deneyim.',
            ar: 'التطوير الشامل من تصميم قاعدة البيانات إلى واجهات المستخدم المتجاوبة، مع خبرة في أحدث أدوات وأطر الواجهة الأمامية.'
        },
        skill_security_title: { en: 'Security & Networking', tr: 'Güvenlik & Ağ', ar: 'الأمان والشبكات' },
        skill_security_desc: {
            en: 'B.Sc. thesis on Zero Trust architecture. Experienced in secure authentication systems, network protocols, and security-first development practices.',
            tr: 'Lisans tezi Zero Trust mimarisi üzerine. Güvenli kimlik doğrulama sistemleri, ağ protokolleri ve güvenlik odaklı geliştirme pratiklerinde deneyimli.',
            ar: 'أطروحة البكالوريوس حول بنية Zero Trust. خبرة في أنظمة المصادقة الآمنة وبروتوكولات الشبكة وممارسات التطوير الأمنية.'
        },
        skill_ai_title: { en: 'AI & Modern Tools', tr: 'Yapay Zeka & Modern Araçlar', ar: 'الذكاء الاصطناعي والأدوات الحديثة' },
        skill_ai_desc: {
            en: 'Leveraging AI-assisted development and modern tooling for rapid prototyping, code generation, and intelligent automation in the development workflow.',
            tr: 'Hızlı prototipleme, kod üretimi ve akıllı otomasyon için yapay zeka destekli geliştirme ve modern araçlardan yararlanıyorum.',
            ar: 'الاستفادة من التطوير بمساعدة الذكاء الاصطناعي والأدوات الحديثة للنمذجة السريعة وتوليد الكود والأتمتة الذكية.'
        },
        skill_growth_title: { en: 'Growth Hacking', tr: 'Büyüme Stratejisi', ar: 'اختراق النمو' },
        skill_growth_desc: {
            en: 'Using engineering skills to drive measurable growth: building scrapers, analytics dashboards, automation bots, and data pipelines that turn raw signals into business traction.',
            tr: 'Mühendislik becerilerini ölçülebilir büyüme için kullanmak: ham sinyalleri iş ivmesine dönüştüren scraper\'lar, analitik paneller ve otomasyon botları geliştiriyorum.',
            ar: 'استخدام المهارات الهندسية لتحقيق نمو قابل للقياس: بناء أدوات الكشط ولوحات التحليلات وبوتات الأتمتة التي تحوّل الإشارات الخام إلى نمو تجاري.'
        },

        // About — Education section
        about_edu_title:  { en: 'Education', tr: 'Eğitim', ar: 'التعليم' },
        edu_degree:       { en: 'B.Sc. Computer Engineering', tr: 'Bilgisayar Mühendisliği Lisans', ar: 'بكالوريوس هندسة الحاسوب' },
        edu_place:        { en: 'Sharif University of Technology, Tehran, Iran', tr: 'Sharif Teknoloji Üniversitesi, Tahran, İran', ar: 'جامعة شريف للتكنولوجيا، طهران، إيران' },
        edu_desc: {
            en: 'Graduated with a GPA of 17.54/20. Thesis on Zero Trust security architecture in enterprise networks. Coursework in algorithms, operating systems, databases, computer networks, and software engineering. Active in research projects on wireless sensor networks and big data.',
            tr: '17.54/20 not ortalamasıyla mezun oldum. Kurumsal ağlarda Zero Trust güvenlik mimarisi üzerine tez. Algoritmalar, işletim sistemleri, veritabanları, bilgisayar ağları ve yazılım mühendisliğinde dersler. Kablosuz sensör ağları ve büyük veri araştırma projelerinde aktif.',
            ar: 'تخرجت بمعدل 17.54/20. أطروحة حول بنية أمان Zero Trust في شبكات المؤسسات. مناهج في الخوارزميات وأنظمة التشغيل وقواعد البيانات وشبكات الحاسوب وهندسة البرمجيات. مشاركة نشطة في مشاريع بحثية حول شبكات الاستشعار اللاسلكية والبيانات الضخمة.'
        },

        // About — Languages & Certifications section
        about_langcert_title: { en: 'Languages & Certifications', tr: 'Diller & Sertifikalar', ar: 'اللغات والشهادات' },
        lang_en_title:   { en: 'English — Fluent (TOEFL iBT: 103)', tr: 'İngilizce — Akıcı (TOEFL iBT: 103)', ar: 'الإنجليزية — طلاقة (TOEFL iBT: 103)' },
        lang_en_desc:    { en: 'Professional working proficiency in spoken and written English.', tr: 'Sözlü ve yazılı İngilizce\'de profesyonel çalışma yeterliliği.', ar: 'إتقان مهني في التحدث والكتابة باللغة الإنجليزية.' },
        lang_fa_title:   { en: 'Persian — Native', tr: 'Farsça — Anadil', ar: 'الفارسية — اللغة الأم' },
        lang_fa_desc:    { en: 'Native speaker.', tr: 'Anadil konuşmacısı.', ar: 'متحدث أصلي.' },
        lang_tr_title:   { en: 'Turkish — Intermediate', tr: 'Türkçe — Orta Seviye', ar: 'التركية — متوسط' },
        lang_tr_desc:    { en: 'Conversational proficiency, currently based in Istanbul.', tr: 'Gündelik konuşma yeterliliği, şu anda İstanbul\'da yaşıyor.', ar: 'إتقان المحادثة، مقيم حالياً في إسطنبول.' },

        // Contact form
        contact_form_title: { en: 'Send me a message', tr: 'Bana mesaj gönderin', ar: 'أرسل لي رسالة' },
        contact_name:       { en: 'Name',    tr: 'İsim',    ar: 'الاسم' },
        contact_email:      { en: 'Email',   tr: 'E-posta', ar: 'البريد الإلكتروني' },
        contact_subject:    { en: 'Subject', tr: 'Konu',    ar: 'الموضوع' },
        contact_message:    { en: 'Message', tr: 'Mesaj',   ar: 'الرسالة' },
        contact_name_ph:    { en: 'Your name',            tr: 'Adınız',                ar: 'اسمك' },
        contact_email_ph:   { en: 'your@email.com',       tr: 'email@adresiniz.com',   ar: 'بريدك@الإلكتروني.com' },
        contact_subject_ph: { en: "What's this about?",  tr: 'Konu nedir?',           ar: 'ما الموضوع؟' },
        contact_message_ph: { en: 'Write your message here...', tr: 'Mesajınızı buraya yazın...', ar: 'اكتب رسالتك هنا...' },
        contact_send:       { en: 'Send Message', tr: 'Mesaj Gönder', ar: 'إرسال' },
        contact_or:         { en: 'Or find me here', tr: 'Veya beni burada bulun', ar: 'أو تجدني هنا' },
        contact_linkedin:   { en: "Let's connect", tr: 'Bağlanalım', ar: 'لنتواصل' },
        contact_github:     { en: 'See my code',   tr: 'Kodlarımı gör', ar: 'شاهد أكوادي' },
        contact_remote: {
            en: 'Available for <strong>remote work</strong> worldwide and eager to contribute to <strong>volunteer &amp; open-source projects</strong>.',
            tr: 'Dünya genelinde <strong>uzaktan çalışmaya</strong> müsait ve <strong>gönüllü &amp; açık kaynak projelere</strong> katkıda bulunmaya istekli.',
            ar: 'متاح <strong>للعمل عن بُعد</strong> حول العالم ومتحمس للمساهمة في <strong>المشاريع التطوعية والمفتوحة المصدر</strong>.'
        }
    };

    var langBtns = document.querySelectorAll('.lang-btn');
    var savedLang = localStorage.getItem('lang') || 'en';

    function setLang(lang) {
        // Translate all text elements
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (translations[key] && translations[key][lang]) {
                el.innerHTML = translations[key][lang];
            }
        });

        // Translate placeholders (bug fix: was not handled before)
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-placeholder');
            if (translations[key] && translations[key][lang]) {
                el.placeholder = translations[key][lang];
            }
        });

        // Active button highlight
        langBtns.forEach(function (btn) {
            btn.classList.toggle('lang-btn--active', btn.dataset.lang === lang);
        });

        // RTL + html lang/dir
        var isRtl = lang === 'ar';
        document.body.classList.toggle('rtl', isRtl);
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

        localStorage.setItem('lang', lang);
    }

    langBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            setLang(this.dataset.lang);
        });
    });

    setLang(savedLang);


    // ---- Mobile nav ----
    var toggle = document.getElementById('navToggle');
    var nav    = document.getElementById('nav');

    toggle.addEventListener('click', function () {
        toggle.classList.toggle('nav-toggle--open');
        nav.classList.toggle('nav--open');
    });

    nav.querySelectorAll('.nav__link').forEach(function (link) {
        link.addEventListener('click', function () {
            toggle.classList.remove('nav-toggle--open');
            nav.classList.remove('nav--open');
        });
    });


    // ---- Smooth scroll ----
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#top') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' });
            }
        });
    });


    // ---- Card reveal on scroll ----
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.card').forEach(function (card) {
        observer.observe(card);
    });

})();
