
from flask import Flask, jsonify, request
import tweepy
import os
from dotenv import load_dotenv
from pytrends.request import TrendReq
import time


load_dotenv()

app = Flask(__name__)

pytrends = TrendReq(hl='en-US', tz=360)  # 'hl' is the language and 'tz' is the timezone offset

auth = tweepy.OAuth1UserHandler(
    os.getenv('TWITTER_API_KEY'),
    os.getenv('TWITTER_API_SECRET_KEY'),
    os.getenv('TWITTER_ACCESS_TOKEN'),
    os.getenv('TWITTER_ACCESS_TOKEN_SECRET')
)

api = tweepy.API(auth)

@app.route('/')
def home():
    return "Welcome to the Twitter API Backend!"

@app.route('/api/trending_account_posts', methods=['GET'])
def get_trending_account_posts():
    try:
        # Account username (replace with the username of the trending account)
        username = request.args.get('username', 'Twitter')  # Default to 'Twitter' if not provided

        # Fetch tweets from the specific account
        tweets = api.user_timeline(screen_name=username, count=10, tweet_mode='extended')
        tweet_data = [{'user': tweet.user.screen_name, 'text': tweet.full_text, 'created_at': tweet.created_at} for tweet in tweets]
        return jsonify(tweet_data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/test', methods=['GET'])
def fetch_trends_data():
    try:
        # Set up the TrendReq object with a custom timeout
        pytrends = TrendReq(timeout=(10,25))
        
        # Define the keyword(s)
        keywords = ['Python', 'JavaScript']

        # Build the payload with more specific parameters
        pytrends.build_payload(keywords, cat=0, timeframe='today 12-m', geo='US', gprop='')

        # Add a small delay to avoid rate limiting
        time.sleep(1)
        
        # Fetch interest over time
        interest_over_time_df = pytrends.interest_over_time()


        
        # Add a small delay
        time.sleep(1)
        
        # Fetch related queries
        
        # Add a small delay
        time.sleep(1)
        
        # Fetch trending searches
        trending_searches_df = pytrends.trending_searches(pn='united_states')
        
        
        # Prepare JSON responses with error checking
        interest_over_time_json = interest_over_time_df.to_json() if not interest_over_time_df.empty else {"error": "No interest over time data"}
        trending_searches_json = trending_searches_df.to_json() if not trending_searches_df.empty else {"error": "No trending searches data"}
        
        # Return JSON response
        return jsonify({
            "interest_over_time": interest_over_time_json,
            "trending_searches": trending_searches_json
        })
    except Exception as e:
        # Handle errors
        return jsonify({"error": str(e), "type": type(e).__name__}), 500

if __name__ == '__main__':
    app.run(debug=True)



