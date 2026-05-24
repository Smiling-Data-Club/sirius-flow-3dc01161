import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

const ApplicationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Bewerbung — ${position || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\nPosition / Bereich: ${position}\n\nNachricht:\n${message}\n\n(Bitte hängen Sie Ihren Lebenslauf und ggf. weitere Unterlagen an diese E-Mail an.)`
    );
    window.location.href = `mailto:info@sirius-gmbh.de?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        required
        type="text"
        placeholder="Ihr Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
      <input
        required
        type="email"
        placeholder="Ihre E-Mail-Adresse"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
      <input
        type="text"
        placeholder="Position oder Bereich (z. B. Service, Sales, IT)"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="md:col-span-2 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
      <textarea
        required
        placeholder="Ihre Nachricht an uns…"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5}
        className="md:col-span-2 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 resize-y"
      />
      <button
        type="submit"
        className="md:col-span-2 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-lg hover:scale-[1.01] transition-transform"
      >
        Bewerbung senden <Send className="w-4 h-4" />
      </button>
      <p className="md:col-span-2 text-xs text-muted-foreground">
        Hinweis: Beim Absenden öffnet sich Ihr E-Mail-Programm. Bitte fügen Sie dort Ihren Lebenslauf und weitere Unterlagen als Anhang hinzu.
      </p>
    </form>
  );
};

export default ApplicationForm;
