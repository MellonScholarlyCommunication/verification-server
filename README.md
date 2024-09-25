# Verfication Service

## Demonstration of a JSON-LD version of a researcher profile

```(json)
{
    "@context": "https://labs.eventnotifications.net/contexts/profile.jsonld",
    "id": "https://myid.surf.nl/profile/2134",
    "type": "PersonalProfileDocument",
    "primaryTopic": {
      "id": "https://myid.surf.nl/profile/2134#me",
      "type": "Person",
      "mastodon": "https://mastodon.social/@patrickhochstenbach",
      "homepage": "https://wiki.mycontributions.info/en/researcher/orcid/0000-0001-8390-6171"
      "modified": "2024-09-24T09:31:10"
    }
}
```

Remarks:

- `@context` : a link to a JSON-LD context document (RDF agents use this to translate the content into linked data)
- `id` : the URL of the published user profile
- `type` : must be `PersonalProfileDocument`
- `primaryTopic` : contains the information about the user
    - `id` : the URL of the published user profile plus some anchor (e.g. `#me`)
    - we use this to point externally to point to the interesting part of the JSON-LD document
    - `type` : must be `Person`
    - `mastodon` : a link to the researcher Mastodon profile
    - `homepage` : a link to the researcher claims page
    - `modified` : last modification or verification date of this information

All fields are mandatory.

# Discovery of the researcher profile

- The verification service is at https://myid.surf.nl .
- A researcher logs in and edits her profile with her mastodon and homepage links.
- A public facing profile page is available for her at https://myid.surf.nl/profile/2134 .
- Via content negotiation a Web agent can request the HTML and JSON-LD view of the profile.

E.g.

```
$ curl -H 'Accept: text/html' https://myid.surf.nl/profile/2134
<html>
 <head>
   <title>Researcher 2134</title>
 </head>
 <body>
   <p>
    homepage: <a href="https://wiki.mycontributions.info/en/researcher/orcid/0000-0001-8390-6171">https://wiki.mycontributions.info/en/researcher/orcid/0000-0001-8390-6171</a>
   </p>
   <p>
    mastodon: <a href="https://mastodon.social/@patrickhochstenbach">https://mastodon.social/@patrickhochstenbach</a>
   </p>
 </body>
</html>
```

```
$ curl -H 'Accept: application/ld+json' https://myid.surf.nl/profile/2134
{
    "@context": "https://labs.eventnotifications.net/contexts/profile.jsonld",
    "id": "https://myid.surf.nl/profile/2134",
    "type": "PersonalProfileDocument",
    "primaryTopic": {
      "id": "https://myid.surf.nl/profile/2134#me",
      "type": "Person",
      "mastodon": "https://mastodon.social/@patrickhochstenbach",
      "homepage": "https://wiki.mycontributions.info/en/researcher/orcid/0000-0001-8390-6171"
      "modified": "2024-09-24T09:31:10"
    }
}
```