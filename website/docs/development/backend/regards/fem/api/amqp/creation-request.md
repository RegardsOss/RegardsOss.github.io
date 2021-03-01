```properties
# Headers
regards.tenant=project1
regards.request.id=12345463-0f6b-4488-b58c-52af3f7e9563
regards.request.owner=owner
regards.request.date=2019-07-04T01:03:00
```

```json
{
    "metadata": {
        "sessionOwner": "owner",
        "session": "session",
        "storages": [
            {
                "pluginBusinessId": "disk"
            }
        ],
        "priority": "NORMAL"
    },
    "feature": {
        "entityType": "DATA",
        "model": "FEATURE01",
        "files": [
            {
                "locations": [
                    {
                        "storage": null,
                        "url": "http://www.test.com/filename.xml"
                    }
                ],
                "attributes": {
                    "dataType": "RAWDATA",
                    "mimeType": "application/xml",
                    "filename": "filename",
                    "filesize": 100,
                    "algorithm": "MD5",
                    "checksum": "checksum"
                }
            }
        ],
        "id": "MyId",
        "geometry": {
            "coordinates": [
                10.0,
                20.0
            ],
            "type": "Point",
            "bbox": null,
            "crs": null
        },
        "normalizedGeometry": null,
        "properties": {
            "data_type": "TYPE01",
            "file_characterization": {
                "valid": true
            }
        },
        "type": "Feature"
    }
}
```
