import React from 'react';


interface HeaderProps {             //forma de definir a tipagem de um objeto
    title?: string;                 //interrogação se não for obrigatório
} 

const Header: React.FC<HeaderProps> = (props) => {    //diz que o componente está escrito em formato de função
    return (
        <h1>{ props.title }</h1>
    );
}

export default Header;