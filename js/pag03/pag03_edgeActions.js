/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7180, function(sym, e) {
         // insert code here
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4790, function(sym, e) {
         // insert code here
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${voltar}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.playReverse();
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${avancar}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();
         
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9775, function(sym, e) {
         // insert code here
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem03_01_02}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page03_01_02");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem03_01_01}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page03_01_01");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem03_02_01}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page03_02_01");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem03_03_01}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page03_03_01");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem03_04_01}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page03_04_01");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem03_04_03}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page03_04_03");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_1}", "click", function(sym, e) {
         //Clique na texto
         
         parent.APP.FancyBox.openText ("txt03_01_01");
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_2}", "click", function(sym, e) {
         //Clique na texto
         
         parent.APP.FancyBox.openText ("txt03_01_02");
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_3}", "click", function(sym, e) {
         //Clique na texto
         
         parent.APP.FancyBox.openText ("txt03_04_03");
         
         
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'texto01'
   (function(symbolName) {   
   
   })("texto01");
   //Edge symbol end:'texto01'

   //=========================================================
   
   //Edge symbol: 'imagens07_04_01'
   (function(symbolName) {   
   
   })("imagens07_04_01");
   //Edge symbol end:'imagens07_04_01'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-11962750");