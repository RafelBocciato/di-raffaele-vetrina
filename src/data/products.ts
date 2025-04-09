
import { ProductType } from "@/types/product";

export const productData: ProductType[] = [
  {
    id: 1,
    name: "Nodini di tacchino",
    category: "Carni lavorate",
    image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    shortDescription: "Morbidi, gustosi e pronti per ogni tipo di cottura",
    description: "Morbidi, gustosi e pronti per ogni tipo di cottura. I nostri nodini di tacchino sono ideali per una cucina veloce ma ricca di sapore, perfetti in padella o al forno.",
    details: [
      "Carne magra e tenera",
      "Taglio versatile per molte ricette",
      "Ottimi in padella o al forno",
      "Pronti in pochi minuti",
      "Ideali per piatti veloci e saporiti"
    ]
  },
  {
    id: 2,
    name: "Involtini di pollo con e senza pancetta",
    category: "Carni lavorate",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
    gallery: [
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518492104633-130d0cc84637?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    shortDescription: "Realizzati artigianalmente con carni selezionate",
    description: "Realizzati artigianalmente con carni selezionate, disponibili nella versione classica o con pancetta per un tocco in più. Ideali per secondi piatti sfiziosi e ricchi di gusto.",
    details: [
      "Realizzati a mano",
      "Disponibili con o senza pancetta",
      "Carni selezionate di prima qualità",
      "Perfetti al forno o in padella",
      "Ideali per secondi piatti sfiziosi"
    ]
  },
  {
    id: 3,
    name: "Sovracosce di pollo",
    category: "Pollame",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    shortDescription: "Un taglio succoso, perfetto per arrosti e grigliate",
    description: "Un taglio succoso, perfetto per arrosti, grigliate o cotture lente. Le nostre sovracosce garantiscono morbidezza e sapore in ogni preparazione.",
    details: [
      "Tagli freschi selezionati",
      "Perfette per arrosti e grigliate",
      "Ideali per cotture lente",
      "Sapore ricco e autentico",
      "Grande resa in cottura"
    ]
  },
  {
    id: 4,
    name: "Fuselli di pollo",
    category: "Pollame",
    image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Pratici e amati da tutti, perfetti per ogni cottura",
    description: "Pratici e amati da tutti, i fuselli di pollo sono perfetti per il forno o la friggitrice. Ottima resa, grande sapore e versatilità assicurata.",
    details: [
      "Taglio classico e versatile",
      "Ottima resa in cottura",
      "Ideali per forno o friggitrice",
      "Amati da grandi e piccini",
      "Facili e veloci da cucinare"
    ]
  },
  {
    id: 5,
    name: "Gallina paesana",
    category: "Pollame",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Genuina, saporita e ideale per i brodi fatti in casa",
    description: "Genuina, saporita e ideale per i brodi fatti in casa o piatti della tradizione. La gallina paesana richiama il gusto autentico di una volta.",
    details: [
      "Ideale per brodi saporiti",
      "Perfetta per ricette tradizionali",
      "Sapore autentico di una volta",
      "Carni ricche e gustose",
      "Ottima per zuppe e minestre"
    ]
  },
  {
    id: 6,
    name: "Salsiccia e cervellata di tacchino",
    category: "Carni lavorate",
    image: "https://images.unsplash.com/photo-1594221708779-94832f4320d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Combinazione equilibrata tra leggerezza e gusto",
    description: "Una combinazione equilibrata tra leggerezza e gusto. Perfette per chi cerca una salsiccia avicola dal sapore pieno ma più leggera.",
    details: [
      "Alternative più leggere alla salsiccia tradizionale",
      "Sapore pieno e autentico",
      "Perfette alla griglia o in padella",
      "Ideali per chi cerca un'alimentazione più leggera",
      "Versatili in cucina"
    ]
  },
  {
    id: 7,
    name: "Spiedino di tacchino",
    category: "Carni lavorate",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Pronti da cuocere, ideali per grigliate e barbecue",
    description: "Pronti da cuocere, i nostri spiedini di tacchino sono l'ideale per grigliate, padella o barbecue. Teneri, gustosi e comodi da preparare.",
    details: [
      "Pronti per la cottura",
      "Ideali per grigliate e barbecue",
      "Teneri e saporiti",
      "Comodi e veloci da preparare",
      "Perfetti per cene estive"
    ]
  },
  {
    id: 8,
    name: "Bocconcini di pollo",
    category: "Carni lavorate",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Teneri cubetti di carne bianca per ricette veloci",
    description: "Teneri cubetti di carne bianca, perfetti per ricette veloci e leggere. Ottimi in padella, al curry, con verdure o per finger food.",
    details: [
      "Taglio pronto all'uso",
      "Ideali per ricette veloci",
      "Ottimi con salse e spezie",
      "Perfetti per finger food",
      "Cottura rapida garantita"
    ]
  },
  {
    id: 9,
    name: "Fesa di tacchino",
    category: "Pollame",
    image: "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Taglio magro e delicato per una dieta equilibrata",
    description: "Taglio magro e delicato, ideale per chi segue una dieta equilibrata senza rinunciare al gusto. Perfetta per arrosti, scaloppine e cotture leggere.",
    details: [
      "Carne magra e proteica",
      "Bassissimo contenuto di grassi",
      "Ideale per diete ipocaloriche",
      "Ottima per scaloppine e fettine",
      "Versatile in cucina"
    ]
  },
  {
    id: 10,
    name: "Cosce di tacchino",
    category: "Pollame",
    image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Ricche e saporite, ideali per piatti rustici",
    description: "Ricche e saporite, ideali per piatti rustici e sostanziosi. Le cosce di tacchino rendono al meglio con cotture lente e marinature speziate.",
    details: [
      "Carni saporite e succose",
      "Ideali per cotture lente",
      "Perfette con marinature aromatiche",
      "Ottime al forno con patate",
      "Rendono al meglio con cotture a bassa temperatura"
    ]
  },
  {
    id: 11,
    name: "Anchette di pollo",
    category: "Pollame",
    image: "https://images.unsplash.com/photo-1509482560494-4126f8225994?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Taglio gustoso e compatto dal sapore deciso",
    description: "Taglio gustoso e compatto, perfetto per ricette dal sapore deciso. Le anchette sono ottime alla griglia, al forno o stufate.",
    details: [
      "Tagli saporiti e compatti",
      "Ottime alla griglia o al forno",
      "Ideali per spuntini sfiziosi",
      "Perfette per aperitivi",
      "Si abbinano bene a salse piccanti"
    ]
  },
  {
    id: 12,
    name: "Fegatini, durelli e cuoricini di pollo",
    category: "Frattaglie",
    image: "https://images.unsplash.com/photo-1560525821-d5615ef80c69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Il meglio della tradizione contadina",
    description: "Il meglio della tradizione contadina. Queste frattaglie selezionate sono ideali per ricette rustiche e saporite, come spezzatini, ragù o soffritti.",
    details: [
      "Selezionate e pulite accuratamente",
      "Ricche di nutrienti e ferro",
      "Ideali per ragù tradizionali",
      "Perfette per spezzatini rustici",
      "Ottime anche per paté e crostini"
    ]
  },
  {
    id: 13,
    name: "Arrosticini di pollo",
    category: "Carni lavorate",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Piccoli spiedini gustosi, ideali per aperitivi",
    description: "Piccoli spiedini gustosi e pratici, perfetti per aperitivi, barbecue o cene veloci. Un prodotto sfizioso pronto da cuocere in pochi minuti.",
    details: [
      "Formato piccolo e pratico",
      "Ideali per aperitivi e buffet",
      "Ottimi alla brace o in padella",
      "Pronti in pochissimi minuti",
      "Perfetti per cene informali"
    ]
  },
  {
    id: 14,
    name: "Cosce di pollo",
    category: "Pollame",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Tenere, succose e versatili, il classico per eccellenza",
    description: "Il classico per eccellenza. Tenere, succose e versatili, si prestano a infinite preparazioni: al forno, in padella o alla brace.",
    details: [
      "Il taglio più versatile e amato",
      "Ottime al forno con patate",
      "Ideali anche fritte o alla griglia",
      "Succose e saporite",
      "Perfette per pranzi in famiglia"
    ]
  },
  {
    id: 15,
    name: "Bocconcini di tacchino",
    category: "Carni lavorate",
    image: "https://images.unsplash.com/photo-1604491580216-8afee7b6293d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Leggeri e delicati, ideali per piatti sani",
    description: "Leggeri e delicati, i bocconcini di tacchino sono ideali per piatti sani e nutrienti. Ottimi per cucine leggere, ricette etniche o insalate calde.",
    details: [
      "Taglio magro e delicato",
      "Perfetti per diete equilibrate",
      "Versatili in cucina",
      "Ottimi per insalate e piatti freddi",
      "Pronti in pochi minuti"
    ]
  },
  {
    id: 16,
    name: "Rollé di tacchino",
    category: "Carni lavorate",
    image: "https://images.unsplash.com/photo-1624616075928-9016c127da48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDescription: "Un secondo piatto raffinato, già pronto da cuocere",
    description: "Un secondo piatto raffinato, già pronto da cuocere. Il nostro rollé di tacchino è farcito e legato a mano, per un risultato tenero, gustoso e scenografico.",
    details: [
      "Preparato e legato a mano",
      "Farcito con ingredienti selezionati",
      "Perfetto per occasioni speciali",
      "Ottimo affettato freddo",
      "Pronto da cuocere"
    ]
  }
];
