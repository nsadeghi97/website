# Bilder für die BoberVentures Website

In diesem Verzeichnis werden alle Bilder für die BoberVentures Website gespeichert.

## Wie füge ich Bilder hinzu?

1. Speichere deine Bilder in diesem Verzeichnis (`public/images/`).
2. Verwende aussagekräftige Dateinamen, z.B. `team-member-name.jpg` oder `portfolio-company-name.png`.
3. Optimiere deine Bilder für das Web (komprimiere sie, um die Ladezeit zu verbessern).
4. Verwende bevorzugt die Formate JPG (für Fotos) oder PNG (für Grafiken mit Transparenz).

## Wie verwende ich die Bilder in der Website?

In den React-Komponenten kannst du auf die Bilder mit dem Pfad `/images/dateiname.jpg` zugreifen.

Beispiel:

```jsx
<img src="/images/team-photo.jpg" alt="BoberVentures Team" />
```

## Empfohlene Bildgrößen

- **Hero-Bereich**: 1920x1080px
- **Team-Mitglieder**: 500x500px (quadratisch)
- **Portfolio-Unternehmen**: 600x400px
- **Über uns**: 800x600px

## Beispiel für die Verwendung in verschiedenen Komponenten

### In der About-Komponente:
```jsx
<div className="about-image">
  <img src="/images/about-bober.jpg" alt="BoberVentures Innovation" />
</div>
```

### In der Portfolio-Komponente:
```jsx
<div className="portfolio-logo">
  <img src="/images/portfolio-company-logo.png" alt="Unternehmensname" />
</div>
``` 