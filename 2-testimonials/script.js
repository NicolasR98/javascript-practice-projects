const cardImg = document.querySelector(".img-profile");
const cardName = document.querySelector(".name");
const cardProfession = document.querySelector(".profession");
const cardHeading = document.querySelector(".heading-card");
const cardText = document.querySelector(".text-card");

const btnNext = document.getElementById("next");

const persons = [
  {
    name: "Jonh Doe",
    profession: "Back End Dev.",
    heading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ullamcorper nulla facilisi aliquam pellentesque.adipiscing.",
    text:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ullamcorper nulla facilisi aliquam pellentesque. Id gravida sagittis amet semper vitae nec vulputate. Justo varius tristique at nisl gravida. Pellentesque est at in et viverra tristique sit ipsum mauris.”",
  },
  {
    name: "Jack Black",
    profession: "Tester",
    heading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ullamcorper nulla facilisi aliquam pellentesque.adipiscing.",
    text:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ullamcorper nulla facilisi aliquam pellentesque. Id gravida sagittis amet semper vitae nec vulputate. Justo varius tristique at nisl gravida. Pellentesque est at in et viverra tristique sit ipsum mauris.”",
  },
  {
    name: "Mac Demarco",
    profession: "Client",
    heading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ullamcorper nulla facilisi aliquam pellentesque.adipiscing.",
    text:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ullamcorper nulla facilisi aliquam pellentesque. Id gravida sagittis amet semper vitae nec vulputate. Justo varius tristique at nisl gravida. Pellentesque est at in et viverra tristique sit ipsum mauris.”",
  },
];

