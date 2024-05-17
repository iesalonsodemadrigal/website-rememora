/*
 * Custom function used to generate the output of the override.css file
 */

var generateOverride = function (params) {   
    let output = '';
    
    if(params.minFontSize !== '1' || params.maxFontSize !== '1') {
        output += `
        html {
          font-size: ${params.minFontSize}rem;
        }

        @media screen and (min-width: 20rem) {
          html {
               font-size: calc(${params.minFontSize}rem + (${params.maxFontSize} - ${params.minFontSize}) * ((100vw - 20rem) / 127));
          }
        }

        @media screen and (min-width: 147rem) {
          html {
               font-size: ${params.maxFontSize}rem;
            }
        }`;
    }
	
    if(params.codeMaxHeight !== '30rem') {
        output += ` 
         pre {   
               max-height: ${params.codeMaxHeight};
        }`;
    }

    if(params.primaryColor !== '#3973d3') {
      output += ` 
      input[type=checkbox]:checked + label:before,
      input[type=radio]:checked + label:before {
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 11 8'%3e%3cpolygon points='9.53 0 4.4 5.09 1.47 2.18 0 3.64 2.93 6.54 4.4 8 5.87 6.54 11 1.46 9.53 0' fill='${params.primaryColor.replace('#', '%23')}'/%3e%3c/svg%3e");      
      }
           
      input[type=radio]:checked + label:before {
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3ccircle cx='4' cy='4' r='4' fill='${params.primaryColor.replace('#', '%23')}'/%3e%3c/svg%3e");
      }

      select:not([multiple]) {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6"><polygon points="3 6 3 6 0 0 6 0 3 6" fill="${params.primaryColor.replace('#', '%23')}"/></svg>');  
      }`;
  }
    
    if (params.galleryItemGap !== '0.26667rem') {
        output += `
        .gallery {
               margin: 2.66667rem -${params.galleryItemGap};
        }
        .gallery__item {
               padding: ${params.galleryItemGap};
        }
        
        .gallery__item a::after {
               bottom: ${params.galleryItemGap};
               height: calc(100% - ${params.galleryItemGap} * 2);              
               left: ${params.galleryItemGap};
               right: ${params.galleryItemGap};
               top: ${params.galleryItemGap};
               width: calc(100% - ${params.galleryItemGap} * 2);  
        }`;
    }

    if(params.galleryZoom !== true) {
            output += `   
            .pswp--zoom-allowed .pswp__img {
            cursor: default !important  
            }`;    	 
      }
    
    if(params.lazyLoadEffect === 'fadein') {
        output += ` 
         img[loading] {
               opacity: 0;
         }

         img.is-loaded {
               opacity: 1;
               transition: opacity 1s cubic-bezier(0.215, 0.61, 0.355, 1); 
         }`;    	 
    } 

    return output;
}

module.exports = generateOverride;
