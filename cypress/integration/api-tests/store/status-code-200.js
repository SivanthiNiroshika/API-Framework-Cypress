describe('API scripts - Store Module', function () {


    beforeEach(function () {

        cy.fixture("store/storeUrls").then(function (dataStoresUrl) {

            this.dataStoresUrl = dataStoresUrl




        })


        cy.fixture("store/orderPetFromStore_200").then(function (dataOrderPetFromStore_200) {

            this.dataOrderPetFromStore_200 = dataOrderPetFromStore_200

        })




    })



    it('Verify 200 Response for Get Pet Inventories by status', function () {

        //send the get request
        cy.request('GET', this.dataStoresUrl.getPetInventoriesByStatus).then(
            (response) => {

                //verify 200 response was received
                expect(response.status).to.eq(200)
                //verify the response properties
                expect(response.body).to.have.property('Busy')
                expect(response.body).to.have.property('Available')
                expect(response.body).to.have.property('sold')
                expect(response.body).to.have.property('free')
                expect(response.body).to.have.property('updated')



            }
        )


    })


    it('Verify 200 Response for Place an order for a pet', function () {

        var postRequest = {

            method: "POST",
            url: this.dataStoresUrl.orderPetFromStore,
            body: this.dataOrderPetFromStore_200

        }
        cy.request(postRequest).then(
            (response) => {
                //verify 200 response was received
                expect(response.status).to.eq(200)
                //verify properties
                expect(response.body).to.have.property('petId', 0)
                expect(response.body).to.have.property('quantity', 0)
                expect(response.body).to.have.property('status', 'placed')
                expect(response.body).to.have.property('complete', true)




            }
        )


    })




    it('Verify 200 Response for Get Purchase Order By Id', function () {

        //send the get request
        cy.request('GET', this.dataStoresUrl.getPurchaseOrderById).then(
            (response) => {

                //verify 200 response was received
                expect(response.status).to.eq(200)
                //verify the response properties
                expect(response.body).to.have.property('id')
                expect(response.body).to.have.property('petID')
                expect(response.body).to.have.property('quantity')
                expect(response.body).to.have.property('status')
                expect(response.body).to.have.property('complete')





            }
        )


    })













})


