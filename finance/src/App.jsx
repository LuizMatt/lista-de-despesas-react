import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import FormDespesa from "./components/FormDespesa";

function App() {
  const [viewForm, setViewForm] = useState(false);
  const showFormDespesa = () => {
    setViewForm((prev) => !prev);
  };
  const [list, setList] = useState([]);

  const addDespesa = (novaDespesa) => {
    setList((prevList) => [
      ...prevList,
      {
        id: prevList.length + 1,
        name: novaDespesa.name,
        vencimento: novaDespesa.vencimento,
        valor: novaDespesa.valor,
      },
    ]);
  };

  return (
    <div className="app-container">
      <Button
        onClick={showFormDespesa}
        text={viewForm ? "Voltar" : "Nova despesa"}
        className="toggle-button"
      />

      {viewForm && (
        <FormDespesa addDespesa={addDespesa} className="form-container" />
      )}

      <ul className="despesa-list">
        {list.map((item) => (
          <li key={item.id} className="despesa-item">
            <p className="despesa-nome">
              <strong>Nome:</strong> {item.name}
            </p>
            <p className="despesa-vencimento">
              <strong>Vencimento:</strong> {item.vencimento}
            </p>
            <p className="despesa-valor">
              <strong>Valor:</strong> R$ {item.valor.toFixed(2)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
