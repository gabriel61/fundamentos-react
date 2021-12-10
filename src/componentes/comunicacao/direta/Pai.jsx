import React from "react";
import Filho from './Filho'

export default props =>
    <div>
    <Filho {...props}><strong>James</strong></Filho>
    <Filho sobrenome={props.sobrenome}>Maria</Filho>
    <Filho sobrenome="Silva">Pedro</Filho>
    </div>