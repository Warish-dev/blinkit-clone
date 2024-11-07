import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className={styles.header}>
        <div className={styles.menu-icon}>
            <BsJustify className={styles.icon} onClick={OpenSidebar}/>
        </div>
        <div className={styles.header-left}>
            <BsSearch  className={styles.icon}/>
        </div>
        <div className={styles.header-right}>
            <BsFillBellFill className={styles.icon}/>
            <BsFillEnvelopeFill className={styles.icon}/>
            <BsPersonCircle className={styles.icon}/>
        </div>
    </header>
  )
}

export default Header
