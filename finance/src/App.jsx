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
    <>
      <div>
        <Button
          onClick={showFormDespesa}
          text={viewForm == true ? "Voltar" : "Nova despesa"}
        />

        {viewForm && <FormDespesa addDespesa={addDespesa} />}
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              <p>
                <strong>Nome:</strong> {item.name}
              </p>
              <p>
                <strong>Vencimento:</strong> {item.vencimento}
              </p>
              <p>
                <strong>Valor:</strong> R$ {item.valor.toFixed(2)}
              </p>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
