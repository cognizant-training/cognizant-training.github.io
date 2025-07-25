mongodb+srv://gaurabcap:ysKeILEvLAiUJwR0@cluster0.jkr1md3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

mongodb ?? db ---> install local in your system ----> host yourself into cloud
              ---> also hosted and managed on cloud by mongodb team ---> atlas (and you can connect this with connection string)
atlas ??

Steps:

1. Install MongoDB Librery [ mongodb or else mongoose nodejs lib] - 
2. Connect to MongoDB Atlas using your connection string - 
3. Replace file-based login (readData and writeData) with MongoDB operation



http://localhost:3000 - front end url - 

http://localhost:5000 - backend api url - ALLOW cross-origin-access


### Top Security Features for Express APIs
- **CORS Configration** : limit orogins to only your frontend app
- **Helmet** : Secure HTTP Headers and it will protect your app from common web vulnerability by adding hTTP headers
- **Rate Limiting** - Prevent force attacks
- **Input Validation & Sanitization**
- **MongoDB Injection Protection**
- **Environment Variables for Secrets**
- **Disable x-powered-by header**
- **HTTPS in production**
- **Authentication & Authorization**
- **Logging & Monitoring**