export const main = (input: { nameToGreet?: string }) => {
  const defaultGreetings = "World";
  const greetingsMade = `Hello ${input.nameToGreet ?? defaultGreetings}`;

  console.log(greetingsMade);

  return ({ customGreetings: input.nameToGreet !== undefined, greetingsMade });
};
