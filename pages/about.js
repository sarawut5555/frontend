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
            charlotte
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
            <li className="nav-item dropdown">
                <Link className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Contact
                </Link>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" href="#">Line</Link></li>
                    <li><Link className="dropdown-item" href="#">Instagram</Link></li>
                    <li><Link className="dropdown-item" href="#">facebook</Link></li>
                </ul>
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
          <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span className="text-body-secondary">See for yourself.</span></h2>
          <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
        </div>
        <div className="col-md-5 order-md-1">
            <Image className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} src="/xcxc.jpg"></Image>
        </div>
      </div>
    </main>



    </>
  )
}

