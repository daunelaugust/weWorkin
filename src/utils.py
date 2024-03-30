import json
import os

# read a f projects.json
def fileReader(filename):
    if (filename):
        with open(filename,'r') as f:
            if filename.endswith('.json'):
                content = json.load(f)  
                return content
            else:
                content = f.readlines
                return content
    else:
        print("Invalid File Name")


# edits a f
def fileWriter(filename, content):
    if filename and content:
        # Read the existing JSON data from the f
        with open(filename, 'r') as f:
            data = json.load(f)
    
        data.append(content)
    
        with open(filename, 'w') as f:
            json.dump(data, f, indent=4)
    else:
        print("Invalid filename or content")