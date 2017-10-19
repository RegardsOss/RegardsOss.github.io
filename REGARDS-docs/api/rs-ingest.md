---
layout: classic-docs
title: REGARDS Ingest API
categories:
  - api
---
# REGARDS INGEST API

Base API URL may vary and is not mentioned here. So in production, each URL specified here must be prefixed with this base URL.

## Submit SIP
---
Allows to make bulk SIP request.

* **URL**:

  `/rs-ingest/sips`

* **Method:**
  
  `POST`

* **Accept request header**

  `application/geo+json;charset=UTF-8`
  
*  **URL Params**

   None

* **Data Params**

  **Required:**

  SIP collection passed either by value (**see below for full description**) :
  ```json
  {
    "type": "FeatureCollection",
    "metadata": {
        "processing": "{processing_id}",
        "session" : "{session_id}"
    },
    "features": [
        {
            "type": "Feature",
            "id": "{SIP_ID}", // Submission Information Package IDentifier
            "ipType": "DATA",            
            "geometry": null,
            "properties": { 
                "contentInformations": [
                    {
                        "dataObject": {
                            "regardsDataType": "{RAWDATA|QUICKLOOK_SD|QUICKLOOK_MD|QUICKLOOK_HD|DOCUMENT|THUMBNAIL|OTHER}",
                            "url": "{url (e.g. file:/home/test.xml)}",
                            "checksum": "{checksum}",
                            "algorithm": "{md5|sha|...}"
                        }
                    }
                ],
                "pdi": {
                    "provenanceInformation": {
                        "history": []
                    },
                    "accessRightInformation": {}
                },
                "descriptiveInformation": {}
            }
        }
    ]
  }
  ```

  or by reference:
  ```json
  {
    "type": "FeatureCollection",
    "metadata": {
        "processing": "{processing_id}",
        "session": "{session_id}"
    },
    "features": [
        {
            "type": "Feature",
            "id": "{SIP_ID}",
            "ipType": "DATA",
            "geometry": null,
            "properties": null, // Must be null
            "ref": {
                "url": "{url}",
                "checksum": "d6aa97d33d459ea3670056e737c99a3d",
                "algorithm": "{md5|sha|...}"
            }
        }
    ]
  }
  ``` 

### Responses
---

* **Success Response:**
  
  * **Code:** 201 <br />
    **Content:**
  ```json
    [
      {
          "id":"{database identifier}",
          "sipId": "{SIP_ID}",
          "ipId": "URN:SIP:DATA:PROJECT:dbbbbe05-b6b8-3300-8431-105f505cbb3c:V1", // Internal SIP identifieer
          "state": "CREATED", // Ready for further processing
          "checksum": "5e3ce3c34f08b65dbe3e2257dc9ed5fc", // Raw SIP checksum
          "sip": "{raw SIP}",
          "ingestDate": "2017-10-12T15:37:08.626Z",
          "processing": "{processing_id}",
          "sessionId": "{session_id}",
          "version":"1"
      }
    ]
    ```

* **Partial success Response:**

  Some SIP has been rejected.
  
  * **Code:** 206 <br />
    **Content:**
  ```json
    [
      {
          "id":"{database identifier}",
          "sipId": "{SIP_ID}",
          "ipId": "URN:SIP:DATA:PROJECT:dbbbbe05-b6b8-3300-8431-105f505cbb3c:V1", // Internal SIP identifieer
          "state": "CREATED", // Ready for further processing
          "checksum": "5e3ce3c34f08b65dbe3e2257dc9ed5fc", // Raw SIP checksum
          "sip": "{raw SIP}",
          "ingestDate": "2017-10-12T15:37:08.626Z",
          "processing": "{processing_id}",
          "sessionId": "{session_id}",
          "version":"1"
      },
      {
          "sipId": "{SIP_ID}",
          "ipId": "URN:SIP:DATA:PROJECT:bdacbc80-624d-3a7c-8de7-464743b3d1f9:V1",
          "state": "REJECTED", // Rejected SIP
          "reasonForRejection" : "{message}", // Rejected reason
          "checksum": "27c0937497217bede5cc0475d8ce7aaf",
          "sip": "{raw SIP}",
          "ingestDate": "2017-10-12T15:37:58.546Z",
          "processing": "{processing_id}",
          "sessionId": "{session_id}",
          "version":"1"
      }
    ]
    ```
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `TODO`

  OR 

  * **Code:** 409 CONFLICT<br />
    **Content:**
    Same as success response but all SIP are rejected.

  OR

  * **Code:** 422 UNPROCESSABLE ENTITY <br />
    **Content:**
  ```json
  {
    "messages":[
      "SIP identifier required",
      "checksum required"
    ]
  }
  ```

### Full SIP value description
---

SIP format meets the `RFC 7946` format alias `GeoJSON` format.

Its properties are **adapted** from the `REFERENCE MODEL FOR AN OPEN ARCHIVAL INFORMATION SYSTEM (OAIS)` from the `Consultative Committee for Space Data Systems (CCSDS)`.

  * **GeoJson base structure**
```json
{
  "type": "Feature",
  "id": "{SIP_ID}", // Submission Information Package IDentifier
  "ipType": "DATA", // Fixed value           
  "geometry": "{AIP geometry}", // RFC 7946 
  "properties": {
    //  Information Package (IP)
  }
}
```

 * **Information package (IP)**

