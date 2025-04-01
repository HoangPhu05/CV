const data = {
    "vi": {
        "name": "ĐINH HOÀNG PHÚ",
        "jsubtitle": "LẬP TRÌNH VIÊN",
        "education-title": "HỌC VẤN",
        "university": "Đại học Bình Dương",
        "student-info": "Sinh viên công nghệ thông tin",
        "skills-title": "KỸ NĂNG",
        "skills": ["Tiếng Anh", "Ngôn ngữ HTML", "Ngôn ngữ C#", "Ngôn ngữ Python"], // Cập nhật phần kỹ năng tiếng Việt
        "contact-title": "LIÊN HỆ",
        "email-label": "Email",
        "phone-label": "Điện thoại",
        "about-title": "GIỚI THIỆU",
        "about-text": "Xin chào, mình là Phú, hiện là sinh viên năm 2 tại trường Đại Học Bình Dương. Mình mong muốn kết nối với những người có cùng sở thích để cùng học hỏi, trao đổi kinh nghiệm và phát triển bản thân. Nếu bạn cũng quan tâm đến CNTT, đừng ngại kết nối nhé",
        "dob": "Năm Sinh: 05/07/2005",
        "experience-title": "KINH NGHIỆM",
        "teamwork": "Kinh nghiệm hoạt động nhóm.",
        "project": "Đã từng làm dự án làm app quản lý nhà trọ."
    },
    "en": {
        "name": "DINH HOANG PHU",
        "subtitle": "PROGRAMMER",
        "education-title": "EDUCATION",
        "university": "Binh Duong University",
        "student-info": "Information Technology Student",
        "skills-title": "SKILLS",
        "skills": ["English", "HTML", "C#", "Python"], // Cập nhật phần kỹ năng tiếng Anh
        "contact-title": "CONTACT",
        "email-label": "Email",
        "phone-label": "Phone",
        "about-title": "ABOUT ME",
        "about-text": "Hello, I'm Phu, currently a sophomore at Binh Duong University. I want to connect with people who have the same interests to learn, exchange experiences and develop myself. If you are also interested in IT, don't hesitate to connect.",
        "dob": "Date of Birth: 07/05/2005",
        "experience-title": "EXPERIENCE",
        "teamwork": "Teamwork experience.",
        "project": "Participated in a rental management app project."
    }
};

function switchLanguage(lang) {
    const languageData = data[lang];
    
    // Cập nhật nội dung cho các phần tử
    document.querySelector(".name").textContent = languageData.name;
    document.querySelector(".subtitle").textContent = languageData.jsubtitle || languageData.subtitle;
    document.querySelector(".education-title").textContent = languageData["education-title"];
    document.querySelector(".university").textContent = languageData.university;
    document.querySelector(".student-info").textContent = languageData["student-info"];
    document.querySelector(".skills-title").textContent = languageData["skills-title"];
    
    // Cập nhật danh sách kỹ năng
    const skillList = document.querySelectorAll(".resume-body .skill1, .resume-body .skill2, .resume-body .skill3, .resume-body .skill4");
    languageData.skills.forEach((skill, index) => {
        skillList[index].textContent = skill;
    });

    document.querySelector(".contact-title").textContent = languageData["contact-title"];
    document.querySelector(".email-label").textContent = languageData["email-label"];
    document.querySelector(".phone-label").textContent = languageData["phone-label"];
    document.querySelector(".about-title").textContent = languageData["about-title"];
    document.querySelector(".about-text").textContent = languageData["about-text"];
    document.querySelector(".dob").textContent = languageData.dob;
    document.querySelector(".experience-title").textContent = languageData["experience-title"];
    document.querySelector(".teamwork").textContent = languageData.teamwork;
    document.querySelector(".project").textContent = languageData.project;
}
