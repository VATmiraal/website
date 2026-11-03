// Static request/response examples for the developer page.
// Locale-independent; shown verbatim in the code tabs.
// Mirrors the SDK's /tax-grid-analysis shape (B2B service to an EU customer).

export const boxReq = `POST /tax-grid-analysis
Content-Type: application/json

{
  "perspective": "supplier",
  "transaction": {
    "taxable_point": "2026-03-14",
    "type": "service",
    "taxable_amount": 9800,
    "vat_amount": 0,
    "supplier": {
      "type": "company",
      "vat_number": "BE0403170701",
      "country": "belgium",
      "properties": []
    },
    "receiver": {
      "type": "company",
      "vat_number": "DE811569869",
      "country": "germany",
      "properties": []
    },
    "object": {
      "type": "general_service",
      "properties": []
    }
  }
}`;

export const boxRes = `200 OK

{
  "status": "consistent",
  "grids": [
    {
      "grid": "44",
      "amount": 9800,
      "justifications": [
        {
          "legal_reference": {
            "article": "21", "paragraph": "2", "section": "n/a", "subsection": "n/a", "book": "wbtw"
          },
          "context": { "type": "place", "location": "germany" },
          "justification": "De afnemer van de dienst is een als zodanig handelende belastingplichtige; de zetel, vaste inrichting of verblijfplaats waarvoor de dienst wordt verricht, bevindt zich in Duitsland.",
          "applies": true
        },
        {
          "legal_reference": { "code": "box44" },
          "justification": "B2B dienst met plaats in de lidstaat van de medecontractant (art. 21 §2 W.BTW); afnemer is schuldenaar via verlegging — op te nemen in de IC-opgave als code S",
          "applies": true
        }
      ]
    }
  ],
  "warnings": []
}`;

export const infReq = `POST /inference/object
Content-Type: application/json

{
  "description": "consulting hours invoiced to a German company"
}`;

export const infRes = `200 OK

{
  "type": "general_service",
  "transaction_types": ["service"],
  "properties": [
    { "value": "consulting", "label": "Consulting" }
  ]
}`;
