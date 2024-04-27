import Typewriter from "typewriter-effect"
import image from "./assets/image.svg"
import App from "./App"
import { Router, Route, Link } from "react-router-dom"

function Index() {
  return (
    <>
      <div className="flex">
        <img src={image} alt="DigiNotes" className="min-w-1/2 h-screen" />
        <div className="grow min-w-1/2 h-screen bg-black flex flex-col gap-8 items-center justify-center text-white">
          <div className="font-medium text-center flex flex-col gap-8">
            <div className="text-4xl font-extralight"> Welcome To</div>
            <div className="text-5xl font-bold font-mono">
              <Typewriter
                options={{
                  strings: ["DigiNotes", "Personalized Digital Learning"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>

          <Link to="/app">
            <button className="text-lg border-2 p-2 rounded-md hover:animate-heartBeat">
              Take Me There
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Index
