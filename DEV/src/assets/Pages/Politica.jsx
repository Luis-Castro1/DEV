import React from 'react'
import { Link } from 'react-router-dom'
export const Politica = () => {
    return (
        <div className=' mx-[30rem]'>
            <div className='pt-[5rem] pb-[2rem] my-[2rem]'>
                <Link to="/">
                    <img src="src/assets/imagenes/Logo-dev.png" alt="" className='h-[60px] ' />
                </Link>
            </div>
            <div className='text-justify'>
                <h1 className='text-[1.5rem]'><b>Politica de Privacidad</b></h1>
                <h2>04 de agosto de 2023</h2>
                <br />
                <h3> Estimado usuario</h3>
                <br />
                <p>En DEV-SOFT, estamos comprometidos con la protección y el respeto de tu privacidad. Esta
                    política de privacidad establece cómo recopilamos, utilizamos y protegemos la información
                    personal que puedas proporcionarnos a través de nuestro sitio web y otros canales de
                    comunicación.
                </p>
                <br />
                <h4><b>Recopilación de Información: </b></h4>
                <p>Recopilamos información personal cuando te registras en nuestro sitio web, te suscribes a nuestro
                    boletín
                    informativo, realizas una compra o completar formularios en línea. La información que
                    recopilamos puede incluir tu nombre, dirección de correo electrónico, dirección postal
                    y detalles de pago.</p>
                <br />
                <h4><b>Uso de la Información: </b></h4>
                <p>Utilizamos la información recopilada para brindarte nuestros productos y servicios, procesar tus
                    pedidos, responder a tus consultas y proporcionarte información relevante sobre DEV-SOFT.
                    También podemos utilizar tu información para mejorar nuestros productos y servicios, así como
                    para enviar comunicaciones de marketing con tu consentimiento expreso. </p>
                <br />
                <h4><b>Protección de la Información:  </b></h4>
                <p>Valoramos la seguridad de tu información personal y tomamos medidas razonables para
                    protegerla contra accesos no autorizados, modificaciones, divulgaciones o destrucciones. Sin
                    embargo, debes ser consciente de que ninguna transmisión por Internet o sistema de
                    almacenamiento es completamente seguro.  </p>
                <br />
                <h4><b>Divulgación a Terceros: </b></h4>
                <p>No vendemos, intercambiamos ni transferimos de ninguna manera tu información personal a
                    terceros sin tu consentimiento, excepto cuando sea necesario para brindarte los servicios
                    solicitados. Podemos compartir información con proveedores de servicios de confianza que nos
                    ayudan en la operación de nuestro sitio web y en la prestación de servicios. </p>
                <br />
                <h4><b>Tus Derechos:  </b></h4>
                <p>Tienes el derecho de acceder, corregir, modificar o eliminar la información personal que tenemos
                    sobre ti.
                    Si deseas ejercer estos derechos, contáctanos a través de los datos de contacto proporcionados
                    anteriormente.  </p>
                <br />
                <h4><b> Cambios en esta Política: </b></h4>
                <p>Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Te
                    recomendamos revisar esta página periódicamente para estar al tanto de cualquier cambio. Tu
                    uso continuado de nuestro sitio web después de que se realicen cambios constituye tu aceptación
                    de dichos cambios.
                    Si tienes alguna pregunta o inquietud sobre esta política de privacidad, no dudes en ponerte en
                    contacto con nosotros.</p>
                <br />

                <p><b>Atentamente. </b></p>
                <ul>
                   
                        <li><b>DEV-SOFT  </b></li>
                        <li><b>Carrera 4  </b></li>
                        <li><b>Teléfono: 300298216565  </b></li>
                        <li><b>Correo Electrónico: Dev_soft@gmail.com  </b></li>
                        <li><b>Sitio Web: dev-soft.com </b></li>
                   
                </ul>

            </div>

        </div>
    )
}
