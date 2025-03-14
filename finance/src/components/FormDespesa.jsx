import React from "react";
import { useState } from "react";
import "./FormDespesa.css";

const FormDespesa = ({ addDespesa }) => {
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

  return (
    <div className="form-despesas-container">
      <form onSubmit={handleSubmit} className="form-despesas">
        <label htmlFor="despesa">Despesa:</label>
        <input
          type="text"
          id="despesa"
          className="input-despesa"
          placeholder="Digite o nome da despesa"
          value={despesa}
          onChange={(e) => setDespesa(e.target.value)}
        />
        <label htmlFor="vencimento">Data de vencimento:</label>
        <input
          type="date"
          id="vencimento"
          className="input-vencimento"
          value={vencimento}
          onChange={(e) => setVencimento(e.target.value)}
        />
        <label htmlFor="valor">Valor:</label>
        <input
          type="number"
          id="valor"
          className="input-valor"
          placeholder="Ex.: 78,50"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <button type="submit" className="btn-adicionar">
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default FormDespesa;
