import { MapPin, Calendar, ArrowRight, UserRoundPlus} from "lucide-react";
import { useState } from "react";

export function App() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false) 
  
  function OpenguestsInput() {
    setIsGuestInputOpen(true)
  }


  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col gap-3 items-center">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua proxima viagem!
          </p>
        </div>

        <div className="space-y-4"> 
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
          <div className="flex items-center gap-2">
            <MapPin className="size-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Para onde você vai?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <div className="flex items-center gap-2 ">
            <Calendar className="size-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Quando?"
              className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
            />
          </div>

          <div className="w-px h-6 bg-zinc-800"></div>

          {isGuestInputOpen ? (
            <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">Alterar local/data</button>
          ) : (
            <button
            onClick={OpenguestsInput}
            className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
          >
            Continuar
            <ArrowRight className="size-5" />
          </button> 
          )}
        </div>

        {isGuestInputOpen && (
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2">
              <UserRoundPlus className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Quem estará na viagem?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>

            <div className="w-px h-6 bg-zinc-800"></div>

            <button
              onClick={OpenguestsInput}
              className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
            >
              Continuar
              <ArrowRight className="size-5" />
            </button>
          </div>
        )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er voce automaticamente concorda{" "}
          <br />
          com nossos{" "}
          <a href="#" className="text-zinc-300 underline">
            termos de uso
          </a>{" "}
          e{" "}
          <a href="#" className="text-zinc-300 underline">
            politicas de privacidade.
          </a>
        </p>
      </div>
    </div>
  );
}
