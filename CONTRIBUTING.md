# Guide de Contribution

Merci de votre intérêt pour ce projet ! Nous apprécions toutes les contributions, qu'elles soient sous forme de signalement de bug, de suggestions d'amélioration, ou de propositions de code. Veuillez suivre ce guide pour contribuer efficacement.

---

## Table des Matières
- [Comment contribuer](#comment-contribuer)
- [Configurer votre environnement](#configurer-votre-environnement)
- [Règles de contribution](#règles-de-contribution)
- [Workflow Git](#workflow-git)
- [Bonnes pratiques pour les commits](#bonnes-pratiques-pour-les-commits)
- [Tests](#tests)

---

## Comment contribuer

Voici plusieurs façons de contribuer au projet :
1. **Signaler un bug** : Créez une issue décrivant le problème rencontré.
2. **Suggérer une amélioration** : Proposez des idées pour améliorer le projet.
3. **Corriger un problème ou ajouter une fonctionnalité** : Suivez le workflow ci-dessous pour soumettre votre code.

---

## Configurer votre environnement

1. Clonez le dépôt :
   ```bash
   git clone git@github.com:TonUtilisateur/TonRepo.git
   cd TonRepo
2. Assurez-vous que toutes les dépendances sont installées (si applicable) :
   npm install
3. Vérifiez que tout fonctionne correctement en lançant les tests :
   npm test

##Règles de contribution
1.Créer une issue avant de coder :
- Décrivez le problème ou la fonctionnalité que vous voulez traiter.
- Attendez un retour avant de commencer pour éviter le travail redondant.
2. Respecter le format de code :
Le code sera vérifié automatiquement par un hook (linter). Corrigez les erreurs signalées avant de committer.
3. Documentation :
Si votre contribution nécessite des changements importants, mettez à jour la documentation (par exemple, le fichier README.md).

##Workflow Git
1. Créer une branche pour vos changements :
   git checkout -b feature/nom-fonctionnalité
2. Faire des commits significatifs et signés :
Exemple :
   git commit -S -m "Ajout de la fonctionnalité X"
4. Pousser vos changements :
   git push origin feature/nom-fonctionnalité
5. Créer une pull request :
Allez sur la page GitHub du dépôt et ouvrez une pull request vers la branche develop.
6. Fournissez un titre et une description claire.
7. Attendre une revue :
- Un membre de l'équipe examinera votre pull request.
- Faites les modifications demandées si nécessaire.

##Bonnes pratiques pour les commits
Messages clairs et descriptifs :

- Première ligne : résumé (50 caractères max).
- Ligne vide.
- Détails supplémentaires (72 caractères max par ligne).

##Tests
1. Avant de soumettre votre pull request, exécutez tous les tests :
   npm test
2. Si vous ajoutez une nouvelle fonctionnalité, écrivez des tests correspondants.
