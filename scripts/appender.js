var arr = [];
function append(arr, div) {
  //console.log(arr, div);

  arr.forEach(({ title, urlToImage, description, url, content }) => {
    let mainDiv = document.createElement("div");
    mainDiv.id = url;
    mainDiv.addEventListener("click", () => {
      let set = {
        title: title,
        urlToImage: urlToImage,
        content: content,
      };
      localStorage.setItem("obj", JSON.stringify(set));
      window.location.href = "news.html";
    });
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");

    let tit = document.createElement("h1");
    tit.innerHTML = title;
    let descrip = document.createElement("p");
    if (description == null) {
      descrip.innerHTML =
        "Description not available- Sorry for the inconvenience";
    } else {
      descrip.innerHTML = description;
    }

    let image = document.createElement("img");
    if (urlToImage == null) {
      image.src =
        "http://mapandan.gov.ph/wp-content/uploads/2018/03/no_image.jpg";
    } else {
      image.src = urlToImage;
    }
    div1.append(tit);
    div2.append(image);
    div3.append(descrip);
    mainDiv.append(div1, div2, div3);
    div.append(mainDiv);
  });
}
export { append, arr };
