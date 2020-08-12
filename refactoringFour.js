//Functions should only be one level of abstraction
//before
function parseBetterJSAlternative(code){
    const REGEXS = [
        //..
    ];

    const statment = code.split(' ');
    const tokens = [];
    REGEXS.forEach((REGEX) => {
        statments.forEach((statment) => {
            //---
        });
    });

    const ast = [];
    tokens.forEach( (token) => {
        //---
    });

    ast.forEach((node) => {
        //==
    });
}

//after
const tokenize = (code) => {
    const REGEXS = [
        //..
    ];

    const statment = code.split(' ');
    const tokens = [];
    REGEXS.forEach((REGEX) => {
        statments.forEach((statment) => {
            tokens.push()
            //---
        });
    });

    return tokens;
}

const lexer = (tokens) => {
    const ast = [];
    tokens.forEach((token) => {
        ast.push()
    });
    return ast;
}

const parseBetterJSAlternative = (code) => {
    const tokens = tokenize(code);
    const ast = lexer(tokens);
    ast.forEach( (node) => {
        //---
    });
}