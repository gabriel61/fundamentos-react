import React from "react";
import "./App.css";

import Primeiro from "./componentes/basicos/Primeiro";
import ComParametro from "./componentes/basicos/ComParametro";
import ComFilhos from "./componentes/basicos/ComFilhos";
//import ComFilhos from './componentes/layout/Card'
import Card from "./componentes/layout/Card";
import Repeticao from "./componentes/basicos/Repeticao";
import Condicional from "./componentes/basicos/Condicional";
import Pai from "./componentes/comunicacao/direta/Pai";
import Super from "./componentes/comunicacao/indireta/Super";
import Input from "./componentes/form/Input";
import Contador from "./componentes/contador/Contador";
import Mega from "./componentes/mega/Mega";

export default (props) => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">

      <Card titulo="#11 - MegaSena" color="#73503C">
        <Mega qtddNumero={8}></Mega>
      </Card>

      <Card titulo="#10 - Contador" color="#293E6A">
        <Contador passo={10} valor={100}></Contador>
      </Card>

      <Card titulo="#09 - Input" color="#9C0F5F">
        <Input></Input>
      </Card>

      <Card titulo="#08 - Comunicação Indireta" color="#000">
        <Super></Super>
      </Card>

      <Card titulo="#07 - Comunicação Direta" color="#4298B5">
        <Pai sobrenome="Bond"></Pai>
      </Card>

      <Card titulo="#05 - Condicional" color="#FA6900">
        <Condicional numero={11} />
      </Card>

      <Card titulo="#04 - Repetição" color="#008BBA">
        <Repeticao />
      </Card>

      <Card titulo="#03 - Componente Com Filhos" color="#D96459">
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Messi</li>
          </ul>
        </ComFilhos>
      </Card>

      <Card titulo="#02 - Componente Com Parametro" color="#FF85CB">
        <ComParametro titulo="Esse é o titulo" subtitulo="Esse é o subtitulo" />
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#92B06A">
        <Primeiro />
      </Card>
    </div>
  </div>
);
