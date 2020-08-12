//function argument ( 2 or fewer)

//before
function createMenu(title, body, buttonText, cancellable){

}

//after
const menuConfig = {
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true
}

const createMenu = (menuConfig) =>{

}
