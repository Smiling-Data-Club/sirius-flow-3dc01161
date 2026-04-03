

## Plan: Papierregen-Animation mit Auflösung

Alle bisherigen Animationen (FloatingPapers, DocumentTornado) werden entfernt und durch eine neue **Papierregen-Animation** ersetzt.

### Konzept

Papierblätter fallen kontinuierlich von oben herab. Jedes Blatt startet oberhalb des Viewports, fällt nach unten und löst sich dabei nach ca. 60-70% der Viewport-Höhe auf (fade-out + scale-down). So verschwinden sie bevor sie den Textbereich erreichen.

Umsetzung rein mit CSS-Keyframes — kein JavaScript-Tracking nötig. Die „Auflösung" wird über opacity + scale im unteren Teil der Animation simuliert.

### Änderungen

**1. `src/components/FloatingPapers.tsx` — komplett neu schreiben**
- 8-12 Papierblätter mit `paper-deco` Styling
- Jedes auf einer zufälligen horizontalen Position (`left: X%`)
- `position: fixed`, `pointer-events-none`, `z-index: 1`
- Verschiedene Größen, Verzögerungen und Geschwindigkeiten

**2. `src/index.css` — Keyframes ersetzen**
- Alte `float-paper`, `tornado-orbit-*` Keyframes entfernen
- Neuer `@keyframes paper-rain`:
  - 0%: `translateY(-100px)`, `opacity: 0`, leichte Rotation
  - 10%: `opacity: 0.7` (einblenden)
  - 60%: `opacity: 0.7` (noch sichtbar)
  - 85%: `opacity: 0`, `scale(0.3)` (auflösen)
  - 100%: `translateY(70vh)`, `opacity: 0`
- Animation: `paper-rain 10-16s linear infinite`
- Leichtes seitliches Pendeln über einen zweiten Keyframe (`paper-sway`)

**3. `src/components/DocumentTornado.tsx` — löschen**

**4. `src/pages/Index.tsx` — DocumentTornado Import/Nutzung entfernen**

**5. `src/components/PageLayout.tsx` — `hideFloatingPapers` Prop bleibt für Team-Seite**

### Technisches Detail

```text
     ╷  ╷    ╷       ╷
     📄  📄   📄      📄    ← Blätter starten über dem Viewport
     │   │    │       │
     ▼   ▼    ▼       ▼     ← fallen herab, pendeln leicht
     ·   ·    ·       ·     ← lösen sich auf (~60-70vh)
  ─────────────────────────
  │  Headline / Content   │  ← Textbereich bleibt frei
  ─────────────────────────
```

5 Dateien betroffen, rein CSS-basiert, keine Runtime-Abhängigkeiten.

