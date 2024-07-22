import { useState } from "react";
import "./App.css";
import { AddValue } from "./components/AddValue";
import QRCode from "react-qr-code";

function App() {
  const [url, setUrl] = useState("https://www.npmjs.com/package/react-qr-code");

  const onAddValue = (newValue) => {
    setUrl(newValue);
  };

  return (
    <div className="app-container">
      <h1 className="title">Convertir URL en Código QR</h1>
      <p className="description">
        Este es un generador de CÓDIGO QR creado en React con React-QR-CODE.
      </p>
      <AddValue newValue={onAddValue} />
      <div className="qr-code">
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "60%", width: "100%" }}
          value={url}
          title={url}
          viewBox={`0 0 256 256`}
        />
      </div>
      {url}
    </div>
  );
}

export default App;
