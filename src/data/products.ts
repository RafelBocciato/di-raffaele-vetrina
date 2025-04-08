
import { ProductType } from "@/types/product";

export const productData: ProductType[] = [
  {
    id: 1,
    name: "Uova fresche biologiche",
    category: "Uova",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    shortDescription: "Uova fresche biologiche dalla nostra fattoria",
    description: "Le nostre uova biologiche provengono da galline allevate all'aperto, nutrite con mangimi naturali e nel rispetto del loro benessere. Ogni uovo è controllato e garantito per freschezza e qualità.",
    details: [
      "Da galline allevate a terra",
      "Alimentazione biologica e naturale",
      "Raccolte quotidianamente",
      "Confezioni da 6, 10 o 30 uova",
      "Categoria A - Extra fresche"
    ]
  },
  {
    id: 2,
    name: "Pollo ruspante intero",
    category: "Pollame",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    gallery: [
      "https://images.unsplash.com/photo-1490713230272-bf236b61ad50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578861256457-dfb287546325?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    shortDescription: "Pollo allevato a terra, nutrito con mangimi selezionati",
    description: "Il nostro pollo ruspante è allevato con metodi tradizionali, con ampi spazi all'aperto e alimentazione controllata di alta qualità. La carne è tenera e saporita, ideale per arrosti e ricette tradizionali.",
    details: [
      "Allevato all'aperto",
      "Alimentazione naturale senza OGM",
      "Peso medio: 2-3 kg",
      "Macellazione tracciata",
      "Consegna refrigerata garantita"
    ]
  },
  {
    id: 3,
    name: "Mangime equilibrato per galline ovaiole",
    category: "Mangimi",
    image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1536146021566-627ce3c4d813?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    shortDescription: "Mangime completo per galline ovaiole con cereali e minerali",
    description: "Formulato appositamente per garantire alle galline ovaiole tutti i nutrienti necessari per una produzione ottimale di uova. Contiene una miscela di cereali, calcio e altri minerali essenziali.",
    details: [
      "Miscela di cereali selezionati",
      "Arricchito con calcio per gusci resistenti",
      "Vitamina D per l'assorbimento dei minerali",
      "Disponibile in sacchi da 5kg, 10kg e 25kg",
      "Produzione italiana garantita"
    ]
  },
  // Aggiungiamo altri prodotti per riempire la griglia
  {
    id: 4,
    name: "Tacchino da allevamento naturale",
    category: "Pollame",
    image: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Tacchino allevato secondo metodi tradizionali",
    description: "I nostri tacchini sono allevati in ampi spazi, con alimentazione naturale e senza trattamenti intensivi. La carne è magra, saporita e versatile in cucina.",
    details: [
      "Allevato con metodi tradizionali",
      "Alimentazione naturale",
      "Peso medio: 4-7 kg",
      "Ottima fonte di proteine magre"
    ]
  },
  {
    id: 5,
    name: "Uova di quaglia fresche",
    category: "Uova",
    image: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Piccole uova di quaglia, ricche di nutrienti",
    description: "Le uova di quaglia sono piccole ma estremamente nutrienti, con un sapore delicato. Perfette per antipasti gourmet, insalate e preparazioni raffinate.",
    details: [
      "Confezionate in vassoi da 18 unità",
      "Ricche di proteine e minerali",
      "Guscio decorativo naturale",
      "Ideali per ricette gourmet"
    ]
  },
  // Aggiungo altri 20 prodotti per raggiungere i 25 richiesti
  {
    id: 6,
    name: "Gallina ovaiola livornese",
    category: "Animali vivi",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Gallina di razza livornese per produzione di uova",
    description: "La gallina livornese è famosa per la sua elevata produzione di uova a guscio bianco. Robusta e adattabile, è perfetta per chi desidera iniziare un piccolo allevamento familiare.",
    details: [
      "Età: 4-6 mesi, pronta per la deposizione",
      "Produzione media: 280-300 uova all'anno",
      "Ottima rusticità e resistenza",
      "Alimentazione semplice e poco esigente"
    ]
  },
  {
    id: 7,
    name: "Anatra muschiata",
    category: "Animali vivi",
    image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Anatra muschiata per allevamento domestico",
    description: "L'anatra muschiata è una razza rustica e tranquilla, adatta anche a piccoli spazi. Si distingue per la carne saporita e magra, particolarmente apprezzata in gastronomia.",
    details: [
      "Esemplari giovani di 2-3 mesi",
      "Facile da allevare anche per principianti",
      "Necessita di uno specchio d'acqua",
      "Alimentazione onnivora e poco esigente"
    ]
  },
  {
    id: 8,
    name: "Mangime per pulcini",
    category: "Mangimi",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Mangime specifico per pulcini in crescita",
    description: "Formulazione specifica per i primi mesi di vita dei pulcini, arricchita con proteine, vitamine e minerali necessari per una crescita sana e un corretto sviluppo.",
    details: [
      "Formulazione sbriciolata facile da beccare",
      "Alta percentuale proteica (20-22%)",
      "Arricchito con vitamine del gruppo B",
      "Disponibile in sacchi da 5kg e 10kg"
    ]
  },
  {
    id: 9,
    name: "Abbeveratoio automatico per galline",
    category: "Accessori",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Abbeveratoio con sistema antigocciolamento",
    description: "Abbeveratoio pratico e igienico con sistema antigocciolamento che garantisce acqua sempre pulita e fresca. Facile da riempire e pulire, è ideale per piccoli allevamenti.",
    details: [
      "Capacità: 5 litri",
      "Sistema antigocciolamento brevettato",
      "Materiale plastico resistente ai raggi UV",
      "Base stabile anti-ribaltamento",
      "Facile da smontare e pulire"
    ]
  },
  {
    id: 10,
    name: "Mangiatoia automatica per polli",
    category: "Accessori",
    image: "https://images.unsplash.com/photo-1501286353178-1ec871bba814?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Mangiatoia a tramoggia anti-spreco",
    description: "Mangiatoia automatica a tramoggia che riduce lo spreco di mangime e mantiene il cibo sempre pulito. Il design studiato impedisce ai volatili di razzolare nel mangime.",
    details: [
      "Capacità: 12kg di mangime",
      "Sistema anti-spreco brevettato",
      "Protezione dalla pioggia integrata",
      "Posizionamento a terra o appendibile",
      "Facile da ricaricare e pulire"
    ]
  },
  {
    id: 11,
    name: "Uova di oca",
    category: "Uova",
    image: "https://images.unsplash.com/photo-1533088372340-cd876a7a75d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Grandi uova di oca per preparazioni speciali",
    description: "Le uova di oca sono particolarmente grandi e dal sapore intenso. Perfette per preparazioni dolci e salate che richiedono un gusto ricco e deciso.",
    details: [
      "Peso medio: 150-200g per uovo",
      "Vendute singolarmente o in confezioni da 4",
      "Guscio particolarmente resistente",
      "Ideali per dolci e paste fresche"
    ]
  },
  {
    id: 12,
    name: "Gallo ornamentale Phoenix",
    category: "Animali vivi",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Gallo di razza Phoenix dall'aspetto elegante",
    description: "Il gallo Phoenix è una razza ornamentale giapponese caratterizzata dalle lunghe penne della coda che possono raggiungere anche 1 metro di lunghezza. È un animale dall'aspetto elegante, perfetto per abbellire giardini e fattorie.",
    details: [
      "Età: 6-8 mesi",
      "Piumaggio nero lucente con riflessi verdi",
      "Necessita di spazio per esprimere la bellezza della coda",
      "Carattere vivace ma non aggressivo"
    ]
  },
  {
    id: 13,
    name: "Mix di cereali per galline",
    category: "Mangimi",
    image: "https://images.unsplash.com/photo-1585065785035-0f1cf4075375?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Mix di cereali e semi per stimolare la deposizione",
    description: "Una miscela equilibrata di cereali, semi e legumi studiata per stimolare naturalmente la deposizione delle uova e mantenere le galline in salute anche nei mesi invernali.",
    details: [
      "Contiene: mais, frumento, avena, semi di girasole",
      "Arricchito con calcio e conchiglie tritate",
      "Disponibile in sacchi da 5kg e 20kg",
      "Ideale come integrazione al pascolo"
    ]
  },
  {
    id: 14,
    name: "Coniglio nano ariete",
    category: "Animali vivi",
    image: "https://images.unsplash.com/photo-1516632664305-eda5d6a5bb99?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Coniglio nano dalle orecchie pendenti",
    description: "Il coniglio nano ariete è una razza caratterizzata dalle orecchie pendenti e dal corpo compatto. Docile e affettuoso, è perfetto come animale da compagnia anche in appartamento.",
    details: [
      "Età: 2-4 mesi",
      "Peso da adulto: 1.5-2kg",
      "Varietà di colori disponibili",
      "Carattere dolce e socievole",
      "Facilmente addestrabile all'uso della lettiera"
    ]
  },
  {
    id: 15,
    name: "Petto di pollo a fette",
    category: "Carni lavorate",
    image: "https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Fette sottili di petto di pollo pronte da cucinare",
    description: "Fette di petto di pollo tagliate a mano, di spessore uniforme, pronte per essere cucinate. Carne magra e tenera, ideale per piatti veloci e leggeri.",
    details: [
      "Confezioni da 500g o 1kg",
      "Spessore fette: circa 5mm",
      "Confezionate sottovuoto",
      "Da consumare entro 5 giorni dall'apertura",
      "Pollo allevato a terra senza antibiotici"
    ]
  },
  {
    id: 16,
    name: "Incubatrice automatica 24 uova",
    category: "Attrezzature",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Incubatrice con controllo automatico di temperatura e umidità",
    description: "Incubatrice professionale con capacità di 24 uova di gallina (o equivalente di altre specie), dotata di controllo digitale della temperatura e dell'umidità, rotazione automatica delle uova e speratura integrata.",
    details: [
      "Capacità: 24 uova di gallina",
      "Display digitale con lettura temperatura e umidità",
      "Rotazione automatica programmabile",
      "Sistema di allarme per variazioni di temperatura",
      "Finestra di ispezione trasparente"
    ]
  },
  {
    id: 17,
    name: "Pollaio prefabbricato mobile",
    category: "Attrezzature",
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Pollaio mobile su ruote per 6-8 galline",
    description: "Pollaio mobile in legno trattato per esterni, dotato di ruote per lo spostamento. Include zona notte rialzata con posatoi e cassette nido, e recinto esterno protetto. Ideale per chi vuole spostare periodicamente il pollaio per rinnovare il terreno di pascolo.",
    details: [
      "Dimensioni: 200x100x120 cm",
      "Capacità: 6-8 galline",
      "Legno di pino trattato per esterni",
      "4 cassette nido integrate",
      "Tetto apribile per facile pulizia",
      "Ruote con sistema di bloccaggio"
    ]
  },
  {
    id: 18,
    name: "Conigliera modulare",
    category: "Attrezzature",
    image: "https://images.unsplash.com/photo-1501983664595-2fa7c558d60d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Conigliera modulare a 3 scomparti",
    description: "Conigliera professionale a 3 scomparti indipendenti, realizzata in metallo zincato e plastica alimentare. Dotata di sistema di pulizia rapido e mangiatoie/abbeveratoi per ogni scomparto.",
    details: [
      "3 scomparti di 70x50x45 cm ciascuno",
      "Fondo a griglia estraibile per pulizia rapida",
      "Scaffalatura su ruote per facile spostamento",
      "Mangiatoie e abbeveratoi inclusi per ogni scomparto",
      "Nidi estraibili opzionali"
    ]
  },
  {
    id: 19,
    name: "Tacchino affumicato a fette",
    category: "Carni lavorate",
    image: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Fette di petto di tacchino affumicato naturalmente",
    description: "Petto di tacchino affumicato con legno di faggio, tagliato a fette sottili. Lavorazione artigianale con solo sale marino e spezie naturali, senza conservanti artificiali.",
    details: [
      "Confezioni da 150g",
      "Affumicatura naturale con legno di faggio",
      "Solo 2% di grassi",
      "Senza glutine, lattosio e conservanti",
      "Confezionato in atmosfera protettiva"
    ]
  },
  {
    id: 20,
    name: "Integratore vitaminico per pollame",
    category: "Mangimi",
    image: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Integratore liquido multivitaminico per acqua potabile",
    description: "Integratore vitaminico completo da diluire nell'acqua potabile, studiato per rafforzare il sistema immunitario del pollame e favorire la produzione di uova, particolarmente utile nei periodi di stress o cambi stagionali.",
    details: [
      "Flacone da 1 litro (concentrato)",
      "Contiene vitamine A, D3, E e del gruppo B",
      "Con aminoacidi essenziali e oligoelementi",
      "Diluizione: 5ml per 10 litri d'acqua",
      "Utilizzo consigliato: 5 giorni al mese"
    ]
  },
  {
    id: 21,
    name: "Tuta da apicoltore professionale",
    category: "Attrezzature",
    image: "https://images.unsplash.com/photo-1609609830354-8f615d61f8ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Tuta completa per apicoltura con maschera integrata",
    description: "Tuta professionale per apicoltura in cotone spesso e traspirante, con maschera a cappuccio e visiera in rete metallica. Offre protezione completa durante le operazioni con le api.",
    details: [
      "Disponibile in taglie dalla S alla XXL",
      "100% cotone rinforzato nei punti critici",
      "Elastici doppi su polsi e caviglie",
      "Maschera con visiera in rete metallica, rimovibile",
      "Cerniera rinforzata con doppia protezione"
    ]
  },
  {
    id: 22,
    name: "Arnia completa 10 telaini",
    category: "Attrezzature",
    image: "https://images.unsplash.com/photo-1568454537842-d933259bb258?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Arnia completa Dadant-Blatt pronta all'uso",
    description: "Arnia Dadant-Blatt completa di 10 telaini, realizzata in legno di abete trattato per esterni. Include nido, melario, coprifavo, tetto in lamiera zincata e telaini con fogli cerei.",
    details: [
      "Arnia standard Dadant-Blatt",
      "Legno di abete essiccato trattato antimuffa",
      "10 telaini da nido con foglio cereo",
      "10 telaini da melario",
      "Fondo antivarroa a rete",
      "Tetto in lamiera zincata coibentato"
    ]
  },
  {
    id: 23,
    name: "Uova di anatra",
    category: "Uova",
    image: "https://images.unsplash.com/photo-1590007514531-d53ebcd96c41?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Uova fresche di anatra, ricche e saporite",
    description: "Le uova di anatra sono più grandi delle uova di gallina e hanno un sapore più ricco e un tuorlo più cremoso. Perfette per ricette di dolci e preparazioni gourmet come la pasta all'uovo fresca.",
    details: [
      "Confezioni da 6 uova",
      "Guscio bianco-verdastro naturale",
      "Tuorlo grande e molto cremoso",
      "Ideali per dolci e pasta fresca",
      "Raccolte giornalmente"
    ]
  },
  {
    id: 24,
    name: "Gabbia da trasporto per pollame",
    category: "Accessori",
    image: "https://images.unsplash.com/photo-1598449426314-8b02579ed8ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Gabbia pieghevole per il trasporto di pollame",
    description: "Gabbia in metallo zincato, pieghevole e leggera, ideale per il trasporto di pollame in sicurezza. Dotata di maniglia per il trasporto e sportello superiore per facile accesso.",
    details: [
      "Dimensioni: 80x40x30 cm",
      "Capacità: 4-6 galline o equivalente",
      "Completamente pieghevole quando non in uso",
      "Porta con doppio sistema di chiusura",
      "Fondo estraibile per facile pulizia"
    ]
  },
  {
    id: 25,
    name: "Pulcini di gallina ovaiola",
    category: "Animali vivi",
    image: "https://images.unsplash.com/photo-1558272726-23d8732a1d5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Pulcini di un giorno di razze ovaiole selezionate",
    description: "Pulcini di un giorno di razze selezionate per l'alta produzione di uova (Livornese, Rhode Island, Sussex). Vaccinati e sessati, con garanzia di almeno 90% di femmine nel lotto.",
    details: [
      "Età: 1 giorno",
      "Minimo ordine: 10 pulcini",
      "Razze disponibili: Livornese, Rhode Island, Sussex",
      "Vaccinati contro le principali malattie",
      "Sessati con garanzia >90% femmine",
      "Guida all'allevamento inclusa"
    ]
  }
];
