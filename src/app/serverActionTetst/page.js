import { sayhellow } from '@/lib/action'
import React from 'react'

const ServerActionTest = () => {
  return (
    <div>
      <form action={sayhellow}>
<button>Test me</button>
      </form>
    </div>
  )
}

export default ServerActionTest
