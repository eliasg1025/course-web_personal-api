# API Rest from personal web site

End points:

Base URI: `/api/v1/`

Name | Method | URI | Protected
-------|--------|-----|----------
Refresh Access Token | POST | `/refresh-access-token` | No
Register user | POST | `/sign-up` | No
Log user | POST | `/sign-in` | No
Get users | POST | `/users` | Yes
Get active users | GET | `/users-active` | Yes
Upload avatar | PUT | `/upload-avatar/:id` | Yes
Get user's avatar | GET | `/get-avatar/:avatarName` | No
Update user | PUT | `/update-user/:id` | Yes
Activate user | PUT | `/activate-user/:id'` | Yes
Delete User | DELETE | `/delete-user/:id` | Yes
Sign up admin | POST | `/sign-up-admin` | Yes
Add course | POST | `/add-course` | Yes
Get courses | GET | `/get-courses` | No
Delete course | DELETE | `/delete-course/:id` | Yes
Update course | PUT | `/update-course/:id` | Yes
Add menu | POST | `/add-menu` | Yes
Get menus | GET | `/get-menus` | No
Activate menu | PUT | `activate-menu/:id` | Yes
Delete menu | DELETE | `/delete-menu/:id` | Yes
Update menu | PUT | `/update-menu/:id` | Yes
Suscribe newsletter | POST | `suscribe-newsletter/:email` | No
