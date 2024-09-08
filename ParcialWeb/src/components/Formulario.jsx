import "../components/Formulario.css"
export function Formulario(){

    return (
        <div className="containerPrincipal">
            <h1>Login</h1>
            <form className="formulario">
                <input type="text" />
                <input type="password" />
                <button >LOGIN</button>
            </form>

        </div>
    )
}