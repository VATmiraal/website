// Static request/response examples for the developer page.
// Locale-independent; shown verbatim in the code tabs.

export const boxReq = `POST /box-analysis
Content-Type: application/json

{
  "perspective": "supplier",
  "transaction": {
    "taxable_point": "2025-04-10",
    "type": "service",
    "taxable_amount": 7200,
    "vat_amount": 0,
    "supplier": {
      "type": "company",
      "vat_number": "BE0700800900",
      "country": "belgium",
      "properties": []
    },
    "receiver": {
      "type": "company",
      "vat_number": "NL123456789B01",
      "country": "netherlands",
      "properties": []
    },
    "object": {
      "classification": "consulting",
      "type": "general_service",
      "properties": []
    }
  }
}`;

export const boxRes = `200 OK

{
  "boxes": [
    {
      "box": "44",
      "amount": 7200,
      "justifications": [
        {
          "applies": true,
          "justification": "Services to a taxable person are located where the customer is established.",
          "legal_reference": {
            "code": "WBTW", "article": "21", "paragraph": "2"
          },
          "context": { "type": "place_of_supply", "location": "netherlands" }
        }
      ]
    },
    { "box": "48", "amount": 0, "justifications": [] }
  ],
  "warnings": [],
  "inconsistencies": []
}`;

export const infReq = `POST /inference/object
Content-Type: application/json

{
  "description": "consulting hours invoiced to a Dutch company"
}`;

export const infRes = `200 OK

{
  "type": "general_service",
  "transaction_types": ["service"],
  "properties": [
    { "value": "consulting", "label": "Consulting" }
  ]
}`;
