WDI
======
## Animal Shelter Lab

###Learning Objectives:

- Create custom classes in Ruby

<br>
---

###Connection to a long term learning goal 

[Explain how the objectives of this lesson connect to unit or course goal?]

<br>
---

###Before Homework

- OOP lesson

<br>
---

Animal Shelter Lab
=====

##Instructions

You have just been appointed the manager at an animal shelter. You need a command-line Ruby app to manage your clients and animals.

## Tasks

Create an **Animal** class with the following properties:

- name
- breed
- gender
- favorite toys _(Array of strings)_

Create a **Client** class with the following properties:

- first_name
- last_name
- pets _(Array of animal instances)_

Create a **Shelter** class with the following properties: 

- name
- the animals currently in the shelter _(Array of animal instances)_
- capacity _(the maximum number of animals that the shelter can hold)_

Create a menu to:

- list all the animals in the shelter
- list all the registered clients
- allow a client to give up an animal _(remove the animal from the client's pets array, and push it into the shelter's animals array, **but only if the shelter has the available space!**)_
- allow a client to adopt an animal _(remove the animal from the shelter's pets array, and push it into the client's pets array)_

## Bonus Tasks

- [Add some ascii art](http://patorjk.com/software/taag)


