// 📄 Read Docs
// useActionState - https://react.dev/reference/react/useActionState
// Definition - The useActionState hook is used to manage state and handle form actions in React.
//              It provides a way to handle form submissions, manage loading states, and handle errors
//              in a declarative way.
// Rules of Hooks - https://react.dev/reference/rules/rules-of-hooks

import { useActionState } from "react";

// Type definition for our state
type State = {
  name: string;
  error: Error | null;
};

// Function to simulate updating the name in a database
// This is a mock function that simulates an API call
const updateNameInDB = async (name: string) => {
  // Simulate Error by uncommenting this line
  // throw new Error("Failed to update name");

  // Simulate network delay
  await new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });

  // Update the item in the local storage
  localStorage.setItem("name", JSON.stringify(name));
  return name;
};

// Action function for useActionState
// Handles the logic for updating the name and managing errors
async function updateName(prevState: State, formData: FormData) {
  try {
    // Get new name from form data and update in DB
    const newName = await updateNameInDB(formData.get("name")?.toString()!);
    return { name: newName, error: null };
  } catch (error) {
    // Handle error while preserving previous state
    // Preserve immutability by spreading the previous state
    // https://www.reddit.com/r/Frontend/comments/15401az/why_immutability_matters_for_react/
    return { ...prevState, error: error as Error };
  }
}

// Demonstrates form handling with state management and error handling
const UseActionState = () => {
  // Parameters:
  // 1. action: (prevState: State, formData: FormData) => Promise<State>
  //    - Function that handles the form submission
  //    - Receives previous state and form data
  //    - Returns a promise that resolves to new state
  //
  // 2. initialState: State
  //    - Initial state object
  //    - Contains default values for all state properties
  //
  // Returns:
  // 1. state: State
  //    - Current state object
  //
  // 2. formAction: (formData: FormData) => void
  //    - Function to handle form submissions
  //    - Can be used as form action prop
  //
  // 3. isPending: boolean
  //    - Indicates if the action is currently processing
  //    - Useful for showing loading states and disabling buttons
  const [state, formAction, isPending] = useActionState(updateName, {
    error: null,
    name: localStorage.getItem("name")
      ? JSON.parse(localStorage.getItem("name")!)
      : "anonymous user",
  });

  return (
    <div className="flex flex-col items-center gap-2 w-full h-screen justify-center">
      <h2 className="text-2xl font-bold">UseActionState Example</h2>

      <form action={formAction}>
        <p>Current user: {state.name}</p>

        {isPending && <p>loading...</p>}

        <div className="space-x-2">
          <input type="text" name="name" required />

          <button disabled={isPending} type="submit">
            Submit
          </button>

          {!isPending && state.error && <p>Error: {state.error.message}</p>}
        </div>
      </form>
    </div>
  );
};

export default UseActionState;
