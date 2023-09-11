import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function contact() {
  return (
    <>
    <Head>
      <title>contact</title>
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
        <br />
        <br />
      <div className="container marketing">
        <div className="row">
      <div className="col-lg-4">
        <Image className="bd-placeholder-img rounded-circle" width={140} height={140} src="/fb.png"></Image>
        <h2 className="fw-normal">Facebook</h2>
        <p>Sarawut kaikaew</p>
        <p><Link className="btn btn-secondary" href="https://www.facebook.com/sarawut.1104">View details »</Link></p>
        </div>{/* /.col-lg-4 */}
      <div className="col-lg-4">
    <Image className="bd-placeholder-img rounded-circle" width={140} height={140} src="/ig.png"></Image>
      <h2 className="fw-normal">Instagram</h2>
      <p>sxrxwut04_</p>
      <p><Link className="btn btn-secondary" href="https://www.instagram.com/sxrxwut04_">View details »</Link></p>
    </div>{/* /.col-lg-4 */}
    <div className="col-lg-4">
    <Image className="bd-placeholder-img rounded-circle" width={140} height={140} src="/gmail.png"></Image>
      <h2 className="fw-normal">Gmail</h2>
      <p>sarawutkai99@gmail.com</p>
      <p><Link className="btn btn-secondary" href="#">View details »</Link></p>
    </div>{/* /.col-lg-4 */}
  </div>
</div>
    </main>
    <br />
    <br />
    <br />
    <hr className="featurette-divider" />
    <footer className="container">
      <p className="float-end"><a href="#">Back to top</a></p>
      <p>2023 orange, shop.</p>
    </footer>


    </>
  )
}

