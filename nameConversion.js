let textInput = document.querySelector("#text")
document.querySelector("#convert-btn").addEventListener("click",convertText)

function convertText(){
    let text = textInput.value;
    camelCase(text);
    pascalCase(text);
    snakeCase(text);
    ScreamingSnakeCase(text);
    kebabCase(text);
    screamingKebabCase(text);
}


function camelCase(str){
    let camelizeText =  str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    document.querySelector("#camel-case").textContent = camelizeText;
}


function pascalCase(str){
    let pascalCaseText =   (' ' + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
        return chr.toUpperCase()});
    document.querySelector("#pascal-case").textContent = pascalCaseText;
}

function snakeCase(str){
    let snakeCaseText = (' ' + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
        return '_' + chr}).substring(1);
    document.querySelector("#snake-case").textContent = snakeCaseText;
}

function ScreamingSnakeCase(str){
    let ScreamingSnakeCaseText = (' ' + str).toUpperCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
        return '_' + chr}).substring(1);
    document.querySelector("#screaming-snake-case").textContent = ScreamingSnakeCaseText;
}

function kebabCase(str){
    let kebabCaseText = str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => '-' + chr).trim();
    document.querySelector("#kebab-case").textContent = kebabCaseText;
}

function screamingKebabCase(str){
    let screamingKebabCaseText = str.toUpperCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => '-' + chr).trim();
    document.querySelector("#screaming-kebab-case").textContent = screamingKebabCaseText;
}