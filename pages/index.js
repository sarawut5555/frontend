import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'

export default function index() {
  return (
    <>
    <Head>
      <title>Welcome to NextJs</title>
    </Head>
    <nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
  <img src="/xcxc.jpg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
  charlotte
</a>
    
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

    <div className="text-center">Welcome</div>
    <br />
    <div className="text-center"><button type="button" className="btn btn-outline-success">index</button></div>
    <br />
    <div className="text-center">
      <Image src="/xcxc.jpg" className="rounded" alt="xcxc" width="300" height="300" />
    </div>


    </>
  )
}
