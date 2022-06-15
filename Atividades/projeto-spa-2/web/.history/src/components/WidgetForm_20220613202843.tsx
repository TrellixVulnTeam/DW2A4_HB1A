// TELA DO FORMULÁRIO 

import { CloseButton } from "./CloseButton";

// TIPOS DE FEEDBACK
const feedbackTypes = {
    BUG: {
        title: "Problema"
    },
    IDEIA: {
        title: "Problema"

    },
    PRAISE:{

    },
    OTHER:{

    }
};


export function WidgetForm() {
    return (
        <div className="bg-zinc-800 p-4 relative rounded-2xl mb-4 flex flex-col items-center w-[calc(100vw-2rem)] md:w-auto">
            {/* ACIMA TEMOS UM USO INTERESSANTE DE LAYOUT RESPONSIVE */}

            {/* CONTEUDO DO FORM E BUTTON CLOSE */}
            <header>
                <CloseButton />
                <span className="text-xl leading-6">Deixe seu Feedback</span>
            </header>


            {
            /* CONTEÚDO LISTA DE OPÇÕES PARA SELECIONAR 
            
                GAP-2 : ESPAÇAMENTO ENTRE ICONES 
                W-FULL : USA O WIDTH INTEIRO (100%)
            */}
            <div className="flex py-8 gap-2 w-full">
                

            </div>


            {/* FOOTER DO DO FORM  */}
            <footer className="text-xs text-neutral-400">
                <span>Feito por <a className="underline underline-offset-2 hover:bg-[#09f] hover:text-zinc-900 transition-all rounded" href="">Felippe</a></span>
            </footer>
        </div>
    );
}