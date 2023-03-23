import { Logo } from '@/presentation/components'
import Styles from './header-styles.scss'

import React from 'react'

const Header: React.FC = () => {
  return (
    <header className={Styles.headerWrap}>
      <div className={Styles.headerContent}>
        <div className={Styles.formButton}>
          <i className='material-icons' id={Styles.iconHome}>
            home
          </i>
        </div>
        <div className={Styles.logo}>
          <Logo></Logo>
        </div>
        <div className={Styles.userConnected}>
          <p>Bem vindo, User</p>
          <hr />
        </div>
        <div className={Styles.logout}>
          <p>Sair</p>
        </div>
        <div className={Styles.tickets}>
          <p>Meus chamados</p>
        </div>
      </div>
    </header>
  )
}

export default Header