// ==========================================
// ARQUIVO GESTOR DE TRÁFEGO E CONFIG. GERAIS
// ==========================================

const CONFIG = {
    // 1. DADOS DA EMPRESA E ATENDIMENTO
    empresa: {
        nome1: "ASSOALHOS",
        nome2: "CLASSE A", // Aparece em destaque (com a cor primária)
        whatsapp: "5511943893777"
    },

    // 2. OPÇÕES DE PISOS E PREÇOS (O Select será populado sozinho no HTML)
    pisos: [
        { categoria: "Piso Vinílico", nome: "Vinílico Colado", preco: 69.00 },
        { categoria: "Piso Vinílico", nome: "Vinílico Click",  preco: 155.00 },
        { categoria: "Piso Laminado", nome: "Laminado Click",         preco: 72.00 }
    ],

    // 3. OPÇÕES DE PISO ATUAL (Select 1)
    opcoesPisoAtual: [
        { valor: "Contrapiso", texto: "Contrapiso (Cimento)" },
        { valor: "Cerâmica",   texto: "Cerâmica / Porcelanato" },
        { valor: "Madeira",    texto: "Madeira / Taco" },
        { valor: "Outro",      texto: "Outro / Não sei" }
    ],

    // 4. BÔNUS E INCLUSÕES NO ORÇAMENTO (Aparece no final, no modal)
    bonus: [
        { titulo: "Rodapé e Acessórios", subtitulo: "INCLUSO", strike: "R\$ 39/m", gratis: true },
        { titulo: "Cola e Manta",        subtitulo: "INCLUSO", strike: "R\$ 450",  gratis: true },
        { titulo: "Mão de Obra",         subtitulo: "Incluso", strike: "",          gratis: false }
    ]
};