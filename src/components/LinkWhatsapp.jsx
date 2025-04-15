import { MessageCircle } from "lucide-react"


export default function LinkWhatsapp(){
    return(
        <a
      href="https://wa.me/5492227627929"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-2 md:bottom-10 right-2 z-50  transition-all duration-300"
      aria-label="Enviar mensaje por WhatsApp"
    >
     <span class="icon-[logos--whatsapp-icon] w-16 h-16 md:w-[6vw]  md:h-[6vh] hover:scale-[1.2] transition-all duration-300 "></span>
    </a>
    )
}