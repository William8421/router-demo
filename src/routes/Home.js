import {NavLink, Outlet} from 'react-router-dom';
import React from 'react'

export default function Home() {
  return (
    <div>
      <main style={{textAlign: "center"}}>
          <h2>Welcome to React Router</h2>
      </main>
      <nav style={{textAlign: "center"}}>
          <NavLink to="/">Home</NavLink> |{" "}
          <NavLink to="about">About</NavLink> |{" "}
          <NavLink to="team">Team</NavLink> |{" "}
          <NavLink to="contact">Contact</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}
