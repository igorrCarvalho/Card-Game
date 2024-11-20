export function truncateString(input: string, maxLength: number = 70): string {
    if (input.length > maxLength) {
      return input.slice(0, maxLength) + "...";
    }
    return input;
}