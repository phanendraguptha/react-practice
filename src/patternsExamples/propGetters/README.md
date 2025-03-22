# Definition

The Prop Getters pattern allows components to return a function that merges internal logic with external Props. This pattern ensures flexibility by preventing unnecessary prop conflicts.

## Implementation Details

**callAll Function**: A utility that combines multiple event handlers into one, ensuring all handlers are executed.

The `useToggle.tsx` file defines a custom hook, `useToggle`, that manages the state of a toggleable component. It includes:

`on`: Boolean state representing whether the toggle is active.

`toggle`: A function to update the state.

`getTogglerProps`: A function that returns a set of merged props, combining default behaviors with user-provided props.

This approach ensures that components using useToggle can pass additional handlers (e.g., onClick) without overriding the default behavior.

The `PropGetters.tsx` file defines a functional component demonstrating the Prop Getters Pattern. It includes:

A checkbox input that toggles the state.

A button that also toggles the state while allowing custom event handlers.

Both elements use `getTogglerProps` to ensure proper event handling and state management.

## Benefits

1. **Encapsulation**: Internal implementation details are hidden from consumers, making the API cleaner and more maintainable.

2. **Flexibility**: Consumers can add their own props and event handlers without conflicting with the component's core functionality.

3. **Reusability**: The same prop getter can be used across multiple elements, ensuring consistent behavior.

4. **Type Safety**: When used with TypeScript, prop getters provide type checking for the props being passed.

## Credits

This pattern was introduced by [Kent C. Dodds](https://github.com/kentcdodds/advanced-react-patterns/) and is widely used in React applications to enhance flexibility and reusability.
