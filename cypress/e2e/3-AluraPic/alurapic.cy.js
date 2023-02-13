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


})