# Zählerstände auslesen – Änderungen und offene Punkte

**Stand:** Montag, 2. November 2026 · **Status:** Entwurf, bitte prüfen
**Quelle:** `Anleitung_zum_Auslesen_von_Zählern_MFPs_EDs.docx` (Abgleich mit dem PDF vom 01.06.2026, Text identisch)

Alles, was mit **[prüfen]** markiert ist, habe ich nicht abschließend entschieden.

---

## 1. Rahmen

| Thema | Ergebnis |
|---|---|
| Editor-Prüfung | sirius-gmbh.de ist **kein WordPress mehr**. Der Quelltext enthält weder „elementor“ noch „wp-block-“. Die Seite ist eine React-App auf Netlify, `/wp-admin/` liefert 410. Deshalb gibt es kein Gutenberg-Markup. Die Seite ist eine React-Route mit separater Datendatei (abgestimmt am 02.11.2026). |
| Adresse | `/zaehlerstand`, nicht im Hauptmenü, in der Sitemap, indexierbar |
| Seitentitel | „Zählerstände auslesen: Sharp, Lexmark, Epson, Toshiba \| SIRIUS“ (62 Zeichen; der Vorschlag aus dem Briefing hatte rund 80 Zeichen und wäre bei Google abgeschnitten worden) |
| Meta-Beschreibung | „So lesen Sie den Zählerstand Ihres Sharp-, Lexmark- oder Epson-Druckers oder Ihres Toshiba-Etikettendruckers aus und melden ihn im SIRIUS-Webportal.“ (rund 150 Zeichen) |
| PDF | Neuer fester Name: `/downloads/anleitung-zaehlerstaende.pdf`. Der alte Name mit Datum und die alte WordPress-Adresse leiten per 301 dorthin weiter. |
| Weiterleitung | `/Support/Zählerstände` (Link in AGB § 12) leitet per 301 auf `/zaehlerstand` weiter. **[prüfen]** Nach dem Deploy einmal im Browser testen, wegen der Umlaute in der Adresse. |

---

## 2. Korrigierte offensichtliche Fehler

| # | Stelle | Vorher (DOCX) | Nachher (Webseite) |
|---|---|---|---|
| 1 | B-EX6T1/B-EX6T3, Schritt 3 | „Die **Zäherstände** erscheinen …“ | „… zeigt die **Zählerstände** an.“ |
| 2 | BA400T, Schritt 5 | „**Wählen sie** „Maintenance Counter““ | „Wählen Sie …“ |
| 3 | BA400T, Option 1 | „… **wählen sie** „Yes““ | „… wählen Sie danach „Yes““ |
| 4 | Epson, beide Gruppen | „Die Option „**Druckerzähler**“ auswählen“ | „Wählen Sie „**Druckzähler**““ (so steht es im Display, siehe Bilder) |
| 5 | BV400D, letzter Schritt | „Die **Rechte** Spalte …“ | „Die rechte Spalte …“ |
| 6 | Lexmark, Epson, B-FV4 | „Wir empfehlen Ihnen die ID-Nr. …“ (Komma fehlt) | einheitlich: „Notieren Sie die ID-Nr. auf dem Ausdruck. …“ |
| 7 | B-EX6, Schritt 2 | „Drücken Sie die „Pause“ Taste“ | „Drücken Sie die Taste „Pause“.“ |
| 8 | BA400T, Schritt 4 | „bestätigen Sie mit drücken der „Pause“-Taste“ | „bestätigen Sie mit der Taste „Pause““ |
| 9 | Sharp, 2. Modellgruppe | Beim Zeilenumbruch fehlen Trennzeichen, z. B. „BP-B547WDMX-2630“, „MX-6071 BP-50C26“ | durchgehend mit Komma getrennt |
| 10 | Epson, Toshiba (Titel) | Trennung mal mit „/“, mal mit „/ “ | einheitlich mit Komma |
| 11 | B-FV4, Schritt 2 | LED-Reihenfolge mit Wingdings-Pfeilen (Wingdings ist eine Symbolschrift; beim Kopieren gehen die Pfeile verloren) | „Orange → Grün → andere Farben“ |
| 12 | B-FV4, Schritt 1 | „104mm“ | „104 mm“ |
| 13 | Sharp | „Schraubenzieher/Schraubenschlüssel-Symbol“ | „Schraubenzieher- und Schraubenschlüssel-Symbol“ |
| 14 | gesamt | Infinitiv-Stil („22 tippen, dann …“) | Sie-Form, kurze Sätze. Der Inhalt ist unverändert. |

**Nicht korrigiert, weil im Bild:** Auf der Lexmark-Statusseite steht im Bild „Je nach Modell **Finden** Sie …“. Laut Vorgabe bleiben Bilder unverändert.

