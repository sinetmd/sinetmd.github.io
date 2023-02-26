// // // Define the routes
// const routes = {
//   "": "hero",
//   "#hero": "hero",
//   "#servicii": "servicii",
//   "#portofoliu": "portofoliu",
//   "#contact": "contact",
// };

// const urlLocationHandler = async () => {
//   const location = window.location.pathname;
//   if (location.length === 0) {
//     location = "/";
//   }

//   const route = routes[location] || "404";
//   const html = await fetch(route.pathname).then((response) => response.text());
//   document.getElementById("content").innerHTML = html;
//   document.title = route.title;
//   document.querySelector("meta[name='description']").setAttribute("content");
// };
