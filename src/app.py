from flask import Flask
from flask_restx import Api, Resource

from utils import *

app = Flask(__name__)
api = Api(app, version="1.0", title="API Title", description="A simple API")

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


@ns.route("/login")
class Login(Resource):
    def get(self):
        """Returns 'Hello, World!'"""
        return {"hello": "world"}

    def post(self):
        """Returns 'Hello, World!'"""
        return {"hello": "world"}


if __name__ == "__main__":
    app.run(debug=True, use_reloader=False)
