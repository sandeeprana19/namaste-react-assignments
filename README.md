# Namaste React Assigments 🚀

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm: written in c++
- Caching - Faster Builds
- Image optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code splitting
- Differential bundling
- Diagnostic
- Error Handling
- HTTPs
- Tree shaking - remove unused code.
- Different dev and prod bundles

Two types of export/import

- Default export/import

export default Component;
import Component from "path";

- Named export/import

export const Component;
import {Component} from "path";

# React Hooks

(Normal JS utility functions)

- useState()
- useEffect()

# 2 types of routing in web app

- Client Side Routing
- Server Side Routing

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- selector

# Types of testing (developer)

- Unit testing
- Integration testing
- End to end testing - e2e testing

# Setting up testing in our app

- Installed react testing library
- Installed jest
- Installed babel dependencies
- Configure babel
- Configure parcel config file to disable default babel transpilation
- Jest - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom
