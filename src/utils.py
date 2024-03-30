import json

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
        with open(filename, 'w+') as f:
            if isinstance(content, str):
                f.write(content)
            elif filename.endswith('.json'):
                json.dump(content, f, indent=4)
            else:
                print("Invalid content")
    else:
        print("Invalid content")


def main():
    # Test fileReader functionls
    print("Reading file projects.json:")
    file_content = fileReader("data/projects.json")
    print(file_content)

    # # Test fileWriter function
    # print("\nWriting to file test.json:")
    # new_content = {"key": "value"}
    # fileWriter("test.json", new_content)
    # print("Data written successfully.")

if __name__ == "__main__":
    main()