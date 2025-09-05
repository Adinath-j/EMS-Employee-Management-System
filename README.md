# 🏢 Employee Task Management System  

A simple yet powerful **React-based Employee Task Management System** built with **Context API** and **Local Storage** for persistence.  
This project demonstrates **role-based dashboards**, **task tracking**, and **state management** in a beginner-friendly and scalable way.  

---

## 🚀 Features  

- 🔑 **Role-based Login** – Separate dashboards for **Admin** and **Employees**  
- 📝 **Task Assignment** – Admin can create and assign tasks to employees  
- 📊 **Task Status Tracking** – `New → Accepted → Completed / Failed` lifecycle  
- 🔄 **Real-time State Updates** with Context API + LocalStorage  
- 🎨 **Responsive UI** built using TailwindCSS  
- 💾 **Persistent State** even after page reloads  

---

## 🎥 Demo Video  

*(Attach your LinkedIn video link here once uploaded)*  

---

## 🛠 Tech Stack  

- **Frontend:** React (Vite), Context API  
- **Styling:** TailwindCSS  
- **Database:** Local Storage (planned migration to backend database)  

---

## ⚡ Quick Start  

1. **Clone the Repository**  
```bash
git clone https://github.com/your-username/employee-task-management.git
cd employee-task-management
```

2. **Install Dependencies**  
```bash
npm install
```

3. **Run the Development Server**  
```bash
npm run dev
```

---

## 📂 Project Structure  

```
EMPLOYEE-TASK-MANAGEMENT/
└─ src/
   ├─ assets/
   ├─ components/
   │  ├─ Auth/
   │  │  └─ Login.jsx
   │  ├─ Dashboard/
   │  │  ├─ AdminDashboard.jsx
   │  │  └─ EmployeeDashboard.jsx
   │  └─ TaskList/
   │     ├─ other/
   │     │  ├─ AllTask.jsx
   │     │  ├─ CreateTask.jsx
   │     │  ├─ Header.jsx
   │     │  └─ TaskListNums.jsx
   │     └─ TaskList.jsx
   ├─ context/
   │  └─ AuthProvider.jsx
   ├─ utils/
   │  └─ localStorage.jsx
   ├─ App.jsx
   ├─ main.jsx
   └─ index.css
.gitignore
package.json
package-lock.json
README.md
vite.config.js
index.html
```

---

## 🚀 Current Functionality  

- **Admin Dashboard:**  
  - View employees and assign tasks  

- **Employee Dashboard:**  
  - See assigned tasks and update status with:  
    - `Accept Task` → Marks task as active  
    - `Completed` → Marks task as completed  
    - `Failed` → Marks task as failed  

- **Task Counts:**  
  - Auto-calculated and updated on status change  

- **State Management:**  
  - Context API for global state  
  - LocalStorage for persistence  

---

## 🔮 Future Scope  

- 🔗 **Backend Integration:**  
  - Add **Node.js + Express** backend  
  - Use **MongoDB / MySQL** for database instead of LocalStorage  

- 🔐 **Authentication:**  
  - Secure login with JWT or OAuth  

- 📡 **API Endpoints:**  
  - CRUD operations for tasks and employees  

- 📈 **Analytics Dashboard:**  
  - Graphs for task progress and employee performance  

- 🌐 **Deployment:**  
  - Deploy with **Vercel / Netlify** frontend & **Render / Railway** backend  

---
*already deployed on vercel*