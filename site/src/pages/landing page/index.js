import './index.scss'
import {useState} from 'react'

export default function Index(){

    const[ativar, setAtivar] = useState("nav-list");
    const navBar = () => {
        ativar === 'nav-list' ? setAtivar('nav-list.active') : setAtivar('nav-list')

    }
      

    return(
        <main>
            <header>
                <img className='logo' src='../images/ff26c70db73da78c644cef38e6df1c32-removebg-preview.png'></img>
            <div className="box">
                <input type="text" placeholder='O que você procura?'className="caixinha"/>
                <input type="image" src='../images/lupa.png' className="lupa" />
            </div>    
            <div className='botao-login'>
                <img className='cara'src='../images/cara.png'></img>
                <label className='label-login'>Login</label> 
            </div>
            <div className='botao-carrinho'>
                <img className='carrinho'src='../images/carrinho.png'></img>
                <label>
                <img className='numero-carrinho'src='../images/0.png'></img>
                </label>
           </div>
 <div>
           <div onClick={navBar} className='menu'>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
           </div>
    <div>
        <ul className={ativar}>
            <li>Meu carrinho</li>
            <li>Meus pedidos</li>
            <li>Gêneros</li>
            <li>Autores</li>   
        </ul>
    </div>
            <ul className='nav-list2'>
            <li >Logout</li>
            </ul>
</div>
            </header>

        </main>

    )
}