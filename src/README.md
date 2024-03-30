# Project Setup Guide

Welcome to the project! This guide is designed to help you get the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before you begin, ensure you have the following installed:

- Python (3.6 or newer)
- pip (Python package installer)

## Initial Setup

1. **Clone the Repository**: Start by cloning the project repository to your local machine.
2. **Navigate to the Project Directory**: After cloning, change into the project directory:`cd weWorking/src`
3. **Create a Virtual Environment** (Recommended):
   It's a good practice to create a virtual environment for Python projects. This keeps dependencies required by different projects separate. Create a virtual environment by running:

   ```
   python3 -m venv venv
   ```

   Activate the virtual environment: On Linux:
     ```
     source venv/bin/activate
     ```

4. **Install Dependencies**:
   Install all required packages using pip:

   ```
   pip install -r requirements.txt
   ```


## Running the Flask Application

1. **Environment Variables**:
   If the project uses environment variables, make sure to set them up according to the project documentation. This often involves creating a `.env` file in the project root directory and populating it with the necessary values.

2. **Start the Flask Server**:
   With the virtual environment activated and all dependencies installed, you can now run the Flask application:
   ```
   python app.py
   ```

   This will start the Flask development server, and you will see output in the terminal indicating that the server is running, usually on `http://127.0.0.1:5000/`.

3. **Access the Application**:
   Open your preferred web browser and go to `http://127.0.0.1:5000/` to view the application.

## Next Steps

- **Explore the Code**: Familiarize yourself with the project structure and codebase. Look into the `app.py` file (or the relevant entry point) to understand how the Flask application is structured.
- **Development Guidelines**: Review any contributing guidelines or documentation provided with the project to understand the development practices and code style preferred in this project.

## Getting Help

If you encounter any issues setting up the project, first check the project's README or documentation for solutions. For further assistance, reach out to the project maintainers or your team lead.

Happy coding!
