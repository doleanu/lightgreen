// Per-locale content for Light Green Bar & Grill. Facts (address, phone,
// hours, rating, menu items/prices) are sourced from the business's real
// Google Maps listing and its photographed menu — translated, not invented.

export type Locale = "es" | "en";

export type MenuItem = { name: string; desc: string; price: string };
export type MenuSection = { title: string; items: MenuItem[] };
export type MenuTab = { key: string; label: string; sections: MenuSection[] };

export type Dict = {
  htmlLang: string;
  meta: {
    title: string;
    description: string;
    ogDescription: string;
  };
  langSwitch: { es: string; en: string };
  nav: { whatsapp: string; messenger: string; menu: string };
  hero: {
    kicker: string;
    titleLine1: string;
    titleLine2: string;
    titleWarm: string;
    subtitle: string;
    ratingSuffix: string;
    ctaWhatsapp: string;
    ctaCall: string;
    ctaMessenger: string;
    ctaMenu: string;
    photoCaption: string;
    photoAlt: string;
  };
  fuego: {
    label: string;
    titlePre: string;
    titleWarm: string;
    para1: string;
    para2: string;
    photoCaption: string;
    photoAlt: string;
  };
  carta: {
    label: string;
    titlePre: string;
    titleWarm: string;
    intro: string;
    categories: { title: string; desc: string; photo: string; alt: string }[];
    priceNote: string;
  };
  qr: {
    label: string;
    titlePre: string;
    titleWarm: string;
    para: string;
    bullets: string[];
    menuPreviewLabel: string;
    menuItems: MenuItem[];
    menuNote: string;
    cardLabel: string;
    cardBeefTitle: string;
    cardBeefText: string;
    cardNote: string;
  };
  ambiente: {
    label: string;
    titlePre: string;
    titleWarm: string;
    para: string;
  };
  resenas: {
    label: string;
    ratingLabel: string;
    para: string;
  };
  faq: {
    label: string;
    title: string;
    items: { q: string; a: string }[];
  };
  reserva: {
    label: string;
    titlePre: string;
    titleWarm: string;
    intro: string;
    nameLabel: string;
    namePlaceholder: string;
    dateLabel: string;
    timeLabel: string;
    peopleLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    note: string;
  };
  contacto: {
    label: string;
    titlePre: string;
    titleWarm: string;
    whereLabel: string;
    hoursLabel: string;
    hoursValue: string;
    contactLabel: string;
    contactValue: string;
    ctaWhatsapp: string;
    ctaCall: string;
    ctaMaps: string;
    ctaMessenger: string;
  };
  footer: {
    demo: string;
    webBy: string;
  };
  menuPage: {
    metaTitle: string;
    metaDescription: string;
    backLabel: string;
    kicker: string;
    title: string;
    titleWarm: string;
    subtitle: string;
    grillNote: string;
    tabs: MenuTab[];
    ctaWhatsapp: string;
    ctaCall: string;
    note: string;
  };
};

