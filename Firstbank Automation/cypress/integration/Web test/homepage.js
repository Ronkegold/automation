
import {Homepage} from "./selector.js"

describe("", function(){

    beforeEach(function (){
        cy.visit('/')

    })

    it('Firsttest', function(){
        cy.get('#fi-q').type('bags')
        cy.get('#search > .btn').click()
    })

    it ('Login', function(){
        cy.get(Homepage.acctbtndrp).click()
        cy.get('#dpdw-login-box > .inbox > .-pam > .btn').click()
        cy.get('.-fg1 > :nth-child(1) > .lbl').type('jumia@gmail.com')
        cy.get('.fi-br > .lbl').type('ronke22')
        cy.get('.-df > .fi-w > .lbl').click()
        cy.get('#authForm > ._prim').click()
    })

})