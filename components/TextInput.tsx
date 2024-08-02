import React, { useState } from 'react';
import '../styles/globals.css'; // Ensure this imports the CSS for the transition

interface TextInputProps {
  setJsonInput: (input: any) => void;
  setValidJson: (isValid: boolean) => void;
}

const TextInput: React.FC<TextInputProps> = ({ setJsonInput, setValidJson }) => {
  const [input, setInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleBlur = () => {
    try {
      const parsedJson = JSON.parse(input);
      setJsonInput(parsedJson);
      setValidJson(true);
    } catch (error) {
      setValidJson(false);
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder=" " // Placeholder needs to be a space for the transition effect
      />
      <label>API Input</label>
    </div>
  );
};

export default TextInput;
