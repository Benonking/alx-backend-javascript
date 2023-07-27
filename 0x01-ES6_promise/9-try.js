export default function guardrail(mathFunction) {
  let retunredValue;
  const queue = [];
  try {
    retunredValue = mathFunction();
  } catch (error) {
    retunredValue = error.toString();
  }
  queue.push(retunredValue);
  queue.push('Guardrail was processed');

  return queue;
}