const es: Dict = {
  htmlLang: "es",
  meta: {
    title: "Light Green Bar & Grill — Parrilla argentina en Golf del Sur, Tenerife",
    description:
      "Light Green Bar & Grill, Golf del Sur (San Blas): parrilla argentina con carne de vaca canaria de pasto (grass-fed), chimichurri casero y cortes premium. 4,7★ en Google. C. San Blas, Local 4. Abierto todos los días 11:00–23:00. Sitio de demostración no oficial.",
    ogDescription:
      "Carne de vaca canaria de pasto (grass-fed) al fuego vivo, chimichurri casero y cortes premium, en el centro comercial San Blas, Golf del Sur.",
  },
  langSwitch: { es: "ES", en: "EN" },
  nav: { whatsapp: "WhatsApp", messenger: "Messenger", menu: "Carta digital" },
  hero: {
    kicker: "Parrilla argentina · Golf del Sur",
    titleLine1: "Fuego vivo,",
    titleLine2: "sabor",
    titleWarm: "argentino",
    subtitle:
      "Carne de vaca canaria de pasto (grass-fed) a la parrilla, chimichurri casero y cortes premium, en el corazón de San Blas, Golf del Sur.",
    ratingSuffix: "en Google",
    ctaWhatsapp: "Reservar por WhatsApp",
    ctaCall: "Llamar",
    ctaMessenger: "Escríbenos por Messenger",
    ctaMenu: "Ver carta digital",
    photoCaption: "Carne a la brasa con chimichurri",
    photoAlt: "Cortes de carne a la parrilla con chimichurri fresco, sobre brasas de carbón",
  },
  fuego: {
    label: "01 · El fuego",
    titlePre: "Cocinamos como en ",
    titleWarm: "Argentina",
    para1:
      "Fuego vivo, cortes de vaca canaria de pasto (grass-fed) elegidos con cuidado y una parrilla que marca el ritmo de la noche. Nada de atajos: el chimichurri se hace en casa y cada corte se cocina al punto que pidas — la parrilla de carbón arranca a partir de las 18:00.",
    para2:
      "Los que ya han venido lo cuentan igual: buena carne, raciones generosas, y algún sábado con música en vivo.",
    photoCaption: "Tomahawk steak — plato real de la carta",
    photoAlt: "Tomahawk steak a la parrilla con patatas asadas y romero, foto real de un plato del restaurante",
  },
  carta: {
    label: "02 · La carta",
    titlePre: "Lo que sale de la ",
    titleWarm: "brasa",
    intro: "Carta completa disponible en el local — pregunta por los cortes del día.",
    categories: [
      {
        title: "T-Bone Steak",
        desc: "Corte premium con hueso, asado al fuego para máxima jugosidad.",
        photo: "/photos/tbone-real.jpg",
        alt: "T-Bone Steak a la parrilla en corte fino, foto real de un plato del restaurante",
      },
      {
        title: "Chimichurri casero",
        desc: "La salsa que acompaña cada corte, hecha en casa, sin atajos.",
        photo: "/photos/chimichurri-real.jpg",
        alt: "Corte argentino con ensaladilla rusa y chimichurri casero, foto real de un plato del restaurante",
      },
      {
        title: "Porchetta",
        desc: "Asado tradicional de cerdo con piel crujiente, con ensaladilla rusa casera.",
        photo: "/photos/porchetta-real.jpg",
        alt: "Porchetta asada con piel crujiente, foto real de un plato del restaurante",
      },
    ],
    priceNote: "Precio orientativo €20–30 por persona",
  },
  qr: {
    label: "03 · Carta digital",
    titlePre: "Escanea, elige, ",
    titleWarm: "disfruta",
    para:
      "Un código QR en cada mesa abre la carta completa en el móvil del cliente — con fotos, precios siempre actualizados y sin esperar a que alguien traiga la carta de papel.",
    bullets: [
      "Carta siempre al día, sin reimprimir nada.",
      "Funciona en varios idiomas para la clientela turística.",
      "El diseño de la tarjeta va a juego con la imagen del local.",
    ],
    menuPreviewLabel: "Así se ve al escanear — carta real del local",
    menuItems: [
      {
        name: "Argentinean steak",
        desc: "Corte de ternera premium asado a la brasa, con ensaladilla rusa y nuestro chimichurri.",
        price: "22,00 €",
      },
      {
        name: "Tomahawk steak",
        desc: "Chuletón de ternera con hueso largo, con patatas doradas y romero fresco.",
        price: "29,50 €",
      },
      {
        name: "T-Bone Steak",
        desc: "Corte premium con hueso, asado al fuego para máxima jugosidad.",
        price: "34,50 €",
      },
      {
        name: "Verduras a la parrilla",
        desc: "Con queso curado, pistacho y aceite de oliva. Vegetariano.",
        price: "12,50 €",
      },
      {
        name: "Pasta al pesto",
        desc: "Espaguetis con salsa de albahaca, piñones y parmesano. Vegetariano.",
        price: "12,00 €",
      },
      {
        name: "Light Green Aloe Vodka",
        desc: "Vodka, aloe, lima y soda — el cóctel con nuestro nombre.",
        price: "7,00 €",
      },
    ],
    menuNote: "Precios reales de la carta actual del local, en agosto de 2026.",
    cardLabel: "En cada mesa",
    cardBeefTitle: "Carne de vaca canaria de pasto (grass-fed)",
    cardBeefText:
      "Solo carne de vaca canaria de pasto, criada en libertad, sin atajos, para el mejor sabor en cada corte.",
    cardNote:
      "Este mensaje iría justo al lado del código QR físico de cada mesa — el QR en sí solo existe ahí, no en la web.",
  },
  ambiente: {
    label: "04 · Ambiente",
    titlePre: "Con ",
    titleWarm: "música",
    para:
      "Algunas noches, buen ambiente, música en directo mientras se termina la carne. Un sitio para quedarse un rato más de lo previsto.",
  },
  resenas: {
    label: "05 · Lo que se dice",
    ratingLabel: "Valoración media en Google",
    para:
      "Local Guides destacan la calidad de la carne, las raciones generosas y el ambiente — un recién llegado al centro comercial San Blas que ya se ha ganado sitio propio.",
  },
  faq: {
    label: "06 · Preguntas frecuentes",
    title: "Lo que más preguntan",
    items: [
      {
        q: "¿Dónde está Light Green Bar & Grill?",
        a: "En el centro comercial San Blas, Calle San Blas Local 4, Golf del Sur (San Miguel de Abona), Tenerife.",
      },
      {
        q: "¿Qué tipo de comida sirven?",
        a: "Parrilla al estilo argentino: carne de vaca canaria de pasto (grass-fed) a fuego vivo, chimichurri casero y cortes premium como el T-Bone. La parrilla de carbón arranca a las 18:00.",
      },
      {
        q: "¿Cuál es el horario?",
        a: "Todos los días de 11:00 a 23:00.",
      },
      {
        q: "¿Se puede reservar?",
        a: "Sí, por WhatsApp o llamando al +39 351 173 3108.",
      },
      {
        q: "¿Tienen ambiente con música en vivo?",
        a: "Algunas noches sí — clientes mencionan buen ambiente y música en directo.",
      },
    ],
  },
  reserva: {
    label: "07 · Reserva tu mesa",
    titlePre: "Reserva tu ",
    titleWarm: "mesa",
    intro:
      "Rellena el formulario y te escribimos por WhatsApp para confirmar — así de fácil.",
    nameLabel: "Nombre",
    namePlaceholder: "¿Cómo te llamas?",
    dateLabel: "Fecha",
    timeLabel: "Hora",
    peopleLabel: "Personas",
    messageLabel: "Algo más que debamos saber (opcional)",
    messagePlaceholder: "Alergias, silla para bebé, mesa en terraza…",
    submitLabel: "Reservar por WhatsApp",
    note: "Al enviar se abre WhatsApp con tu reserva ya escrita — solo tienes que confirmarla.",
  },
  contacto: {
    label: "08 · Encuéntranos",
    titlePre: "Te esperamos en ",
    titleWarm: "San Blas",
    whereLabel: "Dónde",
    hoursLabel: "Horario",
    hoursValue: "Todos los días\n11:00–23:00",
    contactLabel: "Contacto",
    contactValue: "WhatsApp disponible",
    ctaWhatsapp: "Escribir por WhatsApp",
    ctaCall: "Llamar ahora",
    ctaMaps: "Cómo llegar",
    ctaMessenger: "Escribir por Messenger",
  },
  footer: {
    demo: "Sitio de demostración — propuesta de diseño no oficial",
    webBy: "Web de",
  },
  menuPage: {
    metaTitle: "Carta digital — Light Green Bar & Grill, Golf del Sur",
    metaDescription:
      "Carta digital completa de Light Green Bar & Grill: cortes de vaca canaria de pasto (grass-fed), Wagyu, picanha brasileña, cordero y más. Parrilla desde las 18:00.",
    backLabel: "← Volver al inicio",
    kicker: "Carta digital",
    title: "Cada corte, ",
    titleWarm: "al detalle",
    subtitle:
      "La carta completa de Light Green, con precios siempre actualizados — la misma que verías al escanear el QR de tu mesa.",
    grillNote: "La parrilla está disponible a partir de las 18:00 · el resto de la carta, todo el día.",
    tabs: [
      {
        key: "grill",
        label: "Parrilla",
        sections: [
          {
            title: "",
            items: [
              {
                name: "T-Bone Steak",
                desc: "Corte premium con hueso, sellado al fuego vivo para conservar todo el jugo.",
                price: "34,50 €",
              },
              {
                name: "Argentinean Steak",
                desc: "Corte premium asado a la brasa. Se sirve con ensaladilla rusa tradicional y nuestro chimichurri casero.",
                price: "22,00 €",
              },
              {
                name: "Beef Tagliata",
                desc: "Cortada en láminas sobre rúcula fresca, con Grana Padano, tomates cherry y reducción de balsámico.",
                price: "19,50 €",
              },
              {
                name: "Solomillo (Tenderloin)",
                desc: "Solomillo de ternera a la parrilla.",
                price: "22,00 €",
              },
              {
                name: "Chuletas de cordero",
                desc: "Chuletas de cordero a la parrilla, con patatas fritas.",
                price: "18,00 €",
              },
              {
                name: "Wagyu Steak",
                desc: "Con mantequilla, Grana Padano y patatas asadas, chimichurri aparte.",
                price: "34,90 €",
              },
              {
                name: "Picanha brasileña",
                desc: "Picanha brasileña al espadón, con ensalada de col y chimichurri.",
                price: "24,00 €",
              },
              {
                name: "Tomahawk Steak",
                desc: "Chuletón XL con hueso largo a la parrilla, con patatas doradas y romero fresco.",
                price: "29,50 €",
              },
              {
                name: "Porchetta",
                desc: "Asado tradicional de cerdo con piel crujiente, con ensaladilla rusa casera.",
                price: "14,00 €",
              },
              {
                name: "Verduras a la parrilla",
                desc: "Con queso curado, pistacho y aceite de oliva. Vegetariano.",
                price: "12,50 €",
              },
              {
                name: "Pechuga de pollo",
                desc: "Pechuga de pollo a la parrilla, con patatas fritas.",
                price: "11,00 €",
              },
            ],
          },
        ],
      },
      {
        key: "menu",
        label: "Carta",
        sections: [
          {
            title: "Tapas",
            items: [
              {
                name: "Mortadela Pistacchio",
                desc: "Mortadela italiana con pistacho.",
                price: "6,50 €",
              },
              {
                name: "Jamón y manteca",
                desc: "Pan con manteca y jamón por encima.",
                price: "6,50 €",
              },
              {
                name: "Chicharrones de cerdo",
                desc: "Trozos de panceta de cerdo fritos, servidos con guacamole fresco.",
                price: "7,00 €",
              },
              {
                name: "Jamón ibérico y queso",
                desc: "Selección tradicional de jamón y queso españoles.",
                price: "12,00 €",
              },
              {
                name: "Costolette Sugo Penne",
                desc: "Pasta con salsa de tomate y costillas a la parrilla, terminada con queso rallado.",
                price: "14,00 €",
              },
            ],
          },
          {
            title: "Entrantes",
            items: [
              {
                name: "Pulpo a la parrilla",
                desc: "Tentáculos de pulpo a la parrilla, jugosos y sabrosos.",
                price: "14,00 €",
              },
              {
                name: "Mich con mostaza",
                desc: "Salchichas tradicionales de 3 carnes sin piel, a la parrilla. Se sirven con mostaza.",
                price: "9,00 €",
              },
              {
                name: "Alitas de pollo",
                desc: "Alitas de pollo jugosas con salsa y puré de patata.",
                price: "6,50 €",
              },
              {
                name: "Rabo de toro estofado",
                desc: "Cocinado a fuego lento hasta quedar tierno y jugoso, sobre una cama de puré de patata cremoso.",
                price: "16,50 €",
              },
            ],
          },
          {
            title: "Arroz y pasta",
            items: [
              {
                name: "Pasta al pesto",
                desc: "Espaguetis con albahaca aromática, parmesano y frutos secos.",
                price: "12,00 €",
              },
              {
                name: "Pollo a la parrilla",
                desc: "Muslos de pollo asados acompañados de arroz basmati aromático y un toque de hierbas frescas.",
                price: "8,50 €",
              },
            ],
          },
          {
            title: "Pescado y marisco",
            items: [
              {
                name: "Boquerones fritos",
                desc: "Boquerones fritos y dorados, servidos con gajos de limón fresco y alioli.",
                price: "9,50 €",
              },
              {
                name: "Marisco a la parrilla",
                desc: "Langostinos, tentáculos de pulpo tierno y aros de calamar a la parrilla, con hierbas aromáticas y un toque de sal.",
                price: "18,00 €",
              },
              {
                name: "Ensalada de marisco",
                desc: "Ensalada fresca de marisco.",
                price: "16,00 €",
              },
            ],
          },
          {
            title: "Ensaladas",
            items: [
              {
                name: "Ensalada de primavera",
                desc: "Mezcla de verdes, tomates cherry, pepino y cebolla roja, con aguacate y queso feta.",
                price: "6,00 €",
              },
              {
                name: "Ensalada de atún",
                desc: "Mezcla de atún premium, maíz dulce, aceitunas negras y verduras frescas de huerta.",
                price: "9,50 €",
              },
              {
                name: "Ensalada proteica",
                desc: "Hojas frescas de espinaca baby con aguacate, nueces crujientes y maíz dulce, con queso curado.",
                price: "9,50 €",
              },
            ],
          },
          {
            title: "Menú infantil",
            items: [
              {
                name: "Hamburguesa infantil",
                desc: "Mini hamburguesa con patatas fritas.",
                price: "9,50 €",
              },
              {
                name: "Nuggets",
                desc: "Nuggets de pollo con patatas fritas.",
                price: "8,50 €",
              },
              {
                name: "Pizza",
                desc: "Pizza margarita pequeña.",
                price: "7,00 €",
              },
            ],
          },
          {
            title: "Postres y desayuno",
            items: [
              {
                name: "Huevos y tostada",
                desc: "Huevos escalfados y bacon crujiente sobre pan tostado grueso. Acompañado de zumo de naranja natural y café.",
                price: "9,00 €",
              },
              {
                name: "Tortilla española",
                desc: "Tortilla española con verduras frescas de temporada.",
                price: "9,50 €",
              },
              {
                name: "Huevos y espinacas",
                desc: "Huevos sobre espinacas baby salteadas. Con queso parmesano por encima.",
                price: "12,00 €",
              },
              {
                name: "Huevos y polenta",
                desc: "Polenta con dos huevos, virutas de queso curado y pistacho triturado.",
                price: "12,00 €",
              },
              {
                name: "Tortita",
                desc: "Con una bola de helado de vainilla, fresas frescas, arándanos y sirope.",
                price: "5,90 €",
              },
              {
                name: "Churros",
                desc: "Con chocolate y pistacho.",
                price: "6,00 €",
              },
              {
                name: "Helado de chocolate",
                desc: "Helado cremoso servido con una selección de fruta fresca de temporada.",
                price: "6,80 €",
              },
            ],
          },
        ],
      },
      {
        key: "drinks",
        label: "Bebidas",
        sections: [
          {
            title: "Vinos",
            items: [
              {
                name: "Tempranillo",
                desc: "Tinto español clásico. Cuerpo medio, frutos rojos (cereza, ciruela), ligero toque de roble. Fácil de beber, ideal para cualquier ocasión.",
                price: "Copa 4,00 € · Botella 11,50 €",
              },
              {
                name: "Marqués de Cáceres",
                desc: "Rioja icónico. Elegante y equilibrado, con bayas rojas y vainilla de la crianza en roble.",
                price: "Copa 8,50 € · Botella 27,50 €",
              },
              {
                name: "Bar Argentino - Malbec",
                desc: "Malbec argentino. Cuerpo intenso, frutos oscuros (mora, grosella negra), taninos aterciopelados. Potente y suave.",
                price: "Copa 6,00 € · Botella 22,50 €",
              },
              {
                name: "Protos",
                desc: "Peso pesado de la Ribera del Duero. Rico, complejo, con más tiempo de crianza en roble. Fruta oscura, cuero, notas terrosas.",
                price: "Copa 8,50 € · Botella 28,00 €",
              },
              {
                name: "Hito - Ribera Duero",
                desc: "Tinto español premium de una de las mejores regiones de España. Intenso, estructurado, criado en roble. Notas de cereza oscura, tabaco y especias.",
                price: "Copa 7,50 € · Botella 28,00 €",
              },
              {
                name: "Selección del sumiller",
                desc: "La elección rotativa del sumiller — pregunta al camarero por la propuesta del día. Normalmente una joya oculta o un destacado de temporada.",
                price: "Copa 7,00 € · Botella 25,00 €",
              },
              {
                name: "Vino del Norte",
                desc: "Vino más ligero y fresco del País Vasco, con notas minerales y buena acidez.",
                price: "Copa 7,00 € · Botella 25,00 €",
              },
            ],
          },
          {
            title: "Cócteles",
            items: [
              { name: "Mojito", desc: "Ron, menta, lima, azúcar, soda", price: "7,00 €" },
              { name: "Tequila Sunrise", desc: "Tequila, naranja, granadina", price: "7,00 €" },
              { name: "Piña Colada", desc: "Ron, coco, piña", price: "7,00 €" },
              { name: "Vodka limón / naranja", desc: "Vodka, limón o naranja", price: "7,00 €" },
              { name: "Aperol Spritz", desc: "Aperol, Prosecco, soda", price: "7,00 €" },
              { name: "Light Green Aloe Vodka", desc: "Vodka, aloe, lima, soda", price: "7,00 €" },
              { name: "Daiquiri de fresa", desc: "Ron, fresa, lima", price: "7,00 €" },
              { name: "Cuba Libre", desc: "Ron, cola, lima", price: "7,00 €" },
              { name: "Margarita", desc: "Tequila, triple sec, lima", price: "7,00 €" },
              { name: "Gin Tonic", desc: "Ginebra premium, tónica", price: "7,00 €" },
              { name: "Sex on the Beach", desc: "Vodka, albaricoque, naranja", price: "7,00 €" },
              { name: "Whisky cola", desc: "Whisky, cola", price: "7,00 €" },
            ],
          },
          {
            title: "Copas",
            items: [
              { name: "Jack Daniel's", desc: "", price: "4,00 €" },
              { name: "Johnnie Walker Etiqueta Negra", desc: "", price: "5,00 €" },
              { name: "Johnnie Walker Etiqueta Roja", desc: "", price: "3,50 €" },
              { name: "Vodka", desc: "", price: "3,50 €" },
              { name: "Licor", desc: "", price: "3,00 €" },
              { name: "Ron", desc: "", price: "4,00 €" },
            ],
          },
          {
            title: "Cerveza",
            items: [
              { name: "Cerveza de grifo grande", desc: "", price: "3,00 €" },
              { name: "Cerveza de grifo pequeña", desc: "", price: "1,50 €" },
              { name: "Clara", desc: "", price: "3,00 €" },
              { name: "Cerveza sin alcohol", desc: "", price: "3,00 €" },
              { name: "Heineken", desc: "", price: "3,00 €" },
            ],
          },
          {
            title: "Refrescos",
            items: [
              { name: "Agua sin gas", desc: "", price: "2,50 €" },
              { name: "Agua con gas", desc: "", price: "2,50 €" },
              { name: "Coca-Cola Zero", desc: "", price: "2,80 €" },
              { name: "Coca-Cola", desc: "", price: "2,80 €" },
              { name: "Fanta", desc: "", price: "2,80 €" },
              { name: "Sprite", desc: "", price: "2,80 €" },
            ],
          },
          {
            title: "Zumos",
            items: [
              { name: "Zumo de albaricoque", desc: "", price: "3,00 €" },
              { name: "Zumo de naranja", desc: "", price: "3,00 €" },
              { name: "Zumo de piña", desc: "", price: "3,00 €" },
            ],
          },
          {
            title: "Café",
            items: [
              { name: "Latte", desc: "", price: "1,50 €" },
              { name: "Espresso", desc: "", price: "1,50 €" },
              { name: "Capuchino", desc: "", price: "2,00 €" },
              { name: "Macchiato", desc: "", price: "1,50 €" },
              { name: "Latte Macchiato", desc: "", price: "2,00 €" },
            ],
          },
        ],
      },
    ],
    ctaWhatsapp: "Reservar por WhatsApp",
    ctaCall: "Llamar",
    note: "Precios reales de la carta actual del local, en agosto de 2026. Toda la carne de vacuno es de pasto (grass-fed), criada en Canarias.",
  },
};

