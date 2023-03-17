import { getPodcasts } from "./api";

let podCastContainer = document.querySelector(".podlist");



let i = 0;

export async function createHtml() {
  const podCasts = await getPodcasts();
  console.log(podCasts);
  podCasts.programs.forEach((podcast) => {
    i++;
    const innerArticle = createInnerArticle();
    

    createImg();
    

    const textDiv = createTextDiv();
    //const imgPlacement = createImg();
    //section__article-innerarticle
    //section__article-div

    createHeader();
    createP();
    createLink();

    function createInnerArticle() {
      const innerArticle = document.createElement("article");
      innerArticle.setAttribute("class", "podlist__podcast");
      innerArticle.setAttribute("tabindex", "1");
      podCastContainer?.appendChild(innerArticle);
      return innerArticle;
    }

    function createTextDiv() {
      const textDiv = document.createElement("div");
      textDiv.setAttribute("class", "podlist__podcast-content");
      innerArticle.appendChild(textDiv);
      return textDiv;
    }

    function createLink() {
      const linkPlacement = document.createElement("a");
      const linkText = document.createTextNode("Lyssna här");
      linkPlacement.setAttribute("href", podCasts.programs[i].programurl);
      linkPlacement.setAttribute("tabindex", "1");
      linkPlacement.appendChild(linkText);
      textDiv.appendChild(linkPlacement);
    }
    function createImg() {
      const imgPlacement = document.createElement("IMG");
      imgPlacement.setAttribute("src", podCasts.programs[i].socialimage);
      imgPlacement.setAttribute("width", "100");
      imgPlacement.setAttribute("height", "100");
      innerArticle.appendChild(imgPlacement);
      return imgPlacement;
    }

    function createP() {
      const descPlacement = document.createElement("p");
      const desc = document.createTextNode(podCasts.programs[i].description);
      descPlacement.appendChild(desc);
      textDiv.appendChild(descPlacement);
    }

    function createHeader() {
      const headerPlacement = document.createElement("h2");
      const programName = document.createTextNode(podCasts.programs[i].name);
      headerPlacement.appendChild(programName);
      textDiv.appendChild(headerPlacement);
    }
  });
  
}

export default createHtml;

// 9 articles but only 8 podcasts

/*

  function createInnerArticle () {
    const innerArticle = document.createElement("article");
    innerArticle.classList.add("section__article-innerarticle");
    podCastContainer?.appendChild(innerArticle);
    return innerArticle;
  }

  function createTextDiv() {
    const textDiv = document.createElement("div");
    textDiv.classList.add("section__article-div");
    
  }


*/