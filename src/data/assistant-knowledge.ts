export type KnowledgeItem = {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
};

export const knowledgeBase: KnowledgeItem[] = [
  {
    id: "coachs",
    question: "Comment choisir un coach ?",
    answer:
      "Sur la page Coachs, compare la specialite, la zone, la tranche d age et le tarif horaire. Ouvre ensuite le profil pour voir les axes de travail et les creneaux disponibles.",
    keywords: ["coach", "coachs", "choisir", "profil", "specialite", "niveau"],
  },
  {
    id: "reservation",
    question: "Comment reserver une seance ?",
    answer:
      "Depuis un profil coach, clique sur Reserver ce coach. Le parcours de reservation te guide ensuite pour choisir le creneau et confirmer la demande.",
    keywords: ["reserver", "reservation", "creneau", "seance", "booking"],
  },
  {
    id: "prix",
    question: "Quels sont les tarifs ?",
    answer:
      "Les tarifs sont affiches sur chaque carte coach et dans le profil detaille. Ils sont indiques en EUR par heure.",
    keywords: ["prix", "tarif", "cout", "eur", "paiement"],
  },
  {
    id: "ages",
    question: "Pour quels ages est la plateforme ?",
    answer:
      "TON FOOT cible principalement les enfants de U7 a U15. Chaque coach precise sa tranche d age pour adapter les seances.",
    keywords: ["age", "ages", "u7", "u15", "enfant"],
  },
  {
    id: "zones",
    question: "Ou se passent les seances ?",
    answer:
      "La zone de chaque coach est indiquee sur sa fiche (ex: Paris 10e, 12e, 15e). Tu peux choisir selon ta localisation et les disponibilites.",
    keywords: ["zone", "adresse", "paris", "lieu", "ou"],
  },
  {
    id: "annulation",
    question: "Comment annuler ou deplacer une seance ?",
    answer:
      "Le module avance d annulation et reprogrammation est en cours d integration. En attendant, passe par le conseiller pour ajuster ton creneau.",
    keywords: ["annuler", "annulation", "deplacer", "reporter", "changer"],
  },
  {
    id: "securite",
    question: "Comment verifiez vous les coachs ?",
    answer:
      "TON FOOT fonctionne avec des profils verifies et une presentation claire des specialites. Le parent visualise les informations importantes avant toute reservation.",
    keywords: ["verifie", "verification", "securite", "fiable", "confiance"],
  },
  {
    id: "objectif",
    question: "Quels objectifs de progression sont proposes ?",
    answer:
      "Les seances ciblent la technique, la conduite de balle, la vitesse, la finition, la confiance et la regularite selon le profil de l enfant.",
    keywords: ["objectif", "progression", "technique", "vitesse", "finition"],
  },
  {
    id: "support",
    question: "Comment contacter un humain ?",
    answer:
      "Si ta demande sort du cadre standard, utilise le bouton d appel depuis l accueil au +33 0 00 00 00 00 pour parler a un conseiller humain.",
    keywords: ["humain", "conseiller", "telephone", "appel", "contact"],
  },
];

export const quickPrompts = [
  "Comment reserver une seance ?",
  "Quels sont les tarifs ?",
  "Comment choisir le bon coach ?",
  "Comment annuler une seance ?",
  "La plateforme est pour quels ages ?",
];
