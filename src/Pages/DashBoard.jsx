import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export const DashBoard = () => {

  const { logout, email } = useAuth();
  const navigation = useNavigate();

  const userLogout = () => {
    logout();
    navigation('/')
  }

  return (
    <>
      <div className="grid grid-cols-2">
        <div className="grid">

          <div className="flex justify-center bg-black text-white text-[30px] items-center mt-10 mb-5">
            <h1 className="font-darker-grotesque font-[800]">Hola {email}!</h1>
          </div>

          <div className="flex justify-center items-center h-[50px] ">
            <strong>
              Perfil
            </strong>
          </div>

          <div className="flex justify-center items-center h-[50px]  my-5">
            <strong>
              <button onClick={userLogout}>
                cerrar sesión
              </button>
            </strong>
          </div>
        </div>

        <div>
          <h1>hola</h1>
        </div>

      </div>
    </>
  )
}
