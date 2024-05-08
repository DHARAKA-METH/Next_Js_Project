import Image from 'next/image'
import React from 'react'
import style from './about.module.css'

const About = () => {
  return (
    <div>
      <div className={style.imageContainer}>
    <Image src={"/about.png"} alt='' width={500} height={500}/>
      </div>
    </div>
  )
}

export default About
