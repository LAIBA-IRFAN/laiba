//chapter1

//1. Write a script to greet your website visitor using JS alert box.
//2. Write a script to display following message on your web page:

//alert("Error! Please enter a valid password!")

//3. Write a script to display following message on your web page: (Hint : Use line break)

//alert("Welcome to JS Land...  \n Happy coding!")

//4. Write a script to display following messages in sequence:

//alert("Welcome to JS Land....")
//alert("Happy coding!")

//alert("Happy coding!")

//5. Generate the following message through browser’s developer console:
//alert("Hello.. I can run JS through my web browser's console")


//6. Make use of alerts in your new/existing HTML & CSS project.




//7. Practice placement of <script></script> element in following sections of your project in exercise 6:

//a. Head
//b. Body (before your page’s HTML)ALERTS | JAVASCRIPT Page 3 of 3
//c. Body (inside your page’s HTML)
//d. Body (after your page’s HTML)

//In html


//chapter2

//1. Declare a variable called username.

//var username;

//2. Declare a variable called myName & assign to it a string that represents your Full Name.

//var myName;
//myName = "Laiba Irfan";

//3. Write script to
//a) Declare a JS variable, titled message.
//b) Assign “Hello World” to variable message
//c) Display the message in alert box.

//var message;
//message = "Hello World";
//alert(message)

//4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

//var n = "Jhone Doe"
//var age = 15
//var course = "Certified Mobile Application Development"
//alert(n)
//alert( "I am " + age +" years old")
//alert(course)


//5. Write a script to display the following alert using one JS variable:
//var a;
//a = "PIZZA \n PIZZ \n PIZ \n PI \n P";
//alert(a)

//6. Declare a variable called email and assign to it a string  that represents your  Email Address(e.g. example@example.com). 
//Show the blow mentioned message in an alert box.(Hint: use string concatenation)

//var a;
//var email;
//var b;
//a="My email address is "
//email = "laiba20@gmail.com";
//b = a + email;
//alert(b)

//7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following
//message in an alert box:

//var book;
//book = "A smarter way to learn JavaScript";
//alert("I am trying to learn from the book " +book)

//8. Write a script to display this in browser through JS.

//var a;
//a= "Yah! I can write HTML content through Javascript"
//document.getElementById("heading").innerHTML = a;




//9. Store following string in a variable and show in alert and browser through JS
//var a;
//a ="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
//alert(a)



   

//chap3

//1. Declare a variable called age & assign to it your age. Show your age in an alert box.

//var age;
//age =  19;
//alert("I am" + age +  " years old")

//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her
//number of visits on your web page. For example: “You have visited this site N times”.

//var visits;
//visits = 14;
//alert("I am visited this site"  + visits + " times")

//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

//var birthYear;
//birthYear = 1990;
//document.getElementById("birth").innerHTML = "My birth Year is " + birthYear + "Datatype of my declared variable is Number";

//4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables
//the following information:
//a. Visitor’s name
//b. Product title
//c. Quantity i.e. how many products a visitor wants to order
//Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”

//var n = "John Doe"
//var product =  "T-shirt(s)"
//var quantity = 5
//document.write(n + " ordered " + quantity + "\n" + product + " on XYZ Clothing store")

//chap4

//1. Declare 3 variables in one statement.

//var first, second , third;

//2. Declare 5 legal & 5 illegal variable names.

//legal
//var $first , _second , third , myVar , userAlert;

//Illegal
//var first name , 34 , "tire" , var , alert;


//3. Display this in your browser
//a) A heading stating “Rules for naming JS variables”
//b) Variable names can only contain ______, ______, ______ and ______. ______ and ______.
//For example $my_1stVariable
//c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
//d) Variable names are case _________
//e) Variable names should not be JS _________


//document.getElementById("heading").innerHTML = "Rules for naming JS variables"
//document.getElementById("variables").innerHTML = ( "Variable names can only contain numbers, $ and _. For example: my $my_1stVariable. " + "<br>" + "Variables must begin with a $ or _. For example: $name, _name , name " + "<br>" + "Variable names are case sensitive" + "<br>" + "Variable names should not be JS keywords")


