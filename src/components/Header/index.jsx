import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

import "./index.css";


export function Header() {

    const [nav, setNav] = useState(false);


    function closeNav() {
        if (nav) {
            setTimeout(() => {document.querySelector("nav").style.display ="none"},150)
        }
        else (
            setTimeout(() => {document.querySelector("nav").style.display ="flex"},200)
        )
    }

    
    return (
        <header >


            <style jsx> {
                `
                @keyframes openNav {
    
                    to {
                        transform:translateX(100%);
                    }
                }
                @keyframes closeNav {
                    
                    from {
                        transform:translateX(200%);
                    }
                }
                 `} 
                
            </style>

            <h1>
            CosmoFinance
            </h1>

            
            <button onClick={() => { setNav(!nav); closeNav() }} >

                {!nav ? <RxHamburgerMenu style={{ fontSize: "1.3rem" }} /> : <AiOutlineClose style={{ fontSize: "1.3rem" }}/>
}

            </button>

                <nav style={{animation: `${nav ? 'openNav' : 'closeNav'} 500ms ease-in  forwards alternate-reverse`,}}>
                    <ul>
                   
                        <li>
                            Apresentação
                        </li>
                        <li>
                            Cartões
                        </li>
                        <li>
                            Sobre
                        </li>
                        <li>
                            Comentários
                        </li>
                        </ul>
                </nav>
            
            
        </header>
    )
}