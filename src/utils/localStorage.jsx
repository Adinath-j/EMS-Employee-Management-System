const employees = [
  {
    "id": 1,
    "firstname": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Fix login bug",
        "description": "Resolve the login redirection issue on the frontend",
        "date": "2025-08-17",
        "category": "Bug Fix"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Update UI theme",
        "description": "Implement the new dark mode theme in dashboard",
        "date": "2025-08-10",
        "category": "UI/UX"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Deploy backend",
        "description": "Push Node.js backend to production server",
        "date": "2025-08-12",
        "category": "Deployment"
      }
    ]
  },
  {
    "id": 2,
    "firstname": "Vivaan",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Design API docs",
        "description": "Create Swagger documentation for payment API",
        "date": "2025-08-17",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Optimize database queries",
        "description": "Reduce response time by indexing key columns",
        "date": "2025-08-11",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Setup CI/CD",
        "description": "Automate build and deployment pipeline using GitHub Actions",
        "date": "2025-08-09",
        "category": "DevOps"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Write unit tests",
        "description": "Add Jest test cases for user authentication module",
        "date": "2025-08-16",
        "category": "Testing"
      }
    ]
  },
  {
    "id": 3,
    "firstname": "Ishaan",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Customer feedback form",
        "description": "Build a React form to capture customer reviews",
        "date": "2025-08-17",
        "category": "Frontend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Migrate legacy API",
        "description": "Move old PHP API to Node.js",
        "date": "2025-08-13",
        "category": "Migration"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Integrate SMS gateway",
        "description": "Connect Twilio API for OTP verification",
        "date": "2025-08-14",
        "category": "Integration"
      }
    ]
  },
  {
    "id": 4,
    "firstname": "Krishna",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Research caching",
        "description": "Evaluate Redis vs Memcached for session storage",
        "date": "2025-08-17",
        "category": "Research"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Add search filter",
        "description": "Implement filtering logic on orders table",
        "date": "2025-08-15",
        "category": "Feature"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Code review",
        "description": "Review PRs submitted by team members",
        "date": "2025-08-12",
        "category": "Review"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Setup monitoring",
        "description": "Implement application monitoring with Grafana",
        "date": "2025-08-11",
        "category": "Monitoring"
      }
    ]
  },
  {
    "id": 5,
    "firstname": "Arjun",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 3,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Build landing page",
        "description": "Develop marketing landing page in React",
        "date": "2025-08-17",
        "category": "Frontend"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Email template",
        "description": "Create responsive HTML email template",
        "date": "2025-08-14",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "User onboarding flow",
        "description": "Improve signup and onboarding experience",
        "date": "2025-08-12",
        "category": "UX"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Push notifications",
        "description": "Implement Firebase push notifications",
        "date": "2025-08-10",
        "category": "Mobile"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Data export",
        "description": "Add CSV export option for reports",
        "date": "2025-08-16",
        "category": "Feature"
      }
    ]
  }
]


const admin = {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
export const setLocalStorage = ()=>{
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees,admin}
}