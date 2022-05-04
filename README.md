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
- Can **browse** the products and see **details** about each product.
 
### Implementation Details

The app is based on [REACT](https://reactjs.org/), and [Back4App](https://www.back4app.com/) for back-end.

I also used [React-Bootstrap](https://react-bootstrap.github.io/) for **Modal** and **Toast**.

"Music Trade" is SPA Web Application, bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The application dynamically displays content, based on user interaction, and supports user-profiles and **CRUD** operations, using **REST service**.

### Navigation

You can use the navigation to change the current page(view).

**Guest** navigation example:

![guestNavbar](https://user-images.githubusercontent.com/103751145/166735892-301ef003-53bc-4ebb-a2ac-80cf7664b6ce.jpg)

**User** navigation example:

![loggedNavbar](https://user-images.githubusercontent.com/103751145/166737409-2033e2bc-4672-4227-80dc-686389f01c80.jpg)

### Login

The **Login** page contains a form for user authentication. By providing **username** and **password** you can login a user into the system if there are no empty fields and the user already exist.

You can use the following premade account:
```sh
username: Niki
password: 123456
```

**Login** page example:

![login](https://user-images.githubusercontent.com/103751145/166738619-5a59a223-1d6b-4537-b1c9-6afd7351f2e0.jpg)

### Register

The **Register** page contains a form for user registration. You can create account by entering **username** and **password**.
But only if there are no empty fields and the username don't exist already.

**Register** page example:

![register](https://user-images.githubusercontent.com/103751145/166739555-87412f06-c9eb-48cc-ac62-1880888765f6.jpg)

If the **login** or **registration** was successful, the user will be redirect to the **Catalog** page where he can browse all the listings.

### Logout

The **Logout** action is available to logged-in users and upon success they will be redirected to the **Home** page.

### Home

All users will be greeted from the static **Home** page.

![home](https://user-images.githubusercontent.com/103751145/166740210-0b17522b-3b41-4a29-8a69-f785ddcdd8e8.jpg)

### Catalog

The **Catalog page** displays a list of all instruments in the selected category. 
You can use the secondary navbar to navigate through the different categories:

**Guitar/Bass** example:

![catalogGuitar](https://user-images.githubusercontent.com/103751145/166201611-ea1eba48-06f9-4c66-a5ef-b9611f01420c.jpg)

All users can see the listings, and have access to the **Details** page.

### Details

The **Details** page displays information about a particular instrument.

![details](https://user-images.githubusercontent.com/103751145/166740430-568596ba-d4b2-44e8-954f-273fd9673d23.jpg)


The **creator** of the listing will see **`edit`** and **`delete`** buttons

![ownerDetails](https://user-images.githubusercontent.com/103751145/166740840-dde1c49f-f9da-47c4-8976-cfcd99707cf5.jpg)

### Create

The **Sell** page is available only for logged-in users. It contains a form for creating a new listing.

![create](https://user-images.githubusercontent.com/103751145/166203643-0550791f-dacf-4056-8766-6cc2c7806cb9.jpg)

Every listing should contain:

```sh
 title,
 price,
 category,
 description
```
The other fields are optional.

### Edit

The **Edit** page allows the owner of the listing to **edit** and **update** the info about the musical instrument.

### Delete

The **Delete** action is available to logged-in users, for listing they have created.

When author clicks on **`delete`** modal will show up asking him to confirm his action.

**Modal** example:

![modal](https://user-images.githubusercontent.com/103751145/166741070-34f862db-efce-4273-82c7-c48d4b36f065.jpg)

After confirmation from the user his listing will be deleted from the system.

### Toast

After a certain action from the user the app will "toast" him a message, wheter a **success**, **warning** or **error**.

Example for successful **login**:

![successToast](https://user-images.githubusercontent.com/103751145/166741701-62d87348-2372-42fa-99d6-cca09a1f4432.jpg)

Example for error message:

![errorToast](https://user-images.githubusercontent.com/103751145/166741731-368c7dbf-c0a2-4d78-b6f1-f3bcf54ca591.jpg)

