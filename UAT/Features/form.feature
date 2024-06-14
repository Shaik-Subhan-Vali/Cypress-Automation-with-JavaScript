Feature: : "simple form" web page
Scenario: Validating "Simple form"
Given User on simple form web page
When User enetered First Name , Last Name ,Email, contact number and message
And Clicked on Submit button
Then Thank you pop-up should be displayed