export default function ISOtoReadable(ISOdate) {
  return new Date(ISOdate).toLocaleString("en-GB");
}

