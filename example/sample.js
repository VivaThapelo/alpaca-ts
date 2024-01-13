// buys a random stock

// To run:
// node sample.js

// You can use any of the following

// import { AlpacaClient } from '../dist/mjs/index.js'
import { AlpacaBroker } from '../dist/alpaca.js'
// import { AlpacaClient } from '../dist/alpaca.min.js'
// import { AlpacaClient } from '../dist/alpaca.bundle.js'
// import { AlpacaClient } from '../dist/alpaca.bundle.min.js'

// const client = new AlpacaClient({
//   credentials: {
//     key: 'CKQFJS6FV4DDJMAECLFV',
//     secret: 'klPpKe3Jo52mGAohFvNRWmhC0DzAxrSjHT0AAiLV',
//   },
// })

// client
//   .getAssets({
//     status: 'active',
//   })
//   .then((assets) => console.log(assets))

let accountId;

  const broker = new AlpacaBroker({
    credentials: {
      key: 'CKQFJS6FV4DDJMAECLFV',
      secret: 'klPpKe3Jo52mGAohFvNRWmhC0DzAxrSjHT0AAiLV',
    },
  })

  // broker.getAssets({
  // })
  // .then((assets) => console.log(assets))
  // .catch((err) => console.error(err))

  broker.createAccount({
      "contact": {
          "email_address": "admiring_swanson_98353422@example.com",
          "phone_number": "282-555-0195",
          "street_address": [
              "20 N San Mateo Dr"
          ],
          "city": "San Mateo",
          "state": "CA",
          "postal_code": "94401"
      },
      "identity": {
          "given_name": "Admiring",
          "family_name": "Swanson",
          "date_of_birth": "1970-01-01",
          "tax_id": "666-55-4321",
          "tax_id_type": "USA_SSN",
          "country_of_citizenship": "USA",
          "country_of_birth": "USA",
          "country_of_tax_residence": "USA",
          "funding_source": [
              "employment_income"
          ],
          "visa_type": null,
          "visa_expiration_date": null,
          "date_of_departure_from_usa": null,
          "permanent_resident": null
      },
      "disclosures": {
          "is_control_person": false,
          "is_affiliated_exchange_or_finra": false,
          "is_affiliated_exchange_or_iiroc": false,
          "is_politically_exposed": false,
          "immediate_family_exposed": false,
          "is_discretionary": null
      },
      "agreements": [
          {
              "agreement": "customer_agreement",
              "signed_at": "2024-01-01T11:57:02.259649424Z",
              "ip_address": "127.0.0.1",
              "revision": null
          }
      ],
      "documents": [
          {
              "document_type": "identity_verification",
              "document_sub_type": "passport",
              "content": "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigD//2Q==",
              "content_data": null,
              "mime_type": "image/jpeg"
          }
      ],
      "trusted_contact": {
          "given_name": "Jane",
          "family_name": "Doe",
          "email_address": "admiring_swanson_83513611@example.com"
      },
      "minor_identity": null,
      "entity_id": null,
      "additional_information": "",
      "account_type": "",
      "auto_approve": null,
      "beneficiary": null,
      "trading_configurations": null,
      "currency": null,
      "enabled_assets": null,
      "instant": null,
      "entity_identity": null,
      "entity_contact": null,
      "authorized_individuals": null,
      "ultimate_beneficial_owners": null
  })
  .then((account) => {console.log({account}); 
    accountId = account.id;
    /**
     * ACh connect Bank Account
     **/
    broker.BankACH(accountId, {
      "account_owner_name": "Relaxed Banzai",
      "bank_account_type": "CHECKING",
      "bank_account_number": "32131231abc",
      "bank_routing_number": "123103716",
      "nickname": "Bank of America Checking"
    })
    .then((bankAcc) => console.log({bankAcc}))
    .catch((err) => console.error(err))
  })
  .catch((err) => console.error(err))




//   client
//     .placeOrder({
//       symbol: assets[Math.floor(Math.random() * assets.length)].symbol,
//       side: 'buy',
//       type: 'market',
//       time_in_force: 'day',
//       qty: 1,
//     })
//     .catch((error) => console.error(error)),
// )
