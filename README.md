# Sportnoten

Web-App für die Notengebung im Sportunterricht (Gymnasium Bayern): Klassen nach Schuljahren, Sportarten je Klasse, Bewertungsbögen mit eigenen Kriterien, ISB-Tabellen (Jgst. 5–11) und Oberstufen-Tabellen (12/13) für Leichtathletik und Schwimmen, PDF-Import von Klassenlisten, Notizen.

- Alle Daten bleiben im Browser des Geräts (localStorage), es gibt keinen Server.
- Läuft offline (Service Worker), Schrift und PDF-Leser liegen lokal im Repository.
- Datensicherung als JSON-Datei über die Startseite.

Installation auf dem iPhone: Seite in Safari öffnen → Teilen → „Zum Home-Bildschirm“.

Drittanbieter: Albert Sans (SIL Open Font License, `fonts/OFL.txt`), PDF.js 3.11.174 (Apache 2.0, `vendor/pdfjs`).
