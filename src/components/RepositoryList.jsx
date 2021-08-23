import React, { useEffect, useState } from 'react';
import RepositoryItem from './RepositoryItem';
const repositoryName = 'unform';

import '../styles/repositories.scss';

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/juan-20'
}

function RepositoryList() {

    const [repositories, setRepositories] = useState([]);

    // ele recebe 2 parametros 1 qual função quer executar e o segundo quando quer executar
    useEffect(() => {
        fetch('https://api.github.com/users/juan-20/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [repositories])

    return (
        <section className='repository-list'>
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={repository}

                // repository='unamed'
                // description='Forms in react'
                // link='https://github.com/juan-20'
                // Pode se passar o valor assim por cada um ou criando um objeto
                />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>

        </section>
    );
}

export default RepositoryList;