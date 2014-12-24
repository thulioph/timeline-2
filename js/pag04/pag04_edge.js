/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/pag04/',
        aud='media/',
        vid='media/',
        js='js/pag04/',
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
                            id: 'titulo04',
                            type: 'text',
                            rect: ['77px', '35px', '835px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            text: "ABOLIÇÃO DA ESCRAVATURA NO BRASIL IMPÉRIO À CIDADANIA NO BRASIL REPUBLICANO.",
                            align: "center",
                            font: ['LithosPro-Black', [30, "px"], "rgba(182,73,73,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "32px", ""]
                        },
                        {
                            id: 'texto04_01_01',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '131px', '901px', '25px', 'auto', 'auto'],
                            text: "O Brasil tem o negativo título de ter sido o último país independente da América a abolir a escravidão. Após o fim do tráfico negreiro em 1850, a escravidão passou a sofrer transformações significativas: a população escrava diminuiu, o tráfico inter-provincial não foi suficiente para atender as demandas das grandes lavouras de café (cultura em desenvolvimento neste período) e o preço dos escravos aumentou consideravelmente. ",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'texto04_01_02',
                            display: 'none',
                            type: 'text',
                            rect: ['-905px', '265px', '423px', '25px', 'auto', 'auto'],
                            text: "Como forma de resolver esses problemas algumas ações foram impetradas. Incentivou-se a migração de estrangeiros para o Brasil. Promulgou-se a lei de terra, duas semanas após a promulgação do fim do Tráfico em 1850, restringindo o acesso à terra aos pequenos proprietários, já que a partir daquela data as terras só podiam ser obtidas por meio de compra e venda.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "27px", ""]
                        },
                        {
                            id: 'imagem04_01_01',
                            display: 'none',
                            type: 'image',
                            rect: ['484px', '270px', '425px', '260px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem04_01_01.png",'0px','0px']
                        },
                        {
                            id: 'texto04_01_03',
                            display: 'none',
                            type: 'text',
                            rect: ['470px', '536px', '453px', '24px', 'auto', 'auto'],
                            text: "Detalhe do quadro de Auguste François Biard (1798-1882): A abolição da escravatura.",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto04_02_01',
                            display: 'none',
                            type: 'text',
                            rect: ['985px', '133px', '554px', '25px', 'auto', 'auto'],
                            text: "Para promover a transição de mão-de-obra escrava para livre, de forma gradual e lenta, o parlamento criou as chamadas leis emancipacionistas, quais sejam: lei do ventre livre (1871) e a lei dos Sexagenários (1885) protegendo mais os senhores do que os escravos, que se viam impossibilitados de sobreviverem sozinhos ora como crianças ou ora como velhos.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["0px", "", "27px", ""]
                        },
                        {
                            id: 'imagem04_02_01',
                            display: 'none',
                            type: 'image',
                            rect: ['113px', '121px', '850px', '480px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem04_02_01.png",'0px','0px']
                        },
                        {
                            id: 'texto04_02_02',
                            display: 'none',
                            type: 'text',
                            rect: ['632px', '138px', '319px', '175px', 'auto', 'auto'],
                            text: "§ 1.º da lei 2040: - Os ditos filhos menores ficarão em poder e sob a autoridade dos senhores de suas mães, os quais terão a obrigação de criá-los e tratá-los até a idade de oito anos completos. Chegando o filho da escrava a esta idade, o senhor da mãe terá opção, ou de receber do Estado a indenização de 600$000, ou de utilizar-se dos serviços do menor até a idade de 21 anos completos. No primeiro caso, o Governo receberá o menor e lhe dará destino, em conformidade da presente lei.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [20, "px"], "rgba(53,53,53,1)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""]
                        },
                        {
                            id: 'texto04_02_03',
                            display: 'none',
                            type: 'text',
                            rect: ['70px', '356px', 'auto', 'auto', 'auto', 'auto'],
                            text: "Alguns nomes que fizeram parte da luta abolicionista.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem04_02_06',
                            display: 'none',
                            type: 'image',
                            rect: ['49px', '465px', '512px', '4px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem04_02_06.png",'0px','0px']
                        },
                        {
                            id: 'imagem04_02_02',
                            display: 'none',
                            type: 'image',
                            rect: ['35px', '406px', '120px', '120px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem04_02_02.png",'0px','0px']
                        },
                        {
                            id: 'texto04_02_04',
                            display: 'none',
                            type: 'text',
                            rect: ['44px', '534px', '94px', '24px', 'auto', 'auto'],
                            text: "Antônio Bento",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem04_02_03',
                            display: 'none',
                            type: 'image',
                            rect: ['180px', '406px', '120px', '120px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem04_02_03.png",'0px','0px']
                        },
                        {
                            id: 'texto04_02_05',
                            display: 'none',
                            type: 'text',
                            rect: ['199px', '534px', '78px', '24px', 'auto', 'auto'],
                            text: "Castro Alves",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem04_02_04',
                            display: 'none',
                            type: 'image',
                            rect: ['324px', '406px', '120px', '120px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem04_02_04.png",'0px','0px']
                        },
                        {
                            id: 'texto02_04_06',
                            display: 'none',
                            type: 'text',
                            rect: ['321px', '534px', '120px', '24px', 'auto', 'auto'],
                            text: "José do Patrocínio",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem04_02_05',
                            display: 'none',
                            type: 'image',
                            rect: ['469px', '406px', '120px', '120px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem04_02_05.png",'0px','0px']
                        },
                        {
                            id: 'texto04_02_07',
                            display: 'none',
                            type: 'text',
                            rect: ['479px', '534px', '99px', '24px', 'auto', 'auto'],
                            text: "Joaquim Nabuco",
                            align: "center",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(153,0,0,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'texto04_03_01',
                            symbolName: 'texto01',
                            display: 'none',
                            type: 'rect',
                            rect: ['-905px', '135px', '887', '121', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'imagem04_03_02',
                            display: 'none',
                            type: 'image',
                            rect: ['177px', '309px', '397px', '120px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem04_03_02.png",'0px','0px']
                        },
                        {
                            id: 'imagem04_03_01',
                            display: 'none',
                            type: 'image',
                            rect: ['20px', '239px', '530px', '290px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem04_03_01.png",'0px','0px']
                        },
                        {
                            id: 'texto04_03_02',
                            display: 'none',
                            type: 'text',
                            rect: ['205px', '321px', '355px', '24px', 'auto', 'auto'],
                            text: "BOLSANELLO, Maria Augusta. Autora do artigo Darwinismo social, eugenia e racismo “científico”: sua repercussão na sociedade e na educação brasileira.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(52,52,52,1.00)", "400", "none solid rgb(153, 0, 0)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: 'imagem04_03_04',
                            display: 'none',
                            type: 'image',
                            rect: ['297px', '473px', '625px', '120px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem04_03_04.png",'0px','0px']
                        },
                        {
                            id: 'imagem04_03_03',
                            display: 'none',
                            type: 'image',
                            rect: ['472px', '350px', '440px', '225px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem04_03_03.png",'0px','0px']
                        },
                        {
                            id: 'texto04_03_03',
                            display: 'none',
                            type: 'text',
                            rect: ['317px', '483px', '354px', '24px', 'auto', 'auto'],
                            text: "Francis Galton foi o criador do conceito de \"eugenia\" que seria a melhora de uma determinada espécie através da seleção artificial.",
                            align: "justify",
                            font: ['Verdana, Geneva, sans-serif', [18, "px"], "rgba(52,52,52,1.00)", "400", "none solid rgb(52, 52, 52)", "normal", "break-word", ""],
                            textStyle: ["", "", "24px", ""]
                        },
                        {
                            id: '_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['566px', '210px', '75px', '29px', 'auto', 'auto'],
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
                    duration: 14515,
                    autoPlay: true,
                    data: [
                        [
                            "eid34",
                            "opacity",
                            1500,
                            400,
                            "linear",
                            "${imagem04_01_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid35",
                            "opacity",
                            1900,
                            400,
                            "linear",
                            "${imagem04_01_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid171",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_02_07}",
                            'none',
                            'none'
                        ],
                        [
                            "eid122",
                            "display",
                            5750,
                            0,
                            "linear",
                            "${texto04_02_07}",
                            'none',
                            'block'
                        ],
                        [
                            "eid121",
                            "display",
                            6945,
                            0,
                            "linear",
                            "${texto04_02_07}",
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
                            14115,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid162",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid81",
                            "display",
                            4150,
                            0,
                            "linear",
                            "${texto04_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid82",
                            "display",
                            8575,
                            0,
                            "linear",
                            "${texto04_02_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid124",
                            "opacity",
                            5750,
                            400,
                            "linear",
                            "${texto04_02_07}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid123",
                            "opacity",
                            6550,
                            400,
                            "linear",
                            "${texto04_02_07}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid163",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_02_06}",
                            'none',
                            'none'
                        ],
                        [
                            "eid126",
                            "display",
                            5950,
                            0,
                            "linear",
                            "${imagem04_02_06}",
                            'none',
                            'block'
                        ],
                        [
                            "eid125",
                            "display",
                            6745,
                            0,
                            "linear",
                            "${imagem04_02_06}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15",
                            "display",
                            800,
                            0,
                            "linear",
                            "${texto04_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${texto04_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid170",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_02_05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid118",
                            "display",
                            5750,
                            0,
                            "linear",
                            "${imagem04_02_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid117",
                            "display",
                            6945,
                            0,
                            "linear",
                            "${imagem04_02_05}",
                            'block',
                            'none'
                        ],
                        [
                            "eid104",
                            "opacity",
                            4950,
                            400,
                            "linear",
                            "${imagem04_02_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid103",
                            "opacity",
                            7390,
                            400,
                            "linear",
                            "${imagem04_02_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid174",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid136",
                            "display",
                            10880,
                            0,
                            "linear",
                            "${imagem04_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid137",
                            "display",
                            13260,
                            0,
                            "linear",
                            "${imagem04_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid60",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid61",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${texto04_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid62",
                            "display",
                            9680,
                            0,
                            "linear",
                            "${texto04_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid138",
                            "opacity",
                            10880,
                            400,
                            "linear",
                            "${imagem04_03_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid139",
                            "opacity",
                            12865,
                            400,
                            "linear",
                            "${imagem04_03_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid18",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_01_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid19",
                            "display",
                            900,
                            0,
                            "linear",
                            "${texto04_01_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20",
                            "display",
                            2895,
                            0,
                            "linear",
                            "${texto04_01_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid150",
                            "opacity",
                            11480,
                            400,
                            "linear",
                            "${imagem04_03_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid151",
                            "opacity",
                            12280,
                            400,
                            "linear",
                            "${imagem04_03_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid108",
                            "opacity",
                            4950,
                            400,
                            "linear",
                            "${texto04_02_05}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid107",
                            "opacity",
                            7390,
                            400,
                            "linear",
                            "${texto04_02_05}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid96",
                            "opacity",
                            4550,
                            400,
                            "linear",
                            "${imagem04_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid95",
                            "opacity",
                            7790,
                            400,
                            "linear",
                            "${imagem04_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid66",
                            "opacity",
                            3600,
                            400,
                            "linear",
                            "${imagem04_02_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid67",
                            "opacity",
                            8680,
                            400,
                            "linear",
                            "${imagem04_02_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid168",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_02_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid110",
                            "display",
                            5350,
                            0,
                            "linear",
                            "${imagem04_02_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid109",
                            "display",
                            7390,
                            0,
                            "linear",
                            "${imagem04_02_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid177",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_03_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid148",
                            "display",
                            11480,
                            0,
                            "linear",
                            "${imagem04_03_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid149",
                            "display",
                            12675,
                            0,
                            "linear",
                            "${imagem04_03_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid164",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid94",
                            "display",
                            4550,
                            0,
                            "linear",
                            "${imagem04_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid93",
                            "display",
                            8185,
                            0,
                            "linear",
                            "${imagem04_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid112",
                            "opacity",
                            5350,
                            400,
                            "linear",
                            "${imagem04_02_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid111",
                            "opacity",
                            6995,
                            400,
                            "linear",
                            "${imagem04_02_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid83",
                            "opacity",
                            4150,
                            400,
                            "linear",
                            "${texto04_02_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            8180,
                            400,
                            "linear",
                            "${texto04_02_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid132",
                            "left",
                            10280,
                            500,
                            "linear",
                            "${texto04_03_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid133",
                            "left",
                            10780,
                            100,
                            "linear",
                            "${texto04_03_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid134",
                            "left",
                            13260,
                            100,
                            "linear",
                            "${texto04_03_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid135",
                            "left",
                            13360,
                            500,
                            "linear",
                            "${texto04_03_01}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid173",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid140",
                            "display",
                            11080,
                            0,
                            "linear",
                            "${imagem04_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid141",
                            "display",
                            13065,
                            0,
                            "linear",
                            "${imagem04_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid40",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_01_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid32",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${imagem04_01_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid33",
                            "display",
                            2295,
                            0,
                            "linear",
                            "${imagem04_01_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid21",
                            "left",
                            900,
                            500,
                            "linear",
                            "${texto04_01_02}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid22",
                            "left",
                            1400,
                            100,
                            "linear",
                            "${texto04_01_02}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid23",
                            "left",
                            2295,
                            100,
                            "linear",
                            "${texto04_01_02}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid24",
                            "left",
                            2395,
                            500,
                            "linear",
                            "${texto04_01_02}",
                            '45px',
                            '-905px'
                        ],
                        [
                            "eid100",
                            "opacity",
                            4550,
                            400,
                            "linear",
                            "${texto04_02_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid99",
                            "opacity",
                            7785,
                            400,
                            "linear",
                            "${texto04_02_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid165",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_02_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid98",
                            "display",
                            4550,
                            0,
                            "linear",
                            "${texto04_02_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid97",
                            "display",
                            8180,
                            0,
                            "linear",
                            "${texto04_02_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid176",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_03_04}",
                            'none',
                            'none'
                        ],
                        [
                            "eid152",
                            "display",
                            11680,
                            0,
                            "linear",
                            "${imagem04_03_04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid153",
                            "display",
                            12475,
                            0,
                            "linear",
                            "${imagem04_03_04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid188",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid181",
                            "display",
                            12030,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid182",
                            "display",
                            12140,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid41",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_01_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid36",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${texto04_01_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid37",
                            "display",
                            2295,
                            0,
                            "linear",
                            "${texto04_01_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid154",
                            "opacity",
                            11680,
                            400,
                            "linear",
                            "${imagem04_03_04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid155",
                            "opacity",
                            12080,
                            400,
                            "linear",
                            "${imagem04_03_04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid178",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_03_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid156",
                            "display",
                            11680,
                            0,
                            "linear",
                            "${texto04_03_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid157",
                            "display",
                            12475,
                            0,
                            "linear",
                            "${texto04_03_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid158",
                            "opacity",
                            11680,
                            400,
                            "linear",
                            "${texto04_03_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid159",
                            "opacity",
                            12080,
                            400,
                            "linear",
                            "${texto04_03_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid161",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_02_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid71",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${texto04_02_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid72",
                            "display",
                            8970,
                            0,
                            "linear",
                            "${texto04_02_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid116",
                            "opacity",
                            5350,
                            400,
                            "linear",
                            "${texto02_04_06}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid115",
                            "opacity",
                            6995,
                            400,
                            "linear",
                            "${texto02_04_06}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid73",
                            "opacity",
                            3750,
                            400,
                            "linear",
                            "${texto04_02_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid74",
                            "opacity",
                            8575,
                            400,
                            "linear",
                            "${texto04_02_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid166",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_02_03}",
                            'none',
                            'none'
                        ],
                        [
                            "eid102",
                            "display",
                            4950,
                            0,
                            "linear",
                            "${imagem04_02_03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid101",
                            "display",
                            7785,
                            0,
                            "linear",
                            "${imagem04_02_03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid38",
                            "opacity",
                            1500,
                            400,
                            "linear",
                            "${texto04_01_03}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid39",
                            "opacity",
                            1900,
                            400,
                            "linear",
                            "${texto04_01_03}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid169",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto02_04_06}",
                            'none',
                            'none'
                        ],
                        [
                            "eid114",
                            "display",
                            5350,
                            0,
                            "linear",
                            "${texto02_04_06}",
                            'none',
                            'block'
                        ],
                        [
                            "eid113",
                            "display",
                            7390,
                            0,
                            "linear",
                            "${texto02_04_06}",
                            'block',
                            'none'
                        ],
                        [
                            "eid120",
                            "opacity",
                            5750,
                            400,
                            "linear",
                            "${imagem04_02_05}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid119",
                            "opacity",
                            6550,
                            400,
                            "linear",
                            "${imagem04_02_05}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid1",
                            "display",
                            14515,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid128",
                            "opacity",
                            5950,
                            400,
                            "linear",
                            "${imagem04_02_06}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid127",
                            "opacity",
                            6350,
                            400,
                            "linear",
                            "${imagem04_02_06}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid160",
                            "display",
                            0,
                            0,
                            "linear",
                            "${imagem04_02_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid64",
                            "display",
                            3600,
                            0,
                            "linear",
                            "${imagem04_02_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid65",
                            "display",
                            9075,
                            0,
                            "linear",
                            "${imagem04_02_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid167",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_02_05}",
                            'none',
                            'none'
                        ],
                        [
                            "eid106",
                            "display",
                            4950,
                            0,
                            "linear",
                            "${texto04_02_05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid105",
                            "display",
                            7785,
                            0,
                            "linear",
                            "${texto04_02_05}",
                            'block',
                            'none'
                        ],
                        [
                            "eid146",
                            "opacity",
                            11080,
                            400,
                            "linear",
                            "${texto04_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid147",
                            "opacity",
                            12670,
                            400,
                            "linear",
                            "${texto04_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid142",
                            "opacity",
                            11080,
                            400,
                            "linear",
                            "${imagem04_03_02}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid143",
                            "opacity",
                            12670,
                            400,
                            "linear",
                            "${imagem04_03_02}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid56",
                            "left",
                            3000,
                            500,
                            "linear",
                            "${texto04_02_01}",
                            '985px',
                            '25px'
                        ],
                        [
                            "eid57",
                            "left",
                            3500,
                            100,
                            "linear",
                            "${texto04_02_01}",
                            '25px',
                            '35px'
                        ],
                        [
                            "eid58",
                            "left",
                            9080,
                            100,
                            "linear",
                            "${texto04_02_01}",
                            '35px',
                            '25px'
                        ],
                        [
                            "eid59",
                            "left",
                            9180,
                            500,
                            "linear",
                            "${texto04_02_01}",
                            '25px',
                            '985px'
                        ],
                        [
                            "eid4",
                            "opacity",
                            200,
                            400,
                            "linear",
                            "${titulo04}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid5",
                            "opacity",
                            13860,
                            400,
                            "linear",
                            "${titulo04}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid172",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_03_01}",
                            'none',
                            'none'
                        ],
                        [
                            "eid130",
                            "display",
                            10280,
                            0,
                            "linear",
                            "${texto04_03_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid131",
                            "display",
                            13860,
                            0,
                            "linear",
                            "${texto04_03_01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid175",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto04_03_02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid144",
                            "display",
                            11080,
                            0,
                            "linear",
                            "${texto04_03_02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid145",
                            "display",
                            13065,
                            0,
                            "linear",
                            "${texto04_03_02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid10",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto04_01_01}",
                            '-905px',
                            '45px'
                        ],
                        [
                            "eid11",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto04_01_01}",
                            '45px',
                            '35px'
                        ],
                        [
                            "eid12",
                            "left",
                            2400,
                            100,
                            "linear",
                            "${texto04_01_01}",
                            '35px',
                            '45px'
                        ],
                        [
                            "eid13",
                            "left",
                            2500,
                            500,
                            "linear",
                            "${texto04_01_01}",
                            '45px',
                            '-905px'
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
                            rect: ['0px', '0px', '897px', '226px', 'auto', 'auto'],
                            text: 'Para alguns estudiosos, o mestiço criava um tipo social degenerado e incapaz e por isso deveria ser evitado os casamentos entre raças diferentes. Entretanto, para outros, a mestiçagem seria a garantia da civilização do Brasil, uma vez que geraria o branqueamento da população. Segundo Bolsanello (1996)  o pensamento intelectual de alguns estudiosos brasileiros ajudaram a fomentar preconceitos na sociedade brasileira.',
                            id: 'Text4Copy',
                            textStyle: ['', '', '27px', ''],
                            align: 'justify',
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(53,53,53,1.00)', '400', 'none solid rgb(46, 112, 159)', 'normal', 'break-word', '']
                        },
                        {
                            type: 'text',
                            rect: ['593px', '75px', '12px', '18px', 'auto', 'auto'],
                            id: '_1',
                            text: '1',
                            align: 'justify',
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(53, 53, 53)', 'normal', 'break-word', '']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("js/pag04/pag04_edgeActions.js");
})("EDGE-15552124");
