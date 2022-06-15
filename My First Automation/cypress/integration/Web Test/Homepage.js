import {Homepage} from "./selector.js"


describe("Login", function (){

    beforeEach(function (){
        cy.visit('https://www.jiji.ng')
    })


        it('Homepage', function(){
        cy.get(Homepage.signinfld).click()
        cy.get(Homepage.emailfld).click() 
        cy.get(Homepage.email2fld).type(Homepage.emz2fldctn)
        // cy.get(Homepage.emz2fldctn).type()
        cy.get(Homepage.passwordfld).type(Homepage.passw2fldctn)
        //cy.get(Homepage.passw2fldctn).type()
        cy.get(Homepage.clksignfld).click()
      
               



    })

})