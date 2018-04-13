let fs = require('fs'),
PDFParser = require("pdf2json");
let pdfParser = new PDFParser();
x = pdfParser.loadPDF("/home/nineleaps/Downloads/Bidstream targeting.pdf");
console.log(pdfParser)