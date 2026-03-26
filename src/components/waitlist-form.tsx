"use client";

import { FormEvent, useMemo, useState } from "react";

const goalOptions = [
  "Dribble",
  "Passe",
  "Frappe",
  "Vitesse",
  "Technique",
  "Confiance",
];

export default function WaitlistForm() {
  const [parentName, setParentName] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("Paris");
  const [childAge, setChildAge] = useState("8");
  const [frequency, setFrequency] = useState("2 seances / semaine");
  const [goals, setGoals] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const canSubmit = useMemo(() => {
    return parentName.trim() && contact.trim() && city.trim() && goals.length > 0;
  }, [city, contact, goals.length, parentName]);

  function toggleGoal(goal: string) {
    setGoals((prev) => (prev.includes(goal) ? prev.filter((item) => item !== goal) : [...prev, goal]));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit || isSubmitting) {
      return;
    }

    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          parentName,
          contact,
          city,
          childAge: Number(childAge),
          frequency,
          goals,
          notes,
        }),
      });

      const result = (await response.json()) as { ok: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Echec de la preinscription.");
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Erreur inconnue.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <article className="bookingSuccess">
        <p className="cardTitle">Preinscription envoyee</p>
        <p className="p">
          Merci {parentName}. Nous te recontacterons des que les seances ouvrent dans ta zone.
        </p>
      </article>
    );
  }

  return (
    <form className="bookingForm" onSubmit={onSubmit}>
      <label className="field">
        <span className="fieldLabel">Nom du parent</span>
        <input
          className="fieldInput"
          placeholder="Ex: Nadia M."
          value={parentName}
          onChange={(event) => setParentName(event.target.value)}
        />
      </label>

      <label className="field">
        <span className="fieldLabel">Contact (email ou telephone)</span>
        <input
          className="fieldInput"
          placeholder="Ex: parent@email.com"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
        />
      </label>

      <div className="fieldGrid">
        <label className="field">
          <span className="fieldLabel">Ville</span>
          <select className="fieldInput" value={city} onChange={(event) => setCity(event.target.value)}>
            <option value="Paris">Paris</option>
            <option value="Creteil">Creteil</option>
            <option value="Charenton">Charenton</option>
            <option value="Maisons-Alfort">Maisons-Alfort</option>
            <option value="Autre proche banlieue">Autre proche banlieue</option>
          </select>
        </label>

        <label className="field">
          <span className="fieldLabel">Age de l enfant</span>
          <select className="fieldInput" value={childAge} onChange={(event) => setChildAge(event.target.value)}>
            {Array.from({ length: 8 }, (_, idx) => `${idx + 6}`).map((age) => (
              <option key={age} value={age}>
                {age} ans
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="field">
        <span className="fieldLabel">Frequence souhaitee</span>
        <select className="fieldInput" value={frequency} onChange={(event) => setFrequency(event.target.value)}>
          <option value="1 seance / semaine">1 seance / semaine</option>
          <option value="2 seances / semaine">2 seances / semaine</option>
          <option value="3-4 seances / semaine">3-4 seances / semaine</option>
        </select>
      </label>

      <div className="field">
        <span className="fieldLabel">Performances a ameliorer</span>
        <div className="goalGrid">
          {goalOptions.map((goal) => (
            <label className="goalItem" key={goal}>
              <input checked={goals.includes(goal)} type="checkbox" onChange={() => toggleGoal(goal)} />
              <span>{goal}</span>
            </label>
          ))}
        </div>
      </div>

      <label className="field">
        <span className="fieldLabel">Infos utiles (optionnel)</span>
        <textarea
          className="fieldInput fieldTextarea"
          placeholder="Ex: dispo mercredi apres midi, enfant debutant."
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
        />
      </label>

      <button className="btn btnPrimary" disabled={!canSubmit || isSubmitting} type="submit">
        {isSubmitting ? "Envoi..." : "Rejoindre la waitlist"}
      </button>

      {submitError ? <p className="cardMeta">{submitError}</p> : null}
    </form>
  );
}