```json
"informationPackage": {
    "contentInformations": [
       // ... required content information(s)
    ],
    "pdi": { // Preservation Description Information
        "contextInformation": { // Optional links to other information outside
        },
        "referenceInformation": { // Optional identifier(s) : ivo, ark, doi
        },
        "provenanceInformation": { // Optional provenance information
        },
        "fixityInformation": { // Optional fixity information
        },
        "accessRightInformation": { // Optional access right information
        }
    },
    "descriptiveInformation": { // Optional descriptive information
    }
}
```

 * **Content information**

This object contains a **required** `dataObject` and an **optional** `representationInformation`. The information package accepts **one or more** content informations.

If `representationInformation` exists :
- `Syntax` is **required** with the elements as below,
- `Semantic` is **optional**,
- `EnvironmentDescription` is **optional**.  

```json
{
  "dataObject": {
    "regardsDataType": "{RAWDATA|QUICKLOOK_SD|QUICKLOOK_MD|QUICKLOOK_HD|DOCUMENT|THUMBNAIL|OTHER}",
    "url": "{url (e.g. file:/home/test.xml)}",
    "checksum": "{checksum}",
    "algorithm": "{md5|sha|...}"
  },
  "representationInformation": { // Optional - (e.g.)
      "Syntax": {
          "name": "FITS(FlexibleImageTransport)", 
          "description": "http://www.iana.org/assignments/media-types/application/fits",
          "mime-type": "application/fits"
      },
      "Semantic": {
          "description": "|Bytes|Format|Units|Label|Explanations|\n|------|-----------|-----|---------|----------------------------------------|\n|1-9|I9|---|Corot|CoRoTnumber|\n|11|I1|h|RAh|Rightascension(J2000)|\n|13-14|I2|min|RAm|Rightascension(J2000)|\n|16-20|F5.2|s|RAs|Rightascension(J2000)|\n|22|A1|---|DE-|Declinationsign(J2000)|\n|23|I1|deg|DEd|Declination(J2000)|\n|25-26|I2|arcmin|DEm|Declination(J2000)|\n|28-32|F5.2|arcsec|DEs|Declination(J2000)|"
      }, // Optional
      "EnvironmentDescription": { //optional
          "SoftwareEnvironment": { //optional
              // + Optional : any keys/values
          },
          "HardwareEnvironment": { // optional
              // + Optional : any keys/values
          }
      }
  }
}
```

* **Preservative Description Information (PDI) : Context Information**

```json
"contextInformation": { // Optional links to other information outside
  "<value1>": "<URN1>",
  "<value2>": "<URN2>",
  "tags": [
      "NASA",
      "URN:AIP:COLLECTION:PROJECT:67db4ba0-0ba5-40f7-ac6d-fe2fdbf42664:V1",
      "URN:AIP:COLLECTION:PROJECT:67db4ba0-0ba5-0ba5-ac6d-fe2fdbf42664:V1",
      "URN:AIP:COLLECTION:PROJECT:67db4ba0-0ba5-40f7-0ba5-fe2fdbf42664:V1",
      "URN:AIP:COLLECTION:PROJECT:67db4ba0-ac6d-40f7-ac6d-fe2fdbf42664:V1",
      "URN:AIP:COLLECTION:PROJECT:67db4ba0-0ba5-ac6d-ac6d-fe2fdbf42664:V1"
  ]
}
```

* **Preservative Description Information (PDI) : Reference Information**

```json
"referenceInformation": { // Optional identifier(s) : ivo, ark, doi
  "ivoId": "ivo://....",
  "doi": "102455/120.34SDSS"
}
```

* **Preservative Description Information (PDI) : Provenance Information**

```json
"provenanceInformation": { // Optional provenance information
  "facility": "HST", //optional - description ou URN
  "instrument": "instru1", // description ou URN
  "filter": "filter1", // description ou URN
  "detector": "detector1", //optional - description ou URN
  "proposal": "description", //optional - description ou URN
  "history": [
    {
        "eventDate": "2014-01-01T23:10:05",
        "comment": "acquisitionoftheobservation"
    },
    {
        "eventDate": "2014-01-02T23:10:05",
        "comment": "astrometrycalibration"
    },
    {
        "eventDate": "2014-02-01T23:10:05",
        "comment": "receivedinformationfromtheproducertothearchive"
    },
    {
        "eventDate": "2014-02-01T23:30:05",
        "comment": "AIPiscreated"
    }
  ]
  // + Optional : any keys/values
}
```

* **Preservative Description Information (PDI) : Fixity Information**

```json
"fixityInformation": { // Optional fixity information
  // + Optional : any keys/values
}
```


* **Preservative Description Information (PDI) : Access Right Information**

```json
"accessRightInformation": { // Optional access right information
  "licence": "<value1>", // Optional
  "data_rights": "secure",
  "publicReleaseDate": "2017-01-01T01:00:00" // Optional
}
```

* **Descriptive Information**

This object describes all information package metadata (which are not indicated in PDI).

```json
"descriptiveInformation": {
  // + Optional : any keys/values
}
```

### Sample Call
---

### Notes
---
