# To-Do List Application

A simple and intuitive To-Do List application built with React and TypeScript, leveraging `useReducer` for state management and `localStorage` for persistence.

Project Structure

The project follows a standard React application structure:

```text
.
├── public/                 # Static assets (e.g., index.html)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── TodoForm.tsx    # Component for adding new tasks
│   │   └── TodoList.tsx    # Component for displaying and managing tasks
│   ├── types.ts            # TypeScript type definitions
│   └── App.tsx             # Main application component (or similar, not provided but implied)
│   └── main.tsx            # Entry point of the React application
│   └── ToDo.tsx            # Main ToDo logic and component (where useReducer and localStorage are used)
├── .gitignore              # Specifies intentionally untracked files to ignore
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Records the exact versions of dependencies
├── README.md               # This file
├── tsconfig.json           # TypeScript compiler configuration
├── tsconfig.app.json       # TypeScript configuration specific to the application
├── tsconfig.node.json      # TypeScript configuration specific to Node.js environments
└── vite.config.ts          # Vite build tool configuration
```

## Features

* **Add Tasks:** Easily add new tasks to your list.
* **Delete Tasks:** Remove tasks you no longer need.
* **Edit Tasks:** Modify existing task descriptions.
* **Mark as Completed:** Toggle the completion status of tasks.
* **Clear All:** Delete all tasks from the list with a single click.
* **Task Counters:** View the total number of tasks, active tasks, and completed tasks.
* **Persistent Storage:** Your tasks are saved locally in your browser, so they remain even after closing and reopening the application.

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
* **`useReducer` Hook:** For robust and predictable state management.
* **`useState` Hook:** For managing component-level state (e.g., input fields).
* **`useEffect` Hook:** For side effects, primarily for `localStorage` persistence.
* **Tailwind CSS (Implicit):** The `className` attributes suggest Tailwind CSS is used for styling, providing a utility-first CSS framework.
* **Lucide React Icons:** For clear and concise icons (Trash2, Edit, Save, Square, X, CheckSquare).

## Getting Started

Follow these steps to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have Node.js and npm (Node Package Manager) or Yarn installed on your system.

* [Node.js](https://nodejs.org/) (includes npm)
* [Yarn](https://yarnpkg.com/) (optional, alternative to npm)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd <your-project-directory>
    ```

    (Replace `<your-repository-url>` and `<your-project-directory>` with your actual repository URL and the desired directory name.)

2.  **Install dependencies:**

    Using npm:
    ```bash
    npm install
    ```
    Or using Yarn:
    ```bash
    yarn install
    ```

### Running the Application

To start the development server:

Using npm:
```bash
npm run dev
```

How to Use
Add a new task: Type your task in the input field at the top and click the "Add" button.

Edit a task: Click the "Edit" icon (pencil) next to a task. The task will become an editable input field. Type your changes and click the "Save" icon (disk) to confirm, or the "X" icon to cancel.

Mark a task as completed/active: Click the square icon next to a task. It will change to a checked square and the task will be styled as completed (e.g., line-through).

Delete a task: Click the "Trash" icon next to a task.

Clear all tasks: If there are tasks in your list, a "Clear All" button will appear at the bottom. Click it to remove all tasks.