const en: Dict = {
  htmlLang: "en",
  meta: {
    title: "Light Green Bar & Grill — Argentinian Grill in Golf del Sur, Tenerife",
    description:
      "Light Green Bar & Grill, Golf del Sur (San Blas): Argentinian-style grill with grass-fed Canarian beef, homemade chimichurri and premium cuts. 4.7★ on Google. C. San Blas, Local 4. Open every day 11:00–23:00. Unofficial demo site.",
    ogDescription:
      "Grass-fed Canarian beef grilled over open flame, homemade chimichurri and premium cuts, in the San Blas shopping centre, Golf del Sur.",
  },
  langSwitch: { es: "ES", en: "EN" },
  nav: { whatsapp: "WhatsApp", messenger: "Messenger", menu: "Digital menu" },
  hero: {
    kicker: "Argentinian grill · Golf del Sur",
    titleLine1: "Open flame,",
    titleLine2: "Argentinian",
    titleWarm: "flavour",
    subtitle:
      "Grass-fed Canarian beef, homemade chimichurri and premium cuts, right in the heart of San Blas, Golf del Sur.",
    ratingSuffix: "on Google",
    ctaWhatsapp: "Book on WhatsApp",
    ctaCall: "Call",
    ctaMessenger: "Message us on Messenger",
    ctaMenu: "View digital menu",
    photoCaption: "Grilled meat with chimichurri",
    photoAlt: "Cuts of meat on the grill with fresh chimichurri, over charcoal embers",
  },
  fuego: {
    label: "01 · The fire",
    titlePre: "We cook like ",
    titleWarm: "Argentina",
    para1:
      "Open flame, carefully chosen cuts of grass-fed Canarian beef and a grill that sets the pace of the night. No shortcuts: the chimichurri is homemade and every cut is cooked to order — the charcoal grill fires up from 6 PM.",
    para2:
      "Regulars say the same thing every time: good meat, generous portions, and the odd Saturday with live music.",
    photoCaption: "Tomahawk steak — a real dish from the menu",
    photoAlt: "Grilled tomahawk steak with roasted potatoes and rosemary, real photo of a dish from the restaurant",
  },
  carta: {
    label: "02 · The menu",
    titlePre: "Straight off the ",
    titleWarm: "coals",
    intro: "Full menu available at the venue — ask about today's cuts.",
    categories: [
      {
        title: "T-Bone Steak",
        desc: "Premium bone-in cut, grilled over open flame for maximum juiciness.",
        photo: "/photos/tbone-real.jpg",
        alt: "Sliced T-Bone Steak on the grill, real photo of a dish from the restaurant",
      },
      {
        title: "Homemade chimichurri",
        desc: "The sauce that comes with every cut, made in-house, no shortcuts.",
        photo: "/photos/chimichurri-real.jpg",
        alt: "Argentinian steak with Russian salad and homemade chimichurri, real photo of a dish from the restaurant",
      },
      {
        title: "Porchetta",
        desc: "Traditional herb-rolled pork roast with crispy crackling skin, served with homemade Russian salad.",
        photo: "/photos/porchetta-real.jpg",
        alt: "Roasted porchetta with crispy skin, real photo of a dish from the restaurant",
      },
    ],
    priceNote: "Approx. €20–30 per person",
  },
  qr: {
    label: "03 · Digital menu",
    titlePre: "Scan, choose, ",
    titleWarm: "enjoy",
    para:
      "A QR code on every table opens the full menu on the guest's phone — with photos, always up-to-date prices, and no waiting for someone to bring the paper menu.",
    bullets: [
      "Menu always current, no reprinting.",
      "Works in several languages for tourist guests.",
      "The card design matches the venue's look.",
    ],
    menuPreviewLabel: "What you'd see when you scan — the venue's real menu",
    menuItems: [
      {
        name: "Argentinean steak",
        desc: "Premium beef grilled over open flame, with traditional Russian salad and homemade chimichurri.",
        price: "€22.00",
      },
      {
        name: "Tomahawk steak",
        desc: "Long-bone ribeye grilled, served with golden roasted potatoes and aromatic rosemary.",
        price: "€29.50",
      },
      {
        name: "T-Bone Steak",
        desc: "Premium bone-in steak, seared over an open flame for maximum juiciness.",
        price: "€34.50",
      },
      {
        name: "Grilled vegetables",
        desc: "With aged cheese, pistachio and olive oil. Vegetarian.",
        price: "€12.50",
      },
      {
        name: "Pasta pesto",
        desc: "Spaghetti with aromatic basil, parmesan and pine nuts. Vegetarian.",
        price: "€12.00",
      },
      {
        name: "Light Green Aloe Vodka",
        desc: "Vodka, aloe, lime and soda — the cocktail that shares our name.",
        price: "€7.00",
      },
    ],
    menuNote: "Real prices from the venue's current menu, as of August 2026.",
    cardLabel: "On every table",
    cardBeefTitle: "Grass-fed Canarian beef",
    cardBeefText:
      "Only grass-fed, free-range Canarian beef, no shortcuts — for the best flavour in every cut.",
    cardNote:
      "This message would sit right next to the physical QR code on each table — the QR itself only exists there, not on the website.",
  },
  ambiente: {
    label: "04 · Atmosphere",
    titlePre: "With ",
    titleWarm: "music",
    para:
      "Some nights bring good atmosphere and live music while the meat is finished off. A place to stay a little longer than planned.",
  },
  resenas: {
    label: "05 · What people say",
    ratingLabel: "Average rating on Google",
    para:
      "Local Guides highlight the quality of the meat, generous portions and the atmosphere — a newcomer to the San Blas shopping centre that's already made a name for itself.",
  },
  faq: {
    label: "06 · Frequently asked",
    title: "What people ask most",
    items: [
      {
        q: "Where is Light Green Bar & Grill?",
        a: "In the San Blas shopping centre, Calle San Blas Local 4, Golf del Sur (San Miguel de Abona), Tenerife.",
      },
      {
        q: "What kind of food do they serve?",
        a: "Argentinian-style grill: grass-fed Canarian beef over open flame, homemade chimichurri and premium cuts like the T-Bone. The charcoal grill fires up at 6 PM.",
      },
      {
        q: "What are the opening hours?",
        a: "Every day from 11:00 to 23:00.",
      },
      {
        q: "Can I book a table?",
        a: "Yes, via WhatsApp or by calling +39 351 173 3108.",
      },
      {
        q: "Is there live music?",
        a: "Some nights, yes — guests mention good atmosphere and live music.",
      },
    ],
  },
  reserva: {
    label: "07 · Book your table",
    titlePre: "Book your ",
    titleWarm: "table",
    intro: "Fill in the form and we'll message you on WhatsApp to confirm — that simple.",
    nameLabel: "Name",
    namePlaceholder: "What's your name?",
    dateLabel: "Date",
    timeLabel: "Time",
    peopleLabel: "People",
    messageLabel: "Anything else we should know (optional)",
    messagePlaceholder: "Allergies, high chair, terrace table…",
    submitLabel: "Book on WhatsApp",
    note: "Sending opens WhatsApp with your booking already written — just confirm it.",
  },
  contacto: {
    label: "08 · Find us",
    titlePre: "We're waiting for you in ",
    titleWarm: "San Blas",
    whereLabel: "Where",
    hoursLabel: "Hours",
    hoursValue: "Every day\n11:00–23:00",
    contactLabel: "Contact",
    contactValue: "WhatsApp available",
    ctaWhatsapp: "Message on WhatsApp",
    ctaCall: "Call now",
    ctaMaps: "Get directions",
    ctaMessenger: "Message on Messenger",
  },
  footer: {
    demo: "Demo site — unofficial design proposal",
    webBy: "Website by",
  },
  menuPage: {
    metaTitle: "Digital Menu — Light Green Bar & Grill, Golf del Sur",
    metaDescription:
      "Full digital menu for Light Green Bar & Grill: grass-fed Canarian beef cuts, Wagyu, Brazilian picanha, lamb and more. Grill available from 6 PM.",
    backLabel: "← Back to home",
    kicker: "Digital menu",
    title: "Every cut, ",
    titleWarm: "in detail",
    subtitle:
      "The full Light Green menu, with always up-to-date prices — the same one you'd see scanning the QR code on your table.",
    grillNote: "Grill menu is available starting from 6 PM. Rest of the menu is available all day round.",
    tabs: [
      {
        key: "grill",
        label: "Grill Menu",
        sections: [
          {
            title: "",
            items: [
              {
                name: "T-Bone Steak",
                desc: "Premium bone-in steak, expertly seared over an open flame to lock in the juices.",
                price: "€34.50",
              },
              {
                name: "Argentinean Steak",
                desc: "Premium steak grilled over an open flame. Served with traditional Russian salad and homemade chimichurri sauce.",
                price: "€22.00",
              },
              {
                name: "Beef Tagliata",
                desc: "Sliced and served on a bed of fresh rocket, topped with Grana Padano, cherry tomatoes and a balsamic glaze.",
                price: "€19.50",
              },
              {
                name: "Tenderloin Steak",
                desc: "Grilled sirloin steak.",
                price: "€22.00",
              },
              {
                name: "Lamb Chops",
                desc: "Grilled lamb chops, served with chips.",
                price: "€18.00",
              },
              {
                name: "Wagyu Steak",
                desc: "Served with butter, Grana Padano and roasted potatoes, with chimichurri on the side.",
                price: "€34.90",
              },
              {
                name: "Brazilian Picanha",
                desc: "Brazilian picanha on the sword with cabbage salad and chimichurri.",
                price: "€24.00",
              },
              {
                name: "Tomahawk Steak",
                desc: "A massive, long-bone ribeye grilled. Served with golden roasted potatoes and aromatic rosemary.",
                price: "€29.50",
              },
              {
                name: "Porchetta",
                desc: "Traditional herb-rolled pork roast with crispy crackling skin. Served with homemade Russian salad.",
                price: "€14.00",
              },
              {
                name: "Grilled Vegetables",
                desc: "Grilled vegetables with aged cheese, pistachio and olive oil. Vegetarian.",
                price: "€12.50",
              },
              {
                name: "Chicken Breast",
                desc: "Grilled chicken breast with french fries.",
                price: "€11.00",
              },
            ],
          },
        ],
      },
      {
        key: "menu",
        label: "Menu",
        sections: [
          {
            title: "Tapas",
            items: [
              {
                name: "Mortadela Pistacchio",
                desc: "Italian mortadela with pistachio.",
                price: "€6.50",
              },
              {
                name: "Ham and Lard",
                desc: "Bread with lard and ham on top.",
                price: "€6.50",
              },
              {
                name: "Pork 'Chicharrones'",
                desc: "Fried pork belly chunks served with fresh guacamole.",
                price: "€7.00",
              },
              {
                name: "Iberian Ham & Cheese",
                desc: "Traditional Spanish ham and cheese selection.",
                price: "€12.00",
              },
              {
                name: "Costolette Sugo Penne",
                desc: "Pasta with tomato sauce and grilled ribs, finished with grated cheese.",
                price: "€14.00",
              },
            ],
          },
          {
            title: "Starters",
            items: [
              {
                name: "Grilled Octopus",
                desc: "Grilled octopus tentacles, juicy and flavourful.",
                price: "€14.00",
              },
              {
                name: "Mich with Mustard",
                desc: "Traditional 3-meat skinless grilled sausages. Served with mustard.",
                price: "€9.00",
              },
              {
                name: "Chicken Wings",
                desc: "Juicy chicken wings with sauce and mashed potatoes.",
                price: "€6.50",
              },
              {
                name: "Braised Oxtail",
                desc: "Slow-cooked until tender and juicy, served over a bed of creamy mashed potatoes.",
                price: "€16.50",
              },
            ],
          },
          {
            title: "Rice & Pasta",
            items: [
              {
                name: "Pasta Pesto",
                desc: "Spaghetti with aromatic basil, parmesan, and nuts.",
                price: "€12.00",
              },
              {
                name: "Grilled Chicken",
                desc: "Roasted chicken legs accompanied by aromatic basmati rice and a touch of fresh herbs.",
                price: "€8.50",
              },
            ],
          },
          {
            title: "Fish & Seafood",
            items: [
              {
                name: "Fresh Whitebait",
                desc: "Golden-fried small anchovies served with fresh lemon wedges and garlic mayonnaise.",
                price: "€9.50",
              },
              {
                name: "Grilled Seafood",
                desc: "Grilled king prawns, tender octopus tentacles, and calamari rings with aromatic herbs and a touch of salt.",
                price: "€18.00",
              },
              {
                name: "Seafood Salad",
                desc: "Fresh seafood salad.",
                price: "€16.00",
              },
            ],
          },
          {
            title: "Salad",
            items: [
              {
                name: "Spring Salad",
                desc: "Mix of greens, cherry tomatoes, cucumber, and red onion, tossed avocado and feta cheese.",
                price: "€6.00",
              },
              {
                name: "Tuna Salad",
                desc: "A mix of premium tuna, golden sweet corn, black olives, and fresh garden vegetables.",
                price: "€9.50",
              },
              {
                name: "Protein Salad",
                desc: "Fresh baby spinach leaves with avocado, crunchy walnuts, and sweet corn, topped with aged cheese.",
                price: "€9.50",
              },
            ],
          },
          {
            title: "Kids Menu",
            items: [
              {
                name: "Kids Burger",
                desc: "Mini burger with french fries.",
                price: "€9.50",
              },
              {
                name: "Nuggets",
                desc: "Chicken nuggets with french fries.",
                price: "€8.50",
              },
              {
                name: "Pizza",
                desc: "Small Pizza Margherita.",
                price: "€7.00",
              },
            ],
          },
          {
            title: "Desserts & Breakfast",
            items: [
              {
                name: "Eggs & Toast",
                desc: "Poached eggs and crispy bacon on thick-cut toasted bread. Accompanied by fresh orange juice and coffee.",
                price: "€9.00",
              },
              {
                name: "Spanish Tortilla",
                desc: "Spanish omelet with fresh seasonal vegetables.",
                price: "€9.50",
              },
              {
                name: "Eggs & Spinach",
                desc: "Eggs served over a sautéed baby spinach. Topped with parmesan cheese.",
                price: "€12.00",
              },
              {
                name: "Eggs & Polenta",
                desc: "Polenta topped with two eggs, aged cheese shavings, and crushed pistachios.",
                price: "€12.00",
              },
              {
                name: "Pancake",
                desc: "Topped with a scoop of vanilla ice cream, fresh strawberries, blueberries and syrup.",
                price: "€5.90",
              },
              {
                name: "Churros",
                desc: "Served with chocolate and pistachio.",
                price: "€6.00",
              },
              {
                name: "Ice Cream Chocolate",
                desc: "Creamy ice cream served with a selection of fresh seasonal fruit.",
                price: "€6.80",
              },
            ],
          },
        ],
      },
      {
        key: "drinks",
        label: "Drinks",
        sections: [
          {
            title: "Wines",
            items: [
              {
                name: "Tempranillo",
                desc: "Classic Spanish red. Medium-bodied, red fruits (cherry, plum), light oak touch. Easy drinking, great for all occasions.",
                price: "Glass €4.00 · Bottle €11.50",
              },
              {
                name: "Marqués de Cáceres",
                desc: "Iconic Rioja. Elegant and balanced, red berries, vanilla from oak aging.",
                price: "Glass €8.50 · Bottle €27.50",
              },
              {
                name: "Bar Argentino - Malbec",
                desc: "Argentine Malbec. Full-bodied, dark fruits (blackberry, blackcurrant), velvety tannins. Bold and smooth.",
                price: "Glass €6.00 · Bottle €22.50",
              },
              {
                name: "Protos",
                desc: "Ribera del Duero heavyweight. Rich, complex, aged longer in oak. Dark fruit, leather, earthy notes.",
                price: "Glass €8.50 · Bottle €28.00",
              },
              {
                name: "Hito - Ribera Duero",
                desc: "Premium Spanish red from one of Spain's finest regions. Intense, structured, aged in oak. Notes of dark cherry, tobacco and spice.",
                price: "Glass €7.50 · Bottle €28.00",
              },
              {
                name: "Sommelier's Selection",
                desc: "Sommelier's rotating pick — ask the waiter for today's choice. Typically a hidden gem or seasonal highlight.",
                price: "Glass €7.00 · Bottle €25.00",
              },
              {
                name: "Wine from the North",
                desc: "Fresh, lighter style wine from the Basque country, mineral notes, good acidity.",
                price: "Glass €7.00 · Bottle €25.00",
              },
            ],
          },
          {
            title: "Cocktails",
            items: [
              { name: "Mojito", desc: "Rum, mint, lime, sugar, soda", price: "€7.00" },
              { name: "Tequila Sunrise", desc: "Tequila, orange, grenadine", price: "€7.00" },
              { name: "Piña Colada", desc: "Rum, coconut, pineapple", price: "€7.00" },
              { name: "Vodka Lemon / Orange", desc: "Vodka, lemon or orange", price: "€7.00" },
              { name: "Aperol Spritz", desc: "Aperol, Prosecco, Soda", price: "€7.00" },
              { name: "Light Green Aloe Vodka", desc: "Vodka, aloe, lime, soda", price: "€7.00" },
              { name: "Strawberry Daiquiri", desc: "Rum, strawberry, lime", price: "€7.00" },
              { name: "Cuba Libre", desc: "Rum, cola, lime", price: "€7.00" },
              { name: "Margarita", desc: "Tequila, triple sec, lime", price: "€7.00" },
              { name: "Gin Tonic", desc: "Premium gin, tonic water", price: "€7.00" },
              { name: "Sex on the Beach", desc: "Vodka, apricot, orange", price: "€7.00" },
              { name: "Whiskey Cola", desc: "Whiskey, cola", price: "€7.00" },
            ],
          },
          {
            title: "On the Rocks",
            items: [
              { name: "Jack Daniel's", desc: "", price: "€4.00" },
              { name: "Johnnie Walker Black Label", desc: "", price: "€5.00" },
              { name: "Johnnie Walker Red Label", desc: "", price: "€3.50" },
              { name: "Vodka", desc: "", price: "€3.50" },
              { name: "Liqueur", desc: "", price: "€3.00" },
              { name: "Rum", desc: "", price: "€4.00" },
            ],
          },
          {
            title: "Beer",
            items: [
              { name: "Large Draft Beer", desc: "", price: "€3.00" },
              { name: "Small Draft Beer", desc: "", price: "€1.50" },
              { name: "Shandy", desc: "", price: "€3.00" },
              { name: "Alcohol-Free Beer", desc: "", price: "€3.00" },
              { name: "Heineken", desc: "", price: "€3.00" },
            ],
          },
          {
            title: "Soft Drinks",
            items: [
              { name: "Still Water", desc: "", price: "€2.50" },
              { name: "Sparkling Water", desc: "", price: "€2.50" },
              { name: "Coca Cola Zero", desc: "", price: "€2.80" },
              { name: "Coca Cola", desc: "", price: "€2.80" },
              { name: "Fanta", desc: "", price: "€2.80" },
              { name: "Sprite", desc: "", price: "€2.80" },
            ],
          },
          {
            title: "Juices",
            items: [
              { name: "Apricot Juice", desc: "", price: "€3.00" },
              { name: "Orange Juice", desc: "", price: "€3.00" },
              { name: "Pineapple Juice", desc: "", price: "€3.00" },
            ],
          },
          {
            title: "Coffee",
            items: [
              { name: "Latte", desc: "", price: "€1.50" },
              { name: "Espresso", desc: "", price: "€1.50" },
              { name: "Cappuccino", desc: "", price: "€2.00" },
              { name: "Macchiato", desc: "", price: "€1.50" },
              { name: "Latte Macchiato", desc: "", price: "€2.00" },
            ],
          },
        ],
      },
    ],
    ctaWhatsapp: "Book on WhatsApp",
    ctaCall: "Call",
    note: "Real prices from the venue's current menu, as of August 2026. All beef is grass-fed, raised in the Canary Islands.",
  },
};

export const DICTS: Record<Locale, Dict> = { es, en };
export const LOCALES: Locale[] = ["es", "en"];