//chap5

//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser

//var a , b , c;
//a = 3;
//b=5;
//c=a+b;
//document.getElementById("one").innerHTML= "sum of " + a + " and " + b + " is " + c;

//2. Repeat task1 for subtraction, multiplication, division & modulus.

//var a , b , c;
//a = 3;
//b=5;
//c= b-a;
//document.getElementById("one").innerHTML= "subtraction of " + a + " from " + b + " is " + c;


//var a , b , c;
//a = 3;
//b=5;
//c=a*b;
//document.getElementById("one").innerHTML= "multiplication of " + a + " and " + b + " is " + c;


//var a , b , c;
//a = 3;
//b=5;
//c=b/a;
//document.getElementById("one").innerHTML= "division of " + a + " and " + b + " is " + c;


//var a , b , c;
//a = 3;
//b=5;
//c= b%a;
//document.getElementById("one").innerHTML= "modulus of " + a + " and " + b + " is " + c;

//3. Do the following using JS Mathematic Expressions
//a. Declare a variable.
//b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
//c. Initialize the variable with some number.
//d. Show the value of variable in your browser like “Initial value: 5”.
//e. Increment the variable.
//f. Show the value of variable in your browser like “Value after variable declaration is 6”.
//g. Add 7 to the variable.
//h. Show the value of variable in your browser like “Value after addition is: 13”.
//i. Decrement the variable.
//j. Show the value of variable in your browser like “Value after decrement is: 12”.
//k. Show the remainder after dividing the variable’s value by 3. 
//l. Output : “The remainder is : 0”.

//var a;
//document.getElementById("3b").innerHTML= "Value after variable declaration is " + a;

//a= 5;
//document.getElementById("3d").innerHTML= "Initial Value:" + a;

//++a;
//document.getElementById("3f").innerHTML="Value after variable declaration is " + a;

//a+=7;
//document.getElementById("3h").innerHTML= "Value after addition is " + a;

//--a;
//document.getElementById("3j").innerHTML= "Value after decrement is:" + a;

//var b=a%3
//document.getElementById("3l").innerHTML="The remainder is :" + b;

//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 
//tickets to a movie.

//var cost = 600;
//document.getElementById("4").innerHTML = "Totol cost to buy 5 tickets to a movie is " + cost*5 + "PKR";

//5. Write a script to display multiplication table of any number in your browser.

//document.write("4 × 1 = " + 4*1 + "<br>" + "4 × 2 = " + 4*2 + "<br>" + "4 × 3 = " + 4*3 + "<br>" + "4 × 4 = " + 4*4 + "<br>" + "4 × 5 = " + 4*5 + "<br>" + "4 × 6 = " + 4*6 + "<br>" + "4 × 7 = " + 4*7 + "<br>" + "4 × 8 = " + 4*8 + "<br>" + "4 × 9 = " + 4*9 + "<br>" + "4 × 10 = " + 4*10 + "<br>")

//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.

//var C , F;
//C = 25;
//document.getElementById("6b").innerHTML= C + "°" + "C " + "is " + ((C*9/5)+32) + "°" +"F";

//F = 70;
//document.getElementById("6d").innerHTML= F + "°" + "F " + "is " + ((F-32)*5/9) + "°" +"C";

//7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store 
//the following in variables
//a. Price of item 1
//b. Price of item 2
//c. Ordered quantity of item 1
//d. Ordered Quantity of item 2
//e. Shipping charges
//Compute the total cost & show the receipt in your browser.

//var priceitem1 = 650;
//var priceitem2 = 100;
//var quantityitem1 = 3;
//var quantityitem2 = 7;
//var shippingcharges = 100;

//document.getElementById("7a").innerHTML= "Price of Item 1 is " + priceitem1;
//document.getElementById("7b").innerHTML= "Quantity of Item 1 is " + quantityitem1; 
//document.getElementById("7c").innerHTML= "Price of Item 2 is " + priceitem2; 
//document.getElementById("7d").innerHTML= "Quantity of Item 2 is " + quantityitem2; 
//document.getElementById("7e").innerHTML= "Shipping Charges is " + shippingcharges;
//document.getElementById("7f").innerHTML= "Total cost of your order is " + ((priceitem1*quantityitem1)+(priceitem2*quantityitem2)+100);   

