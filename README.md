# Help Center API Assignment

## Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ShubhamJoshii/Abstract-Help-Center.git
   cd abstract-help-center
   ```
2. **Open two diffrent terminals**

3. **Frontend:** In one terminal, Follow this instructions for running frontend locally on PORT 3000.

```bash
   cd frontend
   npm install
   npm run dev
```

4. **Backend:** In second terminal, Follow this instructions for running backend locally on PORT 5000.
   ```bash
   cd backend
   npm install
   npm start
   ```



https://github.com/user-attachments/assets/a6cd3a2a-d90f-4f21-8ae9-f4e5c661d362



## API Reference

#### Get all cards 
```http
  GET /cards
```

#### Get specific cards based on it title
```http
  GET /cards/${title}
```

#### Add cards to Mongo DataBase
```http
  POST /cards

```
| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `id`      | `string` | Unique|
| `title`      | `string` | 
| `description`      | `string` | 





---

