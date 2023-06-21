import React from "react";
import '../routes/css/Home.css'
import { Routes, Link } from 'react-router-dom'

const Home = () => {

    return (

        <>

            <main id="main-home">

                <header className='header-container-home'>

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

                <section className="main-content">


                    <div className="titulo-text">

                        <h1>Aprender um novo idioma nunca foi tão interativo</h1>

                    </div>

                    <img className="imagem-principal" src="../imagem-principal.svg" alt="" />

                    <button className="saiba-mais">Saiba mais</button>

                </section>

                <section className="topicos">

                    <h3>Venha conhecer algumas das nossas comunidades!</h3>

                    <div className="img">

                        <img className="direita-baixo" src="../topicos-direita-baixo.png" alt="" />
                        <img className="esquerda-cima" src="../topicos-esquerda-cima.png" alt="" />
                        <img className="planeta-01" src="../topicos-planeta.png" alt="" />
                        <img className="planeta-02" src="../topicos-planeta.png" alt="" />
                        <img className="planeta-03" src="../topicos-planeta.png" alt="" />
                        <img className="planeta-04" src="../topicos-planeta.png" alt="" />
                        <img className="planeta-05" src="../topicos-planeta.png" alt="" />
                        <img className="planeta-06" src="../topicos-planeta.png" alt="" />
                        <img className="enfeite" src="../enfeite.png" alt="" />

                    </div>

                </section>

                <section className="info">

                    <div className="info-esquerda">

                        <div className="info-content-esquerda">

                            <img className="astronauta-esquerda" src="../astronauta-esquerda.svg" alt="" />

                            <div className="info-txt">

                                <h3>Conheça o futuro diante dos seus olhos.</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aspernatur perferendis facere impedit nesciunt inventore consequuntur veritatis delectus quia sed.
                                </p>

                                <div className="info-icones">

                                    <div className="info-01">

                                        <img src="../icon-community.svg" alt="" />
                                        <h6>Comunidade LangSpace</h6>

                                    </div>

                                    <div className="info-02">

                                        <img src="../langspace-lolgo.svg" alt="" />

                                    </div>

                                    <div className="info-03">

                                        <img src="../icon-download.svg" alt="" />
                                        <h6>Baixar</h6>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="info-direita">

                        <div className="info-content-direita">


                            <div className="info-txt">

                                <h3>Dúvidas frequentes</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aspernatur perferendis facere impedit nesciunt inventore consequuntur veritatis delectus quia sed.
                                </p>

                            </div>

                            <img className="astronauta-direita" src="../astronauta-direita.svg" alt="" />

                        </div>


                    </div>

                </section>

                <section className="review">

                    <div className="review-content">

                        <h2>Reviews de usuários</h2>

                        <div className="reviews-usu">

                            <div className="usuario-01">

                                <img className="icon-usuario" src="../icon-user-preto.svg" alt="" />
                                <img className="avaliacao" src="../avaliação.svg" alt="" />

                                <div className="review-txt">

                                    <h5 className="nome">Guilherme Freitas</h5>
                                    <p>Plataforma maravilhosa, aprendi muito! Recomendo para todos que querem aprender um novo idioma.</p>

                                </div>

                            </div>

                            <div className="usuario-01">

                                <img className="icon-usuario" src="../icon-user-preto.svg" alt="" />
                                <img className="avaliacao" src="../avaliação.svg" alt="" />

                                <div className="review-txt">

                                    <h5 className="nome">Daniel Rabello</h5>
                                    <p>Muita interatividade e diversão enquanto aprendo um novo idioma, adorei!!</p>

                                </div>

                            </div>

                        </div>

                        <img className="seta-slider" src="../seta-slider-home.svg" alt="" />

                    </div>

                    <div className="review-img">

                        <img className="sol" src="../sol.svg" alt="" />
                        <img className="retangulo-azul" src="../retangulo-azul.svg" alt="" />
                        <img className="anel-azul" src="../anel-azul.svg" alt="" />

                    </div>

                    <img className="img-review" src="../img-review.svg" alt="" />

                </section>

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

export default Home