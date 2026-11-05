# Seite „Zählerstände auslesen“ pflegen

**Für:** Angela Vogtsberger (Operations)
**Seite:** https://www.sirius-gmbh.de/zaehlerstand
**Stand:** Montag, 2. November 2026 – Entwurf

Diese Anleitung zeigt Schritt für Schritt,

1. wie Sie ein **neues Druckermodell ergänzen**,
2. wie Sie das **PDF austauschen**, ohne dass sich ein Link ändert,
3. wie Sie den **Link zum Webportal** eintragen.

Sie brauchen dafür **keine Programmierkenntnisse**. Sie arbeiten in **GitHub** im Browser.

> **Wichtig vorab:** Unsere Website läuft seit 2026 nicht mehr mit WordPress. Es gibt also keinen Gutenberg-Editor und keine „Seite bearbeiten“-Schaltfläche. Alle Inhalte dieser Seite stehen in **einer Textdatei**. Die Bilder und das PDF liegen in **zwei Ordnern**. Mehr müssen Sie nicht anfassen.

---

## Begriffe, die in dieser Anleitung vorkommen

| Begriff | Was es bedeutet |
|---|---|
| **GitHub** | Webseite, auf der der Quelltext unserer Website liegt: github.com |
| **Repository** („Repo“) | Der Projektordner unserer Website auf GitHub. Unserer heißt `Smiling-Data-Club/sirius-flow-3dc01161`. |
| **Commit** | Eine gespeicherte Änderung mit einer kurzen Notiz, was Sie geändert haben |
| **Branch** | Eine Arbeitskopie. Änderungen darin sind noch nicht live. |
| **Pull Request** | Ein Änderungsvorschlag. Jemand prüft ihn und gibt ihn frei. Erst dann geht die Änderung live. |
| **Netlify** | Der Dienst, der die Website veröffentlicht. Nach der Freigabe baut er die Seite neu, das dauert ein paar Minuten. |
| **WebP** | Ein Bildformat für Webseiten. Es ist deutlich kleiner als PNG oder JPG und lädt schneller. |
| **Alt-Text** | Kurze Bildbeschreibung für Menschen mit Screenreader (Vorlese-Programm) und für den Fall, dass ein Bild nicht lädt |

**Zugang:** Sie brauchen ein GitHub-Konto mit Schreibrecht auf das Repository. Falls Sie das noch nicht haben, fragen Sie bitte die Geschäftsführung.

**Wer gibt frei?** **[prüfen]** Bitte vor dem ersten Einsatz festlegen, wer Ihre Pull Requests prüft und freigibt. Ebenso zu klären: Geht die Seite nach der Freigabe automatisch live?

---

## Die drei Stellen, die Sie brauchen

| Was | Wo im Repository |
|---|---|
| Texte, Modelle, Schritte | `src` → `data` → `zaehlerstand.ts` |
| Bilder | `public` → `zaehlerstand` |
| PDF | `public` → `downloads` → `anleitung-zaehlerstaende.pdf` |

---

## A. Neues Druckermodell ergänzen

Prüfen Sie zuerst: **Wird das neue Modell genauso bedient wie ein Modell, das schon auf der Seite steht?** Fragen Sie im Zweifel die Technik.

- **Ja** → Fall 1 (dauert 2 Minuten)
- **Nein**, es braucht eigene Schritte und Bilder → Fall 2

### Fall 1: Modellname zu einer bestehenden Gruppe hinzufügen

1. Öffnen Sie https://github.com/Smiling-Data-Club/sirius-flow-3dc01161
2. Klicken Sie nacheinander auf die Ordner **`src`** → **`data`** → auf die Datei **`zaehlerstand.ts`**.
3. Klicken Sie oben rechts über dem Dateiinhalt auf das **Stift-Symbol** („Edit this file“).
4. Drücken Sie **Strg+F** und suchen Sie ein Modell aus der passenden Gruppe, z. B. `MX-C301W`.
5. Sie landen in einer Zeile wie dieser:
   ```
   titel: "MX-C301W, MX-2614",
   ```
6. Schreiben Sie das neue Modell **innerhalb der Anführungszeichen** dazu, mit Komma und Leerzeichen getrennt:
   ```
   titel: "MX-C301W, MX-2614, MX-2615",
   ```
