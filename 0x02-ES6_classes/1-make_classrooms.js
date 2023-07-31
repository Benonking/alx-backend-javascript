import ClassRoom from './0-classroom';

export default function intializeRooms() {
  const objclass1 = new ClassRoom(19);
  const objclass2 = new ClassRoom(20);
  const objclass3 = new ClassRoom(34);
  return [objclass1, objclass2, objclass3];
}
