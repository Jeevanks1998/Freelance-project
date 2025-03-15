document.addEventListener('DOMContentLoaded', function () {
    // Hamburger Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function () {
            menu.classList.toggle('active');
        });

        // Close the menu when clicking outside
        document.addEventListener('click', function (event) {
            if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
                menu.classList.remove('active');
            }
        });
    }

    // Align Download Buttons
    function alignDownloadButtons() {
        const courseCards = document.querySelectorAll('.course');
        if (courseCards.length > 0) {
            courseCards.forEach(card => {
                const buttonsContainer = card.querySelector('.course-buttons');
                if (buttonsContainer) {
                    buttonsContainer.style.display = 'flex';
                    buttonsContainer.style.justifyContent = 'space-between';
                    buttonsContainer.style.alignItems = 'center';
                    buttonsContainer.style.gap = '10px';
                }
            });
        }
    }
    window.addEventListener('load', alignDownloadButtons);

    // Chatbot Functionality
    const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
    const chatbotContainer = document.getElementById('chatbot-container');
    const closeChatbotBtn = document.getElementById('close-chatbot');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInputField = document.getElementById('chatbot-input-field');
    const chatbotSendBtn = document.getElementById('chatbot-send-btn');
    const quickQuestionBtns = document.querySelectorAll('.quick-question-btn');

    if (chatbotToggleBtn && chatbotContainer && closeChatbotBtn && chatbotMessages && chatbotInputField && chatbotSendBtn) {
        chatbotToggleBtn.addEventListener('click', () => {
            chatbotContainer.classList.toggle('active');
        });

        closeChatbotBtn.addEventListener('click', () => {
            chatbotContainer.classList.remove('active');
        });

        chatbotSendBtn.addEventListener('click', sendMessage);
        chatbotInputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });

        if (quickQuestionBtns.length > 0) {
            quickQuestionBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const question = btn.getAttribute('data-question');
                    chatbotInputField.value = question;
                    sendMessage();
                });
            });
        }
    }

    function sendMessage() {
        const userMessage = chatbotInputField.value.trim();
        if (userMessage === '') return;

        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'message user-message';
        userMessageDiv.textContent = userMessage;
        chatbotMessages.appendChild(userMessageDiv);

        chatbotInputField.value = '';
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

        setTimeout(() => {
            const botMessageDiv = document.createElement('div');
            botMessageDiv.className = 'message bot-message';
            botMessageDiv.textContent = getBotResponse(userMessage);
            chatbotMessages.appendChild(botMessageDiv);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }, 1000);
    }

    function getBotResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();
        if (lowerCaseMessage.includes('course')) {
            return "We offer courses in Full Stack Development, Data Science, Digital Marketing, Cloud Computing, Cybersecurity, Python, Machine Learning, and Artificial Intelligence.";
        } else if (lowerCaseMessage.includes('register')) {
            return "You can register by clicking the 'Register Now' button on our website or visiting the registration page.";
        } else if (lowerCaseMessage.includes('fee')) {
            return "Course fees vary. For example, Full Stack Development costs ₹25,000, and Data Science costs ₹26,000. Please check the course details for more information.";
        } else if (lowerCaseMessage.includes('placement')) {
            return "We provide 100% placement assistance with a 95% placement rate. Our hiring partners include Google, Amazon, Microsoft, and more.";
        } else if (lowerCaseMessage.includes('contact')) {
            return "You can contact us via the contact form on our website or call us at +91-1234567890.";
        } else {
            return "I'm sorry, I didn't understand that. Could you please rephrase your question?";
        }
    }

    // Callback Popup
    const popup = document.getElementById('callback-popup');
    const closePopup = document.getElementById('close-popup');

    if (popup && closePopup) {
        function openPopup() {
            popup.style.display = 'flex';
        }

        function closePopupHandler() {
            popup.style.display = 'none';
        }

        closePopup.addEventListener('click', closePopupHandler);
        setTimeout(openPopup, 1000);
    }

    // Testimonial Slider
    const sliderTrack = document.querySelector('.slider-track');
    const testimonials = document.querySelectorAll('.testimonial');

    if (sliderTrack && testimonials.length > 0) {
        const testimonialWidth = testimonials[0].offsetWidth + 20;
        let currentIndex = 0;

        function moveSlider() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            sliderTrack.style.transform = `translateX(-${currentIndex * testimonialWidth}px)`;
        }
        setInterval(moveSlider, 3000);
    }

    // Placements Slider
    const companySliderTrack = document.querySelector('.company-slider .slider-track');
    const slides = document.querySelectorAll('.company-slider .slide');

    if (companySliderTrack && slides.length > 0) {
        const slideWidth = slides[0].offsetWidth + 20;
        let companyCurrentIndex = 0;

        function moveCompanySlider() {
            companyCurrentIndex = (companyCurrentIndex + 1) % slides.length;
            companySliderTrack.style.transform = `translateX(-${companyCurrentIndex * slideWidth}px)`;
        }
        setInterval(moveCompanySlider, 3000);
    }

    // Download Syllabus
    function downloadSyllabus(pdfPath) {
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = pdfPath.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});
