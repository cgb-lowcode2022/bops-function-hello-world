export const main = (input: { nameToGreet?: string }) => {
  const defaultGreetings = "World";

  console.log(`Hello ${input.nameToGreet ?? defaultGreetings}`);

  return ({ customGreetings: input.nameToGreet !== undefined });
};
