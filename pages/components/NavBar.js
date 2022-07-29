import React from 'react'
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={` mt-4 ${styles.boldForNavItems}`}>
        <ul className="nav justify-content-center">
          <li>
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/blog">
              <a className="nav-link">Blog</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">
              <a className="nav-link">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
  )
}

export default NavBar