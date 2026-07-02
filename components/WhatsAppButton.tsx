"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton(){

return(

<a

href="https://wa.me/917039233297"

target="_blank"

className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition z-50"

>

<FaWhatsapp size={34}/>

</a>

)

}