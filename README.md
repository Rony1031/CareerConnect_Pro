# CareerConnect Pro

## Overview

CareerConnect Pro is a secure and user-friendly Company-to-Company Candidate Track Portal built with React.js (frontend) and MongoDB, Node.js, Express (backend). It facilitates genuine businesses in sharing and tracking employment details exclusively among registered companies, enhancing transparency and effectiveness in the hiring process.

## Project Structure

CareerConnect Pro follows a modular structure for both frontend and backend.

### Backend Structure

- **Controllers:**
  - `authController.js`: Handles user authentication logic.
  - `companyController.js`: Manages company-related operations.
  - `candidateController.js`: Manages candidate-related operations.
- **Models:**
  - `Company.js`: Defines the company data model.
  - `Candidate.js`: Defines the candidate data model.
- **Routes:**
  - `authRoutes.js`: Defines authentication routes.
  - `companyRoutes.js`: Defines company-related routes.
  - `candidateRoutes.js`: Defines candidate-related routes.
- **Middleware:**
  - `authMiddleware.js`: Contains middleware for authentication.

### Frontend Structure

- **Components:**
  - `CompanyDashboard.js`: Displays the dashboard for registered companies.
  - `CandidateDashboard.js`: Displays the dashboard for registered candidates.
  - `Login.js`: Handles user login functionality.
  - `Register.js`: Manages user registration.
- **Contexts:**
  - `AuthContext.js`: Manages user authentication state.
- **Services:**
  - `api.js`: Defines API endpoints for communication with the backend.

## Installation

1. Clone the repository:

```bash
git clone [https://github.com/your-username/career-connect-pro.git](https://github.com/your-username/career-connect-pro.git)
cd career-connect-pro
```

# Install backend dependencies

cd backend
npm install

# Install frontend dependencies

cd frontend
npm install

cd backend
npm start

cd frontend
npm start

**Access the application** in your web browser at http://localhost:3000.

## API Endpoints

- **Authentication:**
  - **Login:**
    - Path: `/api/auth/login`
    - Method: POST
    - Description: Allows users to log in and returns an authentication token upon successful login.
  - **Register:**
    - Path: `/api/auth/register`
    - Method: POST
    - Description: Allows users to register a new account.
- **Company Operations:**
  - **Get Company Dashboard:**
    - Path: `/api/company/dashboard`
    - Method: GET
    - Description: Retrieves information for the company dashboard.
- **Candidate Operations:**
  - **Get Candidate Dashboard:**
    - Path: `/api/candidate/dashboard`
    - Method: GET
    - Description: Retrieves information for the candidate dashboard.

## Features

- **Secure Authentication:** User authentication with token-based security.
- **Company and Candidate Dashboards:** Separate dashboards for companies and candidates to manage their profiles and access relevant information.
- **Privacy Measures:** Robust privacy measures to ensure the confidentiality of data within the portal.

## Contributing

You're welcome to contribute to CareerConnect Pro! Please refer to the CONTRIBUTING.md file for guidelines.

## License


