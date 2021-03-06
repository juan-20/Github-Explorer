import React, { useEffect, useState } from 'react';
import RepositoryItem from './RepositoryItem';
const repositoryName = 'unform';

import '../styles/repositories.scss';

interface Repository {
    name: string,
    // tem de declarar essas pq tá passando pela props
    description: string,
    html_url: string
}

function RepositoryList() {

    const [repositories, setRepositories] = useState<Repository[]>([]);

    // ele recebe 2 parametros 1 qual função quer executar e o segundo quando quer executar e retorna pra dentro do setrepositories
    useEffect(() => {
        fetch('https://api.github.com/users/juan-20/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [repositories])

    return (
        <section className='repository-list'>
            <h1>Lista de repositórios</h1>

            <ul>
                {/* a cada map que tiver algo ele retorna o elemento item */}
                {repositories.map(repository => (
                    <RepositoryItem
                        key={repository.name}
                        repository={repository}
                    />
                ))}
            </ul>

        </section>
    );
}

export default RepositoryList;