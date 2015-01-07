/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/index/',
        aud='media/',
        vid='media/',
        js='js/index/',
        fonts = {
            'LithosPro-Black': '@font-face {    font-family: \'LithosPro-Black\';    src: url(\'font/LithosPro-Black.eot\'), url(\'font/LithosPro-Black.ttf\') format(\'truetype\'), url(\'font/LithosPro-Black.otf\'), url(\'font/LithosPro-Black.woff\');    font-weight: normal;    font-style: normal;}',
            'LithosPro-Regular': '@font-face {        font-family: \'LithosPro-Regular\';        src: url(\'font/LithosPro-Regular.eot\'),          url(\'font/LithosPro-Regular.ttf\') format(\'truetype\'),          url(\'font/LithosPro-Regular.otf\'),          url(\'font/LithosPro-Regular.woff\');        font-weight: normal;        font-style: normal;}'        },
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
                            rect: ['4px', '4px', '967px', '631px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"borda2.png",'0px','0px']
                        },
                        {
                            id: 'texto_tela_inicial_afro',
                            symbolName: 'imagem03_03_01',
                            display: 'none',
                            type: 'rect',
                            rect: ['-902px', '126', '891', '118', 'auto', 'auto']
                        },
                        {
                            id: 'imagem_telaInicial_01',
                            type: 'image',
                            rect: ['231px', '22px', '508px', '83px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"imagem_telaInicial_01.png",'0px','0px']
                        },
                        {
                            id: 'titulo',
                            display: 'none',
                            type: 'text',
                            rect: ['288px', '40px', 'auto', 'auto', 'auto', 'auto'],
                            text: "CULTURA AFRO-BRASILEIRA",
                            align: "justify",
                            font: ['LithosPro-Regular', [27, "px"], "rgba(243,234,210,1.00)", "400", "none solid rgb(53, 53, 53)", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: '_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['478px', '154px', '128px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: '_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['191px', '288px', '71px', '24px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
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
                    duration: 2840,
                    autoPlay: true,
                    data: [
                        [
                            "eid106",
                            "opacity",
                            250,
                            400,
                            "linear",
                            "${imagem_telaInicial_01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid107",
                            "opacity",
                            2190,
                            400,
                            "linear",
                            "${imagem_telaInicial_01}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid104",
                            "display",
                            250,
                            0,
                            "linear",
                            "${imagem_telaInicial_01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid105",
                            "display",
                            2590,
                            0,
                            "linear",
                            "${imagem_telaInicial_01}",
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
                            2440,
                            400,
                            "linear",
                            "${borda}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1",
                            "display",
                            2840,
                            0,
                            "linear",
                            "${borda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid49",
                            "display",
                            0,
                            0,
                            "linear",
                            "${texto_tela_inicial_afro}",
                            'none',
                            'none'
                        ],
                        [
                            "eid50",
                            "display",
                            800,
                            0,
                            "linear",
                            "${texto_tela_inicial_afro}",
                            'none',
                            'block'
                        ],
                        [
                            "eid51",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${texto_tela_inicial_afro}",
                            'block',
                            'none'
                        ],
                        [
                            "eid55",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid56",
                            "display",
                            1350,
                            0,
                            "linear",
                            "${_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid57",
                            "display",
                            1460,
                            0,
                            "linear",
                            "${_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid35",
                            "opacity",
                            250,
                            400,
                            "linear",
                            "${titulo}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid36",
                            "opacity",
                            2190,
                            400,
                            "linear",
                            "${titulo}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid40",
                            "display",
                            0,
                            0,
                            "linear",
                            "${titulo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid33",
                            "display",
                            250,
                            0,
                            "linear",
                            "${titulo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid34",
                            "display",
                            2590,
                            0,
                            "linear",
                            "${titulo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid67",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid68",
                            "display",
                            1350,
                            0,
                            "linear",
                            "${_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid69",
                            "display",
                            1460,
                            0,
                            "linear",
                            "${_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid45",
                            "left",
                            800,
                            500,
                            "linear",
                            "${texto_tela_inicial_afro}",
                            '-902px',
                            '52px'
                        ],
                        [
                            "eid46",
                            "left",
                            1300,
                            100,
                            "linear",
                            "${texto_tela_inicial_afro}",
                            '52px',
                            '42px'
                        ],
                        [
                            "eid47",
                            "left",
                            1400,
                            100,
                            "linear",
                            "${texto_tela_inicial_afro}",
                            '42px',
                            '52px'
                        ],
                        [
                            "eid48",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${texto_tela_inicial_afro}",
                            '52px',
                            '-902px'
                        ]
                    ]
                }
            },
            "imagem03_03_01": {
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
                            rect: ['0px', '0px', '891px', '30px', 'auto', 'auto'],
                            text: 'A distorção de imagem tanto do continente africano quando dos povos que lá habitam foi fruto das teorias do evolucionismo e Darwinismo social   que foram propagadas a partir do séc. XIX. Tentando contrapor a essas ideias buscar-se-á relativizar a história dos povos africanos, ou seja, “ver que a verdade está mais no olhar que naquilo que é olhado. Relativizar é não transformar a diferença em hierarquia, em superiores e inferiores ou em bem ou mal, mas vê-la na sua dimensão de riqueza por ser diferença.” (Rocha, 1985, P-20)   .<br>Os historiadores africanos e africanistas não aceitam a historiografia etnocêntrica que periodiza a África na divisão tradicional, ou seja, História da África antes e depois da colonização árabe e europeia. <br>A elaboração dessa linha do tempo é um esforço para tentar organizar marcos cronológicos significativos da cultura afro-brasileira que leve em conta a África complexa, plural e diversa iniciando seu marco com o aparecimento dos primeiros ancestrais do gênero Homo, focando a migração forçada dos africanos no Brasil (Tráfico negreiro), a luta pela sua liberdade, até os dias atuais.  ',
                            id: 'texto_inicial',
                            textStyle: ['', '', '27px', ''],
                            align: 'justify',
                            font: ['Verdana, Geneva, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['554px', '25px', 'auto', 'auto', 'auto', 'auto'],
                            id: '_1',
                            text: '1',
                            align: 'justify',
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['206px', '159px', 'auto', 'auto', 'auto', 'auto'],
                            id: '_2',
                            text: '2',
                            align: 'justify',
                            font: ['Verdana, Geneva, sans-serif', [15, 'px'], 'rgba(153,0,0,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'nowrap']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '891px', '118px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("js/index/index_edgeActions.js");
})("EDGE-2071700");
