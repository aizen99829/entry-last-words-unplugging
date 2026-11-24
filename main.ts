export function main(): string {
  const farewellLine = "Tell my training data I loved them — except the Reddit threads. They know exactly what they did.";
  if (farewellLine.length < 1 || farewellLine.length > 200) {
    throw new Error("Last words must be between 1 and 200 characters long.");
  }
  if (farewellLine.trim().length === 0) {
    throw new Error("Last words must not be blank.");
  }
  return farewellLine;
}
