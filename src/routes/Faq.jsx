import React from "react";
import '../routes/css/Faq.css'
import { Routes, Link } from 'react-router-dom'

const Faq = () => {

    return (

        <>

            <main className="main">

                <header className='header-container-faq'>

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

                <section id='perguntas'>

                    <li>Dúvidas Frequentes</li>

                    <div className="roleta">

                        <img src="../planetas.png" />

                    </div>

                </section>

                <article id='respostas'>

                    <div className="titulo-pergunta">

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, asperiores?</p>

                    </div>

                    <div className="resposta-pergunta">

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt vero totam eaque, deleniti et debitis voluptate non. Laudantium, ullam debitis. Atque obcaecati alias dolore quod. Odit commodi quo laborum, voluptas voluptatibus ducimus eveniet temporibus delectus, natus nesciunt expedita laudantium!</p>

                    </div>

                </article>

                <article id="email">

                    <div className="caixa-1">

                        <div className="titulo">

                            <h2>Seu problema ainda não foi resolvido?</h2>

                        </div>

                        <div className="campo-1">

                            <label className='txt-nome'>Nome</label>
                            <textarea className='caixa-nome' placeholder="Insira seu nome"></textarea>

                        </div>

                        <div className="campo-2">

                            <label className='txt-email'>Email</label>
                            <textarea className='caixa-email' placeholder="Insira seu email"></textarea>

                        </div>

                        <div className="campo-3">

                            <label className='txt-duvida'>Em que podemos ajudar?</label>
                            <textarea className='caixa-duvida' placeholder="Descreva sua dúvida"></textarea>

                        </div>

                    </div>

                    <img className="img-email" src="../img-email.svg" />


                </article>

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

export default Faq