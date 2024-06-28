# MPA built with Astro representing a portfolio page

Using Astro as a backbone to build stateful components exactly where needed

## Tech stack

#### State manager - *Zustand* - global for all components on a specific page. Provides shared state within all components. Enables storage of multiple objects, getters and setters in least amount of complexity.

#### Spline models - *Spline* is a great tool to add animations within a div block somewhere on the DOM tree. That block itself can have it's own camera perspective, animation timeline and interactivity. Fun fact - importing this in native <i>script</i> tag will show the logo which might be hidden if the user has purchased the premium plan. Using the npm library 'spline/tools' and 'spline/runtime' to render the object url do not render with logo. And all it takes is to just load Spline objects in JSX components. Neat.


```
import Spline from '@splinetool/react-spline';

    <div className={...}>
        <Spline scene="https://prod.spline.design/SampleScene/scene.splinecode" />
    </div>
```

#### Motion divs - *FramerMotion* - literally all that is needed to add motion to DOM elements. Just prefix your 'div' element with 'motion' as such

```
<motion.div>
    <!-- content -->
</motion.div>
```

DOM elements can be easily manipulated to achieve either of the five main techniques used in award-winning designs

- Scroll tracking
- Viewport detection
- Screen position - sticky, absolute, relative, hidden

Aso the fifth and most popular technique is smooth scrolling.

#### Smooth scrolling - *Lenis* the most popular tool out there.

```
  const [state, setState] = useState(null);

  const lenis = useLenis(({ scroll }) => {
    setState(scroll);
  });
```

Tip: use the numerical value to calculate linear and curvature effects in you designs. This project contains few examples of changing the styles={{...}} property directly

- margins
- scaling
- offset

#### Animating SVGs


```
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path


            <!-- animation controls -->

            initial={{pathLength: 0}}
            animate={{pathLength: 1}}
            transition={{ duration: 0.7, delay: 0.2 }}

            <!-- animation controls -->


            d="..."
            stroke="#..."
            strokeWidth="..."
          />
        </svg>
```

#### Conditional rendering

Example

```
const stateHandler = zustandStore();


return (
    <AnimatePresence mode="...">
        {state ? <> <ExampleComponent /> </> : null}
    </AnimatePresence>
)

```

Explanation: Controlling some sort of state is important for triggering listed items within an *AnimatePresence* block. If any of the object properties are changed or the list that is mapped dynaimically with the JSX element just shifts indexes the animations *onExit={{...}}* WILL NOT TRIGGER. In other words *AnimatePresence* uses critical logic to know when to trigger *onExit* animations.


# Development stage

This web app is currently deployed at [this url (hosted @Vercel)](https://web-devlog-kutsarov.vercel.app/).

