import React, { useState } from 'react';

/**
 * Diese Komponente ist nur ein Beispiel, wie man einen Bild-Upload implementieren könnte.
 * In einer echten Anwendung würdest du einen Server benötigen, der die Bilder speichert.
 */
const ImageUploadExample: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    
    // Erstelle eine Vorschau des Bildes
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setUploadStatus('Bitte wähle zuerst ein Bild aus.');
      return;
    }

    // Hier würdest du normalerweise das Bild an einen Server senden
    // Da dies nur ein Beispiel ist, simulieren wir einen erfolgreichen Upload
    setUploadStatus('Bild erfolgreich hochgeladen! In einer echten Anwendung würde das Bild jetzt auf dem Server gespeichert werden.');
    
    // In einer echten Anwendung würdest du hier einen API-Aufruf machen, z.B.:
    /*
    const formData = new FormData();
    formData.append('image', selectedFile);
    
    fetch('/api/upload-image', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      setUploadStatus(`Bild erfolgreich hochgeladen! Bildpfad: ${data.imagePath}`);
    })
    .catch(error => {
      setUploadStatus(`Fehler beim Hochladen: ${error.message}`);
    });
    */
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>Bild-Upload Beispiel</h2>
      <p>
        Dies ist nur ein Beispiel für die Benutzeroberfläche. In einer echten Anwendung 
        benötigst du einen Server, der die Bilder speichert.
      </p>
      
      <div style={{ marginTop: '20px' }}>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} 
          style={{ marginBottom: '10px' }}
        />
        
        <button 
          onClick={handleUpload}
          style={{
            padding: '10px 20px',
            backgroundColor: '#00c8ff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Bild hochladen
        </button>
      </div>
      
      {previewUrl && (
        <div style={{ marginTop: '20px' }}>
          <h3>Bildvorschau:</h3>
          <img 
            src={previewUrl} 
            alt="Vorschau" 
            style={{ maxWidth: '100%', maxHeight: '300px', marginTop: '10px' }} 
          />
        </div>
      )}
      
      {uploadStatus && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: 'rgba(0,0,0,0.1)' }}>
          <p>{uploadStatus}</p>
        </div>
      )}
      
      <div style={{ marginTop: '30px' }}>
        <h3>Alternative Methoden zum Hinzufügen von Bildern:</h3>
        <ol>
          <li>
            <strong>Manuelles Hinzufügen:</strong> Füge deine Bilder direkt in den Ordner 
            <code>public/images/</code> deines Projekts ein und verwende sie dann in deinen Komponenten.
          </li>
          <li>
            <strong>Import in React:</strong> Du kannst Bilder auch direkt in deine React-Komponenten importieren:
            <pre>
              {`import myImage from '../path/to/image.jpg';
              
// Dann in deinem JSX:
<img src={myImage} alt="Beschreibung" />`}
            </pre>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ImageUploadExample; 