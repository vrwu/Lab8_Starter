# Lab 8 - Starter
# Vivian Wu
1. I would fit my automated tests within a Github action that runs whenever code is pushed. This is to ensure that the code that is going into the repo is working and it also serves as a preventative measure so broken code does not go to main. 
2. No, I would not use an e2e test to test a function because e2e tests are designed to emulate user actions from start to finish. One function call may not suffice for a group of user actions. I would rather use unit tests to test a certain function.
3. No, I would not use a unit test to test the messaging feature as it probably will require multiple functions for it to work. I think an e2e would work better since it would be testing user actions from start to finish for messaging.
4. Yes, I would use a unit test to test the "max message length: feature since this would be testing the length of a message it is straightforward and can be implemented in a function.