7. Klicken Sie oben rechts auf den grünen Button **„Commit changes…“**.
8. Schreiben Sie bei „Commit message“ eine kurze Notiz, z. B. `Zählerstand: MX-2615 ergänzt`.
9. Wählen Sie **„Create a new branch for this commit and start a pull request“** und klicken Sie auf **„Propose changes“**.
10. Klicken Sie auf der nächsten Seite auf **„Create pull request“**. Fertig – jetzt wird Ihre Änderung geprüft und freigegeben.

**Bitte beachten:** Die Anführungszeichen `"` am Anfang und Ende der Zeile und das Komma ganz am Ende müssen bleiben.

### Fall 2: Neue Modellgruppe mit eigenen Schritten und Bildern

#### Schritt 1 – Bilder vorbereiten

1. Machen Sie gut lesbare Fotos oder Screenshots, **ein Bild pro Schritt**.
   **Markierungen gehören direkt ins Bild.** Kreise und Pfeile, die man in Word über ein Bild legt, sind kein Teil der Bilddatei. Die Webseite zeigt sie deshalb nicht. So geht es:
   - Bild in PowerPoint einfügen, Kreis oder Pfeil darüberlegen (Farbe wie bisher: Orange oder Rot), beides markieren, **Rechtsklick** → **„Als Grafik speichern…“** → PNG.
   - Oder Claude bitten, die Markierung einzuzeichnen (siehe Abschnitt D).
2. Wandeln Sie jedes Bild in **WebP** um und verkleinern Sie es auf **höchstens 1200 Pixel Breite**.
   - Einfacher Weg: https://squoosh.app im Browser öffnen, Bild hineinziehen, rechts als Format **WebP** wählen, bei „Resize“ eine Breite von höchstens 1200 eintragen und auf **Download** klicken.
   - **[prüfen]** Ob dieses Werkzeug genutzt werden darf, bitte vorher intern klären. Kundendaten gehören auf keinen Fall auf die Fotos (siehe unten).
3. Benennen Sie die Dateien nach diesem Muster, nur mit Kleinbuchstaben, Ziffern und Bindestrichen, **ohne Umlaute und Leerzeichen**:
   ```
   <hersteller>-<modellgruppe>-schritt-<nummer>.webp
   ```
   Beispiele: `sharp-bp-70m-schritt-1.webp`, `sharp-bp-70m-schritt-2.webp`
   Gibt es zwei Bilder zu einem Schritt: `…-schritt-2a.webp`, `…-schritt-2b.webp`

> **Datenschutz:** Auf den Fotos dürfen keine Kundennamen, E-Mail-Adressen oder Kunden-Seriennummern zu sehen sein. Nehmen Sie, wenn möglich, ein Vorführgerät.

#### Schritt 2 – Bilder hochladen

1. Öffnen Sie im Repository den Ordner **`public`** → **`zaehlerstand`**.
2. Klicken Sie oben rechts auf **„Add file“** → **„Upload files“**.
3. Ziehen Sie Ihre WebP-Dateien in das Feld.
4. Unten: Wählen Sie **„Create a new branch for this commit and start a pull request“**. Notiz: z. B. `Zählerstand: Bilder Sharp BP-70M`. Klicken Sie auf **„Propose changes“**.
5. **Merken Sie sich den Namen des Branches**, er steht oben auf der Seite, z. B. `angela-patch-1`. Dort tragen Sie gleich auch den Text ein.

#### Schritt 3 – Text und Schritte eintragen

