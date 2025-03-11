// Toggle Hamburger Menu
document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});

// Chatbot Functionality
const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
const chatbotContainer = document.getElementById('chatbot-container');
const closeChatbotBtn = document.getElementById('close-chatbot');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInputField = document.getElementById('chatbot-input-field');
const chatbotSendBtn = document.getElementById('chatbot-send-btn');
const quickQuestionBtns = document.querySelectorAll('.quick-question-btn');

// Toggle Chatbot
chatbotToggleBtn.addEventListener('click', () => {
    chatbotContainer.style.display = 'block';
});

// Close Chatbot
closeChatbotBtn.addEventListener('click', () => {
    chatbotContainer.style.display = 'none';
});

// Send Message
chatbotSendBtn.addEventListener('click', () => {
    sendMessage();
});

chatbotInputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Quick Questions
quickQuestionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const question = btn.getAttribute('data-question');
        chatbotInputField.value = question;
        sendMessage();
    });
});

// Function to Send Message
function sendMessage() {
    const userMessage = chatbotInputField.value.trim();
    if (userMessage === '') return;

    // Display User Message
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user-message';
    userMessageDiv.textContent = userMessage;
    chatbotMessages.appendChild(userMessageDiv);

    // Clear Input Field
    chatbotInputField.value = '';

    // Scroll to Bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

    // Simulate Bot Response
    setTimeout(() => {
        const botMessageDiv = document.createElement('div');
        botMessageDiv.className = 'message bot-message';
        botMessageDiv.textContent = getBotResponse(userMessage);
        chatbotMessages.appendChild(botMessageDiv);

        // Scroll to Bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }, 1000);
}

// Function to Generate Bot Responses
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

function openPopup() {
    popup.style.display = 'flex';
}

function closePopupHandler() {
    popup.style.display = 'none';
}

closePopup.addEventListener('click', closePopupHandler);

// Example: Open the popup after 1 second
setTimeout(openPopup, 1000);

// Testimonial and Placements Sliders
document.addEventListener('DOMContentLoaded', function () {
    // Testimonial Slider
    const sliderTrack = document.querySelector('.slider-track');
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialWidth = testimonials[0].offsetWidth + 20; // Width + margin
    let currentIndex = 0;

    function moveSlider(direction) {
        if (direction === 'next' && currentIndex < testimonials.length - 1) {
            currentIndex++;
        } else if (direction === 'prev' && currentIndex > 0) {
            currentIndex--;
        }
        sliderTrack.style.transform = `translateX(-${currentIndex * testimonialWidth}px)`;
    }

    prevButton.addEventListener('click', () => moveSlider('prev'));
    nextButton.addEventListener('click', () => moveSlider('next'));

    // Placements Slider
    const companySliderTrack = document.querySelector('.company-slider .slider-track');
    const slides = document.querySelectorAll('.company-slider .slide');
    const slideWidth = slides[0].offsetWidth + 20; // Width + margin
    let companyCurrentIndex = 0;

    function moveCompanySlider(direction) {
        if (direction === 'next' && companyCurrentIndex < slides.length - 1) {
            companyCurrentIndex++;
        } else if (direction === 'prev' && companyCurrentIndex > 0) {
            companyCurrentIndex--;
        }
        companySliderTrack.style.transform = `translateX(-${companyCurrentIndex * slideWidth}px)`;
    }

    const companyPrevButton = document.createElement('button');
    companyPrevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    companyPrevButton.style.position = 'absolute';
    companyPrevButton.style.left = '10px';
    companyPrevButton.style.top = '50%';
    companyPrevButton.style.transform = 'translateY(-50%)';
    companyPrevButton.style.background = 'none';
    companyPrevButton.style.border = 'none';
    companyPrevButton.style.fontSize = '24px';
    companyPrevButton.style.color = '#007BFF';
    companyPrevButton.style.cursor = 'pointer';
    companyPrevButton.addEventListener('click', () => moveCompanySlider('prev'));

    const companyNextButton = document.createElement('button');
    companyNextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    companyNextButton.style.position = 'absolute';
    companyNextButton.style.right = '10px';
    companyNextButton.style.top = '50%';
    companyNextButton.style.transform = 'translateY(-50%)';
    companyNextButton.style.background = 'none';
    companyNextButton.style.border = 'none';
    companyNextButton.style.fontSize = '24px';
    companyNextButton.style.color = '#007BFF';
    companyNextButton.style.cursor = 'pointer';
    companyNextButton.addEventListener('click', () => moveCompanySlider('next'));

    document.querySelector('.company-slider').appendChild(companyPrevButton);
    document.querySelector('.company-slider').appendChild(companyNextButton);
});
