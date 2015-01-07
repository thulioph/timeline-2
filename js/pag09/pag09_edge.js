/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/pag09/',
        aud='media/',
        vid='media/',
        js='js/pag09/',
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
                            id: 'titulo09',
                            type: 'text',
                            rect: ['134px', '35px', '727px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "O BRASIL É MAIS NEGRO  : CENSO 2010 .",
                            align: "center",
                            font: ['LithosPro-Black', [30, "px"], "rgba(182,73,73,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'numero1',
                            type: 'text',
                            rect: ['562px', '21px', '22px', '24px', 'auto', 'auto'],
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
                            rect: ['449px', '25px', '135px', '41px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'numero2',
                            type: 'text',
                            rect: ['807px', '21px', '22px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "2",
                            align: "center",
                            font: ['LithosPro-Black', [24, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: '_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['713px', '25px', '121px', '41px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'texto09_01_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '131px', '488px', '25px', 'auto', 'auto'],
                            text: "Pela primeira vez na história do Brasil, a maioria da população no país se identificou como negra e parda. Esse aumento é significativo já que a proporção de brasileiros que se definiram como negros ou pardos aumentou de 44,7% para 50,7%, desde 2000. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem09_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['9px', '495px', '433px', '91px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem09_01_02.png",'0px','0px']
                        },
                        {
                            id: 'imagem09_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['24px', '208px', '360px', '330px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem09_01_01.png",'0px','0px']
                        },
                        {
                            id: 'texto09_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '531px', '380px', '25px', 'auto', 'auto'],
                            text: "População brasileira por raça em 2010 (Imagem, Divulgação, IBGE).",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem09_01_04',
                            display: 'none',
                            type: 'image',
                            rect: ['574px', '398px', '389px', '79px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem09_01_04.png",'0px','0px']
                        },
                        {
                            id: 'imagem09_01_03',
                            display: 'none',
                            type: 'image',
                            rect: ['368px', '173px', '580px', '280px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem09_01_03.png",'0px','0px']
                        },
                        {
                            id: 'texto09_01_03',
                            display: 'none',
                            type: 'text',
                            rect: ['617px', '421px', '298px', '48px', 'auto', 'auto'],
                            text: "Distribuição da população brasileira segundo cor ou raça. ",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto05_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '133px', '693px', '25px', 'auto', 'auto'],
                            text: "Quanto à região em que habitam, a maioria dos negros se concentrava no Norte e Nordeste, ou seja, regiões economicamente menos favorecidas comparadas as demais. Quanto ao grau de instrução o maior nível de analfabetismo foi no grupo dos negros (14,4%) e pardos (13%) contra 5,9% dos brancos nos pequenos municípios. Nos médios e grandes municípios, o analfabetismo na população negra chegou a 27,1% e entre os pardos, variou de 20,0% a 22,1%%. Quanto à situação econômica e social a pesquisa apontou que os ricos ganham 42 vezes mais que os pobres. 8,5% (16,2 milhões de pessoas) da população vivem na pobreza extrema. Destas, 70,8% são negras. Os piores salários são ganhos por negros e pardos, 2,4 vezes menos do que ganham os brancos e amarelos. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["0px", "", "27px", ""]
                        },
                        {
                            id: 'imagem09_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['132px', '139px', '830px', '170px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem09_02_01.png",'0px','0px']
                        },
                        {
                            id: 'imagem09_02_03',
                            display: 'none',
                            type: 'image',
                            rect: ['807px', '309px', '129px', '73px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem09_02_03.png",'0px','0px']
                        },
                        {
                            id: 'texto09_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['766px', '395px', '190px', '24px', 'auto', 'auto'],
                            text: "Concentração de negros e pardos por região, segundo CENSO de 2010. ",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem09_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['24px', '471px', '633px', '131px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem09_02_02.png",'0px','0px']
                        },
                        {
                            id: 'texto09_03_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '131px', '364px', '25px', 'auto', 'auto'],
                            text: "O censo de 2010, reafirmou a ligação histórica de que a desigualdade social está ainda associada à cor da pele. Enquanto alguns declaram ser aumento da própria consciência e poder dos negros, outros associaram o aumento como uma forma dos negros se beneficiarem das cotas raciais.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem09_03_02',
                            display: 'none',
                            type: 'image',
                            rect: ['388px', '506px', '476px', '82px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem09_03_02.png",'0px','0px']
                        },
                        {
                            id: 'imagem09_03_01',
                            display: 'none',
                            type: 'image',
                            rect: ['415px', '134px', '532px', '410px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"imagem09_03_01.png",'0px','0px']
                        },
                        {
                            id: 'texto09_03_02',
                            type: 'text',
                            rect: ['415px', '553px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Rendimentos por cor em 2010.",
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
                    duration: 11020,
                    autoPlay: true,
                    data: [
                        [
                            "eid28",
                            "opacity",
                            1700,
                            400,
                            "linear",
                            "${texto09_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid29",
                            "opacity",
                            3495,
                            400,
                            "linear",
                            "${texto09_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid116",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid71",
                            "display",
                            5385,
                            0,
                            "linear",
                            "${imagem09_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid72",
                            "display",
                            6975,
                            0,
                            "linear",
                            "${imagem09_02_03}",
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
                            10620,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid108",
                            "display",
                            8575,
                            0,
                            "linear",
                            "${texto09_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid109",
                            "display",
                            9370,
                            0,
                            "linear",
                            "${texto09_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid122",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid26",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${texto09_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid27",
                            "display",
                            3890,
                            0,
                            "linear",
                            "${texto09_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid8",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto09_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid9",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto09_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid10",
                            "left",
                            4185,
                            100,
                            "linear",
                            "${texto09_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid11",
                            "left",
                            4285,
                            500,
                            "linear",
                            "${texto09_01_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid110",
                            "opacity",
                            8575,
                            400,
                            "linear",
                            "${texto09_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid111",
                            "opacity",
                            8975,
                            400,
                            "linear",
                            "${texto09_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid85",
                            "opacity",
                            5785,
                            400,
                            "linear",
                            "${imagem09_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            6185,
                            400,
                            "linear",
                            "${imagem09_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid44",
                            "left",
                            4785,
                            500,
                            "linear",
                            "${texto05_02_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid45",
                            "left",
                            5285,
                            100,
                            "linear",
                            "${texto05_02_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid64",
                            "left",
                            5385,
                            0,
                            "linear",
                            "${texto05_02_01}",
                            '35px',
                            '35px'
                        ],
                        [
                            "eid46",
                            "left",
                            6975,
                            100,
                            "linear",
                            "${texto05_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid47",
                            "left",
                            7075,
                            500,
                            "linear",
                            "${texto05_02_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid69",
                            "opacity",
                            5385,
                            400,
                            "linear",
                            "${imagem09_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid70",
                            "opacity",
                            6580,
                            400,
                            "linear",
                            "${imagem09_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid32",
                            "opacity",
                            2100,
                            400,
                            "linear",
                            "${imagem09_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            3100,
                            400,
                            "linear",
                            "${imagem09_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid119",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid38",
                            "display",
                            2400,
                            0,
                            "linear",
                            "${texto09_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid39",
                            "display",
                            3195,
                            0,
                            "linear",
                            "${texto09_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid90",
                            "left",
                            7575,
                            500,
                            "linear",
                            "${texto09_03_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid91",
                            "left",
                            8075,
                            100,
                            "linear",
                            "${texto09_03_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid92",
                            "left",
                            9765,
                            100,
                            "linear",
                            "${texto09_03_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid93",
                            "left",
                            9865,
                            500,
                            "linear",
                            "${texto09_03_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid87",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid88",
                            "display",
                            7575,
                            0,
                            "linear",
                            "${texto09_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid89",
                            "display",
                            10365,
                            0,
                            "linear",
                            "${texto09_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid113",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid96",
                            "display",
                            8575,
                            0,
                            "linear",
                            "${imagem09_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid97",
                            "display",
                            9370,
                            0,
                            "linear",
                            "${imagem09_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid36",
                            "opacity",
                            2400,
                            400,
                            "linear",
                            "${imagem09_01_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid37",
                            "opacity",
                            2800,
                            400,
                            "linear",
                            "${imagem09_01_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid125",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${numero1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid126",
                            "opacity",
                            10365,
                            400,
                            "linear",
                            "${numero1}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid169",
                            "width",
                            2800,
                            0,
                            "linear",
                            "${texto09_01_01}",
                            '488px',
                            '488px'
                        ],
                        [
                            "eid123",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid22",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${imagem09_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid23",
                            "display",
                            4185,
                            0,
                            "linear",
                            "${imagem09_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid136",
                            "display",
                            600,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid137",
                            "display",
                            10365,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid112",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid104",
                            "display",
                            8175,
                            0,
                            "linear",
                            "${imagem09_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid105",
                            "display",
                            9765,
                            0,
                            "linear",
                            "${imagem09_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid149",
                            "display",
                            600,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid150",
                            "display",
                            10365,
                            0,
                            "linear",
                            "${_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid131",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${numero2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid132",
                            "opacity",
                            10365,
                            400,
                            "linear",
                            "${numero2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid157",
                            "display",
                            0,
                            0,
                            "linear",
                            "${avancar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid158",
                            "display",
                            2800,
                            0,
                            "linear",
                            "${avancar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid160",
                            "display",
                            8975,
                            0,
                            "linear",
                            "${avancar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid20",
                            "opacity",
                            1700,
                            400,
                            "linear",
                            "${imagem09_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid21",
                            "opacity",
                            3495,
                            400,
                            "linear",
                            "${imagem09_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid124",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${imagem09_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid19",
                            "display",
                            3890,
                            0,
                            "linear",
                            "${imagem09_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid98",
                            "opacity",
                            8575,
                            400,
                            "linear",
                            "${imagem09_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid99",
                            "opacity",
                            8975,
                            400,
                            "linear",
                            "${imagem09_03_02}",
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
                            "eid24",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${imagem09_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid25",
                            "opacity",
                            3790,
                            400,
                            "linear",
                            "${imagem09_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid73",
                            "opacity",
                            5385,
                            400,
                            "linear",
                            "${imagem09_02_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid74",
                            "opacity",
                            6580,
                            400,
                            "linear",
                            "${imagem09_02_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid118",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto05_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid42",
                            "display",
                            4785,
                            0,
                            "linear",
                            "${texto05_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid43",
                            "display",
                            7575,
                            0,
                            "linear",
                            "${texto05_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid115",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid79",
                            "display",
                            5385,
                            0,
                            "linear",
                            "${texto09_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid80",
                            "display",
                            6975,
                            0,
                            "linear",
                            "${texto09_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid156",
                            "display",
                            0,
                            0,
                            "linear",
                            "${voltar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid159",
                            "display",
                            6185,
                            0,
                            "linear",
                            "${voltar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid161",
                            "display",
                            11020,
                            0,
                            "linear",
                            "${voltar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid40",
                            "opacity",
                            2400,
                            400,
                            "linear",
                            "${texto09_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid41",
                            "opacity",
                            2800,
                            400,
                            "linear",
                            "${texto09_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid81",
                            "opacity",
                            5385,
                            400,
                            "linear",
                            "${texto09_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid82",
                            "opacity",
                            6580,
                            400,
                            "linear",
                            "${texto09_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid120",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid30",
                            "display",
                            2100,
                            0,
                            "linear",
                            "${imagem09_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid31",
                            "display",
                            3495,
                            0,
                            "linear",
                            "${imagem09_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid117",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid67",
                            "display",
                            5385,
                            0,
                            "linear",
                            "${imagem09_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid68",
                            "display",
                            6975,
                            0,
                            "linear",
                            "${imagem09_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid114",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid83",
                            "display",
                            5785,
                            0,
                            "linear",
                            "${imagem09_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid84",
                            "display",
                            6580,
                            0,
                            "linear",
                            "${imagem09_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid106",
                            "opacity",
                            8175,
                            400,
                            "linear",
                            "${imagem09_03_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid107",
                            "opacity",
                            9370,
                            400,
                            "linear",
                            "${imagem09_03_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid121",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem09_01_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid34",
                            "display",
                            2400,
                            0,
                            "linear",
                            "${imagem09_01_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid35",
                            "display",
                            3195,
                            0,
                            "linear",
                            "${imagem09_01_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto09_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13",
                            "display",
                            800,
                            0,
                            "linear",
                            "${texto09_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14",
                            "display",
                            4785,
                            0,
                            "linear",
                            "${texto09_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid6",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${titulo09}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid7",
                            "opacity",
                            10365,
                            400,
                            "linear",
                            "${titulo09}",
                            '1',
                            '0.000000'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("js/pag09/pag09_edgeActions.js");
})("EDGE-10311858");
