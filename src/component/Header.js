import logo from "../assets/images/logo192.png"

export const Header = () => {
  return (
    <header className='bg-cyan-950 rounded-lg w-100%' >
      <div className="container mx-auto flex items-center justify-between p-3 ">
          <span className="text-amber-400 text-3xl font-black tracking-tighter">Calculate your General Weighted Average</span>
          <img src={logo} className="w-16 "/> 
      </div>
    </header>
  )
}
