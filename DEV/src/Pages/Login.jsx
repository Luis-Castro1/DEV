import './login.css'

export const Login = () => {


  
  return (
    <div className="FormularioLR">
      <form action="" className="Formulario">
        <div>

          <img src="img/logo de la empresa.png" alt="" />
          <br />
          <p className="Titulo"> ACCEDE A TU CUENTA</p>

        </div>

        {/* <!--GRUPO CORREO--> */}
        <div className="Formulario__grupo" id="Grupo__Correo-Login">
          <div className="Formulario__grupo-input">
            <input type="text" className="Formulario__input" name="Correo" />
            <label className="Formulario__label" htmlFor="email" required>E-MAIL</label>
          </div>
        </div>


        {/* <!--GRUPO CONTRASEÑA--> */}
        <div className="Formulario__grupo" id="Grupo__Password-Login">
          <div className="Formulario__grupo-input">
            <input type="password" className="Formulario__input" name="Password" />
            <label className="Formulario__label" htmlFor="Contraseña">CONTRASEÑA</label>
          </div>
        </div>


        {/* <!--GRUPO INICIAR SESION--> */}
        <div className="Formulario__grupo Formulario-botones">
          <button type="submit" className="Formulario_boton">INICIAR SESION</button>

        </div>

        {/* <!--GRUPO CREAR CUENTA--> */}
        <div className="Formulario__grupo Formulario-botones">
          <button className="Formulario_boton" type="submit" onClick="redireccion()">REGISTRATE</button>
        </div>

        {/* <!--GRUPO RECUPERAR CONTRASEÑA--> */}
        <div className="Recuperar" id="contra-olvidada">
          <a className="link" href=".">¿Has olvidado la contraseña?</a>
        </div>

      </form>
    </div>

  )
}
