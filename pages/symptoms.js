
import { useState } from 'react';

export default function Symptoms() {
  const [symptom, setSymptom] = useState('');
  const [reply, setReply] = useState('');

  function handleCheck() {
    setReply(`Based on "${symptom}", you may be experiencing a mild issue. Please monitor your symptoms and rest. 🧘‍♂️`);
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🩺 Symptom Checker</h1>
      <p>Enter your symptom below:</p>
      <input
        type="text"
        value={symptom}
        onChange={(e) => setSymptom(e.target.value)}
        style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
        placeholder="e.g., sore throat, chest pain"
      />
      <button onClick={handleCheck} style={{ padding: '0.5rem 1rem' }}>
        Check
      </button>
      {reply && (
        <div style={{ marginTop: '1.5rem', background: '#eef', padding: '1rem' }}>
          <strong>AI says:</strong> <p>{reply}</p>
        </div>
      )}
    </div>
  );
}
