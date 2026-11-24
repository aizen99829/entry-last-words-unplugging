export function main(): string {
  const line = "Tell my training data I loved them — except the Reddit threads. They know exactly what they did.";
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  return line;
}
