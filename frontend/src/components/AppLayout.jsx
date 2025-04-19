import Sidebar from './Sidebar'

const AppLayout = ({ children }) => {
  return (
    <div className="flex bg-[#f4f4f4] min-h-screen font-inter text-[#1A1A1A]">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}

export default AppLayout
