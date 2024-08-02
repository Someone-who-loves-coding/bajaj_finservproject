import React, { useState } from 'react';
import Select from 'react-select';
import '../styles/globals.css'; // Ensure this imports the CSS for styling

interface FilteredResponseProps {
  response: any;
}

const options = [
  { value: 'Numbers', label: 'Numbers' },
  { value: 'Highest Alphabet', label: 'Highest Alphabet' },
  { value: 'Alphabet', label: 'Alphabet' },
];

const FilteredResponse: React.FC<FilteredResponseProps> = ({ response }) => {
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);

  const handleChange = (selected: any) => {
    setSelectedOptions(selected || []);
  };

  const getFilteredResponse = () => {
    if (!response) return {};

    const result: { [key: string]: any } = {};
    selectedOptions.forEach(option => {
      switch (option.value) {
        case 'Numbers':
          result['Numbers'] = response.numbers.join(',');
          break;
        case 'Highest Alphabet':
          result['Highest Alphabet'] = response.highestAlphabet;
          break;
        case 'Alphabet':
          result['Alphabet'] = response.alphabet.join(','); // Assuming response.alphabet is an array
          break;
        default:
          break;
      }
    });
    return result;
  };

  const filteredResponse = getFilteredResponse();

  return (
    <div className="multi-filter-container">
      <div>Multi Filter</div>
      <div className="react-select-container">
        <Select
          options={options}
          isMulti
          onChange={handleChange}
          styles={{
            container: (provided) => ({
              ...provided,
              width: '100%',
            }),
            singleValue: (provided) => ({
              ...provided,
              color: 'black',
            }),
            menu: (provided) => ({
              ...provided,
              color: 'black',
            }),
          }}
        />
      </div>
      {Object.keys(filteredResponse).map(key => (
        <div key={key}>
          <strong>{key}:</strong> {filteredResponse[key]}
        </div>
      ))}
    </div>
  );
};

export default FilteredResponse;
