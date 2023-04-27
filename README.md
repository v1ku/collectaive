
# Collective

Collective is a real-time chat application that allows users to join group chats, send messages, and manage their profiles. It uses a Flask backend to manage server-side logic and a Vue.js frontend for the user interface.

## Project Structure

### Backend

The backend is built using Flask and is located in the `stern` folder.

```
stern/
│
├── __init__.py
├── models.py
├── server.py
├── views.py
├── config.py
├── wsgi.py
│
├── migrations/
│
├── pycache/
│
├── venv/
```

### Frontend

The frontend is built using Vue.js and is located in the `bow` folder.

```
bow/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── ChatMenu.vue
│   │   ├── ChatList.vue
│   │   ├── ChatInput.vue
│   │   ├── Login.vue
│   │   ├── ChatViewer.vue
│   │   ├── ChatRoom.vue
│   │   ├── UserSettings.vue
│   │
│   │
│   ├── App.vue
│   ├── main.js
│   ├── router.js
│   ├── socket.js
│   ├── store.js
│   └── main.css
│
├── tailwind.config.js
│
├── babel.config.js
│
├── package.json
│
└── jsconfig.json
```

## Installation

### Backend

1. Navigate to the `stern` folder:

   ```
   cd stern
   ```

2. Create a virtual environment and activate it:

   ```
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install the required dependencies:

   ```
   pip install -r requirements.txt
   ```

4. Run the Flask server:

   ```
   export FLASK_APP=server.py
   flask run
   ```

### Frontend

1. Navigate to the `bow` folder:

   ```
   cd bow
   ```

2. Install the required dependencies:

   ```
   npm install
   ```

3. Run the Vue.js development server:

   ```
   npm run serve
   ```

4. Open the application in your browser at `http://localhost:8080`.

## Contributing

Feel free to submit issues and pull requests to improve this project. Your contributions are greatly appreciated!


