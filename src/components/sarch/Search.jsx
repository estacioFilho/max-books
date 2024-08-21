import { useState } from 'react'
import styled from 'styled-components'
import { booksList } from './data';

const SearchContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 8em 0 0 0;
`;

const Title = styled.h2`
    font-size: 4em;
    font-weight: 700;
    color: #fff;
    margin: 1em 0 0em 0;
`;

const Headline = styled.h3`
    font-size: 2em;
    color: #fff;
    margin: 1.5em 0;
`;

const InputSearch = styled.input`
    background-color: transparent;
    padding: 2em 1em;
    width: 20%;
    font-size: 1.5em;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 3em;
    &::placeholder {
        text-align: center;
        color: #fff;
        font-size: 1.5em;
        font-weigth: 500;
    }
`;
const ValueFound = styled.div`
    margin-top: 2em;
    font-size: 2em;
    font-weigth: 700;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    border-radius: 20px;
    // background-color: #fff;
    width: 40%;
    height: 40vh;
    overflow-y: scroll;
    flex-wrap: wrap;
    color: #fff;

`

function Search() {
    const [searchValue, setSearchValue] = useState([]);

    console.log(searchValue);

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <Headline>Encontre seu livro na nossa estante.</Headline>
            <InputSearch type="text" placeholder='Pesquise sua próxima leitura' onKeyUp={event => {
                const textSearch = event.target.value;
                const searchResult = booksList.filter(book => book.name.includes(textSearch))
                setSearchValue(searchResult);
            }} />
            <ValueFound>
                {searchValue.length > 0 ? (
                    searchValue.map((book) => (
                        <div key={book.id}>
                            <p>{book.name}</p>
                            <img src={book.src} alt="" />
                        </div>
                    ))
                ) : (
                    <p>Nenhum resultado encontrado</p>
                )}
            </ValueFound>

        </SearchContainer>
    )
}

export default Search