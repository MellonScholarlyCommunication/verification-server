$( document ).ready( async function() {
    const jsonld = $('script#data').text();
    if (jsonld) {
        const data = JSON.parse(jsonld);

        if (data.primaryTopic.id) {
            $('#topic').html( 
                `${data.primaryTopic.id}`
            );
            $(document).prop('title', data.primaryTopic.id);
        }
        else {
            console.log(`no data.primaryTopic.id`);
        }

        if (data.primaryTopic.mastodon) {
            $('#mastodon').html( 
                `<a href="${data.primaryTopic.mastodon}">Mastodon</a>`
            );
        }
        else {
            console.log(`no data.primaryTopic.mastodon`);
        }

        if (data.primaryTopic.homepage) {
            $('#homepage').html( 
                `<a href="${data.primaryTopic.homepage}">Homepage</a>`
            );
        }
        else {
            console.log(`no data.primaryTopic.homepage`);
        }

        if (data.primaryTopic.modified) {
            $('#modified').html( 
                `Last verified ${data.primaryTopic.modified}`
            );
        }
        else {
            console.log(`no data.primaryTopic.modified`);
        }
    }
});