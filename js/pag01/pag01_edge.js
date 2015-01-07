/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/pag01/',
        aud='media/',
        vid='media/',
        js='js/pag01/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'borda',
                            display: 'block',
                            type: 'image',
                            rect: ['3px', '6px', '967px', '631px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"borda2.png",'0px','0px']
                        },
                        {
                            id: 'titulo05Copy',
                            type: 'text',
                            rect: ['225px', '35px', '542px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "DO INICIO DA HUMANIZAÇÃO À AFRICA PRÉ-COLONIAL.",
                            align: "center",
                            font: ['LithosPro-Black', [30, "px"], "rgba(182,73,73,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'texto05_01_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '131px', '452px', '25px', 'auto', 'auto'],
                            text: "O continente africano é extenso e desigual e por isso cada região construiu uma história própria e peculiar. A grande complexidade geográfica, econômica, cultural, linguística, política e econômica, bem como sua dispersão e fragmentação fazem da África um dos continentes mais heterogêneos da humanidade.<br>Muitos povos eram nômades (comerciantes, agricultores e pastores) que se deslocavam sempre que as condições climáticas ou as oportunidades de negócios assim os obrigassem e formavam pequenas aldeias agrupadas por laços de descendência ou linhagem.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem01_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['726px', '287px', '200px', '255px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem01_01_02.png",'0px','0px']
                        },
                        {
                            id: 'texto01_01_03',
                            display: 'none',
                            type: 'text',
                            rect: ['684px', '547px', '242px', '22px', 'auto', 'auto'],
                            text: "O Homo habilis, é considerado o primeiro membro do gênero Homo.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""]
                        },
                        {
                            id: 'imagem01_01_03',
                            display: 'none',
                            type: 'image',
                            rect: ['527px', '411px', '200px', '131px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem01_01_03.png",'0px','0px']
                        },
                        {
                            id: 'texto01_01_04',
                            display: 'none',
                            type: 'text',
                            rect: ['527px', '538px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Homo habilis.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'imagem01_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['598px', '135px', '345px', '185px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem01_01_01.png",'0px','0px']
                        },
                        {
                            id: 'texto01_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['621px', '323px', '297px', '24px', 'auto', 'auto'],
                            text: "Prováveis rotas de migração do homem pré-histórico.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto10_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '133px', '876px', '25px', 'auto', 'auto'],
                            text: "Alguns se constituíram em grandes reinos, como os de Gana, Djenné, Timbuctu, Gaô, Tadmeka e Takkeda, muitos elaboraram modelos de governos eficazes e semelhantes ao imperial como os reinos de Lunda e Luba, outros produziram tecnologia de ponta como o Egito (ver as construções das pirâmides), uns desenvolveram atividades econômicas produtivas e todos geraram grandes patrimônios culturais. \rA África pré-colonial se encerra no século VIII com a colonização árabe e no século XV com a colonização dos europeus quando iniciou o tráfico negreiro, assunto do próximo tópico.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem01_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['6px', '238px', '560px', '338px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem01_02_01.png",'0px','0px']
                        },
                        {
                            id: 'imagem01_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['254px', '363px', '710px', '210px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem01_02_02.png",'0px','0px']
                        },
                        {
                            id: 'texto01_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['662px', '410px', '248px', '22px', 'auto', 'auto'],
                            text: "Localizada na cidade de Djenné, no Mali, a Grande Mesquita de Djenné foi declarada como patrimônio mundial pela Unesco em 1988.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""]
                        },
                        {
                            id: 'texto01_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['62px', '579px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Pirâmides de Gizé.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'avancar',
                            display: 'none',
                            type: 'image',
                            rect: ['936px', '45px', '20px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"avancar.png",'0px','0px']
                        },
                        {
                            id: 'voltar',
                            display: 'none',
                            type: 'image',
                            rect: ['15px', '45px', '20px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"voltar.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '974px', '640px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(243,234,210,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 7635,
                    autoPlay: true,
                    data: [
                        [
                            "eid69",
                            "opacity",
                            4790,
                            400,
                            "linear",
                            "${imagem01_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid70",
                            "opacity",
                            5985,
                            400,
                            "linear",
                            "${imagem01_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid34",
                            "opacity",
                            1200,
                            400,
                            "linear",
                            "${imagem01_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid35",
                            "opacity",
                            3195,
                            400,
                            "linear",
                            "${imagem01_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid89",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid32",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${imagem01_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid33",
                            "display",
                            3590,
                            0,
                            "linear",
                            "${imagem01_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid73",
                            "opacity",
                            4790,
                            400,
                            "linear",
                            "${texto01_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid74",
                            "opacity",
                            5985,
                            400,
                            "linear",
                            "${texto01_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid38",
                            "opacity",
                            1200,
                            400,
                            "linear",
                            "${texto01_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid39",
                            "opacity",
                            3195,
                            400,
                            "linear",
                            "${texto01_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            400,
                            "linear",
                            "${borda}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3",
                            "opacity",
                            7235,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid6",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${titulo05Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid7",
                            "opacity",
                            6980,
                            400,
                            "linear",
                            "${titulo05Copy}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid85",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid79",
                            "display",
                            5190,
                            0,
                            "linear",
                            "${texto01_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid80",
                            "display",
                            5985,
                            0,
                            "linear",
                            "${texto01_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11",
                            "left",
                            600,
                            500,
                            "linear",
                            "${texto05_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid12",
                            "left",
                            1100,
                            100,
                            "linear",
                            "${texto05_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid13",
                            "left",
                            3590,
                            100,
                            "linear",
                            "${texto05_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid14",
                            "left",
                            3690,
                            500,
                            "linear",
                            "${texto05_01_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid91",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid48",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${imagem01_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid49",
                            "display",
                            2795,
                            0,
                            "linear",
                            "${imagem01_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid56",
                            "left",
                            4190,
                            500,
                            "linear",
                            "${texto10_02_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid57",
                            "left",
                            4690,
                            100,
                            "linear",
                            "${texto10_02_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid58",
                            "left",
                            6380,
                            100,
                            "linear",
                            "${texto10_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid59",
                            "left",
                            6480,
                            500,
                            "linear",
                            "${texto10_02_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid88",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid36",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${texto01_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid37",
                            "display",
                            3590,
                            0,
                            "linear",
                            "${texto01_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid93",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid40",
                            "display",
                            1600,
                            0,
                            "linear",
                            "${imagem01_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid41",
                            "display",
                            3195,
                            0,
                            "linear",
                            "${imagem01_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid101",
                            "display",
                            0,
                            0,
                            "linear",
                            "${avancar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid102",
                            "display",
                            2400,
                            0,
                            "linear",
                            "${avancar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid103",
                            "display",
                            5590,
                            0,
                            "linear",
                            "${avancar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid54",
                            "opacity",
                            2000,
                            400,
                            "linear",
                            "${texto01_01_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid55",
                            "opacity",
                            2400,
                            400,
                            "linear",
                            "${texto01_01_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid46",
                            "opacity",
                            1600,
                            400,
                            "linear",
                            "${texto01_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid47",
                            "opacity",
                            2800,
                            400,
                            "linear",
                            "${texto01_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid50",
                            "opacity",
                            2000,
                            400,
                            "linear",
                            "${imagem01_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid51",
                            "opacity",
                            2400,
                            400,
                            "linear",
                            "${imagem01_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid42",
                            "opacity",
                            1600,
                            400,
                            "linear",
                            "${imagem01_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid43",
                            "opacity",
                            2800,
                            400,
                            "linear",
                            "${imagem01_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid90",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_01_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid52",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${texto01_01_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid53",
                            "display",
                            2795,
                            0,
                            "linear",
                            "${texto01_01_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid100",
                            "display",
                            0,
                            0,
                            "linear",
                            "${voltar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid104",
                            "display",
                            5590,
                            0,
                            "linear",
                            "${voltar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid105",
                            "display",
                            7635,
                            0,
                            "linear",
                            "${voltar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid84",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid67",
                            "display",
                            4790,
                            0,
                            "linear",
                            "${imagem01_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid68",
                            "display",
                            6380,
                            0,
                            "linear",
                            "${imagem01_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid8",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto05_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9",
                            "display",
                            600,
                            0,
                            "linear",
                            "${texto05_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10",
                            "display",
                            4190,
                            0,
                            "linear",
                            "${texto05_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid92",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid44",
                            "display",
                            1600,
                            0,
                            "linear",
                            "${texto01_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid45",
                            "display",
                            3195,
                            0,
                            "linear",
                            "${texto01_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            7635,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid86",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem01_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75",
                            "display",
                            5190,
                            0,
                            "linear",
                            "${imagem01_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid76",
                            "display",
                            5985,
                            0,
                            "linear",
                            "${imagem01_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid87",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid60",
                            "display",
                            4190,
                            0,
                            "linear",
                            "${texto10_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid61",
                            "display",
                            6980,
                            0,
                            "linear",
                            "${texto10_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid83",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto01_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid71",
                            "display",
                            4790,
                            0,
                            "linear",
                            "${texto01_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid72",
                            "display",
                            6380,
                            0,
                            "linear",
                            "${texto01_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid77",
                            "opacity",
                            5190,
                            400,
                            "linear",
                            "${imagem01_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid78",
                            "opacity",
                            5590,
                            400,
                            "linear",
                            "${imagem01_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid81",
                            "opacity",
                            5190,
                            400,
                            "linear",
                            "${texto01_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid82",
                            "opacity",
                            5590,
                            400,
                            "linear",
                            "${texto01_02_02}",
                            '1',
                            '0.000000'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("js/pag01/pag01_edgeActions.js");
})("EDGE-7327909");
