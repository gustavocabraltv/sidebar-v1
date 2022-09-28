import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar';

export default function Home() {
  const [darkMode, setDarkMode] = React.useState(false);
    // checa o tema e reseta quando darkmode muda
      React.useEffect(() => {
        themeCheck();
      }, [darkMode]);

      // check  o tema no componente montado
      React.useEffect(()=>{
        themeCheck()
      },[])

      // função que checa e reseta o tema


      const themeCheck = () => {
        if (
          localStorage.theme === "dark" ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
          document.documentElement.classList.add("dark");
          setDarkMode(true);
        } else {
          document.documentElement.classList.remove("dark");
          setDarkMode(false);
        }
      }
    

        const toggleTheme = () => {
          const theme = localStorage.getItem("theme");
          if (theme) {
            localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
          } else {
            localStorage.setItem("theme", "dark");
          }
          setDarkMode(!darkMode);
        };
      

        


 

  return (
    
    <div className=' dark:bg-slate-800 bg-slate-200 h-screen flex flex-row'>
        <Sidebar/>
      <button onClick={toggleTheme} className='m-8 px-4 py-1 bg-[blue]'>Switch</button>
          <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-96 ml-8">
              <div>
                <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
                </span>
              </div>
              <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
              </p>
      </div>
    </div>
  )
}
