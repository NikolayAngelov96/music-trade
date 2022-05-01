# Music Trade

Music Trade is an app where you can find second hand musical instruments.
Anyone can browse the **catalog** page and see the **details** about a specific instrument.

If they're interested in buying one of the listed instruments, 
they can do it just by pressing the **`buy`** button.
And leave info where they want the instrument to be delivered and their phone number for contact.

### Description and Features

**Users**
- Can **`create`** a listing.
- Can **`edit`** or **`delete`** their own listings.
- Have **My Sales Page** which keep a record of all their sales and shipping info about buyer.
 
**Guests**
- Can **`buy`** a product without registration.
 
### Implementation Details

The app is based on [REACT](https://reactjs.org/), and [Back4App](https://www.back4app.com/) for back-end.

"Music Trade" is SPA Web Application, bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The application dynamically displays content, based on user interaction, and supports user-profiles and **CRUD** operations, using **REST service**.

### Navigation

You can use the navigation to change the current page(view).

**Guest** navigation example:

![guestNavbar](https://user-images.githubusercontent.com/103751145/166165250-a5c78bc4-440a-4f0b-920f-789ec517a348.jpg)

**User** navigation example:

![loginNavbar](https://user-images.githubusercontent.com/103751145/166165367-babb462b-076d-4d34-9d6f-57c34c73e838.jpg)

### Login

The **Login** page contains a form for user authentication. By providing **username** and **password** you can login a user into the system if there are no empty fields and the user already exist.

You can use the following premade account:
```sh
username: Niki
password: 123456
```

**Login** page example:

![loginPage](https://user-images.githubusercontent.com/103751145/166165689-963335b8-a484-4e30-82c4-e24ce8ded984.jpg)

### Register

The **Register** page contains a form for user registration. You can create account by entering **username** and **password**.
But only if there are no empty fields and the username don't exist already.

**Register page example:

![registerPage](https://user-images.githubusercontent.com/103751145/166165818-e2ece545-6e92-42c3-9383-049ae393130e.jpg)

If the **login** or **registration** was successful, the user will be redirect to the **Catalog** page where he can browse all the listings.

### Logout

The **Logout** action is available to logged-in users and upon success they will be redirected to the **Home** page.

### Home

All users will be greeted from the static **Home** page.

![homePage](https://user-images.githubusercontent.com/103751145/166166127-b5fb2554-87bb-4735-a872-9aa11524cf7a.jpg)

