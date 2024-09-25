#!/usr/bin/env node

const MASTODON_PRED = 'http://www.wikidata.org/prop/direct/P4033';
const HOMEPAGE_PRED = 'http://xmlns.com/foaf/0.1/homepage';
const VERIFIED_PRED = 'http://purl.org/dc/terms/modified';

const ldfetch = require('ldfetch');

if (process.argv.length != 3) {
    console.error('usage: verification-cli.js url');
    process.exit(1);
}

const checkUrl = process.argv[2];

lookup(checkUrl);

async function lookup(url) {
    const fetch = new ldfetch();
    const response = await fetch.get(url);
    const data = {};

    for (let i = 0 ; i < response.triples.length ; i++) {
        let triple = response.triples[i];
        
        if (triple.predicate.value === MASTODON_PRED) {
            data['mastodon'] = triple.object.value;
        }
        else if (triple.predicate.value === HOMEPAGE_PRED) {
            data['homepage'] = triple.object.value;
        }
        else if (triple.predicate.value === VERIFIED_PRED) {
            data['verified'] = triple.object.value;
        }
    }

    console.log(JSON.stringify(data,null,2));
}