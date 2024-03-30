from flask import Flask, request
from flask_restx import Api, Resource, fields

from utils import *

app = Flask(__name__)
api = Api(app, version="1.0", title="API Title", description="A simple API")

ns = api.namespace("API", description="API Routes")

# template for Auth0
app = Flask(__name__)
api = Api(app, version="1.0", title="API Title", description="A simple API")

# oauth = OAuth(app)

# auth0 = oauth.register(
#     "auth0",
#     client_id=os.environ.get("AUTH0_CLIENT_ID"),
#     client_secret=os.environ.get("AUTH0_CLIENT_SECRET"),
#     api_base_url="https://YOUR_DOMAIN",
#     access_token_url="https://YOUR_DOMAIN/oauth/token",
#     authorize_url="https://YOUR_DOMAIN/authorize",
#     client_kwargs={
#         "scope": "openid profile email",
#     },
# )

ns = api.namespace("API", description="API Routes")


# Define the model for your project data
json_model = api.model(
    "project",
    {},
)


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

    @api.expect(json_model)
    def post(self):
        content = request.get_data(as_text=True)
        project = json.loads(content)
        fileWriter("data/projects.json", project)
        return {"status": "success"}


@ns.route("/projects/<int:id>")
class ProjectById(Resource):
    def get(self, id):
        """Returns a single project by its ID"""
        projects = fileReader("data/projects.json")
        project = next((proj for proj in projects if proj["id"] == id), None)
        if project:
            return project
        else:
            api.abort(404, f"Project {id} not found")

ns.route("/apply")
class Apply(Resource):
    @api.expect(json_model)
    def post(self):
        content = request.json
        fileWriter("data/myprojects.json", content)
        return {"status": "success"}

        
        


# @ns.route("/login")
# class Login(Resource):
#     def get(self):
#         """Redirects to the Auth0 login page"""
#         auth0 = oauth.create_client("auth0")
#         return auth0.authorize_redirect(redirect_uri="http://localhost:5000/callback")

#     def post(self):
#         """Returns 'Hello, World!'"""
#         return {"hello": "world"}


if __name__ == "__main__":
    app.run(debug=True, use_reloader=False)
