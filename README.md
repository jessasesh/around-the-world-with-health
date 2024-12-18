# Around the World with Health

## Project Context

This project is developed as part of a **team challenge** under the theme **"Around the World!"**. Leveraging the skills acquired over the past two trimesters, this project involves building a complete **API** from start to finish, including design, development, and delivery. The focus is on teamwork, scope management, and creating a meaningful product within a limited timeframe.

Our interpretation of the **"Around the World!"** theme centers on promoting **global health awareness** through activities and sports. The API provides data on **countries**, **physical activities**, and **national sports** to inspire users to stay active while exploring cultural diversity.

---

## What is it you are going to build, and how does it fit the theme?

We are building an **API** that serves as a resource for health-conscious users to discover global activities and sports. The API will feature endpoints that provide:

1. **Countries**:
   - Basic details about countries worldwide.

2. **Activities**:
   - A variety of global physical and recreational activities that encourage healthy living.

3. **National Sports**:
   - Information about culturally significant sports and activities recognized in different countries.

### Theme Fit
This project fits the **"Around the World!"** theme by:
- Encouraging users to learn about physical activities and sports from different cultures.
- Promoting an understanding of global traditions while fostering healthy habits.
- Offering an educational yet practical resource for developers, fitness enthusiasts, and educators to build applications based on health and cultural awareness.

---

## Tools and Technologies Used

1. **Backend Development**:
   - **Node.js**: JavaScript runtime environment.
   - **Express.js**: Web framework for routing and handling API requests.
   - **Dotenv**: For managing environment variables.
   - **CORS**: For cross-origin resource sharing.

2. **Data**:
   - Static JSON files for quick and simple data management:
     - `countries.json`
     - `activities.json`
     - `national_sports.json`

3. **Development Tools**:
   - **Nodemon**: For live-reloading during development.
   - **Logger**: Middleware for tracking server activities.

4. **Testing**:
   - **Postman**: For testing and debugging API endpoints.
   - **Mocha/Chai or Jest**: For writing unit tests (optional).

---

## How long do you expect to spend on development of each part?

Given the limited number of days, the project is scoped to focus on an **MVP (Minimum Viable Product)**. Below is an estimated time breakdown for each part:

| **Task**                        | **Time Estimate**   |
|---------------------------------|---------------------|
| **Project Setup**               | 1 hour             |
| - Initialize Node.js & Express  | - 0.5 hours        |
| - Create basic file structure   | - 0.5 hours        |
| **Data Preparation**            | 2 hours            |
| - Static JSON data setup        | - 2 hours          |
| **API Routes Development**      | 5 hours            |
| - `/api/countries`              | - 1.5 hours        |
| - `/api/activities`             | - 1.5 hours        |
| - `/api/national-sports`        | - 2 hours          |
| **Middleware & Logging**        | 1.5 hours          |
| - CORS setup and static serving | - 0.5 hours        |
| - Logger middleware             | - 1 hour           |
| **Testing and Debugging**       | 2 hours            |
| - Testing with Postman          | - 1 hour           |
| - Debugging API routes          | - 1 hour           |
| **Documentation**               | 1.5 hours          |
| - Writing the README.md         | - 1 hour           |
| - Adding route details          | - 0.5 hours        |

**Total Development Time**: **13 hours**

---

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd around-the-world-with-health
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Server**:
   ```bash
   npm start
   ```
   For development (auto-reloading):
   ```bash
   npm run dev
   ```

4. **Test the Endpoints**:
   Use Postman or any API testing tool to test the following routes:
   - `GET /api/countries` - Retrieve global country data.
   - `GET /api/activities` - Discover health and recreational activities.
   - `GET /api/national-sports` - Learn about national sports worldwide.

---

## API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### 1. **Get Countries**
- **URL**: `/countries`
- **Method**: `GET`
- **Description**: Retrieve a list of countries with basic details.
- **Response Example**:
```json
[
  {
    "name": "Japan",
    "capital": "Tokyo",
    "region": "Asia",
    "population": 126300000
  },
  {
    "name": "Brazil",
    "capital": "Brasília",
    "region": "South America",
    "population": 212600000
  }
]
```

#### 2. **Get Activities**
- **URL**: `/activities`
- **Method**: `GET`
- **Description**: Retrieve a list of global health and recreational activities.
- **Response Example**:
```json
[
  {
    "activity": "Yoga",
    "type": "Physical",
    "description": "A mind and body practice focusing on flexibility and breathing."
  },
  {
    "activity": "Hiking",
    "type": "Outdoor",
    "description": "Walking in nature for recreation and exercise."
  }
]
```

#### 3. **Get National Sports**
- **URL**: `/national-sports`
- **Method**: `GET`
- **Description**: Retrieve a list of countries and their culturally significant sports.
- **Response Example**:
```json
[
  {
    "country": "Canada",
    "sport": "Ice Hockey",
    "description": "A fast-paced team sport played on ice."
  },
  {
    "country": "India",
    "sport": "Cricket",
    "description": "A bat-and-ball game popular in Commonwealth nations."
  }
]
```

---

## Future Enhancements (Post-MVP)
- Integrate a database (MongoDB) for dynamic data storage.
- Add filtering and searching capabilities for the API.
- Include detailed descriptions and images for activities and sports.

---

## Contribution

Jessica Dison
Luke Schula

