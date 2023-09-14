const students = [
  {
    name: "david",
    adm: "hjefgc",
    phone: "01222",
  },
  {
    name: "gitu",
    adm: "ffcvxc",
    phone: "55665",
  },
  {
    name: "Simon",
    adm: "hdfd",
    phone: "47742",
  },
];

console.log(students.map((student) => student));
console.log(
  students.filter((std) => std.name !== "david").map((std) => std.name)
);
