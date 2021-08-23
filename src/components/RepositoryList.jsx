import React from 'react';
import RepositoryItem from './RepositoryItem';

// import { Container } from './styles';

const repositoryName = 'unform';

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/juan-20'
}

function RepositoryList() {
    return (
        <section>
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