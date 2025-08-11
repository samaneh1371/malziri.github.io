const translations = {
    fa: {
        // نوار بالایی 
        fullname: "سمانه مالزیری",
        title: "برنامه نویس / توسعه دهنده",
        // مشخصات فردی و اطلاعات تماس 
        personal_info_title: "مشخصات فردی و اطلاعات تماس",
        age: "سن : 33 سال",
        mobile: "موبایل : ",
        mobile_number: "09307794276",
        email: "ایمیل : ",
        location: "محل سکونت : البرز ، فردیس",
        linkdin: "لینکدین :",
        github: "گیت هاب :",
        // درباره من 
        aboutme: "درباره من",
        aboutme_text: " من یک برنامه‌نویس با 3 سال و 7 ماه تجربه در زمینه برنامه‌نویسی ++C و استفاده از فریمورک Qt هستم.در طول این مدت، با متدولوژی‌های Agile و Scrum کار کرده‌ام و به کارهای تیمی و محیط‌های پویا علاقه‌مندم. همواره در تلاش برای افزایش دانش و گسترش توانایی‌های برنامه‌نویسی خود هستم.علاوه بر این، از چالش‌ها و حل مسائل لذت می‌برم و با مسئولیت‌پذیری بالا، همواره تسک‌ها و پروژه‌های خود را به پایان می‌رسانم.توانایی  در کار گروهی و ارتباط مؤثر با اعضای تیم، به من این امکان را می‌دهد که در پروژه‌های مختلف به خوبی عمل کنم و به نتایج مطلوب دست یابم.با اشتیاق به یادگیری و به‌روز نگه‌داشتن مهارت‌هایم، آماده‌ام تا در پروژه‌های جدید و چالش‌برانگیز شرکت کنم و به رشد و پیشرفت تیم کمک کنم.",
        skills: "مهارت ها",
        education:"تحصیلات ",
        edu_dgree: "کارشناسی - حقوق",
        edu_unit: "دانشگاه پیام نور لرستان - واحد خرم آباد",
        edu_date: " 1398 - 1400",
        edu_dgree2: "کارشناسی - مهندسی کامپیوتر - سخت افزار",
        edu_unit2: "دانشگاه صنعتی جندی شاپور ",
        edu_date2: "1390 - 1395",
        // سابقه شغلی
        prfo_expr: "سابقه شغلی",
        job_title: "کارشناس توسعه نرم افزار  ",
        job_name: "شرکت نرم افزاری امن پرداز",
        job_date: "بهمن 1400 - تا کنون",
        job_loc: " ایران ، گرمدره",
        // سابقه شغلی2 
        job_title2: "مسئول تولید محتوا",
        job_name2: "مجله آنلاین سبک زندگی کاویاب ",
        job_date2: "مهر 1396 - آبان 1399",
        job_loc2: " ایران ، تهران",
        job_desc: "در زمینه تولید محتوا برای سایت کاویاب، مقاله و مطالب تخصصی مرتبط با فناوری‌های روز را تدوین و منتشر می‌کردم. این مسئولیت شامل تحقیق دقیق بر روی موضوعات مختلف تکنولوژی، تحلیل روندهای بازار، و ارائه توضیحات ساده و قابل فهم برای مخاطبان تخصصی و عمومی بود. هدف اصلی، انتقال مفاهیم پیچیده فناوری به زبان ساده و کاربردی با حفظ دقت علمی و فنی بود.",
        footer: "کلیه حقوق مادی و معنوی متعلق به سمانه مالزیری می باشد - ۱۴۰۴"
    },
    en: {
        // header
        fullname: "Samaneh Malziri",
        title: "Developer / Programmer",
        // Personal Info & Contact
        personal_info_title: "Personal Info & Contact",
        age: "Age : 33 yrs old",
        mobile: "Mobile : ",
        mobile_number: "09307794276",
        email: "Email : ",
        location: "Location : Iran, Alborz",
        linkdin: "Linked in : ",
        github: "Github :",
        // about me
        aboutme: "About Me",
        aboutme_text: "I am a programmer with 3 years and 7 months of experience in C++ programming and using the Qt framework. During this time, I have worked with Agile and Scrum methodologies and am passionate about teamwork and dynamic environments. I am always striving to expand my knowledge and enhance my programming skills. Moreover, I enjoy taking on challenges and solving problems, and with a high sense of responsibility, I consistently complete my tasks and projects. My ability to work effectively in teams and communicate efficiently with team members allows me to perform well in various projects and achieve desirable outcomes. With a strong enthusiasm for learning and keeping my skills up-to-date, I am ready to contribute to new and challenging projects and help the team grow and succeed.",
        skills: "Skills",
        education: "Education",
        edu_dgree: "B.A. Law",
        edu_unit: "Pnu University - Lorestan, Khorram Abad Branch",
        edu_date: "2019 - 2021",
        edu_dgree2: "B.Sc. Computer Engineering - Hardware",
        edu_unit2: "Jondishapoor university of Dezful",
        edu_date2: "2011 - 2016",
        // job Section
        prfo_expr: "Professional Experience",
        job_title: "Software Developer",
        job_name: "AmnParadaz Software Co.",
        job_date: "January 2022 – Present",
        job_loc: "Iran, Garmdareh",
        job_title2: "Content Creator",
        job_name2: "Kavyab Lifestyle Online Magazine",
        job_date2: "October 2017 – November 2020",
        job_loc2: "Iran, Tehran",
        job_desc: "In the field of content production for Kavyab website, I curated and published specialized articles and materials related to cutting-edge technologies. This responsibility involved thorough research on various technological topics, analyzing market trends, and delivering clear explanations for both specialized and general audiences. The primary objective was to simplify complex technological concepts into accessible, practical language while maintaining scientific and technical accuracy.",
        footer: "© 2025 Samaneh Malziri - All Rights Reserved"
    },
};

let currentLanguage = "fa";

function updateLanguage() {
    document.documentElement.dir = currentLanguage === "fa" ? "rtl" : "ltr";

    document.querySelectorAll("[data-lang-key]").forEach((element) => {
        const key = element.getAttribute("data-lang-key");
        element.textContent = translations[currentLanguage][key];
    });
}

document.getElementById("toggleLanguage").addEventListener("click", () => {
    currentLanguage = currentLanguage === "fa" ? "en" : "fa";

    document.querySelectorAll('.language-content').forEach(el => {
        el.classList.add('hidden');
    });
    
    document.getElementById(currentLanguage + '-content').classList.remove('hidden');
    
    updateLanguage();
});

updateLanguage();