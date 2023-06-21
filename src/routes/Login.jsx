import React from "react";
import '../routes/css/Login.css'
import { Routes, Link } from 'react-router-dom'

const Login = () => {

    return (

        <>

            <main className="main-login">

                <section className="login">

                    <form method="POST" className="form-Login">

                        <h1>LangSpace</h1>
                        <label className="label-login" for="username">Usuário</label>
                        <input className="input-login" type="username" placeholder="Usuario@gmail.com" autofocus="true" />

                        <label className="label-login" for="password">Senha</label>
                        <input className="input-login" type="password" placeholder="***********" />

                        <button className="btn-login">Logar</button>

                        <div className="links-login">

                            <h5 href="#">Não possui uma conta? <a href="/registro"><span>Registre-se</span></a></h5>

                        </div>

                        <div className="pai">

                            <div className="txtlinha">

                                <h5>ou continuar com</h5>
                                <hr />

                            </div>

                        </div>

                        <div className="icones">

                            <img src="../public/Google.png" alt="" />
                            <img src="../public/Facebook F.png" alt="" />
                            <img src="../public/Apple Logo.png" alt="" />

                        </div>

                    </form>

                    <div className="vetores">

                        <img className="direitaembaixo" src="../public/direita_embaixo.png" />
                        <img className="esquerda_embaixo" src="../public/esquerda_embaixo.png" />
                        <img className="direita_emcima" src="../public/direita_emcima.png" />
                        <img className="esquerda_emcima" src="../public/esquerda_emcima.png" />

                    </div>

                </section>

            </main>

        </>

    )

}

export default Login