**Nur im PDF/DOCX, nicht auf der Seite:** Das Deckblatt nennt nur „… für **Etikettendrucker**“, das Dokument umfasst aber auch Multifunktionsgeräte und Drucker. → Beim nächsten PDF-Export anpassen.

---

## 3. Ergänzungen (aus der Quelle abgeleitet) – [prüfen]

1. **Sharp MX-B350P, Schritt 1:** Die Tastenfolge steht in der DOCX nur als Bild. Ich habe sie als Text ergänzt: „@.-“ → Taste mit Pfeil-Symbol → „C“ → Taste mit Pfeil-Symbol. **[prüfen]** Wie heißt die Pfeil-Taste offiziell?
2. **Statusseiten:** Die Lesehinweise standen nur als Beschriftung im Bild. Ich habe sie als Text übernommen, damit sie für Screenreader lesbar und über die Suche auffindbar sind:
   - Sharp: Gesamtzähler SW/Farbe aus „Gesamtanzahl“. Scans = „Scan senden“ (beide Spalten) + „Fax-Senden“. Fax-Senden gibt es nur mit Faxmodul. Bei der Seriennummer die letzten beiden Nullen weglassen.
   - Lexmark: Zähler SW/Farbe unter „Medienseiten/Anzahl → Gesamt“. Scans = „Fax“ + „Netzwerk“ unter „Scannerverwendung“. Die Seriennummer steht auf der letzten Seite.
   - Epson: Die Markierungen gibt es **nur als Word-Formen**, sie fehlen in den Bilddateien. Den Text habe ich anhand der PDF-Seiten 16–17 ergänzt: Farbgeräte „Gesamtanzahl S&W-Seiten“ und „Gesamtanzahl Farbe-Seiten“, Schwarzweiß-Geräte „Gesamtanzahl Seiten“.
3. **Hinweisbox:** Die Inhalte stammen aus dem Briefing, nicht aus der DOCX. Die Frist steht auf der Seite als **„innerhalb von 3 Werktagen nach unserer Aufforderung“**, weil AGB § 12 von „binnen 3 Werktagen“ spricht. Im Briefing stand „3 Tage“. **[prüfen]**
4. **Herstellername „Toshiba“:** steht nicht in der DOCX, nur auf den Gerätefotos und in der BCP-Software. Übernommen aus dem Briefing.
5. **Einleitung BV400D:** „Sie brauchen einen Windows-PC, der mit dem Etikettendrucker verbunden ist.“ Abgeleitet aus den Schritten (Windows-Installer, USB-Verbindung). **[prüfen]**

---

## 4. Umstrukturierungen

- **BV400D:** In der DOCX sind es 4 Schritte mit vielen Unterbildern. Auf der Seite sind es 16 einzeln nummerierte Schritte mit je einem Satz. Die Zwischenüberschriften „Schritt 1 (Webseite öffnen)“ usw. entfallen.
- **B-SA4TM:** Der DOCX-Schritt 3 enthält zwei Handlungen („Feed halten“ und „bei inch Restart drücken“). Auf der Seite sind das zwei Schritte, insgesamt also 5 statt 4.
- **BA400T, Schritt 6:** „Option 1 / Option 2“ ist jetzt eine Aufzählung in Schritt 6. Schritt 7 bleibt Schritt 7.
- **B-EX6, Schritt 4:** Die nummerierte Liste (Cancel/Enter) ist jetzt eine Aufzählung.

---

## 5. Inhaltliche Unklarheiten

Antworten von Service-Technik und Angela vom 04.11.2026 sind eingearbeitet.

