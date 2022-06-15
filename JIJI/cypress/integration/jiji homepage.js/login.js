

describe ("Login", function(){

    beforeEach(function(){
        cy.visit('/')
    })

    it ('Mytest', function(){
        cy.get('body').click()
        
    })

})

it ('How', function(){
    cy.get('.b-about-header-wrapper > :nth-child(4)').click()
})