1. Öffnen Sie `src` → `data` → `zaehlerstand.ts`, und zwar **in Ihrem Branch**: Wählen Sie oben links im Auswahlfeld (dort steht meist `main`) Ihren Branch-Namen aus.
2. Klicken Sie auf das **Stift-Symbol**.
3. Suchen Sie mit **Strg+F** eine Gruppe desselben Herstellers, z. B. `id: "sharp-mx-c301w"`.
4. **Kopieren Sie den ganzen Block** dieser Gruppe. Er beginnt mit `{` in der Zeile vor `id:` und endet mit `},` – an derselben Einrückung wie die `{`.
5. Fügen Sie die Kopie **direkt unter dem kopierten Block** ein.
6. Ändern Sie in der Kopie:
   - **`id`**: kurzer neuer Name, nur Kleinbuchstaben, Ziffern und Bindestriche, z. B. `"sharp-bp-70m"`. Er darf nur einmal vorkommen.
   - **`titel`**: die Modellliste, genau so wie auf dem Gerät, mit Komma getrennt. **Danach suchen die Kunden.**
   - **Je Schritt** den **`text`** in Sie-Form und kurzen Sätzen.
   - **Je Bild** die **`datei`** (Ihr Dateiname) und den **`alt`**-Text. Der Alt-Text beschreibt in einem Satz, was zu sehen ist, z. B. `"Display mit dem Menü Einstellungen; der Eintrag Druckzähler ist ausgewählt"`.
   - Optional **`beschriftung`**: ein kurzer Satz, der sichtbar unter dem Bild steht, z. B. `beschriftung: "Beispiel Farbgerät"`.
   - Zu viele Schritte? Löschen Sie den ganzen Schritt-Block von `{` bis `},`. Zu wenige? Kopieren Sie einen Schritt-Block und fügen Sie ihn dahinter ein.
7. Unten: **„Commit changes…“** → **„Commit directly to the …-Branch“** (also Ihr Branch, nicht `main`) → **„Commit changes“**.
8. Gehen Sie oben auf den Reiter **„Pull requests“**, öffnen Sie Ihren Pull Request und bitten Sie um Prüfung.

**So sieht eine Gruppe aus** (Vorlage zum Kopieren):

```ts
      {
        id: "sharp-bp-70m",
        titel: "BP-70M31, BP-70M36, BP-70M45",
        schritte: [
          {
            text: "Wählen Sie „Einstellungen“.",
            bilder: [
              {
                datei: "sharp-bp-70m-schritt-1.webp",
                alt: "Startbildschirm mit dem Symbol Einstellungen",
              },
            ],
          },
          {
            text: "Wählen Sie „Drucken“. Der Drucker druckt eine Zählerseite.",
            bilder: [
              {
                datei: "sharp-bp-70m-schritt-2.webp",
                alt: "Seite Gesamtzählung mit dem Button Drucken",
              },
            ],
          },
        ],
      },
```

Ein Schritt ohne Bild ist erlaubt. Lassen Sie dann den Teil `bilder: [ … ],` einfach weg.

#### Neuer Hersteller?

Das ist möglich, aber aufwendiger. Ein Hersteller bekommt eine eigene Sprungmarke oben auf der Seite und optional einen Abschnitt „Statusseite lesen“. Bitte dafür kurz die Technik hinzuziehen.

### Ein Bild ersetzen (z. B. neues Display-Foto)

1. Bereiten Sie das neue Bild vor (WebP, höchstens 1200 px breit) und geben Sie ihm **genau denselben Dateinamen** wie dem alten.
2. Öffnen Sie `public` → `zaehlerstand` → **„Add file“** → **„Upload files“** und laden Sie die Datei hoch. GitHub ersetzt die alte Datei.
3. Wenn sich der Bildinhalt deutlich geändert hat, passen Sie in `zaehlerstand.ts` auch den **Alt-Text** an.

### Wenn etwas nicht stimmt

- **Tippfehler in der Datei** (z. B. ein fehlendes Komma oder Anführungszeichen): Meistens schlägt dann die Veröffentlichung fehl, und die **alte Seite bleibt online**. Nichts geht kaputt. Die Person, die freigibt, sieht den Fehler.
- **Bild wird nicht angezeigt:** Fast immer ist der Dateiname in `zaehlerstand.ts` anders geschrieben als die hochgeladene Datei. Achten Sie auf Groß- und Kleinschreibung und auf `.webp`.
- **Für die Technik:** Der Befehl `npm test` prüft automatisch, ob alle Bilder vorhanden sind, ob jedes Bild einen Alt-Text hat, ob jede `id` nur einmal vorkommt und ob der Portal-Link Zugangsdaten enthält.

---

## B. PDF austauschen (Link bleibt gleich)

Das PDF heißt **immer** `anleitung-zaehlerstaende.pdf`, ohne Datum im Namen. Dadurch bleibt der Download-Link `https://www.sirius-gmbh.de/downloads/anleitung-zaehlerstaende.pdf` beim Austausch gleich. Die Adresse der Seite (`/zaehlerstand`) ändert sich ohnehin nie.

