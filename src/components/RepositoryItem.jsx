import React from 'react';

// import { Container } from './styles';

function RepositoryItem(props) {
    return (
        <li>
            {/* ele pega o props passado no List e exibe {props.repository} e se não existir pode fazer if {props.repository ?? 'Default'} */}
            <strong>{props.repository?.name}</strong>
            <p>{props.repository.description}</p>

            <a href={props.repository.html_url}>
                Acessar Repositório
            </a>
        </li>
    );
}

export default RepositoryItem;