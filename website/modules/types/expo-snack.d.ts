interface Window {
  ExpoSnack?: {
    /**
     * Initialize all snack players on the page
     */
    initialize(): void;
    /**
     * Remove a snack player container
     */
    remove(container: Element): void;
    /**
     * Append/add a snack player container
     */
    append(container: Element): void;
  };
}
