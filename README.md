Sure! Here's the **final and complete `README.md`** file in one clean block, ready to copy-paste into your GitHub repository:

```markdown
# 📅 ScheduleMeeting - Google Calendar Meeting Scheduler

A Node.js-based backend application that integrates with the Google Calendar API to schedule meetings using OAuth2 authentication.

---

## 🚀 Features

- Google OAuth2 login integration  
- Automatic access token handling with refresh token  
- Schedule meetings on user's Google Calendar  
- Stores meeting data using MySQL  
- RESTful API structure with Express.js  

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js  
- **Authentication**: Google OAuth2  
- **Database**: MySQL  
- **Google API**: `googleapis` package  

---

## 📁 Project Structure

```

ScheduleMeeting/
├── .env
├── server.js               # Main entry point
├── google-auth.js          # Handles Google OAuth2 and calendar API logic
├── db/
│   └── mysql.js            # MySQL database connection setup
├── package.json            # Project metadata and dependencies

```

---

## 🔐 Environment Variables

Create a `.env` file at the root of the project:

```

CLIENT\_ID=your\_google\_client\_id
CLIENT\_SECRET=your\_google\_client\_secret
REDIRECT\_URI=[http://localhost:3000/oauth2callback](http://localhost:3000/oauth2callback)
REFRESH\_TOKEN=your\_google\_refresh\_token

````

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/sagarbj3245/MeetingScheduler.git
cd MeetingScheduler/ScheduleMeeting

# Install dependencies
npm install
````

---

## 🧪 Running the Project

```bash
# Start the server
node server.js
```

Server will run on: `http://localhost:3000`

---

## 📅 Scheduling a Meeting

Use a POST request to `http://localhost:3000/schedule` with the following JSON body:

```json
{
  "summary": "Team Sync",
  "description": "Weekly standup meeting",
  "location": "Google Meet",
  "startTime": "2025-07-29T15:00:00.000Z",
  "endTime": "2025-07-29T15:30:00.000Z",
  "attendees": ["example1@gmail.com", "example2@gmail.com"]
}
```

---

## 🗃️ MySQL Setup

Create a MySQL database and configure your connection in `db/mysql.js`. Example:

```js
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "yourpassword",
  database: "schedule_meeting"
});
```

---

## ✅ Dependencies

Check out the full list in `package.json`. Major ones include:

* `express`
* `googleapis`
* `dotenv`
* `mysql2`

---

## 📌 Notes

* Ensure that your Google Cloud project has Calendar API enabled.
* Add your `REDIRECT_URI` in the OAuth2 credentials in Google Console.

---

## 📬 Contact

**Sagar B J**
📧 Email: [sagarbj001@gmail.com](mailto:sagarbj001@gmail.com)

---

## 📄 License

This project is licensed under the MIT License.

```

✅ This version is ready for GitHub, fully markdown-compliant, and cleanly formatted. Let me know if you'd like badges for stars, forks, or tech used.
```
