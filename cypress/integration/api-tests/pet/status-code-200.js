describe('API scripts - Pet Module', function () {


  beforeEach(function () {

    cy.fixture("pet/petUrls").then(function (dataPetsUrl) {

      this.dataPetsUrl = dataPetsUrl

    })

    cy.fixture("pet/createPets_200").then(function (dataCreatePets_200) {

      this.dataCreatePets_200 = dataCreatePets_200

    })


  })


  it('Verify 200 Response for Get Pets Request', function () {

    //send the get request
    cy.request('GET', this.dataPetsUrl.findPetsUrl).then(
      (response) => {

        //verify 200 response was received
        expect(response.status).to.eq(200)
        expect(response.body[0]).to.have.property('id')
        expect(response.body[0].category).to.have.property('id')
        expect(response.body[0]).to.have.property('status', 'available')

      }
    )


  })


  it('Verify 200 Response for Add New Pet Request', function () {

    var postRequest = {

      method: "POST",
      url: this.dataPetsUrl.createPetsUrl,
      body: this.dataCreatePets_200

    }
    cy.request(postRequest).then(
      (response) => {
        //verify 200 response was received
        expect(response.status).to.eq(200),
          //verify properties
        expect(response.body).to.have.property('name', 'doggie')
        expect(response.body).to.have.property('status', 'available')
      }
    )


  })



  it('Verify 200 Response for Update a Pet Request', function () {

    var postRequest = {

      method: "PUT",
      url: this.dataPetsUrl.updatePetsUrl,
      body: this.dataCreatePets_200

    }
    cy.request(postRequest).then(
      (response) => {
        //verify 200 response was received
        expect(response.status).to.eq(200),
        //verify properties
        expect(response.body).to.have.property('name', 'doggie')
        expect(response.body).to.have.property('status', 'available')
      }
    )


  })











})






















