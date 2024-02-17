
describe('Test editar pedido', () => {
    it('automação ', () => {
  
      cy.request({
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'user': 'admin',
          'pass': 'password'
        },
        url: Cypress.env('baseUrl') + 'api/integration/updateOrder',
        body: {
          id: 4,
          status_label: "Faturado",
          danfe_xml: 'texto qualquer de teste',
          products: [
            {
              id: '62',
              ean: "7898344182123",
              quantity: 1,
              product_status: "cod3",
            },
            {
              id: '59',
              ean: "7898344181034",
              quantity: 1,
              product_status: "cod3",
            },
            {
              id: '68',
              ean: "7898344184400",
              quantity: 1,
              product_status: "cod3",
            }
          ]
        }
      })
        .then((put_response) => {
          cy.writeFile('localStorage_put.txt', put_response.body)
        })
    })
  })
  