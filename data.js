// 1. تنظیمات پروژه‌ها (فقط لینک‌ها و شناسه‌ها)
const projectsData = [
    {
        id: "DocMngt",
        reportUrl: "https://app.powerbi.com/view?r=eyJrIjoiNDY4MjAxMzUtMDE2Mi00MTc5LWFjNmMtYmFiZDFiYjIzNjhhIiwidCI6ImU3MDdlN2I4LTA3YWQtNGRkZC05ZTQxLWY4Mzc5MmIwYWRiYSJ9",
        imgPlaceholder: "https://via.placeholder.com/600x400/111827/14b8a6?text=Doc+Management" // می‌توانید عکس واقعی بگذارید
    },
    {
        id: "OnlineSuperMarket",
        reportUrl: "https://app.powerbi.com/view?r=eyJrIjoiNmY1MWRiNGUtNTBiYi00YmU1LTk5MTgtNzc0YTY0ZmM1ZWNjIiwidCI6ImU3MDdlN2I4LTA3YWQtNGRkZC05ZTQxLWY4Mzc5MmIwYWRiYSJ9",
        imgPlaceholder: "https://via.placeholder.com/600x400/111827/14b8a6?text=SuperMarket"
    },
    {
        id: "DailyReports",
        reportUrl: "https://app.powerbi.com/view?r=eyJrIjoiMGZiYjlhNGYtOGNiYy00M2FmLWE4MjUtZjZkN2M5NTk4YjVhIiwidCI6ImU3MDdlN2I4LTA3YWQtNGRkZC05ZTQxLWY4Mzc5MmIwYWRiYSJ9",
        imgPlaceholder: "https://via.placeholder.com/600x400/111827/14b8a6?text=Daily+Reports"
    },
    {
        id: "WHM",
        reportUrl: "https://app.powerbi.com/view?r=eyJrIjoiOWYxNzY0ZDYtNjI5Yi00OTQ2LWExYjYtNzhkMzExYmQwOTRiIiwidCI6ImU3MDdlN2I4LTA3YWQtNGRkZC05ZTQxLWY4Mzc5MmIwYWRiYSJ9",
        imgPlaceholder: "https://via.placeholder.com/600x400/111827/14b8a6?text=Warehouse"
    }
];

