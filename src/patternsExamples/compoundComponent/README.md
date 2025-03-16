⚠️ Before reading this, you must have a clear understanding of how Context Module pattern work.

# Definition

Compound components in react allows multiple sub-components to share logic and state. This patterns avoids issues like prop drilling or overly nested component structure.

You've seen this pattern multiple times, and been used by lot of component libraries, example: https://reach.tech/tabs/

## Heads up

The Accordion component used here is just for understanding how the compound components work, It lacks accessibility features, and the API is somewhat cumbersome since this component explicitly requires an index, which we want to avoid.

## Logic

The `AccordionContextProvider.tsx` file defines the context for managing the state of an Accordion component using the context module pattern. It includes an AccordionContextProvider component, which acts as a provider, wrapping the components that need access to the accordion’s state. The provider maintains the currently open accordion index and a toggle function to update it. Additionally, the file provides a useAccordionContext hook to consume the context within child components. To use the context, components must be wrapped inside AccordionContextProvider.

The `CompoundComponent.tsx` file defines an Accordion component using the Compound Component pattern. It includes multiple sub-components that work together within a shared context to manage the accordion’s state. The key components are:

- Accordion (Root Component): Wraps all accordion items and provides the context via AccordionContextProvider.
- Accordion.Item: Represents an individual accordion section.
- Accordion.Header: The clickable header that toggles the visibility of the accordion body. It uses useAccordionContext to determine whether it is open and displays an animated Chevron icon.
- Accordion.Body: Displays the content when the corresponding item is open.

The file exports the Accordion component with nested sub-components for easy usage. The CompoundComponent function demonstrates the accordion with three example items, each containing a question and an answer.

## Resources

Further reading: https://www.smashingmagazine.com/2021/08/compound-components-react/
