import { useState } from 'react';
import C from 'js-ktc';

const ktc = new C('secret');

function App() {
  const [selectedAction, setSelectedAction] = useState('encrypt');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');

  const performAction = () => {
    if (selectedAction === 'encrypt') {
      setResult(ktc.encrypt(message));
    } else {
      setResult(ktc.decrypt(message));
    }
  };

  return (
    <div className="container py-5">
      <div className="card p-4">
        <h1 className="text-danger mb-4" style={{ fontFamily: 'Courier New, Courier, monospace' }}>Cifrado por Transposición</h1>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Mensaje:</label>
          <textarea className="form-control" value={message} onChange={(e) => setMessage(e.target.value)} rows="3"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="action" className="form-label">Acción:</label>
          <div className="custom-select">
            <select className="form-select" id="action" value={selectedAction} onChange={(e) => setSelectedAction(e.target.value)}>
              <option value="encrypt">Cifrar</option>
              <option value="decrypt">Descifrar</option>
            </select>
          </div>
        </div>
        <button type="button" className="btn btn-danger" onClick={performAction}><i className="fas fa-lock"></i> Realizar Acción</button>
        <div className="mt-4">
          <label htmlFor="output" className="form-label">Resultado:</label>
          <textarea className="form-control" id="output" value={result} rows="3" readOnly></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