//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in 
//your browser

//var totalmarks = 980 , marksobtained = 804;
//document.getElementById("8a").innerHTML = "Total marks: " + totalmarks;
//document.getElementById("8b").innerHTML = "Marks obtained: " + marksobtained;
//document.getElementById("8c").innerHTML = "Percentage: " + ((marksobtained/totalmarks)*100) + "%";

//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. 
//Perform all calculations in a single expression.

//var usdollars = 10 , saudiriyals = 25;
//document.getElementById("heading").innerHTML = "Currency in PKR";
//document.getElementById("9").innerHTML= "Total Currency in PKR: " + ((usdollars*104.80)+(saudiriyals*28));

//10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
//Perform all calculations in a single expression

//var number = 0;
//document.getElementById("10").innerHTML =  "Our expression is " + ((number + 5)*10)/2;

//11. The Age Calculator: Forgot how old someone is? Calculate it!
//a. Store the current year in a variable.
//b. Store their birth year in a variable.
//c. Calculate their 2 possible ages based on the stored values.
//Output them to the screen like so: “They are either NN or NN values.

//var birthyear = 1992 , currentyear = 2016;
//document.getElementById("heading").innerHTML= "Age Calculator" ;
//document.getElementById("11a").innerHTML= "Current Year: " + currentyear;
//document.getElementById("11b").innerHTML= "Birth Year: " + birthyear;
//document.getElementById("11c").innerHTML= "Your age: " + (currentyear-birthyear);

//12. The Geometrizer: Calculate properties of a circle.
//a. Store a radius into a variable.
//b. Calculate the circumference based on the radius, and output “The circumference is NN”.
//Calculate the area based on the radius, and output “The area is NN”. 

//var radius = 20;
//document.getElementById("heading12").innerHTML= "The Geometrizer"
//document.getElementById("12a").innerHTML = "Radius of a circle: " + radius;
//document.getElementById("12b").innerHTML = "The circumference is: " + (2*3.142*radius);
//document.getElementById("12c").innerHTML = "The area is: " + (3.142*(radius**2));

//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? 
//Wonder no more.
//a. Store your favorite snack into a variable
//b. Store your current age into a variable.
//c. Store a maximum age into a variable.
//d. Store an estimated amount per day (as a number).
//e. Calculate how many would you eat total for the rest of your life.
//Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

//var favsnack = "chocolate chip" , currentage = 15 , maxage = 65 , amountofsnacks = 3,totalneeded = (365*amountofsnacks)*(maxage-currentage);
//document.getElementById("13a").innerHTML = "Favourite snack: " + favsnack;
//document.getElementById("13b").innerHTML = "Current age: " + currentage;
//document.getElementById("13c").innerHTML = "Estimated maximum age: " + maxage;
//document.getElementById("13d").innerHTML = "Amount of snacks per day: " + amountofsnacks;
//document.getElementById("13e").innerHTML = "You will need " + totalneeded + favsnack  +" to last you until the ripe old age of " + maxage;

//chap6-9

//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your
//browser:
//var a = 10 ;
//document.getElementById("arithq1").innerHTML= "Result " + "<br>" + "The value of a is: " + a  + "<hr>" 
//document.getElementById("arithq1p1").innerHTML =  "<br>" + "The value of ++a is: " + ++(a) + "<br>" + "Now the value of a is: " + a
//document.getElementById("arithq1p2").innerHTML =  "<br>" + "The value of a++ is: " + (a)++ + "<br>" + "Now the value of a is: " + (a) 
//document.getElementById("arithq1p3").innerHTML =  "<br>" + "The value of --a is: " + --(a) + "<br>" + "Now the value of a is: " + (a)  
//document.getElementById("arithq1p4").innerHTML =  "<br>" + "The value of a-- is: " + (a)--  + "<br>" + "Now the value of a is: " + (a) 

//2. What will be the output in variables a, b & result after execution of the following script:
//var a = 2, b = 1;
//var result = --a - --b + ++b + b--;
//Explain the output at each stage:
//--a;
//--a - --b;
//--a - --b + ++b;
//--a - --b + ++b + b--;

