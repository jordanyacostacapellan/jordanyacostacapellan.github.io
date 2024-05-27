<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Electrical Engineering Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>John Doe</h1>
        <p>Electrical Engineer</p>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="about">
        <h2>About Me</h2>
        <p>Welcome to my portfolio! I am an electrical engineer with a passion for designing innovative solutions and working on cutting-edge projects. With experience in circuit design, power systems, and embedded systems, I bring a diverse skill set to any project.</p>
    </section>

    <section id="projects">
        <h2>Projects</h2>
        <div class="project">
            <h3>Project Title 1</h3>
            <p>Description of Project 1.</p>
            <a href="https://github.com/your-username/project1">View on GitHub</a>
        </div>
        <div class="project">
            <h3>Project Title 2</h3>
            <p>Description of Project 2.</p>
            <a href="https://github.com/your-username/project2">View on GitHub</a>
        </div>
        <!-- Add more projects as needed -->
    </section>

    <section id="skills">
        <h2>Skills</h2>
        <ul>
            <li>Circuit Design</li>
            <li>Power Systems</li>
            <li>Embedded Systems</li>
            <li>Microcontrollers</li>
            <li>PCB Layout</li>
            <li>Matlab & Simulink</li>
            <!-- Add more skills as needed -->
        </ul>
    </section>

    <section id="contact">
        <h2>Contact</h2>
        <p>You can reach me at <a href="mailto:john.doe@example.com">john.doe@example.com</a></p>
    </section>

    <footer>
        <p>&copy; 2024 John Doe. All rights reserved.</p>
    </footer>
</body>
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background: #333;
    color: #fff;
    padding: 1rem 0;
    text-align: center;
}

header h1 {
    margin: 0;
    font-size: 2.5rem;
}

header nav ul {
    list-style: none;
    padding: 0;
}

header nav ul li {
    display: inline;
    margin: 0 1rem;
}

header nav ul li a {
    color: #fff;
    text-decoration: none;
}

section {
    padding: 2rem;
    margin: 2rem 0;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.project {
    margin-bottom: 1.5rem;
}

.project h3 {
    margin: 0;
}

footer {
    text-align: center;
    padding: 1rem 0;
    background: #333;
    color: #fff;
}

</html>



