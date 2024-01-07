const SearchSchema = require('../model/searchModel');
const TweetSchema = require('../model/tweetsModel')
const Utilities = require('../DataUtilities/twitterUtility')

module.exports.searchTweets = async (req,res) =>{
    if(!req.body || !req.body.queryText){
        res.status(400).json({success:false,data:null})
    }

    let queryText = req.body.queryText;
    let count = (!req.body.count || req.body.count==0) ? 15 : req.body.count
    let apiResponse = await Utilities.getTweets(queryText,count)
    if(apiResponse.success){
       let search = await SearchSchema.create({ search:queryText });
       let tweets = [];
       apiResponse.data.statuses.map( (obj) => 
        {
            let data = TweetSchema.create({
                searchId:search.id,
                content:obj.text,
                createdOn:obj.created_at,
                location:obj.user.location,
                language:obj.lang,
                userName:obj.user.name,
                reTweets:obj.retweet_count,
                searchText:search.search
            });
            tweets.push(data);
        })
        Promise.all(tweets).then( values => {
            res.status(200).json({success:true,data:{search:search,result:values}});
        }).catch(err => {
            res.status(401).json({success:false,data:{search:search,result:null}})
        })
    }
    else{
        res.status(401).json({success:false,data:{search:search,result:null}})
    }
}
