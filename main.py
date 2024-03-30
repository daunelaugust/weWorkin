import sys

from app import app

sys.path.append("src")
if __name__ == "__main__":
    app.run(debug=True, use_reloader=False)
