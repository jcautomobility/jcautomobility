"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const LOGO_URL = "/logo.png";
const WHATSAPP_NUMBER = "+17869099246";
const PHONE_NUMBER = "+1 786-909-9246";
const EMAIL = "info@jcautomobility.com";
const ADDRESS_MIAMI = "3994 NW 27th St, Miami, FL 33142";
const ADDRESS_FLL = "3265 SE 6 Ave, Fort Lauderdale, FL 33316";
const ADDRESS_TAMPA = "4220 W Cayuga St, Tampa, FL 33614";

export default function Page() {
  const [lang, setLang] = useState("es");

  const texts = {
    es: {
      heroTitle: "Tu movilidad, a tu manera.",
      heroDesc: "Empresa de renta de autos con foco en servicio, transparencia y flexibilidad.",
      fleet: "Nuestra flota",
      contact: "Contáctanos",
      form: "Solicita una cotización",
      name: "Nombre y Apellido",
      email: "Correo electrónico",
      city: "Ciudad (p. ej., Miami)",
      dates: "Fechas (p. ej., 12–15 Oct)",
      notes: "¿Qué tipo de vehículo necesitas? ¿Notas adicionales?",
      send: "Enviar",
    },
  };

  const t = texts[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            JC Auto Mobility
            <span className="block text-slate-500 text-xl sm:text-2xl mt-2">{t.heroTitle}</span>
          </h1>
          <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto">{t.heroDesc}</p>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl">{t.form}</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                action={`mailto:${EMAIL}`}
                method="POST"
                className="space-y-4"
              >
                <Input name="name" placeholder={t.name} required />
                <Input type="email" name="email" placeholder={t.email} required />
                <Input name="city" placeholder={t.city} />
                <Input name="dates" placeholder={t.dates} />
                <Textarea name="notes" placeholder={t.notes} className="min-h-[120px]" />
                <Button type="submit" className="w-full">
                  {t.send}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-8 grid md:grid-cols-3 gap-6 text-slate-600">
          <div>
            <img src="/logo.png" alt="JC Auto Mobility" className="h-12 mb-3" />
            <p>Tel: {PHONE_NUMBER}</p>
            <p>Email: {EMAIL}</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Oficina Miami</p>
            <p>{ADDRESS_MIAMI}</p>
            <p className="font-semibold mt-4">Oficina Fort Lauderdale</p>
            <p>{ADDRESS_FLL}</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Oficina Tampa</p>
            <p>{ADDRESS_TAMPA}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}





