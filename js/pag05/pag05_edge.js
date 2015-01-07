/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/pag05/',
        aud='media/',
        vid='media/',
        js='js/pag05/',
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
                            rect: ['3px', '5px', '967px', '631px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"borda2.png",'0px','0px']
                        },
                        {
                            id: 'titulo05',
                            type: 'text',
                            rect: ['77px', '35px', '840px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "A DEMOCRACIA RACIAL E A PRIMEIRA FASE DO MOVIMENTO NEGRO NO BRASIL",
                            align: "center",
                            font: ['LithosPro-Black', [30, "px"], "rgba(182,73,73,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'texto05_01_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '131px', '901px', '25px', 'auto', 'auto'],
                            text: "Gilberto Freyre publicou em 1933, Casa-grande &amp; Senzala, obra que se tornou símbolo da superação do antigo modelo de racismo científico e eugenismo propagado no início do século XX. Ao apregoar a ideia de que as raças no Brasil conviviam em harmonia, difundiu que haveria uma democracia racial. Motivo de orgulho nacional, a miscigenação passou a se tornar característica positiva. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem05_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['232px', '301px', '505px', '258px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem05_01_02.png",'0px','0px']
                        },
                        {
                            id: 'imagem05_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['18px', '153px', '340px', '410px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem05_01_01.png",'0px','0px']
                        },
                        {
                            id: 'texto05_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['363px', '322px', '349px', '72px', 'auto', 'auto'],
                            text: "Gilberto de Mello Freyre, (Recife, 15 de março de 1900 — Recife, 18 de julho de 1987) foi um polímata brasileiro. Como escritor, dedicou-se à ensaística da interpretação do Brasil sob ângulos da sociologia, antropologia e história. Foi também autor de ficção, jornalista, poeta e pintor.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem05_01_03',
                            display: 'none',
                            type: 'image',
                            rect: ['737px', '271px', '215px', '230px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem05_01_03.png",'0px','0px']
                        },
                        {
                            id: 'texto05_01_03',
                            display: 'none',
                            type: 'text',
                            rect: ['767px', '508px', '199px', '24px', 'auto', 'auto'],
                            text: "Capa da primeira edição de Casa Grande e Senzala. ",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'numero1',
                            type: 'text',
                            rect: ['759px', '59px', '22px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "1",
                            align: "center",
                            font: ['LithosPro-Black', [24, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: '_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['646px', '63px', '135px', '29px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'texto05_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '133px', '877px', '25px', 'auto', 'auto'],
                            text: "Durante o período do Estado Novo (1937-45), caracterizado pela violência e opressão, o movimento negro praticamente não pode se manifestar uma vez que o governo autoritário impediu quaisquer atos de contestação.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["0px", "", "27px", ""]
                        },
                        {
                            id: 'imagem05_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['18px', '158px', '885px', '340px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem05_02_01.png",'0px','0px']
                        },
                        {
                            id: 'imagem05_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['616px', '211px', '250px', '370px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem05_02_02.png",'0px','0px']
                        },
                        {
                            id: 'texto05_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['100px', '315px', '452px', '25px', 'auto', 'auto'],
                            text: "Estado Novo é o nome do regime político brasileiro fundado por Getúlio Vargas em 10 de novembro de 1937, que durou até 29 de outubro de 1945, que é caracterizado pela centralização do poder, nacionalismo, anticomunismo e por seu autoritarismo.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
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
                    duration: 7245,
                    autoPlay: true,
                    data: [
                        [
                            "eid89",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem05_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid76",
                            "display",
                            4595,
                            0,
                            "linear",
                            "${imagem05_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid77",
                            "display",
                            5985,
                            0,
                            "linear",
                            "${imagem05_02_01}",
                            'block',
                            'none'
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
                            6845,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid46",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${numero1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid47",
                            "opacity",
                            6845,
                            400,
                            "linear",
                            "${numero1}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid34",
                            "opacity",
                            2000,
                            400,
                            "linear",
                            "${texto05_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid35",
                            "opacity",
                            2400,
                            400,
                            "linear",
                            "${texto05_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid41",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid54",
                            "display",
                            200,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid57",
                            "display",
                            7245,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid30",
                            "opacity",
                            2000,
                            400,
                            "linear",
                            "${imagem05_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            2400,
                            400,
                            "linear",
                            "${imagem05_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid98",
                            "width",
                            5288,
                            0,
                            "linear",
                            "${titulo05}",
                            '840px',
                            '840px'
                        ],
                        [
                            "eid11",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto05_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid12",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto05_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid13",
                            "left",
                            3395,
                            100,
                            "linear",
                            "${texto05_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid14",
                            "left",
                            3495,
                            500,
                            "linear",
                            "${texto05_01_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid37",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem05_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid28",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${imagem05_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid29",
                            "display",
                            2795,
                            0,
                            "linear",
                            "${imagem05_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid90",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem05_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid80",
                            "display",
                            4888,
                            0,
                            "linear",
                            "${imagem05_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid81",
                            "display",
                            5683,
                            0,
                            "linear",
                            "${imagem05_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid6",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${titulo05}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid7",
                            "opacity",
                            6590,
                            400,
                            "linear",
                            "${titulo05}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid72",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto05_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid73",
                            "display",
                            3995,
                            0,
                            "linear",
                            "${texto05_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid74",
                            "display",
                            6590,
                            0,
                            "linear",
                            "${texto05_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid92",
                            "display",
                            0,
                            0,
                            "linear",
                            "${avancar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid94",
                            "display",
                            2400,
                            0,
                            "linear",
                            "${avancar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid96",
                            "display",
                            5288,
                            0,
                            "linear",
                            "${avancar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid26",
                            "opacity",
                            1600,
                            400,
                            "linear",
                            "${texto05_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid27",
                            "opacity",
                            2805,
                            400,
                            "linear",
                            "${texto05_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid82",
                            "opacity",
                            4888,
                            400,
                            "linear",
                            "${imagem05_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid83",
                            "opacity",
                            5288,
                            400,
                            "linear",
                            "${imagem05_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid18",
                            "opacity",
                            1600,
                            400,
                            "linear",
                            "${imagem05_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid19",
                            "opacity",
                            2805,
                            400,
                            "linear",
                            "${imagem05_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid38",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto05_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid24",
                            "display",
                            1600,
                            0,
                            "linear",
                            "${texto05_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid25",
                            "display",
                            3200,
                            0,
                            "linear",
                            "${texto05_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid39",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem05_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid20",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${imagem05_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid21",
                            "display",
                            3395,
                            0,
                            "linear",
                            "${imagem05_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid93",
                            "display",
                            0,
                            0,
                            "linear",
                            "${voltar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid95",
                            "display",
                            5288,
                            0,
                            "linear",
                            "${voltar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid97",
                            "display",
                            7245,
                            0,
                            "linear",
                            "${voltar}",
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
                            800,
                            0,
                            "linear",
                            "${texto05_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10",
                            "display",
                            3995,
                            0,
                            "linear",
                            "${texto05_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            7245,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid86",
                            "opacity",
                            4888,
                            400,
                            "linear",
                            "${texto05_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid87",
                            "opacity",
                            5288,
                            400,
                            "linear",
                            "${texto05_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid22",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${imagem05_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            3000,
                            400,
                            "linear",
                            "${imagem05_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid68",
                            "left",
                            3995,
                            500,
                            "linear",
                            "${texto05_02_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid69",
                            "left",
                            4495,
                            100,
                            "linear",
                            "${texto05_02_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid70",
                            "left",
                            5990,
                            100,
                            "linear",
                            "${texto05_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid71",
                            "left",
                            6090,
                            500,
                            "linear",
                            "${texto05_02_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid36",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto05_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid32",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${texto05_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid33",
                            "display",
                            2795,
                            0,
                            "linear",
                            "${texto05_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid78",
                            "opacity",
                            4595,
                            400,
                            "linear",
                            "${imagem05_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid79",
                            "opacity",
                            5590,
                            400,
                            "linear",
                            "${imagem05_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid91",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto05_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid84",
                            "display",
                            4888,
                            0,
                            "linear",
                            "${texto05_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid85",
                            "display",
                            5683,
                            0,
                            "linear",
                            "${texto05_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid40",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem05_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16",
                            "display",
                            1600,
                            0,
                            "linear",
                            "${imagem05_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17",
                            "display",
                            3200,
                            0,
                            "linear",
                            "${imagem05_01_02}",
                            'block',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("js/pag05/pag05_edgeActions.js");
})("EDGE-19006270");
