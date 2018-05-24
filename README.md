#### MakersBNB



#### Installation

To run this application you will need Node.js installed on your machine. Now you can clone and install the relevant dependencies.

```
git clone https://github.com/ellie-keen/makersBnb.git
npm install
npm install nightwatch --save-dev
npm install selenium-server chromedriver --save-dev
```

To run the application locally run the following script

```
npm start
```

And visit: [http://localhost:3000/](http://localhost:3000/)

To run the Nightwatch feature tests, you will first need to install [JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html). This is because Nightwatch uses Selenium, which is a Java application.

To run feature tests use:

```
npm run feature-tests
```

#### Installation of database

We are using postgres and sequelize as our ORM. Run the following in your terminal to get started

```
npm install -g sequelize-cli
```

You will need to also create the database yourself in psql by running the following commands in your terminal

```
psql
CREATE DATABASE makersbnb;
\q
```

You will then need to migrate to create the tables,
```
cd server
sequelize db:migrate
```


#### User Stories

```
As a user so I can list a space
I want to be able to sign up

So users can book my space
I want to be able to list my space

As a user so I can hire out more than one space
I would like list more than one space

As a user so I can differentiate my spaces
I would like to be able to name my spaces

As a user so I can describe my spaces
i would like to be able to write a description

As a user so I can give my spaces a price
i would like to be able to add a price per night

As a user so I can review my spaces
I would like to be able to see my listings

So I can let other users know when my spaces are available
I would like to be able to input the dates

As a user so I can browse another users space
I would like to be able to view all listings

As a user so I can hire another users space
I want to be able to make a booking request

As a user so that I can approve a request
I want to be able to review the requests made by other users

As a user so that the availability of listings are accurate I would like the availability to be updated when a request has been accepted

As a user when i approve a request
The space should become unavailable at those dates for other users

As a user until I approve a request
I want to be able to receive more requests for the same dates

As a user so that my space cannot be double booked
other users should not be able to submit booking requests for unavailable dates

As a user when I reject a booking request I want my listing to continue to be available

```
