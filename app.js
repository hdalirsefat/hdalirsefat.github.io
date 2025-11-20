// --- DOM Elements ---
const langSwitcher = document.getElementById('lang-switcher');
const container = document.getElementById('portfolio-container');
const detailTitle = document.getElementById('detail-title');
const detailStory = document.getElementById('detail-story');

// --- 1. Helper Function: Get Current Language ---
const getCurrentLang = () => localStorage.getItem('lang') || 'en';

// --- 2. Logic for Index Page (Rendering Cards) ---
const renderPortfolio = () => {
    if (!container) return; // Exit if not on index page

    container.innerHTML = ''; 
    projectsData.forEach(project => {
        // Note: Link goes to project.html with an ID parameter
        const cardHTML = `
            <a href="project.html?id=${project.id}" 
               class="block bg-gray-800 rounded-lg shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-teal-500/30 group border border-gray-700">
                
                <div class="relative w-full h-56 bg-gray-700 overflow-hidden">
                    <img src="${project.imgPlaceholder}" alt="${project.id}" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-all">
                        <span class="bg-teal-500 text-gray-900 px-4 py-2 rounded font-bold shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" data-lang="viewProjectBtn">
                            View Project
                        </span>
                    </div>
                </div>
                
                <div class="p-6">
                    <h3 data-lang="${project.id}Title" class="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors"></h3>
                    <p data-lang="${project.id}Desc" class="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3 text-justify"></p>
                </div>
            </a>
        `;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
};

// --- 3. Logic for Project Detail Page (Parsing Markdown) ---
const renderProjectDetails = () => {
    if (!detailTitle) return; // Exit if not on project page

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    // Find project configuration
    const project = projectsData.find(p => p.id === projectId);

    if (project) {
        // Set Iframe Source
        document.getElementById('detail-iframe').src = project.reportUrl;
        
        // Assign data-lang attributes for automatic translation updates
        detailTitle.setAttribute('data-lang', `${project.id}Title`);
        
        // We store the project ID on the container to help the translation function know WHAT to translate
        detailStory.setAttribute('data-project-id', project.id);
        
        // Render initial Markdown
        renderMarkdownStory(getCurrentLang(), project.id);
    } else {
        // Error handling
        detailTitle.innerText = "Project Not Found";
        detailStory.innerHTML = "<p class='text-red-500'>Invalid Project ID.</p>";
    }
};

// Helper to parse and inject Markdown
const renderMarkdownStory = (lang, projectId) => {
    if (!detailStory || !projectId) return;
    
    const storyKey = `${projectId}Story`;
    const markdownText = translations[lang][storyKey] || "";
    
    // Use the 'marked' library to convert Markdown -> HTML
    detailStory.innerHTML = marked.parse(markdownText);
};

// --- 4. Global Language Logic ---
const updateTextContent = (lang) => {
    // A. Update standard elements
    const textElements = document.querySelectorAll('[data-lang]');
    textElements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // B. Re-render Markdown if we are on the detail page
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

// --- 5. Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = getCurrentLang();

    // Run page-specific logic
    renderPortfolio();
    renderProjectDetails();

    // Apply language settings
    setLanguage(savedLang);

    // Event Listeners
    if (langSwitcher) {
        langSwitcher.addEventListener('click', () => {
            const currentLang = document.documentElement.lang;
            const newLang = currentLang === 'en' ? 'fa' : 'en';
            setLanguage(newLang);
        });
    }

    // Smooth Scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
