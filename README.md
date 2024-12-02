# Loading Skeleton Demo

## Description

This project demonstrates the implementation of loading skeletons in a Vue.js application using Tailwind CSS. It showcases how to manage loading states effectively in frontend engineering, providing a smooth user experience with visual feedback during data fetching.

The application features a masonry layout that displays either loading skeletons or actual content, depending on the loading state. This approach is particularly useful when dealing with slow internet connections or when loading large amounts of data.

## Features

- Vue 3 with Composition API and TypeScript
- Tailwind CSS for styling
- Responsive masonry layout
- Loading skeleton implementation
- Simulated API call with delayed response

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/loading-skeleton-demo.git
   ```

2. Navigate to the project directory:

   ```
   cd vue-tailwind-loading-skeleton
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Run the development server:

   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` (or the port shown in your terminal).

## Usage

The main component of this project is `HomeView.vue` and `UsersView.vue`. It contains:

- An "About This App" section explaining the importance of loading states
- A masonry layout that switches between loading skeletons and actual content
- A "Users" section displaying a dynamic list of users with key details
- A loading state that switches between skeleton placeholders and the actual user list

To modify the number of items or the delay in the simulated API call, you can adjust the values in the `fetchPosts` function within `HomeView.vue`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

If you have any questions or feedback, please reach out to my email (mailto:aldikrasniqi5@gmail.com).
