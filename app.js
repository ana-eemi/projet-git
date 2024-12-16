const quotes = [
    "La vie est ce qui se passe quand tu es occupé à faire d'autres projets. - John Lennon",
    "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme. - Winston Churchill",
    "N'attends pas. Le temps ne sera jamais juste. - Napoleon Hill",
    "Ce qui ne nous tue pas nous rend plus fort. - Friedrich Nietzsche",
    "Le seul moyen de faire un excellent travail est d’aimer ce que vous faites. - Steve Jobs",
    "Soyez vous-même; tout le monde est déjà pris. - Oscar Wilde"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}