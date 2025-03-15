# Anleitung: Persönliche Bilder auf der BoberVentures Website verwenden

Diese Anleitung erklärt, wie du persönliche Bilder auf der BoberVentures Website verwenden kannst.

## Methode 1: Bilder direkt im Projektordner speichern (einfachste Methode)

1. **Bilder vorbereiten**:
   - Optimiere deine Bilder für das Web (komprimiere sie, um die Ladezeit zu verbessern)
   - Verwende aussagekräftige Dateinamen, z.B. `team-photo.jpg` oder `portfolio-company.png`

2. **Bilder in den richtigen Ordner kopieren**:
   - Kopiere deine Bilder in den Ordner `public/images/` im Projektverzeichnis
   - Beispiel: `/Users/nimasadeghifard/Documents/bober-ventures/website/public/images/`

3. **Bilder in den Komponenten verwenden**:
   - In den React-Komponenten kannst du auf die Bilder mit dem Pfad `/images/dateiname.jpg` zugreifen
   - Beispiel:
     ```jsx
     <img src="/images/team-photo.jpg" alt="BoberVentures Team" />
     ```

## Methode 2: Bilder in den src-Ordner importieren (für Entwickler)

1. **Bilder im src-Ordner speichern**:
   - Erstelle einen Ordner für Bilder, z.B. `src/assets/images/`
   - Kopiere deine Bilder in diesen Ordner

2. **Bilder in den Komponenten importieren und verwenden**:
   ```jsx
   import teamPhoto from '../assets/images/team-photo.jpg';
   
   // Dann in deinem JSX:
   <img src={teamPhoto} alt="BoberVentures Team" />
   ```

## Empfohlene Bildgrößen

- **Hero-Bereich**: 1920x1080px
- **Team-Mitglieder**: 500x500px (quadratisch)
- **Portfolio-Unternehmen**: 600x400px
- **Über uns**: 800x600px

## Beispiele für die Verwendung in verschiedenen Komponenten

### In der About-Komponente:
Öffne die Datei `src/components/About.tsx` und ändere den Bildpfad:

```jsx
<div className="about-image">
  <img src="/images/about-bober.jpg" alt="BoberVentures Innovation" />
</div>
```

### In der Portfolio-Komponente:
Für Unternehmenslogos kannst du entweder Emojis verwenden (wie aktuell) oder sie durch Bilder ersetzen:

```jsx
<div className="portfolio-logo">
  <img src="/images/portfolio/company-name-logo.png" alt="Unternehmensname" />
</div>
```

## Tipps für optimale Bildqualität

1. **Bildkomprimierung**: Verwende Tools wie [TinyPNG](https://tinypng.com/) oder [Squoosh](https://squoosh.app/), um deine Bilder zu komprimieren, ohne die Qualität zu stark zu beeinträchtigen.

2. **Responsive Bilder**: Für eine bessere Performance auf mobilen Geräten kannst du das `srcset`-Attribut verwenden:
   ```jsx
   <img 
     src="/images/team-large.jpg" 
     srcSet="/images/team-small.jpg 500w, /images/team-large.jpg 1000w"
     sizes="(max-width: 600px) 500px, 1000px"
     alt="Team" 
   />
   ```

3. **Bildformate**: Verwende moderne Bildformate wie WebP für bessere Kompression, aber biete auch Fallbacks für ältere Browser an.

## Wie du mir Bilder geben kannst

Du kannst mir Bilder auf folgende Weisen geben:

1. **Direkt in den Projektordner kopieren**: Kopiere die Bilder in den Ordner `public/images/` und verwende sie dann wie oben beschrieben.

2. **Über einen Cloud-Dienst teilen**: Lade die Bilder auf einen Cloud-Dienst (Google Drive, Dropbox, etc.) hoch und teile den Link mit mir. Ich kann sie dann herunterladen und in das Projekt integrieren.

3. **Per E-Mail senden**: Sende mir die Bilder per E-Mail, und ich kann sie in das Projekt integrieren.

Wenn du Fragen hast oder Hilfe benötigst, stehe ich dir gerne zur Verfügung! 