create database auto_365;
use auto_365;

CREATE TABLE `Role` (
    role_id INT PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL
);

CREATE TABLE `Account` (
    account_id INT PRIMARY KEY,
    account_name VARCHAR(50) NOT NULL,
    account_password text NOT NULL,
    resset_password text
);

CREATE TABLE Account_Role (
    account_role_id INT PRIMARY KEY,
    account_id INT,
    role_id INT,
    FOREIGN KEY (account_id) REFERENCES Account(account_id),
    FOREIGN KEY (role_id) REFERENCES Role(role_id)
);

CREATE TABLE Position (
	position_id INT PRIMARY KEY,
    position_name varchar(50) NOT NULL
);

CREATE TABLE Employee (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(50) NOT NULL,
	number_phone varchar(50),
    address varchar(255),
    email varchar(55),
    gender bit (1),
    day_of_birth date,
    account_id INT,
    position_id INT,
    FOREIGN KEY (account_id) REFERENCES Account(account_id),
	FOREIGN KEY (position_id) REFERENCES Position (position_id) 
);

CREATE TABLE Customer (
    customer_id INT PRIMARY KEY,
    account_id INT,
    customer_name VARCHAR(50) NOT NULL,
    number_phone varchar(50),
    address varchar(255),
    email varchar(55),
    gender bit (1),
    day_of_birth date,
    FOREIGN KEY (account_id) REFERENCES Account (account_id)
);

CREATE TABLE ProductType (
	product_type_id INT PRIMARY KEY,
    product_type_name varchar(50) NOT NULL
);

CREATE TABLE Product (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    `status` VARCHAR(255),
    price DECIMAL(10, 2) NOT NULL,
    employee_id INT,
    product_type_id INT,
    FOREIGN KEY (product_type_id) REFERENCES ProductType(product_type_id),
    FOREIGN KEY (employee_id) REFERENCES Employee(employee_id)
);

CREATE TABLE `Order` (
    order_id INT PRIMARY KEY,
    customer_id INT,
    employee_id INT,
    product_id INT,
    quantity INT,
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id),
    FOREIGN KEY (employee_id) REFERENCES Employee(employee_id),
    FOREIGN KEY (product_id) REFERENCES Product(product_id)
);




