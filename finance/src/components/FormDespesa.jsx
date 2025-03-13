import React from "react";
import { useState } from "react";
import Button from "./Button";
const FormDespesa = ({ addDespesa }) => {
  {
    /* Colocar aqui os use state que vão manipular a lista de despesas*/
  }
  const [despesa, setDespesa] = useState("");
  const [vencimento, setVencimento] = useState("");
  const [valor, setValor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!despesa || !vencimento || !valor) {
      alert("Preencha todos os campos!");
      return;
    }

    addDespesa({
      name: despesa,
      vencimento: vencimento,
      valor: parseFloat(valor),
    });

    setDespesa("");
    setVencimento("");
    setValor("");
  };

  const setDespesaHandler = (e) => {
    setDespesa(e.target.value);
  };

  const setVencimentoHandler = (e) => {
    setVencimento(e.target.value);
  };

  const setValorHandler = (e) => {
    setValor(e.target.value);
  };
  return (
    <div className="formDespesas">
      <form onSubmit={handleSubmit}>
        <label htmlFor="despesa">Despesa: </label>
        <input
          type="text"
          id="despesa"
          placeholder="Digite o nome da despesa"
          value={despesa}
          onChange={setDespesaHandler}
        />
        <label htmlFor="vencimento">Data de vencimento</label>
        <input
          type="date"
          id="vencimento"
          value={vencimento}
          onChange={setVencimentoHandler}
        />
        <label htmlFor="valor">Valor</label>
        <input
          type="number"
          id="valor"
          placeholder="Ex.: 78,50"
          value={valor}
          onChange={setValorHandler}
        />
        <button type="submit">Adicionar</button>{" "}
      </form>
    </div>
  );
};

export default FormDespesa;
