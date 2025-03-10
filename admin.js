// Sample Admin Credentials (for demonstration purposes only)
const adminCredentials = {
    username: "admin",
    password: "admin123",
};

// Login Form Submission
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate credentials
    if (username === adminCredentials.username && password === adminCredentials.password) {
        alert('Login successful! Redirecting to admin panel...');
        document.getElementById('login-section').style.display = 'none'; // Hide login section
        document.getElementById('admin-panel').style.display = 'block'; // Show admin panel

        // Initialize admin panel functionality after login
        initializeAdminPanel();
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

// Initialize Admin Panel Functionality
function initializeAdminPanel() {
    // Sample Data
    let courses = [];
    let batches = [];
    let students = [];
    let content = [];

    // DOM Elements
    const courseForm = document.getElementById('course-form-content');
    const batchForm = document.getElementById('batch-form-content');
    const contentForm = document.getElementById('content-form-content');
    const courseList = document.getElementById('course-list');
    const batchList = document.getElementById('batch-list');
    const studentList = document.getElementById('student-list');
    const contentList = document.getElementById('content-list');

    // Add Course
    document.getElementById('add-course-btn').addEventListener('click', () => {
        document.getElementById('course-form').style.display = 'block';
    });

    courseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const course = {
            name: document.getElementById('course-name').value,
            description: document.getElementById('course-description').value,
            duration: document.getElementById('course-duration').value,
            fees: document.getElementById('course-fees').value,
            syllabus: document.getElementById('course-syllabus').value,
            prerequisites: document.getElementById('course-prerequisites').value,
        };
        courses.push(course);
        renderCourses();
        courseForm.reset();
        document.getElementById('course-form').style.display = 'none';
    });

    // Update Course
    document.getElementById('update-course-btn').addEventListener('click', () => {
        const selectedCourse = prompt('Enter the index of the course to update:');
        if (selectedCourse !== null && courses[selectedCourse]) {
            const updatedCourse = {
                name: prompt('Enter new course name:', courses[selectedCourse].name),
                description: prompt('Enter new course description:', courses[selectedCourse].description),
                duration: prompt('Enter new course duration:', courses[selectedCourse].duration),
                fees: prompt('Enter new course fees:', courses[selectedCourse].fees),
                syllabus: prompt('Enter new course syllabus:', courses[selectedCourse].syllabus),
                prerequisites: prompt('Enter new course prerequisites:', courses[selectedCourse].prerequisites),
            };
            courses[selectedCourse] = updatedCourse;
            renderCourses();
        } else {
            alert('Invalid course index.');
        }
    });

    // Remove Course
    document.getElementById('remove-course-btn').addEventListener('click', () => {
        const selectedCourse = prompt('Enter the index of the course to remove:');
        if (selectedCourse !== null && courses[selectedCourse]) {
            courses.splice(selectedCourse, 1);
            renderCourses();
        } else {
            alert('Invalid course index.');
        }
    });

    // Add Batch
    document.getElementById('add-batch-btn').addEventListener('click', () => {
        document.getElementById('batch-form').style.display = 'block';
    });

    batchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const batch = {
            course: document.getElementById('batch-course').value,
            startDate: document.getElementById('batch-start-date').value,
            mode: document.getElementById('batch-mode').value,
        };
        batches.push(batch);
        renderBatches();
        batchForm.reset();
        document.getElementById('batch-form').style.display = 'none';
    });

    // Update Batch
    document.getElementById('update-batch-btn').addEventListener('click', () => {
        const selectedBatch = prompt('Enter the index of the batch to update:');
        if (selectedBatch !== null && batches[selectedBatch]) {
            const updatedBatch = {
                course: prompt('Enter new batch course:', batches[selectedBatch].course),
                startDate: prompt('Enter new batch start date:', batches[selectedBatch].startDate),
                mode: prompt('Enter new batch mode:', batches[selectedBatch].mode),
            };
            batches[selectedBatch] = updatedBatch;
            renderBatches();
        } else {
            alert('Invalid batch index.');
        }
    });

    // Remove Batch
    document.getElementById('remove-batch-btn').addEventListener('click', () => {
        const selectedBatch = prompt('Enter the index of the batch to remove:');
        if (selectedBatch !== null && batches[selectedBatch]) {
            batches.splice(selectedBatch, 1);
            renderBatches();
        } else {
            alert('Invalid batch index.');
        }
    });

    // Add Content
    document.getElementById('add-blog-btn').addEventListener('click', () => {
        document.getElementById('content-form').style.display = 'block';
    });

    document.getElementById('add-testimonial-btn').addEventListener('click', () => {
        document.getElementById('content-form').style.display = 'block';
    });

    document.getElementById('add-announcement-btn').addEventListener('click', () => {
        document.getElementById('content-form').style.display = 'block';
    });

    contentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newContent = {
            type: document.getElementById('content-type').value,
            title: document.getElementById('content-title').value,
            description: document.getElementById('content-description').value,
        };
        content.push(newContent);
        renderContent();
        contentForm.reset();
        document.getElementById('content-form').style.display = 'none';
    });

    // Render Courses
    function renderCourses() {
        courseList.innerHTML = courses.map((course, index) => `
            <div class="course-item">
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <p>Duration: ${course.duration} | Fees: ${course.fees}</p>
                <button onclick="deleteCourse(${index})">Delete</button>
            </div>
        `).join('');
    }

    // Render Batches
    function renderBatches() {
        batchList.innerHTML = batches.map((batch, index) => `
            <div class="batch-item">
                <h3>${batch.course}</h3>
                <p>Start Date: ${batch.startDate} | Mode: ${batch.mode}</p>
                <button onclick="deleteBatch(${index})">Delete</button>
            </div>
        `).join('');
    }

    // Render Content
    function renderContent() {
        contentList.innerHTML = content.map((item, index) => `
            <div class="content-item">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <button onclick="deleteContent(${index})">Delete</button>
            </div>
        `).join('');
    }

    // Delete Functions
    function deleteCourse(index) {
        courses.splice(index, 1);
        renderCourses();
    }

    function deleteBatch(index) {
        batches.splice(index, 1);
        renderBatches();
    }

    function deleteContent(index) {
        content.splice(index, 1);
        renderContent();
    }

    // Initial Render
    renderCourses();
    renderBatches();
    renderContent();
}