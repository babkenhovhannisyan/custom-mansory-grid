# Masonry Grid

A React project showcasing a virtualized masonry grid layout. <br /> __This project was created to demonstrate my skills in React, TypeScript, and performance optimization.__

The project uses the Pexels API to fetch and display photos in a masonry grid, with the ability to view detailed information about each photo. The grid is virtualized for better performance when handling large sets of images.

The **masonry grid layout** was implemented __manually__ from scratch without using any external libraries to manage the layout.

You can find the documentation at the [Pexels API Documentation](https://www.pexels.com/api/documentation/).

## Tools

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Vitest](https://vitest.dev)
- [React testing library](https://testing-library.com/docs/react-testing-library/intro/)
- [Styled Component](https://styled-components.com/)
- [Axios](https://axios-http.com/docs/intro)
- [Ahooks](https://ahooks.js.org/hooks/use-request/index)
- [Framer Motion](https://www.framer.com/motion/)
- [EsLint](https://www.npmjs.com/package/eslint)
- [Prettier](https://prettier.iot)

## Required Installations

The following should be installed in your machine

- Node v20.17.0
- Yarn v1.22.22

## How to Install and Run the Application Locally

1.  Clone the Git repository.
2.  Rename `.env.example` to `.env`.
3.  Add your access key by setting `VITE_PEXELS_API_KEY=` in the `.env` file.
**Note:** I know that placing private keys in `.env.example` is not ideal, but if you're feeling lazy and don't want to create your own key, I'll provide it here 😄 ```PBSPZX34gBV9QuuFrt11VGAEe8y2oneWB3hbJcVNLICmQmqg2POyr6mI```.
4.  Install all dependencies by running `yarn install`.
5.  Start the application in development mode with `yarn dev` (or build it by running `yarn build` followed by `yarn preview`).
6.  Run the tests by executing `yarn test`.

## How I Optimized Performance

1.  I used `React.lazy` for code-splitting and lazy loading with `react-router-dom`.
2.  I applied memoization when needed (e.g., `useMemo`, `useCallback`, etc.).
3.  I implemented Masonry Grid virtualization to remove offscreen elements from the DOM.
4. The **masonry grid layout** was built from scratch (without external libraries) for a more custom solution, allowing more control over performance and responsiveness.
