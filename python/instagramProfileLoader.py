import profile
import instaloader

class Client():
  def __init__(self):
    self.loader = instaloader.Instaloader()


  def getProfilePictureUrlFromUserName(self, username: str) -> str:
    try:
      profilePictureUrl = instaloader.Profile.from_username(self.loader.context, username).get_profile_pic_url()
      return profilePictureUrl
    except:
      return None
