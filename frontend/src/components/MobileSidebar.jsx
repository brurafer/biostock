import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Sidebar from './Sidebar'

const MobileSidebar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Botão no topo */}
      <div className="md:hidden fixed top-4 left-4 z-50 bg-white rounded-full p-2 shadow-md">
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu lateral mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-40 shadow-md transition-transform duration-300
        ${open ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
      >
        <Sidebar />
      </div>
    </>
  )
}

export default MobileSidebar
