# Riffy

### Introduction

Today you're going to make a little node app that can take in user input and
spit out appropriate output. All on the command line. Because we're all node
ninjas now!


### Objectives

After completing this assignment, you will be able to:

* Parse command line text to find the arguments you want.
* Format those arguments if need be.
* Use `if` statements to branch your code.
* Output text back to the user.


### The Basics

You'll be making a node app that uses `process.argv` to take in input and
`console.log` to provide output. And you get to pick what it does! There are
some suggestions below, but you can _absolutely_ do something else. We'll be
presenting these, so put your best foot forward!

If you need a reminder how to use `process.argv`, remember that we can use
indices to grab different parts of it. Every _space-separated string_ the user
writes after `node [filename].js` will be there, _starting at index 2_. (Index 0
is the string `'node'` and index 1 is the string containing your filename.)
Importantly, they'll all come in as strings, so if you want booleans or numbers,
you'll have to do conversion of one kind or another!


### Some Possible Apps To Make

Please feel free to use these ideas as jumping off points to something else, or
expand them to something more challenging. In fact, please make the best, most
feature-filled version of whatever you're doing. Now and always.

Please and thank you.

---

* Guessing Game

This app takes in two numbers, a max and a guess. It calculates a random integer
from 1 to the given max (check out `Math.random()`!) and then checks it against
the given guess, letting hte user know whether they guessed correctly!


* Converter

The easy version of this is fahrenheit and celsius. The middle option is one
that can take in as a separate argument forthe direction the conversion is
going. Are we converting to fahrenheit or celsius? The ambitious version of this
app could convert not just temperature, but weight, size, length, etc. Then you
would need a third argument--what are you converting _from_? With
celsius/fahrenheit it's always the other one, but we could even convert from or
to degrees _kelvin_. Or from inches to feet, or centimeters to meters, or meters
to yards. Let the user decide!


* Bill Split Calculator

This app takes in an overall bill, a tip percentage, and how many ways to
split it, and then calculates how much each party owes. For a really good
version of this, you'd want to make the tip and how many ways to split it
_optional_ parameters, so they could easily just figure the tip on their solo
meal, or split it some number of ways with a default tip percentage.


### Other Ideas

Run ANYTHING else you want to do by us! As long as it's not absurdly easy or
unrealistically time-consuming, we'll probably okay it. We might even okay an
unrealistic one--be ambitious!

Happy coding!
