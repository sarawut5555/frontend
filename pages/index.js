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
