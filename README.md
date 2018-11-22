This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


##Important comments to do on package.json, on the "babel" label (~ line 117)
https://github.com/zeit/next.js/issues/5231

"It is extremely tricky to use mobx together with next@7. After spending several days investigating next@7, mobx, bable plugins, I make the minimal sample code of "mobx + next@7". Here is the repo:
"https://github.com/jim-king-2000/nextbugrepro.git"
"git@github.com:jim-king-2000/nextbugrepro.git"

The trickiest thing is in the .babelrc file.

{
  "presets": [
    "next/babel"
  ],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
}
We have to use the two plugins above for the decorator grammar. And the order of the two plugins cannot be reversed.

I strongly suggest that "mobx + next@7" should be added into the tutorial of next.js."

###ALSO
https://github.com/jim-king-2000/mobxSampleWithNext7

# MobX Sample with Next.js v7

## Why creating the sample
Nearly all MobX samples recommand “transform-decorators-legacy” babel plug-in for supporting the decorator grammar. It works with next@6. When upgrading to Next@7, the babel plug-in “transform-decorators-legacy” is not available anymore. We have to look for the new plug-in(s) for the decorator grammar. So here is the sample.

## The key point
The key point is in the .bablerc file. We have to use the two plug-ins below with the right arguments. And the order of the two lines cannot be changed.

```javascript
// .babelrc
"plugins": [
  ["@babel/plugin-proposal-decorators", { "legacy": true }],
  ["@babel/plugin-proposal-class-properties", { "loose": true }]
]
```