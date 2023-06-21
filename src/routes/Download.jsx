import React from "react";
import '../routes/css/Download.css'
import { Routes, Link } from 'react-router-dom'
import '../routes/js/ScriptDownload.js'

const Download = () => {

    return (

        <>

            <header className='header-container-download'>

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

            <section className="section-video" >

                <video className="video" src="../video.mp4" autoplay loop muted>
                </video>

                <h1 id="titulo">JOGAR LANG SPACE</h1>

                <div className="download">

                    <p>DOWNLOAD</p>
                    <h6>Escolha a plataforma abaixo</h6>

                </div>

                <div id="store">

                    <a href="#">

                        <img src="../Market1.svg" alt="button download 
                        Windows"/>

                    </a>

                    <a href="#">

                        <img src="../Market2.svg" alt="button download Play Store" />

                    </a>

                </div>

            </section>

            <main className="main-download">

                <section className="comobaixar">

                    <h2>COMO BAIXAR PASSO A PASSO</h2>

                    <p><span>1. </span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <p><span>2. </span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <p><span>3. </span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <p><span>4. </span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                </section>

                <div id="indicacao"><img src="../12.svg" alt="icone de indicação de idade minima" /></div>

            </main>

            <footer>

                <div className="div-footer-download">

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

export default Download