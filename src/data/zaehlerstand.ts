/* ==========================================================================
   Inhalte der Seite /zaehlerstand ("Zählerstände auslesen")

   Diese Datei ist die EINZIGE Stelle, an der Modelle, Schritte und Bilder
   gepflegt werden. Die Seite selbst (src/pages/Zaehlerstand.tsx) muss
   dafür nicht angefasst werden.

   Anleitung für die Pflege: docs/zaehlerstand/pflege.md

   Kurz:
   - Ein Hersteller hat mehrere Modellgruppen ("gruppen").
   - Eine Modellgruppe hat einen Titel (= Modellliste, wird durchsucht)
     und nummerierte Schritte.
   - Ein Schritt hat einen Text und optional Bilder.
   - Bilder liegen in public/zaehlerstand/ und werden hier nur mit ihrem
     Dateinamen eingetragen, z. B. "sharp-mx-b350p-schritt-1a.webp".
   - Jedes Bild braucht einen Alt-Text (Beschreibung für Screenreader und
     falls das Bild nicht lädt).
   ========================================================================== */

export interface ZBild {
  /** Dateiname in public/zaehlerstand/, z. B. "sharp-mx-b350p-schritt-1a.webp" */
  datei: string;
  /** Kurze Bildbeschreibung auf Deutsch */
  alt: string;
}

export interface ZSchritt {
  /** Anweisung in Sie-Form, kurze Sätze */
  text: string;
  /** Optionale Aufzählung unter dem Text (z. B. Auswahlmöglichkeiten) */
  punkte?: string[];
  bilder?: ZBild[];
}

export interface ZGruppe {
  /** Kurzname für die Adresse, nur Kleinbuchstaben, Ziffern und Bindestriche */
  id: string;
  /** Modellliste – genau so, wie sie auf dem Gerät steht */
  titel: string;
  /** Optionaler Hinweis über den Schritten */
  einleitung?: string;
  schritte: ZSchritt[];
  /** Optionaler Abschlusssatz unter den Schritten */
  abschluss?: string;
}

export interface ZStatusseite {
  /** Erklärungen, welche Werte auf dem Ausdruck abgelesen werden */
  punkte: string[];
  bilder: ZBild[];
}

export interface ZHersteller {
  /** Sprungmarke, z. B. "sharp" → /zaehlerstand#sharp */
  id: string;
  name: string;
  beschreibung?: string;
  gruppen: ZGruppe[];
  statusseite?: ZStatusseite;
}

/* --------------------------------------------------------------------------
   Links – hier zentral eintragen
   -------------------------------------------------------------------------- */

/**
 * Allgemeine Adresse des Webportals (OHNE Benutzername oder Passwort).
 * Solange hier "[PORTAL-URL]" steht, zeigt die Seite keinen Link, sondern
 * nur den Hinweis auf den persönlichen Link aus der E-Mail.
 */
export const PORTAL_URL = "[PORTAL-URL]";

/** Anleitung als PDF – Dateiname bleibt beim Austausch immer gleich. */
export const PDF_URL = "/downloads/anleitung-zaehlerstaende.pdf";

/* --------------------------------------------------------------------------
   Hersteller und Modelle
   -------------------------------------------------------------------------- */

