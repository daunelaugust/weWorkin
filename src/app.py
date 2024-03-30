from flask import Flask
from flask_restx import Api, Resource

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
        """Returns 'Hello, World!'"""
        return {"hello": "world"}

    def post(self):
        """Returns 'Hello, World!'"""
        return {"hello": "world"}


@ns.route("/login")
class Login(Resource):
    def get(self):
        """Returns 'Hello, World!'"""
        return {"hello": "world"}

    def post(self):
        """Returns 'Hello, World!'"""
        return {"hello": "world"}


if __name__ == "__main__":
    app.run(debug=True)
