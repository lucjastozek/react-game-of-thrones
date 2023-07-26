import { Person } from "./personTypes";
/*
function logAllPeopleInTree(rootPerson)
    workStack = empty stack of Person objects
    push rootPerson onto workStack

		while workStack is not empty: 
        currentPerson = pop person off workStack
        log the name property of currentPerson
        push each element of currentPerson's children onto the workStack
*/

export function logAllPeopleInTree(topPerson: Person): string[] {
  const workStack: Person[] = [];
  const peopleList: string[] = [];
  workStack.push(topPerson);
  while (workStack.length > 0) {
    const currentPerson = workStack.pop() as Person;
    peopleList.push(currentPerson.name);
    workStack.push(...currentPerson.children);
  }

  return peopleList;
}

export function logAllPeopleInTreeWithQueue(topPerson: Person): string[] {
  const queue: Person[] = [];
  const peopleList: string[] = [];

  queue.push(topPerson);
  while (queue.length > 0) {
    const currentPerson = queue.pop() as Person;
    peopleList.push(currentPerson.name);
    queue.unshift(...currentPerson.children.reverse());
  }

  return peopleList;
}
