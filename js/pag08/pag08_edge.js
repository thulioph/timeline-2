/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/pag08/',
        aud='media/',
        vid='media/',
        js='js/pag08/',
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
                            id: 'titulo08',
                            type: 'text',
                            rect: ['134px', '35px', '727px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "AS REPERCUSSÕES DA LEI Nº. 10.639, SANCIONADA EM 2003. ",
                            align: "center",
                            font: ['LithosPro-Black', [30, "px"], "rgba(182,73,73,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'texto08_01_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '131px', '506px', '25px', 'auto', 'auto'],
                            text: "Publicada em junho de 2004, a resolução 01 do Conselho Pleno do CNE (Conselho Nacional de Educação) instituiu oficialmente as Diretrizes Curriculares Nacionais para a Educação das Relações Étnico-Raciais e para o Ensino de História e Cultura Afro-Brasileira e Africana. \rTeoricamente, a luta contra o preconceito e racismo passa ser o grande foco das discussões. O uso de novas categorias conceituais de análise de estudo como multiculturalismo, afirmação étnica, cultura afro-brasileira, pretendem gerar mudanças na pedagogia de ensino.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem08_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['241px', '131px', '715px', '220px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem08_01_01.png",'0px','0px']
                        },
                        {
                            id: 'texto08_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['595px', '169px', '342px', '100px', 'auto', 'auto'],
                            text: "O Conselho Nacional de Educação é um órgão colegiado integrante da estrutura do Ministério da Educação do Brasil (MEC), que atua na formulação e avaliação da política nacional de educação.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem08_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['585px', '325px', '275px', '280px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem08_01_02.png",'0px','0px']
                        },
                        {
                            id: 'texto08_01_03',
                            display: 'none',
                            type: 'text',
                            rect: ['776px', '476px', '191px', '24px', 'auto', 'auto'],
                            text: "Capa das Diretrizes Curriculares para ensino de cultura afro-brasileira e africana.",
                            align: "left",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem08_01_04',
                            display: 'none',
                            type: 'image',
                            rect: ['93px', '472px', '478px', '115px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem08_01_04.png",'0px','0px']
                        },
                        {
                            id: 'imagem08_01_03',
                            display: 'none',
                            type: 'image',
                            rect: ['12px', '341px', '155px', '260px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem08_01_03.png",'0px','0px']
                        },
                        {
                            id: 'texto08_01_04',
                            display: 'none',
                            type: 'text',
                            rect: ['169px', '481px', '384px', '48px', 'auto', 'auto'],
                            text: "Racismo consiste no preconceito e na discriminação com base em percepções sociais baseadas em diferenças biológicas entre os povos.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(52,52,52,1.00)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto08_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '133px', '894px', '25px', 'auto', 'auto'],
                            text: "O novo ensino deve assumir os seguintes princípios:",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["0px", "", "27px", ""]
                        },
                        {
                            id: 'imagem08_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['8px', '191px', '555px', '144px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem08_02_01.png",'0px','0px']
                        },
                        {
                            id: 'texto08_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '203px', '509px', '25px', 'auto', 'auto'],
                            text: "consciência política e histórica da diversidade, \rfortalecimento de identidades e direitos, \rações educativas de combate ao racismo e as discriminações.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["0px", "", "27px", ""]
                        },
                        {
                            id: 'texto08_02_03',
                            symbolName: 'imagens07_04_01',
                            display: 'none',
                            type: 'rect',
                            rect: ['985px', '351px', '889', '64', 'auto', 'auto']
                        },
                        {
                            id: 'imagem08_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['585px', '153px', '355px', '270px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem08_02_02.png",'0px','0px']
                        },
                        {
                            id: 'texto08_02_04',
                            display: 'none',
                            type: 'text',
                            rect: ['629px', '430px', '280px', '72px', 'auto', 'auto'],
                            text: "Dança típica africana em escola pública - Se faz importante o ensino prático de cultura afro nas escolas.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['134px', '458px', '107px', '29px', 'auto', 'auto'],
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
                    duration: 10345,
                    autoPlay: true,
                    data: [
                        [
                            "eid123",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto08_01_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid41",
                            "display",
                            2790,
                            0,
                            "linear",
                            "${texto08_01_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid42",
                            "display",
                            3585,
                            0,
                            "linear",
                            "${texto08_01_04}",
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
                            9945,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto08_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8",
                            "display",
                            800,
                            0,
                            "linear",
                            "${texto08_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid9",
                            "display",
                            5565,
                            0,
                            "linear",
                            "${texto08_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid121",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto08_02_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid114",
                            "display",
                            7365,
                            0,
                            "linear",
                            "${texto08_02_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid115",
                            "display",
                            8160,
                            0,
                            "linear",
                            "${texto08_02_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid104",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto08_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid49",
                            "display",
                            5565,
                            0,
                            "linear",
                            "${texto08_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid50",
                            "display",
                            9690,
                            0,
                            "linear",
                            "${texto08_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid112",
                            "opacity",
                            7365,
                            400,
                            "linear",
                            "${imagem08_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid113",
                            "opacity",
                            7765,
                            400,
                            "linear",
                            "${imagem08_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid6",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${titulo08}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid7",
                            "opacity",
                            9690,
                            400,
                            "linear",
                            "${titulo08}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid57",
                            "left",
                            6565,
                            500,
                            "linear",
                            "${texto08_02_02}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid58",
                            "left",
                            7065,
                            100,
                            "linear",
                            "${texto08_02_02}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid59",
                            "left",
                            8360,
                            100,
                            "linear",
                            "${texto08_02_02}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid60",
                            "left",
                            8460,
                            500,
                            "linear",
                            "${texto08_02_02}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid116",
                            "opacity",
                            7365,
                            400,
                            "linear",
                            "${texto08_02_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid117",
                            "opacity",
                            7765,
                            400,
                            "linear",
                            "${texto08_02_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid96",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto08_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid97",
                            "display",
                            6765,
                            0,
                            "linear",
                            "${texto08_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid98",
                            "display",
                            8760,
                            0,
                            "linear",
                            "${texto08_02_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid39",
                            "opacity",
                            2790,
                            400,
                            "linear",
                            "${imagem08_01_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            3190,
                            400,
                            "linear",
                            "${imagem08_01_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid10",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto08_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid11",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto08_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid12",
                            "left",
                            4965,
                            100,
                            "linear",
                            "${texto08_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid13",
                            "left",
                            5065,
                            500,
                            "linear",
                            "${texto08_01_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid43",
                            "opacity",
                            2790,
                            400,
                            "linear",
                            "${texto08_01_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid44",
                            "opacity",
                            3190,
                            400,
                            "linear",
                            "${texto08_01_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid53",
                            "opacity",
                            6165,
                            400,
                            "linear",
                            "${imagem08_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid54",
                            "opacity",
                            8685,
                            400,
                            "linear",
                            "${imagem08_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid19",
                            "opacity",
                            1400,
                            400,
                            "linear",
                            "${imagem08_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            4570,
                            400,
                            "linear",
                            "${imagem08_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid45",
                            "left",
                            5565,
                            500,
                            "linear",
                            "${texto08_02_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid46",
                            "left",
                            6065,
                            100,
                            "linear",
                            "${texto08_02_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid47",
                            "left",
                            9090,
                            100,
                            "linear",
                            "${texto08_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid48",
                            "left",
                            9190,
                            500,
                            "linear",
                            "${texto08_02_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid35",
                            "opacity",
                            2495,
                            400,
                            "linear",
                            "${imagem08_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid36",
                            "opacity",
                            3485,
                            400,
                            "linear",
                            "${imagem08_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid31",
                            "opacity",
                            2095,
                            400,
                            "linear",
                            "${texto08_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid32",
                            "opacity",
                            3880,
                            400,
                            "linear",
                            "${texto08_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid125",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem08_01_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid37",
                            "display",
                            2790,
                            0,
                            "linear",
                            "${imagem08_01_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid38",
                            "display",
                            3585,
                            0,
                            "linear",
                            "${imagem08_01_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid127",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto08_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29",
                            "display",
                            2095,
                            0,
                            "linear",
                            "${texto08_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid30",
                            "display",
                            4275,
                            0,
                            "linear",
                            "${texto08_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid128",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto08_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid21",
                            "display",
                            1695,
                            0,
                            "linear",
                            "${texto08_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid22",
                            "display",
                            4670,
                            0,
                            "linear",
                            "${texto08_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            10345,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid118",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid119",
                            "display",
                            7715,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid120",
                            "display",
                            7815,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid27",
                            "opacity",
                            2095,
                            400,
                            "linear",
                            "${imagem08_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid28",
                            "opacity",
                            3880,
                            400,
                            "linear",
                            "${imagem08_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid129",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem08_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid17",
                            "display",
                            1400,
                            0,
                            "linear",
                            "${imagem08_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18",
                            "display",
                            4965,
                            0,
                            "linear",
                            "${imagem08_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid122",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem08_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid110",
                            "display",
                            7365,
                            0,
                            "linear",
                            "${imagem08_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid111",
                            "display",
                            8160,
                            0,
                            "linear",
                            "${imagem08_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid92",
                            "left",
                            6765,
                            500,
                            "linear",
                            "${texto08_02_03}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid93",
                            "left",
                            7265,
                            100,
                            "linear",
                            "${texto08_02_03}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid94",
                            "left",
                            8160,
                            100,
                            "linear",
                            "${texto08_02_03}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid95",
                            "left",
                            8260,
                            500,
                            "linear",
                            "${texto08_02_03}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid126",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem08_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid25",
                            "display",
                            2095,
                            0,
                            "linear",
                            "${imagem08_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid26",
                            "display",
                            4275,
                            0,
                            "linear",
                            "${imagem08_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid102",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto08_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid55",
                            "display",
                            6565,
                            0,
                            "linear",
                            "${texto08_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid56",
                            "display",
                            8960,
                            0,
                            "linear",
                            "${texto08_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid23",
                            "opacity",
                            1695,
                            400,
                            "linear",
                            "${texto08_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid24",
                            "opacity",
                            4275,
                            400,
                            "linear",
                            "${texto08_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid103",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem08_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid51",
                            "display",
                            6165,
                            0,
                            "linear",
                            "${imagem08_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid52",
                            "display",
                            9080,
                            0,
                            "linear",
                            "${imagem08_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid124",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem08_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid33",
                            "display",
                            2495,
                            0,
                            "linear",
                            "${imagem08_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid34",
                            "display",
                            3880,
                            0,
                            "linear",
                            "${imagem08_01_03}",
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
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(52,52,52,1)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', ''],
                            type: 'text',
                            align: 'justify',
                            id: 'Text1',
                            textStyle: ['', '', '27px', ''],
                            text: '“Esses princípios e seus desdobramentos mostram exigências de mudança de mentalidade, de maneiras de pensar e agir dos indivíduos em particular, assim como das instituições e das suas tradições culturais”   (Arantes, 2019, p16). ',
                            rect: ['0px', '3px', '516px', '25px', 'auto', 'auto']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(52, 52, 52)', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: '_1',
                            text: '1',
                            align: 'justify',
                            rect: ['191px', '107px', 'auto', 'auto', 'auto', 'auto']
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("js/pag08/pag08_edgeActions.js");
})("EDGE-7858663");
