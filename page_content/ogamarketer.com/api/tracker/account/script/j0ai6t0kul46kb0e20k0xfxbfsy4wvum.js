
            function _ogaTracker_contains(selector, text) {
                var elements = document.querySelectorAll(selector);
                return [].filter.call(elements, function(element){
                    return RegExp(text).test(element.textContent);
                });
            }

setTimeout(function(){OgaTracker.default.trigger("5-sec");}, 5000);


window.document.addEventListener("click", function(event) { 
if ( ["BUTTON", "A", "SPAN"].includes(event.target.tagName.toUpperCase()) && RegExp(/^Download$/i).test(event.target.textContent) ) { if (location.pathname === "/download/jamb-sweet-sixteen-140-qa/") {
        if (event.target.tagName.toUpperCase() === "A") {
            let href = event.target.getAttribute("href");

            if (href && href.length && href !== "#") {
                event.preventDefault();

                OgaTracker.default.trigger("confirm");
                
                setTimeout(function(){
                    window.location = event.target.href;
                }, 300);
                
                return true;
            }
        }
        
        OgaTracker.default.trigger("confirm");
        } } 
});


if (location.pathname === "/category/academic/") {OgaTracker.default.trigger("display-cat");}


OgaTracker.default.trigger("general-pageview");


window.document.addEventListener("click", function(event) { 
if ( ["BUTTON", "A", "SPAN"].includes(event.target.tagName.toUpperCase()) && RegExp(/^Submit$/i).test(event.target.textContent) ) { 
        if (event.target.tagName.toUpperCase() === "A") {
            let href = event.target.getAttribute("href");

            if (href && href.length && href !== "#") {
                event.preventDefault();

                OgaTracker.default.trigger("goal-form-submit-event");
                
                setTimeout(function(){
                    window.location = event.target.href;
                }, 300);
                
                return true;
            }
        }
        
        OgaTracker.default.trigger("goal-form-submit-event");
         } 
});


window.document.addEventListener("change", function(event) { 
if ( ["TEXTAREA", "INPUT"].includes(event.target.tagName.toUpperCase()) && event.target.matches("") ) { 
            if (event.target.value.toLowerCase().indexOf("baby") !== -1 ) {
                OgaTracker.default.trigger("test-event");
            }
         } 
});


window.document.addEventListener("change", function(event) { 
if ( ["TEXTAREA", "INPUT"].includes(event.target.tagName.toUpperCase()) && event.target.matches("*") ) { 
            if (event.target.value.toLowerCase().indexOf("baby") !== -1 ) {
                OgaTracker.default.trigger("test-search");
            }
         } 
});


