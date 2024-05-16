# React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Actions

In the project directory, you can run:

### `npm install`

Installs all project dependencies.

### `npm start`

Runs the app in development mode. \
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. \
You will also see any lint errors in the console.

## The Challenge

### The Problem

As it stands, the header renders itself on every keystroke to the search input. This is indicated by the `Header` component as a message, "Header rendered {n} times". In this exercise, you are asked to modify the app so that the header does not re-render when a new keystroke is entered into the search input. This task must be accomplished without changing the signatures of any functions or functional components.

### The Solution

Once you've arrived at a solution, please add a paragraph to this README, describing the nature of the problem you fixed (why did the app render on every keystroke?), the solution you provided, and an explanation as to why your solution corrects the problem.

### THE FIX

After experimenting with the App. I understood how it worked by breaking down the components themselves. First thing to understand is that it uses radio buttons to filter the Ice Cream Shop, there is a search bar for input where the user could find a flavor, and finally there is a list of flavors. By default the list of flavors returns all flavors for the selected shop and filters based on the user input. There's a `fetchFlavors` method in the parent component `App` that returns the list of flavors for `iceCreamShop` selected state. `Header` and `VisibleFlavors` component both takes in `fetchFlavors` and inside Header a counter state is made to update inside a useEffect hook with a dependency on `fetchFlavors`. With the original implementation of `fetchFlavors` anytime state is updated Header WILL UPDATE. Espescially because it is at the parent component level.
Changing iceCreamShops should rerender the header because of the change of data. But there are better ways to prevent rerenders there as well. 

Why did the app render on every keystroke? The `Filter` component is wrapped around a context provider. But the input inside updates the `filter` state with every keystroke back at the parent component using the function `updateFilter`. Once this happens the header is then once again rendered. 

There was a few ways to solve this. First way being remove `fetchFlavors` out of the useEffect dependency in the Header component. Another way was to potentially useRef and maybe forwardRef for the `Filter` component. I would attach a useRef variable to the input and somehow pass it back to the parent component and use its `ref.current.value` properties to set the `filter` value. But ultimately I decided to use `useCallback` on the `fetchFlavors` with a dependency on `iceCreamShop` state. By using this hook it ensures uneccessary re renders dont happen on functions unless there is a change to whatever is put in its dependency. You wouldnt want to use `useMemo` because that is better for memoized values from running the actual function. I found this to be the most optimal solution with having the constraints of not being able to change signatures of functions or components. I did reorganize the code so I could personally read it better and hope that this isn't a problem.
