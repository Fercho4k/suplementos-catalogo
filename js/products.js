
const products = [
    {
        id: 2,
        name: "Diet Green",
        category: "termogenicos",
        price: 32.50,
        effectiveness: "alta",
        image: "images/products/Diet-Green.webp",
        shortDescription: "Menos apetito, grasas y peso - Acelera el efecto de la dieta",
        fullDescription: "DIET GREEN: Menos apetito, grasas y peso, formulado para acelerar y potenciar el efecto de la dieta y del movimiento para adelgazar, bajar más kilos y hacerlo más rápidamente, quemar más durante el deporte o el movimiento cotidiano, notar menos apetito para generar menos calorías. El efecto combinado de garcinia cambogia, té verde, quitasona, spirulina, ácido ascórbico, acetrato de Retinol vitamina A, picolinato de cromo maltodextrina soportan efectos fisiológicos excepcionales y apoyan y potencian tu plan dietético.",
        usage: "1 cápsula después del desayuno",
        benefits: [
            "Reduce el apetito significativamente",
            "Acelera la quema de grasas",
            "Potencia el efecto de la dieta",
            "Aumenta la quema durante el ejercicio",
            "Apoya el plan dietético",
            "Ayuda a bajar más kilos rápidamente"
        ],
        warnings: "Si está tomando alguna medicación recetada, no ingiera este producto sin consultar a su médico. Puede interaccionar con los antiarrítmicos, incluida antibióticos y antiinflamatorios. No debe ser administrado a pacientes ancianos y personas debilitadas sin consultar a su médico."
    },
    {
        id: 3,
        name: "Fat Fit Black",
        category: "termogenicos",
        price: 58.75,
        image: "images/products/Fat-Fit-Black.webp",
        fullDescription: "FAT FIT BLACK es un compuesto destinado a personas con dificultades para adelgazar. Además de inhibir el apetito y ayudar en la reeducación alimentaria, proporciona resistencia y energía para la vida diaria. Reduce los antojos de comida y apoya el control de peso, promoviendo una digestión saludable. Actúa como antioxidante y regula los niveles de glucosa en la sangre. El efecto dura más tiempo de saciedad en el cuerpo para quienes ya se adaptaron a Esbelt Fat Fit, te reactiva.",
        ingredients: ["Garcinia cambogia", "Aloe vera", "Sene", "Psyllium", "Berenjena", "Ginseng"],
        usage: "1 cápsula después del desayuno",
        benefits: [
            "Inhibe el apetito naturalmente",
            "Ayuda en la reeducación alimentaria",
            "Proporciona resistencia y energía",
            "Apoya el control de peso",
            "Promueve una digestión saludable",
            "Actúa como antioxidante",
            "Regula los niveles de glucosa"
        ],
        warnings: "No tomar en ayunas. Consulte a su médico antes de usar. No exceder la dosis recomendada.",
        features: ["Alta Potencia", "Control de Apetito", "Fórmula Black"]
    },
    {
        id: 4,
        name: "Fat Fit Detox",
        category: "detox",
        price: 38.99,
        effectiveness: "media",
        image: "images/products/Fat-fit-detox-30.webp",
        fullDescription: "Fat Fit Detox de Esbelt es una fórmula especialmente diseñada para desintoxicar el organismo mientras apoya el proceso de pérdida de peso, eliminando toxinas y mejorando la digestión.",
        usage: "1 cápsula a las 16 pm",
        benefits: [
            "Desintoxica el organismo",
            "Mejora la digestión",
            "Elimina toxinas acumuladas",
            "Mejora la salud intestinal"
        ],
        warnings: "Beber mucha agua durante el uso. Consulte a su médico si tiene problemas digestivos.",
        features: ["Desintoxicante", "Natural", "Mejora Digestión"]
    }
];

    {
        id: 4,

        usage: "1 cápsula a las 16 pm",        usage: "1 cápsula al día después del desayuno",

        benefits: [        benefits: [

            "Desintoxica el organismo",            "Desintoxica el organismo",

            "Mejora la digestión",            "Mejora la digestión",

            "Elimina toxinas acumuladas",            "Elimina toxinas acumuladas",

            "Mejora la salud intestinal"            "Mejora la salud intestinal"

        ],        ],

        warnings: "Beber mucha agua durante el uso. Consulte a su médico si tiene problemas digestivos.",        warnings: "Beber mucha agua durante el uso. Consulte a su médico si tiene problemas digestivos.",

        features: ["Desintoxicante", "Natural", "Mejora Digestión"]        features: ["Desintoxicante", "Natural", "Mejora Digestión"]

    }    },

    // ...agrega el resto de productos aquí...    {

];        id: 5,

        name: "Vitaslim",
        category: "vitaminas",
        price: 30.00,
        effectiveness: "media",
        image: "images/products/Vitaslim.webp",
        fullDescription: "Vitaslim es un suplemento multivitamínico que aporta vitaminas esenciales, mejora la energía diaria y fortalece el sistema inmune.",
        ingredients: ["Multivitaminas", "Minerales esenciales", "Extractos naturales", "Antioxidantes"],
        usage: "Tomar 1 cápsula con el desayuno y 1 con el almuerzo.",
        benefits: [
            "Aporta vitaminas esenciales",
            "Mejora la energía diaria",
            "Fortalece el sistema inmune",
            "Fórmula integral"
        ],
        warnings: "No exceder la dosis recomendada. Consulte a su médico.",
        features: ["Multivitamínico", "Control de Peso", "Energía Diaria"]
    },
    {
        id: 6,
        name: "Té Seca Barriga",
        category: "termogenicos",
        price: 28.50,
        image: "images/products/Té-seca-barriga.webp",
        shortDescription: "Té natural especial para reducir el abdomen",
        ingredients: ["Hierbas digestivas", "Té verde", "Extractos naturales", "Plantas medicinales"],
        usage: "Preparar 1 taza de té 30 minutos después de las comidas principales.",
        benefits: [
            "Ayuda a reducir el abdomen",
            "Mejora la digestión",
            "Reduce la hinchazón"
        ],
        warnings: "No usar en exceso. Consulte a su médico si está embarazada.",
        features: ["Té Natural", "Reduce Abdomen", "Digestivo"]
    },
    {
        id: 7,
        name: "Terere Detox",
        category: "detox",
        price: 25.99,
        effectiveness: "media",
        image: "images/products/Terere-detox.webp",
        shortDescription: "Hierba mate detox para limpiar el organismo",
                usage: "1 cápsula después del desayuno",
        ingredients: ["Yerba mate", "Hierbas detox", "Antioxidantes naturales", "Extractos purificantes"],
        benefits: [
            "Desintoxica naturalmente",
            "Aporta energía sostenida",
            "Rico en antioxidantes",
            "Tradicional y natural",
            "Refrescante"
        ],
        usage: "Preparar como tereré tradicional, 1-2 veces al día.",
        warnings: "Contiene cafeína natural. Moderar el consumo.",
        features: ["Yerba Mate", "Detox Natural", "Energía"]
    },
    {
        id: 8,
        name: "Gel Lipo Reductor",
        category: "topicos",
        price: 35.75,
        effectiveness: "media",
        image: "images/products/Gel-lipo-reductor.webp",
        shortDescription: "Gel reductor para aplicación tópica",
        fullDescription: "Gel Lipo Reductor de Esbelt es una fórmula avanzada para aplicación externa que ayuda a tonificar y reducir medidas en áreas específicas del cuerpo.",
        usage: "1 cápsula después del desayuno",
        benefits: [
            "Ayuda a reducir medidas",
            "Tonifica la piel",
            "Mejora la circulación",
            "Efecto refrescante",
            "Fácil aplicación"
        ],
        usage: "Aplicar en áreas deseadas con masaje circular 2 veces al día.",
        warnings: "Solo para uso externo. Evitar contacto con ojos.",
        features: ["Uso Tópico", "Reductor", "Tonificante"]
    },
    {
        id: 9,
        name: "Gel Dokmos",
        category: "topicos",
        price: 32.90,
        effectiveness: "media",
        image: "images/products/Gel-Dokmos.webp",
        shortDescription: "Gel especializado para tratamiento corporal",
        fullDescription: "Gel Dokmos es una fórmula especializada de Esbelt para el cuidado y tratamiento corporal, diseñado para mejorar la apariencia de la piel y apoyar los tratamientos reductores.",
        ingredients: ["Extractos botánicos", "Principios activos", "Humectantes", "Vitaminas"],
        benefits: [
            "Mejora la textura de la piel",
            "Hidrata profundamente",
            "Apoya tratamientos reductores",
            "Absorción rápida",
            "Resultados visibles"
        ],
        usage: "Aplicar en las áreas deseadas con masaje suave hasta absorción completa.",
        warnings: "Solo para uso externo. Realizar prueba de sensibilidad.",
        features: ["Especializado", "Hidratante", "Absorción Rápida"]
    },
    {
        id: 2,
        name: "Diet Green",
        category: "termogenicos",
        price: 32.50,
        effectiveness: "alta",
        image: "images/products/Diet-Green.webp",
        shortDescription: "Menos apetito, grasas y peso - Acelera el efecto de la dieta",
        fullDescription: "DIET GREEN: Menos apetito, grasas y peso, formulado para acelerar y potenciar el efecto de la dieta y del movimiento para adelgazar, bajar más kilos y hacerlo más rápidamente, quemar más durante el deporte o el movimiento cotidiano, notar menos apetito para generar menos calorías. El efecto combinado de garcinia cambogia, té verde, quitasona, spirulina, ácido ascórbico, acetrato de Retinol vitamina A, picolinato de cromo maltodextrina soportan efectos fisiológicos excepcionales y apoyan y potencian tu plan dietético.",
        benefits: [
            "Reduce el apetito significativamente",
            "Acelera la quema de grasas",
            "Potencia el efecto de la dieta",
            "Aumenta la quema durante el ejercicio",
            "Apoya el plan dietético",
            "Efectos fisiológicos excepcionales",
            "Ayuda a bajar más kilos rápidamente"
        ],
        usage: "1 cápsula después del desayuno",
        warnings: "Si está tomando alguna medicación recetada, no ingiera este producto sin consultar a su médico. Puede interaccionar con los antiarrítmicos, incluida antibióticos y antiinflamatorios. No debe ser administrado a pacientes ancianos y personas debilitadas sin consultar a su médico.",
    },
        {
            id: 3,
            name: "Fat Fit Black",
            category: "termogenicos",
            price: 58.75,
            image: "images/products/Fat-Fit-Black.webp",
            fullDescription: "FAT FIT BLACK es un compuesto destinado a personas con dificultades para adelgazar. Además de inhibir el apetito y ayudar en la reeducación alimentaria, proporciona resistencia y energía para la vida diaria. Reduce los antojos de comida y apoya el control de peso, promoviendo una digestión saludable. Actúa como antioxidante y regula los niveles de glucosa en la sangre. El efecto dura más tiempo de saciedad en el cuerpo para quienes ya se adaptaron a Esbelt Fat Fit, te reactiva.",
            ingredients: ["Garcinia cambogia", "Aloe vera", "Sene", "Psyllium", "Berenjena", "Ginseng"],
            benefits: [
                "Inhibe el apetito naturalmente",
                "Ayuda en la reeducación alimentaria",
                "Proporciona resistencia y energía",
                "Reduce los antojos de comida",
                "Apoya el control de peso",
                "Promueve una digestión saludable",
                "Actúa como antioxidante",
                "Regula los niveles de glucosa",
                "Efecto prolongado de saciedad"
            ],
            usage: "1 cápsula después del desayuno",
            warnings: "No tomar en ayunas. Consulte a su médico antes de usar. No exceder la dosis recomendada.",
            features: ["Alta Potencia", "Control de Apetito", "Fórmula Black"]
        },
    {
        id: 14,
        name: "Fat Fit Black Extra Forte",
        category: "termogenicos",
        price: 65.90,
        effectiveness: "alta",
        image: "images/products/Fat-Fit-Black-Extra-Forte.webp",
        shortDescription: "El mejor producto para adelgazar - Ideal para personas estancadas",
        fullDescription: "¡El mejor producto para adelgazar llegó! Ideal para aquellas personas que ya se adaptaron a otros adelgazantes y sienten estar estancados, llegó Fat Fit Black Extra Forte para romper con todo. ¡Qué esperas para dar aceleramiento a tu dieta! Más saciedad, más concentrado, más disposición para toda actividad del día a día. Sin regímenes de moda ni dietas locas... ¡Nuevo suplemento alimentar llega a Paraguay con el único objetivo de SECARTE en unas pocas semanas!",
        ingredients: ["Compuesto termogénico avanzado", "Extractos concentrados", "Bloqueadores de apetito", "Aceleradores metabólicos"],
        benefits: [
            "Termogénico potente",
            "Acelera el metabolismo",
            "Elimina retención de líquido",
            "Elimina grasa localizada",
            "Inhibe hasta 90% del apetito",
            "Más saciedad y concentración",
            "Mayor disposición diaria",
            "Rompe estancamientos"
        ],
        usage: "Tomar 1 cápsula al día después del desayuno.",
        warnings: "Producto de alta potencia. No exceder la dosis recomendada. Consulte a su médico antes de usar.",
        features: ["Extra Forte", "Alta Potencia", "Anti-Estancamiento"]
    },
    {
        id: 4,
        name: "Fat Fit Detox",
        category: "detox",
        price: 38.99,
        effectiveness: "media",
        image: "images/products/Fat-fit-detox-30.webp",
        shortDescription: "Desintoxicante natural que ayuda a eliminar toxinas",
        fullDescription: "Fat Fit Detox de Esbelt es una fórmula especialmente diseñada para desintoxicar el organismo mientras apoya el proceso de pérdida de peso, eliminando toxinas y mejorando la digestión.",
        ingredients: ["Fibras naturales", "Extractos desintoxicantes", "Probióticos", "Enzimas digestivas"],
        benefits: [
            "Desintoxica el organismo",
            "Mejora la digestión",
            "Elimina toxinas acumuladas",
            "Apoya la pérdida de peso",
            "Mejora la salud intestinal"
        ],
        usage: "1 cápsula a las 16 pm",
        warnings: "Beber mucha agua durante el uso. Consulte a su médico si tiene problemas digestivos.",
        features: ["Desintoxicante", "Natural", "Mejora Digestión"]
    },
    {
        id: 15,
        name: "Diet Green 30",
        category: "termogenicos",
        price: 35.50,
        effectiveness: "alta",
        image: "images/products/diet-green-30.webp",
        shortDescription: "Té verde concentrado presentación 30 cápsulas",
        fullDescription: "Diet Green 30 ofrece un tratamiento completo de un mes con té verde concentrado para acelerar el metabolismo y promover la quema de grasa de manera sostenida.",
        ingredients: ["Extracto de té verde concentrado", "Antioxidantes naturales", "Vitaminas", "Minerales"],
        benefits: [
            "Tratamiento completo de 30 días",
            "Acelera el metabolismo",
            "Rico en antioxidantes",
            "Mejora la energía",
            "Mejor relación precio-cantidad"
        ],
        usage: "Tomar 1 cápsula 30 minutos antes de las comidas principales.",
        warnings: "No usar si está embarazada o amamantando. Consulte a su médico.",
        features: ["30 Cápsulas", "Tratamiento Completo", "Mejor Valor"]
    },
    {
        id: 17,
        name: "Fat Fit B",
        category: "termogenicos",
        price: 42.75,
        effectiveness: "alta",
        image: "images/products/fat-fit-b.webp",
        shortDescription: "Fórmula termogénica especializada Fat Fit B",
        fullDescription: "Fat Fit B es una fórmula especializada de la línea Fat Fit, diseñada para proporcionar un enfoque específico en la quema de grasa con ingredientes selectos.",
        ingredients: ["Extractos termogénicos selectos", "Compuestos quemadores", "Aceleradores metabólicos", "Energizantes naturales"],
        benefits: [
            "Quema de grasa especializada",
            "Acelera el metabolismo",
            "Aumenta la energía",
            "Fórmula selecta",
            "Resultados efectivos"
        ],
        usage: "Tomar 1 cápsula por la mañana con el desayuno.",
        warnings: "Consulte a su médico antes de usar. No exceder la dosis recomendada.",
        features: ["Fórmula B", "Termogénico", "Especializado"]
    },
    {
        id: 18,
        name: "Fat Fit Black 15",
        category: "termogenicos",
        price: 35.90,
        effectiveness: "alta",
        image: "images/products/Fat-fit-black-15.webp",
        shortDescription: "Fat Fit Black presentación 15 cápsulas",
        fullDescription: "Fat Fit Black 15 ofrece la potencia de nuestra fórmula Black en una presentación compacta, ideal para tratamientos cortos o para probar sus efectos.",
        ingredients: ["Garcinia cambogia", "Aloe vera", "Sene", "Psyllium", "Berenjena", "Ginseng"],
        benefits: [
            "Presentación económica",
            "Inhibe el apetito",
            "Acelera el metabolismo",
            "Ideal para probar",
            "Fórmula Black potente"
        ],
        usage: "Tomar 1 cápsula al día después del desayuno hasta las 10 de la mañana.",
        warnings: "No tomar en ayunas. Consulte a su médico antes de usar.",
        features: ["15 Cápsulas", "Fórmula Black", "Económico"]
    },
    {
        id: 19,
        name: "Fat Fit Black 15c",
        category: "termogenicos",
        price: 37.50,
        effectiveness: "alta",
        image: "images/products/Fat-fit-black-15c.webp",
        shortDescription: "Fat Fit Black 15 cápsulas versión concentrada",
        fullDescription: "Fat Fit Black 15c es la versión concentrada de nuestro Fat Fit Black en presentación de 15 cápsulas, con mayor potencia por dosis para resultados más intensos.",
        ingredients: ["Garcinia cambogia concentrada", "Aloe vera", "Sene", "Psyllium", "Berenjena", "Ginseng"],
        benefits: [
            "Fórmula concentrada",
            "Mayor potencia por dosis",
            "Inhibe el apetito intensamente",
            "Resultados más rápidos",
            "Presentación compacta"
        ],
        usage: "Tomar 1 cápsula al día después del desayuno hasta las 10 de la mañana.",
        warnings: "Producto concentrado. No tomar en ayunas. Consulte a su médico.",
        features: ["Concentrado", "15 Cápsulas", "Alta Potencia"]
    },
    {
        id: 20,
        name: "Fat Fit Black Extra Forte 30",
        category: "termogenicos",
        price: 75.90,
        effectiveness: "alta",
        image: "images/products/fat-fit-black-extra-forte-30.webp",
        shortDescription: "Fat Fit Black Extra Forte presentación 30 cápsulas",
        fullDescription: "Fat Fit Black Extra Forte 30 es la presentación completa de nuestro producto más potente, ofreciendo un tratamiento completo de un mes para romper estancamientos y acelerar la pérdida de peso.",
        ingredients: ["Compuesto termogénico avanzado", "Extractos concentrados", "Bloqueadores de apetito", "Aceleradores metabólicos"],
        benefits: [
            "Tratamiento completo de 30 días",
            "Máxima potencia",
            "Rompe estancamientos",
            "Inhibe hasta 90% del apetito",
            "Elimina grasa localizada"
        ],
        usage: "Tomar 1 cápsula al día después del desayuno.",
        warnings: "Producto de máxima potencia. Consulte a su médico antes de usar.",
        features: ["30 Cápsulas", "Extra Forte", "Tratamiento Completo"]
    },
    {
        id: 21,
        name: "Fat Fit Detox 15",
        category: "detox",
        price: 29.90,
        effectiveness: "media",
        image: "images/products/fat-fit-detox-15.webp",
        shortDescription: "Fat Fit Detox presentación 15 cápsulas",
        fullDescription: "Fat Fit Detox 15 ofrece un programa de desintoxicación compacto, ideal para limpiezas rápidas o como introducción a nuestro sistema detox.",
        ingredients: ["Fibras naturales", "Extractos desintoxicantes", "Probióticos", "Enzimas digestivas"],
        benefits: [
            "Desintoxicación rápida",
            "Mejora la digestión",
            "Elimina toxinas",
            "Presentación económica",
            "Ideal para empezar"
        ],
        usage: "Tomar 1-2 cápsulas antes de dormir con abundante agua.",
        warnings: "Beber mucha agua durante el uso. Consulte a su médico.",
        features: ["15 Cápsulas", "Detox Rápido", "Económico"]
    },
    {
        id: 22,
        name: "Combo Fat Fit Black 15-30",
        category: "combos",
        price: 89.90,
        effectiveness: "alta",
        image: "images/products/combo-fat-fit-black-15-30.webp",
        shortDescription: "Combo completo Fat Fit Black 15 + 30 cápsulas",
        fullDescription: "Combo Fat Fit Black 15-30 combina ambas presentaciones para un tratamiento progresivo, comenzando con la presentación de 15 para adaptación y continuando con 30 para resultados sostenidos.",
        ingredients: ["Fat Fit Black 15 cápsulas", "Fat Fit Black 30 cápsulas", "Guía de uso progresivo"],
        benefits: [
            "Tratamiento progresivo completo",
            "Adaptación gradual",
            "Máximo ahorro",
            "Resultados sostenidos",
            "Sistema completo Black"
        ],
        usage: "Comenzar con presentación de 15, luego continuar con 30 según guía incluida.",
        warnings: "Seguir las instrucciones de cada presentación incluida.",
        features: ["Combo Progresivo", "15+30 Cápsulas", "Sistema Completo"]
    },
    {
        id: 23,
        name: "Combo Fat Fit Detox 30-15",
        category: "combos",
        price: 65.90,
        effectiveness: "alta",
        image: "images/products/Combo-fat-fit-detox-30-15.webp",
        shortDescription: "Combo Fat Fit Detox para desintoxicación completa",
        fullDescription: "Combo Fat Fit Detox 30-15 ofrece un sistema completo de desintoxicación, combinando ambas presentaciones para una limpieza profunda y sostenida del organismo.",
        ingredients: ["Fat Fit Detox 30 cápsulas", "Fat Fit Detox 15 cápsulas", "Plan de desintoxicación"],
        benefits: [
            "Desintoxicación completa",
            "Sistema de limpieza profunda",
            "Mejora digestión",
            "Elimina toxinas",
            "Programa estructurado"
        ],
        usage: "Seguir el plan de desintoxicación incluido en el combo.",
        warnings: "Mantener hidratación constante. Consulte a su médico.",
        features: ["Detox Completo", "30+15 Cápsulas", "Plan Incluido"]
    },
    {
        id: 24,
        name: "Combo Té Diet Green",
        category: "combos",
        price: 52.90,
        effectiveness: "media",
        image: "images/products/Combo-té-diet-green.webp",
        shortDescription: "Combo completo de té verde con Diet Green",
        fullDescription: "Combo Té Diet Green combina nuestro té tradicional con las cápsulas Diet Green para un enfoque integral de aceleración metabólica y antioxidantes.",
        ingredients: ["Té Seca Barriga", "Diet Green cápsulas", "Guía de uso combinado"],
        benefits: [
            "Doble acción antioxidante",
            "Acelera metabolismo",
            "Mejora digestión",
            "Sistema integral",
            "Sabor y efectividad"
        ],
        usage: "Alternar entre té y cápsulas según guía incluida.",
        warnings: "No exceder las dosis recomendadas de cada producto.",
        features: ["Té + Cápsulas", "Doble Acción", "Sistema Integral"]
    },
    {
        id: 25,
        name: "Combo Té Fat Fit Black",
        category: "combos",
        price: 78.50,
        effectiveness: "alta",
        image: "images/products/Combo-Té-Fat-fit-black.webp",
        shortDescription: "Combo potente: Té + Fat Fit Black",
        fullDescription: "Combo Té Fat Fit Black une la potencia de nuestro Fat Fit Black con el té natural para crear un sistema completo de control de peso y desintoxicación.",
        ingredients: ["Té Seca Barriga", "Fat Fit Black cápsulas", "Plan de uso coordinado"],
        benefits: [
            "Sistema completo de control",
            "Potencia máxima",
            "Desintoxica y quema",
            "Control de apetito",
            "Resultados acelerados"
        ],
        usage: "Seguir plan de uso coordinado incluido en el combo.",
        warnings: "Combinar según instrucciones. No tomar Fat Fit Black en ayunas.",
        features: ["Té + Black", "Máxima Potencia", "Sistema Completo"]
    },
    {
        id: 26,
        name: "Combo Extra Forte Detox",
        category: "combos",
        price: 72.90,
        effectiveness: "alta",
        image: "images/products/combo-extraforte-detox.webp",
        shortDescription: "Combo potente Extra Forte con Detox",
        fullDescription: "Combo Extra Forte Detox combina la potencia máxima del Fat Fit Black Extra Forte con el sistema de desintoxicación Detox para resultados extraordinarios en pérdida de peso y limpieza corporal.",
        ingredients: ["Fat Fit Black Extra Forte", "Fat Fit Detox", "Plan de uso coordinado"],
        benefits: [
            "Potencia máxima para quemar grasa",
            "Desintoxicación profunda",
            "Limpieza completa del organismo",
            "Acelera resultados",
            "Sistema dual ultra efectivo"
        ],
        usage: "Seguir plan coordinado: Detox por las mañanas, Extra Forte antes del ejercicio.",
        warnings: "No combinar en la misma toma. Mantener 4 horas entre productos.",
        features: ["Extra Forte + Detox", "Potencia Máxima", "Sistema Dual"]
    },
    {
        id: 27,
        name: "Combo Fat Fit Detox + Diet Green",
        category: "combos",
        price: 68.50,
        effectiveness: "alta",
        image: "images/products/combo-fatfit-detox-dietgreen.webp",
        shortDescription: "Combo completo: Fat Fit Detox + Diet Green",
        fullDescription: "Combo Fat Fit Detox + Diet Green ofrece un sistema integral que combina la desintoxicación efectiva con el control de apetito y aceleración metabólica para resultados completos.",
        ingredients: ["Fat Fit Detox", "Diet Green", "Guía de uso integral"],
        benefits: [
            "Desintoxicación + control de apetito",
            "Acelera el metabolismo",
            "Limpia y nutre el organismo",
            "Reduce ansiedad por comer",
            "Sistema completo 360°"
        ],
        usage: "Diet Green en ayunas, Fat Fit Detox después del almuerzo según guía.",
        warnings: "Mantener hidratación constante. Espaciar tomas 6 horas.",
        features: ["Detox + Diet", "Sistema 360°", "Control Completo"]
    },
    {
        id: 28,
        name: "Combo Fat Fit Black + Detox",
        category: "combos",
        price: 75.90,
        effectiveness: "alta",
        image: "images/products/combo-fatfitblack-detox.webp",
        shortDescription: "Combo poderoso: Fat Fit Black + Detox",
        fullDescription: "Combo Fat Fit Black + Detox une la potencia termogénica del Fat Fit Black con la limpieza profunda del Detox para crear un sistema completo de transformación corporal.",
        ingredients: ["Fat Fit Black", "Fat Fit Detox", "Plan de transformación corporal"],
        benefits: [
            "Quema grasa + desintoxica",
            "Transformación corporal completa",
            "Acelera metabolismo",
            "Limpia toxinas acumuladas",
            "Resultados visibles rápidos"
        ],
        usage: "Fat Fit Black pre-ejercicio, Detox en ayunas según plan incluido.",
        warnings: "No tomar Fat Fit Black en ayunas. Espaciar tomas mínimo 4 horas.",
        features: ["Black + Detox", "Transformación", "Resultados Rápidos"]
    }
];
