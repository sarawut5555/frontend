import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function index() {
  return (
    <>
    <Head>
      <title>Welcome to NextJs</title>
    </Head>
    <div>
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
    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel" data-bs-theme="light">
       <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={2} aria-label="Slide 3" />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image className="bd-placeholder-img" width="1700" height="800"  aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"src="/orange10.jpg"></Image>
        </div>
        <div className="carousel-item">
        <Image className="bd-placeholder-img" width="1700" height="800"  aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"src="/orange12.jpg"></Image>
        </div>
        <div className="carousel-item">
        <Image className="bd-placeholder-img" width="1700" height="800"  aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"src="/orange11.jpg"></Image>
          
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    {/* Marketing messaging and featurettes
  ================================================== */}
    {/* Wrap the rest of the page in another container to center all the content. */}
    <br />
    <br />
    <br />
    <div className="container marketing">
      {/* Three columns of text below the carousel */}
      <div className="row">
        <div className="col-lg-4">
          <Image className="bd-placeholder-img rounded-circle" width={140} height={140}src='/orange14.jpg'></Image>
          <h2 className="fw-normal">ส้มเกลี้ยง</h2>
          <p>ส้ม เป็นไม้พุ่มหรือไม้ต้นขนาดเล็กหลายชนิด เป็นพืชใบเลี้ยงคู่ สกุล Citrus วงศ์ Rutaceae มีด้วยกันนับร้อยชนิด เติบโตกระจายอยู่ทั่วโลก โดยมากจะมีน้ำมันหอมระเหยในใบ ดอก และผล และมีกลิ่นฉุน</p>
        </div>{/* /.col-lg-4 */}
        <div className="col-lg-4">
        <Image className="bd-placeholder-img rounded-circle" width={140} height={140}src='/orange13.jpg'></Image>
          <h2 className="fw-normal">ส้มจุก</h2>
          <p>น้ำส้มคั้น หมายถึง น้ำส้มที่ผ่านกรรมวิธีได้จากการคั้นโดยตรงจากส่วนที่บริโภคได้ของผลส้มที่แก่สุก และสด</p>
        </div>{/* /.col-lg-4 */}
        <div className="col-lg-4">
        <Image className="bd-placeholder-img rounded-circle" width={140} height={140}src='/orange6.jpg'></Image>
          <h2 className="fw-normal">ส้มเขียวหวาน</h2>
          <p>ส้มเขียวหวาน เป็นส้มพันธุ์ปลูกหนึ่ง ที่พัฒนาสายพันธุ์มาจากส้มแมนดาริน มีผิวสีเขียวอมเหลืองเมื่อสุกต่างจากส้มแมนดารินเมื่อสุกสีส้มล้วน แหล่งปลูกที่เป็นที่รู้จักคือ บางมด</p>
          {/* v */}
        </div>{/* /.col-lg-4 */}
      </div>{/* /.row */}
      {/* START THE FEATURETTES */}
      
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">ที่มาของส้ม</h2>
          <p className="lead">ในปี พ.ศ.330 นายพล Alexander นำเอาซิตรอนจากประเทศที่รบชนะ เช่น อิหร่าน ไปปลูกในยุโรป และแพร่กระจายไปแถบประเทศเมดิเตอเรเนียน มีส้มชนิดต่างๆ ได้แก่  ซาวออเรนซ์ เลมอน ไลม์ สวีทออเรนซ์ และแมนดาริน ตามลำดับ การแพร่กระจายพันธุ์นี้เข้าใจว่าอยู่ในช่วงของสงครามครูเสด โดยแพร่กระจายไปยังประเทศอิตาลี สเปน โปรตุเกส และอัฟริกาตอนเหนือ
          โคลัมบัสได้นำพันธุ์ส้มมาปลูกทางแถบประเทศตะวันตก ในปี ค.ศ.1943 ได้มีการรวบรวมเมล็ดของออเรนซ์ เลมอน และซิตรอน จากหมู่เกาะคานารีไปปลูกที่เมืองฮิปานีโอลา ต่อมาได้แพร่กระจายพันธุ์ไปยังแถบทะเลคาริบเบียนและส่วนอื่นๆของทวีปยุโรป
          ในศตวรรษที่ 16 - 17 โคลัมบัสได้นำส้มไปปลูกชายฝั่งอเมริกาใต้ และอัฟริกากับออสเตรเลียเป็นแหล่งสุดท้าย ในสมัยก่อนนักเดินทางและมิชชันนารีเป็นผู้ช่วยแพร่กระจายพันธุ์ส้มได้ดี โดยเฉพาะอย่างยิ่งมักรู้จักกันดีในรูปของเครื่องดื่มแก้กระหาย ในกองทัพเรืออังกฤษดื่มน้ำมะนาวทุกวัน  ส้มพวกแรกที่แพร่เข้าไปในยุโรป คือ ซิตรอน ต่อมามีพวกแมนดาริน ออเรนซ์ แพร่กระจายไปเป็นระยะ</p>
        </div>
        <div className="col-md-5 order-md-1">
          <Image className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500}src="/orange2.jpg"></Image>
        </div>
      </div>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">Sunkist brand</h2>
          <p className="lead">เป็นสหกรณ์สมาชิกที่ไม่มีสต็อกของเกษตรกรผู้ปลูกส้มในอเมริกา ซึ่งประกอบด้วยสมาชิก 6,000 รายจากแคลิฟอร์เนียและแอริโซนา ปัจจุบันมีสำนักงานใหญ่อยู่ที่เมืองวาเลนเซีย รัฐแคลิฟอร์เนีย ผ่านสำนักงาน 31 แห่งในสหรัฐอเมริกาและแคนาดา</p>
        </div>
        <div className="col-md-5">
        <Image className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500}src="/orange4.jpg"></Image>
        </div>
      </div>
      <hr className="featurette-divider" />
      {/* /END THE FEATURETTES */}
    </div>{/* /.container */}
    {/* FOOTER */}
    <footer className="container">
      <p className="float-end"><a href="#">Back to top</a></p>
      <p>2023 orange, shop.</p>
    </footer>
  </main>
</div>


    </>
  )
}
