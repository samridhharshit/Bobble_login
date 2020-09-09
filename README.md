# Introduction

A login/Signup system with facebook web client SDK and manual signup with `https://reqres.in`


# Steps for Execution
   1. run `git clone git@github.com:samridhharshit/Bobble_login.git`
   2. cd `Bobble_login`
   3. run `npm install`
   4. run `npm start`
   
   - Now you are good to go!
   
   
# Program Usage 
 
- For login using facebook account click on *""* button, then in the popup window provide following credentials:
    - Email: learnauthfb@gmail.com Password: learningauth (Due to developer account limitation only provided email ids can be used)
- For manual signup (not using FB login), you can use one of the following email ids as reqres.in only support limited user registeration
    - george.bluth@reqres.in
    - janet.weaver@reqres.in
    - emma.wong@reqres.in
    - eve.holt@reqres.in
    - charles.morris@reqres.in
    - tracey.ramos@reqres.in
    
# Architecture

It a login/Signup System that would enable the user to signup or login either with facebook or manually by providing the user data as required. 

In case of Facebook signup/login, when the user clicks on the **continue with facebook icon**, the user gets redirected to the facebook login page where they are provided to login with facebook. facebook logs in the user and creates a token and sends it back as a response which is used to determine wheather the user has logged in or not.
If the user successfully logs in, the app receives the user data along with the status. This disables the `submit` button at the bottom notifying that the user has logged in.

In case of manual signup, the user data is used to signup with `https://reqres.in` by calling the `/api/register` route .
it returns the user data consisting of id and token. Similarly, if the user has registered then, the submit button gets disabled and a **Logged in...** status starts showing instead. 
