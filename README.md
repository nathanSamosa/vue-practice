<h1>Vue practice</h1>

<p>
After finishing an intensive 6 month full-stack course that used React for the front-end, I have spent some time studying Vue and its differences from React.
</p>

---

<h3>Todo list</h3>

<p>
After creating my first Hello World, counter and responsive webpage I followed a guide on building a <strong>Todo list</strong>, utilising a store to call actions and mutations on global state. Here I also learned about conditional rendering and using axios to fetch data from an API, and in the future, a server.
</p>

---

<h3>IMDb game</h3>

<p>
Next I built my own app using my todo project as a reference, this time utilising the <strong>IMDb</strong> api to create a game. Here I focused my learning on the differences between methods and computed, and the pros and cons between using local data or the global store in different scenarios. I leaned heavily into conditional rendering, and utilised a persistedState plugin to hold high scores between window reloads.
</p>

---

<h3>Linktree clone</h3>

<p>
My main point of improvement with the IMDb game was that I never split the app into more managable components. For my next project, a <strong>Linktree clone</strong>, I learned a lot about using watch and emit to call methods across components. This was super effective in making my code scalable and easier to read, as I was previously going through the global store for the same result. Watch also taught me a lot about different ways to keep an app responsive as it scales, as a similar effect in React would require a specific update function to be called at the end of each store change in order to trigger, rather than efficiently watching specific data for changes.
</p>

<p>
Up until now, I was ignoring css as I wanted to spend as much time as possible learning a new language. However I was confident enough in my app to move towards styling. I learned a lot about scoped/global styles, and the pros and cons between writing the styling directly into a component or importing it from an assets directory.
</p>

---

<h3>Calendar</h3>

<p>
Once I was happy with my progress on the Linktree clone, I moved onto a calendar app to learn some new features of Vue. Here I learned about the advantages of mixins to store utility functions that can be called across components. I also learned about and utilised created to call these mixin methods once the component is initialised.
<p>

<p>
Although this project is set up to map stored data across each date of the calendar, I moved on from this as I was spending most of my time writing and troubleshooting javascript rather than studying vue. This is a project I plan to come back to and expand upon, adding a daily tasks column that renders when a cell on the monthly calendar is clicked, having styled tools to display different data formats on the monthly calendar, and the usual CRUD functionalities of a data managment tool.
</p>

---

<h3>Wordsearch</h3>

<p>
Finally, I finished off my inital studies with a wordsearch builder. Utilising another API to fetch words related to a topic the user can input, a random wordsearch is generated. Expanding on what I learned from the calendar project, I also implemented utilities to configure parameters such as requirements for forms and bounds for the wordsearch grid. Again, I sacrificed styling to focus my learning on vue itself, as this fealt like the most efficient use of my time.
<p>
  
<p>
This project is also a nice personal one to me, so I plan to finish it as well. The next step will be to allow the words listed to be toggable between found/hidden, and allow the user to draw boxes around words they have found. I have a few ideas on how to do this with vanilla Vue, as the calculations for different directions words can go in already exists in a mixin.
<p>

