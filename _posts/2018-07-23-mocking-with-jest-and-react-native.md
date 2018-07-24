---
layout: post
title: Mocking with Jest and React Native
author: Mark J. Lehman
tags:
- react native
- jest
- javascript
- testing
- mocks
---

I've been building a React Native app and learning testing using [Jest](https://jestjs.io/). It has been an interesting journey, and I'm not going to go in-depth on much of my approaches to this test suite, other than to share a few links to [articles](https://medium.com/react-native-training/learning-to-test-react-native-with-jest-part-1-f782c4e30101) I found helpful.

Anyway, the meat and potatoes of this post is how to mock with Jest, specifically how I figured out how to mock a popular library called [`'react-native-router-flux'`](https://github.com/aksonov/react-native-router-flux) in my unit tests.

I was testing an action following [the code samples in this post](https://pillow.codes/testing-in-react-native-jest-detox-d7b3b79a166a), and one of my actions routed to a new scene:
```javascript
// Actions.js
import { Actions } from 'react-native-router-flux'
// ...some codes...
Actions.replace('afterLoginScene')
```
I don't feel the need to test that transition while unit testing that specific action, but the test tries to run that code and horks badly. So I want to stub or mock the `Actions` somehow so I can test everything else in that action. After lots of trial and error and Googling, a colleague shared with me a [StackOverflow post](https://stackoverflow.com/a/45007792/3477163) that had the key:

```javascript
// testHelper.js
export default jest.mock(
  'react-native-router-flux', () => ({
    Actions: {
      replace: jest.fn(),
      // whatever other Actions you use in your code
    },
  })
)
```
```javascript
// Actions.test.js
import 'testHelper.js'
import { Actions } from 'react-native-router-flux'
```

Now I can test only that the expected actions are fired:
```javascript
  const expectedActions = [
    { type: 'LOGIN/SET_LOGIN_ERROR', message: '' },
    { type: 'LOGIN/STORE_SOMETHING', something: 'stuff' },
  ]

  store
    .dispatch(LoginActions.sendLogin(username, password))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions)
      done()
    })
```