export const hersteller: ZHersteller[] = [
  {
    id: "sharp",
    name: "Sharp",
    beschreibung: "Multifunktionsgeräte und Drucker",
    gruppen: [
      {
        id: "sharp-mx-b350p",
        titel: "MX-B350P, MX-B450P, MX-C300P",
        schritte: [
          {
            text: "Drücken Sie nacheinander diese Tasten: „@.-“, die Taste mit dem Pfeil-Symbol, „C“ und noch einmal die Taste mit dem Pfeil-Symbol.",
            bilder: [
              {
                datei: "sharp-mx-b350p-schritt-1a.webp",
                alt: "Tastenfolge als Symbole: Taste „@.-“, Taste mit Pfeil-Symbol, Taste „C“, Taste mit Pfeil-Symbol",
              },
              {
                datei: "sharp-mx-b350p-schritt-1b.webp",
                alt: "Bedienfeld mit nummerierten Tasten: 1 ist die Taste „@.-“, 2 und 4 die Taste mit Pfeil-Symbol unten links, 3 die Taste „C“",
              },
            ],
          },
          {
            text: "Tippen Sie 22 ein und drücken Sie die OK-Taste.",
            bilder: [
              {
                datei: "sharp-mx-b350p-schritt-2.webp",
                alt: "Display mit der Anzeige „Simulation – Input main code“, darunter Zifferntasten und OK-Taste",
              },
            ],
          },
          {
            text: "Tippen Sie 6 ein und drücken Sie die OK-Taste.",
            bilder: [
              {
                datei: "sharp-mx-b350p-schritt-3.webp",
                alt: "Display mit der Anzeige „Sim22 COUNTER&DATA DISPLAY“ und der Eingabe 06",
              },
            ],
          },
          {
            text: "Tippen Sie 1 ein und drücken Sie zweimal die OK-Taste. Der Drucker druckt eine Zählerseite.",
            bilder: [
              {
                datei: "sharp-mx-b350p-schritt-4.webp",
                alt: "Display mit der Anzeige „Sim22-06 DATA PRINT MODE“, Auswahl 1; Hinweis: OK-Taste zweimal drücken",
              },
            ],
          },
        ],
      },
      {
        id: "sharp-mx-b355w",
        titel:
          "MX-B355W, MX-B455W, MX-B356W, MX-B456W, MX-C303W, MX-C304W, BP-C533WR, BP-C533WD, BP-C542WD, BP-B537WR, BP-B547WD, MX-2630, MX-3050, MX-3060, MX-3560, MX-3070, MX-3570, MX-4070, MX-5050, MX-5070, MX-6070, MX-6580, MX-7090, MX-2651, MX-3051, MX-3061, MX-3071, MX-4061, MX-4071, MX-5071, MX-6071, BP-50C26, BP-50C31, BP-55C26, BP-60C31, BP-60C45, BP-70C31, BP-70C36, BP-70C45, BP-70C55, BP-70C65, BP-51C26, BP-51C31, BP-51C36, BP-51C45, BP-51C55, BP-51C65, BP-56C26, BP-61C26, BP-61C31, BP-61C36, BP-61C45, BP-61C55, BP-61C65, BP-71C31, BP-71C36, BP-71C45, BP-71C55, BP-71C65, MX-M3070, MX-M3570, MX-M4070, MX-M5070, MX-M6070, MX-M6570, MX-M3071, MX-M3571, MX-M4071, MX-M5071, MX-M6071, BP-51M26, BP-51M31, BP-51M36, BP-51M45, BP-51M55, BP-51M65, BP-56M26, BP-61M26, BP-61M31, BP-61M36, BP-61M45, BP-61M55, BP-61M65, BP-71M31, BP-71M36, BP-71M45, BP-71M55, BP-71M65",
        schritte: [
          {
            text: "Wählen Sie „Einstellungen“. Je nach Displaykonfiguration liegt der Button an einer anderen Stelle. Er hat immer ein Schraubenzieher- und Schraubenschlüssel-Symbol.",
            bilder: [
              {
                datei: "sharp-mx-b355w-schritt-1.webp",
                alt: "Startbildschirm des Touchdisplays; in der unteren Leiste das Symbol „Einstellungen“ mit Schraubenzieher und Schraubenschlüssel",
              },
            ],
          },
          {
            text: "Wechseln Sie im Touchdisplay auf den Reiter „Status“.",
            bilder: [
              {
                datei: "sharp-mx-b355w-schritt-2.webp",
                alt: "Menü „Einstellungen“ mit den Reitern „Status“, „Kontrolle der Benutzer“ und „Einstellungen für System“",
              },
            ],
          },
          {
            text: "Wählen Sie die Zeile „Gesamtzählung“.",
            bilder: [
              {
                datei: "sharp-mx-b355w-schritt-3.webp",
                alt: "Reiter „Status“ mit einer Liste links; darin die Zeile „Gesamtzählung“",
              },
            ],
          },
          {
            text: "Wählen Sie „Drucken“. Der Drucker druckt eine Statusseite.",
            bilder: [
              {
                datei: "sharp-mx-b355w-schritt-4.webp",
                alt: "Seite „Gesamtzählung“ mit den Buttons „Drucken“ und „Update“ und einer Tabelle mit Zählerständen",
              },
            ],
          },
        ],
      },
      {
        id: "sharp-mx-c301w",
        titel: "MX-C301W, MX-2614",
        schritte: [
          {
            text: "Drücken Sie den Knopf „Systemeinstellungen“.",
            bilder: [
              {
                datei: "sharp-mx-c301w-schritt-1.webp",
                alt: "Bedienfeld mit Touchdisplay; unten links neben dem Ziffernblock der Knopf „System Settings“",
              },
            ],
          },
          {
            text: "Wählen Sie den Button „Gesamtzählung“.",
            bilder: [
              {
                datei: "sharp-mx-c301w-schritt-2.webp",
                alt: "Display „Systemeinstellungen“; oben links der Button „Gesamtzählung“",
              },
            ],
          },
          {
            text: "Wählen Sie den Button „Jobzählung“.",
            bilder: [
              {
                datei: "sharp-mx-c301w-schritt-3.webp",
                alt: "Display „Gesamtzählung“ mit den Buttons „Jobzählung“ und „Gerätezähler“",
              },
            ],
          },
          {
            text: "Wählen Sie „Drucken“. Der Drucker druckt eine Statusseite.",
            bilder: [
              {
                datei: "sharp-mx-c301w-schritt-4.webp",
                alt: "Display „Jobzählung“ mit Zählertabelle und dem Button „Drucken“",
              },
            ],
          },
        ],
      },
      {
        id: "sharp-mx-2610",
        titel:
          "MX-2610, MX-2640, MX-3110, MX-3140, MX-3640, MX-4112, MX-4140, MX-4141, MX-5112, MX-5140, MX-5141, MX-6500, MX-M365, MX-M465, MX-M565, MX-M654, MX-M754",
        schritte: [
          {
            text: "Wählen Sie „Einstellungen“. Je nach Displaykonfiguration liegt der Button an einer anderen Stelle. Er hat immer ein Schraubenzieher- und Schraubenschlüssel-Symbol.",
            bilder: [
              {
                datei: "sharp-mx-2610-schritt-1.webp",
                alt: "Startbildschirm des Touchdisplays; in der unteren Leiste das Symbol „Einstellungen“ mit Schraubenzieher und Schraubenschlüssel",
              },
            ],
          },
          {
            text: "Wählen Sie in der Liste links die Zeile „Einstellungen für System“.",
            bilder: [
              {
                datei: "sharp-mx-2610-schritt-2.webp",
                alt: "Menü „Einstellungen“ mit einer Liste links; darin die Zeile „Einstellungen für System“",
              },
            ],
          },
          {
            text: "Wählen Sie den Unterpunkt „Gesamtzählung“ und klicken Sie auf „Drucken“. Der Drucker druckt eine Zählerseite.",
            bilder: [
              {
                datei: "sharp-mx-2610-schritt-3.webp",
                alt: "Seite „Gesamtzählung“ mit Zählertabelle und den Buttons „Drucken“ und „Update“",
              },
            ],
          },
        ],
      },
    ],
    statusseite: {
      punkte: [
        "Gesamtzähler Schwarzweiß: Zeile „Gesamtanzahl“, Spalte „Schwarz & W“.",
        "Gesamtzähler Farbe: Zeile „Gesamtanzahl“, Spalte „Farbe gesamt“.",
        "Gesamtzähler Scans: Addieren Sie die Werte aus „Scan senden“ (beide Spalten) und „Fax-Senden“. „Fax-Senden“ gibt es nur, wenn ein Faxmodul eingebaut ist.",
        "Seriennummer (oben rechts, „S/N“): Lassen Sie die letzten beiden Nullen weg.",
      ],
      bilder: [
        {
          datei: "sharp-statusseite.webp",
          alt: "Beispiel einer Sharp-Zählerseite: markiert sind Seriennummer, Gesamtzähler Schwarzweiß und Farbe sowie die Scan-Zähler „Scan senden“ und „Fax-Senden“",
        },
      ],
    },
  },
  {
    id: "lexmark",
    name: "Lexmark",
    beschreibung: "Multifunktionsgeräte und Drucker",
    gruppen: [
      {
        id: "lexmark-neue-menuefuehrung",
        titel: "Lexmark – neue Menüführung",
        schritte: [
          {
            text: "Wählen Sie den Button „Einstellungen“. Er hat immer ein Schraubenschlüssel-Symbol.",
            bilder: [
              {
                datei: "lexmark-neue-menuefuehrung-schritt-1.webp",
                alt: "Startbildschirm des Lexmark-Touchdisplays mit dem Symbol „Einstellungen“ (Schraubenschlüssel)",
              },
            ],
          },
          {
            text: "Wählen Sie im Menü unten den Button „Berichte“.",
            bilder: [
              {
                datei: "lexmark-neue-menuefuehrung-schritt-2.webp",
                alt: "Menü „Einstellungen“ mit einer Liste links; unten der Eintrag „Berichte“",
              },
            ],
          },
          {
            text: "Wählen Sie den Button „Gerät“.",
            bilder: [
              {
                datei: "lexmark-neue-menuefuehrung-schritt-3.webp",
                alt: "Menü „Berichte“ mit den Einträgen „Menüeinstellungsseite“, „Gerät“, „Drucken“ und weiteren",
              },
            ],
          },
          {
            text: "Wählen Sie „Gerätestatistik“. Der Drucker druckt die Statusseiten.",
            bilder: [
              {
                datei: "lexmark-neue-menuefuehrung-schritt-4.webp",
                alt: "Menü „Berichte – Gerät“ mit den Einträgen „Geräteinformationen“, „Gerätestatistik“, „Profilliste“ und „Bestandsbericht“",
              },
            ],
          },
        ],
      },
      {
        id: "lexmark-alte-menuefuehrung",
        titel: "Lexmark – alte Menüführung",
        schritte: [
          {
            text: "Wählen Sie unten rechts im Display das Menü-Symbol.",
            bilder: [
              {
                datei: "lexmark-alte-menuefuehrung-schritt-1.webp",
                alt: "Startbildschirm des älteren Lexmark-Displays; unten rechts das Menü-Symbol",
              },
            ],
          },
          {
            text: "Wählen Sie den Pfeil neben „Berichte“.",
            bilder: [
              {
                datei: "lexmark-alte-menuefuehrung-schritt-2.webp",
                alt: "Menüliste mit „Menü Papier“, „Berichte“, „Netzwerk/Anschlüsse“, „Sicherheit“ und „Einstellungen“; „Berichte“ ist rot umkreist",
              },
            ],
          },
          {
            text: "Wählen Sie das Drucker-Symbol neben „Gerätestatistik“. Der Drucker druckt die Statusseite.",
            bilder: [
              {
                datei: "lexmark-alte-menuefuehrung-schritt-3.webp",
                alt: "Menü „Berichte“ mit Drucker-Symbolen neben jedem Eintrag; „Gerätestatistik“ ist rot umkreist",
              },
            ],
          },
        ],
      },
    ],
    statusseite: {
      punkte: [
        "Je nach Modell stehen die Angaben auf Seite 1, 2 oder 3 der Gerätestatistik.",
        "Gedruckte Seiten: unter „Medienseiten/Anzahl“, Abschnitt „Gesamt“ – Zeile „Schwarzweiß“ (Zähler SW) und Zeile „Farbe“ (Zähler Farbe).",
        "Gescannte Seiten: unter „Scannerverwendung“. Addieren Sie die Werte aus den Zeilen „Fax“ und „Netzwerk“.",
        "Die Seriennummer steht auf der letzten Seite unter „Drucker“.",
      ],
      bilder: [
        {
          datei: "lexmark-statusseite.webp",
          alt: "Beispiel einer Lexmark-Gerätestatistik über mehrere Seiten: markiert sind Zähler SW, Zähler Farbe, die zu addierenden Scan-Zähler „Fax“ und „Netzwerk“ sowie die Seriennummer",
        },
      ],
    },
  },
  {
    id: "epson",
    name: "Epson",
    beschreibung: "Business-Tintenstrahldrucker und Multifunktionsgeräte",
    gruppen: [
      {
        id: "epson-wf-m5299",
        titel:
          "WF-M5299, WF-M5799DWF, WF-C5790DWF, WF-C529R, WF-C579RDTWF, WF-M5399, WF-M5899, EP-C800, EM-C800",
        schritte: [
          {
            text: "Wählen Sie den Button „Einstellungen“ (Zahnrad-Symbol).",
            bilder: [
              {
                datei: "epson-wf-m5299-schritt-1.webp",
                alt: "Startbildschirm des Epson-Displays mit den Kacheln „Speichergerät“, „Faxbox“, „Vertraulicher Auftrag“ und „Einstellungen“ (Zahnrad)",
              },
            ],
          },
          {
            text: "Wählen Sie „Druckzähler“.",
            bilder: [
              {
                datei: "epson-wf-m5299-schritt-2.webp",
                alt: "Menü „Einstellungen“ mit den Einträgen „Allgemeine Einstellungen“ und „Druckzähler“",
              },
            ],
          },
          {
            text: "Der Zähler wird angezeigt. Wählen Sie „Seite drucken“.",
            bilder: [
              {
                datei: "epson-wf-m5299-schritt-3.webp",
                alt: "Anzeige „Druckzähler“ mit dem Wert „Insgesamt“ und dem Button „Seite drucken“",
              },
            ],
          },
        ],
      },
      {
        id: "epson-wf-c878",
        titel:
          "WF-C878RDTWF, WF-C879RDTWF, WF-M20590D4TW, WF-C17590D4TWF, WF-C20600D4TW, WF-C20750D4TW, WF-C21000D4TW, AM-C4000, AM-C5000, AM-C6000, AM-C400, AM-C550",
        schritte: [
          {
            text: "Wählen Sie den Button „Einstellungen“ (Zahnrad-Symbol).",
            bilder: [
              {
                datei: "epson-wf-c878-schritt-1.webp",
                alt: "Startseite des Epson-Displays mit Kacheln wie „Kopie“, „Scan“, „Fax“ und „Einstellungen“ (Zahnrad)",
              },
            ],
          },
          {
            text: "Wählen Sie „Druckzähler“.",
            bilder: [
              {
                datei: "epson-wf-c878-schritt-2.webp",
                alt: "Menü „Einstellungen“ mit Kacheln; oben in der Mitte die Kachel „Druckzähler“",
              },
            ],
          },
          {
            text: "Der Zähler wird angezeigt. Wählen Sie „Seite drucken“.",
            bilder: [
              {
                datei: "epson-wf-c878-schritt-3.webp",
                alt: "Anzeige „Druckzähler“ mit den Werten „Insgesamt“, „S&W-Ausdrucke“ und „Farbe-Ausdrucke“ und dem Button „Seite drucken“",
              },
            ],
          },
        ],
      },
    ],
    statusseite: {
      punkte: [
        "Lesen Sie die Werte im Abschnitt „Anzahl Seiten“ unter „Nach Funktion sortiert“ ab.",
        "Farbgeräte: „Gesamtanzahl S&W-Seiten“ und „Gesamtanzahl Farbe-Seiten“.",
        "Schwarzweiß-Geräte: „Gesamtanzahl Seiten“.",
      ],
      bilder: [
        {
          datei: "epson-statusseite-a.webp",
          alt: "Beispiel eines Epson-Nutzungsverlaufsblatts eines Farbgeräts (WF-C17590) mit dem Abschnitt „Anzahl Seiten“",
        },
        {
          datei: "epson-statusseite-b.webp",
          alt: "Beispiel eines Epson-Nutzungsverlaufsblatts eines Schwarzweiß-Geräts (WF-M5799) mit dem Abschnitt „Anzahl Seiten“",
        },
      ],
    },
  },
  {
    id: "toshiba",
    name: "Toshiba Etikettendrucker",
    beschreibung: "Etikettendrucker von Toshiba TEC",
    gruppen: [
      {
        id: "toshiba-ba400t",
        titel: "BA400T-Reihe",
        schritte: [
          {
            text: "Drücken Sie gleichzeitig den Power-Button, die Taste „Feed“ und die Taste „Pause“ und halten Sie sie gedrückt.",
            bilder: [
              {
                datei: "toshiba-ba400t-schritt-1.webp",
                alt: "Toshiba-Etikettendrucker; Pfeile zeigen auf die Tasten „Feed“ und „Pause“ sowie auf den Power-Button unten links",
              },
            ],
          },
          {
            text: "Das Gerät startet im „System Mode“.",
            bilder: [
              {
                datei: "toshiba-ba400t-schritt-2a.webp",
                alt: "Display mit der Anzeige „BA400 Series Initializing… entering SYSTEM MODE“",
              },
              {
                datei: "toshiba-ba400t-schritt-2b.webp",
                alt: "Display „SYSTEM MODE“ mit den Einträgen RESET, DIAGNOSTIC, SET PARAMETERS und TEST PRINT",
              },
            ],
          },
          {
            text: "So bewegen Sie sich im Menü: „Feed“ scrollt nach unten, „Restart“ scrollt nach oben, „Pause“ bestätigt die Auswahl.",
            bilder: [
              {
                datei: "toshiba-ba400t-schritt-3a.webp",
                alt: "Taste „Feed“ markiert, Pfeil nach unten",
              },
              {
                datei: "toshiba-ba400t-schritt-3b.webp",
                alt: "Taste „Restart“ markiert, Pfeil nach oben",
              },
              {
                datei: "toshiba-ba400t-schritt-3c.webp",
                alt: "Taste „Pause“ markiert, Häkchen für Bestätigen",
              },
            ],
          },
          {
            text: "Wählen Sie „<1>DIAGNOSTIC“ und bestätigen Sie mit der Taste „Pause“.",
            bilder: [
              {
                datei: "toshiba-ba400t-schritt-4.webp",
                alt: "Display „SYSTEM MODE“; der Eintrag „<1>DIAGNOSTIC“ ist ausgewählt",
              },
            ],
          },
          {
            text: "Wählen Sie „Maintenance Counter“.",
            bilder: [
              {
                datei: "toshiba-ba400t-schritt-5.webp",
                alt: "Display „<1>DIAGNOSTIC“; der Eintrag „MAINTENANCE COUNTER“ ist ausgewählt",
              },
            ],
          },
          {
            text: "Wählen Sie, wie die Zähler ausgegeben werden sollen:",
            punkte: [
              "„Thermal Transfer“: Der Drucker druckt die Werte auf Etiketten. Wenn Sie schneiden möchten, wählen Sie danach „Yes“ (nur mit Schneideeinheit möglich).",
              "„Display“: Das Display zeigt die Werte an. Wählen Sie danach „Counter“. Mit „Feed“ scrollen Sie nach unten, mit „Restart“ nach oben.",
            ],
            bilder: [
              {
                datei: "toshiba-ba400t-schritt-6a.webp",
                alt: "Display „PRINT TYPE“ mit den Einträgen THERMAL TRANSFER, DIRECT THERMAL und DISPLAY",
              },
              {
                datei: "toshiba-ba400t-schritt-6b.webp",
                alt: "Display „PAPER CUTTING?“ mit den Einträgen NO und YES",
              },
              {
                datei: "toshiba-ba400t-schritt-6c.webp",
                alt: "Ausgedrucktes Etikett mit den Zählerständen, das aus dem Drucker kommt",
              },
              {
                datei: "toshiba-ba400t-schritt-6d.webp",
                alt: "Display „DISPLAY“; der Eintrag „COUNTER“ ist ausgewählt",
              },
              {
                datei: "toshiba-ba400t-schritt-6e.webp",
                alt: "Display „COUNTER“ mit den Werten TOTAL FEED, FEED, FEED1 und FEED2 in Kilometern",
              },
            ],
          },
          {
            text: "Schalten Sie das Gerät aus, um den Vorgang zu beenden.",
            bilder: [
              {
                datei: "toshiba-ba400t-schritt-7.webp",
                alt: "Toshiba-Etikettendrucker; ein Pfeil zeigt auf den Power-Button unten links",
              },
            ],
          },
        ],
      },
      {
        id: "toshiba-b-ex4",
        titel: "B-EX4T1, B-EX4T2, B-EX4D2",
        schritte: [
          {
            text: "Starten Sie das Gerät neu. Das Display zeigt das Hauptmenü.",
            bilder: [
              {
                datei: "toshiba-b-ex4-schritt-1.webp",
                alt: "Display im Hauptmenü mit „B-EX4T1-T“, „ONLINE“ und „PRINTED 000000“",
              },
            ],
          },
          {
            text: "Drücken Sie die Taste „Pause“.",
            bilder: [
              {
                datei: "toshiba-b-ex4-schritt-2a.webp",
                alt: "Bedienfeld; die Taste „Pause“ ist gelb umkreist",
              },
              {
                datei: "toshiba-b-ex4-schritt-2b.webp",
                alt: "Display mit der Anzeige „PAUSE“",
              },
            ],
          },
          {
            text: "Halten Sie die Taste „Pfeil nach oben“ 3 Sekunden lang gedrückt.",
            bilder: [
              {
                datei: "toshiba-b-ex4-schritt-3.webp",
                alt: "Bedienfeld; die Taste „Pfeil nach oben“ ist gelb umkreist",
              },
            ],
          },
          {
            text: "Drücken Sie die Taste „Cancel“. Das Display zeigt die Zähler an.",
            bilder: [
              {
                datei: "toshiba-b-ex4-schritt-4a.webp",
                alt: "Bedienfeld; die Taste „Cancel“ ist gelb umkreist",
              },
              {
                datei: "toshiba-b-ex4-schritt-4b.webp",
                alt: "Display „BCP COUNTER“ mit Werten in cm und inch und dem Hinweis „PUSH ENTER OR CANCEL“",
              },
            ],
          },
          {
            text: "Drücken Sie die Taste „Enter“, um den Zählerstand auszudrucken. Der Drucker druckt den Zählerstand auf ein Etikett.",
            bilder: [
              {
                datei: "toshiba-b-ex4-schritt-5a.webp",
                alt: "Bedienfeld; die Taste „Enter“ ist gelb umkreist",
              },
              {
                datei: "toshiba-b-ex4-schritt-5b.webp",
                alt: "Ausgedrucktes Etikett „TOTAL COUNTER LIST“; die Zählerwerte in cm und inch sind rot markiert",
              },
            ],
          },
        ],
        abschluss: "Nach dem Druck erscheint wieder das Hauptmenü. Der Vorgang ist abgeschlossen.",
      },
      {
        id: "toshiba-b-ex6",
        titel: "B-EX6T1, B-EX6T3",
        schritte: [
          {
            text: "Starten Sie das Gerät neu. Das Display zeigt das Hauptmenü.",
            bilder: [
              {
                datei: "toshiba-b-ex6-schritt-1.webp",
                alt: "Display im Hauptmenü mit „B-EX6T1-T“, „ONLINE“ und „PRINTED 000000“",
              },
            ],
          },
          {
            text: "Drücken Sie die Taste „Pause“.",
            bilder: [
              {
                datei: "toshiba-b-ex6-schritt-2a.webp",
                alt: "Bedienfeld des Druckers; die Taste „Pause“ ist gelb umkreist",
              },
              {
                datei: "toshiba-b-ex6-schritt-2b.webp",
                alt: "Display mit der Anzeige „PAUSE“",
              },
            ],
          },
          {
            text: "Halten Sie die Taste „Pfeil nach oben“ mindestens 3 Sekunden lang gedrückt. Das Display zeigt die Zählerstände an.",
            bilder: [
              {
                datei: "toshiba-b-ex6-schritt-3a.webp",
                alt: "Bedienfeld des Druckers; die Taste „Pfeil nach oben“ ist gelb umkreist",
              },
              {
                datei: "toshiba-b-ex6-schritt-3b.webp",
                alt: "Display „BCP COUNTER“ mit Werten in cm und inch, rot markiert",
              },
            ],
          },
          {
            text: "Wählen Sie, wie es weitergeht:",
            punkte: [
              "„Cancel“: zurück ins Hauptmenü.",
              "„Enter“: Der Drucker druckt den Zählerstand auf ein Etikett.",
            ],
            bilder: [
              {
                datei: "toshiba-b-ex6-schritt-4a.webp",
                alt: "Bedienfeld des Druckers; die Taste „Cancel“ ist rot und die Taste „Enter“ blau umkreist",
              },
              {
                datei: "toshiba-b-ex6-schritt-4b.webp",
                alt: "Ausgedrucktes Etikett „TOTAL COUNTER LIST“; die Zählerwerte in cm und inch sind rot markiert",
              },
            ],
          },
        ],
        abschluss: "Der Vorgang ist abgeschlossen.",
      },
      {
        id: "toshiba-bv400d",
        titel: "BV400D-Reihe",
        einleitung:
          "Für diese Geräte brauchen Sie einen Windows-PC, der mit dem Etikettendrucker verbunden ist, und das kostenlose Programm „BCP Setting Tool“ von Toshiba.",
        schritte: [
          {
            text: "Öffnen Sie die Download-Seite von Toshiba: https://www.toshibatec.com/download_overseas/printer/setting_tool/BCP_Series/ – oder suchen Sie im Internet nach „BCP Setting Tool“.",
            bilder: [
              {
                datei: "toshiba-bv400d-schritt-1a.webp",
                alt: "Google-Suche nach „BCP setting tool“",
              },
              {
                datei: "toshiba-bv400d-schritt-1b.webp",
                alt: "Suchergebnisse; ein Pfeil zeigt auf den Treffer „Printer Setting Tool – Toshiba Tec Corporation“",
              },
            ],
          },
          {
            text: "Öffnen Sie das Auswahlmenü unterhalb von „SYSTEM REQUIREMENT“ und wählen Sie „SettingToolSoftWare“.",
            bilder: [
              {
                datei: "toshiba-bv400d-schritt-2a.webp",
                alt: "Webseite „Printer Setting Tool“ von Toshiba; ein Pfeil zeigt auf das Auswahlmenü „Please Select Download File“",
              },
              {
                datei: "toshiba-bv400d-schritt-2b.webp",
                alt: "Geöffnetes Auswahlmenü; ein Pfeil zeigt auf „SettingToolSoftWare“",
              },
            ],
          },
          {
            text: "Scrollen Sie nach unten und stimmen Sie den Nutzungsbedingungen zu („agree“).",
            bilder: [
              {
                datei: "toshiba-bv400d-schritt-3.webp",
                alt: "Nutzungsbedingungen mit Auswahlmenü „agree/disagree“; ein Pfeil zeigt auf „agree“",
              },
            ],
          },
          {
            text: "Starten Sie den Download des Installationsprogramms.",
            bilder: [
              {
                datei: "toshiba-bv400d-schritt-4.webp",
                alt: "Ein Pfeil zeigt auf den Button „Download“",
              },
            ],
          },
          {
            text: "Führen Sie die heruntergeladene Datei „BCPToolSetupFull.exe“ aus.",
            bilder: [
              {
                datei: "toshiba-bv400d-schritt-5.webp",
                alt: "Symbol der Datei „BCPToolSetupFull.exe“ auf dem Desktop",
              },
            ],
          },
          {
            text: "Klicken Sie auf „Next“.",
            bilder: [
              {
                datei: "toshiba-bv400d-schritt-6.webp",
                alt: "Installationsassistent „Welcome to the InstallShield Wizard for BCP Setting Tool“ mit dem Button „Next“",
              },
            ],
          },
          {
            text: "Akzeptieren Sie die Nutzungsbedingungen und klicken Sie auf „Next“.",
            bilder: [
              {
                datei: "toshiba-bv400d-schritt-7.webp",
                alt: "Installationsassistent „License Agreement“; ein Pfeil zeigt auf „I accept the terms of the license agreement“",
              },
            ],
          },
          {
            text: "Ändern Sie bei Bedarf den Zielordner und klicken Sie auf „Next“.",
            bilder: [
              {
                datei: "toshiba-bv400d-schritt-8.webp",
                alt: "Installationsassistent „Choose Destination Location“ mit dem Zielordner und dem Button „Next“",
              },
            ],
          },
          {
            text: "Klicken Sie auf „Install“.",
            bilder: [
              {
                datei: "toshiba-bv400d-schritt-9.webp",
                alt: "Installationsassistent „Ready to Install the Program“ mit dem Button „Install“",
              },
            ],
          },
          {
            text: "Klicken Sie nach der Installation auf „Finish“.",
            bilder: [
              {
                datei: "toshiba-bv400d-schritt-10.webp",
                alt: "Installationsassistent „InstallShield Wizard Complete“ mit dem Button „Finish“",
              },
            ],
          },
          {
            text: "Öffnen Sie das Programm „BCP Setting Tool“.",
            bilder: [
              {
                datei: "toshiba-bv400d-schritt-11.webp",
                alt: "Eintrag „BCP Setting Tool – App“ im Windows-Startmenü",
              },
            ],
          },
          {
            text: "Das Programm erkennt automatisch, dass Ihr PC mit dem Etikettendrucker verbunden ist.",
            bilder: [
              {
                datei: "toshiba-bv400d-schritt-12.webp",
                alt: "Programmfenster „BCP Setting Tool“ mit dem erkannten Drucker BV400-G/T an der Schnittstelle USB",
              },
            ],
          },
          {
            text: "Klicken Sie auf „Maintenance“.",
            bilder: [
              {
                datei: "toshiba-bv400d-schritt-13.webp",
                alt: "Programmfenster; ein Pfeil zeigt links auf das Symbol „Maintenance“",
              },
            ],
          },
          {
            text: "Klicken Sie auf „Refresh“.",
            bilder: [
              {
                datei: "toshiba-bv400d-schritt-14.webp",
                alt: "Ansicht „Maintenance“; ein Pfeil zeigt auf den Button „Refresh“",
              },
            ],
          },
          {
            text: "Wenn der Balken bei 100 % steht, klicken Sie auf „Close“.",
            bilder: [
              {
                datei: "toshiba-bv400d-schritt-15.webp",
                alt: "Fenster „Get Printer Info“ mit vollem Fortschrittsbalken und dem Button „Close“",
              },
            ],
          },
          {
            text: "Die rechte Spalte zeigt jetzt die Zählerstände des Etikettendruckers.",
            bilder: [
              {
                datei: "toshiba-bv400d-schritt-16.webp",
                alt: "Ansicht „Maintenance“; die rechte Spalte „Maintenance Counter Info“ mit den Zählerständen ist gelb umrandet",
              },
            ],
          },
        ],
      },
      {
        id: "toshiba-b-sa4tm",
        titel: "B-SA4TM",
        schritte: [
          {
            text: "Starten Sie das Gerät neu. Das Display zeigt das Hauptmenü.",
            bilder: [
              {
                datei: "toshiba-b-sa4tm-schritt-1.webp",
                alt: "Display im Hauptmenü mit „ON LINE“ und „B-SA4T-T“",
              },
            ],
          },
          {
            text: "Drücken Sie die Taste „Pause“. Das Display zeigt „Pause“.",
            bilder: [
              {
                datei: "toshiba-b-sa4tm-schritt-2a.webp",
                alt: "Bedienfeld; die Taste „Pause“ ist gelb umkreist",
              },
              {
                datei: "toshiba-b-sa4tm-schritt-2b.webp",
                alt: "Display mit der Anzeige „PAUSE B-SA4T-T“",
              },
            ],
          },
          {
            text: "Halten Sie die Taste „Feed“ gedrückt, bis eine Zahl im Display erscheint.",
            bilder: [
              {
                datei: "toshiba-b-sa4tm-schritt-3a.webp",
                alt: "Bedienfeld; die Taste „Feed“ ist gelb umkreist",
              },
              {
                datei: "toshiba-b-sa4tm-schritt-3b.webp",
                alt: "Display mit dem Zählerstand in cm",
              },
            ],
          },
          {
            text: "Wird die Zahl in „inch“ angezeigt, drücken Sie die Taste „Restart“.",
            bilder: [
              {
                datei: "toshiba-b-sa4tm-schritt-4.webp",
                alt: "Display mit dem Zählerstand in inch; die Taste „Restart“ ist gelb umkreist",
              },
            ],
          },
          {
            text: "Drücken Sie die Taste „Pause“. Der Drucker druckt den Zählerstand auf ein Etikett.",
            bilder: [
              {
                datei: "toshiba-b-sa4tm-schritt-5.webp",
                alt: "Display mit dem Zählerstand in cm; die Taste „Pause“ ist gelb umkreist",
              },
            ],
          },
        ],
      },
      {
        id: "toshiba-b-fv4",
        titel: "B-FV4D, B-FV4T",
        einleitung:
          "Abgefragt werden der „0,1 km-Zähler“ (FEED1) und der „cm/Inch-Zähler“ (FEED2). Dafür drucken Sie einen Testdruck.",
        schritte: [
          {
            text: "Schalten Sie den Drucker aus. Legen Sie Material in voller Breite (104 mm) ein.",
          },
          {
            text: "Halten Sie die Taste „Feed“ gedrückt, während Sie den Drucker einschalten. LED 1 und LED 2 leuchten nacheinander auf: Orange → Grün → andere Farben.",
          },
          {
            text: "Lassen Sie die Taste „Feed“ los, wenn LED 1 orange und LED 2 grün leuchtet.",
          },
          {
            text: "Drücken Sie noch einmal die Taste „Feed“.",
          },
          {
            text: "Der Testdruck erscheint. Danach ist der Drucker im DUMP-Modus.",
          },
          {
            text: "Um zurück in den ONLINE-Status zu gelangen, schalten Sie den Drucker aus und wieder ein.",
          },
          {
            text: "Der Zähler wird ausgedruckt.",
            bilder: [
              {
                datei: "toshiba-b-fv4-ausdruck.webp",
                alt: "Ausdruck „B-FV4T-G PRINTER INFO“; die Zeilen TOTAL FEED1 und TOTAL FEED2 sind rot umrandet",
              },
            ],
          },
        ],
      },
    ],
  },
];