//var a =2 , b =1;
//document.getElementById("arithq2").innerHTML = "--a" + "=" + --(a) + "<br>" + "--a - --b"  + "=" + (a-(--b)) + "<br>" + "--a - --b + ++b" + "=" + ((a-b)+(++b)) + "<br>" + "--a - --b + ++b + b--" + "="  + (((a-b)+b)+b--) ;
//document.getElementById("arithq2p1").innerHTML = "a is " + a + "<br>" + "b is " + b + "<br>" +   "Result is " + (((a-b)+b)+b) ;

//3. Write a program that takes input a name from user & greet the user.

//var a = prompt("Enter your name")
//alert( "Assalam o Alikum " + a)

//5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user 
//does not enter a new number, multiplication table of 5 should be displayed by default.

//var num = Number(prompt("Enter a number"))
//if(num)
//{
//    document.getElementById("arithq5").innerHTML =(num + "× 1 = " + num*1 + "<br>" + num + "× 2 = " + num*2 + "<br>" + num + "× 3 = " + num*3 + "<br>"+ num + "× 4 = " + num*4 + "<br>" + num + "× 5 = " + num*5 + "<br>" + num + "× 6 = " + num*6 + "<br>" + num + "× 7 = " + num*7 + "<br>"+ num + "× 8 = " + num*8 + "<br>" + num + "× 9 = " + num*9 + "<br>" + num + "× 10 = " + num*10 + "<br>")
//}
//else
//{
//    document.getElementById("arithq5").innerHTML = ("5 × 1 =" + 5*1 + "<br>" + "5 × 2 =" + 5*2 + "<br>" + "5 × 3 =" + 5*3 + "<br>" + "5 × 4 =" + 5*4 + "<br>" + "5 × 5 =" + 5*5 + "<br>" + "5 × 6 =" + 5*6 + "<br>" + "5 × 7 =" + 5*7 + "<br>" + "5 × 8 =" + 5*8 + "<br>" + "5 × 9 =" + 5*9 + "<br>" + "5 × 10 =" + 5*10  )
//}

//6. Take  
//a) Take three subjects name from user and store them in 3 different variables.
//b) Total marks for each subject is 100, store it in another variable.
//c) Take obtained marks for first subject from user and stored it in different variable.
//d) Take obtained marks for remaining 2 subjects from user and store them in variables.
//e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

//var s1 = prompt("Enter first subject name")
//var s2 = prompt("Enter second subject name")
//var s3 = prompt("Enter third subject name")
//var totalmarks =100
//var m1 = Number(prompt("Enter marks of 1st subject"))
//var m2 = Number(prompt("Enter marks of 2nd subject"))
//var m3 = Number(prompt("Enter marks of 3rd subject"))
//document.getElementById("head").innerHTML= " Subject " + " Total Marks " + " Marks obtained " + "Percentage"
//document.getElementById("6a").innerHTML= s1 + "\n" + totalmarks + "\n" + m1 + "\n" + ((m1/totalmarks)*100) + "%"
//document.getElementById("6b").innerHTML= s2 + "\n" + totalmarks + "\n" + m2 + "\n" + ((m2/totalmarks)*100) + "%"
//document.getElementById("6c").innerHTML= s3 + "\n" + totalmarks + "\n" + m3 + "\n" + ((m3/totalmarks)*100) + "%"
//document.getElementById("6d").innerHTML =   (totalmarks*3) + "\n" + (m1+m2+m3) + "\n" + ((m1+m2+m3)/300)*100 + "%"

//chapter9-11

//1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: 
//“Welcome to city of lights”

//var city = prompt("Enter your city name")
//if(city=="Karachi"){
 //   alert("Welcome to city of lights")
//}

//2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the 
//user is female, give the message: Good Morning Ma’am.

//var gender = prompt("Enter your gender")
//if(gender=="male"){
 //   alert("Good Morning Sir")
//}
//else{
//    alert("Good Morning Ma'am")
//}

//3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