1. Öffnen Sie die Word-Vorlage `Anleitung_zum_Auslesen_von_Zählern_MFPs_EDs.docx`, nehmen Sie Ihre Änderungen vor und speichern Sie sie.
2. In Word: **Datei** → **Speichern unter** → Dateityp **PDF** wählen.
3. Geben Sie als Dateiname **genau** `anleitung-zaehlerstaende` ein, alles klein, mit Bindestrich, ohne Datum. Word ergänzt `.pdf`.
4. Öffnen Sie in GitHub den Ordner **`public`** → **`downloads`**.
5. Klicken Sie auf **„Add file“** → **„Upload files“** und ziehen Sie die neue PDF-Datei hinein.
6. Unten: Notiz, z. B. `Zählerstand-PDF aktualisiert (Stand 11/2026)`. Wählen Sie **„Create a new branch … and start a pull request“** → **„Propose changes“** → **„Create pull request“**.
7. Nach der Freigabe und ein paar Minuten ist das neue PDF online. Falls Sie noch das alte sehen, laden Sie die Seite mit **Strg+F5** neu.

**Bitte nicht:** Die Datei umbenennen oder eine zweite PDF-Datei mit anderem Namen hochladen. Dann zeigt der Button weiter auf die alte Datei.

**Hinweis:** Wenn Sie in der Word-Datei Texte ändern, stimmen PDF und Webseite nicht mehr überein. Tragen Sie die Änderung bitte auch in `zaehlerstand.ts` ein (Abschnitt A).

---

## C. Link zum Webportal eintragen

1. Öffnen Sie `src` → `data` → `zaehlerstand.ts` → **Stift-Symbol**.
2. Suchen Sie mit **Strg+F** die Zeile:
   ```
   export const PORTAL_URL = "[PORTAL-URL]";
   ```
3. Ersetzen Sie `[PORTAL-URL]` durch die **allgemeine** Adresse des Portals. Sie muss mit `https://` beginnen.
4. **Niemals** einen persönlichen Kundenlink eintragen, also keinen Link, der `USR=` oder `PW=` enthält. Diese Links enthalten Zugangsdaten. Die Seite zeigt solche Links automatisch nicht an.
5. Speichern Sie wie in Abschnitt A, Schritte 7 bis 10.

Solange der Platzhalter `[PORTAL-URL]` dort steht, zeigt die Seite keinen Button, sondern nur den Satz „Nutzen Sie den persönlichen Link aus unserer E-Mail.“

---

## D. Mit Claude oder Claude Code pflegen

Statt die Datei selbst zu bearbeiten, können Sie die Änderung auch von Claude Code machen lassen. Claude Code braucht dafür Zugriff auf das Repository `Smiling-Data-Club/sirius-flow-3dc01161`. Beschreiben Sie die Änderung in normalen Worten, zum Beispiel:

- „Ergänze auf der Seite /zaehlerstand das Modell **MX-2615** in der Sharp-Gruppe mit **MX-C301W**. Halte dich an docs/zaehlerstand/pflege.md.“
- „Ich habe Fotos für den **Sharp BP-70M** hochgeladen. Lege eine neue Modellgruppe mit diesen Schritten an: … Zeichne auf Bild 2 einen orangen Kreis um den Button ‚Drucken‘. Wandle alle Bilder in WebP um.“
- „Tausche das PDF der Zählerstand-Anleitung gegen die angehängte Datei aus. Der Link soll gleich bleiben.“

Lassen Sie Claude die Änderung als **Pull Request** anlegen, nicht direkt veröffentlichen. Dann kann jemand drüberschauen, bevor sie live geht. Claude prüft die Änderung mit den automatischen Tests (`npm test`) und sagt Ihnen, ob alles passt.

---

## Tipp: Direktlink auf ein Modell

Jede Modellgruppe hat eine eigene Adresse. Damit können Sie Kunden in E-Mails direkt zur richtigen Anleitung schicken. Die Gruppe ist dann gleich aufgeklappt:

```
https://www.sirius-gmbh.de/zaehlerstand#toshiba-b-sa4tm
```

Der Teil hinter `#` ist die `id` der Gruppe aus `zaehlerstand.ts`. Für einen ganzen Hersteller: `#sharp`, `#lexmark`, `#epson`, `#toshiba`.
