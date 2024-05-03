import Link from 'next/link'
import React from 'react'

const NotFounf = () => {
  return (
    <div>
      <h2>NotFounf</h2>
      <p>Sorrt,the page you are looking for does not exist.</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFounf
