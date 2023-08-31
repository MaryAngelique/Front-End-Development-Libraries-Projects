# Front-End-Development-Libraries-Projects: Drum-Machine

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div class="drum-pad">
        <h1>Drum Machine</h1>
        <p>Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!</p>
        <ul>
            <li>User Story #1: I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.</li>
            <li>User Story #2: Within #drum-machine I can see an element with a corresponding id="display".</li>
            <li>User Story #3: Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.</li>
            <li>User Story #4: My calculator should contain a clickable element containing a . (decimal point) symbol with a corresponding id="decimal".</li>
            <li>User Story #5: My calculator should contain a clickable element with an id="clear".</li>
            <li>User Story #6: My calculator should contain an element to display values with a corresponding id="display".</li>
            <li>User Story #7: At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.</li>
            <li>User Story #8: As I input numbers, I should be able to see my input in the element with the id of display</li>
            <li>User Story #9: In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.</li>
            <li>User Story #10: When inputting numbers, my calculator should not allow a number to begin with multiple zeros</li>
            <li>User Story #11: When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.</li>
            <li>User Story #12: I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.</li>
            <li>User Story #13: If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 * (-5)).</li>
            <li>User Story #14: Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.</li>
            <li>User Story #15: My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).</li>
          </ul>
          <p>Note On Calculator Logic: It should be noted that there are two main schools of thought on calculator input logic: immediate execution logic and formula logic. Our example utilizes formula logic and observes order of operation precedence, immediate execution does not. Either is acceptable, but please note that depending on which you choose, your calculator may yield different results than ours for certain equations (see below example). As long as your math can be verified by another production calculator, please do not consider this a bug.</p>
          <p>EXAMPLE: 3 + 5 x 6 - 2 / 4 =

Immediate Execution Logic: 11.5
Formula/Expression Logic: 32.5
You can build your project by using this CodePen template and clicking Save to create your own pen</p>
        <a href="https://codepen.io/maryangelique/pen/eYbZKbE4">CodePen Solution</a>
    </div>
</body>
</html>
