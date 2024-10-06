# SwiftCase API Interface

## Overview

The **SwiftCase API Interface** is a web application that facilitates interaction with the SwiftCase API for managing workflow status and tasks. Built with React, this application provides a user-friendly interface for uploading data, viewing tasks, and handling notifications.

## Features

- Enter and submit Workflow Status IDs to fetch task data from the SwiftCase API.
- Upload task-related data files in a specified format.
- View loading indicators and error messages for better user experience.
- Responsive design for optimal viewing on various devices.
- Download the Data from the API into a .txt file

## Tech Stack

- **Frontend:** React, Tailwind CSS, DaisyUI
- **State Management:** React Context API
- **Custom Hooks:** For fetching and uploading data
- **Deployment:** GitHub for version control

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/suleman098/swiftcase-api-interface.git


2. **Navigate to the project directory::**
   ```bash
   cd swiftcase-api-interface
   
3. **Install dependencies:**
   ```bash
   npm install

4. **Run the application:**
   ```bash
   npm start


## Usage

### Getting Started

1. **Installation**: Follow the installation steps outlined in the README file to clone the repository and install the necessary dependencies.
2. **Run the Application**: Start the application by running `npm start` and navigate to `http://localhost:3000` in your web browser.

### Entering Product Status ID

- **Input Field**: There is a text box available to enter the Product Status ID, which is an integer that identifies the collection type of tasks.
- **Submit Button**: Click the "Submit" button to initiate the request.

### Form Validation

1. **Empty Input**: On button click, if the Product Status ID is not entered, an error message will be displayed indicating that the field is required.
2. **Integer Validation**: The application checks whether the entered Product Status ID is an integer. If not, an error message will be shown, prompting the user to enter a valid integer.

### Fetching Task IDs

- When a valid Product Status ID is entered, the application makes a request to the SwiftCase API to fetch the task IDs associated with the specified Workflow Status ID.
- For this implementation, you can use `Workflow Status ID = 1043`.

### Fetching Task Details

- After retrieving the task IDs, the application will make additional requests to the SwiftCase API to fetch details for each task returned.
- The task details will be stored in an array for further processing.

### Calculating Total Cost

- The application sums the cost data for each task where the `Cancelled` field is equal to "No".
- The calculated total cost is formatted as £X.XX, ensuring two decimal places are displayed.

### File Upload

1. The formatted task data (including Unix timestamps for date columns) can be saved to a file or outputted in a modal.
2. If opting for file upload:
   - The data is sent to the SwiftCase API's upload endpoint using the provided Task ID.
   - The file is uploaded as a base-64 encoded string with a `.txt` extension and a MIME type of `text/plain`.

### Confirmation Message

- Upon successful upload of the file, a confirmation message will be displayed to inform the user that the file has been uploaded successfully.
- If using a modal for displaying data, a close button is available to close the modal after reviewing the information.

### Additional Notes

- Ensure you have valid API keys and access rights to interact with the SwiftCase API.
- The application is responsive and designed for optimal viewing on various devices.



## API Integration
This application communicates with the SwiftCase API to perform various operations. Ensure you have the correct API keys and access rights to interact with the API successfully.




