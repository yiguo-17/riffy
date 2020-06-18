# Riffy

### Introduction

Today you're going to make a little node app OF YOUR OWN DESIGN that can take in user input and spit out appropriate output. Because we're all node ninjas now!


### Objectives

After completing this assignment, you will be able to:

* Parse command line text to find the arguments you want.
* Format those arguments if need be.
* Use `if` statements to branch your code.
* Output text back to the user.
* Keep it all BEAUTIFULLY organized in back and front end files.


### The Basics

You'll be making a node app that uses `getInput` to take in input and `console.log` to provide output. You should have already proposed an app in [the Riffy Proposal stage](https://github.com/ci-wdi-900/riffy-proposal), so... do that one!

We'll be presenting these apps, so put your best foot forward!


### Guidelines

* Your content must be [SFW](https://en.wikipedia.org/wiki/Not_safe_for_work).
* You must have a separate front end and back end. That means, at a minimum a `main.js` file with no app logic, only input/output logic.
* If you're done early, come talk to us. We can always suggest ways you can extend your app!


### Tips and Tricks

* If you need a reminder how to use `getInput`, remember that we can use indices to grab different parts of it. Every _space-separated string_ the user writes after `node [filename].js` will be there, _starting at index 0_. So if you need three arguments, they'll be retrievable at `getInput(0)`, `getInput(1)`, and `getInput(2)`.
