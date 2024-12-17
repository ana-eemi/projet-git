const quotes = [
    { text: "La vie est ce qui se passe quand tu es occupé à faire d'autres projets.", author: "John Lennon" },
    { text: "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme.", author: "Winston Churchill" },
    { text: "N'attends pas. Le temps ne sera jamais juste.", author: "Napoleon Hill" },
    { text: "Ce qui ne nous tue pas nous rend plus fort.", author: "Friedrich Nietzsche" },
    { text: "Le seul moyen de faire un excellent travail est d’aimer ce que vous faites.", author: "Steve Jobs" },
    { text: "Soyez vous-même; tout le monde est déjà pris.", author: "Oscar Wilde" },
    { text: "Vivez comme si vous deviez mourir demain. Apprenez comme si vous deviez vivre éternellement.", author: "Mahatma Gandhi"},
    { text: "La vie est 10% ce qui nous arrive et 90% comment nous réagissons.", author: "Charles R. Swindoll"},
    { text: "L'avenir appartient à ceux qui croient à la beauté de leurs rêves.", author: "Eleanor Roosevelt"},
    { text: "La seule façon de faire un excellent travail est d’aimer ce que vous faites.", author: "Steve Jobs"},
    { text: "Le bonheur n’est pas quelque chose de prêt à l’emploi. Il vient de vos propres actions.", author: "Dalai Lama"},
    { text: "Ne pas essayer, c'est déjà échouer.", author: "Albert Einstein"},
    { text: "N’oubliez pas : un jour sans sourire est un jour perdu.", author: "Charlie Chaplin"},
    { text: "Le plus grand risque est de ne prendre aucun risque.", author: "Mark Zuckerberg"},
    { text: "Le seul véritable échec est celui d’abandonner.", author: "Marie Curie"},
    { text: "Faites ce que vous pouvez, avec ce que vous avez, là où vous êtes.", author: "Theodore Roosevelt"},
    { text: "Rien n'est impossible, le mot lui-même dit 'je suis possible' !", author: "Audrey Hepburn"},
    { text: "La vie est trop courte pour attendre.", author: "Unknown"},
    { text: "C'est dans les moments les plus sombres qu'on voit les étoiles.", author: "Richard Evans"},
    { text: "Il n'y a pas de raccourci vers n'importe où qui en vaille la peine.", author: "Beverly Sills"}
];

// Variable pour garder la trace des citations précédentes
let quoteHistory = [];
let currentQuote = "";

function generateQuote() {
     // Ajouter la citation actuelle dans l'historique avant de changer
     if (currentQuote) {
        quoteHistory.push(currentQuote);
    }

    // Générer une citation aléatoire
    const randomIndex = Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[randomIndex];

    // Mettre à jour la citation et l'auteur dans le DOM
    document.getElementById("quote").textContent = currentQuote.text;  // Texte de la citation
    document.getElementById("author").textContent = `- ${currentQuote.author}`; // Auteur


    // Changer le fond avec un dégradé aléatoire
    const randomGradient = Math.floor(Math.random() * gradients.length);
    document.body.style.background = gradients[randomGradient];
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center center";

    document.getElementById("previousButton").disabled = quoteHistory.length === 0;
}

function previousQuote() {
    if (quoteHistory.length > 0) {
        // Restaurer la dernière citation de l'historique
        currentQuote = quoteHistory.pop();
        document.getElementById("quote").textContent = currentQuote;

        // Désactiver le bouton si l'historique devient vide
        document.getElementById("previousButton").disabled = quoteHistory.length === 0;
    }
}

function shareQuote() {
    const quote = document.getElementById("quote").textContent;
    // Utilisation du presse-papier pour copier la citation
    navigator.clipboard.writeText(quote).then(() => {
        alert("Citation copiée dans le presse-papier !");
    }).catch(err => {
        console.error("Erreur lors de la copie : ", err);
    });
}

// Tableau de dégradés CSS
const gradients = [
    "linear-gradient(to right, #ff7e5f, #feb47b)",   // Dégradé orange-rose
    "linear-gradient(to right, #6a11cb, #2575fc)",   // Dégradé bleu-violet
    "linear-gradient(to right, #ff6a00, #ee0979)",   // Dégradé rouge-rose
    "linear-gradient(to right, #00c6ff, #0072ff)",   // Dégradé bleu clair
    "linear-gradient(to right, #ff9a9e, #fad0c4)",   // Dégradé pastel
    "linear-gradient(to right, #00b4db, #0083b0)",   // Dégradé bleu océan
    "linear-gradient(to right, #a8ff78, #78ffd6)",   // Dégradé vert clair
    "linear-gradient(to right, #c2e9fb, #a1c4fd)"    // Dégradé bleu clair
];

function toggleTheme() {
    const body = document.body;

    // Bascule entre les classes "dark-mode" et normale
    body.classList.toggle("dark-mode");

    // Mise à jour du texte du bouton
    const themeToggleButton = document.getElementById("themeToggle");
    const isDarkMode = body.classList.contains("dark-mode");
    themeToggleButton.textContent = isDarkMode ? "Mode Clair" : "Mode Sombre";

    // Enregistrer la préférence dans localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

// Appliquer le thème au chargement de la page
function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("themeToggle").textContent = "Mode Clair";
    }
}

// Appeler la fonction pour appliquer le thème au chargement
applySavedTheme();