import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function about() {
  return (
    <>
    <Head>
      <title>About</title>
    </Head>
    <header data-bs-theme="light">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-warning">
        <div className="container-fluid">
        <Link className="navbar-brand" href="/">
        <Image src="/orange.png" alt="Logo" width={30} height={24} className="bd-placeholder-img rounded-circle" />
            orange shop
        </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="/about">about</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" href="/contact">contact</Link>
            </li>
          </ul>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    </header>

    <main>
      <br />
      <br />
      <br />
    <hr className="featurette-divider" />    
    <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">Welcome to my website</h2>
          <br />
          <p className="lead">i'm sarawut kaikaew</p>
          <p className="lead">i'm 19 year old</p>
          <p className="lead">i'm study at Chiangmai Technical College</p>
        </div>
        <div className="col-md-5 order-md-1">
            <Image className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} src="/xcxc.jpg"></Image>
        </div>
      </div>
    </main>
    <hr className="featurette-divider" />
    <footer className="container">
      <p className="float-end"><a href="#">Back to top</a></p>
      <p>2023 orange, shop.</p>
    </footer>
    </>
  )
}

