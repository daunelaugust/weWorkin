import json


# read a file projects.json
def fileReader(filename):
    if filename:
        with open(filename, "r") as f:
            content = f.readlines
            return content
    else:
        print("Invalid File Name")
    return []


# edits a file
def fileWriter(filename, content):
    if content:
        with open(filename, "w+") as f:
            if isinstance(content, str):
                f.write(content)
            elif filename.endswith(".json"):
                json.dump(content, f, indent=4)
            else:
                print("Invalid content")
    else:
        print("Invalid content")
