# [Algorithms and Data Structures Tutorial - Full Course for Beginners](https://youtu.be/8hly31xKli0)

### What is an algorithm

- A set of steps a program takes to complete a task.

### Understanding Algorithms

- Basically setting steps to solve a particular problem in the fastest and most _efficient_ way.

### Algorithmic Thinking

- Is breaking down a problem into steps and identifying the type of algorithm or data structures to use to solve the problem at hand. This is why they are included in coding interviews.

## Lets Play a guessing game 😂.

- I will play this with my friends Jack and Britney . So i ask Janice "I am thinking of a number (_answer is 3_) , can you guess it". she then asks if the number is between 1 and 10 (_He has now established the bounds of the problemset_) .
  When solving algorithms clearly define the problem set and the input values of the algorithm.
  Back to the game, she then asks is it one (_i say too low_) ,is it 2 (_to low_) ,is it 3 (_yes_) .
  I ask Britney the same question including the bounds of the number i am thinking of. She goes "Is it 2" (_too low_) is it 3 (_yes_) .

- So right now they both have the same number of iterations / turns. but if i make the number to be guessed slightly higher (_like 10_).He says is it 1 (_i say too low_) ,is it 2 (_to low_) ,is it 3 (_too low_) this goes on till he reaches 10.
  When i ask britney she goes is it 5 (_i say too low_), is it 8 (_i say too low_), is it 9 (_i say too low_), its 10 (_Correct_).

- So now we see Britneys strategy is way better because she took less turns.In the worst case senario(_10_) we notice that John is slower and takes 10 turns.if we play the same game with a range of 1 to 100 with 5 as the number.We notice that John takes 5 tries and Britney takes 7.Now if the number is 100 john takes 100 turns and britney takes 7 tries.
