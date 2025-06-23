"use client";
import { useState } from "react";

export default function ContactPage() {
   const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [result, setResult] = useState(""); // Ajout de l'état pour le résultat

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Envoi en cours...");
    const formData = new FormData(event.target as HTMLFormElement);

    // Clé d'accès Web3Forms
      formData.append("access_key", "ff6414b1-d2e0-4b96-b5c8-a5fc67aedca7");

    const response = await fetch("https://api.web3forms.com/submit",  {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message envoyé avec succès !");
      setForm({ name: "", email: "", message: "" });
    } else {
      setResult("Erreur : " + data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4faff] dark:bg-[#10141a]">
      <div className="relative w-full max-w-3xl flex flex-col md:flex-row">
        {/* Bloc infos contact */}
        <div className="bg-[#20406a] text-white flex-1 p-8 rounded-xl md:rounded-r-none shadow-2xl flex flex-col justify-between z-10 min-h-[420px]">
          <div>
            <h2 className="text-2xl font-bold mb-8 font-sans">Contactez-nous</h2>
            <ul className="space-y-6 text-base">
              <li className="flex items-center gap-3 opacity-80">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 19c-4-4-7-6.5-7-10A7 7 0 0 1 17 9c0 3.5-3 6-7 10z"/><circle cx="10" cy="7" r="3"/></svg>
                <span>
                 Ottawa Ontario / Canada
                </span>
              </li>
              <li className="flex items-center gap-3 opacity-80">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="16" height="10" rx="3"/><path d="M2 7l8 5 8-5"/></svg>
                hello@mikechemartin.com
              </li>
              <li className="flex items-center gap-3 opacity-80">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="10" cy="10" r="7"/><path d="M14 10c0 2-1.5 3-4 3s-4-1-4-3"/></svg>
                mike.chemardin
              </li>
              <li className="flex items-center gap-3 opacity-80">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="12" height="16" rx="2"/><path d="M8 6h4"/></svg>
                +33 6 19 53 01 44
              </li>
            </ul>
          </div>
          <div className="flex gap-6 mt-10 opacity-60">
            <a href="#" aria-label="Instagram" className="hover:opacity-100">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="18" cy="7" r="1.5"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-100">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 5.5a8.38 8.38 0 0 1-2.36.65A4.15 4.15 0 0 0 21.44 4c-.8.47-1.7.81-2.65.99A4.13 4.13 0 0 0 12 8.5c0 .32.04.64.1.94C8.72 9.3 5.8 7.7 3.95 5.18c-.35.6-.56 1.3-.56 2.05 0 1.42.72 2.68 1.82 3.42a4.07 4.07 0 0 1-1.87-.52v.05c0 1.98 1.41 3.63 3.28 4.01-.34.09-.7.14-1.07.14-.26 0-.51-.02-.76-.07.51 1.6 2 2.77 3.76 2.8A8.3 8.3 0 0 1 3 19.54 12 12 0 0 0 12 22c7.55 0 12-6.26 12-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22 5.5z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-100">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M7 10v6M12 10v6M7 7h.01M12 7h.01"/></svg>
            </a>
          </div>
        </div>
        {/* Bloc formulaire */}
         <div className="flex-1 bg-white dark:bg-[#181c24] p-10 flex flex-col justify-center rounded-xl md:rounded-l-none shadow-2xl z-0">
          <h2 className="text-2xl font-bold text-[#20406a] dark:text-blue-200 mb-2 font-sans">Entrer en contact</h2>
          <p className="text-gray-400 dark:text-gray-300 mb-6">N&apos;hésitez pas à nous écrire ci-dessous&nbsp;!</p>
          <form className="flex flex-col gap-4" onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              className="w-full px-4 py-3 rounded bg-[#f5f7fa] dark:bg-[#232b3a] text-[#34495e] dark:text-white placeholder-[#b0bfcf] dark:placeholder-[#7a8ca3] focus:outline-none"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              className="w-full px-4 py-3 rounded bg-[#f5f7fa] dark:bg-[#232b3a] text-[#34495e] dark:text-white placeholder-[#b0bfcf] dark:placeholder-[#7a8ca3] focus:outline-none"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
            />
            <textarea
              name="message"
              placeholder="Votre message"
              className="w-full px-4 py-3 rounded bg-[#f5f7fa] dark:bg-[#232b3a] text-[#34495e] dark:text-white placeholder-[#b0bfcf] dark:placeholder-[#7a8ca3] focus:outline-none min-h-[90px] resize-none"
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              required
            />
            <button
              type="submit"
              className="w-full py-3 rounded bg-gradient-to-r from-[#6ec6fa] to-[#3bb0f9] text-white text-lg font-semibold shadow-lg hover:from-[#2496e3] hover:to-[#4bbbe6] transition mt-2 tracking-widest"
              style={{
                boxShadow: "0 8px 24px 0 #3bb0f955",
                letterSpacing: "0.15em",
              }}
            >
              ENVOYER
            </button>
            {result && (
              <div className="text-center mt-2 text-sm text-blue-700 dark:text-blue-300">{result}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}