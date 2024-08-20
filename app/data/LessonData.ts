export interface Exercise {
  id: string;
  description: string;
  initialCode: string;
  solution: string;
}
export interface Lesson {
  id: string;
  title: string;
  content: string;
  initialCode: string;
  exercises: Exercise[];
}

interface LessonStyles {
  [key: string]: string;
}

const lessonStyles: LessonStyles = {
  h1: "font-size: 28px; font-weight: bold; margin-bottom: 20px;",
  h2: "font-size: 22px; font-weight: bold; margin-top: 25px; margin-bottom: 15px;",
  p: "font-size: 16px; margin-bottom: 15px;",
  ul: "list-style-type: disc; padding-left: 30px; margin-bottom: 20px;",
  li: "font-size: 16px; margin-bottom: 10px;",
  code: "background-color: #f6f8fa; padding: 2px 4px; border-radius: 4px;",
};
function applyStyles(content: string) {
  return content.replace(
    /<(h1|h2|p|ul|li|pre|code)([\s>])/g,
    (match: string, tag: string, ending: string) => {
      const style = lessonStyles[tag];
      return style ? `<${tag} style="${style}"${ending}` : match;
    }
  );
}

export const lessons: Lesson[] = [
  {
    id: "introduction-to-javascript",
    title: "Introduction to JavaScript",
    content: applyStyles(`
      <p>JavaScript is a versatile and powerful programming language that brings websites to life. It's the backbone of modern web development, enabling interactive and dynamic user experiences.</p>
      
      <h2>Why JavaScript?</h2>
      
      <p>JavaScript has become an essential tool for web developers for several reasons:</p>
      
      <ul>
        <li>It runs in every web browser, making it universally accessible.</li>
        <li>It allows for real-time updates without refreshing the page.</li>
        <li>It can be used for both front-end and back-end development.</li>
        <li>It has a large, active community and countless libraries and frameworks.</li>
      </ul>
      
      <h2>What Can JavaScript Do?</h2>
      
      <p>JavaScript is incredibly versatile. Here are just a few things you can do with it:</p>
      
      <ul>
        <li>Manipulate the DOM (Document Object Model) to create dynamic web pages.</li>
        <li>Handle user interactions like clicks, key presses, and form submissions.</li>
        <li>Make asynchronous requests to servers (AJAX) for seamless data updates.</li>
        <li>Create animations and interactive graphics.</li>
        <li>Build full-scale web and mobile applications.</li>
        <li>Develop server-side applications with Node.js.</li>
      </ul>
      
      <h2>Your First JavaScript Code</h2>
      
      <p>Let's start with a simple example. Here's how you can use JavaScript to display a message:</p>
      
      <code>
  console.log("Hello, World!");
      </code>
      
      <p>In this example:</p>
      
      <ul>
        <li><code>console.log()</code> is a function that prints output to the console.</li>
        <li>The text inside the parentheses and quotes is the message to be displayed.</li>
        <li>The <code>//</code> symbol indicates a comment, which is ignored by the JavaScript engine.</li>
      </ul>
      
      <h2>What's Next?</h2>
      
      <p>In the upcoming lessons, we'll dive deeper into JavaScript fundamentals, including:</p>
      
      <ul>
        <li>Variables and data types</li>
        <li>Operators and expressions</li>
        <li>Control structures (if statements, loops)</li>
        <li>Functions and scope</li>
      </ul>
      
      <p>Get ready to embark on an exciting journey into the world of JavaScript programming!</p>
    `),
    initialCode: '// Your first JavaScript code\nconsole.log("Hello, World!");',
    exercises: [
    ],
  },
  {
    id: "javascript-variables-data-types",
    title: "Variables and Data Types",
    content: applyStyles(`
      
      <p>In JavaScript, variables are containers that hold data values. You can think of a variable as a storage box that can contain different types of information. JavaScript is a loosely typed language, meaning you don't have to specify the data type of a variable when you declare it.</p>
      
      <h2>Declaring Variables</h2>
      
      <p>There are three main ways to declare variables in JavaScript:</p>
      
      <ul>
        <li><code>var</code>: This is the traditional way of declaring variables. It has function scope and is less commonly used in modern JavaScript.</li>
        <li><code>let</code>: Allows you to declare block-scoped variables.</li>
        <li><code>const</code>: Used to declare variables that should not be reassigned. These variables are block-scoped as well.</li>
      </ul>
      
      <h2>Example:</h2>
      
      <code>
      let name = "John"; // A variable that can be reassigned<br>
      const pi = 3.14; // A constant variable that cannot be reassigned
      </code>
      
      <h2>Data Types</h2>
      
      <p>JavaScript supports several data types, including:</p>
      
      <ul>
        <li><strong>String</strong>: A sequence of characters, used for text. Example: <code>"Hello, World!"</code></li>
        <li><strong>Number</strong>: Represents both integer and floating-point numbers. Example: <code>42</code> or <code>3.14</code></li>
        <li><strong>Boolean</strong>: Represents a logical value, either <code>true</code> or <code>false</code>.</li>
        <li><strong>Null</strong>: Represents the intentional absence of any object value. Example: <code>null</code></li>
        <li><strong>Undefined</strong>: Represents a variable that has been declared but has not yet been assigned a value. Example: <code>undefined</code></li>
        <li><strong>Object</strong>: A complex data type that allows you to store collections of data. Example: <code>{ name: "John", age: 30 }</code></li>
        <li><strong>Array</strong>: A special type of object used to store multiple values in a single variable. Example: <code>[1, 2, 3, 4]</code></li>
      </ul>
      
      <h2>Type Checking</h2>
      
      <p>You can check the data type of a variable using the <code>typeof</code> operator:</p>
      
      <code>
      console.log(typeof name); // Outputs: "string"<br>
      console.log(typeof pi); // Outputs: "number"
      </code>
      
      <h2>Conclusion</h2>
      
      <p>Understanding variables and data types is fundamental to working with JavaScript. These are the building blocks of your programs, and you'll use them constantly as you write code.</p>
      
      <p>In the next lesson, we'll explore operators and expressions, which allow you to manipulate the data stored in your variables.</p>
    `),
    initialCode:
      'let message = "Welcome to JavaScript!";\nconsole.log(message);',
    exercises: [
      {
        id: "ex1",
        description:
          'Create a variable named "greeting" and assign it the value "Hello, JavaScript!"',
        initialCode: "// Your code here",
        solution: 'const greeting = "Hello, JavaScript!";',
      },
      {
        id: "ex2",
        description:
          'Declare a variable named "age" and assign it the value 25. Then, use console.log() to print the value of "age" to the console.',
        initialCode: "// Your code here",
        solution: 'let age = 25;\nconsole.log(age);',
      },
    ],
  },
  {
    id: "control-flow",
    title: "Control Flow in JavaScript",
    content: applyStyles(`    
    <p>Control flow is the order in which the computer executes statements in a script. JavaScript code is executed from top to bottom, but you can change the flow of execution by using control structures like conditionals and loops.</p>
    
    <h2>Conditionals: Making Decisions in Code</h2>
    
    <p>Conditionals allow your code to make decisions based on certain conditions. The most common conditional statements in JavaScript are <code>if</code>, <code>else if</code>, and <code>else</code>.</p>
    
    <p>Here’s an example:</p>
    
    <code>
    const age = 18;<br>
    if (age >= 18) {<br>
      &nbsp;&nbsp;console.log("You are an adult.");<br>
    } else {<br>
      &nbsp;&nbsp;console.log("You are not an adult.");<br>
    }
    </code>
    
    <p>In this example, the program checks if the variable <code>age</code> is greater than or equal to 18. If the condition is true, it prints "You are an adult." If the condition is false, it prints "You are not an adult."</p>
    
    <h2>Loops: Repeating Actions</h2>
    
    <p>Loops allow you to execute a block of code multiple times. The most common loops in JavaScript are <code>for</code>, <code>while</code>, and <code>do...while</code>.</p>
    
    <p>Here’s an example of a <code>for</code> loop:</p>
    
    <code>
    for (let i = 0; i < 5; i++) {<br>
      &nbsp;&nbsp;console.log("Iteration number " + i);<br>
    }
    </code>
    
    <p>This loop will print the message "Iteration number X" five times, with X being the values 0 through 4.</p>
    
    <h2>Break and Continue</h2>
    
    <p>The <code>break</code> statement is used to exit a loop early, while the <code>continue</code> statement skips the current iteration and moves to the next one.</p>
    
    <p>Here’s an example of using <code>break</code>:</p>
    
    <code>
    for (let i = 0; i < 10; i++) {<br>
      &nbsp;&nbsp;if (i === 5) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;break;<br>
      &nbsp;&nbsp;}<br>
      &nbsp;&nbsp;console.log(i);<br>
    }
    </code>
    
    <p>In this loop, the program will print the numbers 0 through 4. When it reaches 5, the <code>break</code> statement will exit the loop.</p>
    
    <h2>Conclusion</h2>
    
    <p>Understanding control flow is essential for writing effective JavaScript code. By using conditionals and loops, you can control how your code executes and make it more dynamic and responsive.</p>
    
    <p>In the next lesson, we will dive deeper into functions and how they can help you organize your code more efficiently.</p>
  `),
  initialCode: `// Example of an if-else statement\nconst age = 18;\nif (age >= 18) {\n  console.log("You are an adult.");\n} else {\n  console.log("You are not an adult.");\n}`,
  exercises: [
    {
      id: "ex1",
      description:
        'Write an if-else statement that checks if a number stored in a variable called "temperature" is greater than or equal to 30. If it is, print "It\'s hot outside!" to the console. Otherwise, print "It\'s cool outside."',
      initialCode: 'let temperature = 25;\n// Your code here',
      solution: 'let temperature = 25;\nif (temperature >= 30) {\n  console.log("It\'s hot outside!");\n} else {\n  console.log("It\'s cool outside.");\n}',
    },
    {
      id: "ex2",
      description:
        'Create a for loop that prints the numbers 1 through 10 to the console.',
      initialCode: '// Your code here',
      solution: 'for (let i = 1; i <= 10; i++) {\n  console.log(i);\n}',
    },
  ],
  },
  {
    id: "functions",
    title: "Functions",
    content: applyStyles(`      
      <p>Functions are one of the fundamental building blocks in JavaScript. A function is a reusable block of code that performs a specific task. You can think of functions as mini-programs that can be called upon to execute when needed.</p>
      
      <h2>Why Use Functions?</h2>
      
      <p>Functions help you organize your code into manageable pieces. They allow you to avoid repeating code by encapsulating behavior that you can reuse. This makes your code more modular, easier to read, and maintain.</p>
      
      <h2>Defining a Function</h2>
      
      <p>To define a function in JavaScript, use the <code>function</code> keyword, followed by the function name, a list of parameters enclosed in parentheses, and the function body enclosed in curly braces.</p>
      
      <p>Here’s an example:</p>
      
      <code>
      function greet(name) {<br>
        &nbsp;&nbsp;console.log("Hello, " + name + "!");<br>
      }
      </code>
      
      <p>In this example, the function is named <code>greet</code>. It takes one parameter called <code>name</code>. When you call this function, it will print a greeting message that includes the name you pass to it.</p>
      
      <h2>Calling a Function</h2>
      
      <p>To execute the code inside a function, you need to "call" the function by using its name followed by parentheses. If the function requires parameters, you pass them inside the parentheses.</p>
      
      <p>Here’s how to call the <code>greet</code> function:</p>
      
      <code>
      greet("Alice"); // Outputs: Hello, Alice!<br>
      greet("Bob");   // Outputs: Hello, Bob!
      </code>
      
      <h2>Function Parameters and Return Values</h2>
      
      <p>Functions can take multiple parameters, and they can also return a value using the <code>return</code> statement. When a function returns a value, you can use that value in other parts of your code.</p>
      
      <p>Here’s an example:</p>
      
      <code>
      function add(a, b) {<br>
        &nbsp;&nbsp;return a + b;<br>
      }<br><br>
      let sum = add(5, 10);<br>
      console.log(sum); // Outputs: 15
      </code>
      
      <p>In this example, the function <code>add</code> takes two parameters, <code>a</code> and <code>b</code>, adds them together, and returns the result. The returned value is then stored in the variable <code>sum</code> and printed to the console.</p>
      
      <h2>Anonymous Functions and Arrow Functions</h2>
      
      <p>JavaScript also supports anonymous functions (functions without a name) and arrow functions, which provide a shorter syntax for writing functions.</p>
      
      <p>Here’s an example of an arrow function:</p>
      
      <code>
      const multiply = (x, y) => {<br>
        &nbsp;&nbsp;return x * y;<br>
      };<br><br>
      console.log(multiply(3, 4)); // Outputs: 12
      </code>
      
      <h2>Conclusion</h2>
      
      <p>Functions are a powerful tool in JavaScript that allow you to write modular, reusable code. Understanding how to define, call, and work with functions is crucial for writing effective JavaScript programs.</p>
      
      <p>In the next lesson, we’ll explore arrays, which allow you to store and manipulate collections of data.</p>
    `),
    initialCode: `// Example of a function\nfunction greet(name) {\n  console.log("Hello, " + name + "!");\n}\ngreet("World");`,
  exercises: [
    {
      id: "ex1",
      description:
        'Write a function named "square" that takes a number as a parameter and returns its square. Then, call the function with the number 4 and print the result to the console.',
      initialCode: "function square(number) {\n  // Your code here\n}",
      solution: "function square(number) {\n  return number * number;\n}\nconsole.log(square(4)); // Outputs: 16",
    },
    {
      id: "ex2",
      description:
        'Write a function named "greetUser" that takes two parameters: "firstName" and "lastName". The function should return a string that says "Hello, [firstName] [lastName]!". Call the function with the names "Jane" and "Doe" and print the result to the console.',
      initialCode: "function greetUser(firstName, lastName) {\n  // Your code here\n}",
      solution: 'function greetUser(firstName, lastName) {\n  return "Hello, " + firstName + " " + lastName + "!";\n}\nconsole.log(greetUser("Jane", "Doe")); // Outputs: Hello, Jane Doe!',
    },
  ],
  },
  {
    id: "arrays",
    title: "Arrays",
    content: applyStyles(`      
      <p>Arrays are one of the most important data structures in JavaScript. An array is a special type of object that allows you to store multiple values in a single variable. These values can be of any data type, including numbers, strings, objects, and even other arrays.</p>
      
      <h2>Why Use Arrays?</h2>
      
      <p>Arrays help you manage collections of data efficiently. Instead of creating multiple variables for related data, you can store them in a single array and access them using their index.</p>
      
      <h2>Creating an Array</h2>
      
      <p>You can create an array in JavaScript using square brackets <code>[]</code> and separating the elements with commas.</p>
      
      <p>Here’s an example:</p>
      
      <code>
      const fruits = ["Apple", "Banana", "Cherry"];
      </code>
      
      <p>In this example, the array <code>fruits</code> contains three string elements: "Apple", "Banana", and "Cherry".</p>
      
      <h2>Accessing Array Elements</h2>
      
      <p>You can access elements in an array using their index, with the first element having an index of 0.</p>
      
      <p>Here’s how you can access elements in the <code>fruits</code> array:</p>
      
      <code>
      console.log(fruits[0]); // Outputs: Apple<br>
      console.log(fruits[2]); // Outputs: Cherry
      </code>
      
      <h2>Modifying Array Elements</h2>
      
      <p>You can modify the elements of an array by assigning a new value to a specific index.</p>
      
      <p>Here’s an example:</p>
      
      <code>
      fruits[1] = "Blueberry";<br>
      console.log(fruits); // Outputs: ["Apple", "Blueberry", "Cherry"]
      </code>
      
      <h2>Common Array Methods</h2>
      
      <p>JavaScript provides several built-in methods to work with arrays. Here are a few of the most commonly used ones:</p>
      
      <ul>
        <li><code>push()</code>: Adds one or more elements to the end of an array.</li>
        <li><code>pop()</code>: Removes the last element from an array.</li>
        <li><code>shift()</code>: Removes the first element from an array.</li>
        <li><code>unshift()</code>: Adds one or more elements to the beginning of an array.</li>
        <li><code>length</code>: Returns the number of elements in an array.</li>
      </ul>
      
      <p>Here’s an example using the <code>push()</code> and <code>pop()</code> methods:</p>
      
      <code>
      fruits.push("Dragonfruit");<br>
      console.log(fruits); // Outputs: ["Apple", "Blueberry", "Cherry", "Dragonfruit"]<br><br>
      fruits.pop();<br>
      console.log(fruits); // Outputs: ["Apple", "Blueberry", "Cherry"]
      </code>
      
      <h2>Iterating Over Arrays</h2>
      
      <p>You can loop through the elements of an array using loops like <code>for</code>, <code>for...of</code>, or <code>forEach()</code>.</p>
      
      <p>Here’s an example using a <code>for</code> loop:</p>
      
      <code>
      for (let i = 0; i < fruits.length; i++) {<br>
        &nbsp;&nbsp;console.log(fruits[i]);<br>
      }
      </code>
      
      <h2>Conclusion</h2>
      
      <p>Arrays are a versatile and powerful tool in JavaScript, allowing you to store, access, and manipulate collections of data efficiently. Understanding arrays is essential for working with JavaScript and will be fundamental to your coding journey.</p>
      
      <p>In the next lesson, we’ll explore more advanced data structures and techniques in JavaScript.</p>
    `),
    initialCode: `// Example of an array\nconst fruits = ["Apple", "Banana", "Cherry"];\nconsole.log(fruits);`,
    exercises: [
      {
        id: "ex1",
        description:
          'Create an array named "colors" with at least three color names. Then, use console.log() to print the first and last colors in the array.',
        initialCode: "const colors = [/* Your colors here */];\n// Your code here",
        solution: 'const colors = ["Red", "Green", "Blue"];\nconsole.log(colors[0]); // Outputs: Red\nconsole.log(colors[colors.length - 1]); // Outputs: Blue',
      },
      {
        id: "ex2",
        description:
          'Write a function named "addElement" that takes an array and an element as parameters, adds the element to the array using push(), and returns the updated array. Then, create an array named "numbers", call the function with this array and a new number, and print the result.',
        initialCode: "function addElement(array, element) {\n  // Your code here\n}\nconst numbers = [1, 2, 3];\n// Your code here",
        solution: 'function addElement(array, element) {\n  array.push(element);\n  return array;\n}\nconst numbers = [1, 2, 3];\nconsole.log(addElement(numbers, 4)); // Outputs: [1, 2, 3, 4]',
      },
    ],
  },
];

export function getLessonsById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}
