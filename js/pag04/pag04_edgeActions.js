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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6350, function(sym, e) {
         // insert code here
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1900, function(sym, e) {
         // insert code here
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12080, function(sym, e) {
         // insert code here
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem04_01_01}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page04_01_01");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem04_02_02}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page04_02_02");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem04_02_03}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page04_02_03");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem04_02_04}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page04_02_04");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem04_02_05}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page04_02_05");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem04_03_01}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page04_03_01");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${imagem04_03_03}", "click", function(sym, e) {
         //Clique na imagem
         
         parent.APP.FancyBox.openImage ("page04_03_03");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_1}", "click", function(sym, e) {
         //Clique na texto
         
         parent.APP.FancyBox.openText ("txt03_01_01");
         
         
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'texto01'
   (function(symbolName) {   
   
   })("texto01");
   //Edge symbol end:'texto01'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-15552124");