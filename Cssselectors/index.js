document.getElementById("content").onclick = e => {
    console.log(e);
    content();
};

function content() {
    document.getElementById("app").innerHTML = ``;
    document.getElementById("app").innerHTML = `
  <div id ="page">
    <h1>Heading Title</h1>
  
    <h2>Subheading Title</h2>
    <h2>Subheading Title</h2>
    <h1>Heading Title</h1>
    <h2>Subheading Title</h2>
    <h1>Heading Title</h1>
  </div>
  `;
}
