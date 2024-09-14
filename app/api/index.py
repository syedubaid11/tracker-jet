
from flask import Flask, jsonify, request
import tweepy
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

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

        
if __name__ == '__main__':
    app.run(debug=True)
