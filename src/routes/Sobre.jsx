import React from "react";
import '../routes/css/Sobre.css'
import { Routes, Link } from 'react-router-dom'

const Sobre = () => {

    return (

        <>

            <main className="main-sobre">

                <header className='header-container-sobre'>

                    <img className='img-logo' src="../logo.svg" />

                    <div className="nav-items">

                        <a href="/">Home</a>
                        <hr />
                        <a href="/download">Download</a>
                        <hr />
                        <a href="/faq">FAQ</a>
                        <hr />
                        <a href="/comunidade">Comunidade</a>
                        <hr />
                        <a href="/sobre">Sobre nós</a>
                        <hr />
                        <a href="/desenvolvedores">Desenvolvedores</a>

                    </div>

                    <div className="side-right">

                        <a href="/login"><button type="button" className='btn-logar'>Login</button></a>

                        <img className='icon-perfil' src="../icon-user-preto.svg" />

                    </div>

                </header>

                <section className="content">

                    <h1>Conheça a LangSpace</h1>

                    <p>A LangSpace é um projeto que busca revolucionar o mercado de ensino e prática de idiomas, trazendo uma plataforma onde leva seus usuários ao mundo, conhecendo novas culturas enquanto pratica um novo idioma.</p><br />
                    <p>Utilizando a Realidade Virtual em um ambiente totalmente imersivo e divertido, a LangSpace irá levá-lo para qualquer lugar do mundo, podendo conhecer a cultura, idioma ou simplesmente caminhar pela rua e conhecer o lugar, tudo isso sem sair de casa.</p>
                    <p>Mas para você que quer aprender ou práticar um novo idioma, como funciona? Uma vez que escolher o idioma e o lugar que deseja conhecer, você será "teletransportado" para lá, a partir daí, tudo será baseado em estilo de jogo, completando missões propostas por nós como "Tire o seu passaporte" ou então "Simulação de entrevista de emprego", ou até coisas mais cotidianas como pedir uma informação e interagir com as pessoas ao seu redor.</p>


                </section>

                <a href="/desenvolvedores"><button className="btn-desenvolvedores">Conheça nossos desenvolvedores</button></a>

                <img className="img-sobre" src="../ilustracao-sobre.png" alt="" />

                <footer>

                    <div className="div-footer">

                        <img className='logo-footer' src="../logo-footer.svg" />

                        <div className="nav-list-footer">

                            <a href="/">Home</a>
                            <a href="/download">Download</a>
                            <a href="/faq">FAQ</a>
                            <a href="/comunidade">Comunidade</a>
                            <a href="/sobre">Sobre nós</a>
                            <a href="/desenvolvedores">Desenvolvedores</a>

                        </div>

                    </div>


                    <div className="contatos">

                        <div className="telefone">

                            <img src="../icon-telefone.svg" alt="" />

                            <div className="info-telefone">

                                <h4>Contato</h4>
                                <h3>+55 (11) 99999-9999</h3>

                            </div>

                        </div>

                        <div className="email">

                            <img src="../icon-email.svg" alt="" />

                            <div className="info-telefone">

                                <h4>Email</h4>
                                <h3>langspace@gmail.com</h3>

                            </div>

                        </div>

                        <div className="endereco">

                            <img src="../icon-endereco.svg" alt="" />

                            <div className="info-endereco">

                                <h4>Endereço</h4>
                                <h3>Rua Tito, 123</h3>

                            </div>

                        </div>

                    </div>

                    <div className="rede-social">

                        <img src="../icon-facebook.svg" alt="" />
                        <img src="../icon-linkedin.svg" alt="" />
                        <img src="../icon-github.svg" alt="" />

                    </div>

                </footer>

            </main>

        </>

    )

}

export default Sobre