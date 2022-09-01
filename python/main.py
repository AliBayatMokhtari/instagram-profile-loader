import profile
import instagramProfileLoader as ig
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
instagramClient = ig.Client()

@app.route('/profilePictureUrl')
def getProfilePictureUrl():
  username = request.args.get('username')
  profile_picture_url = instagramClient.getProfilePictureUrlFromUserName(username=username)

  if profile_picture_url:
    return {
      "Result": profile_picture_url
    }, 200
  else:
    return {
      'Result': None
    }, 404

if __name__ == '__main__':
  app.run(debug=True)
