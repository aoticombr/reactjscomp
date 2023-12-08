import React from 'react';


import Form from 'react-bootstrap/Form';

export const AOTIDateTime = (props:any) => {
  const dta_proposta = props.value ? props.value : null;
  
  const formattedValue = dta_proposta? dta_proposta?.toString()?.slice(0, 16) // Formato padrão do ISO: "2023-10-02T03:00:00.000Z"
    : '';

  const handleInputChange = (event:any) => {
    const inputValue = event.target.value;
    // Se o valor não for vazio, você pode assumir que ele está no formato "yyyy-MM-ddThh:mm"
    // Adicione ":00.000Z" para corresponder ao formato "2023-10-02T03:00:00.000Z"
    const formattedInputValue = inputValue ? `${inputValue}:00.000Z` : '';
    // Chame a função de callback onChange com o valor formatado
    props.onChange({
      target: {
        value: formattedInputValue,
      },
    });
  };

  return (
  <div>
<Form.Control
      type="datetime-local"
      disabled={props.disabled}
      placeholder={props.placeholder }
      value={formattedValue}
      onChange={handleInputChange}
    />
  </div>) 
  ;
};
