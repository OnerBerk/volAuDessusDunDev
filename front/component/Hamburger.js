import React, {useState} from 'react'
import {Squash as Hamburger} from 'hamburger-react'
import Link from "next/link"
import styles from '../styles/Hamburger.module.scss'

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false)
    const close = () => {
        setOpen(false)
    }

    return (
        <div className={styles.hamburger} aria-label="hamburger-Menu">
            <Hamburger
                rounded duration={0.8}
                toggled={open}
                toggle={setOpen}
                color="snow"
                aria-label="hamburger-Menu"
            />
            {open &&
            <div>
                <ul className={styles.ham}>
                    <li><Link href="/" onClick={close}><a> Home </a></Link></li>
                    <li><Link href="/about" onClick={close}><a> About </a></Link></li>
                    <li><Link href="/contact" onClick={close}><a> Contact </a></Link></li>
                </ul>
            </div>
            }
        </div>
    )
}

export default HamburgerMenu