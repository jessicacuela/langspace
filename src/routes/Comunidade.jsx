import React from "react";
import '../routes/css/Comunidade.css'
import { Routes, Link } from 'react-router-dom'
import CompComunidade from "../components/CompComunidade";

function Comunidade() {

    return (

        <>

            <main>

                <header className='header-container-comunidade'>

                    <img className='img-logo' src="../logo.svg" />

                    <div className="nav-items">

                        <a href="/">Home</a>
                        <hr />
                        <a href="/download">Download</a>
                        <hr />
                        <a href="/faq">Dúvidas</a>
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

                <div className="container-filtro">

                    <div className="inicio">

                        <h1>Comunidades</h1>

                        <div className="caixa-1">

                            <button type='button' className='filtrar-comunidades' value="toggle" onClick='toggleP()'>Filtrar</button>

                            <input className='buscar' type="search" placeholder='Buscar por comunidades' />

                        </div>

                    </div>

                    <div id="filtro">

                        <div className="filtro-1">

                            <h3>Filtrar por idioma</h3>

                            <div class="form-check">

                                <div className='item'>

                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">Inglês</label>

                                </div>

                                <br />

                                <div className='item'>

                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">Inglês</label>

                                </div>

                                <br />

                                <div className='item'>

                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">Inglês</label>

                                </div>

                                <br />

                                <div className='item'>

                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">Inglês</label>

                                </div>

                                <br />

                                <div className='item'>

                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">Inglês</label>

                                </div>

                            </div>

                        </div>

                        <div className="filtro-1">

                            <h3>Filtrar por idioma</h3>

                            <div class="form-check">

                                <div className='item'>

                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">Inglês</label>

                                </div>

                                <br />

                                <div className='item'>

                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">Inglês</label>

                                </div>

                                <br />

                                <div className='item'>

                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">Inglês</label>

                                </div>

                                <br />

                                <div className='item'>

                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">Inglês</label>

                                </div>

                                <br />

                                <div className='item'>

                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">Inglês</label>

                                </div>

                            </div>

                        </div>

                        <div className="filtro-1">

                            <h3>Filtrar por idioma</h3>

                            <div class="form-check">

                                <div className='item'>

                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">Inglês</label>

                                </div>

                                <br />

                                <div className='item'>

                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">Inglês</label>

                                </div>

                                <br />

                                <div className='item'>

                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">Inglês</label>

                                </div>

                                <br />

                                <div className='item'>

                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">Inglês</label>

                                </div>

                                <br />

                                <div className='item'>

                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">Inglês</label>

                                </div>

                            </div>

                        </div>

                        <div className="filtro-1">

                            <h3>Filtrar por idioma</h3>

                            <div class="form-check">

                                <div className='item'>

                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">Inglês</label>

                                </div>

                                <br />

                                <div className='item'>

                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">Inglês</label>

                                </div>

                                <br />

                                <div className='item'>

                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">Inglês</label>

                                </div>

                                <br />

                                <div className='item'>

                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">Inglês</label>

                                </div>

                                <br />

                                <div className='item'>

                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">Inglês</label>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <article className='article-comunidade'>

                    <div className="linha">

                        <h2>Comunidades de idiomas</h2>

                        <div className="cards-comunidade">

                            <CompComunidade />
                            <CompComunidade />
                            <CompComunidade />
                            <CompComunidade />
                            <CompComunidade />

                            <img className='seta-slides' src="../seta-slides.svg" />

                        </div>

                    </div>

                    <div className="linha">

                        <h2>Conhecer culturas em tempo real</h2>

                        <div className="cards-comunidade">

                            <CompComunidade />
                            <CompComunidade />
                            <CompComunidade />
                            <CompComunidade />
                            <CompComunidade />

                            <img className='seta-slides' src="../seta-slides.svg" />

                        </div>

                    </div>

                    <div className="linha">

                        <h2>Práticar com outros alunos</h2>

                        <div className="cards-comunidade">

                            <CompComunidade />
                            <CompComunidade />
                            <CompComunidade />
                            <CompComunidade />
                            <CompComunidade />

                            <img className='seta-slides' src="../seta-slides.svg" />

                        </div>

                    </div>

                    <div className="linha">

                        <h2>Plantão de dúvidas</h2>

                        <div className="cards-comunidade">

                            <CompComunidade />
                            <CompComunidade />
                            <CompComunidade />
                            <CompComunidade />
                            <CompComunidade />

                            <img className='seta-slides' src="../seta-slides.svg" />

                        </div>

                    </div>

                    <div className="linha">

                        <h2>Missões de eventos</h2>

                        <div className="cards-comunidade">

                            <CompComunidade />
                            <CompComunidade />
                            <CompComunidade />
                            <CompComunidade />
                            <CompComunidade />

                            <img className='seta-slides' src="../seta-slides.svg" />

                        </div>

                    </div>

                </article>

                <article id='footer-area'>

                    <img className='img-footer' src="../img-footer.svg" />

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

export default Comunidade