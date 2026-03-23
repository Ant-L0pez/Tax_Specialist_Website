const translations = {

en:{
services:"Services",
accountant:"Accountant",
appointments:"Appointments",
reviews:"Reviews",
contact:"Contact",

heroTitle:"Personal & Business Tax Specialists",
heroText:"Professional tax preparation and planning service for individuals and businesses in Arlington, TX.",
schedule:"Schedule Appointment",


servicesTitle:"Our Services",
service1:"Personal Tax Preparation",
service2:"Business Tax Services",
service3:"Tax Planning",
service4:"Bookkeeping",

meet:"Meet Dr. Michael Fidelis, PH.D., MST",
bio:"Experienced tax professional helping individuals and businesses navigate complex tax laws.",
publication:"Publication",

reviewsTitle:"Client Reviews",

contactTitle:"Contact Us",
send:"Send Message"
},

es:{
services:"Servicios",
accountant:"Contador",
appointments:"Citas",
reviews:"Reseñas",
contact:"Contacto",

heroTitle:"Especialistas en Impuestos Personales y de Negocios",
heroText:"Preparación y planificación profesional de impuestos para individuos y empresas.",
schedule:"Programar Cita",


servicesTitle:"Nuestros Servicios",
service1:"Preparación de Impuestos Personales",
service2:"Servicios de Impuestos para Negocios",
service3:"Planificación de Impuestos",
service4:"Contabilidad",

meet:"Conozca a Dr. Michael Fidelis, PH.D., MST",
bio:"Profesional de impuestos con experiencia ayudando a individuos y empresas.",
publication:"Publicación",

reviewsTitle:"Reseñas de Clientes",

contactTitle:"Contáctenos",
send:"Enviar Mensaje"
}

}

let currentLang="en"

function toggleLanguage(){

currentLang=currentLang==="en"?"es":"en"

document.querySelectorAll("[data-translate]").forEach(el=>{

const key=el.getAttribute("data-translate")

el.textContent=translations[currentLang][key]

})

}