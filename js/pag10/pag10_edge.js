/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
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
                            id: 'titulo10',
                            type: 'text',
                            rect: ['134px', '35px', '727px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "O BRASIL É MAIS NEGRO  : CENSO 2010 .",
                            align: "center",
                            font: ['LithosPro-Black', [30, "px"], "rgba(182,73,73,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'texto09_01_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '131px', '494px', '25px', 'auto', 'auto'],
                            text: "A lei nº 12.711, sancionada em 2012, estabelece um programa especial para o acesso de estudantes pretos, pardos e indígenas, bem como daqueles que tenham cursado integralmente o ensino médio em escolas públicas, às instituições de educação superior. Justificada pelo governo como uma ação afirmativa que, apesar de paliativa e temporária, pretende minimizar a desigualdade racial e social no país.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem10_01_03',
                            display: 'none',
                            type: 'image',
                            rect: ['38px', '407px', '355px', '165px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem10_01_03.png",'0px','0px']
                        },
                        {
                            id: 'texto10_01_03',
                            display: 'none',
                            type: 'text',
                            rect: ['42px', '571px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Manifestações contra e a favor das cotas raciais.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem10_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['334px', '333px', '255px', '240px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem10_01_02.png",'0px','0px']
                        },
                        {
                            id: 'imagem10_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['70px', '114px', '875px', '250px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem10_01_01.png",'0px','0px']
                        },
                        {
                            id: 'texto10_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['600px', '369px', '319px', '24px', 'auto', 'auto'],
                            text: "A lei nº 12.711 sendo sancionada no dia 29 de agosto de 2012.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto10_02_01',
                            symbolName: 'imagens07_04_01',
                            display: 'none',
                            type: 'rect',
                            rect: ['985px', '134', '889', '64', 'auto', 'auto']
                        },
                        {
                            id: 'imagem10_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['9px', '200px', '495px', '211px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem10_02_01.png",'0px','0px']
                        },
                        {
                            id: 'texto10_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '217px', '447px', '25px', 'auto', 'auto'],
                            text: " “Isso evidencia que a políticav de ações afirmativas possui o viés de sanar dívidas sociais adquiridas com a sociedade, evidenciando que não precisam ser vistas como um “favor”, e sim como um direito adquirido.”. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["0px", "", "27px", ""]
                        },
                        {
                            id: 'imagem10_02_03',
                            display: 'none',
                            type: 'image',
                            rect: ['562px', '361px', '400px', '186px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem10_02_03.png",'0px','0px']
                        },
                        {
                            id: 'texto10_02_03',
                            display: 'none',
                            type: 'text',
                            rect: ['581px', '398px', '345px', '25px', 'auto', 'auto'],
                            text: "Uma das queixa dos que são contrários às cotas raciais é que muitos se aproveitam das mesmas para se classificarem como negros ou pardos sem o serem. (Charge, Reprodução, William).",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem10_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['532px', '161px', '415px', '230px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem10_02_02.png",'0px','0px']
                        },
                        {
                            id: '_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['171px', '161px', '113px', '25px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'avancar',
                            type: 'image',
                            rect: ['936px', '45px', '20px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"avancar.png",'0px','0px']
                        },
                        {
                            id: 'voltar',
                            type: 'image',
                            rect: ['15px', '45px', '20px', '41px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"voltar.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '974px', '640px'],
                            overflow: 'hidden',
                            fill: ["rgba(243,234,210,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 11020,
                    autoPlay: true,
                    data: [
                        [
                            "eid10",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid11",
                            "display",
                            800,
                            0,
                            "linear",
                            "${texto09_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12",
                            "display",
                            4395,
                            0,
                            "linear",
                            "${texto09_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid80",
                            "opacity",
                            5595,
                            400,
                            "linear",
                            "${imagem10_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid81",
                            "opacity",
                            6585,
                            400,
                            "linear",
                            "${imagem10_02_02}",
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
                            10620,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid86",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid88",
                            "display",
                            6245,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid89",
                            "display",
                            6345,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid40",
                            "left",
                            4395,
                            500,
                            "linear",
                            "${texto10_02_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid41",
                            "left",
                            4895,
                            100,
                            "linear",
                            "${texto10_02_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid42",
                            "left",
                            7375,
                            100,
                            "linear",
                            "${texto10_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid43",
                            "left",
                            7475,
                            500,
                            "linear",
                            "${texto10_02_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid98",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem10_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${imagem10_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13",
                            "display",
                            3795,
                            0,
                            "linear",
                            "${imagem10_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid31",
                            "opacity",
                            2200,
                            400,
                            "linear",
                            "${texto10_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid32",
                            "opacity",
                            2600,
                            400,
                            "linear",
                            "${texto10_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid20",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${texto10_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid19",
                            "opacity",
                            3195,
                            400,
                            "linear",
                            "${texto10_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid84",
                            "opacity",
                            5895,
                            400,
                            "linear",
                            "${texto10_02_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid85",
                            "opacity",
                            6295,
                            400,
                            "linear",
                            "${texto10_02_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid102",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid82",
                            "display",
                            5895,
                            0,
                            "linear",
                            "${texto10_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid83",
                            "display",
                            6690,
                            0,
                            "linear",
                            "${texto10_02_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid101",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem10_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid74",
                            "display",
                            5895,
                            0,
                            "linear",
                            "${imagem10_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid75",
                            "display",
                            6690,
                            0,
                            "linear",
                            "${imagem10_02_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid4",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${titulo10}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid5",
                            "opacity",
                            10365,
                            400,
                            "linear",
                            "${titulo10}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid6",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto09_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid7",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto09_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid8",
                            "left",
                            3795,
                            100,
                            "linear",
                            "${texto09_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid9",
                            "left",
                            3895,
                            500,
                            "linear",
                            "${texto09_01_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid76",
                            "opacity",
                            5895,
                            400,
                            "linear",
                            "${imagem10_02_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid77",
                            "opacity",
                            6295,
                            400,
                            "linear",
                            "${imagem10_02_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid97",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem10_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid22",
                            "display",
                            1800,
                            0,
                            "linear",
                            "${imagem10_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid21",
                            "display",
                            3390,
                            0,
                            "linear",
                            "${imagem10_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid103",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem10_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid78",
                            "display",
                            5595,
                            0,
                            "linear",
                            "${imagem10_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid79",
                            "display",
                            6980,
                            0,
                            "linear",
                            "${imagem10_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid99",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${texto10_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17",
                            "display",
                            3590,
                            0,
                            "linear",
                            "${texto10_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid28",
                            "opacity",
                            2200,
                            400,
                            "linear",
                            "${imagem10_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid27",
                            "opacity",
                            2600,
                            400,
                            "linear",
                            "${imagem10_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid1",
                            "display",
                            11020,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid72",
                            "opacity",
                            4995,
                            400,
                            "linear",
                            "${imagem10_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid73",
                            "opacity",
                            7185,
                            400,
                            "linear",
                            "${imagem10_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid24",
                            "opacity",
                            1800,
                            400,
                            "linear",
                            "${imagem10_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            2995,
                            400,
                            "linear",
                            "${imagem10_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid100",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem10_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid70",
                            "display",
                            4995,
                            0,
                            "linear",
                            "${imagem10_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid71",
                            "display",
                            7580,
                            0,
                            "linear",
                            "${imagem10_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid55",
                            "left",
                            4995,
                            500,
                            "linear",
                            "${texto10_02_02}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid56",
                            "left",
                            5495,
                            53,
                            "linear",
                            "${texto10_02_02}",
                            '25px',
                            '33px'
                        ],
                        [
                            "eid64",
                            "left",
                            5548,
                            47,
                            "linear",
                            "${texto10_02_02}",
                            '33px',
                            '35px'
                        ],
                        [
                            "eid58",
                            "left",
                            6980,
                            100,
                            "linear",
                            "${texto10_02_02}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid59",
                            "left",
                            7080,
                            500,
                            "linear",
                            "${texto10_02_02}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid16",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${imagem10_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid15",
                            "opacity",
                            3395,
                            400,
                            "linear",
                            "${imagem10_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid44",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid45",
                            "display",
                            4395,
                            0,
                            "linear",
                            "${texto10_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid46",
                            "display",
                            7975,
                            0,
                            "linear",
                            "${texto10_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid60",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid61",
                            "display",
                            4995,
                            0,
                            "linear",
                            "${texto10_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid62",
                            "display",
                            7580,
                            0,
                            "linear",
                            "${texto10_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid95",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem10_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid26",
                            "display",
                            2200,
                            0,
                            "linear",
                            "${imagem10_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid25",
                            "display",
                            2995,
                            0,
                            "linear",
                            "${imagem10_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid96",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29",
                            "display",
                            2200,
                            0,
                            "linear",
                            "${texto10_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid30",
                            "display",
                            2995,
                            0,
                            "linear",
                            "${texto10_01_03}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "imagens07_04_01": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '419px', '25px', 'auto', 'auto'],
                            textStyle: ['', '', '27px', ''],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(52,52,52,1)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', ''],
                            id: 'Text',
                            text: 'Para alguns intelectuais como Pereira, Rodrigues e Guilherme   (2010, p-246)',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['230px', '25px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', 'nowrap'],
                            id: '_1',
                            text: '1',
                            align: 'justify',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '889px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("botao10_edgeActions.js");
})("EDGE-13187223");
