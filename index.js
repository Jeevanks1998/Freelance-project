// JavaScript to handle the callback popup
document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('callback-popup');
    const closePopup = document.getElementById('close-popup');

    // Function to open the popup
    function openPopup() {
        popup.style.display = 'flex';
    }

    // Function to close the popup
    function closePopupHandler() {
        popup.style.display = 'none';
    }

    // Event listener for closing the popup
    closePopup.addEventListener('click', closePopupHandler);

    // Example: Open the popup after 1 seconds (for demonstration)
    setTimeout(openPopup, 1000);
});

// Chatbot Functionality
const chatbotContainer = document.getElementById('chatbot-container');
const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
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

// JavaScript for Testimonial Slider
document.addEventListener('DOMContentLoaded', function () {
    const sliderTrack = document.querySelector('.slider-track');
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialWidth = testimonials[0].offsetWidth + 20; // Width + margin
    let currentIndex = 0;

    // Function to move the slider
    function moveSlider(direction) {
        if (direction === 'next' && currentIndex < testimonials.length - 1) {
            currentIndex++;
        } else if (direction === 'prev' && currentIndex > 0) {
            currentIndex--;
        }
        sliderTrack.style.transform = `translateX(-${currentIndex * testimonialWidth}px)`;
    }

    // Event listeners for navigation buttons
    prevButton.addEventListener('click', () => moveSlider('prev'));
    nextButton.addEventListener('click', () => moveSlider('next'));
});

// JavaScript for Placements Slider (Optional Manual Navigation)
document.addEventListener('DOMContentLoaded', function () {
    const sliderTrack = document.querySelector('.company-slider .slider-track');
    const slides = document.querySelectorAll('.company-slider .slide');
    const slideWidth = slides[0].offsetWidth + 20; // Width + margin
    let currentIndex = 0;

    // Function to move the slider
    function moveSlider(direction) {
        if (direction === 'next' && currentIndex < slides.length - 1) {
            currentIndex++;
        } else if (direction === 'prev' && currentIndex > 0) {
            currentIndex--;
        }
        sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Optional: Add navigation buttons
    const prevButton = document.createElement('button');
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevButton.style.position = 'absolute';
    prevButton.style.left = '10px';
    prevButton.style.top = '50%';
    prevButton.style.transform = 'translateY(-50%)';
    prevButton.style.background = 'none';
    prevButton.style.border = 'none';
    prevButton.style.fontSize = '24px';
    prevButton.style.color = '#007BFF';
    prevButton.style.cursor = 'pointer';
    prevButton.addEventListener('click', () => moveSlider('prev'));

    const nextButton = document.createElement('button');
    nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextButton.style.position = 'absolute';
    nextButton.style.right = '10px';
    nextButton.style.top = '50%';
    nextButton.style.transform = 'translateY(-50%)';
    nextButton.style.background = 'none';
    nextButton.style.border = 'none';
    nextButton.style.fontSize = '24px';
    nextButton.style.color = '#007BFF';
    nextButton.style.cursor = 'pointer';
    nextButton.addEventListener('click', () => moveSlider('next'));

    document.querySelector('.company-slider').appendChild(prevButton);
    document.querySelector('.company-slider').appendChild(nextButton);
});