![Trustcypher Lite Logo](https://github.com/Caterbou/Trustcypher-LITE/blob/main/public/img/trustcypher-lite-logo-big.png)  

Trustcypherlite
===============

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![License](https://img.shields.io/badge/license-MIT-green.svg) ![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)

Table of Contents
-----------------

*   [About](#about)
*   [Getting Started](#getting-started)
*   [Usage](#usage)
*   [Project Structure](#project-structure)
*   [Dependencies](#dependencies)
*   [Scripts](#scripts)
*   [Contributing](#contributing)
*   [License](#license)

About
-----

**Trustcypherlite** is a secure and easy-to-use password generator. It allows users to generate random passwords with customizable options such as length, inclusion of uppercase letters, lowercase letters, numbers, and special characters. This project aims to provide a simple yet effective tool to enhance password security.

Getting Started
---------------

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

*   Node.js (v12 or higher)
*   NPM (v6 or higher)

### Installation

1.  Clone the repository:
    
        git clone https://github.com/Caterbou/trustcypherlite.git
    
2.  Navigate to the project directory:
    
        cd trustcypherlite
    
3.  Install the dependencies:
    
        npm install
    
4.  Start the server:
    
        npm start
    

Access the application at [http://localhost:3000](http://localhost:3000).

Usage
-----

Once the server is running, you can generate passwords by adjusting the settings in the user interface. Use the sliders and checkboxes to customize the password length and character set.

Click the "Copy" button to copy the generated password to your clipboard.

Project Structure
-----------------

    
    trustcypherlite/
    │
    ├── public/
    │   ├── css/
    │   │   ├── bootstrap.css
    │   │   ├── custom.min.css
    │   │   └── passwordgen.css
    │   ├── js/
    │   │   ├── bootstrap.bundle.min.js
    │   │   ├── jquery.min.js
    │   │   ├── custom.js
    │   │   ├── generatePassword.js
    │   │   └── copy.js
    │   ├── img/
    │   │   └── trustcypher-lite-logo-big.png
    │   ├── index.html
    │
    ├── package.json
    ├── index.js
    ├── README.md
    

### Key Files

*   **index.html**: Main HTML file that structures the layout and functionality of the password generator interface.
*   **index.js**: Sets up an Express server to serve the application.
*   **package.json**: Manages project dependencies and scripts.
*   **generatePassword.js**: Contains logic to generate passwords based on user-selected criteria.
*   **copy.js**: Handles the copying of the generated password to the clipboard.
*   **custom.js**: Custom interactions such as tooltips and navbar transparency.
*   **bootstrap.bundle.min.js**: Minified Bootstrap JavaScript for UI components and utilities.
*   **jquery.min.js**: Minified jQuery library for DOM manipulation and event handling.

Dependencies
------------

*   **express**: A fast, unopinionated, minimalist web framework for Node.js.
*   **body-parser**: Node.js body parsing middleware.

Scripts
-------

*   **start**: Starts the Express server.
*   **test**: Placeholder for running tests (currently not specified).

Contributing
------------

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch:
    
        git checkout -b feature-branch
    
3.  Make your changes.
4.  Commit your changes:
    
        git commit -m 'Add new feature'
    
5.  Push to the branch:
    
        git push origin feature-branch
    
6.  Open a pull request.

License
-------

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.