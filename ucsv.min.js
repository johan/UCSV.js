/*
 * UCSV v1.0.1
 * Provided under MIT License.
 *
 * Copyright 2010, Peter Johnson
 * http://www.uselesscode.org/javascript/csv/
 */
"use strict";var CSV=(function(){var b;function c(g){return Object.prototype.toString.apply(g)==="[object Number]"}function a(g){return Object.prototype.toString.apply(g)==="[object String]"}function f(g){if(g.charAt(g.length-1)!=="\n"){return g}else{return g.substring(0,g.length-1)}}b=(function(){if(String.prototype.trim){return function(g){return g.trim()}}else{return function(g){return g.replace(/^\s*/g,"").replace(/\s*$/g,"")}}}());function e(g){var n,k="",m,l,h;for(l=0;l<g.length;l+=1){m=g[l];for(h=0;h<m.length;h+=1){n=m[h];if(a(n)){n=n.replace(/"/g,'""');if(/^\s|\s$|,|"/.test(n)){n='"'+n+'"'}}else{if(c(n)){n=n.toString(10)}else{n=n.toString()}}k+=h<m.length-1?n+",":n}k+="\n"}return k}function d(p,m){p=f(p);var n="",j=false,k=false,l="",o=[],g=[],h;m=m!==true?false:true;for(h=0;h<p.length;h+=1){n=p.charAt(h);if(j===false&&(n===","||n==="\n")){if(k!==true&&m===true){l=b(l)}o.push(l);if(n==="\n"){g.push(o);o=[]}l="";k=false}else{if(n!=='"'){l+=n}else{if(!j){j=true;k=true}else{if(p.charAt(h+1)==='"'){l+='"';h+=1}else{j=false}}}}}o.push(l);g.push(o);return g}return{arrayToCsv:e,csvToArray:d}}());