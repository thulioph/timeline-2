/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/pag02/',
        aud='media/',
        vid='media/',
        js='js/pag02/',
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
                            id: 'titulo02',
                            type: 'text',
                            rect: ['84px', '35px', '827px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "A IMIGRAÇÃO EUROPEIA: UMA QUESTÃO DE RAÇA. \rDO BRASIL IMPÉRIO AO SECULO XX.",
                            align: "center",
                            font: ['LithosPro-Black', [28, "px"], "rgba(182,73,73,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'texto02_01_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '131px', '905px', '25px', 'auto', 'auto'],
                            text: "A escravidão já existia em alguns povos africanos antes do início do tráfico negreiro. Em outras sociedades a escravidão era a punição para crimes (como assassinatos, roubo, feitiçarias e até adultério) e podia ocorrer rapto, confisco e até troca e compra. A substituição da escravidão doméstica, em pequena escala, pelo comércio de escravos ocorre a partir do século VIII pelos árabes e vai até o século XIX. Os europeus protagonizaram o tráfico entre os séculos XV até o XIX. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem02_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['548px', '235px', '410px', '370px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem02_01_01.png",'0px','0px']
                        },
                        {
                            id: 'texto02_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['166px', '574px', '372px', '24px', 'auto', 'auto'],
                            text: "Principais rotas do tráfico de escravos.",
                            align: "right",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem02_01_05',
                            display: 'none',
                            type: 'image',
                            rect: ['30px', '369px', '130px', '160px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem02_01_05.png",'0px','0px']
                        },
                        {
                            id: 'texto02_01_06',
                            display: 'none',
                            type: 'text',
                            rect: ['54px', '530px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Monjolo",
                            align: "right",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'imagem02_01_04',
                            display: 'none',
                            type: 'image',
                            rect: ['141px', '319px', '170px', '120px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem02_01_04.png",'0px','0px']
                        },
                        {
                            id: 'texto02_01_05',
                            display: 'none',
                            type: 'text',
                            rect: ['169px', '440px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Congo",
                            align: "right",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'imagem02_01_03',
                            display: 'none',
                            type: 'image',
                            rect: ['276px', '370px', '140px', '160px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem02_01_03.png",'0px','0px']
                        },
                        {
                            id: 'texto02_01_04',
                            display: 'none',
                            type: 'text',
                            rect: ['298px', '526px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Benguela",
                            align: "right",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'imagem02_01_02',
                            display: 'none',
                            type: 'image',
                            rect: ['394px', '319px', '160px', '120px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem02_01_02.png",'0px','0px']
                        },
                        {
                            id: 'texto02_01_03',
                            display: 'none',
                            type: 'text',
                            rect: ['427px', '440px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Angola",
                            align: "right",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'texto10_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '133px', '430px', '25px', 'auto', 'auto'],
                            text: "A conquista das Américas deu um novo norte ao tráfico negreiro, sendo as plantações monocultoras do  Caribe e os sistemas mineradores do México o grande estímulo para o comércio de escravos, e 8 entre cada 10 africanos desembarcaram em portos da América Espanhola entre 1501 e 1600. A intensificação do tráfico ocorreu após a colonização da América portuguesa. Senegal e Camarões foram os principais polos de saída de escravos representando 60% das exportações e a região congo-angolana foi o segundo depósito de escravos. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem02_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['487px', '137px', '440px', '275px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem02_02_01.png",'0px','0px']
                        },
                        {
                            id: 'texto02_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['518px', '417px', '378px', '24px', 'auto', 'auto'],
                            text: "Muitos negros morriam durante a viagem de percurso \rentre África e América.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto02_03_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '131px', '905px', '25px', 'auto', 'auto'],
                            text: "O apogeu do tráfico aconteceu no século XVIII quando mais de 5,6 milhões de escravos embarcaram no continente para abastecer as regiões mineradoras no Brasil e as regiões produtoras de algodão dos EUA.\r<br>A Revolução Francesa 1789 e a Revolução do Haiti -1791 geraram questionamentos contrários à escravidão o que provocou o fim do negócio. A escravidão perdurou até o fim do século XIX sendo o Brasil o último país a abolir a escravidão nas Américas.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem02_03_01',
                            display: 'none',
                            type: 'image',
                            rect: ['7px', '306px', '350px', '205px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem02_03_01.png",'0px','0px']
                        },
                        {
                            id: 'texto02_03_02',
                            display: 'none',
                            type: 'text',
                            rect: ['79px', '515px', '190px', '24px', 'auto', 'auto'],
                            text: "Gráfico do tráfico negreiro nas Américas.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "normal", "none", "", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem02_03_02',
                            display: 'none',
                            type: 'image',
                            rect: ['397px', '181px', '558px', '304px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem02_03_02.png",'0px','0px']
                        },
                        {
                            id: 'texto02_03_03',
                            display: 'none',
                            type: 'text',
                            rect: ['457px', '485px', '243px', '24px', 'auto', 'auto'],
                            text: "Lavragem de ouro em Itacolomi, Minas Gerais.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem02_03_03',
                            display: 'none',
                            type: 'image',
                            rect: ['744px', '359px', '180px', '170px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem02_03_03.png",'0px','0px']
                        },
                        {
                            id: 'texto02_03_04',
                            display: 'none',
                            type: 'text',
                            rect: ['760px', '529px', '189px', '24px', 'auto', 'auto'],
                            text: "Escravos em uma plantação de algodão na Geórgia, 1820.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
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
                    duration: 12580,
                    autoPlay: true,
                    data: [
                        [
                            "eid6",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${titulo02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid7",
                            "opacity",
                            11965,
                            400,
                            "linear",
                            "${titulo02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid34",
                            "opacity",
                            2000,
                            400,
                            "linear",
                            "${imagem02_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid35",
                            "opacity",
                            3990,
                            400,
                            "linear",
                            "${imagem02_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid136",
                            "opacity",
                            0,
                            400,
                            "linear",
                            "${borda}",
                            '0',
                            '1'
                        ],
                        [
                            "eid137",
                            "opacity",
                            12180,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid121",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_01_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid36",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${texto02_01_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid37",
                            "display",
                            4385,
                            0,
                            "linear",
                            "${texto02_01_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid119",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_01_05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid44",
                            "display",
                            2400,
                            0,
                            "linear",
                            "${texto02_01_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid45",
                            "display",
                            3990,
                            0,
                            "linear",
                            "${texto02_01_05}",
                            'block',
                            'none'
                        ],
                        [
                            "eid132",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem02_03_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid105",
                            "display",
                            9775,
                            0,
                            "linear",
                            "${imagem02_03_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid106",
                            "display",
                            10570,
                            0,
                            "linear",
                            "${imagem02_03_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid126",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid68",
                            "display",
                            6375,
                            0,
                            "linear",
                            "${texto02_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid69",
                            "display",
                            7170,
                            0,
                            "linear",
                            "${texto02_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid50",
                            "opacity",
                            2800,
                            400,
                            "linear",
                            "${imagem02_01_05}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid51",
                            "opacity",
                            3200,
                            400,
                            "linear",
                            "${imagem02_01_05}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid11",
                            "left",
                            600,
                            500,
                            "linear",
                            "${texto02_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid12",
                            "left",
                            1100,
                            100,
                            "linear",
                            "${texto02_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid13",
                            "left",
                            5175,
                            100,
                            "linear",
                            "${texto02_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid14",
                            "left",
                            5275,
                            500,
                            "linear",
                            "${texto02_01_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid83",
                            "left",
                            8375,
                            500,
                            "linear",
                            "${texto02_03_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid84",
                            "left",
                            8875,
                            100,
                            "linear",
                            "${texto02_03_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid85",
                            "left",
                            11365,
                            100,
                            "linear",
                            "${texto02_03_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid86",
                            "left",
                            11465,
                            500,
                            "linear",
                            "${texto02_03_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid70",
                            "opacity",
                            6375,
                            400,
                            "linear",
                            "${texto02_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid71",
                            "opacity",
                            6775,
                            400,
                            "linear",
                            "${texto02_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid122",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem02_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid24",
                            "display",
                            1600,
                            0,
                            "linear",
                            "${imagem02_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid25",
                            "display",
                            4780,
                            0,
                            "linear",
                            "${imagem02_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid124",
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
                            5775,
                            0,
                            "linear",
                            "${texto10_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid61",
                            "display",
                            7775,
                            0,
                            "linear",
                            "${texto10_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid116",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem02_01_05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid48",
                            "display",
                            2800,
                            0,
                            "linear",
                            "${imagem02_01_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid49",
                            "display",
                            3595,
                            0,
                            "linear",
                            "${imagem02_01_05}",
                            'block',
                            'none'
                        ],
                        [
                            "eid130",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem02_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid97",
                            "display",
                            9375,
                            0,
                            "linear",
                            "${imagem02_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid98",
                            "display",
                            10965,
                            0,
                            "linear",
                            "${imagem02_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid123",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid28",
                            "display",
                            1600,
                            0,
                            "linear",
                            "${texto02_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid29",
                            "display",
                            4780,
                            0,
                            "linear",
                            "${texto02_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid111",
                            "opacity",
                            9775,
                            400,
                            "linear",
                            "${texto02_03_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid112",
                            "opacity",
                            10175,
                            400,
                            "linear",
                            "${texto02_03_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid115",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid20",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${texto02_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid21",
                            "display",
                            5175,
                            0,
                            "linear",
                            "${texto02_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid66",
                            "opacity",
                            6375,
                            400,
                            "linear",
                            "${imagem02_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid67",
                            "opacity",
                            6775,
                            400,
                            "linear",
                            "${imagem02_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid18",
                            "opacity",
                            1200,
                            400,
                            "linear",
                            "${imagem02_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid19",
                            "opacity",
                            4780,
                            400,
                            "linear",
                            "${imagem02_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid46",
                            "opacity",
                            2400,
                            400,
                            "linear",
                            "${texto02_01_05}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid47",
                            "opacity",
                            3595,
                            400,
                            "linear",
                            "${texto02_01_05}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid120",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem02_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid32",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${imagem02_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid33",
                            "display",
                            4385,
                            0,
                            "linear",
                            "${imagem02_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid30",
                            "opacity",
                            1600,
                            400,
                            "linear",
                            "${texto02_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            4385,
                            400,
                            "linear",
                            "${texto02_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid42",
                            "opacity",
                            2400,
                            400,
                            "linear",
                            "${imagem02_01_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid43",
                            "opacity",
                            3595,
                            400,
                            "linear",
                            "${imagem02_01_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid8",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid9",
                            "display",
                            600,
                            0,
                            "linear",
                            "${texto02_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10",
                            "display",
                            5775,
                            0,
                            "linear",
                            "${texto02_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid133",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_03_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid109",
                            "display",
                            9775,
                            0,
                            "linear",
                            "${texto02_03_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid110",
                            "display",
                            10570,
                            0,
                            "linear",
                            "${texto02_03_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid38",
                            "opacity",
                            2000,
                            400,
                            "linear",
                            "${texto02_01_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid39",
                            "opacity",
                            3990,
                            400,
                            "linear",
                            "${texto02_01_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid127",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid81",
                            "display",
                            8375,
                            0,
                            "linear",
                            "${texto02_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid82",
                            "display",
                            11965,
                            0,
                            "linear",
                            "${texto02_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid95",
                            "opacity",
                            8975,
                            400,
                            "linear",
                            "${texto02_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid96",
                            "opacity",
                            10965,
                            400,
                            "linear",
                            "${texto02_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid99",
                            "opacity",
                            9375,
                            400,
                            "linear",
                            "${imagem02_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid100",
                            "opacity",
                            10570,
                            400,
                            "linear",
                            "${imagem02_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid129",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid93",
                            "display",
                            8975,
                            0,
                            "linear",
                            "${texto02_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid94",
                            "display",
                            11360,
                            0,
                            "linear",
                            "${texto02_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid131",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_03_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid101",
                            "display",
                            9375,
                            0,
                            "linear",
                            "${texto02_03_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid102",
                            "display",
                            10965,
                            0,
                            "linear",
                            "${texto02_03_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid91",
                            "opacity",
                            8975,
                            400,
                            "linear",
                            "${imagem02_03_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid92",
                            "opacity",
                            10965,
                            400,
                            "linear",
                            "${imagem02_03_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid117",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_01_06}",
                            'none',
                            'none'
                        ],
                        [
                            "eid52",
                            "display",
                            2800,
                            0,
                            "linear",
                            "${texto02_01_06}",
                            'none',
                            'block'
                        ],
                        [
                            "eid53",
                            "display",
                            3595,
                            0,
                            "linear",
                            "${texto02_01_06}",
                            'block',
                            'none'
                        ],
                        [
                            "eid135",
                            "display",
                            12580,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid128",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem02_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid89",
                            "display",
                            8975,
                            0,
                            "linear",
                            "${imagem02_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid90",
                            "display",
                            11360,
                            0,
                            "linear",
                            "${imagem02_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid125",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem02_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid64",
                            "display",
                            6375,
                            0,
                            "linear",
                            "${imagem02_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid65",
                            "display",
                            7170,
                            0,
                            "linear",
                            "${imagem02_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid114",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem02_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16",
                            "display",
                            1200,
                            0,
                            "linear",
                            "${imagem02_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17",
                            "display",
                            5175,
                            0,
                            "linear",
                            "${imagem02_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid26",
                            "opacity",
                            1600,
                            400,
                            "linear",
                            "${imagem02_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid27",
                            "opacity",
                            4385,
                            400,
                            "linear",
                            "${imagem02_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid56",
                            "left",
                            5775,
                            500,
                            "linear",
                            "${texto10_02_01}",
                            '985px',
                            '22px'
                        ],
                        [
                            "eid57",
                            "left",
                            6275,
                            100,
                            "linear",
                            "${texto10_02_01}",
                            '22px',
                            '35px'
                        ],
                        [
                            "eid58",
                            "left",
                            7175,
                            100,
                            "linear",
                            "${texto10_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid59",
                            "left",
                            7275,
                            500,
                            "linear",
                            "${texto10_02_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid107",
                            "opacity",
                            9775,
                            400,
                            "linear",
                            "${imagem02_03_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid108",
                            "opacity",
                            10175,
                            400,
                            "linear",
                            "${imagem02_03_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid22",
                            "opacity",
                            1200,
                            400,
                            "linear",
                            "${texto02_01_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid23",
                            "opacity",
                            4780,
                            400,
                            "linear",
                            "${texto02_01_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid118",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem02_01_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid40",
                            "display",
                            2400,
                            0,
                            "linear",
                            "${imagem02_01_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid41",
                            "display",
                            3990,
                            0,
                            "linear",
                            "${imagem02_01_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid103",
                            "opacity",
                            9375,
                            400,
                            "linear",
                            "${texto02_03_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid104",
                            "opacity",
                            10570,
                            400,
                            "linear",
                            "${texto02_03_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid54",
                            "opacity",
                            2800,
                            400,
                            "linear",
                            "${texto02_01_06}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid55",
                            "opacity",
                            3200,
                            400,
                            "linear",
                            "${texto02_01_06}",
                            '1',
                            '0.000000'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("js/pag02/pag02_edgeActions.js");
})("EDGE-9484453");
