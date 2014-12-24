/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/pag06/',
        aud='media/',
        vid='media/',
        js='js/pag06/',
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
                            id: 'titulo06',
                            type: 'text',
                            rect: ['187px', '35px', '605px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "DO MITO DA DEMOCRACIA RACIAL À VOLTA DO MITO.",
                            align: "center",
                            font: ['LithosPro-Black', [30, "px"], "rgba(182,73,73,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'texto06_01_01',
                            symbolName: 'texto01',
                            display: 'none',
                            type: 'rect',
                            rect: ['-905px', '135px', '887', '121', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'imagem06_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['120px', '120px', '845px', '480px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem06_01_01.png",'0px','0px']
                        },
                        {
                            id: 'imagem06_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['627px', '141px', '110px', '170px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem06_01_02.png",'0px','0px']
                        },
                        {
                            id: 'texto06_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['614px', '305px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Jornal Alvorada",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem06_01_03',
                            display: 'none',
                            type: 'image',
                            rect: ['728px', '168px', '210px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem06_01_03.png",'0px','0px']
                        },
                        {
                            id: 'texto06_01_03',
                            display: 'none',
                            type: 'text',
                            rect: ['779px', '367px', '184px', '24px', 'auto', 'auto'],
                            text: "Jornal O Novo Horizonte",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem06_01_04',
                            display: 'none',
                            type: 'image',
                            rect: ['621px', '332px', '195px', '190px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem06_01_04.png",'0px','0px']
                        },
                        {
                            id: 'texto06_01_04',
                            display: 'none',
                            type: 'text',
                            rect: ['602px', '522px', '155px', '24px', 'auto', 'auto'],
                            text: "Jornal Notícias de Ébano",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem06_01_05',
                            display: 'none',
                            type: 'image',
                            rect: ['730px', '457px', '200px', '100px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem06_01_05.png",'0px','0px']
                        },
                        {
                            id: 'texto06_01_05',
                            display: 'none',
                            type: 'text',
                            rect: ['781px', '557px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Jornal O Multirão",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['419px', '297px', '85px', '29px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'texto05_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '133px', '894px', '25px', 'auto', 'auto'],
                            text: "O movimento negro teve pouco ou quase nenhum apoio político partidário. Em 1951, o Congresso brasileiro aprovou a primeira lei antirracista: a Lei 1.390, que transformava em contravenção penal qualquer prática resultante de preconceito de raça ou cor solapando o “mito da democracia racial'. Batizada de Lei Afonso Arinos, em homenagem a seu autor (filiado ao partido conservador UDN - União Democrática Nacional) não teve eficácia na prática já que durante sua vigência ninguém chegou a ser preso por preconceito. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["0px", "", "27px", ""]
                        },
                        {
                            id: 'imagem06_02_02',
                            type: 'image',
                            rect: ['50px', '392px', '719px', '183px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem06_02_02.png",'0px','0px']
                        },
                        {
                            id: 'imagem06_02_01',
                            type: 'image',
                            rect: ['575px', '239px', '375px', '340px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem06_02_01.png",'0px','0px']
                        },
                        {
                            id: 'texto06_02_02',
                            type: 'text',
                            rect: ['69px', '412px', '587px', '25px', 'auto', 'auto'],
                            text: "Afonso Arinos de Melo Franco (Belo Horizonte, 27 de novembro de 1905 — Rio de Janeiro, 27 de agosto de 1990) foi um jurista, político, historiador, professor, ensaísta e crítico brasileiro. Destaca-se pela autoria da Lei Afonso Arinos contra a discriminação racial em 1951. Ocupou a Cadeira 25 da Academia Brasileira de Letras, onde foi eleito em 23 de janeiro de 1958.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto06_03_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '131px', '506px', '25px', 'auto', 'auto'],
                            text: "O período que se segue, da ditadura civil-militar, desarticulou as forças do movimento negro no país. Muitos estudiosos que denunciavam as desigualdades raciais como Florestan Fernandes, Octávio Ianni e Fernando Henrique Cardoso foram exilados. A imprensa negra reaparece com a publicação dos jornais como Árvore das Palavras, O Quadro e Biluga (todos em 1974) e o Nagô (1975). Em 1976 foi fundado o Instituto de Pesquisa das Culturas Negras (IPCN) no Rio de Janeiro.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem06_03_02',
                            display: 'none',
                            type: 'image',
                            rect: ['659px', '233px', '235px', '330px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem06_03_02.png",'0px','0px']
                        },
                        {
                            id: 'texto06_03_03',
                            display: 'none',
                            type: 'text',
                            rect: ['638px', '564px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Fernando Henrique Cardoso",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem06_03_01',
                            display: 'none',
                            type: 'image',
                            rect: ['321px', '129px', '525px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem06_03_01.png",'0px','0px']
                        },
                        {
                            id: 'texto06_03_02',
                            display: 'none',
                            type: 'text',
                            rect: ['664px', '329px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Florestan Fernandes",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
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
                            rect: ['null', 'null', '974px', '640px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(243,234,210,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 11835,
                    autoPlay: true,
                    data: [
                        [
                            "eid110",
                            "display",
                            6690,
                            0,
                            "linear",
                            "${imagem06_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid111",
                            "display",
                            7485,
                            0,
                            "linear",
                            "${imagem06_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid45",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${imagem06_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid46",
                            "opacity",
                            4795,
                            400,
                            "linear",
                            "${imagem06_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid116",
                            "opacity",
                            6690,
                            400,
                            "linear",
                            "${texto06_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid117",
                            "opacity",
                            7090,
                            400,
                            "linear",
                            "${texto06_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid137",
                            "opacity",
                            8985,
                            400,
                            "linear",
                            "${imagem06_03_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid138",
                            "opacity",
                            10185,
                            400,
                            "linear",
                            "${imagem06_03_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid145",
                            "opacity",
                            9385,
                            400,
                            "linear",
                            "${imagem06_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid146",
                            "opacity",
                            9785,
                            400,
                            "linear",
                            "${imagem06_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid28",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29",
                            "display",
                            800,
                            0,
                            "linear",
                            "${texto06_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid30",
                            "display",
                            5790,
                            0,
                            "linear",
                            "${texto06_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid155",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid135",
                            "display",
                            8985,
                            0,
                            "linear",
                            "${imagem06_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid136",
                            "display",
                            10580,
                            0,
                            "linear",
                            "${imagem06_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid85",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_01_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid63",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${imagem06_01_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid64",
                            "display",
                            4100,
                            0,
                            "linear",
                            "${imagem06_01_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid88",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid55",
                            "display",
                            2100,
                            0,
                            "linear",
                            "${imagem06_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid56",
                            "display",
                            4495,
                            0,
                            "linear",
                            "${imagem06_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid61",
                            "opacity",
                            2100,
                            400,
                            "linear",
                            "${texto06_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid62",
                            "opacity",
                            4100,
                            400,
                            "linear",
                            "${texto06_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid53",
                            "opacity",
                            1700,
                            400,
                            "linear",
                            "${texto06_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid54",
                            "opacity",
                            4500,
                            400,
                            "linear",
                            "${texto06_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid129",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid130",
                            "display",
                            8385,
                            0,
                            "linear",
                            "${texto06_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid131",
                            "display",
                            11180,
                            0,
                            "linear",
                            "${texto06_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid77",
                            "opacity",
                            2900,
                            400,
                            "linear",
                            "${texto06_01_05}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid78",
                            "opacity",
                            3300,
                            400,
                            "linear",
                            "${texto06_01_05}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid4",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${titulo06}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid5",
                            "opacity",
                            11180,
                            400,
                            "linear",
                            "${titulo06}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid73",
                            "opacity",
                            2900,
                            400,
                            "linear",
                            "${imagem06_01_05}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid74",
                            "opacity",
                            3300,
                            400,
                            "linear",
                            "${imagem06_01_05}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid86",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_01_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid67",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${texto06_01_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid68",
                            "display",
                            4100,
                            0,
                            "linear",
                            "${texto06_01_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid84",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_01_05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid71",
                            "display",
                            2900,
                            0,
                            "linear",
                            "${imagem06_01_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid72",
                            "display",
                            3695,
                            0,
                            "linear",
                            "${imagem06_01_05}",
                            'block',
                            'none'
                        ],
                        [
                            "eid154",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_03_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid147",
                            "display",
                            9385,
                            0,
                            "linear",
                            "${texto06_03_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid148",
                            "display",
                            10180,
                            0,
                            "linear",
                            "${texto06_03_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid82",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid79",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid80",
                            "display",
                            3350,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid153",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid143",
                            "display",
                            9385,
                            0,
                            "linear",
                            "${imagem06_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid144",
                            "display",
                            10180,
                            0,
                            "linear",
                            "${imagem06_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid87",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid59",
                            "display",
                            2100,
                            0,
                            "linear",
                            "${texto06_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid60",
                            "display",
                            4495,
                            0,
                            "linear",
                            "${texto06_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid125",
                            "left",
                            8385,
                            500,
                            "linear",
                            "${texto06_03_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid126",
                            "left",
                            8885,
                            100,
                            "linear",
                            "${texto06_03_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid127",
                            "left",
                            10580,
                            100,
                            "linear",
                            "${texto06_03_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid128",
                            "left",
                            10680,
                            500,
                            "linear",
                            "${texto06_03_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid57",
                            "opacity",
                            2100,
                            400,
                            "linear",
                            "${imagem06_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid58",
                            "opacity",
                            4100,
                            400,
                            "linear",
                            "${imagem06_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid114",
                            "display",
                            6690,
                            0,
                            "linear",
                            "${texto06_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid115",
                            "display",
                            7485,
                            0,
                            "linear",
                            "${texto06_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid83",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_01_05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75",
                            "display",
                            2900,
                            0,
                            "linear",
                            "${texto06_01_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid76",
                            "display",
                            3695,
                            0,
                            "linear",
                            "${texto06_01_05}",
                            'block',
                            'none'
                        ],
                        [
                            "eid31",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto06_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid32",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto06_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid33",
                            "left",
                            5190,
                            100,
                            "linear",
                            "${texto06_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid34",
                            "left",
                            5290,
                            500,
                            "linear",
                            "${texto06_01_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid156",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid139",
                            "display",
                            8985,
                            0,
                            "linear",
                            "${texto06_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid140",
                            "display",
                            10580,
                            0,
                            "linear",
                            "${texto06_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid108",
                            "opacity",
                            6390,
                            400,
                            "linear",
                            "${imagem06_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid109",
                            "opacity",
                            7385,
                            400,
                            "linear",
                            "${imagem06_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid49",
                            "opacity",
                            1700,
                            400,
                            "linear",
                            "${imagem06_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid50",
                            "opacity",
                            4500,
                            400,
                            "linear",
                            "${imagem06_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid96",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto05_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid97",
                            "display",
                            5790,
                            0,
                            "linear",
                            "${texto05_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid98",
                            "display",
                            8385,
                            0,
                            "linear",
                            "${texto05_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid99",
                            "left",
                            5790,
                            500,
                            "linear",
                            "${texto05_02_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid100",
                            "left",
                            6290,
                            100,
                            "linear",
                            "${texto05_02_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid101",
                            "left",
                            7785,
                            100,
                            "linear",
                            "${texto05_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid102",
                            "left",
                            7885,
                            500,
                            "linear",
                            "${texto05_02_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid1",
                            "display",
                            11835,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid149",
                            "opacity",
                            9385,
                            400,
                            "linear",
                            "${texto06_03_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid150",
                            "opacity",
                            9785,
                            400,
                            "linear",
                            "${texto06_03_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid65",
                            "opacity",
                            2500,
                            400,
                            "linear",
                            "${imagem06_01_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid66",
                            "opacity",
                            3705,
                            400,
                            "linear",
                            "${imagem06_01_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid106",
                            "display",
                            6390,
                            0,
                            "linear",
                            "${imagem06_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid107",
                            "display",
                            7780,
                            0,
                            "linear",
                            "${imagem06_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid69",
                            "opacity",
                            2500,
                            400,
                            "linear",
                            "${texto06_01_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid70",
                            "opacity",
                            3705,
                            400,
                            "linear",
                            "${texto06_01_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid91",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid43",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${imagem06_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid44",
                            "display",
                            5190,
                            0,
                            "linear",
                            "${imagem06_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid112",
                            "opacity",
                            6690,
                            400,
                            "linear",
                            "${imagem06_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid113",
                            "opacity",
                            7090,
                            400,
                            "linear",
                            "${imagem06_02_02}",
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
                            11435,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid141",
                            "opacity",
                            8985,
                            400,
                            "linear",
                            "${texto06_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid142",
                            "opacity",
                            10185,
                            400,
                            "linear",
                            "${texto06_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid89",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto06_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid51",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${texto06_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid52",
                            "display",
                            4895,
                            0,
                            "linear",
                            "${texto06_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid90",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem06_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid47",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${imagem06_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid48",
                            "display",
                            4895,
                            0,
                            "linear",
                            "${imagem06_01_02}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "texto01": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            rect: ['0px', '0px', '533px', '121px', 'auto', 'auto'],
                            text: 'Em 1950, a UNESCO, financia uma equipe de catedráticos para tentar explicar melhor a questão das relações raciais no Brasil. Foi Florestan Fernandes junto com Roger Bastide, responsável pelas pesquisas e se tornou precursor entre os estudiosos brasileiros, que denunciou o chamado “mito da democracia racial” no Brasil.  Nesse período, é importante destacar a imprensa negra que ganhou novo impulso, com a publicação de diversos jornais de protesto pelo país como Alvorada (1945), O Novo Horizonte (1946), Notícias de Ébano (1957), O Mutirão (1958), Níger (1960); em Curitiba, União (1947); no Rio de Janeiro, Redenção (1950) e A Voz da Negritude (1952). Registra-se ainda a Revista Senzala (1946). Somados a essas querelas intelectuais houve um aumento significativo de protestos dos negros no país.',
                            id: 'Text4Copy',
                            textStyle: ['', '', '27px', ''],
                            align: 'justify',
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(53,53,53,1.00)', '400', 'none solid rgb(46, 112, 159)', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['453px', '160px', 'auto', 'auto', 'auto', 'auto'],
                            id: '_1',
                            text: '1',
                            align: 'justify',
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '887px', '121px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("js/pag06/pag06_edgeActions.js");
})("EDGE-20597022");
