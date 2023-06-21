import React from "react";
import  '../routes/css/Registro.css'
import { Routes, Link } from 'react-router-dom'

const Registro = () => {

    return (

        <>

                <form className="formLogin">

                    <h1>LangSpace</h1>
                    <label className="label-registro" for="username">Email</label>
                    <input className="input-registro" type="username" placeholder="Usuario@gmail.com" autofocus="true" />

                    <label className="label-registro" for="password">Usuário</label>
                    <input className="input-registro" type="password" placeholder="Nome de usuário" />

                    <label className="label-registro" for="password">Senha</label>
                    <input className="input-registro" type="password" placeholder="***********" />

                    <label className="label-registro" for="password">Confirmar senha</label>
                    <input className="input-registro" type="password" placeholder="***********" />

                    <button className="btn">Registrar</button>

                    <div className="links-registro">

                        <h5 href="#">Já possuí uma conta? <a href="/login"><span>Logar-se</span></a></h5>

                    </div>

                    <div className="pai-registro">

                        <div className="txtlinha-registro">

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

        

        </>

    )

}

export default Registro