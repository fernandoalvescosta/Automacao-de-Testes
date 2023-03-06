describe('alura busca cursos ', () => {

    beforeEach(() => { 
        cy.visit('https://alura-fotos.herokuapp.com');
    })

    //um it para cada teste que sera efetuado no site em questão
    it('verifica mensagem de validação', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })
    it('verifica mensagem de email invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.get('input[formcontrolname="email"]').type('fernando');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verifica mensagem de senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    
    it('verifica mensagem digitar nome com a letra minuscula', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('FERNANDO');
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

    it('verifica mensagens de email invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('fernando');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
     
    })

    it('fazer login de usuario valido', () => {
        cy.login('flavio', '123');
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('fazer login de usuario invalido', () => {
        cy.login('jacqueline', '1234');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    })
    //Const cria variavel e o require referencia ao usuario.jeson que esta na pasta fixtures
   const usuarios = require('../../fixtures/usuarios.json');
    usuarios.beforeEach(usuario => {

        //mostrar qual usuario esta sendo cadastrado         
        it.only(`Registre novo usuario ${usuarios.userName}` , ()=>{
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button','Register').click();
        })
        
    })



})