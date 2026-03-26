"use client";

import { FormEvent, useMemo, useState } from "react";

type BookingFormProps = {
  coachName: string;
  slots: string[];
};

const performanceOptions = [
  "Dribble",
  "Passe",
  "Frappe",
  "Vitesse",
  "Technique",
  "Controle",
  "Conduite de balle",
  "Confiance",
  "Coordination",
  "Endurance",
];

export default function BookingForm({ coachName, slots }: BookingFormProps) {
  const [parentName, setParentName] = useState("");
  const [childName, setChildName] = useState("");
  const [ageGroup, setAgeGroup] = useState("6-7");
  const [slot, setSlot] = useState(slots[0] ?? "");
  const [paymentMethod, setPaymentMethod] = useState("Virement");
  const [goals, setGoals] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = useMemo(() => {
    return parentName.trim() && childName.trim() && slot && goals.length > 0;
  }, [childName, goals.length, parentName, slot]);

  function toggleGoal(goal: string) {
    setGoals((prev) =>
      prev.includes(goal) ? prev.filter((item) => item !== goal) : [...prev, goal],
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit) {
      return;
    }
    setSubmitted(true);
  }

  return (
    <section className="card bookingCard">
      <p className="cardTitle">Reservation avec {coachName}</p>
      <p className="cardMeta">
        Complete les infos parent/enfant, puis choisis les performances a travailler.
      </p>

      {submitted ? (
        <article className="bookingSuccess">
          <p className="cardTitle">Demande envoyee</p>
          <p className="p">
            Reservation en attente de paiement ({paymentMethod}). Le coach validera le creneau:
            <strong> {slot}</strong>.
          </p>
          <p className="p" style={{ marginTop: 10 }}>
            Axes choisis: <strong>{goals.join(", ")}</strong>.
          </p>
        </article>
      ) : (
        <form className="bookingForm" onSubmit={handleSubmit}>
          <label className="field">
            <span className="fieldLabel">Nom du parent</span>
            <input
              className="fieldInput"
              placeholder="Ex: Samir B."
              value={parentName}
              onChange={(event) => setParentName(event.target.value)}
            />
          </label>

          <label className="field">
            <span className="fieldLabel">Prenom de l enfant</span>
            <input
              className="fieldInput"
              placeholder="Ex: Adam"
              value={childName}
              onChange={(event) => setChildName(event.target.value)}
            />
          </label>

          <div className="fieldGrid">
            <label className="field">
              <span className="fieldLabel">Groupe d age</span>
              <select
                className="fieldInput"
                value={ageGroup}
                onChange={(event) => setAgeGroup(event.target.value)}
              >
                <option value="6-7">6-7 ans</option>
                <option value="8-10">8-10 ans</option>
                <option value="11-13">11-13 ans</option>
              </select>
            </label>

            <label className="field">
              <span className="fieldLabel">Creneau souhaite</span>
              <select className="fieldInput" value={slot} onChange={(event) => setSlot(event.target.value)}>
                {slots.map((currentSlot) => (
                  <option key={currentSlot} value={currentSlot}>
                    {currentSlot}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="field">
            <span className="fieldLabel">Mode de paiement (phase lancement)</span>
            <select
              className="fieldInput"
              value={paymentMethod}
              onChange={(event) => setPaymentMethod(event.target.value)}
            >
              <option value="Virement">Virement</option>
              <option value="Paiement manuel">Paiement manuel</option>
            </select>
          </label>

          <div className="field">
            <span className="fieldLabel">Performances a ameliorer</span>
            <div className="goalGrid">
              {performanceOptions.map((goal) => (
                <label className="goalItem" key={goal}>
                  <input
                    checked={goals.includes(goal)}
                    type="checkbox"
                    onChange={() => toggleGoal(goal)}
                  />
                  <span>{goal}</span>
                </label>
              ))}
            </div>
          </div>

          <label className="field">
            <span className="fieldLabel">Notes pour le coach (optionnel)</span>
            <textarea
              className="fieldInput fieldTextarea"
              placeholder="Ex: enfant timide, prefere petits groupes, objectif confiance."
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
            />
          </label>

          <button className="btn btnPrimary" disabled={!canSubmit} type="submit">
            Confirmer la reservation
          </button>
        </form>
      )}
    </section>
  );
}