// 2. ترجمه‌ها و داستان‌ها (Markdown)
const translations = {
    "en": {
        "pageTitle": "Portfolio - Hadi Dalirsefat",
        "navTitle": "My Data Analysis Experiences",
        "navHome": "Home",
        "navAbout": "About",
        "navPortfolio": "Portfolio",
        "navResume": "Resume",
        "backBtn": "Back to Portfolio",
        "viewProjectBtn": "View Story & Report",
        
        "heroTitle": "Welcome to My World of Data",
        "heroSubtitle": "A Business Intelligence Specialist transforming complex data into clear, actionable insights for process optimization.",
        "aboutTitle": "About Me",
        "aboutText": `Hi! I'm Hadi Dalirsefat, a Business Intelligence Specialist with over 4 years of experience designing, developing, and deploying data-driven solutions. My expertise lies in using Power BI (including DAX and Power Query) and SQL to build advanced management dashboards that provide actionable insights and standardize KPIs.<br><br>With a solid foundation of 11 years in engineering, I bring a unique perspective to data, allowing me to understand complex systems and perform deep root-cause analysis.`,
        "portfolioTitle": "Power BI Portfolio",
        "resumeTitle": "My Resume",
        "resumeDesc": "Download my resume to see my qualifications, work experience, and technical skills.",
        "resumeBtnEn": "Download Resume (EN)",
        "resumeBtnFa": "Download Resume (FA)",
        "footerText": "&copy; 2025 - Hadi Dalirsefat. All rights reserved.",

        // --- Project 1: Doc Management ---
        "DocMngtTitle": "Engineering Document Management",
        "DocMngtDesc": "Tracking project engineering documents in compliance with MDR and contractual schedules.",
        "DocMngtStory": `
### The Challenge
In large-scale engineering projects, tracking thousands of documents against the **Master Document Register (MDR)** is a chaotic process. We faced issues with:
* Delayed transmittals
* Lack of visibility on approval status
* Missed contractual deadlines

### The Solution
I designed a centralized **Power BI Dashboard** connected to SharePoint Lists. 

#### Key Features:
1. **Automated Tracking:** Visualizing the flow of documents from 'Issued for Review' to 'Approved'.
2. **S-Curve Analysis:** Comparing planned vs. actual progress.
3. **Delay Alerts:** highlighting bottlenecks in the approval process.

### The Result
This system reduced the document retrieval time by **40%** and ensured 100% compliance with client deadlines.
        `,

        // --- Project 2: SuperMarket ---
        "OnlineSuperMarketTitle": "Online SuperMarket Analysis",
        "OnlineSuperMarketDesc": "Data cleaning and performance metrics tracking for online supermarket services.",
        "OnlineSuperMarketStory": `
### Overview
This project focused on analyzing sales data from an online supermarket to identify purchasing patterns.

### Methodologies Used
* **ETL with Power Query:** Cleaned messy transaction data containing null values and duplicates.
* **DAX Measures:** Created complex calculations for *Customer Retention Rate* and *Basket Size*.

### Key Findings
* Weekend sales were **25% higher** than weekdays.
* Specific product bundling recommendations increased average order value.
        `,

        // --- Project 3: Daily Reports ---
        "DailyReportsTitle": "DailyReports Dashboard",
        "DailyReportsDesc": "Comparing Enterprise-level MSP plans with logged reports in SharePoint.",
        "DailyReportsStory": `
### The Goal
To bridge the gap between the high-level **Microsoft Project (MSP)** plans and the daily reality on the production floor.

### Technical Implementation
I integrated data from **Project Server** and **SharePoint Daily Logs**.
* Used **SQL Views** to aggregate daily production data.
* Built a dynamic data model to handle different granularity levels (Daily vs. Weekly).

### Impact
Senior management gained a real-time view of project slippage, allowing for immediate corrective actions.
        `,

        // --- Project 4: Warehouse ---
        "WHMTitle": "Online Warehouse Management Dashboard",
        "WHMDesc": "Real-time inventory updates accounting for material requests and reservations.",
        "WHMStory": `
### Warehouse Optimization
Managing inventory across multiple project sites requires real-time data.

### Features
* **Real-time Stock Levels:** Updates instantly as vouchers are issued.
* **Reservation System:** Visualizes stock that is physically present but reserved for upcoming tasks.
* **Reorder Point Alerts:** Automatically flags items running low.
        `
    },
    "fa": {
        "pageTitle": "نمونه کار - هادی دلیرصفت",
        "navTitle": "تجربیات تحلیل داده من",
        "navHome": "خانه",
        "navAbout": "درباره من",
        "navPortfolio": "نمونه کار",
        "navResume": "رزومه",
        "backBtn": "بازگشت به نمونه‌کارها",
        "viewProjectBtn": "مشاهده داستان و گزارش",

        "heroTitle": "به دنیای دیتای من خوش آمدید",
        "heroSubtitle": "متخصص هوش تجاری، تبدیل داده‌های پیچیده به بینش‌های شفاف و عملیاتی برای بهینه‌سازی فرآیندها.",
        "aboutTitle": "درباره من",
        "aboutText": `سلام! من هادی دلیرصفت هستم، متخصص هوش تجاری با بیش از ۴ سال تجربه. تخصص من استفاده از Power BI (DAX و Power Query) و SQL برای ساخت داشبوردهای مدیریتی است.<br><br>با ۱۱ سال سابقه مهندسی، دیدگاه منحصر به فردی در تحلیل سیستم‌های پیچیده دارم و به طراحی راه‌حل‌های BI از ETL تا نظارت بر عملکرد علاقه‌مندم.`,
        "portfolioTitle": "نمونه کارهای Power BI",
        "resumeTitle": "رزومه من",
        "resumeDesc": "رزومه من را دانلود کنید تا صلاحیت‌ها و تجربیات من را ببینید.",
        "resumeBtnEn": "Download Resume (EN)",
        "resumeBtnFa": "دانلود رزومه (FA)",
        "footerText": "© 2025 - هادی دلیرصفت. تمام حقوق محفوظ است.",

        // --- Project 1: Doc Management ---
        "DocMngtTitle": "مدیریت مستندات مهندسی (EDMS)",
        "DocMngtDesc": "پایش و رهگیری مدارک مهندسی مطابق با لیست MDR و تعهدات زمان‌بندی شده.",
        "DocMngtStory": `
### چالش اصلی
در پروژه‌های مهندسی بزرگ، پیگیری هزاران سند در برابر **MDR (نمایه اصلی مدارک)** فرآیندی پیچیده است. ما با مشکلاتی روبرو بودیم:
* تأخیر در ارسال ترانسمیتال‌ها
* عدم شفافیت در وضعیت تأیید مدارک
* از دست رفتن مهلت‌های قراردادی

### راهکار ارائه شده
من یک **داشبورد متمرکز Power BI** طراحی کردم که مستقیماً به لیست‌های شیرپوینت متصل بود.

#### ویژگی‌های کلیدی:
1. **رهگیری خودکار:** نمایش جریان مدارک از مرحله "ارسال برای بازبینی" تا "تأیید نهایی".
2. **تحلیل منحنی S:** مقایسه پیشرفت برنامه‌ای و واقعی.
3. **هشدارهای تأخیر:** شناسایی گلوگاه‌ها در فرآیند تأیید.

### نتیجه
این سیستم زمان جستجوی اسناد را **۴۰٪ کاهش داد** و انطباق ۱۰۰٪ با مهلت‌های کارفرما را تضمین کرد.
        `,

        // --- Project 2: SuperMarket ---
        "OnlineSuperMarketTitle": "تحلیل سوپرمارکت آنلاین",
        "OnlineSuperMarketDesc": "پاکسازی داده و ردیابی معیارهای عملکرد برای سرویس‌های آنلاین.",
        "OnlineSuperMarketStory": `
### نمای کلی
تمرکز این پروژه بر تحلیل داده‌های فروش یک سوپرمارکت آنلاین برای شناسایی الگوهای خرید بود.

### متدولوژی‌های استفاده شده
* **ETL با Power Query:** پاکسازی داده‌های تراکنش کثیف شامل مقادیر خالی و تکراری.
* **فرمول‌نویسی DAX:** ایجاد محاسبات پیچیده برای *نرخ بازگشت مشتری* و *اندازه سبد خرید*.

### یافته‌های کلیدی
* فروش آخر هفته‌ها **۲۵٪ بیشتر** از روزهای هفته بود.
* پیشنهاد بسته‌های محصولی خاص باعث افزایش میانگین ارزش سفارش شد.
        `,

        // --- Project 3: Daily Reports ---
        "DailyReportsTitle": "داشبورد گزارش روزانه تولید",
        "DailyReportsDesc": "مقایسه برنامه‌های MSP سطح سازمانی با گزارشات ثبت شده در شیرپوینت.",
        "DailyReportsStory": `
### هدف پروژه
ایجاد پل ارتباطی بین برنامه‌های سطح بالا در **Microsoft Project (MSP)** و واقعیت‌های روزانه در کف کارگاه.

### پیاده‌سازی فنی
من داده‌های **Project Server** و **گزارش‌های روزانه شیرپوینت** را ادغام کردم.
* استفاده از **SQL Views** برای تجمیع داده‌های تولید روزانه.
* ساخت مدل داده پویا برای مدیریت سطوح مختلف جزئیات (روزانه در برابر هفتگی).

### تأثیر
مدیریت ارشد دیدی در لحظه از انحرافات پروژه به دست آورد که امکان اقدامات اصلاحی فوری را فراهم کرد.
        `,

        // --- Project 4: Warehouse ---
        "WHMTitle": "مدیریت آنلاین انبار",
        "WHMDesc": "بروزرسانی موجودی انبار با احتساب درخواست‌ها و رزرو کالا.",
        "WHMStory": `
### بهینه‌سازی انبار
مدیریت موجودی در چندین سایت پروژه نیازمند داده‌های در لحظه است.

### ویژگی‌ها
* **سطوح موجودی زنده:** با صدور حواله فوراً به‌روز می‌شود.
* **سیستم رزرو:** کالاهایی که فیزیکی موجودند اما برای کارهای آتی رزرو شده‌اند را متمایز می‌کند.
* **هشدار نقطه سفارش:** به صورت خودکار اقلامی که رو به اتمام هستند را اعلام می‌کند.
        `
    }
};
