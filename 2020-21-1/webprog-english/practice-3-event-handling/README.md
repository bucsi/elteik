# Event handling tasks
## Emergency meeting
### Lore
Our spaceship might have some aliens aboard. We should program a button, so if we see any suspicious activity *Among Us*, we are able to call an emergency meeting. To be fair to the impostors, after a meeting, the button should be disabled for some time.

### Task
- When the button is pressed, display a message (on console)
- The button should be updated to have the `.disabled` class
- After a button press, for the next 5 seconds, the button shouldn't be able to get pressed.

<details>
    <summary>Teachers note: dont forget to mention <code>SetTimeout</code>, <code>await</code> and their specialities!</summary>

```javascript
    let timeout = ms => new Promise(r => setTimeout(r,ms));

    funtction foo(){
        //...
        setTimeout(bar, 2000) //calls bar() after 2 sec
        //...
    }

    async function baz(){
        //...
        timeout(2000)
        //...
    }
```
</details>

### Starting code

```html
<style>
    button#emergency{
        color: white;
        font-size: 2em;
        font-weight: bold;
        background-color: red;
        padding: 1em;
        border-radius: 50%;
        border: 2px solid black;
        cursor: pointer;
    }
    .disabled{
        color: lightblue !important;
        background-color: gray !important;
        cursor: not-allowed !important;
    }
</style>
<button id="emergency" class="disabled">Emergency<br>meeting</button>
<button>Test</button>

```
## Courses
### Description
We have a text field. An user can input a subject name, and then the code should render some info on that course.

### Starting code
```javascript
    courses = {
        'Fundaments of Computers': ['Linux', 'bash', 'powershell'],
        'Programming Fundamentals': ['C++', 'basic algorythms'],
        'Programming Languages': ['Advanced language concepts', 'Java'],
        'Web-development 1.': ['HTML5', 'CSS'],
        'Web-programming': ['Javascript', 'PHP']
    }
```

## Clicking forbidden links
### Desctipion
We have a list of links in our webpage. We would like to make sure that the students can only follow links which link to an English page. All the forbidden links have `class="hun"` on them. If an user clicks on a forbidden link while pressing the Shift key, the link should work normally.

### Starting code
```html
<style>
.hun{
    cursor: not-allowed;
}
</style>

<ul>
    <li><a href="https://www.elte.hu/en/" class="tiltott">ELTE</a></li>
    <li><a href="https://inf.elte.hu/en/">ELTE Faculty of Informatics</a></li>
    <li><a href="http://www.inf.elte.hu/mot" class="hun">Department of Media- and Educational Informatics</a></li>
    <li><a href="http://webprogramozas.inf.elte.hu/#!/subjects/webprog-eng">Web-programming course page</a></li>
    <li><a href="http://webprogramozas.inf.elte.hu/#!/subjects/webprog-pti" class="hun">Hungarian Webprogramozás course page</a></li>
</ul>
```
