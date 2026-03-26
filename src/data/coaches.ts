export type Coach = {
  slug: string;
  name: string;
  specialty: string;
  pricePerHour: number;
  area: string;
  bio: string;
  ageRange: string;
  focus: string[];
  slots: string[];
};

export const coaches: Coach[] = [
  {
    slug: "coach-sami",
    name: "Coach Sami",
    specialty: "Technique et conduite de balle",
    pricePerHour: 25,
    area: "Paris 15e",
    bio: "Ancien joueur régional, Sami accompagne les enfants avec une méthode progressive et ludique.",
    ageRange: "U7 à U13",
    focus: ["Contrôle orienté", "Conduite de balle", "Confiance"],
    slots: ["Mercredi 14:00", "Samedi 10:00", "Dimanche 11:00"],
  },
  {
    slug: "coach-alex",
    name: "Coach Alex",
    specialty: "Vitesse et appuis",
    pricePerHour: 30,
    area: "Paris 12e",
    bio: "Préparateur athlétique orienté football, Alex travaille la coordination et les changements de rythme.",
    ageRange: "U9 à U15",
    focus: ["Explosivité", "Appuis", "Coordination"],
    slots: ["Mardi 18:00", "Jeudi 18:00", "Samedi 09:00"],
  },
  {
    slug: "coach-yass",
    name: "Coach Yass",
    specialty: "Finition et confiance",
    pricePerHour: 25,
    area: "Paris 10e",
    bio: "Spécialisé sur les gestes de finition, Yass aide les jeunes à prendre les bonnes décisions devant le but.",
    ageRange: "U8 à U14",
    focus: ["Frappe", "Prise d'information", "Gestion du stress"],
    slots: ["Mercredi 16:00", "Vendredi 17:30", "Dimanche 09:30"],
  },
];

export function getCoachBySlug(slug: string) {
  return coaches.find((coach) => coach.slug === slug);
}
