// --- DOM Elements ---
const langSwitcher = document.getElementById('lang-switcher');
const container = document.getElementById('portfolio-container');
const detailTitle = document.getElementById('detail-title');
const detailStory = document.getElementById('detail-story');

// --- 1. Helper: Get Icons based on Theme ---
// این تابع کد SVG مربوط به هر موضوع را برمی‌گرداند (بدون نیاز به عکس)
const getThemeIcon = (theme) => {
    const icons = {
        doc: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-teal-500 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>`,
        
        shop: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-teal-500 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
        
        chart: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-teal-500 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
        
        warehouse: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-teal-500 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
        
        default: `<svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 text-teal-500 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`
    };
    return icons[theme] || icons.default;
};

// --- 2. Logic for Index Page (Rendering Cards) ---
const renderPortfolio = () => {
    if (!container) return; 

    container.innerHTML = ''; 
    projectsData.forEach(project => {
        const iconSVG = getThemeIcon(project.theme);
        
        const cardHTML = `
            <a href="project.html?id=${project.id}" 
               class="block bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group border border-gray-700 relative">
                
                <!-- Visual Cover (Generated via CSS/SVG) -->
                <div class="relative w-full h-56 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                    
                    <!-- Background Decoration -->
                    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
                    
                    <!-- Main Icon -->
                    <div class="transform group-hover:scale-110 transition-transform duration-500">
                        ${iconSVG}
                    </div>

                    <!-- "Interactive" Badge -->
                    <div class="absolute top-4 right-4 bg-teal-900/80 backdrop-blur text-teal-300 text-xs font-bold px-3 py-1 rounded-full border border-teal-500/30 flex items-center gap-1">
                        <span class="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                        <span data-lang="badgeText">Interactive Report</span>
                    </div>

                    <!-- Hover Overlay with CTA Button -->
                    <div class="absolute inset-0 bg-gray-900/80 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                         <div class="bg-teal-500 text-gray-900 font-bold px-6 py-3 rounded-lg shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            <span data-lang="ctaBtn">View Story</span>
                         </div>
                         <p class="text-gray-300 text-sm mt-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 font-light">
                            See the analysis & dashboard
                         </p>
                    </div>
                </div>
                
                <!-- Text Content -->
                <div class="p-6 relative z-10 bg-gray-800">
                    <h3 data-lang="${project.id}Title" class="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors"></h3>
                    <p data-lang="${project.id}Desc" class="text-gray-400 mb-2 text-sm leading-relaxed line-clamp-3 text-justify"></p>
                    
                    <!-- Arrow Link at bottom -->
                    <div class="flex items-center text-teal-500 text-sm font-medium mt-4 group-hover:underline">
                        <span data-lang="viewProjectBtn">View Story & Report</span>
                        <svg class="w-4 h-4 ml-1 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </div>
                </div>
            </a>
        `;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
};

// --- Helper: Get Current Language ---
const getCurrentLang = () => localStorage.getItem('lang') || 'en';

// --- 3. Logic for Project Detail Page ---
const renderProjectDetails = () => {
    if (!detailTitle) return; 

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const project = projectsData.find(p => p.id === projectId);
    
    // Loader Elements
    const loader = document.getElementById('report-loader');
    const iframe = document.getElementById('detail-iframe');

    if (project) {
        // 1. Reset Loader State (Make it visible initially)
        if (loader) {
            loader.classList.remove('fade-out');
        }

        // 2. Set Data & Content
        detailTitle.setAttribute('data-lang', `${project.id}Title`);
        detailStory.setAttribute('data-project-id', project.id);
        renderMarkdownStory(getCurrentLang(), project.id);

        // 3. Handle Iframe Loading
        // We use a slight delay even after onload to ensure Power BI internal rendering has started
        iframe.onload = () => {
            setTimeout(() => {
                if (loader) loader.classList.add('fade-out');
            }, 2000); // 2 seconds buffer for smooth transition
        };
        
        // Set src triggers the load
        iframe.src = project.reportUrl;

    } else {
        detailTitle.innerText = "Project Not Found";
        detailStory.innerHTML = "<p class='text-red-500'>Invalid Project ID.</p>";
        if(loader) loader.style.display = 'none'; // Hide loader on error
    }
};

const renderMarkdownStory = (lang, projectId) => {
    if (!detailStory || !projectId) return;
    const storyKey = `${projectId}Story`;
    const markdownText = translations[lang][storyKey] || "";
    detailStory.innerHTML = marked.parse(markdownText);
};

// --- 4. Global Language Logic ---
const updateTextContent = (lang) => {
    const textElements = document.querySelectorAll('[data-lang]');
    textElements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    if (detailStory) {
        const projectId = detailStory.getAttribute('data-project-id');
        renderMarkdownStory(lang, projectId);
    }
};

const setLanguage = (lang) => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    if (langSwitcher) {
        langSwitcher.textContent = lang === 'en' ? 'فارسی' : 'English';
    }
    localStorage.setItem('lang', lang);
    updateTextContent(lang);
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = getCurrentLang();
    renderPortfolio();
    renderProjectDetails();
    setLanguage(savedLang);

    if (langSwitcher) {
        langSwitcher.addEventListener('click', () => {
            const currentLang = document.documentElement.lang;
            const newLang = currentLang === 'en' ? 'fa' : 'en';
            setLanguage(newLang);
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
