import React from "react";
import './css/Desenvolvedores.css'
import { Routes, Link } from 'react-router-dom'

const Desenvolvedores = () => {

    return (

        <>

            <header className='header-container-desenvolvedores'>

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

                    <img className='icon-perfil' src="../icon-user.svg" />

                </div>

            </header>

            <main className="main-desenvolvedores">

                <h1 id="titulo">Colaboradores da <br /> LangSpace</h1>

                <section class="dev">

                    <div class="container">

                        <div class="flip">

                            <div class="Guilherme"></div>

                            <div class="tras">

                                <h1>Guilherme Freitas <br />

                                    <span>PO, Designer e Front-end</span><br />
                                    <a target="_blank" href="https://github.com/Guii-Freitas">Acessar GitHub</a><br />
                                    <a target="_blank" href="https://www.linkedin.com/in/guilherme-freitas01/">Acessar Linkedin</a>

                                </h1>

                            </div>

                        </div>

                    </div>

                    <div class="container">
                        <div class="flip">
                            <div class="Jessica"></div>
                            <div class="tras">
                                <h1>Jessica Quenallata <br />
                                    <span>Scrum Master e Banco de dados</span>
                                    <br />
                                    <a target="_blank" href="https://github.com/jessicacuela">Acessar GitHub</a><br />
                                    <a target="_blank" href="https://www.linkedin.com/in/jessica-thais-quenallata-cuela-5a9917207/">Acessar Linkedin</a>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="flip">
                            <div class="Gabriel"></div>
                            <div class="tras">
                                <h1>Gabriel Alexsander<br />
                                    <span>Financeiro, Banco de dados e Front-end</span><br />
                                    <a target="_blank" href="https://github.com/Hichiban">Acessar GitHub</a><br />
                                    <a target="_blank" href="https://www.linkedin.com/in/gabrielalexsander/">Acessar Linkedin</a>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="flip">
                            <div class="Tayna"></div>
                            <div class="tras">
                                <h1>Tayna Simões<br />
                                    <span>Front e Back-end</span><br />
                                    <a target="_blank" href="https://github.com/Tayna0202">Acessar GitHub</a><br />
                                    <a target="_blank" href="https://www.linkedin.com/in/taynasimoes/">Acessar Linkedin</a>
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="dev2">
                    <div class="container">
                        <div class="flip">
                            <div class="Victor"></div>
                            <div class="tras">
                                <h1>Victor Oki<br />
                                    <span>Desenvolvedor do jogo e Back-end</span><br />
                                    <a target="_blank" href="https://github.com/YukiOki327">Acessar GitHub</a><br />
                                    <a target="_blank" href="https://www.linkedin.com/in/victor-oki-37b234269/">Acessar Linkedin</a>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="flip">
                            <div class="Darwin"></div>
                            <div class="tras">
                                <h1>Darwin Jarandilla<br />
                                    <span>Back-end</span><br />
                                    <a target="_blank" href="https://github.com/Darwinjr19">Acessar GitHub</a><br />
                                    <a target="_blank" href="https://www.linkedin.com/in/darwin-giovani-25a0a8226/">Acessar Linkedin</a>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="flip">
                            <div class="Daniel"></div>
                            <div class="tras">
                                <h1>Daniel Rabello<br />
                                    <span>Back-end</span><br />
                                    <a target="_blank" href="https://github.com/Daniel-Rabello">Acessar GitHub</a><br />
                                    <a target="_blank" href="https://www.linkedin.com/in/daniel-rabello/">Acessar Linkedin</a>
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

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

        </>

    )

}

export default Desenvolvedores