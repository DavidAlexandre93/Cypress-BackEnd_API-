/// <reference types="cypress" />

it('Deve cadastrar bebida', () => {
    cy.request({
        url: 'http',
        method: 'POST',
        body:{
            nome:"",
            quantidade:50,
            valor:20.00
        }
    }).as('response')

    cy.get('@response').then(res => {
        expect(res.status).to.be.equal(201)
        expect(res.body).to.have.property('nome','')
        expect(res.body).to.have.property('',0)
        expect(res.body).to.have.property('',0)

    })
})