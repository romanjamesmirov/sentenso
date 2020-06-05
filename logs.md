## 2020.06.03.19.35 Init

OK, before I start any work. I'm learning the SAT words on the Magoosh app. It's just an endless quiz of words and you can say "I don't know" for any one of them. Words you don't know will show up more often in the future. 

I started writing ten random words each day in a list and either putting down as many synonyms as I could think of for each word, writing an example sentence for each word, or both. 

That's what Sentenso is, this system. I need this app. You may too. Try it out. 

### Structure

Onto the structure of this app. I'm progressing in the MERN stack, but I don't want it to be too repetitive and dull. I'll be throwing some new things into the mix. Some more code validation and strictness. More use of joi, first-time usage of JEST, first-time use of jsdoc. I'm thinking to pull from a word synonyms API for the synonyms part of this app, put them into an array, and check if each synonym the user typed for a vocab word belongs to that array or not. Then score them. 

Not sure how this app will look. Or if to use Bootstrap for the first time in a while or learn Materialize. Or bring in the actual Material library. I'm seeing the minimalist form – where your inputs are either all sentences or synonyms, depending on what kind of quiz you chose for yourself today. Maybe we'll have a sidebar for previous quizzes and to add new words to practice later. Share buttons – "Look what score I got!" 

Express on Heroku again. I just don't know Nginx, how to set up multiple servers (microservices), or any of that lower-level backend jazz. Just the utmost of high level. React, maybe Materialize or Bootstrap, maybe not, and Redux and Router. Redux will store previous quiz sessions I guess, after you click on them to visit them. Mongoose for the data. 

I kind of miss Django forms, how closely they tied in with the models. But it was hard to style them, things like error messages. You have top-level error messages and error messages for each input. I need to figure out an error messaging system in addition to joi validation. Don't send the joi message, send the number or whatever. That number will translate into a top-level or input-specific message. 

Ok, onto Django learning. Good night. 

## 2020.06.04.19.09 Models and API

I wrote way too much yesterday. My last nonessential comment: this part is where Django excels at. I wish Django also had the advantage on the client side of serving a SPA like with MERN. 

You should be able to search by word (I'm learning this word) and by quiz (I took this randomized word synonyms/sentences quiz). So we'll have Word and Quiz documents. 

Fields: 

- Quiz: Word[], answers[] (example sentences or synonyms) of the same length as Word[], and "type" specifying whether the quiz is for synonyms or example sentences. 

- Word: Quiz[] and "confidence". 

I wonder if answers[] should be Answers[]. Meaning if we should have an Answer collection. And we would have two types, Synonym and Sentence. So Answers[] would actually change to {Synonym, Sentence}[]. This would also allow us to remove the Quiz "type" field in favor of mix-and-matching quiz question types – one question asks for a list of synonyms, one asks for an example sentence. The user can choose what they want to do for each question, have it randomized, or just have all question types the same for a quiz. 

Obviously, Quiz, Word, Synonym, and Sentence documents will have an automatic date field as well. And something like Quiz[] (my made-up notation) just means the field is an array of ObjectId's pointing to Quiz documents. Should they be ObjectId's or ObjectId.valueOf()'s?