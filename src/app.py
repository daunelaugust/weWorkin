from flask import Flask
from flask_restx import Api, Resource

from utils import *

app = Flask(__name__)
api = Api(app, version="1.0", title="API Title", description="A simple API")

ns = api.namespace("API", description="API Routes")

#template for Auth0
app = Flask(__name__)
api = Api(app, version="1.0", title="API Title", description="A simple API")

oauth = OAuth(app)

auth0 = oauth.register(
    'auth0',
    client_id=os.environ.get('AUTH0_CLIENT_ID'),
    client_secret=os.environ.get('AUTH0_CLIENT_SECRET'),
    api_base_url='https://YOUR_DOMAIN',
    access_token_url='https://YOUR_DOMAIN/oauth/token',
    authorize_url='https://YOUR_DOMAIN/authorize',
    client_kwargs={
        'scope': 'openid profile email',
    },
)

ns = api.namespace("API", description="API Routes")

@ns.route("/")
class HelloWorld(Resource):
    def get(self):
        """Returns 'Hello, World!'"""
        return {"hello": "world"}


@ns.route("/projects")
class Projects(Resource):
    def get(self):
        projects = fileReader("data/projects.json")
        return projects

    def post(self):
        fileReader("data/projects.json", self)


@ns.route("/login")
class Login(Resource):
    def get(self):
        """Redirects to the Auth0 login page"""
        auth0 = oauth.create_client('auth0')
        return auth0.authorize_redirect(redirect_uri='http://localhost:5000/callback')


    def post(self):
        """Returns 'Hello, World!'"""
        return {"hello": "world"}
    



if __name__ == "__main__":
    app.run(debug=True, use_reloader=False)
