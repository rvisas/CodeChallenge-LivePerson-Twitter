const oAuth = require('oauth');

module.exports.getTweets = async (queryText, count) =>
  new Promise((resolve) => {

    try {
      let oauth = new oAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        'xn3vRsyNkiafM2BEsUOfR376j',
        'WKwV1dXteUTUQLDuHeEsiT6L0QYEKcD8TGn2s1U6KNs5pJNjiN',
        '1.0A',
        null,
        'HMAC-SHA1'
      );

      oauth.get(
        `https://api.twitter.com/1.1/search/tweets.json?q=${queryText}&count=${count}&include_entities=true&with_twitter_user_id=true&result_type=mixed`,
        '487175114-beRb3vg8n8Q3w91KeSY31IGnDi54qmD3yXGhOeM0', //test user token
        'CYVWbhIAxmDkgOUu2y2KsvcRMamJ5Gg9BnDnj9kX30VS4', //test user secret
        (error, data) => {
          if (error)
            resolve({ success: false, data: error });
          resolve({ success: true, data: JSON.parse(data) });
        }
      );
    }
    catch (error) {
      resolve({ success: false, data: error })
    }

  })