//var color = prompt("Enter your color")
//if(color=="Red")
//{
//    alert("Must Stop")
//}
//if(color=="Yellow")
//{
//    alert("Ready to move")
//}
//if(color == "Green")
//{
//    alert("Move now")
//}

//4. Write a program to take input remaining fuel in car (in     litres) from user. If the current fuel is less than 0.25litres, 
//show the message “Please refill the fuel in your car”

//var fuel = Number (prompt("Enter remaining fuel in car"))
//if(fuel<0.25){
//    alert("Please refill the car")
//}

//5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

//var a = 4;
//if (++a === 5){
//alert("given condition for variable a is true");
//}

 //var b = 82;
//if (b++ === 83){
//alert("given condition for variable b is true");
//}
//output: given condition for variable b is true

 //var c = 12;
//if (c++ === 13){
//alert("condition 1 is true");
//}
//if (c === 13){
//alert("condition 2 is true");
//}
//if (++c < 14){
//alert("condition 3 is true");
//}
//if(c === 14){
//alert("condition 4 is true");
//}
//output: condition 2 is true

//var materialCost = 20000;
//var laborCost = 2000;
//var totalCost = materialCost + laborCost;
//if (totalCost === laborCost + materialCost){
//alert("The cost equals");
//}
//output: The cost equals

// if (true){
//alert("True");
//}
//if (false){
//alert("False");
//}
//output: true

 //if("car" < "cat"){
//alert("car is smaller than cat");
//}
//output: car is smaller than cat 

//6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting
//percentage on your page. Take percentage & compute grade as per following table:

//var marks1 =Number(prompt("Enter marks of english")) 
//var marks2=Number(prompt("Enter marks of maths")) 
//var marks3=Number(prompt("Enter marks of science"))
//var marksobtained= marks1+marks2+marks3
//var totalmarks = 300
//percentage = ((marksobtained/totalmarks)*100)
//if(percentage>=80)
//{
//    document.getElementById("arithq6p1").innerHTML=("Total marks: " + totalmarks + "<br>" + "Marks obtained: " + marksobtained + "<br>" +"Percentage: " + percentage + "<br>" + "Grade: A-one" + "<br>" + "Remarks: Excellent")
//}
//if(percentage>=70)
//{
//    document.getElementById("arithq6p2").innerHTML =("Total marks: " + totalmarks + "<br>" + "Marks obtained: " + marksobtained + "<br>" +"Percentage: " + percentage + "<br>" + "Grade: A" + "<br>" + "Remarks: Good")
//}
//if(percentage>=60)
//{
//    document.getElementById("arithq6p3").innerHTML=("Total marks: " + totalmarks + "<br>" + "Marks obtained: " + marksobtained + "<br>" +"Percentage: " + percentage + "<br>" + "Grade: B" + "<br>" + "Remarks: You need to improve")
//}
//if(percentage<60)
//{
//    document.getElementById("arithq6p4").innerHTML=("Total marks: " + totalmarks + "<br>" + "Marks obtained: " + marksobtained + "<br>" +"Percentage: " + percentage + "<br>" + "Grade: Fail" + "<br>" + "Remarks: Sorry")
//}

//7. Guess game:
//Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
//a. If user guesses the same number, show “Bingo! Correct answer”.
//b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

//var secretnumber = 6;
//var b = Number(prompt("Guess a number ranging from 1 to 10")) 
//if(b == secretnumber)
//{
//    alert("Bingo! Correct answer") 
//}
//if((b+1) == secretnumber)
//{
//    alert("Close enough to the correct answer") 
//}

//8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number 
//is divisible by 3.


//var n = Number(prompt("Enter a number"))
//if(((n % 3)==0))
//{
//    alert(n + "/ 3 = " + n/3 )
//}
//else
//{
 //   alert("It is not divisible by 3")
//}


//9. Write a program that checks whether the given input is an even number or an odd number.

//var num = Number(prompt("Enter your number"))
//if(((num%2)==0))
//{
 //   alert("This number is even")
//}
//else
//{
//    alert("This number is odd")
//}


