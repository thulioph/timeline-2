/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/pag03/',
        aud='media/',
        vid='media/',
        js='js/pag03/',
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
                            rect: ['3px', '9px', '967px', '631px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"borda2.png",'0px','0px']
                        },
                        {
                            id: 'titulo03',
                            type: 'text',
                            rect: ['84px', '35px', '827px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "OS PRIMEIROS ESCRAVOS \rNO BRASIL COLONIAL.",
                            align: "center",
                            font: ['LithosPro-Black', [28, "px"], "rgba(182,73,73,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'texto03_01_01',
                            symbolName: 'texto01',
                            display: 'none',
                            type: 'rect',
                            rect: ['-905px', '135px', '887', '121', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'imagem03_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['120px', '298px', '240px', '240px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem03_01_01.png",'0px','0px']
                        },
                        {
                            id: 'texto03_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['123px', '541px', '240px', '24px', 'auto', 'auto'],
                            text: "Desembarque de escravos no Cais do Valongo",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem03_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['494px', '273px', '400px', '295px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem03_01_02.png",'0px','0px']
                        },
                        {
                            id: 'texto03_01_03',
                            display: 'none',
                            type: 'text',
                            rect: ['459px', '568px', '470px', '24px', 'auto', 'auto'],
                            text: "Mapa do tráfico de escravos da África para o Brasil.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['470px', '190px', '82px', '24px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['666px', '187px', '82px', '24px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'texto10_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '133px', '891px', '25px', 'auto', 'auto'],
                            text: "A partir do séc. XIX, setores da sociedade brasileira também começaram a defender  a abolição  da  escravatura, uns  pela questão  humanista outros por  entender  que o tráfico poderia criar condições favoráveis à eclosão de grandes revoltas escravas, como a que ocorrera no Haiti na década de 1790. Em 1850, foi aprovada a Lei Eusébio de Queirós que proibia definitivamente o tráfico.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["0px", "", "27px", ""]
                        },
                        {
                            id: 'imagem03_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['19px', '235px', '320px', '330px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem03_02_01.png",'0px','0px']
                        },
                        {
                            id: 'texto03_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['99px', '565px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Revolta escrava Haiti.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem03_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['366px', '289px', '100px', '276px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem03_02_02.png",'0px','0px']
                        },
                        {
                            id: 'texto03_02_03',
                            display: 'none',
                            type: 'text',
                            rect: ['381px', '307px', '455px', '25px', 'auto', 'auto'],
                            text: "Em 22 de agosto de 1791, os escravos de Saint Domingue se revoltaram e mergulharam a colônia em uma guerra civil. O sinal para iniciar a revolta foi dada por Dutty Boukman, um alto sacerdote do Vodu e líder dos escravos de quilombos, durante uma cerimônia religiosa em Bois Caiman, na noite de 14 de agosto. Nos dez dias seguintes, os escravos tinham assumido o controle de toda a Província do Norte, em uma revolta de escravos sem precedentes.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto03_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '131px', '558px', '25px', 'auto', 'auto'],
                            text: "O Brasil colonial e imperial formou uma sociedade escravista e racista. Considerados como inferiores, os escravos foram castigados, física e moralmente. Mas o escravo não foi passivo. Suas condições de vida eram precárias, mas havia uma distinção de cotidiano dos escravos que trabalhavam no eito, no trabalho doméstico, nas cidades, como os escravos de ganho. <br>Mas foram as fugas e as revoltas isoladas ou em grupo bem como a formação de quilombos as formas mais radicais de luta dos escravos. Chamados também de palenques , marrons e mocambos, os quilombos eram locais onde se concentravam negros fugidos (aglutinavam-se também negros libertos, indígenas e brancos com problemas com a justiça). ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem03_03_01',
                            display: 'none',
                            type: 'image',
                            rect: ['314px', '127px', '630px', '320px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem03_03_01.png",'0px','0px']
                        },
                        {
                            id: 'texto03_03_02',
                            display: 'none',
                            type: 'text',
                            rect: ['744px', '450px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Quilombo",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto03_04_01',
                            symbolName: 'imagens07_04_01',
                            display: 'none',
                            type: 'rect',
                            rect: ['985px', '134', '889', '64', 'auto', 'auto']
                        },
                        {
                            id: 'imagem03_04_02',
                            display: 'none',
                            type: 'image',
                            rect: ['627px', '140px', '336px', '303px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem03_04_02.png",'0px','0px']
                        },
                        {
                            id: 'imagem03_04_01',
                            display: 'none',
                            type: 'image',
                            rect: ['393px', '149px', '510px', '190px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem03_04_01.png",'0px','0px']
                        },
                        {
                            id: 'texto03_04_02',
                            display: 'none',
                            type: 'text',
                            rect: ['651px', '338px', '292px', '18px', 'auto', 'auto'],
                            text: "Zumbi foi o último dos líderes do Quilombo dos Palmares, o maior dos quilombos do período colonial.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto03_04_03',
                            display: 'none',
                            type: 'text',
                            rect: ['702px', '576px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Revolta dos Malês.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'imagem03_04_03',
                            display: 'none',
                            type: 'image',
                            rect: ['28px', '399px', '915px', '180px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem03_04_03.png",'0px','0px']
                        },
                        {
                            id: '_3',
                            display: 'none',
                            type: 'rect',
                            rect: ['93px', '431px', '82px', '24px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
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
                    duration: 12015,
                    autoPlay: true,
                    data: [
                        [
                            "eid26",
                            "opacity",
                            1600,
                            400,
                            "linear",
                            "${imagem03_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid27",
                            "opacity",
                            2000,
                            400,
                            "linear",
                            "${imagem03_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid93",
                            "opacity",
                            6780,
                            400,
                            "linear",
                            "${texto03_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid94",
                            "opacity",
                            7180,
                            400,
                            "linear",
                            "${texto03_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid4",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${titulo03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid5",
                            "opacity",
                            11360,
                            400,
                            "linear",
                            "${titulo03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid39",
                            "left",
                            3390,
                            500,
                            "linear",
                            "${texto10_02_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid40",
                            "left",
                            3890,
                            100,
                            "linear",
                            "${texto10_02_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid41",
                            "left",
                            5580,
                            100,
                            "linear",
                            "${texto10_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid42",
                            "left",
                            5680,
                            500,
                            "linear",
                            "${texto10_02_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid126",
                            "opacity",
                            8975,
                            400,
                            "linear",
                            "${imagem03_04_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid127",
                            "opacity",
                            10170,
                            400,
                            "linear",
                            "${imagem03_04_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid142",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_04_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid128",
                            "display",
                            8975,
                            0,
                            "linear",
                            "${texto03_04_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid129",
                            "display",
                            10565,
                            0,
                            "linear",
                            "${texto03_04_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid116",
                            "left",
                            8175,
                            500,
                            "linear",
                            "${texto03_04_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid117",
                            "left",
                            8675,
                            100,
                            "linear",
                            "${texto03_04_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid118",
                            "left",
                            10760,
                            100,
                            "linear",
                            "${texto03_04_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid119",
                            "left",
                            10860,
                            500,
                            "linear",
                            "${texto03_04_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid81",
                            "left",
                            6180,
                            500,
                            "linear",
                            "${texto03_02_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid82",
                            "left",
                            6680,
                            100,
                            "linear",
                            "${texto03_02_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid83",
                            "left",
                            7575,
                            100,
                            "linear",
                            "${texto03_02_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid84",
                            "left",
                            7675,
                            500,
                            "linear",
                            "${texto03_02_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid30",
                            "opacity",
                            1600,
                            400,
                            "linear",
                            "${texto03_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            2000,
                            400,
                            "linear",
                            "${texto03_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid69",
                            "opacity",
                            3990,
                            400,
                            "linear",
                            "${texto03_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid70",
                            "opacity",
                            5185,
                            400,
                            "linear",
                            "${texto03_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid103",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem03_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid24",
                            "display",
                            1600,
                            0,
                            "linear",
                            "${imagem03_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid25",
                            "display",
                            2395,
                            0,
                            "linear",
                            "${imagem03_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid22",
                            "opacity",
                            1200,
                            400,
                            "linear",
                            "${texto03_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            2395,
                            400,
                            "linear",
                            "${texto03_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid101",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem03_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid63",
                            "display",
                            3990,
                            0,
                            "linear",
                            "${imagem03_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid64",
                            "display",
                            5580,
                            0,
                            "linear",
                            "${imagem03_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid97",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid79",
                            "display",
                            6180,
                            0,
                            "linear",
                            "${texto03_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid80",
                            "display",
                            8175,
                            0,
                            "linear",
                            "${texto03_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid18",
                            "opacity",
                            1200,
                            400,
                            "linear",
                            "${imagem03_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid19",
                            "opacity",
                            2395,
                            400,
                            "linear",
                            "${imagem03_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid43",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto10_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid44",
                            "display",
                            3390,
                            0,
                            "linear",
                            "${texto10_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid45",
                            "display",
                            6180,
                            0,
                            "linear",
                            "${texto10_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid141",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_04_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid132",
                            "display",
                            9375,
                            0,
                            "linear",
                            "${texto03_04_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid133",
                            "display",
                            10170,
                            0,
                            "linear",
                            "${texto03_04_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid138",
                            "opacity",
                            9375,
                            400,
                            "linear",
                            "${imagem03_04_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid139",
                            "opacity",
                            9775,
                            400,
                            "linear",
                            "${imagem03_04_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid98",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75",
                            "display",
                            4390,
                            0,
                            "linear",
                            "${texto03_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid76",
                            "display",
                            5185,
                            0,
                            "linear",
                            "${texto03_02_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid73",
                            "opacity",
                            4390,
                            400,
                            "linear",
                            "${imagem03_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid74",
                            "opacity",
                            4790,
                            400,
                            "linear",
                            "${imagem03_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid100",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid67",
                            "display",
                            3990,
                            0,
                            "linear",
                            "${texto03_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid68",
                            "display",
                            5580,
                            0,
                            "linear",
                            "${texto03_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid95",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid91",
                            "display",
                            6780,
                            0,
                            "linear",
                            "${texto03_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid92",
                            "display",
                            7575,
                            0,
                            "linear",
                            "${texto03_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid145",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid146",
                            "display",
                            1950,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid147",
                            "display",
                            2060,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid113",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_04_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid114",
                            "display",
                            8175,
                            0,
                            "linear",
                            "${texto03_04_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid115",
                            "display",
                            11360,
                            0,
                            "linear",
                            "${texto03_04_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10",
                            "left",
                            600,
                            500,
                            "linear",
                            "${texto03_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid11",
                            "left",
                            1100,
                            100,
                            "linear",
                            "${texto03_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid12",
                            "left",
                            2790,
                            100,
                            "linear",
                            "${texto03_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid13",
                            "left",
                            2890,
                            500,
                            "linear",
                            "${texto03_01_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid155",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid156",
                            "display",
                            1950,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid157",
                            "display",
                            2060,
                            0,
                            "linear",
                            "${_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid89",
                            "opacity",
                            6780,
                            400,
                            "linear",
                            "${imagem03_03_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid90",
                            "opacity",
                            7180,
                            400,
                            "linear",
                            "${imagem03_03_01}",
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
                            11615,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid96",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem03_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid87",
                            "display",
                            6780,
                            0,
                            "linear",
                            "${imagem03_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid88",
                            "display",
                            7575,
                            0,
                            "linear",
                            "${imagem03_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid144",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem03_04_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid120",
                            "display",
                            8775,
                            0,
                            "linear",
                            "${imagem03_04_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid121",
                            "display",
                            10760,
                            0,
                            "linear",
                            "${imagem03_04_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid171",
                            "display",
                            0,
                            0,
                            "linear",
                            "${avancar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid172",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${avancar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid174",
                            "display",
                            9775,
                            0,
                            "linear",
                            "${avancar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid105",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem03_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${imagem03_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17",
                            "display",
                            2790,
                            0,
                            "linear",
                            "${imagem03_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid104",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid20",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${texto03_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid21",
                            "display",
                            2790,
                            0,
                            "linear",
                            "${texto03_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid99",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem03_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid71",
                            "display",
                            4390,
                            0,
                            "linear",
                            "${imagem03_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid72",
                            "display",
                            5185,
                            0,
                            "linear",
                            "${imagem03_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            12015,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid130",
                            "opacity",
                            8975,
                            400,
                            "linear",
                            "${texto03_04_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid131",
                            "opacity",
                            10170,
                            400,
                            "linear",
                            "${texto03_04_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid170",
                            "display",
                            0,
                            0,
                            "linear",
                            "${voltar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid173",
                            "display",
                            4790,
                            0,
                            "linear",
                            "${voltar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid175",
                            "display",
                            12015,
                            0,
                            "linear",
                            "${voltar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid102",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid28",
                            "display",
                            1600,
                            0,
                            "linear",
                            "${texto03_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid29",
                            "display",
                            2395,
                            0,
                            "linear",
                            "${texto03_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid65",
                            "opacity",
                            3990,
                            400,
                            "linear",
                            "${imagem03_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid66",
                            "opacity",
                            5185,
                            400,
                            "linear",
                            "${imagem03_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid122",
                            "opacity",
                            8775,
                            400,
                            "linear",
                            "${imagem03_04_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid123",
                            "opacity",
                            10365,
                            400,
                            "linear",
                            "${imagem03_04_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid140",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem03_04_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid136",
                            "display",
                            9375,
                            0,
                            "linear",
                            "${imagem03_04_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid137",
                            "display",
                            10170,
                            0,
                            "linear",
                            "${imagem03_04_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid77",
                            "opacity",
                            4390,
                            400,
                            "linear",
                            "${texto03_02_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid78",
                            "opacity",
                            4790,
                            400,
                            "linear",
                            "${texto03_02_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid168",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid163",
                            "display",
                            9724,
                            0,
                            "linear",
                            "${_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid164",
                            "display",
                            9834,
                            0,
                            "linear",
                            "${_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid7",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto03_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8",
                            "display",
                            600,
                            0,
                            "linear",
                            "${texto03_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid9",
                            "display",
                            3390,
                            0,
                            "linear",
                            "${texto03_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid143",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem03_04_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid124",
                            "display",
                            8975,
                            0,
                            "linear",
                            "${imagem03_04_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid125",
                            "display",
                            10565,
                            0,
                            "linear",
                            "${imagem03_04_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid134",
                            "opacity",
                            9375,
                            400,
                            "linear",
                            "${texto03_04_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid135",
                            "opacity",
                            9775,
                            400,
                            "linear",
                            "${texto03_04_03}",
                            '1',
                            '0.000000'
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
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(53,53,53,1.00)', '400', 'none solid rgb(46, 112, 159)', 'normal', 'break-word', ''],
                            type: 'text',
                            align: 'justify',
                            id: 'Text4Copy',
                            text: 'O mais antigo registro de envio de escravos data de 1533 quando Pero de Góis, Capitão-Mor da Costa do Brasil, solicitou, ao Rei, a remessa de 17 negros para a sua capitania de São Tomé (Paraíba do Sul/Macaé) . Novaes (1983)  explica que essa predileção foi motivada pelos lucros do tráfico negreiro, inserido no contexto do antigo sistema colonial. <br>',
                            textStyle: ['', '', '27px', ''],
                            rect: ['0px', '0px', '887px', '226px', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', ''],
                            type: 'text',
                            id: '_1',
                            text: '1',
                            align: 'justify',
                            rect: ['508px', '50px', '12px', '18px', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', ''],
                            type: 'text',
                            id: '_2',
                            text: '2',
                            align: 'justify',
                            rect: ['697px', '50px', '12px', '18px', 'auto', 'auto']
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
                            rect: ['0px', '0px', '560px', '25px', 'auto', 'auto'],
                            textStyle: ['', '', '27px', ''],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(52,52,52,1)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', ''],
                            id: 'Text',
                            text: 'De todos os que existiram no Brasil, o de Palmares foi o mais famoso pela longa duração (mais de 1 século de resistência - do século XVI ao século XVII) pelos seus líderes como Gamga-Zumba e Zumbi Capturado e decapitado em 20 de novembro de 1695, Zumbi imortalizou-se e este dia foi escolhido o da consciência negra pelos movimentos negros da atualidade. No século seguinte, precisamente na madrugada de 25 de janeiro de 1835, aconteceu em Salvador a chamada Revolta de Malês foi organizada por escravos e libertos que sonhavam com uma nação islã. Segundo João José Reis (2012) , cerca de 600 rebeldes, inspirados pelo islamismo, carregando talismãs com textos do Alcorão se levantaram contra o governo. Resultado de tantas lutas pela liberdade tão almejada pelos escravos, essa conquista só veio ser referendada pelos colonizadores, em 1888, quando foi assinada a lei Áurea.',
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['124px', '294px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', 'nowrap'],
                            id: '_3',
                            text: '3',
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("js/pag03/pag03_edgeActions.js");
})("EDGE-11962750");
