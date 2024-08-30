const translations = {
    en: {
        name: "Pamela Bitar",
        title: "Software Engineering Student | Polytechnique Montréal",
        aboutMeTitle: "About Me",
        aboutMeText: "Hi, and welcome to my website. I’m a 23-year-old software engineering student at Polytechnique Montréal with a strong passion for technology and creativity. My journey in software development is driven by curiosity and a love for problem-solving, whether it's building a new project or diving deep into the world of algorithms.",
        hobbiesText: "Beyond my academic life, I have a wide range of interests that keep me inspired. I’m an avid gamer who enjoys exploring different virtual worlds, always seeking out new challenges. Music is another big part of my life—I play both the guitar and ukulele, finding joy in creating melodies and experimenting with new sounds.",
        artText: "Art is also one of my passions, and I spend time drawing as a way to express my ideas visually. Whether it's sketching something new or improving my digital art skills, I love the creative process. Most importantly, I value the time I spend with friends, sharing experiences and making memories.",
        eagerToLearnText: "I’m constantly eager to learn, grow, and take on new challenges, both in the tech world and in my personal life.",
        cvTitle: "My Curriculum Vitae",
        downloadCVBtn: "Download CV",
        educationTitle: "Education",
        schoolName: "Polytechnique Montréal",
        degree: "Bachelor's in Software Engineering, Expected Graduation: 2026",
        projectsTitle: "Projects",
        projectLink: "Calculator",
        contactTitle: "Contact",
        emailLink: "Email",
        linkedinLink: "LinkedIn",
        githubLink: "GitHub",
        footerText: "&copy; 2024 Pamela Bitar. All rights reserved."
    },
    fr: {
        name: "Pamela Bitar",
        title: "Étudiante en Génie Logiciel | Polytechnique Montréal",
        aboutMeTitle: "À Propos de Moi",
        aboutMeText: "Bonjour et bienvenue sur mon site web. Je suis une étudiante de 23 ans en génie logiciel à Polytechnique Montréal, passionnée par la technologie et la créativité. Mon parcours en développement logiciel est motivé par la curiosité et l'amour de la résolution de problèmes, qu'il s'agisse de construire un nouveau projet ou de plonger dans le monde des algorithmes.",
        hobbiesText: "En dehors de ma vie académique, j'ai plusieurs d'intérêts et passe-temps. Je suis une grande passionnée de jeux vidéo, explorant différents mondes virtuels et cherchant toujours de nouveaux défis. La musique fait également partie de ma vie—je joue de la guitare et du ukulélé, trouvant de la joie dans la création de mélodies et l'expérimentation de nouveaux sons.",
        artText: "L'art est aussi l'une de mes passions, et je passe du temps à dessiner pour lâcher prise et laisser place à ma créativité. L'activité que j'admire le plus est de passer du temps avec mes amis, partageant des expériences et créant des souvenirs.",
        eagerToLearnText: "Je suis constamment en envie d'apprendre, de grandir, et de relever de nouveaux défis, autant dans le monde de la technologie que dans ma vie personnelle.",
        cvTitle: "Mon Curriculum Vitae",
        downloadCVBtn: "Télécharger le CV",
        educationTitle: "Éducation",
        schoolName: "Polytechnique Montréal",
        degree: "Baccalauréat en Génie Logiciel, Graduation prévue : 2026",
        projectsTitle: "Projets",
        projectLink: "Calculatrice",
        contactTitle: "Contact",
        emailLink: "Courriel",
        linkedinLink: "LinkedIn",
        githubLink: "GitHub",
        footerText: "&copy; 2024 Pamela Bitar. Tous droits réservés."
    }
};

function translatePage(language) {
    document.getElementById("name").textContent = translations[language].name;
    document.getElementById("title").textContent = translations[language].title;
    document.getElementById("aboutMeTitle").textContent = translations[language].aboutMeTitle;
    document.getElementById("aboutMeText").textContent = translations[language].aboutMeText;
    document.getElementById("hobbiesText").textContent = translations[language].hobbiesText;
    document.getElementById("artText").textContent = translations[language].artText;
    document.getElementById("eagerToLearnText").textContent = translations[language].eagerToLearnText;
    document.getElementById("cvTitle").textContent = translations[language].cvTitle;
    document.getElementById("downloadCVBtn").textContent = translations[language].downloadCVBtn;
    document.getElementById("educationTitle").textContent = translations[language].educationTitle;
    document.getElementById("schoolName").textContent = translations[language].schoolName;
    document.getElementById("degree").textContent = translations[language].degree;
    document.getElementById("projectsTitle").textContent = translations[language].projectsTitle;
    document.getElementById("projectLink").textContent = translations[language].projectLink;
    document.getElementById("contactTitle").textContent = translations[language].contactTitle;
    document.getElementById("emailLink").textContent = translations[language].emailLink;
    document.getElementById("linkedinLink").textContent = translations[language].linkedinLink;
    document.getElementById("githubLink").textContent = translations[language].githubLink;
    document.getElementById("footerText").innerHTML = translations[language].footerText;
}

document.getElementById("languageSelect").addEventListener("change", function() {
    const selectedLanguage = this.value;
    translatePage(selectedLanguage);
});

translatePage('en');
