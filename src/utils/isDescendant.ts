import { Person } from "./personTypes";

export function isDescendant(
  descendantName: string,
  ancestorName: string,
  topPerson: Person
): boolean {
  const ancestor = findAncestor(ancestorName, topPerson);
  const workStack: Person[] = [];
  workStack.push(ancestor);
  while (workStack.length > 0) {
    const currentPerson = workStack.pop() as Person;
    if (currentPerson.name.toUpperCase() === descendantName.toUpperCase()) {
      return true;
    }
    workStack.push(...currentPerson.children);
  }

  return false;
}

function findAncestor(ancestorName: string, topPerson: Person) {
  const workStack: Person[] = [];
  workStack.push(topPerson);
  while (workStack.length > 0) {
    const currentPerson = workStack.pop() as Person;
    if (currentPerson.name.toUpperCase() === ancestorName.toUpperCase()) {
      return currentPerson;
    }
    workStack.push(...currentPerson.children);
  }
  return { name: "", children: [] };
}