//10. Write a program that takes temperature as input and shows a message based on following criteria
//a. T > 40 then “It is too hot outside.”
//b. T > 30 then “The Weather today is Normal.”
//c. T > 20 then “Today’s Weather is cool.”
//d. T > 10 then “OMG! Today’s weather is so Cool.”

//var T = Number(prompt("Enter your temperature")) 
//if(T>40)
//{
//    alert("It is too hot outside.")
//}
//if(T >30)
//{
//    alert("The Weather today is Normal.")
//}
//if(T>20)
//{
//    alert("Today’s Weather is cool.")
//}
//if(T>10)
//{
//    alert("OMG! Today’s weather is so Cool.")
//}
//11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
//a. First number
//b. Second number
//c. Operation (+, -, *, /, %)
//Compute & show the calculated result to user.


//var firstnumber = Number(prompt("Enter first number "))
//var secondnumber = Number(prompt("Enter second number "))
//var operation =prompt("Enter the operation")
//if(operation=="+")
//{
//    alert(firstnumber + " + " +  secondnumber + " = " + firstnumber+secondnumber )
//}
//if(operation=="-")
//{
//    alert(firstnumber + " - " +  secondnumber + " = " + firstnumber-secondnumber )
//}
//if(operation=="*")
//{
//    alert(firstnumber + " * " +  secondnumber + " = " + firstnumber*secondnumber )
//}
//if(operation=="/")
//{
//    alert(firstnumber + " / " +  secondnumber + " = " + firstnumber/secondnumber )
//}

//chap12-13

//1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a 
//number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

//var string = prompt("Enter a string")
//var l = string.charCodeAt()
//if(l>=65 && l<=90)
//{
//    alert(l  +" is a uppercase")
//}
//else if(l>=97 && l<=122)
//{
//    alert(l  +" is a lowercase")
//}
//else if(l>=48 && l<=57)
//{
//    alert(l  +" is a number ")
//}
//else
//{
//    alert("Invalid Input")
//}


//2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
//var int1 = Number(prompt("Enter first integer"))
//var int2 = Number(prompt("Enter second integer"))
//if(int1>int2)
//{
//    alert("Integer 1 is larger than integer 2")
//}
//if(int2>int1)
//{
//    alert("Integer 2 is larger than integer 1")
//}
//if(int1==int2)
//{
//    alert("Integer 1 is equal to integer 2")
//}


//3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

//var numb = Number(prompt("Enter the number"))
//if(numb>0)
//{
//    alert("This number is positive")
//}
//if(numb<0)
//{
//    alert("This number is negative")
//}
//if(numb==0)
//{
//    alert("This number is zero")
//}
//4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
//var ch = prompt("Enter a character")
//if(ch =="a" || ch =="e" || ch == "i" || ch == "o" || ch =="u")
//{
//    alert("True")
//}
//else{
//    alert("False")
//}
//5. Write a program that
//a. Store correct password in a JS variable.
//b. Asks user to enter his/her password
//c. Validate the two passwords:
//i. Check if user has entered password. If not, then give message “ Please enter your password”
//ii. Check if both passwords are same. If they are same, show message “Correct! The password you 
//entered matches the original password”. Show “Incorrect password” otherwise.

//var password = "Laiba Irfan"
//var k = prompt("Enter your password")
//if (k == " ")
//{
//    alert("Please enter your password")
//}
//if(k == password)
//{
//    alert("Correct! The password you entered matches the original password")
//}
//if(k != password)
//{
//    alert("Incorrect password")
//}

//6. This if/else statement does not work. Try to fix it:
//var greeting1 = "Good day";
//var greeting2 = "Good evening"
//var hour = 13;
//if (hour < 18) {
//    alert(greeting1)
//}
//else{
//    alert(greeting2)
//}


//7. Write a program that takes time as input from user in 24 
//hours clock format like: 1900 = 7pm. Implement the 
//following case using if, else & else if statements


//var time = Number(prompt("Enter the time"))
//if(time>=0000 && time<1200)
//{
//    alert("Good Morning!")
//}
//else if(time>=1200 && time<1700)
//{
//    alert("Good afternoon!")
//}

//else if(time>= 1700 && time<2100)
//{
//    alert("Good evening!")
//}
//else
//{
//    alert("Good night!")

//}
































