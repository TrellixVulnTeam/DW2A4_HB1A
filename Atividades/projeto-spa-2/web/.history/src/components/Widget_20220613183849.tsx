import { ChatTeardropDots } from 'phosphor-react'

export function Widget() {
    return (
        <div className="absolute bottom-4 right-5">
            {/* ICONE BOLINHA */}
            <button className="bg-[#000] rounded-full px-3 h-12 flex align-ce">
                <ChatTeardropDots weight="bold" className="w-6 h-6 text-white" />

                <span>Feeback</span>
            </button>
        </div>

    )
}