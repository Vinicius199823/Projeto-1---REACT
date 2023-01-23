import React from "react";
import Main from "../template/main";
import Footer from "../template/footer";

export default props =>
    <Main icon="home" title="Início" subtitle="Segundo Projeto de REACT">
        <div className='display-4'>Bem Vindo!</div>
        <hr />
        <p className='mb-0'> Sistema para exemplificar a construção de um cadastro desenvolvido em REACT</p>
    </Main>