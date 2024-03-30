# read a file projects.json
def fileReader(filename):
    if (filename):
        with open(filename,'r') as f:
            content = f.readlines
            return content
    else:
        print("Invalid File Name")


# edits a file
def fileWriter(filename, content):
    if content:
        with open(filename,'w+') as f:
            f.write(content)
    else:
        print("Invalid content")

