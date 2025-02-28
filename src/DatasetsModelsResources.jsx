import React from 'react';

const DatasetsModelsResources = () => {
  return (
    <div className="datasets-models-resources">
      <h1>Datasets and Models</h1>
      <h2>Datasets</h2>
      <ul>
        <li>
          <a href="https://huggingface.co/datasets/pile-of-law/pile-of-law" target="_blank" rel="noopener noreferrer">
            Pile of Law
          </a>
        </li>
        <li>
          <a href="https://huggingface.co/pile-of-law/legalbert-large-1.7M-2" target="_blank" rel="noopener noreferrer">
            LegalBERT Large
          </a>
        </li>
        <li>
          <a href="https://huggingface.co/datasets/lawinstruct/lawinstruct" target="_blank" rel="noopener noreferrer">
            LawInstruct
          </a>
        </li>
        <li>
          <a href="https://huggingface.co/reglab-rrc/mistral-rrc" target="_blank" rel="noopener noreferrer">
            Mistral RRC
          </a>
        </li>
      </ul>

      <h2>Resources</h2>
      <ul>
        <li>
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
            Code
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DatasetsModelsResources; 