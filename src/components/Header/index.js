import React from 'react';
import {remote} from 'electron'
// import { Container } from './styles';

function Header() {

    function handleClose(){
        const window = remote.getCurrentWindow()
        window.close()
    }

    function handleMaximize(){
        const window = remote.getCurrentWindow()
        if(!window.isMaximized()){
            window.maximize()
        }else{
            window.unmaximize()
        }
    }

    function handleMinimize(){
        const window = remote.getCurrentWindow()
        window.minimize()
    }

  return (
        <div >
            <button onClick={handleClose}>fechar</button>
            <button onClick={handleMaximize}>maximizar</button>
            <button onClick={handleMinimize}>miniminizar</button>
        </div>
        )
}

export default Header;