/// <reference types="cypress" />

it('Deve realizar um GET simples', () => {
 
    cy.request({
        method: 'GET',
        url: 'http://dummy.restapiexample.com/api/v1/employees',
    }).then(res => {
        expect(res.status).to.be.equal(200)
        expect(res.body.data).is.not.empty
        expect(res.body.data[0]).to.have.property('id')
        expect(res.body.data[0]).to.have.property('employee_name')
        expect(res.body.data[0]).to.have.property('employee_salary')
        expect(res.body.data[0]).to.have.property('employee_age')
        expect(res.body.data[0]).to.have.property('profile_image')
        /*console.log(res)*/
    })

})