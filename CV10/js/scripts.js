document.addEventListener("DOMContentLoaded", function () {
    console.log("Trang CV đã tải xong!");

    // Hiệu ứng xuất hiện cho toàn bộ resumeContainer
    setTimeout(() => {
        let resumeContainer = document.querySelector(".resume-container");
        resumeContainer.style.opacity = "1";
        resumeContainer.style.transform = "translateY(0)";
        resumeContainer.style.transition = "opacity 0.8s ease-in-out, transform 0.8s ease-in-out";
    }, 300);

    // Áp dụng hiệu ứng cho phần tử HỌC VẤN
    setTimeout(() => {
        let educationTitle = document.querySelector(".education-title");
        if (educationTitle) {
            educationTitle.style.opacity = "1";
            educationTitle.style.transform = "translateY(0)";
            educationTitle.style.transition = "opacity 0.8s ease-in-out, transform 0.8s ease-in-out";
        }
    }, 500); // Đảm bảo hiệu ứng này xảy ra sau khi resumeContainer xuất hiện

    const languageSelect = document.getElementById("language-select");

    // Kiểm tra nếu trình duyệt hỗ trợ LocalStorage
    let selectedLang = localStorage.getItem("selectedLanguage") || "vi";
    languageSelect.value = selectedLang;

  
    
});
