# Patient Profile Management
Patient Profile Managment
Patient Profile Management is a system where patients information are recorded by the registered user with their specific allergies from which they are suffering from. In this management system, there are two three module and they are Dashboard, Patient Profile, and Allergy. In dashboard, total count of Patient Profile, Allergy and Special Attention are displayed. In Patient Profile, list of patient information are displayed accordingly. Also in Patient Profile, there are patient who requires an special attention which are listed on top of the table. Specific Logged in user can edit, delete and create the patient profile from it. And In allergy, list of allergies are listed on the table. Logged In user can add, edit and modify the data.

**Frontend Application Screenshot**
_**Login Page**_

![Login Page](https://github.com/ajaydangol014/patient-profile-management/assets/26766776/6922b9eb-f3d3-4d08-96a6-11a46e098089)

_**Sign Up Page**_

![Signup Page](https://github.com/ajaydangol014/patient-profile-management/assets/26766776/b0a9115e-949e-41b7-b29f-d9403d7bbf3d)

_**Dashboard Page**_

![Dashboard Page](https://github.com/ajaydangol014/patient-profile-management/assets/26766776/d86165bb-762b-47b7-92f7-4b5ce45dc5f4)

_**Patient Profile Page**_

![Patient Profile](https://github.com/ajaydangol014/patient-profile-management/assets/26766776/1038d4bf-21a7-41e7-80b3-b2f0ac4b214f)


_**Patient Profile - Add New Patient Page**_

![Patient Profile Create page](https://github.com/ajaydangol014/patient-profile-management/assets/26766776/cd8a18bd-883a-4bc8-b217-6c290cd77a90)

_**Allergy Page**_

![Allergy Page](https://github.com/ajaydangol014/patient-profile-management/assets/26766776/612d5b3d-5ede-4389-ab3b-65ce8784e3ab)

_**Allergy Page - Add New Patient Page**_

![Allergy Add](https://github.com/ajaydangol014/patient-profile-management/assets/26766776/47254d51-cdb7-42a1-bcfe-1d0c0a02869a)

**Techstack used in this application**
--------
1. ReactJs
2. Node Js 
      - Express Js (Framework)
      - Prisma (Used for ORM feature such as **Prisma Client** for auto-generated and type-safe query builder for Node.js, **Prisma Migrate** for migration tool, and **Prisma Studio** which provides GUI to view and edit data in database.)
 3. Postgres
 4. RestApi

**Setup Process**
----
1. Clone this project
2. Run this command ```npm install``` to install related package mentiond in package.json file
3. After installing the package, also install package in backend folder as well. Run this command ```cd backend``` to go inside the folder and install package there.
4. In backend folder, rename .env-example with .env and add the database credential there.
5. Run all query from migration file in your created database.
6. If you want to view the GUI of prisma then run command in backend folder ```npx prisma studio```
7. After installing the package and migrating all the table and data, run this command ```npm run dev``` to start the backend.
