export default function createdInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffe, 0, length);

  if (position >= length) {
    throw Error('Position out of range');
  }
  view.setInt8(position, value);
  return view;
}