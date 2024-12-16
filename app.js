const quotes = [
    "La vie est ce qui se passe quand tu es occupé à faire d'autres projets. - John Lennon",
    "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme. - Winston Churchill",
    "N'attends pas. Le temps ne sera jamais juste. - Napoleon Hill",
    "Ce qui ne nous tue pas nous rend plus fort. - Friedrich Nietzsche",
    "Le seul moyen de faire un excellent travail est d’aimer ce que vous faites. - Steve Jobs",
    "Soyez vous-même; tout le monde est déjà pris. - Oscar Wilde",
    "Vivez comme si vous deviez mourir demain. Apprenez comme si vous deviez vivre éternellement. - Mahatma Gandhi",
    "La vie est 10% ce qui nous arrive et 90% comment nous réagissons. - Charles R. Swindoll",
    "L'avenir appartient à ceux qui croient à la beauté de leurs rêves. - Eleanor Roosevelt",
    "La seule façon de faire un excellent travail est d’aimer ce que vous faites. - Steve Jobs",
    "Le bonheur n’est pas quelque chose de prêt à l’emploi. Il vient de vos propres actions. - Dalai Lama",
    "Ne pas essayer, c'est déjà échouer. - Albert Einstein",
    "N’oubliez pas : un jour sans sourire est un jour perdu. - Charlie Chaplin",
    "Le plus grand risque est de ne prendre aucun risque. - Mark Zuckerberg",
    "Le seul véritable échec est celui d’abandonner. - Marie Curie",
    "Faites ce que vous pouvez, avec ce que vous avez, là où vous êtes. - Theodore Roosevelt",
    "Rien n'est impossible, le mot lui-même dit 'je suis possible' ! - Audrey Hepburn",
    "La vie est trop courte pour attendre. - Unknown",
    "C'est dans les moments les plus sombres qu'on voit les étoiles. - Richard Evans",
    "Il n'y a pas de raccourci vers n'importe où qui en vaille la peine. - Beverly Sills"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
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