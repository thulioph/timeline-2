/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/pag07/',
        aud='media/',
        vid='media/',
        js='js/pag07/',
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
                            id: 'titulo07',
                            type: 'text',
                            rect: ['134px', '35px', '727px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "O MOVIMENTO NEGRO: \rDA REDEMOCRATIZAÇÃO À REPÚBLICA NOVA.",
                            align: "center",
                            font: ['LithosPro-Black', [30, "px"], "rgba(182,73,73,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'texto07_01_01',
                            symbolName: 'texto01',
                            display: 'none',
                            type: 'rect',
                            rect: ['-905px', '135px', '887', '121', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'imagem07_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['51px', '127px', '915px', '460px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem07_01_01.png",'0px','0px']
                        },
                        {
                            id: 'imagem07_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['590px', '155px', '235px', '230px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem07_01_02.png",'0px','0px']
                        },
                        {
                            id: 'texto07_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['497px', '395px', '439px', '18px', 'auto', 'auto'],
                            text: "Em 7 de Julho de 1978,  um ato público organizado em São Paulo contra a discriminação sofrida por quatro jovens negros no Clube de Regatas Tietê, deu origem ao Movimento Negro Unificado Contra a Discriminação Racial (MNU). A data, posteriormente, ficaria conhecida como o Dia Nacional de Luta Contra o Racismo.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(52,52,52,1.00)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['39px', '429px', '63px', '29px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'texto07_02_01',
                            symbolName: 'imagens07_04_01',
                            display: 'none',
                            type: 'rect',
                            rect: ['985px', '134px', '889', '64', 'auto', 'auto']
                        },
                        {
                            id: 'texto07_02_02',
                            symbolName: 'imagens07_04_01_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['985px', '246px', '889', '64', 'auto', 'auto']
                        },
                        {
                            id: 'imagem07_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['531px', '246px', '430px', '374px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem07_02_01.png",'0px','0px']
                        },
                        {
                            id: 'texto07_02_03',
                            display: 'none',
                            type: 'text',
                            rect: ['746px', '266px', '194px', '24px', 'auto', 'auto'],
                            text: "Trechos da música \"Raça\" de Milton Nascimento e Fernando Brant.",
                            align: "left",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(52, 52, 52)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto07_02_04',
                            display: 'none',
                            type: 'text',
                            rect: ['560px', '399px', '424px', '25px', 'auto', 'auto'],
                            text: "Lá vem a força, lá vem a magia<br>Que me incendeia o corpo de alegria<br>Lá vem a santa maldita euforia<br>Que me alucina, me joga e me rodopia...",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(52,52,52,1)", "400", "none solid rgb(52, 52, 52)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto07_02_05',
                            display: 'none',
                            type: 'text',
                            rect: ['560px', '507px', '391px', '24px', 'auto', 'auto'],
                            text: "...É Clementina cantando bonito <br>As aventuras do seu povo aflito<br>É Seu Francisco, boné e cachimbo<br>Me ensinando que a luta é mesmo comigo",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(52,52,52,1)", "400", "none solid rgb(52, 52, 52)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['756px', '216px', '84px', '29px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_3',
                            display: 'none',
                            type: 'rect',
                            rect: ['114px', '517px', '71px', '29px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'texto07_03_01',
                            symbolName: 'texto01_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['-905px', '135px', '887', '121', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'imagem07_03_01',
                            display: 'none',
                            type: 'image',
                            rect: ['16px', '212px', '710px', '360px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem07_03_01.png",'0px','0px']
                        },
                        {
                            id: 'texto07_03_02',
                            display: 'none',
                            type: 'text',
                            rect: ['239px', '575px', 'auto', 'auto', 'auto', 'auto'],
                            text: "II Marcha Nacional Contra o Genocídio do Povo Negro.",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "normal", "none", "", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_4',
                            display: 'none',
                            type: 'rect',
                            rect: ['114px', '517px', '71px', '29px', 'auto', 'auto'],
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
                            rect: ['null', 'null', '974px', '640px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(243,234,210,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 8895,
                    autoPlay: true,
                    data: [
                        [
                            "eid100",
                            "opacity",
                            4477,
                            400,
                            "linear",
                            "${texto07_02_05}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid101",
                            "opacity",
                            4877,
                            400,
                            "linear",
                            "${texto07_02_05}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid159",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem07_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid109",
                            "display",
                            6845,
                            0,
                            "linear",
                            "${imagem07_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid110",
                            "display",
                            7640,
                            0,
                            "linear",
                            "${imagem07_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid167",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem07_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid20",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${imagem07_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid21",
                            "display",
                            2890,
                            0,
                            "linear",
                            "${imagem07_01_01}",
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
                            8495,
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
                            "${titulo07}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid7",
                            "opacity",
                            8240,
                            400,
                            "linear",
                            "${titulo07}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid162",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_02_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid90",
                            "display",
                            4327,
                            0,
                            "linear",
                            "${texto07_02_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid91",
                            "display",
                            5417,
                            0,
                            "linear",
                            "${texto07_02_04}",
                            'block',
                            'none'
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
                            "eid147",
                            "display",
                            4827,
                            0,
                            "linear",
                            "${_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid148",
                            "display",
                            4927,
                            0,
                            "linear",
                            "${_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid166",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem07_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid24",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${imagem07_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid25",
                            "display",
                            2495,
                            0,
                            "linear",
                            "${imagem07_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid22",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${imagem07_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            2495,
                            400,
                            "linear",
                            "${imagem07_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid157",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid155",
                            "display",
                            7195,
                            0,
                            "linear",
                            "${_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid156",
                            "display",
                            7295,
                            0,
                            "linear",
                            "${_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid165",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid28",
                            "display",
                            1700,
                            0,
                            "linear",
                            "${texto07_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid29",
                            "display",
                            2495,
                            0,
                            "linear",
                            "${texto07_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid35",
                            "left",
                            3490,
                            500,
                            "linear",
                            "${texto07_02_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid36",
                            "left",
                            3990,
                            100,
                            "linear",
                            "${texto07_02_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid37",
                            "left",
                            5645,
                            100,
                            "linear",
                            "${texto07_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid38",
                            "left",
                            5745,
                            500,
                            "linear",
                            "${texto07_02_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid76",
                            "left",
                            3490,
                            500,
                            "linear",
                            "${texto07_02_02}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid77",
                            "left",
                            3990,
                            100,
                            "linear",
                            "${texto07_02_02}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid78",
                            "left",
                            5645,
                            100,
                            "linear",
                            "${texto07_02_02}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid79",
                            "left",
                            5745,
                            500,
                            "linear",
                            "${texto07_02_02}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid30",
                            "opacity",
                            1700,
                            400,
                            "linear",
                            "${texto07_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            2100,
                            400,
                            "linear",
                            "${texto07_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid163",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid86",
                            "display",
                            4090,
                            0,
                            "linear",
                            "${texto07_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid87",
                            "display",
                            5645,
                            0,
                            "linear",
                            "${texto07_02_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid117",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid118",
                            "display",
                            2050,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid119",
                            "display",
                            2150,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid133",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid134",
                            "display",
                            4827,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid135",
                            "display",
                            4927,
                            0,
                            "linear",
                            "${_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid161",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_02_05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid98",
                            "display",
                            4477,
                            0,
                            "linear",
                            "${texto07_02_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid99",
                            "display",
                            5272,
                            0,
                            "linear",
                            "${texto07_02_05}",
                            'block',
                            'none'
                        ],
                        [
                            "eid8",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9",
                            "display",
                            800,
                            0,
                            "linear",
                            "${texto07_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10",
                            "display",
                            3490,
                            0,
                            "linear",
                            "${texto07_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid115",
                            "opacity",
                            6845,
                            400,
                            "linear",
                            "${texto07_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid116",
                            "opacity",
                            7245,
                            400,
                            "linear",
                            "${texto07_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid158",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid113",
                            "display",
                            6845,
                            0,
                            "linear",
                            "${texto07_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid114",
                            "display",
                            7640,
                            0,
                            "linear",
                            "${texto07_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            8895,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid164",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem07_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid82",
                            "display",
                            4090,
                            0,
                            "linear",
                            "${imagem07_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid83",
                            "display",
                            5645,
                            0,
                            "linear",
                            "${imagem07_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto07_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid12",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto07_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid13",
                            "left",
                            2890,
                            100,
                            "linear",
                            "${texto07_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid14",
                            "left",
                            2990,
                            500,
                            "linear",
                            "${texto07_01_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid88",
                            "opacity",
                            4090,
                            400,
                            "linear",
                            "${texto07_02_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid89",
                            "opacity",
                            5250,
                            400,
                            "linear",
                            "${texto07_02_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid105",
                            "left",
                            6245,
                            500,
                            "linear",
                            "${texto07_03_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid106",
                            "left",
                            6745,
                            100,
                            "linear",
                            "${texto07_03_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid107",
                            "left",
                            7640,
                            100,
                            "linear",
                            "${texto07_03_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid108",
                            "left",
                            7740,
                            500,
                            "linear",
                            "${texto07_03_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid92",
                            "opacity",
                            4327,
                            400,
                            "linear",
                            "${texto07_02_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid93",
                            "opacity",
                            5022,
                            400,
                            "linear",
                            "${texto07_02_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid84",
                            "opacity",
                            4090,
                            400,
                            "linear",
                            "${imagem07_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid85",
                            "opacity",
                            5250,
                            400,
                            "linear",
                            "${imagem07_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid160",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid103",
                            "display",
                            6245,
                            0,
                            "linear",
                            "${texto07_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid104",
                            "display",
                            8240,
                            0,
                            "linear",
                            "${texto07_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid26",
                            "opacity",
                            1700,
                            400,
                            "linear",
                            "${imagem07_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid27",
                            "opacity",
                            2100,
                            400,
                            "linear",
                            "${imagem07_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid73",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid74",
                            "display",
                            3490,
                            0,
                            "linear",
                            "${texto07_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid75",
                            "display",
                            6245,
                            0,
                            "linear",
                            "${texto07_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid32",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto07_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid33",
                            "display",
                            3490,
                            0,
                            "linear",
                            "${texto07_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid34",
                            "display",
                            6245,
                            0,
                            "linear",
                            "${texto07_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid111",
                            "opacity",
                            6845,
                            400,
                            "linear",
                            "${imagem07_03_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid112",
                            "opacity",
                            7245,
                            400,
                            "linear",
                            "${imagem07_03_01}",
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
                            rect: ['0px', '0px', '385px', '121px', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(53,53,53,1.00)', '400', 'none solid rgb(46, 112, 159)', 'normal', 'break-word', ''],
                            text: 'O movimento negro ou os movimentos negros, como alguns designam, têm como marco principal, o MNU (Movimento Negro Unificado), criado em 1978. A denúncia do “mito da democracia racial” foi elemento fundamental para a constituição desse movimento considerado pelos militantes como popular e democrático se comparado aos anteriores formados (Pereira, 2010 p98).',
                            id: 'Text4Copy',
                            textStyle: ['', '', '27px', ''],
                            align: 'justify',
                            type: 'text'
                        },
                        {
                            rect: ['52px', '293px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            id: '_1',
                            text: '1',
                            align: 'justify',
                            type: 'text'
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
                            type: 'text',
                            rect: ['0px', '3px', '875px', '25px', 'auto', 'auto'],
                            align: 'justify',
                            id: 'Text1',
                            textStyle: ['', '', '27px', ''],
                            text: 'O movimento negro organizado “africanizou-se”. A partir daquele instante, as lides contra o racismo tinham como uma das premissas a promoção de uma identidade étnica específica do negro. O discurso tanto da negritude quanto do resgate das raízes ancestrais norteou o comportamento da militância. (Domingues, 2007, p-116) .',
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(52,52,52,1)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['790px', '80px', 'auto', 'auto', 'auto', 'auto'],
                            id: '_2',
                            text: '2',
                            align: 'justify',
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '889px', '64px']
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
            "imagens07_04_01_1": {
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
                            rect: ['0px', '0px', '484px', '25px', 'auto', 'auto'],
                            align: 'justify',
                            id: 'Text',
                            textStyle: ['', '', '27px', ''],
                            text: 'Muitos blocos Afros passam a falar o linguajar da periferia e o estilo rap passou a criar letras de músicas de protesto social e racial. Alguns adeptos desse estilo musical passaram a substituir o termo negro por preto, para distinguirem-se do movimento negro tradicional. Outros artistas brasileiros da MPB trataram nas suas músicas suas impressões sobre a questão racial no Brasil. Milton Nascimento e Fernando Brant compuseram a música Raça  relacionando raça à história da escravidão e à luta cotidiana que mulheres e homens negros travavam no Brasil. ',
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(52,52,52,1)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['131px', '268px', 'auto', 'auto', 'auto', 'auto'],
                            id: '_3',
                            text: '3',
                            align: 'justify',
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '889px', '64px']
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
            "texto01_1": {
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
                            textStyle: ['', '', '27px', ''],
                            id: 'Text4Copy',
                            text: 'Por fim, alguns ativistas passaram a criar campanhas como 100% negro buscando afirmar sua própria identidade. A luta do povo negro não para. Em agosto deste ano de 2014, a II Marcha Nacional Contra o Genocídio do Povo Negro levou as ruas mais de 60 mil pessoas  que denunciaram o racismo e a violência estatal que continuam a fazer vítimas todos os anos.',
                            align: 'justify',
                            rect: ['0px', '0px', '897px', '121px', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: '_4',
                            text: '4',
                            align: 'justify',
                            rect: ['120px', '78px', 'auto', 'auto', 'auto', 'auto']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("js/pag07/pag07_edgeActions.js");
})("EDGE-23181458");
