import React from 'react';

interface MultiSelectProps {
  options: string[];
  selectedOptions: string[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, selectedOptions, setSelectedOptions }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedOptions((prev: string[]) =>
      checked ? [...prev, value] : prev.filter((opt) => opt !== value)
    );
  };

  return (
    <div>
      {options.map((option) => (
        <div key={option}>
          <input
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={handleChange}
          />
          {option}
        </div>
      ))}
    </div>
  );
};

export default MultiSelect;