| # | Stelle | Stand |
|---|---|---|
| A | **B-FV4D/B-FV4T – Reihenfolge** | **Geklärt:** Der Zählerstand steht auf dem Testdruck (Schritt 5). Schritt 7 („Der Zähler wird ausgedruckt“) ist entfallen. **[prüfen]** Laut Technik „eher so“, konnte aber nicht am Gerät getestet werden. Beim nächsten Gerät bitte einmal bestätigen. |
| B | **B-FV4D/B-FV4T – welcher Wert?** | **Geklärt:** Der Kunde trägt „TOTAL FEED1“ (km) ein. Das steht jetzt in der Einleitung und in Schritt 5. |
| C | **Etikettendrucker – Einheit** | **Teilweise geklärt:** Laut Technik werden die Werte in km eingetragen. Bei BA400T, BV400D und B-FV4 steht das jetzt auf der Seite, denn diese Geräte zeigen km an. **Offen:** B-EX4, B-EX6 und B-SA4TM zeigen nur cm und inch an. Außerdem haben km-Werte oft Nachkommastellen, die Hinweisbox sagt aber „ohne Punkt oder Komma“. → Nachfrage an die Technik (siehe `rueckfragen.md`, Teil 3). |
| D | **B-EX4, Schritt 4** | **Geklärt:** Der Ablauf ist wie beim B-EX6. Die Zähler erscheinen nach „Pfeil nach oben“ (jetzt Schritt 3). Schritt 4: „Cancel“ führt zurück ins Hauptmenü, „Enter“ druckt das Etikett. Insgesamt sind es jetzt 4 statt 5 Schritte; die Bilder sind entsprechend umbenannt. |
| E | **BA400T, Schritt 1** | **Geklärt:** Das Gerät muss vorher aus sein. Neuer Text: „Schalten Sie das Gerät aus. Halten Sie die Tasten „Feed“ und „Pause“ gedrückt und schalten Sie das Gerät mit dem Power-Button ein.“ |
| F | **BA400T, Schritt 6** | **Geklärt:** Thermal Transfer oder Direct Thermal hängt von den eingelegten Etiketten ab. Ergänzt habe ich: „Thermal Transfer“ für Etiketten mit Farbband, „Direct Thermal“ für Thermoetiketten ohne Farbband. **[prüfen]** Die Zuordnung zum Farbband ist allgemeines Fachwissen, nicht aus der Anleitung. |
| G | **Lexmark – keine Modellliste** | **Gelöst ohne Modellliste**, nach dem Vorschlag der Technik: Ein Hinweis bei Lexmark sagt „zuerst die neue Menüführung ausprobieren, sonst die alte“. Die neue Menüführung ist im Titel als „bitte zuerst ausprobieren“ markiert. Die Suche zeigt bei Eingabe von „Lexmark …“ beide Anleitungen. Nur eine Modellnummer ohne „Lexmark“ (z. B. „CX725“) findet weiterhin nichts. Die Seite rät dann, oben den Hersteller zu wählen. |
| H | **Sharp – Begriffe** | **Geklärt:** „Zählerseite“ und „Statusseite“ sind dasselbe. Jetzt heißt es überall „Statusseite“, passend zu „Statusseite lesen“. Die Regel „letzte zwei Nullen der Seriennummer weglassen“ gilt nur für Sharp und steht nur dort. |
| I | ~~Fehlende Markierungen in Bildern~~ | **Erledigt am 02.11.2026:** Die Markierungen stammen jetzt aus dem PDF, das aus derselben Word-Datei exportiert wurde (35 Bilder). Die Alt-Texte nennen, was markiert ist. |
| J | **Word-Zuschnitt** | Exportiert ist der in Word sichtbare Ausschnitt, ohne weitere Bearbeitung. |
| K | **Geräte-Kennungen in Screenshots** | **Geklärt:** Laut Technik müssen sie nicht unkenntlich gemacht werden, weil die Seriennummern nicht mit Kundendaten verknüpft werden können. Die Bilder bleiben unverändert. |
| L | **PDF passt nicht mehr zur Seite** | **Offen:** Die Korrekturen stehen nur auf der Webseite. Bitte die DOCX korrigieren und das PDF neu exportieren (Ablauf: `pflege.md`, Abschnitt „PDF austauschen“). Neu dazugekommen: B-EX4, B-FV4 und BA400T laut den Antworten anpassen. |
| M | **Frist** | **Bestätigt:** „innerhalb von 3 Werktagen nach unserer Aufforderung“ |
| N | **Webportal** | **Geklärt:** Es gibt keine allgemeine Portal-Adresse. Die Seite zeigt keinen Button, sondern nur den Hinweis auf den persönlichen Link aus der E-Mail. `PORTAL_URL` bleibt auf dem Platzhalter. |

---

## 6. Hinweise an die Geschäftsführung / IT

- **AGB § 12** verlinkt `www.sirius-gmbh.de/Support/Zählerstände`. Die Weiterleitung ist angelegt. Den Link in den AGB auf `/zaehlerstand` zu ändern, ist eine Änderung am Rechtstext und wurde **nicht** vorgenommen. → Freigabe GF.
- **Telefonnummer:** Auf Freigabe vom 04.11.2026 überall vereinheitlicht auf **(0761) 704070** wie in der Word-Vorlage: Zählerstand-Seite, Anruf-Link der Service-Area-Seite (vorher `7040700`) und Daten der Startseite für Google (JSON-LD, vorher `+49 761 4002-0`). Impressum und Datenschutz hatten die Nummer schon.
- **Webportal-Link:** Es gibt keine allgemeine Portal-Adresse (Antwort vom 04.11.2026). `PORTAL_URL` bleibt auf dem Platzhalter `[PORTAL-URL]`, die Seite zeigt deshalb **keinen** Button, nur den Hinweis auf den persönlichen Link aus der E-Mail. Die Seite zeigt keinen Link mit `USR=`/`PW=`-Parametern, auch wenn er versehentlich eingetragen wird. Ein automatischer Test prüft das zusätzlich.
- **Nicht verwendet aus der DOCX:** Deckblattgrafik (`image1.png`), Briefpapier-Hintergrund aus der Kopfzeile (`image90.jpg`), Bildeffekt-Dateien (`hdphoto1–3.wdp`).
