/* Los componentes debe empezar por mayuscula para utilizar como elemento PascalCase */
export const Button = ({texto}) => {
    return (
    <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 7.629A3 3 0 0 0 9.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 0 1-.43 2.65L9 16.5l1.539-.513a2.25 2.25 0 0 1 1.422 0l.655.218a2.25 2.25 0 0 0 1.718-.122L15 15.75M8.25 12H12m9 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    
  </svg>
  {texto}
  </button>
    )
}

export function App(){
    return(
        <article style={{display: "flex", color: "#fff", alignItems: "center"}}>
            <header>
                <img alt="El avatar del Campeon" src="https://unavatar.io/LionelMessi"/>
                <div>
                    <strong>Lionel Andres Messi</strong>
                    <span>@campeon</span>
                </div>
            </header>
            <aside>
                <button>
                    Seguir
                </button>
            </aside>
        </article>

    )
}