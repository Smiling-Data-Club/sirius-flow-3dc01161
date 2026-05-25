import { useState, FormEvent } from "react";
import { Send, X } from "lucide-react";

interface JobApplicationDialogProps {
  open: boolean;
  onClose: () => void;
  jobTitle: string;
  recipient?: string;
}

const JobApplicationDialog = ({
  open,
  onClose,
  jobTitle,
  recipient = "f.schueler@sirius-gmbh.de",
}: JobApplicationDialogProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  if (!open) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Bewerbung — ${jobTitle}`);
    const body = encodeURIComponent(
      `Bewerbung für: ${jobTitle}\n\nName: ${name}\nE-Mail: ${email}\nTelefon: ${phone}\n\nNachricht:\n${message}\n\n(Bitte hängen Sie Ihren Lebenslauf und ggf. weitere Unterlagen an diese E-Mail an.)`
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-background rounded-2xl shadow-xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-lg transition-colors"
          aria-label="Schließen"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="inline-block text-xs uppercase tracking-wider text-primary font-bold mb-2">
          Bewerbung
        </span>
        <h3 className="text-2xl font-extrabold mb-2 pr-8">{jobTitle}</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Sende uns deine Bewerbung — wir melden uns zeitnah bei dir.
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            required
            type="text"
            placeholder="Dein Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="md:col-span-2 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          <input
            required
            type="email"
            placeholder="Deine E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          <input
            type="tel"
            placeholder="Telefon (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          <textarea
            required
            placeholder="Deine Nachricht…"
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
            Hinweis: Beim Absenden öffnet sich dein E-Mail-Programm. Bitte hänge dort deinen Lebenslauf und weitere Unterlagen an.
          </p>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationDialog;
