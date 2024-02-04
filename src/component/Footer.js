
export const Footer = () => {
  return (
    <footer className="bg-cyan-950 rounded-lg w-100% justify-center">
        <div className=" mx-auto flex flex-wrap items-center  p-3 justify-around ">
            <a target="_blank" href="https://github.com/Carl4WebDev" >
                <span className="flex items-center justify-start mr-15  bg-white p-4 rounded-full">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                    <span className="ml-5 text-amber-400 text-3xl font-black tracking-tighter">
                        Carl4WebDev 
                    </span>
                </span>
            </a>
            <a target="_blank" href="https://carlivansampan-sample-portfolio.netlify.app"> 
                <span className="flex items-center justify-start mr-15 bg-white p-4 rounded-full">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                    </svg>
                    <span className="mx-5 text-amber-400 text-3xl font-black tracking-tighter">
                        Sample Portfolio
                    </span>
                </span>
            </a>
    
        </div>
    </footer>
  )
}
