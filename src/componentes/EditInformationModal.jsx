import { faEnvelope, faLock, faPhone, faTriangleExclamation, faUser, faX } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthProvider'
import { useProfileEdit } from "../context/ProfileEdit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import expresiones from '../hooks/expresiones';


const EditInformationModal = ({ isOpen, onClose }) => {

    const { user, getInfoUser } = useAuth();
    const { updateInfo, olderPassword } = useProfileEdit();
    const expresiones2 = expresiones;
    const userLoginData = localStorage.getItem("userToken");
    let initialAccessToken = '';


    if (userLoginData) {
        try {
            const parsedData = JSON.parse(userLoginData);
            initialAccessToken = parsedData.accessToken || '';

        } catch (error) {
            console.error("Error parsing JSON from localStorage:", error);
        }
    }

    const [accessToken, setAccessToken] = useState(initialAccessToken);
    const [userInfo, setUserInfo] = useState([]);

    const getInformation = () => {

        if (userLoginData) {

            getInfoUser(setUserInfo, accessToken);
        }
    }

    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [Oldpassword, setOldPassword] = useState('');
    const [userName, setUserName] = useState('');

    const [correctForm, setCorrectForm] = useState(null);
    const [correctPass, setCorrectPass] = useState(null);
    const [ConfirmedInput, setConfirmedInput] = useState(false)

    const [emailError, setEmailError] = useState('');
    const [newPasswordError, setNewPasswordError] = useState('');
    const [userNameError, setUserNameError] = useState('');

    useEffect(() => {
        getInformation();
        console.log(userInfo)
    }, [user])

    useEffect(() => {
        if (userInfo.email) {
            setEmail(userInfo.email);
        }
        if (userInfo.name) {
            setUserName(userInfo.name);
        }

        setNewPassword('')
        setCorrectForm(null);
        setCorrectPass(null);

        setEmailError('');
        setNewPasswordError('');
        setUserNameError('');


    }, [userInfo.email, userInfo.name, onClose]);




    const useFunction = () => {
        updateInfo(email, newPassword, userName, setCorrectPass)

    }

    const submitForm = (e) => {
        e.preventDefault();

        if (!expresiones2.correo.test(email)) {

            setEmailError('El correo electrónico no es válido');
        } else {
            setEmailError(false);
        }
        if (!expresiones2.password.test(newPassword)) {

            setNewPasswordError('Tiene que ser de 4 a 12 dígitos');
        } else {
            setNewPasswordError(false);
        }
        if (!expresiones2.nombre.test(userName)) {

            setUserNameError('Tiene que ser de 4 a 16 dígitos y solo puede contener letras');
        } else {
            setUserNameError(false);
        }


        if (!emailError || !newPasswordError || !userNameError) {

            if (email === '' || userName === '' || newPassword === '') {

                setCorrectForm(false);
                setConfirmedInput(false)
            } else {
                setConfirmedInput(true)
                setCorrectForm(true)
            }

        } else {

            setCorrectForm(false);
            setConfirmedInput(false)
        }

        // window.location.reload();
    }




    const confirmedPassword = (e) => {
        e.preventDefault();

        if (Oldpassword === olderPassword) {
            useFunction();
        } else {
            setCorrectPass(false)
        }
    }
    useEffect(() => {
        if (correctPass) {
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    }, [correctPass]);


    return (
        <>

            <div className={`modal-container bg-black/50 fixed top-0 left-0 w-full h-[100%] z-50 place-items-center ${ConfirmedInput ? 'grid' : 'hidden'}`}>
                <div className="modal-body bg-white w-auto min-w-[400px] rounded-[1rem] relative p-[1rem]">
                    <button className="modal-close absolute top-0 right-3 m-[.5rem] hover:scale-x-125"
                        onClick={() => setConfirmedInput(false)}>
                        <FontAwesomeIcon icon={faX} />
                    </button>

                    <>
                        <form className='h-full flex flex-col pt-6 items-center'
                            onSubmit={confirmedPassword}>

                            <div className=' flex justify-center uppercase text-[1.5rem] font-darker-grotesque text-black'>
                                <h1>Confirmar contraseña antigua</h1>
                            </div>

                            <div className="h-full flex flex-col pt-6 items-center">

                                <div>
                                    <div className='mt-[20px] pb-0 relative font-sans left-[-10px]'>
                                        <FontAwesomeIcon icon={faLock} className='absolute left-[-20px] leading-[30px]' />
                                        <input type='password' value={Oldpassword} onChange={(e) => setOldPassword(e.target.value)} className='w-[300px] focus:outline-none border-b-[2px] text-base focus:border-gray-500 transition-colors peer' />

                                        <label htmlFor="Confirmar Contraseña" className={`absolute left-0 text-gray-400 text-[13px] pointer-events-none transition-transform duration-500 -translate-y-5`}>Confirmar Contraseña</label>
                                    </div>
                                </div>

                            </div>

                            {correctPass === false && <div className='pt-1 bg-red-400 h-[30px] w-[350px] rounded-[3px] mt-2'>
                                <p className='text-[14px]'>
                                    <FontAwesomeIcon icon={faTriangleExclamation} className='ml-2' />
                                    <b className='ml-2'>Error:</b> Contraseña incorrecta
                                </p>
                            </div>}

                            <div className='flex items-center flex-col font-darker-grotesque mt-4'>
                                <input type="submit" value="Actualizar Datos" className='py-1  w-[290%] cursor-pointer border-[1px] border-black bg-gray-200 hover:bg-gray-300 font-semibold text-sm ' />
                            </div>

                            {correctPass ? <p className='text-[13px] text-green-600 '>Datos actualizados con exito</p> : ''}
                        </form>

                    </>

                </div>
            </div>

            <div className={`modal-container bg-black/50 fixed top-0 left-0 w-full h-[100%] place-items-center  ${isOpen ? 'grid' : 'hidden'}`}>
                <div className="modal-body min-w-[500px] bg-white w-auto rounded-[1rem] relative p-[1rem]">
                    <button className="modal-close absolute top-0 right-3 m-[.5rem] hover:scale-x-125"
                        onClick={onClose}>
                        <FontAwesomeIcon icon={faX} />
                    </button>

                    <>
                        <img src="src/assets/imagenes/Logo-dev.png" alt="" className="-top-0 h-12 mx-auto absolute left-1/2 -translate-x-1/2 -translate-y-1/2" />


                        <form id='form' className={`h-full flex flex-col ${correctForm ? 'gap-y-10' : 'gap-y-5'} pt-6 items-center`}
                            onSubmit={submitForm}>

                            <div className='mt-9 flex justify-center uppercase text-[1.5rem] font-darker-grotesque text-black'>
                                <h1>Editar Información</h1>
                            </div>


                            <div className='mt-[20px] pb-0 relative font-sans left-[-10px]'>
                                <FontAwesomeIcon icon={faEnvelope} className='absolute left-[-20px] leading-[30px]' />
                                <input name='Email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} className='w-[400px] focus:outline-none border-b-[2px] text-base focus:border-gray-500 transition-colors peer' />

                                <label htmlFor="Email" className={`absolute left-1 text-gray-400 text-[13px] pointer-events -none transition-transform duration-500 -translate-y-5`}>Email</label>

                                {emailError && <p className="absolute left-[3px] font-sans text-[15px] mb-0 text-red-500">{emailError}</p>}
                            </div>

                            <div className='mt-[20px] pb-0 relative font-sans left-[-10px]'>
                                <FontAwesomeIcon icon={faLock} className='absolute left-[-20px] leading-[30px]' />
                                <input name='Contraseña' type='password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className='w-[400px] focus:outline-none border-b-[2px] text-base focus:border-gray-500 transition-colors peer' />

                                <label htmlFor="Contraseña" className={`absolute left-1 text-gray-400 text-[13px] pointer-events -none transition-transform duration-500 -translate-y-5`}>Contraseña</label>
                                {newPasswordError && <p className="absolute left-[35x] font-sans text-[15px] mb-0 text-red-500">{newPasswordError}</p>}
                            </div>

                            <div className='mt-[20px] pb-0 relative font-sans left-[-10px]'>
                                <FontAwesomeIcon icon={faUser} className='absolute left-[-20px] leading-[30px]' />
                                <input name='Nombre' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} className='w-[400px] focus:outline-none border-b-[2px] text-base focus:border-gray-500 transition-colors peer' />

                                <label htmlFor="Nombre" className={`absolute left-1 text-gray-400 text-[13px] pointer-events -none transition-transform duration-500 -translate-y-5`}>Nombre</label>
                                {userNameError && <p className="absolute left[35px] font-sans text-[15px] mb-0 text-red-500">{userNameError}</p>}
                            </div>


                            {correctForm === false && <div className='pt-1 bg-red-400 h-[30px] w-[350px] rounded-[3px] mt-2'>
                                <p className='text-[14px]'>
                                    <FontAwesomeIcon icon={faTriangleExclamation} className='ml-2' />
                                    <b className='ml-2'>Error:</b> Por favor rellene los campos correctamente.
                                </p>
                            </div>}

                            <div className='flex items-center flex-col font-darker-grotesque mt-4'>
                                <input type="submit" value="Actualizar Datos" className='py-1  w-[290%] cursor-pointer border-[1px] border-black bg-gray-200 hover:bg-gray-300 font-semibold text-sm ' />
                            </div>

                        </form>
                    </>

                </div>
            </div>
        </>
    )
}

export default EditInformationModal