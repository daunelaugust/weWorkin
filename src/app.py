from flask import Flask
from flask_restx import Api, Resource

app = Flask(__name__)
api = Api(app, version="1.0", title="API Title", description="A simple API")

ns = api.namespace("main", description="Main operations")


@ns.route("/hello")
class HelloWorld(Resource):
    def get(self):
        """Returns 'Hello, World!'"""
        return {"hello": "world"}


if __name__ == "__main__":
    app.run(debug=True)
