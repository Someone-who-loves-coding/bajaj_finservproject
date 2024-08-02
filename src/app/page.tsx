"use client";

import React, { useState } from 'react';
import axios from 'axios';
import TextInput from '../../components/TextInput';
import FilteredResponse from '../../components/FilteredResponse';
import Head from 'next/head';
import '../../styles/globals.css'; // Import the global stylesheet

const Home: React.FC = () => {
  const [jsonInput, setJsonInput] = useState<any>(null);
  const [validJson, setValidJson] = useState(false); // Default to false; input is mandatory
  const [response, setResponse] = useState<any>(null);

  const handleSubmit = async () => {
    if (validJson) {
      try {
        const url = 'https://prakhar3395.pythonanywhere.com/bfhl/'; // Replace with your API URL
        const config = {
          headers: { 'Content-Type': 'application/json' }
        };

        let result;

        if (jsonInput) {
          result = await axios.post(url, jsonInput, config);
        }

        setResponse(result?.data || null);
      } catch (error) {
        console.error('Error fetching data:', error);
        setResponse(null); // Reset response on error
      }
    } else {
      alert('Invalid or missing JSON input');
    }
  };

  return (
    <div className="container">
      <Head>
        <title>RA2111030030005</title>
      </Head>
      <TextInput 
        setJsonInput={setJsonInput} 
        setValidJson={setValidJson} 
      />
      <button onClick={handleSubmit}>Submit</button>
      {response && (
        <FilteredResponse response={response} />
      )}
    </div>
  );
};

export default Home;
