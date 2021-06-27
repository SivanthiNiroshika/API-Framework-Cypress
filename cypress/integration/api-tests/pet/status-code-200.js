describe('API scripts - Pet Module',function(){


beforeEach(function(){

cy.fixture("pet/petUrls").then(function(dataFindPets){

this.dataFindPets=dataFindPets

})




})


it('Verify 200 Response for Get Pets Request', function() {

    //send the get request
    cy.request('GET',this.dataFindPets.findPetsUrl).then(
      (response) => {
        
        //verify 200 response was received
        expect(response.status).to.eq(200)
        expect(response.body[0]).to.have.property('id') 
        expect(response.body[0].category).to.have.property('id') 
        expect(response.body[0]).to.have.property('status','available') 

      }
    )

    
  })

























}
)